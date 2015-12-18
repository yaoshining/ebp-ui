/**
 * Created by yao on 15/12/13.
 */
function EbpFrameworkContainerDirectiveFactory() {
    function linkFunc(scope, elem) {
        elem.addClass('ebp-framework-container');
    }
    let directive = {
        restrict: 'AE',
        link: linkFunc
    };

    return directive;
}

export default EbpFrameworkContainerDirectiveFactory;