/**
 * Created by yao on 15/12/24.
 */
import {directiveNames} from '../config';

function linkFunc(scope, elem, attrs, colDefs) {
	let checkCol = scope.$checkCol;
	colDefs.cols.push(checkCol);
	checkCol.type = 'checkbox';
}

function EbpTableCheckColDirectiveFactory() {
	let directive = {
		restrict: 'AE',
		scope: true,
        require: `^${directiveNames.ebpTableColDefs}`,
        link: linkFunc,
        controller: EbpTableCheckColController,
        controllerAs: '$checkCol'
	};

	return directive;
}

class EbpTableCheckColController {
	constructor() {
		
	}
}

export default EbpTableCheckColDirectiveFactory;