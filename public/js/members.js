$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  // function postAReview(city) {
  //   console.log(city);
  // }
});

let itinCardContainer = $(".itinerary-cards");

// get new itin posts all itineraries from our database to the members page
getNewItin();

// New itinerary get route to append divs to page
function getNewItin() {
  $.get("api/itineraries", function(data) {
    console.log(data);
  })
    .then(function(response) {
      // reverse for loop adds newest itinerary at top
      for (var i = response.length - 1; i >= 0; i--) {
        let start = moment(response[i].start_date).format("l");
        let end = moment(response[i].end_date).format("l");
        let cityFromForm = response[i].city;
        let food = response[i].food;
        let activities = response[i].activities;
        let nighttime = response[i].nighttime;
        let reviews = response[i].reviews;
        let id = response[i].id;

        var itinCards = $(`          <div class="tile is-parent">`).html(
          `<article class="tile is-child box">
        <p class="title">
          <i class="fas fa-map-marker-alt"></i> ${cityFromForm}
        </p>
        <p class="subtitle">${start}-${end}</p>
        <p class="card-subhead">Food:</p>
        ${food}
        <p class="card-subhead">Activites:</p>
        ${activities}
        <p class="card-subhead">Nightlife:</p>
        ${nighttime}
        <p class="card-subhead">Reviews:</p>
        <p>
        ${reviews}
        </p>
        <div id="addReview${id}">
          <!-- *****NEW REVIEW POSTED HERE**** -->
        </div>
        <br />
        <div class="field">
          <label class="label"
            >Have you used this itinerary? If so leave a review.</label
          >
          <div class="control">
            <!--Itin Review Textarea-->
            <form id="itinRevInput${id}">
              <textarea
                id="${id}"
                class="textarea"
                placeholder="What did you enjoy or not enjoy this trip? Any suggestions for other travelers?"
              ></textarea>
              <button id="postReview${id}" class="button is-info is-light">
                Post My Review
              </button>
            </form>
          </div>
        </div>
      </article>
    </div>`
        );
        $(".itinerary-cards").append(itinCards);
      }
      console.log(itinCards);
    })
    .catch(function() {
      return $(".error-message").text(
        "Oh No! There are no pre-existing Itineraries, Click Create Your Own to create one!"
      );
    });
}
