/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by yao on 15/12/4.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _layoutsLayoutsModule = __webpack_require__(1);

	var _layoutsLayoutsModule2 = _interopRequireDefault(_layoutsLayoutsModule);

	var _frameworkFrameworkModule = __webpack_require__(6);

	var _frameworkFrameworkModule2 = _interopRequireDefault(_frameworkFrameworkModule);

	var ebpUI = angular.module('ebp-ui', [_layoutsLayoutsModule2['default'].name, _frameworkFrameworkModule2['default'].name]);

	exports['default'] = ebpUI;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by yao on 15/12/7.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _config = __webpack_require__(2);

	var config = _interopRequireWildcard(_config);

	var _layoutsConst = __webpack_require__(3);

	var _layoutsConst2 = _interopRequireDefault(_layoutsConst);

	var _directivesEbpLayoutDirectiveJs = __webpack_require__(4);

	var _directivesEbpLayoutDirectiveJs2 = _interopRequireDefault(_directivesEbpLayoutDirectiveJs);

	var _directivesEbpLayoutContainerDirective = __webpack_require__(5);

	var _directivesEbpLayoutContainerDirective2 = _interopRequireDefault(_directivesEbpLayoutContainerDirective);

	var layoutsModule = angular.module('ebpUI.layouts', []);
	layoutsModule.directive(config.directiveNames.ebpLayout, _directivesEbpLayoutDirectiveJs2['default']).directive(config.directiveNames.ebpLayoutContainer, _directivesEbpLayoutContainerDirective2['default']);

	for (var e in _layoutsConst2['default']) {
	  layoutsModule.constant(e, _layoutsConst2['default'][e]);
	}

	exports['default'] = layoutsModule;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by yao on 15/12/9.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var directiveNames = {
	  ebpLayout: 'ebpLayout',
	  ebpLayoutContainer: 'ebpLayoutContainer'
	};
	exports.directiveNames = directiveNames;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by yao on 15/12/9.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var EbpLayoutType = {
	    row: 'row',
	    column: 'column'
	};

	exports['default'] = {
	    EbpLayoutType: EbpLayoutType
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by yao on 15/12/9.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _config = __webpack_require__(2);

	function EbpLayoutDirectiveFactory(EbpLayoutType) {
	    'ngInject';
	    function linkFun(scope, elem, attrs, layout) {
	        elem.addClass('ebp-layout');
	        attrs.$observe(_config.directiveNames.ebpLayout, function (type) {
	            var layoutType = type || EbpLayoutType.row;
	            layout.layoutType = layoutType;
	            layout.render();
	        });
	    }
	    var directive = {
	        restrict: 'A',
	        scope: true,
	        link: linkFun,
	        controller: EbpLayoutController,
	        controllerAs: '$ebpLayout'
	    };

	    return directive;
	}

	var EbpLayoutController = (function () {
	    function EbpLayoutController(EbpLayoutType) {
	        'ngInject';

	        _classCallCheck(this, EbpLayoutController);

	        this.layoutItems = [];
	        this.EbpLayoutType = EbpLayoutType;
	    }

	    _createClass(EbpLayoutController, [{
	        key: 'render',
	        value: function render() {
	            var _this = this;

	            this.calcSize();
	            if (this.layoutType === this.EbpLayoutType.row) {
	                angular.forEach(this.layoutItems, function (item) {
	                    item.render(_this.layoutType);
	                });
	            }
	            if (this.layoutType === this.EbpLayoutType.column) {
	                angular.forEach(this.layoutItems, function (item) {
	                    item.render(_this.layoutType);
	                });
	            }
	        }
	    }, {
	        key: 'calcSize',
	        value: function calcSize() {
	            var size = 0,
	                assignedItems = [],
	                autoItems = [],
	                allPercent = true;
	            angular.forEach(this.layoutItems, function (item) {
	                if (!item.size) {
	                    autoItems.push(item);
	                } else {
	                    allPercent = allPercent && angular.isNumber(item.size);
	                    assignedItems.push(item);
	                }
	            });
	            if (assignedItems.length < 1) {
	                size = 100 / this.layoutItems.length;
	            } else {
	                if (allPercent) {
	                    var totalAssignedPercent = 0;
	                    angular.forEach(assignedItems, function (item) {
	                        totalAssignedPercent += item.size;
	                    });
	                    size = (100 - totalAssignedPercent) / autoItems.length;
	                } else {
	                    (function () {
	                        size = '';
	                        var totalAssignedPercent = 0;
	                        var offsets = [];
	                        angular.forEach(assignedItems, function (item) {
	                            if (angular.isNumber(item.size)) {
	                                totalAssignedPercent += item.size;
	                            }
	                            if (angular.isString(item.size)) {
	                                offsets.push(item);
	                            }
	                        });
	                        if (offsets.length > 0) {
	                            size = '(100%';
	                            angular.forEach(offsets, function (item) {
	                                size += ' - ' + item.size;
	                            });
	                            if (totalAssignedPercent > 0) {
	                                size += ' - ' + totalAssignedPercent + '%';
	                            }
	                            size += ')';
	                            if (autoItems.length > 0) {
	                                size += ' / ' + autoItems.length;
	                            }
	                        }
	                    })();
	                }
	            }
	            angular.forEach(autoItems, function (item) {
	                item.size = size;
	            });
	        }
	    }]);

	    return EbpLayoutController;
	})();

	exports['default'] = EbpLayoutDirectiveFactory;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by yao on 15/12/9.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _config = __webpack_require__(2);

	function EbpLayoutContainerDirectiveFactory() {
	    function linkFunc(scope, elem, attrs, layout) {
	        elem.addClass('ng-hide').addClass('ebp-layout-container');
	        var size = attrs[_config.directiveNames.ebpLayoutContainer];
	        if (size) {
	            var regx = /^[0-9]+.?[0-9]*$/;
	            if (regx.test(size)) {
	                scope.$ebpLayoutContainer.size = Number(size);
	            } else {
	                scope.$ebpLayoutContainer.size = size;
	            }
	        }
	        layout.layoutItems.push(scope.$ebpLayoutContainer);
	    }
	    var directive = {
	        restrict: 'A',
	        require: '^' + _config.directiveNames.ebpLayout,
	        scope: true,
	        link: linkFunc,
	        controller: EbpLayoutContainerController,
	        controllerAs: '$ebpLayoutContainer'
	    };

	    return directive;
	}

	var EbpLayoutContainerController = (function () {
	    function EbpLayoutContainerController($scope, EbpLayoutType, $element) {
	        'ngInject';

	        _classCallCheck(this, EbpLayoutContainerController);

	        this.EbpLayoutType = EbpLayoutType;
	        this.$ebpLayout = $scope.$ebpLayout;
	        this.$el = $element;
	    }

	    _createClass(EbpLayoutContainerController, [{
	        key: 'render',
	        value: function render(type) {
	            if (type === this.EbpLayoutType.row) {
	                if (angular.isNumber(this.size)) {
	                    this.$el.height(this.size + '%');
	                } else {
	                    this.$el.height('calc(' + this.size + ')');
	                }
	            }
	            if (type === this.EbpLayoutType.column) {
	                if (angular.isNumber(this.size)) {
	                    this.$el.width(this.size + '%');
	                } else {
	                    this.$el.width('calc(' + this.size + ')');
	                }
	            }
	            this.$el.removeClass('ng-hide');
	        }
	    }]);

	    return EbpLayoutContainerController;
	})();

	exports['default'] = EbpLayoutContainerDirectiveFactory;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by yao on 15/12/11.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _config = __webpack_require__(7);

	var config = _interopRequireWildcard(_config);

	var _directivesEbpFrameworkDirective = __webpack_require__(8);

	var _directivesEbpFrameworkDirective2 = _interopRequireDefault(_directivesEbpFrameworkDirective);

	var _directivesEbpNavbarDirective = __webpack_require__(9);

	var _directivesEbpNavbarDirective2 = _interopRequireDefault(_directivesEbpNavbarDirective);

	var frameworkModule = angular.module('ebpUI.framework', []);
	frameworkModule.directive(config.directiveNames.ebpFramework, _directivesEbpFrameworkDirective2['default']).directive(config.directiveNames.ebpNavbar, _directivesEbpNavbarDirective2['default']).run();

	exports['default'] = frameworkModule;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Created by yao on 15/12/11.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var directiveNames = {
	  ebpFramework: 'ebpFramework',
	  ebpNavbar: 'ebpNavbar'
	};
	exports.directiveNames = directiveNames;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Created by yao on 15/12/11.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	function EbpFrameworkDirectiveFactory() {
	    function linkFunc(scope, elem, attrs) {
	        var themeName = '';
	        attrs.$observe('theme', function (theme) {
	            elem.removeClass(themeName);
	            if (theme) {
	                elem.addClass(themeName = 'ebp-framework-' + theme);
	            }
	        });
	        elem.addClass('ebp-framework');
	    }
	    var directive = {
	        restrict: 'AE',
	        scope: true,
	        link: linkFunc
	    };

	    return directive;
	}

	exports['default'] = EbpFrameworkDirectiveFactory;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Created by yao on 15/12/11.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	function EbpNavbarDirectiveFactory() {
	    function linkFunc() {}
	    var directive = {
	        restrict: 'AE',
	        link: linkFunc
	    };
	    return directive;
	}

	exports['default'] = EbpNavbarDirectiveFactory;
	module.exports = exports['default'];

/***/ }
/******/ ]);