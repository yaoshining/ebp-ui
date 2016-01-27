/**
 * Created by yao on 16/1/12.
 */
function linkFunc(scope, elem) {
	const $col = scope.col;
	const $ebpTable = scope.$ebpTable;
	elem.on('click', () => {
		if($col.sortable) {
			const sortingOrder = ['asc', 'desc'];
			$col.sorting = sortingOrder[sortingOrder.indexOf($col.sorting) + 1];
			$ebpTable.sortBy($col);
		}
		scope.$apply();
	});
}

function ColumnHeaderDirectiveFactory() {

    let directive = {
        restrict: 'AE',
        link: linkFunc
    };

    return directive;
}

export default ColumnHeaderDirectiveFactory;