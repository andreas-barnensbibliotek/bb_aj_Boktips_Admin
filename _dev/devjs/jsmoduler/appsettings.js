
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
        let _currentdatalist;
        //// template
        
        let _hb_booktipList_template = _htmltemplateURL + "template_datatableRow.txt";   
        let _hb_editor_template = _htmltemplateURL + "template_editor.txt"; 
        let _hb_deletbox_template = _htmltemplateURL + "template_tabort.txt";
        
        // användarens senaste boktips
        let _fn_booktipList = function (userid) {
            return _apiserver + "/Api_v1/boktips/bylatest/1/devkey/" + _devkey + "/?type=json";
        }
        let _fn_booktipDelete = function () {            
            return _apiserver + "/Api_v3.1/boktips/typ/addboktips/devkey/" + _devkey + "/?type=json";
        }
        let _fn_booktipApprove = function (tipid, val) {
            return _apiserver + "/Api_v3.1/boktips/typ/approve/val/" + tipid + "/txtval/" + val + "/devkey/" + _devkey + "/?type=json";
        }
        let _fn_booktipListToAprove = function () {
            return _apiserver + "/Api_v3.1/boktips/typ/toapprove/val/0/txtval/0/devkey/" + _devkey + "/?type=json";
        }
        let _fn_booktipListAll = function () {
            return _apiserver + "/Api_v3.1/boktips/typ/getall/val/0/txtval/0/devkey/" + _devkey + "/?type=json";
        }
           
        return {
            apiserver: _apiserver,
            dnnURL: _dnnURL,
            htmltemplateurl: _dnnURL + _htmltemplateURL,
            devkey: _devkey,
            handlebartemplate: {
                hb_booktipList_tmp: _hb_booktipList_template,
                hb_editor_tmp: _hb_editor_template,
                hb_delbox_tmp: _hb_deletbox_template
            },
            api: {                
                boktipslistor: {
                    getboktipslistToApprove: _fn_booktipListToAprove,
                    getboktipslistAll: _fn_booktipListAll
                },
                approve: _fn_booktipApprove,
                delete: _fn_booktipDelete,
                autocomplete: {
                    geturl: ""
                },                
                devkeyend: _apidevkeyend
            },
            dataset: {
                currentdatalist:  _currentdatalist
            },

            debug: "false"
        }
    })(),
    
}

