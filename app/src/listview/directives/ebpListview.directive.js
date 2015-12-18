/**
 * Created by yao on 15/12/16.
 */

function compileFunc(tElem) {
    tElem.append(angular.element('<div>').attr({
        'ng-include': '$ebpList.viewTpl'
    }));
    return {
        post: (scope, elem) => {
            elem.addClass('ebp-listview');
        }
    };
}

function EbpListViewDirectiveFactory() {
    let directive = {
        restrict: 'AE',
        compile: compileFunc,
        scope: true,
        controller: ListViewController,
        controllerAs: '$ebpList'
    };

    return directive;
}

class ListViewController {
    constructor($element, $attrs) {
        'ngInject';
        this.$el = $element;
        this.view = $attrs.view || 'table';
    }

    initToolbar(toolbar) {
        this.$el.prepend(toolbar);
    }

    get viewTpl() {
        return `src/listview/templates/${this.view}.tpl.html`;
    }

    changeView(view) {
        this.view = view;
    }
}

export default EbpListViewDirectiveFactory;
