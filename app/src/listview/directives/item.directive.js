/**
 * Created by yao on 16/1/19.
 */
function ListViewItemDirectiveFactory($compile) {
    'ngInject';
    function linkFunc(scope, elem) {
        let $item = scope.$ebpListItem;
        let $list = scope.$ebpList;
        let $grid = scope.$grid;
        let titleElem = elem.find('.ebp-title');
        let overlayElem = elem.find('.ebp-overlay');
        elem.addClass('ebp-listview-item');
        $list.items.push($item);
        if($item.isNew) {
            $list.editing = true;
            titleElem[0].contentEditable = true;
            titleElem.focus();
        }
        elem.on('click', () => {
            if($list.editing) {
                return;
            }
            scope.$apply(() => {
                scope.$grid.events.click();
            });
        });
        elem.mousedown(function() {
            clearTimeout(this.downTimer);
            this.downTimer = setTimeout(() => {
                scope.$apply(() => {
                    $list.editing = true;
                });
            }, 1000);
        }).mouseup(function() {
            clearTimeout(this.downTimer);
            if(!$list.editing) {
                return;
            }
            $(document).on('click', function editComplete(event) {
                if(!$(event.target).parents().addBack().is('.ebp-listview-item')) {
                    scope.$apply(() => {
                        $list.editing = false;
                        titleElem[0].contentEditable = false;
                        $(document).off('click', editComplete);
                    });
                }
            });
        }).mouseout(function() {
            clearTimeout(this.downTimer);
        });
        titleElem.on('click', function() {
            if(!$list.editing) {
                return;
            }
            this.contentEditable = true;
            titleElem.focus();
        });
        if($grid.overlayTpl) {
            $compile(overlayElem.append($grid.overlayTpl))(scope);
        } else {
            overlayElem.remove();
        }
    }

    let directive = {
        restrict: 'AE',
        link: linkFunc,
        controller: ListViewItemController,
        controllerAs: '$ebpListItem'
    };

    return directive;
}

class ListViewItemController {
    constructor($scope) {
        'ngInject';
        this.$ebpList = $scope.$ebpList;
        this.editing = false;
        this.uploader = {};
        Object.defineProperties(this, {
            $model: {
                get: () => {
                    return $scope.item;
                }
            }
        });
        this.$grid = $scope.$grid;
    }

    get isNew() {
        return !(Object.getPrototypeOf(this.$model) instanceof Object);
    }

    remove($event) {
        $event.stopPropagation();
        this.$ebpList.remove(this.$model);
    }

    get isDirty() {
        return this.uploader.imageFile || this.isTitleDirty;
    }

    _onTitleFocus($event) {
        if(this.isDirty) {
            return;
        }
        this.originTitle = $event.target.innerText;
    }

    _onTitleBlur($event) {
        let newVal = $event.target.innerText;
        this.$model[this.$grid.title] = newVal;
        this.isTitleDirty = (this.originTitle !== this.$model[this.$grid.title]);
    }

    synchronized() {
        this.isTitleDirty = false;
        this.uploader = {};
    }
}

export default ListViewItemDirectiveFactory;