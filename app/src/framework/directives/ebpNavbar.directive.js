/**
 * Created by yao on 15/12/11.
 */
function EbpNavbarDirectiveFactory() {
    function linkFunc(scope, elem) {
        elem.addClass('ebp-navbar');
    }
    let directive = {
        restrict: 'AE',
        link: linkFunc
    };
    return directive;
}

export default EbpNavbarDirectiveFactory;
