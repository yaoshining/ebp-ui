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
            countUrl: '/data/table/totalcount',
            data: this.listData,
            datasource: {
                //url: '/data/list',
                url: '/data/table/:maxSize/:pageNo',
                params: {
                    id: '@name'
                }
            },
            events: {
                click: () => {
                    alert('点击');
                }
            }
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
        return [];
    }
}

export default ComponentsController;