/**
 * Created by yao on 15/12/17.
 */
import * as config from './config';

import EbpTableDirectiveFactory from './directives/ebpTable.directive';
import EbpTableColDefsDirectiveFactory from './directives/colDefs.directive';
import EbpTableColDirectiveFactory from './directives/column.directive';
import EbpTableCheckColDirectiveFactory from './directives/checkColumn.directive';
import TableCellDirectiveFactory from './directives/cell.directive';
import TableEntryDirectiveFactory from './directives/entry.directive';
import ColumnHeaderDirectiveFactory from './directives/columnheader.directive';

let tableModule = angular.module('ebpUI.table', ['ngSanitize', 'ngResource']);
tableModule.directive(config.directiveNames.ebpTable, EbpTableDirectiveFactory)
           .directive(config.directiveNames.ebpTableColDefs, EbpTableColDefsDirectiveFactory)
           .directive(config.directiveNames.ebpTableCol, EbpTableColDirectiveFactory)
           .directive(config.directiveNames.ebpTableCheckCol, EbpTableCheckColDirectiveFactory)
           .directive(config.directiveNames.ebpTableEntry, TableEntryDirectiveFactory)
           .directive(config.directiveNames.ebpTableColumnheader, ColumnHeaderDirectiveFactory)
           .directive('tablecell', TableCellDirectiveFactory);


export default tableModule;