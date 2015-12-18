/**
 * Created by yao on 15/12/4.
 */
import layouts from './layouts/layouts.module';
import framework from './framework/framework.module';
import listview from './listview/listview.module';
import table from './table/table.module';

var ebpUI = angular.module('ebp-ui', [
    layouts.name,
    framework.name,
    listview.name,
    table.name
]);

export default ebpUI;
