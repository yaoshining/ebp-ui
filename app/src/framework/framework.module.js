/**
 * Created by yao on 15/12/11.
 */
import * as config from './config';

import EbpFrameworkDirectiveFactory from './directives/ebpFramework.directive';
import EbpNavbarDirectiveFactory from './directives/ebpNavbar.directive';
import EbpSidebarDirectiveFactory from './directives/ebpSidebar.directive';
import EbpFrameworkContainerDirectiveFactory from './directives/ebpFrameworkContainer.directive';
import EbpSidenavDirectiveFactory from './directives/ebpSidenav.directive';
import EbpUiContentDirectiveFactory from './directives/ebpUiContent.directive';

let frameworkModule = angular.module('ebpUI.framework', []);
frameworkModule.directive(config.directiveNames.ebpFramework, EbpFrameworkDirectiveFactory)
               .directive(config.directiveNames.ebpNavbar, EbpNavbarDirectiveFactory)
               .directive(config.directiveNames.ebpSidebar, EbpSidebarDirectiveFactory)
               .directive(config.directiveNames.ebpFrameworkContainer, EbpFrameworkContainerDirectiveFactory)
               .directive(config.directiveNames.ebpSidenav, EbpSidenavDirectiveFactory)
               .directive(config.directiveNames.ebpUiContent, EbpUiContentDirectiveFactory)
               .run();

export default frameworkModule;