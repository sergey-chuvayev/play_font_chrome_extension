
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	var str = '';
	
	if (request.fonts !== undefined) {
		$.each(request.fonts, function(i, val){
			str += val + '|';
		});
    	$('head').append('<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family='+str+'">');
    	var allBlocks = $('p, h1, h2, h3, h4, h5, span, div, a');


    	$.each(allBlocks, function(i, val) {
    		var randFontIndex = getRandomInt(0, request.fonts.length);
    		$(val).css('font-family',request.fonts[randFontIndex]);
    	});
	}
    
    if (request.font !== undefined) {
    	$('head').append('<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family='+request.font+'">')
    	$("[selected_elem]").css('font-family',request.font);
    }
});


$('body').click(function(event) {
	var elem = $(event.target);
	if (elem.attr('selected_elem')) {
		elem.css('box-shadow','none').removeAttr('selected_elem');
	} else {
		elem.css('box-shadow','rgba(255, 0, 0, 0.72) 0px 0px 18px').attr('selected_elem','true');
	}
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}