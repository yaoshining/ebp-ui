/**
 * Created by yao on 15/12/21.
 */
import {directiveNames} from '../config';

function linkFunc(scope, elem, attrs, colDefs) {
	let column = scope.$col;
	let fieldName = attrs[directiveNames.ebpTableCol];
	let sortable = attrs.sortable === ''?true:attrs.sortable;
	let title = attrs.title || '';
	column.name = fieldName;
	column.title = title;
	column.type = fieldName?'field':'custom';
	column.dataType = attrs.type || 'string';
	column.sortable = sortable;
	if(column.type === 'custom') {
		column.tpl = elem.html();
	}
	colDefs.cols.push(column);
}

function EbpTableColDirectiveFactory() {
    let directive = {
        restrict: 'AE',
        scope: true,
        require: `^${directiveNames.ebpTableColDefs}`,
        link: linkFunc,
        controller: EbpTableColumnController,
        controllerAs: '$col'
    };

    return directive;
}

class EbpTableColumnController {
	constructor() {

	}

	toJSON() {
		let jsonObj = angular.copy(this);
		delete jsonObj.tpl;
		return jsonObj;
	}

}

export default EbpTableColDirectiveFactory;