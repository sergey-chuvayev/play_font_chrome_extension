
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    $('head').append('<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family='+request.req+'">')
    $("[selected_elem]").css('font-family',request.req)
});


$('body').click(function(event) {
	var elem = $(event.target);
	if (elem.attr('selected_elem')) {
		elem.css('box-shadow','none').removeAttr('selected_elem');
	} else {
		elem.css('box-shadow','rgba(255, 0, 0, 0.72) 0px 0px 18px').attr('selected_elem','true');
	}
});
