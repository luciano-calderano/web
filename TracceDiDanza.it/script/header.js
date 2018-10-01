"use strict";

var html = '' +
    '<meta http-equiv="content-type" content="text/html" name="description" content="Tracce di danza">' +
    '<meta charset="utf-8"> ' +
    '<title>Tracce di danza</title> ' +
    '<link rel="shortcut icon" href="img/logo.jpg" type="image/jpg"> ' +
    '<link rel="stylesheet" type="text/css" href="style/main.css"> ' +
    '';
document.write(html);


function bottom() {
    var html = '' +
        '<br><hr><div id="bottom">Copyright 2017 by traccedidanza.it ©. All Rights Reserved.</div></html>' +
        '';
    document.write(html);
}

function pagina(page) {
    var html = '<a href="index.html"><img id="imgLogo" src="img/logo.jpg"></a>' +
        '   <ul id="menu">  ' +
        '       <li id="liMenu"><a href="index.html">Home</a></li> ' +
        '       <li id="liMenu"><a href="danze.html">Danze</a></li> ' +
        '       <li id="liMenu"><a href="media.html">Multimedia</a></li> ' +
        '       <li id="liMenu"><a href="eventi.html">Eventi</a></li> ' +
        '       <li id="liMenu"><a href="corsi.html">Corsi</a></li>  ' +
        '       <li id="liMenu"><a href="contatti.html">Contatti</a></li> ' +
        '   </ul> ' +
        '   <div class = "social" > ' +
        '       <a href="https://www.facebook.com/groups/66498301998"><img src="img/icoFb.png"></a> ' +
        '       <a href="https://www.youtube.com/channel/UCpd80M56VLSxPhv77q8h8vA"><img src="img/icoYt.png"></a> ' +
        '   </div> ' +
        '   <div id="title">Tracce di danza <small><small>(Traces of dance)</small></small></div><div id="subtitle">Associazione culturale di musica e danza storica<br><small><small>(Cultural association of historical music and dance)</small></small></div>';

    document.write(html);
    var divs = document.getElementsByTagName("li");
    divs[page].className = "active";
}
