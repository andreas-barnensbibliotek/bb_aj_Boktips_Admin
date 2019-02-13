﻿' Copyright (c) 2019 Andreas Josefsson
'  All rights reserved.
' 
' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
' TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
' THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
' CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
' DEALINGS IN THE SOFTWARE.
' 

Imports DotNetNuke.Entities.Modules


' <summary>
' This base class can be used to define custom properties for multiple controls. 
' An example module, DNNSimpleArticle (http://dnnsimplearticle.codeplex.com) uses this for an ArticleId
' 
' Because the class inherits from PortalModuleBase, properties like ModuleId, TabId, UserId, and others, 
' are accessible to your module's controls (that inherity from bb_aj_Boktips_AdminModuleBase
' 
' </summary>

Public Class bb_aj_Boktips_AdminSettingsBase
    Inherits ModuleSettingsBase



End Class
