/**
 * Created by yao on 15/12/14.
 */
class ComponentsController {
    constructor($scope) {
        'ngInject';
        $scope.sidebar = {
            data: this.sidebarData
        };

        $scope.listview = {
            data: this.sidebarData
        };

        $scope.alert = (text) => {
            alert(text);
        };
    }

    get sidebarData() {
        return [{
            iconClass: 'glyphicon glyphicon-list',
            title: '列表',
            sref: 'framework.intro'
        },{
            iconClass: 'glyphicon glyphicon-tasks',
            title: '任务',
            sref: 'framework.components'
        },{
            iconClass: 'glyphicon glyphicon-comment',
            title: '聊天',
            sref: 'framework.intro'
        }];
    }

    get listData() {
        return [{
            name: '系统管理员',
            code: '00001',
            index: 51
        },{
            name: '部门主管',
            code: '00005',
            index: 6
        },{
            name: '人事经理',
            code: '00010',
            index: 15
        },{
            name: '副院长',
            code: '00015',
            index: 1
        }];
    }
}

export default ComponentsController;