let _hh = require("../Handlebar/handlebarHandler")
let edt = require("../external/editor");
let appsettingsobject = require("../appsettings");
let appsettings = appsettingsobject.config;

module.exports = {
    
    getCurrentItem: function (id) {
        let _currentobj = appsettings.dataset.currentdatalist;

        let currobj = _currentobj.Boktips.filter(item => item.TipID == id);
                
        _hh.injecthtmltemplate("#bb_aj_modalContainer", appsettings.handlebartemplate.hb_editor_tmp, currobj, function () {
            edt.remove();
            edt.init("#bb_aj_modalbody");
                       
            return true;
        });             
    },
    saveitemBox: function (tipid, rub) {
        let obj = { "TipID": tipid, "rubrik": rub};

        _hh.injecthtmltemplate("#bb_aj_modalContainer", appsettings.handlebartemplate.hb_savebox_tmp, obj, function () {
            return true;
        });
    },
    deleteitemBox: function (tipid) {
        let obj = { "TipID": tipid };

        _hh.injecthtmltemplate("#bb_aj_modalContainer", appsettings.handlebartemplate.hb_delbox_tmp, obj, function () {            
            return true;
        });    
    },
    editcontent: function () {
        //edt.activeEditor.getContent('');
    },

} //end moduleexport
