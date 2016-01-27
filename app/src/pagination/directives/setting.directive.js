/**
 * Created by yao on 16/1/8.
 */
function linkFunc(scope, elem) {
    scope.$destroy();
    elem.remove();
}

function EbpPaginationSettingDirectiveFactory() {
    let directive = {
        restrict: 'AE',
        link: linkFunc,
        scope: {
        	model: '=ngModel',
        	datasource: '='
        },
        controller: EbpPaginationController,
        controllerAs: '$ebpPagination',
        bindToController: true
    };

    return directive;
}

class EbpPaginationController {
	constructor($scope, $attrs, $injector, $resource) {
		'ngInject';
		const datasource = $scope.$parent.$eval($attrs.datasource);
        const count = $scope.$parent.$eval($attrs.count);
		if(angular.isObject(datasource)) {
            let {url, params} = datasource;
            this.Resource = $resource(url, params, {
                query: {
                    cache: true,
                    method: 'GET',
                    isArray: true
                },
                update: {
                    method: 'PUT'
                }
            });
        }
        if(angular.isString(count)) {
            this.CountResource = $resource(count);
        }
		$scope.$parent.$ebpPager = $injector.instantiate(EbpPager, this);
	}
}

class EbpPager {
	constructor(Resource, model, CountResource, $filter) {
		'ngInject';
		this.pageNo = 1;
		this.maxSize = 10;
        this.quantity = 0;
        this.model = model;
        this.from = 0;
        this.to = 0;
        this.sorting = {
            orderBy: undefined,
            order: undefined
        };
        this.sort = (by, order) => {
            this.sorting.orderBy = by;
            this.sorting.order = order;
            this.fetch();
        };
        Object.defineProperties(this, {
            CountResource: {
                get: () => {
                    return CountResource;
                }
            },
            Resource: {
                get: () => {
                    return Resource;
                }
            }
        });
        this.fetch = () => {
            return this.Resource.query({
                pageNo: this.pageNo,
                maxSize: this.maxSize,
                orderBy: this.sorting.orderBy,
                order: this.sorting.order
            }, (items) => {
                this.from = (this.pageNo - 1) * this.maxSize + 1;
                this.to = this.pageNo === this.total?this.quantity:this.pageNo * this.maxSize;
                let ordered = items;
                if(this.sorting.order) {
                    ordered = $filter('orderBy')(items, this.sorting.orderBy, this.sorting.order === 'desc');
                }
                this.model.length = 0;
                this.model.push(...ordered);
            });
        };
        this.refresh();
	}

    refresh() {
        this.fetch();
        if(angular.isFunction(this.CountResource)) {
            this.CountResource.get((count) => {
                this.quantity = count.total;
                this.total = Math.ceil(this.quantity / this.maxSize);
            });
        }
    }

    next() {
        if(this.pageNo === this.total) {
            return;
        }
        this.pageNo += 1;
        this.fetch();
    }

    prev() {
        if(this.pageNo === 1) {
            return;
        }
        this.pageNo -= 1;
        this.fetch();
    }

    first() {
        this.pageNo = 1;
        this.fetch();
    }

    last() {
        this.pageNo = this.total;
        this.fetch();
    }

}

export default EbpPaginationSettingDirectiveFactory;