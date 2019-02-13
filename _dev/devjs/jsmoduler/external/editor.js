
module.exports = {
    _editorn: tinymce,
    init: function (CSSidselector) {
                   
        this._editorn.init({
            selector: CSSidselector,
            menubar: false,
            toolbar: 'undo redo | styleselect | bold italic | link image'
        });

    },//end init
    clear: function () {
        this._editorn.activeEditor.setContent('');
    }
} //end moduleexport