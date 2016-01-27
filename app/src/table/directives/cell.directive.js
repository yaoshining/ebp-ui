/**
 * Created by yao on 15/12/29.
 */
import {directiveNames} from '../config';
function EbpTableCellDirectiveFactory($compile, $interpolate) {
	'ngInject';
	function linkFunc(scope, elem, attrs, entry) {
	    let col = scope.col;
	    let cell = scope.$ebpTableCell;
	    let table = scope.$ebpTable;
	    entry.cells.push(cell);
	    if(col.type === 'custom') {
	    	let customElem = angular.element('<div>').html(col.tpl);
	    	elem.html(customElem);
	    	$compile(customElem)(scope);
	    }
	    if(entry.isNew) {
            let firstFieldName = table.colDefs.fieldCols[0].name;
            if(col.name === firstFieldName) {
            	cell.editing = true;
            }
        }
	}

    let directive = {
        restrict: 'C',
        link: linkFunc,
        require: `^${directiveNames.ebpTableEntry}`,
        controller: TableCellController,
        controllerAs: '$ebpTableCell'
    };

    return directive;
}

class TableCellController {

	constructor($scope) {
		'ngInject';
		let cellModel = $scope.item;
		let col = $scope.col;
		let oldVal;
		this.editing = false;

		this.edit = () => {
			this.editing = true;
		};

		this._onFocus = () => {
			if(this.isDirty) {
				return;
			}
			oldVal = cellModel[col.name];
		};

		this._onBlur = () => {
			this.isDirty = (oldVal !== cellModel[col.name]);
		};
	}

}

export default EbpTableCellDirectiveFactory;