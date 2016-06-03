/**
 * Created by yao on 15/12/17.
 */
import {directiveNames} from "../config";
function bindData(scope, ebpTable, ngModel) {
    if(!ngModel) {
        return;
    }
    scope.$watch(() => {
        return ngModel.$modelValue;
    }, (modelValue) => {
        if(angular.isArray(modelValue)) {
            ebpTable.data = modelValue;
        }
    });
}

function linkFunc(scope, elem, attrs, vm, trans) {
    elem.addClass('ebp-table');
	let ngModel = vm[0];
	let $ebpTable = scope.$ebpTable;
	bindData(scope, $ebpTable, ngModel);
	trans(scope, () => {	
	});
    scope.$eval(`${attrs[directiveNames.ebpTable]}=$ebpTable`);
}

function EbpTableDirectiveFactory() {
    let directive = {
        restrict: 'AE',
        templateUrl: 'src/table/templates/ebpTable.tpl.html',
        scope: true,
        require: ['?ngModel'],
        transclude: true,
        link: linkFunc,
        controller: EbpTableController,
        controllerAs: '$ebpTable'
    };

    return directive;
}

class EbpTableController {
	constructor($scope, $attrs, $resource, $injector, $window) {
        'ngInject';
        let settings = $scope.$eval($attrs.settings);
        let datasource = $scope.$eval($attrs.datasource);
        let pager = $scope.$eval($attrs.ebpPager);
        console.log(pager);
        angular.extend(this, settings);
		this.data = [];
        this.$entries = [];
        this.addHelpers = [];
        if(angular.isObject(datasource)) {
            let {url, params} = datasource;
            this.Resource = $resource(url, params, {
                query: {
                    cache: true,
                    method: 'GET',
                    isArray: true
                },
                update: {
                    method: 'PUT'
                }
            });
        }
        if(pager) {
            $scope.$ebpPager = pager;
        }
        this.sortBy = (col) => {
            if($scope.$ebpPager) {
                $scope.$ebpPager.sort(col.name, col.sorting);
            }
        };

        this.sync = () => {
            angular.forEach(this.$entries, (entry) => {
                if(entry.isDirty) {
                    if(entry.isNew) {
                        let newModel = new this.Resource(entry.$model);
                        newModel.$save(() => {
                            entry.synchronized();
                            let i = _.findIndex(this.data, (e) => {
                                return e === entry.$model;
                            });
                            this.data.splice(i, 1, newModel);
                        }, () => {
                            //only for test, should remove this line in the future.
                            entry.synchronized();
                            let i = _.findIndex(this.data, (e) => {
                                return e === entry.$model;
                            });
                            this.data.splice(i, 1, newModel);
                        });
                    } else {
                        entry.$model.$update(() => {
                            entry.synchronized();
                        }, () => {
                            //only for test, should remove this line in the future.
                            entry.synchronized();
                        });
                    }
                }
            });
        };

        this.remove = (...items) => {
            if(items.length === 0) {
                items = this.checkedItems;
            }
            if(!$window.confirm('确定删除吗?')) {
                return;
            }
            angular.forEach(items, (item) => {
                if(angular.isFunction(item.$remove)) {
                    item.$remove(() => {

                    }, () => {
                        //only for test, should remove this line in the future.
                        let index = this.data.indexOf(item);
                        this.$entries.splice(index, 1);
                        this.data.splice(index, 1);
                    });
                } else {
                    let index = this.data.indexOf(item);
                    this.$entries.splice(index, 1);
                    this.data.splice(index, 1);
                }
            });
        };
	}

    get checkAll() {
        let checkAll = !!this.$entries.length;
        angular.forEach(this.$entries, (e) => {
            if(!e.$checked) {
                checkAll = false;
            }
        });
        angular.forEach(this.addHelpers, (e) => {
            if(!e.$checked) {
                checkAll = false;
            }
        });
        return checkAll;
    }

    set checkAll(state) {
        angular.forEach(this.$entries, (e) => {
            e.$checked = state;
        });
        angular.forEach(this.addHelpers, (e) => {
            e.$checked = state;
        });
    }

    get checkedItems() {
        let checkedItems = [];
        angular.forEach(this.$entries, (e) => {
            if(e.$checked) {
                checkedItems.push(e.$model);
            }
        });
        return checkedItems;
    }

    add() {
        this.data.unshift({});
    }
    
}

export default EbpTableDirectiveFactory;