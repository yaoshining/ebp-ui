/**
 * Created by yao on 15/12/16.
 */
import {directiveNames} from '../config.js';

function linkFunc(scope, elem) {
    elem.addClass('ebp-listview-toolbar');
}

function EbpListViewToolbarDirectiveFactory() {
    let directive = {
        restrict: 'AE',
        require: `^${directiveNames.ebpListview}`,
        scope: false,
        link: linkFunc
    };

    return directive;
}

export default EbpListViewToolbarDirectiveFactory;