
module.exports = {
    config: (function () {
        let _apiserver = "http://localhost:59015";
        let _dnnURL = "http://localdev.kivdev.se";
        //let _apiserver = "http://dev1.barnensbibliotek.se:8080";
        //let _dnnURL = "http://dev1.barnensbibliotek.se";
        //let _apiserver = "http://dev1.barnensbibliotek.se:8080";
        //let _dnnURL = "http://nytt.barnensbibliotek.se";
        //let _apiserver = "https://www2.barnensbibliotek.se";
        //let _dnnURL = "https://www.barnensbibliotek.se";
        let _devkey = "alf";
        let _apidevkeyend = "/devkey/" + _devkey + "/?type=jsonp&callback=?";
        let _htmltemplateURL = "/DesktopModules/bb_aj_Boktips_Admin/template/";        
        
        //// template
        
        let _hb_booktipList_template = _htmltemplateURL + "template_datatableRow.txt";        
        // användarens senaste boktips
        let _fn_booktipList = function (userid) {
            return _apiserver + "/Api_v1/boktips/bylatest/1/devkey/" + _devkey + "/?type=json";
        }
        
        return {
            apiserver: _apiserver,
            dnnURL: _dnnURL,
            htmltemplateurl: _dnnURL + _htmltemplateURL,
            devkey: _devkey,
            handlebartemplate: {
                hb_booktipList_tmp: _hb_booktipList_template
            },
            api: {                
                boktipslistor: {
                    getboktipslist: _fn_booktipList                    
                },                
                autocomplete: {
                    geturl: ""
                },                
                devkeyend: _apidevkeyend
            },          

            debug: "false"
        }
    })(),
    
}

