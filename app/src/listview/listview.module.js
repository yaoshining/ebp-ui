/**
 * Created by yao on 15/12/16.
 */
import * as config from './config';

import EbpListViewDirectiveFactory from './directives/ebpListview.directive';
import ToolbarDirectiveFactory from './directives/toolbar.directive';
import SettingsDirectiveFactory from './directives/settings.directive';
import GridViewDirectiveFactory from './directives/gridview.directive';
import CustomViewDirectiveFactory from './directives/customeview.directive';
import ItemDirectiveFactory from './directives/item.directive';
import OverlayDirectiveFactory from './directives/overlay.directive';

let listViewModule = angular.module('ebpUI.listview', ['ngResource']);

listViewModule.directive(config.directiveNames.ebpListviewToolbar, ToolbarDirectiveFactory)
              .directive(config.directiveNames.ebpListview, EbpListViewDirectiveFactory)
              .directive(config.directiveNames.ebpListviewSettings, SettingsDirectiveFactory)
              .directive(config.directiveNames.ebpListviewGrid, GridViewDirectiveFactory)
              .directive(config.directiveNames.ebpListviewItem, ItemDirectiveFactory)
              .directive(config.directiveNames.ebpListviewOverlay, OverlayDirectiveFactory)
              .directive(config.directiveNames.ebpListviewCustom, CustomViewDirectiveFactory);

export default listViewModule;