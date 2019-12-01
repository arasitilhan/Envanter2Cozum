<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Form.aspx.cs" Inherits="Envanter2Deneme.Form" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Envanter 2 - Çözüm</title>
    <link href="GenelCss.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" charset="utf-8" src="app.js"></script>
</head>
<body>
    
        <div style="text-align:center;"><button id="btn_yukletara">Yükleme ve Taramayı Başlat</button></div>
        <div id="sayacID" style="text-align:center;"></div>
        <div>Progress:</div>
        <div id="myProgress">
            <div id="myBar"></div>
        </div><br/>
        <div>Yükleme:</div>
        <div id="myProgressYukleme">
            <div id="myBarYukleme"></div>
        </div><br/>
        <div>Tarama:</div>
        <div id="myProgressTarama">
            <div id="myBarTarama"></div>
        </div>
        <div>
            <table>
                <tr><th>Alert No</th><th>Öncelik</th><th>Eventler</th></tr>
                <tr>
                    <td id="alertno"></td>
                    <td id="oncelik"></td>
                    <td id="event"></td>
                </tr>
            </table> 
        </div>

</body>
</html>
