
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//   	console.log(request);
//     if (request.state) {
      // contentFunction();
//     }
// });


$('body').click(function(event) {
	var elem = $(event.target);
	if (elem.attr('selected_elem')) {
		elem.css('outline','none').removeAttr('selected_elem');
	} else {
		elem.css('outline','1px solid red').attr('selected_elem','true');
	}
});
