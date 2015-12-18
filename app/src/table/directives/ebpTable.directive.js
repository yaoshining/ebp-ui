/**
 * Created by yao on 15/12/17.
 */

function linkFunc() {

}

function EbpTableDirectiveFactory() {
    let directive = {
        restrict: 'AE',
        templateUrl: 'src/table/templates/ebpTable.tpl.html',
        link: linkFunc
    };

    return directive;
}

export default EbpTableDirectiveFactory;