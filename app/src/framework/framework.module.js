/**
 * Created by yao on 15/12/11.
 */
import * as config from './config';

import EbpFrameworkDirectiveFactory from './directives/ebpFramework.directive';
import EbpNavbarDirectiveFactory from './directives/ebpNavbar.directive';

let frameworkModule = angular.module('ebpUI.framework', []);
frameworkModule.directive(config.directiveNames.ebpFramework, EbpFrameworkDirectiveFactory)
               .directive(config.directiveNames.ebpNavbar, EbpNavbarDirectiveFactory)
               .run();

export default frameworkModule;