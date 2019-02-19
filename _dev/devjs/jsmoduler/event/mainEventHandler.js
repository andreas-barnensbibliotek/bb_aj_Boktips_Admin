
let edt = require("../external/editor");
let $ = require("jquery");

module.exports = {
    init: function () {
        this.cacheDom();
        this.bindEvent();
        this.render();
    },
    cacheDom: function () {
        this.$body = $('body');
        this.$bb_aj_modalContainer = $("#bb_aj_modalContainer");
    },
    bindEvent: function (userid) {
        let that = this;
       
        this.$body.on('click', '.bb_aj_closeModal', function (e) {
            that.$bb_aj_modalContainer.hide();
            return false;
        });


    },
    render: function () {

    }
}
