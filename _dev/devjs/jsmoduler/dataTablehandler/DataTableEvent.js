var $ = require("jquery");

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
        this.$bb_aj_approve.on("click", function () {
            that.$bb_aj_modalContainer.show();
        });

        this.$body.on('click', '.bb_aj_closeModal', function (e) {
            that.$bb_aj_modalContainer.hide();
            return false;
        });   
    },
    render: function () {
        
    }
}