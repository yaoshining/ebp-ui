/**
 * Created by yao on 15/12/13.
 */
function EbpSidebarDirectiveFactory() {
    function linkFunc(scope, elem, attrs) {
        attrs.$observe('layout', function(layout){
            if(layout){
                elem.addClass(`ebp-sidebar-${layout}`);
            }

        });
        elem.addClass('ebp-sidebar');
    }
    let directive = {
        restrict: 'AE',
        link: linkFunc
    };

    return directive;
}

export default EbpSidebarDirectiveFactory;