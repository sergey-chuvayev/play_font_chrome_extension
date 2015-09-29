console.log('yo');

$('body').click(function(event) {
	alert($(event.target).text());
});