<%@ Control Language="vb" AutoEventWireup="true" CodeBehind="View.ascx.vb" Inherits="krypin.bb_aj.boktipsAdminbb_aj_Boktips_Admin.View" %>

<div id="bb_aj_boktipsAdmin_Mod">
    <div>Lista: <a href="#" id="bb_aj_listatoApprove" class="not-active">Ej godkända</a> | <a href="#" id="bb_aj_listaAlla" >alla</a> </div> 
    <table id="bb_aj_boktipsAdminList" class="table table-striped table-bordered table-list">
        <tr>
            <th>
                <img class="loading" src="/Portals/_default/Skins/bb_DAGOBAH_krypin/images/toplogo4.png" />
            </th>
        </tr>
        <!-- handlebartemplate -->
    </table>
    <table id="bb_aj_boktipsAdminALLList" class="table table-striped table-bordered table-list" style="display:none;">
        <tr>
            <th>
                <img class="loading" src="/Portals/_default/Skins/bb_DAGOBAH_krypin/images/toplogo4.png" />
            </th>
        </tr>
    </table>   
</div>

<div id="bb_aj_modalContainer">    
</div>
<script src="<%=ResolveUrl("public/js/tinymce/tinymce.min.js")%>" type="text/javascript"></script>
<script src="<%=ResolveUrl("public/js/aj_bb_boktipsadmin_bundle.1.0.5.js")%>" type="text/javascript"></script>