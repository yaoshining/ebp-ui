/**
 * Created by yao on 15/12/17.
 */
import * as config from './config';

import EbpTableDirectiveFactory from './directives/ebpTable.directive';

let tableModule = angular.module('ebpUI.table', []);
tableModule.directive(config.directiveNames.ebpTable, EbpTableDirectiveFactory);


export default tableModule;