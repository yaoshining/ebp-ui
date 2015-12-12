/**
 * Created by yao on 15/12/11.
 */
function EbpNavbarDirectiveFactory() {
    function linkFunc() {

    }
    let directive = {
        restrict: 'AE',
        link: linkFunc
    };
    return directive;
}

export default EbpNavbarDirectiveFactory;
