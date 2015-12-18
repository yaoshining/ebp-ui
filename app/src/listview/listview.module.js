/**
 * Created by yao on 15/12/16.
 */
import * as config from './config';

import EbpListViewDirectiveFactory from './directives/ebpListview.directive';
import ToolbarDirectiveFactory from './directives/toolbar.directive';

let listViewModule = angular.module('ebpUI.listview', []);

listViewModule.directive(config.directiveNames.ebpListviewToolbar, ToolbarDirectiveFactory)
              .directive(config.directiveNames.ebpListview, EbpListViewDirectiveFactory);

export default listViewModule;