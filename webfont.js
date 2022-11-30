function loadFont(fontfamily){   
    WebFont.load({
	google: {
            families: [ fontfamily ]
        },
        context: window.parent
    });
    // Self
    WebFont.load({
	google: {
	    families: [ fontfamily ]
	}
    });
    
    return true;
}

function applyFont(fontfamily, classname){
    var x = document.getElementsByClassName(classname);
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.fontFamily = fontfamily;
      }
}

// https://davidwalsh.name/query-string-javascript
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
                };
                
document.addEventListener('DOMContentLoaded', function() {
    if (loadFont(getUrlParameter('font')))
    {
	console.log("Custom font loaded successfully.");
    } else
    {
	console.log("Custom font did not load.");
    }
    
    applyFont(getUrlParameter('font'), 'customfont');
});
