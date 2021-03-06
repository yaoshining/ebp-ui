/**
 * Created by yao on 15/8/18.
 */
'use strict';
var gulp = require('gulp');
var path = require('path');
var conf = require('./conf');

var browserSync = require('browser-sync');

var browserSyncSpa = require('browser-sync-spa');
var proxyMiddleware = require('http-proxy-middleware');
var util = require('util');

function browserSyncInit(baseDir, browser) {
    browser = browser === undefined ? 'default' : browser;

    var routes = null;
    if (baseDir === conf.paths.app || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.app) !== -1)) {
        routes = {
            '/bower_components': 'bower_components',
            '/data': 'data'
        };
    }

    var server = {
        baseDir: baseDir,
        routes: routes
    };

    /*
     * You can add a proxy to your backend by uncommenting the line bellow.
     * You just have to configure a context which will we redirected and the target url.
     * Example: $http.get('/users') requests will be automatically proxified.
     *
     * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.0.5/README.md
     */
    //server.middleware = proxyMiddleware('/data', {
    //    target: 'http://localhost:8080'
    //});

    browserSync.instance = browserSync.init({
        startPath: '/',
        server: server,
        browser: browser
    });
}

browserSync.use(browserSyncSpa({
    selector: '[ng-app]'// Only needed for angular apps
}));

gulp.task('serve', ['watch'], function () {
    browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.app],['google chrome']);
});