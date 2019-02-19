
let appsettingsobject = require("../appsettings");
let appsettings = appsettingsobject.config;

module.exports = {
    init: function () {

        Handlebars.registerHelper('checkapproved', function (Approve) {                        
            if (Approve==1) {
               return  "checked";
            };            
        });

       
    }
}