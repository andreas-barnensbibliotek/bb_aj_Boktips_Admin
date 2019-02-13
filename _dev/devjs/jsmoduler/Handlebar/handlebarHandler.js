var $ = require("jquery");

module.exports = {
    injecthtmltemplate: function (targetClass, usetemplateName, currentdata, callback) {
        
        $.get(usetemplateName, function (data) {
            var temptpl = Handlebars.compile(data);
            $(targetClass).html(temptpl(currentdata));
            callback();
        }, 'html');
    }
}