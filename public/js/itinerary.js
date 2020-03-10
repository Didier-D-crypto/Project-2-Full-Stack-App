/* City-Search Elements */
const citySearchStartDate = $("#start-date");
const citySearchEndDate = $("#end-date");
const citySearch = $("#searched-city");
const eventSrchBtn = $("#event-search");
const eventDiv = $("#event-response");

/* Itinerary-input Elements */
const itinStartDate = $("#itinStartDate");
const itinEndDate = $("#itinEndDate");
const itinCity = $("#itinCity");
const foodTxtArea = $("#foodTxtArea");
const itinAct = $("#itinAct");
const itinNight = $("#itinNight");
const saveItinBtn = $("#saveItinBtn");
const emailBtn = $("#emailBtn");

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

$(eventSrchBtn).on("click", event => {
  $("#event-response").empty();
  let startDate = $(citySearchStartDate)
    .val()
    .trim();
  let newStartDate = moment(startDate).format("YYYYMMDD");
  let endDate = $(citySearchEndDate)
    .val()
    .trim();
  let newEndDate = moment(endDate).format("YYYYMMDD");
  let city = $(citySearch).val();

  eventAJAX(newStartDate, newEndDate, city);
});

function eventAJAX(newStartDate, newEndDate, city) {
  event.preventDefault();
  $("#event-response").empty();

  const api_key = "ZjB3tDMBWkFrcDq4";
  const urlquery = "https://api.eventful.com/json/events/search?";
  const searchurl = `${urlquery}app_key=${api_key}&location=${city}&within=10&date=${newStartDate}00-${newEndDate}00`;

  console.log(searchurl);
  $.ajax({
    url: searchurl,
    dataType: "jsonp",
    method: "POST"
  }).done(function(response) {
    console.log(response);
    // console.log(response.events.event);
    // if (response.status === 400 || response.events.length === 0) {
    //   return $(".error-message").text(
    //     "No events found! Try again"
    //   );
    // }
    for (i = 0; i < response.events.event.length; i++) {
      let title = response.events.event[i].title;
      let address = response.events.event[i].venue_address;
      let start = response.events.event[i].start_time;
      let formatStart = moment(start).format("LLL");
      let end = response.events.event[i].stop_time;
      let formatEnd = moment(end).format("LLL");
      let url = response.events.event[i].url;
      let cityname = response.events.event[i].city_name;
      let region = response.events.event[i].region_name;

      var newCard = $(`<div class="card">`)
        .html(`      <div class="card-content" style="background-color: thistle;">
      <div class="content"><h1>${title}</h1>
        <p>
         Event begins: ${formatStart}
        </p>
        <p>Event ends: ${formatEnd}</p>
        <p>${address}</p>
        <p>${cityname}, ${region}</p>
        <a href="${url}">Click Here to See More</a>
        <br />
      </div>
    </div>
    </div>
    <br />`);
      $("#event-response").append(newCard);
    }
  });
}
