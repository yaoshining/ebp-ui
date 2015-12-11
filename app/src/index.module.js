/**
 * Created by yao
 */
import ebpUI from './ebp-ui';
import routesConfig from './index.routes';

angular.module('ebpUIDemo',['ui.router', ebpUI.name])
    .config(routesConfig)
    .run();
