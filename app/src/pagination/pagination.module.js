/**
 * Created by yao on 16/1/8.
 */
import * as config from './config';

import SettingDirectiveFactory from './directives/setting.directive';

let paginationModule = angular.module('ebpUI.pagination', []);

paginationModule.directive(config.directiveNames.ebpPaginationSetting, SettingDirectiveFactory);

export default paginationModule;