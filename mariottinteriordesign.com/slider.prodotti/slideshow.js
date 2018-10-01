
window.addEventListener?window.addEventListener('load',so_init,false):window.attachEvent('onload',so_init);

var d=document, imgs = new Array(), current=0;

var divSubTitle;

function so_init()
{
	if(!d.getElementById || !d.createElement)
        return;

	css = d.createElement('link');
	css.setAttribute('href','slider.prodotti/slideshow.css');
	css.setAttribute('rel','stylesheet');
	css.setAttribute('type','text/css');
	d.getElementsByTagName('head')[0].appendChild(css);

	imgs = d.getElementById('slideshow').getElementsByTagName('img');
	for(i=0; i<imgs.length; i++) {
        imgs[i].xOpacity = 0;
        imgs[i].width = $("#slideshow").width();
    }
	imgs[0].style.display = 'block';
	imgs[0].xOpacity = .99;
    

    $("#divSubTitle").width($("#slideshow").width() - 20); 
    divSubTitle = d.getElementById('divSubTitle')
    showDescri(0);
	setTimeout(so_xfade,3000);
}

function showDescri(idx) {
    if (divSubTitle === null)
        return;
    divSubTitle.style.visibility = "visible";
    divSubTitle.style.position = "absolute";
    divSubTitle.style.top = (imgs[idx].height + 60) +"px";
    divSubTitle.innerHTML = imgs[idx].title;    
}

function so_xfade()
{
    cOpacity = imgs[current].xOpacity;
	nIndex = imgs[current+1]?current+1:0;
	nOpacity = imgs[nIndex].xOpacity;

	cOpacity-=.05;
	nOpacity+=.05;

	imgs[nIndex].style.display = 'block';
	imgs[current].xOpacity = cOpacity;
	imgs[nIndex].xOpacity = nOpacity;

	setOpacity(imgs[current]);
	setOpacity(imgs[nIndex]);

    if(cOpacity <= 0) {
		imgs[current].style.display = 'none';
		current = nIndex;
		setTimeout(so_xfade,3000);
        showDescri(nIndex);
  }
	else {
        if (divSubTitle !== null)
            divSubTitle.style.visibility = "hidden";

		setTimeout(so_xfade,50);
	}

	function setOpacity(obj)
	{
		if(obj.xOpacity>.99)
		{
            obj.xOpacity = .99;
			return;
		}

		obj.style.opacity = obj.xOpacity;
		obj.style.MozOpacity = obj.xOpacity;
		obj.style.filter = 'alpha(opacity=' + (obj.xOpacity*100) + ')';
	}
}