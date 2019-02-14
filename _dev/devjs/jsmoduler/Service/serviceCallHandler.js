
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
    deletetip: function (tipid) {
        let dataopt = {
            "Approved": "0",
            "Author": "",
            "Bookid": "",
            "Title": "",
            "Userage": "0",
            "HighAge": "0",
            "LowAge": "0",
            "Review": "",
            "Tiptype": "0",
            "Userid": "",
            "UserName": "",
            "Category": "0",
            "TipID": tipid
        }

        let jsondatapromise = _service.fetchjsonpdata(appsettings.api.delete, dataopt);

        jsondatapromise
            .then(jsondata => { return true; })
            .catch(err => false);
       

    }
    
}