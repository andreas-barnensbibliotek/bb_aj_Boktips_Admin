
module.exports = {
    _editorn: tinyMCE,
    init: function (CSSidselector) {
                   
        this._editorn.init({
            selector: CSSidselector,
            menubar: false,
            toolbar: 'undo redo | styleselect | bold italic | link image'
        });

    },//end init
    remove: function () {
        this._editorn.remove();
    },
    clear: function () {
        this._editorn.activeEditor.setContent('');
    },
    setcontent: function (content) {
        this._editorn.activeEditor.setContent(content);
    }
} //end moduleexport