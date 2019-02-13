var dt = require("./jsmoduler/dataTablehandler/DataTableMainHandler.js");
var edt = require("./jsmoduler/external/editor.js");

var $ = require("jquery");
   
$(function () {

    let init = function () {
        dt.init();
        edt.init('#bb_aj_modalbody');
    }

    init();      
   
    
});
