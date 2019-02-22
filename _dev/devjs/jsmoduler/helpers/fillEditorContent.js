let _hh = require("../Handlebar/handlebarHandler")
let edt = require("../external/editor");
let appsettingsobject = require("../appsettings");
let appsettings = appsettingsobject.config;

module.exports = {
    
    getCurrentItem: function (id,callback) {
        let _currentobj = appsettings.dataset.currentdatalist;

        let currobj = _currentobj.Boktips.filter(item => item.TipID == id);
                
        _hh.injecthtmltemplate("#bb_aj_modalContainer", appsettings.handlebartemplate.hb_editor_tmp, currobj, function () {
            edt.remove();
            edt.init("#bb_aj_modalbody");
                       
            callback();
        });             
    },
    saveitemBox: function (saveObj) {        
        appsettings.dataset.saveboktipObj = saveObj;

        _hh.injecthtmltemplate("#bb_aj_modalContainer", appsettings.handlebartemplate.hb_savebox_tmp, saveObj, function () {
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
