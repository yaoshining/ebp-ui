/**
 * Created by yao on 15/12/16.
 */
function bindData(scope, ebpList, ngModel) {
    if(!ngModel) {
        return;
    }
    scope.$watch(() => {
        return ngModel.$modelValue;
    }, (modelValue) => {
        ebpList.data = modelValue;
    });
}

function EbpListViewDirectiveFactory() {
    'ngInject';
    function compileFunc(tElem) {
        tElem.append(angular.element('<div>').attr({
            'ng-include': '$ebpList.viewTpl'
        }).addClass('ebp-listview-container'));
        return {
            post: (scope, elem, attrs, vm) => {
                elem.addClass('ebp-listview');
                const ngModel = vm[0];
                const $ebpList = scope.$ebpList;           
                bindData(scope, $ebpList, ngModel);
            }
        };
    }

    let directive = {
        restrict: 'AE',
        compile: compileFunc,
        scope: true,
        require: ['?ngModel'],
        controller: ListViewController,
        controllerAs: '$ebpList'
    };

    return directive;
}

function transformRequest(data, headers) {
    let fd = new FormData();
    angular.forEach(data, function(value, key) {
        if (value instanceof FileList) {
            if (value.length == 1) {
                fd.append(key, value[0]);
            } else {
                angular.forEach(value, function(file, index) {
                    fd.append(key + '_' + index, file);
                });
            }
        } else {
            fd.append(key, value);
        }
    });
    headers()['Content-Type'] = undefined;
    return fd;
}

class ListViewController {
    constructor($scope, $element, $attrs, $window, $resource) {
        'ngInject';
        const datasource = $scope.$eval($attrs.datasource);
        this.datasource = datasource;
        this.$el = $element;
        this.view = $attrs.view || 'table';
        this.data = [];
        this.items = [];
        this.settings = {
            customViews: [],
            table: {}
        };
        this.$tableView = {};
        if(angular.isObject(datasource)) {
            let {url, params} = datasource;
            this.Resource = $resource(url, params, {
                query: {
                    cache: true,
                    method: 'GET',
                    isArray: true
                },
                save: {
                    method: 'POST',
                    transformRequest
                },
                update: {
                    method: 'POST',
                    transformRequest
                }
            });
        }
        this.refresh = () => {
            let pager = $scope.$ebpPager;
            if(pager) {
                pager.refresh();
            }
        };
        this.remove = (...items) => {
            if(!$window.confirm('确定删除吗?')) {
                return;
            }
            angular.forEach(items, (item) => {
                if(angular.isFunction(item.$remove)) {
                    item.$remove(() => {

                    }, () => {
                        //only for test, should remove this line in the future.
                        let index = this.data.indexOf(item);
                        this.data.splice(index, 1);
                    });
                } else {
                    let index = this.data.indexOf(item);
                    this.data.splice(index, 1);
                }
            });
        };

        this.sync = () => {
            if(this.view === 'table') {
                this.$tableView.sync();
            }
            angular.forEach(this.items, (item) => {
                if(item.isDirty) {
                    let data = angular.extend({}, item.$model);
                    //data.imageData = item.uploader.imageData;
                    if(item.uploader.imageFile) {
                        data.imageData = item.uploader.imageFile.file;
                    }
                    if(item.isNew) {
                        let newModel = new this.Resource(data);
                        newModel.$save(() => {
                            if(item.uploader.imageFile) {
                                newModel.img = item.uploader.imageFile.url; //change URL to uploaded URL
                            }
                            item.synchronized();
                            let i = _.findIndex(this.data, (e) => {
                                return e === item.$model;
                            });
                            this.data.splice(i, 1, newModel);
                        }, () => {
                            if(item.uploader.imageFile) {
                                newModel.img = item.uploader.imageFile.url; //change URL to uploaded URL
                            }
                            item.synchronized();
                            let i = _.findIndex(this.data, (e) => {
                                return e === item.$model;
                            });
                            this.data.splice(i, 1, newModel);
                        });
                    } else {
                        this.Resource.update(data, () => {
                            if(item.uploader.imageFile) {
                                item.$model.img = item.uploader.imageFile.url; //change URL to uploaded URL
                            }
                            item.synchronized();
                        }, () => {
                            if(item.uploader.imageFile) {
                                item.$model.img = item.uploader.imageFile.url; //change URL to uploaded URL
                            }
                            item.synchronized();
                        });
                    }
                }
            });
        };
    }

    get viewTpl() {
        let tpl = `src/listview/templates/${this.view}.tpl.html`;
        const customViews = this.settings.customViews;
        if(customViews[this.view]) {
            tpl = customViews[this.view].templateUrl;
        }
        return tpl;
    }

    changeView(view) {
        this.view = view;
    }

    add() {
        if(this.view === 'table') {
            this.$tableView.add();
        } else {
            this.data.unshift({});
        }
    }

}

export default EbpListViewDirectiveFactory;
