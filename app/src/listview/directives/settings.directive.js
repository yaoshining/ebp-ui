/**
 * Created by yao on 15/12/25.
 */
import {directiveNames} from '../config';

function linkFunc(scope, elem, attrs, listView) {
    let settingName = attrs[directiveNames.ebpListviewSettings];
    listView.settings = listView.settings || {};
    listView.settings[settingName] = scope.settings;
    let attrSettings = angular.extend({}, attrs);
    delete attrSettings.$$element;
    delete attrSettings.$attr;
    delete attrSettings[directiveNames.ebpListviewSettings];
    angular.forEach(attrSettings, (v, k) => {
        scope.settings[k] = scope.$eval(v);
    });
    elem.remove();
    scope.$destroy();
}

function EbpListViewSettingsDirectiveFactory() {
    let directive = {
        restrict: 'AE',
        link: linkFunc,
        scope: true,
        require: `^${directiveNames.ebpListview}`,
        controller: EbpListViewSettingsController,
        controllerAs: '$ebpListSettings'
    };

    return directive;
}

class EbpListViewSettingsController {
	constructor($scope) {
		'ngInject';
		$scope.settings = this;
	}
}

export default EbpListViewSettingsDirectiveFactory;