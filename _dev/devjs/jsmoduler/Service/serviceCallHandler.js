let _service_old = require("../Service/OldServicehandler");
let _service = require("../Service/servicehandler_Fetch");
let appsettingsobject = require("../appsettings");
let appsettings = appsettingsobject.config;

module.exports = {
    approvetip: function (tipid, val) {
        let jsondatapromise = _service.getjsondata(appsettings.api.approve(tipid, val));

        jsondatapromise
            .then(jsondata => { return true; })
            .catch(err => false);
    },
    deletetip: function (tipid, callback) {
        let dataopt = {           
            "TipID": tipid
        }

        _service_old.postjsondata(appsettings.api.delete(), dataopt, function (data) {
            callback(data);
        });      

    },
    savetip: function (tipid, rubrik, content, callback) {
        let dataopt = {
            "TipID": tipid,
            "Title": rubrik,            
            "Review": content  
        }

        _service_old.postjsondata(appsettings.api.save(), dataopt, function (data) {
            callback(data);
        });

    }
}