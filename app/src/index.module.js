/**
 * Created by yao
 */
import ebpUI from './ebp-ui';
import routesConfig from './index.routes';
import ComponentsController from './framework/demo/components.controller';

angular.module('ebpUIDemo',['ui.router', ebpUI.name])
    .controller('ComponentsController', ComponentsController)
    .config(routesConfig)
    .run();
