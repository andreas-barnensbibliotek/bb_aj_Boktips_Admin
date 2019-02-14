<%@ Control Language="vb" AutoEventWireup="true" CodeBehind="View.ascx.vb" Inherits="krypin.bb_aj.boktipsAdminbb_aj_Boktips_Admin.View" %>

<div id="bb_aj_boktipsAdmin_Mod">
    <div>Lista: <a href="">Ej godkända</a> | <a href="">alla</a> </div> 
    <table id="bb_aj_boktipsAdminList" class="table table-striped table-bordered table-list">
        <!-- handlebartemplate -->
    </table>
    <button id="approveall">Godkänn markerade</button>

</div>


<div id="bb_aj_modalContainer">    
    
</div>
<script src="<%=ResolveUrl("public/js/tinymce/tinymce.min.js")%>" type="text/javascript"></script>
<script src="<%=ResolveUrl("public/js/aj_bb_boktipsadmin_bundle.1.0.0.js")%>" type="text/javascript"></script>