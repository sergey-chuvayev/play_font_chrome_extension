$(function(){

	var fontsLink = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBueGTFAxMHqwZNjVnj7X_-BPbhYcuobhE'
	jQuery.getJSON(fontsLink, function(data){
		for(var i=0; i<data.items.length; i++) {
			var font = data.items[i].family;
			$('#fonts-list').append('<option value="'+font+'">'+font+'</option>')
		}
	});

	$('#fonts-list').change(function(){
		var fontVal = $('#fonts-list').val();
		chrome.tabs.getSelected(null,function(tab){
	        chrome.tabs.sendMessage(tab.id, {req: fontVal}, function(response){});
	    });
	});

	// chrome.tabs.executeScript(null, {file: "content.js"});
	

	// $('#toggler').change(function() {
	// 	if ($(this).is(':checked')) {
	// 		chrome.browserAction.setIcon({path: "../img/on.png"});
	// 	} else {
	// 		chrome.browserAction.setIcon({path: "../img/off.png"});
	// 	}
	// });

});