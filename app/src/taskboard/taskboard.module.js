/**
 * Created by yao on 16/1/2.
 */
import * as config from './config';

import TaskboardDirectiveFactory from './directives/taskboard.directive';

let taskBoardModule = angular.module('ebpUI.taskboard', ['ui.sortable']);
taskBoardModule.directive(config.directiveNames.ebpTaskboard, TaskboardDirectiveFactory);
export default taskBoardModule;