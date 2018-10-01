document.write('<title>Mariotti Interior Design</title>');
document.write('<script src="http://code.jquery.com/jquery-latest.js"></script>');
document.write('<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>');
//document.write('<script type="text/javascript" src="js/qmenu.js"></script>');
document.write('<script type="text/javascript" src="js/NewMenu.js"></script>');
document.write('<script type="text/javascript" src="js/dicDesc.js"></script>');
document.write('<link rel="stylesheet" type="text/css" href="css/main.css" />');

var  cookieLng = "Language";
function saveCookie(c_name, value, exdays) {
    document.cookie = c_name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}
function getCookie(c_name) {
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start === -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start === -1) {
	   c_value = null;
    }
	else {
        c_start = c_value.indexOf("=", c_start) + 1;
		var c_end = c_value.indexOf(";", c_start);
		if (c_end == -1) {
			c_end = c_value.length;
        }
		c_value = unescape(c_value.substring(c_start,c_end));
	}
    if (c_value != 1) {
        c_value = 0;
    }
	return c_value;
}

function getCookieLng() {
// 	alert (getCookie(cookieLng));
 	return getCookie(cookieLng);
}

function saveLanguage(lng) {
	saveCookie (cookieLng, lng, 365);
}
	
/* Dictionary prodotto */

var dicProdItem = {
	prod: "?",
	item: "?",
	desc: "?",
	bann: "?",
    stop: ""
};

var parameters = location.search.substring(1).split("&");
for (var i = 0; i < parameters.length; i++) {
	var temp = parameters[i].split("=");
	dicProdItem[temp[0]] = decodeURIComponent(temp[1]);
//	dicProdItem[temp[0]] = unescape(encodeURIComponent(temp[1]));
}
