let $ = require("jquery");
let _dt = require("./datatables.js");
let _dtEvent = require("./DataTableEvent.js");
let _hh = require("../Handlebar/handlebarHandler")
let _hh_helper = require("../Handlebar/handlebar_Helpers");
let _service = require("../Service/servicehandler_Fetch");
let servicecall = require("../Service/serviceCallHandler");
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
        this.$body = $('body');
        this.$bb_aj_listatoApprove = $("#bb_aj_listatoApprove");
        this.$bb_aj_listaAlla = $("#bb_aj_listaAlla");
        this.$bb_aj_boktipsAdminList = $("#bb_aj_boktipsAdminList");
        this.$bb_aj_boktipsAdminALLList = $("#bb_aj_boktipsAdminALLList");
    },
    bindEvent: function (userid) {
        let that = this;
                
        this.$body.on('click', '#bb_aj_listaAlla', function (e) {
            $(this).addClass("not-active");
            that.$bb_aj_listatoApprove.removeClass("not-active");

            that.$bb_aj_boktipsAdminList.hide();
            let datatables = that.$bb_aj_boktipsAdminList.DataTable();
            datatables.destroy();
                        
            that.serviceHandler("#bb_aj_boktipsAdminALLList", appsettings.api.boktipslistor.getboktipslistAll(), function(){
                that.$bb_aj_boktipsAdminALLList.show();
            });
                       
            return false;
        });

        this.$body.on('click', '#bb_aj_listatoApprove', function (e) {        
            $(this).addClass("not-active");
            that.$bb_aj_listaAlla.removeClass("not-active");
            that.$bb_aj_boktipsAdminALLList.hide();

            let datatables = that.$bb_aj_boktipsAdminALLList.DataTable();
            datatables.destroy();            
            
            that.serviceHandler("#bb_aj_boktipsAdminList", appsettings.api.boktipslistor.getboktipslistToApprove(), function () {
                that.$bb_aj_boktipsAdminList.show();
            });           
         
            return false;
        });

        this.$body.on('click', '#bb_aj_Deleteboktips', function (e) {
            let id = $(this).attr('data-tipid');

            servicecall.deletetip(id, function (isok) {
                that.updatetable();
            });

            $("#bb_aj_modalContainer").hide();
            return false;
        });

        this.$body.on('click', '#bb_aj_Saveboktips', function (e) {
            let id = $(this).attr('data-tipid');
            let rub = $("#bb_aj_saveBoktipRubrik").html();
            let content = tinyMCE.activeEditor.getContent();

            servicecall.savetip(id, rub, content, function () {              
                that.updatetable();                          
            });

            $("#bb_aj_modalContainer").hide();
            return false;
        });
    },
    EventHandler: function () {
        _dtEvent.init();
        _hh_helper.init();
    },
    updatetable: function () {

        let valdlist, urlen, cssdiv;
        if (this.$bb_aj_boktipsAdminList.is(':visible')) {
            valdlist = this.$bb_aj_boktipsAdminList;
            urlen = appsettings.api.boktipslistor.getboktipslistToApprove();
            cssdiv = "#bb_aj_boktipsAdminList"
            
        }
        else {
            if (this.$bb_aj_boktipsAdminALLList.is(':visible')) {
                valdlist = this.$bb_aj_boktipsAdminALLList
                urlen = appsettings.api.boktipslistor.getboktipslistAll();
                cssdiv = "#bb_aj_boktipsAdminALLList"                
            };
        };      
       
        let datatables = valdlist.DataTable();
        datatables.destroy();
        valdlist.hide();
        this.serviceHandler(cssdiv, urlen, function () {
            valdlist.show();
        });
    },
    serviceHandler: function (cssSelector,url, callback) {
        //let jsondatapromise = _service.getjsondata('https://www2.barnensbibliotek.se/Api_v3.1/boktips/typ/ByUserId/val/7017/txtval/0/devkey/alf/?type=json');
        let jsondatapromise = _service.getjsondata(url);

        jsondatapromise.then(jsondata => {

            appsettings.dataset.currentdatalist = jsondata;

            _hh.injecthtmltemplate(cssSelector, appsettings.handlebartemplate.hb_booktipList_tmp, jsondata, function () {
                console.log("funkar1:" + appsettings.dataset.currentdatalist);
                _dt.RunDataTable(cssSelector);
                console.log("funkar2:" + appsettings.dataset.currentdatalist);
                callback();
            });
        });    
    },
    render: function () {
        
        this.serviceHandler("#bb_aj_boktipsAdminList", appsettings.api.boktipslistor.getboktipslistToApprove(), function () { });
        //this.serviceHandler("#bb_aj_boktipsAdminALLList", appsettings.api.boktipslistor.getboktipslistAll());
    }
}