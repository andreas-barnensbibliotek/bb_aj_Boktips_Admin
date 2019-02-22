
let appsettingsobject = require("../appsettings");
let appsettings = appsettingsobject.config;

module.exports = {
    init: function () {

        Handlebars.registerHelper('checkapproved', function (Approve) {                        
            if (Approve==1) {
               return  "checked";
            };            
        });
        Handlebars.registerHelper('filloptions', function (sel) {
            let retopt,i;

            for (i = 1; i < 20; i++) {
                if (i == sel) {
                    retopt += '<option value="' + i + '" selected >' + i + '</option>';
                } else {
                    retopt += '<option value="' + i + '">' + i + '</option>';
                };
            }
            return retopt;
        });
        Handlebars.registerHelper('fillcat', function (sel) {
            let retopt, i;

            for (i = 0; i < 23; i++) {
                if (i == sel) {
                    retopt += '<option value="' + i + '" selected >' + i + '</option>';
                } else {
                    retopt += '<option value="' + i + '">' + i + '</option>';
                };
            }
            return retopt;
        });
       
    }
}