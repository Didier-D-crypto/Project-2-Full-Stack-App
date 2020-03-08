/* City-Search Elements */
const citySearchStartDate = $("#start-date");
const citySearchEndDate = $("#end-date");
const citySearch = $("#searched-city");
const eventSrchBtn = $("#event-search");

/* Itinerary-input Elements */
const itinStartDate = $("#itinStartDate");
const itinEndDate = $("#itinEndDate");
const itinCity = $("#itinCity");
const foodTxtArea = $("#foodTxtArea");
const itinAct = $("#itinAct");
const itinNight = $("#itinNight");
const saveItinBtn = $("#saveItinBtn");
const emailBtn = $("#emailBtn");

$(eventSrchBtn).on("click", event => {
  let newCitySearch = {
    startDate: $(citySearchStartDate).val(),
    endDate: $(citySearchEndDate).val(),
    city: $(citySearch).val()
  };
  console.log(newCitySearch);
});

$(saveItinBtn).on("click", event => {
  let newItin = {
    start_date: $(itinStartDate).val(),
    end_date: $(itinEndDate).val(),
    city: $(itinCity).val(),
    food: $(foodTxtArea).val(),
    activities: $(itinAct).val(),
    nighttime: $(itinNight).val()
  };
  console.log(newItin);
});

function eventAJAX(startDate, endDate, city) {}
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
