/**
 * Created by yao on 16/1/2.
 */

function linkFunc(scope, elem) {
    elem.addClass('ebp-taskboard-container');
}

function EbpTaskBoardDirectiveFactory() {
    let directive = {
        restrict: 'AE',
        link: linkFunc,
        templateUrl: 'src/taskboard/templates/taskboard.tpl.html',
        controller: EbpTaskBoardController,
        controllerAs: '$taskBoard'
    };

    return directive;
}

class EbpTaskBoardController {
	constructor() {

	}

	get entrySortableOptions() {
		return {
			cursor: 'move',
			handle: '.ebp-taskgroup-header',
			placeholder: 'ebp-taskgroup-placeholder',
			helper: 'clone',
			forcePlaceholderSize: true,
			opacity: 0.8,
			delay: 75,
			distance: 4,
			tolerance: 'pointer'
		};
	}

	get taskSortableOptions() {
		return {
			connectWith: '.ebp-task-list',
			cursor: 'move',
			placeholder: 'ebp-task-placeholder',
			forcePlaceholderSize: true
		};
	}
}

export default EbpTaskBoardDirectiveFactory;