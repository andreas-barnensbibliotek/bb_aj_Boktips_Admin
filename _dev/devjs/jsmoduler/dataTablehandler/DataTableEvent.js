let fillobj = require("../helpers/fillEditorContent");
let autocompleteobj2 = require("../autocomplete/autocompleteModule");
let servicecall = require("../Service/serviceCallHandler");
let $ = require("jquery");

module.exports = {
    init: function () {
        this.cacheDom();
        this.bindEvent();
        this.render();
        //autocompleteobj2.init('#bb_aj_cur_title');
    },
    cacheDom: function () {
        this.$body = $('body');
        this.$bb_aj_approve = $(".bb_aj_approve");
        this.$bb_aj_modalContainer = $("#bb_aj_modalContainer");
        this.$bb_aj_boktipformsavedata = $('#bb_aj_boktipformsavedata');
        this.$bb_aj_cur_title= $("#bb_aj_cur_title");
    },
    bindEvent: function (userid) {
        let that = this;        

        this.$body.on('click', '.bb_aj_approve', function (e) {
            let id = $(this).attr('data-tipid');            

            fillobj.getCurrentItem(id, function () {
                that.$bb_aj_modalContainer.show();
                autocompleteobj2.init('#bb_aj_cur_title');
            });
                        
            return false;
        });

        this.$body.on('click', '.bb_aj_delete', function (e) {
            let id = $(this).attr('data-tipid');
            fillobj.deleteitemBox(id);
            that.$bb_aj_modalContainer.show();
            return false;
        });
       
        this.$body.on('change', '.bb_aj_valtboktips', function (e) {
            let id = $(this).attr('data-tipid');
            let val = 0;
            
            if (this.checked) {
               val = 1;               
            }
            if (servicecall.approvetip(id, val)) {
                console.log("approved json");
            };

            $(this).val(this.checked); 
            return false;
        });

        this.$body.on('click', '#bb_aj_SaveEditToServer', function (e) {
            
            let bb_aj_boktipformsavedata = $('#bb_aj_boktipformsavedata');
            let bb_aj_cur_title = $("#bb_aj_cur_title");

            let savedata = {
                TipID: $(this).attr('data-tipid'),
                Title: bb_aj_cur_title.val(),
                LowAge: bb_aj_boktipformsavedata.attr("data-low"),
                HighAge: bb_aj_boktipformsavedata.attr("data-high"),
                Category: bb_aj_boktipformsavedata.attr("data-cat"),
                Userid: bb_aj_boktipformsavedata.attr("data-userid"),
                Bookid: bb_aj_boktipformsavedata.attr("data-bookid"),
                Review: tinyMCE.activeEditor.getContent()
            }

            if (savedata.Title && savedata.TipID > 0) {
                fillobj.saveitemBox(savedata);
                that.$bb_aj_modalContainer.show();

            } else {
                alert("Ange titel!");
                bb_aj_cur_title.focus();
            };           
            
            return false;
        });
               
        this.$body.on('click', '.bb_aj_closeModal', function (e) {
            that.$bb_aj_modalContainer.hide();
            return false;
        });

        this.$body.on('change', '#drpBoktipSuitableAgeMin', function (e) {
            let minage = $(this).val();
            let bb_aj_boktipformsavedata = $('#bb_aj_boktipformsavedata');
            bb_aj_boktipformsavedata.attr("data-low", minage);
            console.log(minage);
        });

        this.$body.on('change', '#drpBoktipSuitableAgeMax', function (e) {
            let maxage = $(this).val();
            let bb_aj_boktipformsavedata = $('#bb_aj_boktipformsavedata');
            bb_aj_boktipformsavedata.attr("data-high", maxage);
            console.log(maxage);
        });

        this.$body.on('change', '#drpBoktipAmnen', function (e) {
            let cat = $(this).val();
            let bb_aj_boktipformsavedata = $('#bb_aj_boktipformsavedata');
            bb_aj_boktipformsavedata.attr("data-cat", cat);
            console.log(cat);
        });
       
    },
    render: function () {

    }
}