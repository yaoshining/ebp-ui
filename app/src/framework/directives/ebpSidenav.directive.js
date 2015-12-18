/**
 * Created by yao on 15/12/13.
 */
function bindData(scope, sideNav, ngModel) {
    if(!ngModel) {
        return;
    }
    scope.$watch(() => {
        return ngModel.$modelValue;
    }, (modelValue) => {
        sideNav.navs = modelValue || [];
    });
}

function linkFunc(scope, elem, attrs, vm) {
    let sideNav = scope.$ebpSideNav;
    let themeName = '';
    let ngModel = vm[0];
    attrs.$observe('theme', (theme) => {
        elem.removeClass(themeName);
        if(theme){
            themeName = `ebp-sidenav-${theme}`;
            elem.addClass(themeName);
        }
    });
    bindData(scope, sideNav, ngModel);
    elem.addClass('ebp-sidenav-a');
}

function EbpSidenavDirectiveFactory() {
    let directive = {
        restrict: 'A',
        link: linkFunc,
        require: ['?ngModel'],
        replace: true,
        transclude: true,
        controller: SideNavController,
        controllerAs: '$ebpSideNav',
        templateUrl: 'src/framework/templates/ebp_sidenav.tpl.html'
    };
    return directive;
}

class SideNavController {
    constructor() {
        this.navs = [];
    }
}

export default EbpSidenavDirectiveFactory;