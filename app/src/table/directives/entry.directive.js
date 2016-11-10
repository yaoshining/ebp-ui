/**
 * Created by yao on 16/1/7.
 */

import {directiveNames} from '../config';

function EbpTableEntryDirectiveFactory() {

    function linkFunc(scope, elem, attrs, table) {
        let entry = scope.$ebpEntry;
        table.$entries.push(entry);
    }

    let directive = {
        restrict: 'AE',
        require: `^${directiveNames.ebpTable}`,
        link: linkFunc,
        controller: EbpTableEntryController,
        controllerAs: '$ebpEntry'
    };

    return directive;
}

class EbpTableEntryController {

	constructor($scope) {
		'ngInject';
		let $table = $scope.$ebpTable;
		this.$model = $scope.item;
		this.$checked = false;
        this.cells = [];
        this.remove = () => {
            $table.remove(this.$model);
        };

        Object.defineProperties(this, {
            isNew: {
                get: () => this.$model.$isNew
            }
        });
	}

    edit() {
        angular.forEach(this.cells, (cell) => {
            cell.editing = true;
        });
    }

    get isDirty() {
        return _.findIndex(this.cells, (cell) => {
            return cell.isDirty;
        }) > -1;
    }

    synchronized() {
        angular.forEach(this.cells, (cell) => {
            delete cell.isDirty;
        });
    }
}

export default EbpTableEntryDirectiveFactory;