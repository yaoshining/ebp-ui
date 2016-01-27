/**
 * Created by yao on 15/12/31.
 */
import {directiveNames} from '../config';

function EbpListViewCustom($templateCache) {
	'ngInject';
	function linkFunc(scope, elem, attrs, listView) {
		listView.settings = listView.settings || {};
		const customViews = listView.settings.customViews = listView.settings.customViews || [];
		let name = attrs[directiveNames.ebpListviewCustom];
		let template = elem.html().trim();
		let templateUrl = scope.$eval(attrs.templateUrl);
		if(name) {
			if(template) {
				templateUrl = `ebp.listView.${name}.tpl.html`;
				$templateCache.put(templateUrl, template);
			}

			customViews[name] = {templateUrl};
		}
	    elem.remove();
	}

    let directive = {
        restrict: 'AE',
        require: `^${directiveNames.ebpListview}`,
        link: linkFunc
    };

    return directive;
}

export default EbpListViewCustom;