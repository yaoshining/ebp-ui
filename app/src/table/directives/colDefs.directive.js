/**
 * Created by yao on 15/12/21.
 */
function linkFunc(scope) {
	scope.settings = scope.settings || {};
	let ebpTable = scope.$ebpTable || scope.settings;
	ebpTable.colDefs = scope.$colDefs;
}

function EbpTableColDefsDirectiveFactory() {
	let directive = {
		restrict: 'AE',
		scope: false,
		link: linkFunc,
		controller: EbpTableColDefsController,
		controllerAs: '$colDefs'
	};

	return directive;
}

class EbpTableColDefsController {
	constructor() {
		this.cols = [];
	}

	get fieldCols() {
		return this.cols.filter((col) => col.type === 'field');
	}
}

export default EbpTableColDefsDirectiveFactory;