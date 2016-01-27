/**
 * Created by yao on 16/1/26.
 */
import {directiveNames} from '../config';

function EbpListViewOverlayDirectiveFactory() {

    function linkFunc(scope, elem, attrs, settings) {
        settings.overlayTpl = elem.html();
    }

    let directive = {
        restrict: 'AE',
        require: `^${directiveNames.ebpListviewSettings}`,
        link: linkFunc
    };

    return directive;
}

export default EbpListViewOverlayDirectiveFactory;