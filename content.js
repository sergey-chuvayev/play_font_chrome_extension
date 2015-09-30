
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    $('head').append('<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family='+request.req+'">')
    $("[selected_elem]").css('font-family',request.req)
});


$('body').click(function(event) {
	var elem = $(event.target);
	if (elem.attr('selected_elem')) {
		elem.css('outline','none').removeAttr('selected_elem');
	} else {
		elem.css('outline','1px solid red').attr('selected_elem','true');
	}
});
