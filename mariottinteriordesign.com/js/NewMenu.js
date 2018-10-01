"use strict";

function logoMain() {
    document.write ('<style> \
    #imgLogoOk  { \
        position: fixed; \
        left:0; \
        top:0; \
        width: 100px; \
        border: 1px solid #020202; \
        z-index:99; \
    } \
    </style> \
    <a href="index.html"><img id="imgLogoOk" src="Img/logoHome.png"></a>');
}

function menuHeader() {
    var arrMenu = [
        ["Chi Siamo", "Who ar us"],
        ["Servizi", "Services"],
        ["Prodotti", "Products"],
        ["Galleria", "Gallery"],
        ["Contatti", "Contacts"],
        ["Lavora con noi", "Work with us"],
    ];
    var arrLink = [
        "chisiamo.html",
        "servizi.html",
        "prodotti.html",
        "galleria.html",
        "contatti.html",
        "lavoraconnoi.html",
    ];
    
    var numLng = getCookieLng();

    document.write ('<style> \
                    #divMenu  { \
                        position: fixed; \
                        top: 0px; \
                        left:105px; \
                        height: 40px; \
                        right: 10px; \
                        border: 1px solid #002c53; \
                        background-color: #ce7500; \
                        font-size: 24px; \
                        table-layout: fixed; \
                        padding: 0px; \
                        z-index:99; \
                    } \
                    </style>');
    
    document.write ('<div id="divMenu" align="center"> \
                        <table id="tblMenu" width="100%" style="text-align: center; color: #fff; "> \
                        <tr>');
    var i;
    for (i = 0; i < arrMenu.length; i++) {
        document.write ('<td style="cursor: pointer; padding: 1px;"> \
                            <a href="' + arrLink[i] + '">' + arrMenu[i][numLng] + '</a> \
                        </td>');
    }
  //  document.write ('<td  width="170px">');
    tdSocial();
 //   document.write ('</td>');
    
    document.write ('   </tr> \
                        </table> \
                    </div>');
}

document.addEventListener('DOMContentLoaded', function(){
    var divMenu = document.getElementById('divMenu').style ;
    var offsets = document.getElementById('tblSocial').getBoundingClientRect();
    document.getElementById('divMenu').style.width = (offsets.left - offsets.width - 10) + 'px';
});

function tdSocial() {
  //  document.write ('<table><tr>');
    document.write ('<td  align="center" width="24"><a href="http://www.facebook.com/mariottinteriordesign"><img src="Img/icoFb.png" width="20" height="20" alt="Facebook" longdesc="Facebook"></a></td>');
    document.write ('<td  align="center" width="24"><a href="https://twitter.com/MariottiDesign"><img src="Img/icoTw.png" width="20" height="20" alt="Twitter." longdesc="Twitter"></a></td>');
    document.write ('<td  align="center" width="24"><a href="http://www.youtube.com/channel/UC1Ys7LtT9pBUVbsTfaeQ2Rw"><img src="Img/icoYoutube.png" width="20" height="20" alt="Twitter." longdesc="Twitter"></a></td>');
    document.write ('<td width="30"></td>');
    document.write ('<td align="center" width="24"><img id="lngIt" src="Img/icoIta.png" width="30" height="20" alt="Ita" longdesc="Italiano"></td>');
    document.write ('<td align="center" width="24"><img id="lngEn" src="Img/icoEng.png" width="30" height="20" alt="Eng" longdesc="English"></td>');

  //  document.write ('</tr></table>');
    document.getElementById('lngIt').onclick = function(){ cambiaLingua(0); return false; };
    document.getElementById('lngEn').onclick = function(){ cambiaLingua(1); return false; };
}

function cambiaLingua(lng) {
    saveLanguage (lng);
	window.location.href=window.location.href;
    location.reload();
}
	
logoMain();
//tableSocial();
menuHeader();
