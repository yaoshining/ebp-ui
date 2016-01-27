/**
 * Created by yao on 15/12/4.
 */
import layouts from './layouts/layouts.module';
import framework from './framework/framework.module';
import listview from './listview/listview.module';
import table from './table/table.module';
import taskboard from './taskboard/taskboard.module';
import pagination from './pagination/pagination.module';
import utils from './utils/utils.model';

var ebpUI = angular.module('ebp-ui', [
    layouts.name,
    framework.name,
    listview.name,
    table.name,
    taskboard.name,
    pagination.name,
    utils.name
]);

export default ebpUI;
