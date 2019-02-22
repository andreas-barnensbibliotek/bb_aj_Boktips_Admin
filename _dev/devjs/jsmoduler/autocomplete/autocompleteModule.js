var $ = require("jquery");
var appsettingsobject = require("./../appsettings.js");
var appsettings = appsettingsobject.config;

module.exports = {
    init: function (ControlID) {
        let autocomp = new autoComplete({
            selector: ControlID,
            minChars: 2,
            source: function (term, response) {
                let url = appsettings.api.autocomplete.geturl;
                let test = url(10);
                let searchdata = { "Searchstr": term };
                $.ajax({
                    async: true,
                    type: "post",
                    dataType: 'json',
                    data:searchdata,
                    url: url(10),
                    success: function (data) {
                        let suggestions = [];

                        $.each(data.BookList, function (item, val) {
                            
                            suggestions.push([val.Title,val.Bookid]);
                            
                        });
                        
                        response(suggestions);
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert("Nått blev fel vid hämtning av arrangemang!");
                    }
                })

            },
            renderItem: function (item, search){
                //search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                //var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                // return '<div class="autocomplete-suggestion" data-bookid="' + item[1] + '">' + item[0].replace(re, "<b>$1</b>") + '</div>';
                return '<div class="autocomplete-suggestion" data-bookid="' + item[1] + '">' + item[0] + '</div>';

            },
            onSelect: function (e, term, item) {
                                
                $('#bb_aj_cur_title').val(item.innerHTML);
                $('.bb_aj_bookid').html(item.dataset.bookid);
                $('#bb_aj_boktipformsavedata').attr("data-bookid", item.dataset.bookid);
                                
                return false;
            }
        });
    }
};