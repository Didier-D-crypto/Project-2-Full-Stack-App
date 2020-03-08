// function eventAJAX() {
// 	// Write all AJAX response information to the page upon category click
// 	$("#eventInfo").empty();
// 	$("#eventImage").empty();

// 	var api_key = "ZjB3tDMBWkFrcDq4";
// 	var queryURL = "https://api.eventful.com/json/events/search?";

// 	var searchURL = queryURL + "app_key=" + api_key + "&location=" + address + "&within=10&start_time=" + startdate + "&stop_time=" + enddate;
// 	console.log(searchURL);

// 	$.ajax({
// 		url: searchURL,
// 		dataType: 'jsonp',
// 		method: "POST",
// 	}).done(function(response) {
// 		// console.log(JSON.parse(response).events);
//         console.log(response);
//     }

// }
