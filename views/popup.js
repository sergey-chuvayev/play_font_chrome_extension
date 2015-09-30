$(function(){

	var allFonts = [];
	var fontsLink = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBueGTFAxMHqwZNjVnj7X_-BPbhYcuobhE'
	jQuery.getJSON(fontsLink, function(data){
		console.log(data);
		for(var i=0; i<data.items.length; i++) {
			console.log();
			if (data.items[i].subsets.indexOf('cyrillic') !== -1) {
				var font = data.items[i].family;
				allFonts.push(font);
				$('#fonts-list').append('<option value="'+font+'">'+font+'</option>')
			}
		}
	});

	$('#fonts-list').change(function(){
		var fontVal = $('#fonts-list').val();
		chrome.tabs.getSelected(null,function(tab){
	        chrome.tabs.sendMessage(tab.id, {font: fontVal}, function(response){});
	    });
	});

	$('#random').click(function(){
		chrome.tabs.getSelected(null,function(tab){
	        chrome.tabs.sendMessage(tab.id, {fonts: allFonts}, function(response){});
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