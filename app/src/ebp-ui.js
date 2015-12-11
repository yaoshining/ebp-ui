/**
 * Created by yao on 15/12/4.
 */
import layouts from './layouts/layouts.module';
import framework from './framework/framework.module';
var ebpUI = angular.module('ebp-ui', [
    layouts.name,
    framework.name
]);

export default ebpUI;
