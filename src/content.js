console.log('yo');

$('body').click(function(event) {
	var elem = $(event.target);
	if (elem.attr('selected_elem')) {
		elem.css('border','none').removeAttr('selected_elem');
	} else {
		elem.css('border','2px solid red').attr('selected_elem','true');
	}
});