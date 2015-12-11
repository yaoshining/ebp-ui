/**
 * Created by yao on 15/12/11.
 */

function routesConfig($stateProvider,$urlRouterProvider) {
    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'src/main/main.html'
    }).state('layout', {
        url: '/layout'
    }).state('layout.intro', {
        url: '/intro',
        views: {
            '@': {
                templateUrl: 'src/layouts/demo/intro.html'
            }
        }
    }).state('layout.container', {
        url: '/container',
        views: {
            '@': {
                templateUrl: 'src/layouts/demo/container.html'
            }
        }
    }).state('framework', {
        url: '/framework'
    }).state('framework.intro', {
        url: '/intro',
        views: {
            '@': {
                templateUrl: 'src/framework/demo/intro.html'
            }
        }
    }).state('framework.components', {
        url: '/components',
        views: {
            'body@': {
                templateUrl: 'src/framework/demo/components.html'
            }
        }
    });
    $urlRouterProvider.otherwise('/');
}

export default routesConfig;
