<%@ Control Language="vb" AutoEventWireup="true" CodeBehind="View.ascx.vb" Inherits="krypin.bb_aj.boktipsAdminbb_aj_Boktips_Admin.View" %>

<div id="bb_aj_boktipsAdmin_Mod">
    <div>Lista: <a href="">Ej godkända</a> | <a href="">alla</a> </div> 
    <table id="bb_aj_boktipsAdminList" class="table table-striped table-bordered table-list">
        <!-- handlebartemplate -->
    </table>
    <button id="approveall">Godkänn markerade</button>

</div>


<div id="bb_aj_modalContainer">    
    <div class="bb_aj_modalcontent" data-id="{{TipID}}">
        <div class="bb_aj_modalheader">
			<div class="buttonblock">
			
				<a href="/tabid/578/Default.aspx?cid=katalogenDetails&command=lista&bookid={{Bookid}}" title="Gå till boken i katalogen" class="gotobokkatalogen"><img src="/Portals/_default/Skins/bb_DAGOBAH_krypin/images/modules/bokikatalogen.png" /></a>				
				<a href="#" title="Skriv ut" class="boktipsitemPrint"><img src="/Portals/_default/Skins/bb_DAGOBAH_krypin/images/modules/print_32.png" /></a>
				<a href="#" title="Maila texten" class="boktipsitemMail"><img src="/Portals/_default/Skins/bb_DAGOBAH_krypin/images/modules/mail_32.png" /></a>
				<a href="#" title="Stäng" class="bb_aj_closeModal"><img src="/Portals/_default/Skins/bb_DAGOBAH_krypin/images/modules/item_uncheck.png" /></a>                              
            </div>
            <h2>{{Title}}</h2>
        </div>
        <div id="bb_aj_modalbody" class="bb_aj_modalbody">
            {{{Review}}}
        </div>
    </div>
</div>
<script src="<%=ResolveUrl("public/js/tinymce/tinymce.min.js")%>" type="text/javascript"></script>
<script src="<%=ResolveUrl("public/js/aj_bb_boktipsadmin_bundle.1.0.0.js")%>" type="text/javascript"></script>