/**
 * Created by yao on 15/12/14.
 */
function EbpUIContentDirectiveFactory() {
    function linkFunc(scope, elem) {
        elem.addClass('ebp-ui-content');
    }
    let directive = {
        restrict: 'AE',
        link: linkFunc
    };

    return directive;
}

export default EbpUIContentDirectiveFactory;