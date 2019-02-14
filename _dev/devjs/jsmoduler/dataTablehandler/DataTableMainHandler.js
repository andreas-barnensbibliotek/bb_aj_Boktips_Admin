let $ = require("jquery");
let _dt = require("./datatables.js");
let _dtEvent = require("./DataTableEvent.js");
let _hh = require("../Handlebar/handlebarHandler")
let _service = require("../Service/servicehandler_Fetch");
let appsettingsobject = require("../appsettings");
let appsettings = appsettingsobject.config;

module.exports = {
    init: function () {
        this.cacheDom();
        this.bindEvent();
        this.EventHandler();
        this.render();
    },
    cacheDom: function () {
        
    },
    bindEvent: function (userid) {
       
    },
    EventHandler: function () {
        _dtEvent.init();
    },
    serviceHandler: function () {
        //let jsondatapromise = _service.getjsondata('https://www2.barnensbibliotek.se/Api_v3.1/boktips/typ/ByUserId/val/7017/txtval/0/devkey/alf/?type=json');
        let jsondatapromise = _service.getjsondata(appsettings.api.boktipslistor.getboktipslistToApprove());

        jsondatapromise.then(jsondata => {

            appsettings.dataset.currentdatalist = jsondata;

            _hh.injecthtmltemplate("#bb_aj_boktipsAdminList", appsettings.handlebartemplate.hb_booktipList_tmp, jsondata, function () {
                console.log("funkar1:" + appsettings.dataset.currentdatalist);
                _dt.RunDataTable('#bb_aj_boktipsAdminList');
                console.log("funkar2:" + appsettings.dataset.currentdatalist);
            });
        });    
    },
    render: function () {
        this.serviceHandler();
        
    }
}