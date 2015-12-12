/**
 * Created by yao on 15/12/11.
 */
function EbpFrameworkDirectiveFactory() {
    function linkFunc(scope, elem, attrs) {
        let themeName = '';
        attrs.$observe('theme', (theme) => {
            elem.removeClass(themeName);
            if(theme){
                elem.addClass(themeName = `ebp-framework-${theme}`);
            }
        });
        elem.addClass('ebp-framework');
    }
    let directive = {
        restrict: 'AE',
        scope: true,
        link: linkFunc
    };

    return directive;
}

export default EbpFrameworkDirectiveFactory;