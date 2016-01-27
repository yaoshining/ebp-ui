/**
 * Created by yao on 15/12/31.
 */
import {directiveNames} from '../config';

const listViewGridClassName = 'ebp-listview-grid';
const listViewItemClassName = '.ebp-listview-item';

function linkFunc(scope, elem) {
    elem.addClass(listViewGridClassName);
}

function EbpGridViewDirectiveFactory() {
    let directive = {
        restrict: 'AE',
        link: linkFunc,
        require: `^${directiveNames.ebpListview}`,
        controller: EbpGridViewController,
        controllerAs: '$grid'
    };

    return directive;
}

class EbpGridViewController {
	constructor($element, $scope, $window, $attrs) {
		'ngInject';
		let settings = $scope.$eval($attrs.settings);
		angular.extend(this, settings);
		this.$el = $element;
		angular.element($window).on('resize', () => {
			$scope.$digest();
		});
	}

	get itemHeight() {
		return this.$el.find(listViewItemClassName).width();
	}
}

export default EbpGridViewDirectiveFactory;