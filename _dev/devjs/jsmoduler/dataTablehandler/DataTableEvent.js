let fillobj = require("../helpers/fillEditorContent");
let servicecall = require("../Service/serviceCallHandler");
let $ = require("jquery");

module.exports = {
    init: function () {
        this.cacheDom();
        this.bindEvent();
        this.render();
    },
    cacheDom: function () {
        this.$body = $('body');
        this.$bb_aj_approve = $(".bb_aj_approve");
        this.$bb_aj_modalContainer = $("#bb_aj_modalContainer");
    },
    bindEvent: function (userid) {
        let that = this;
        this.$body.on('click', '.bb_aj_approve', function (e) {
            let id = $(this).attr('data-tipid');
            fillobj.getCurrentItem(id);
            that.$bb_aj_modalContainer.show();
            return false;
        });
        this.$body.on('click', '.bb_aj_delete', function (e) {
            let id = $(this).attr('data-tipid');
            fillobj.deleteitemBox(id);
            that.$bb_aj_modalContainer.show();
            return false;
        });

        this.$body.on('click', '.bb_aj_Deleteboktips', function (e) {
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
                alert("funkar");
            };

            $(this).val(this.checked); 
            return false;
        });

        this.$body.on('click', '.bb_aj_closeModal', function (e) {
            that.$bb_aj_modalContainer.hide();
            return false;
        });

        

    },
    render: function () {

    }
}