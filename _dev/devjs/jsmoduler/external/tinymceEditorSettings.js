
module.exports = {
    init: function () {
       
        window.editorobj = tinymce;
        window.editorobj.init({
            selector: '#bb_aj_modalbody',
            menubar: false,
            toolbar: 'undo redo | styleselect | bold italic | link image'
        });    
        
    },//end init
    clear: function () {
        window.editorobj.activeEditor.setContent('');
    }
} //end moduleexport
