$(function(){

	$('#toggler').change(function() {
		if ($(this).is(':checked')) {
			chrome.browserAction.setIcon({path: "../img/on.png"});
			chrome.tabs.executeScript(null, {file: "content.js"});
		} else {
			chrome.browserAction.setIcon({path: "../img/off.png"});
		}
	});

});