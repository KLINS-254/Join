// ============================
// ENA COACH RESULTS PAGE
// ============================

// Read booking details
const booking = JSON.parse(localStorage.getItem("booking"));

const routeTitle = document.getElementById("routeTitle");
const travelDate = document.getElementById("travelDate");
const resultsCount = document.getElementById("resultsCount");
const busList = document.getElementById("busList");

// Redirect if user didn't search first
if (!booking) {
    window.location.href = "index.html";
}

// Display route and date
routeTitle.textContent =
    booking.from.toUpperCase() +
    " - " +
    booking.to.toUpperCase();

travelDate.textContent = booking.date;

// Filter buses
const filteredBuses = buses.filter(bus => {

    const route =
        booking.from + "-" + booking.to;

    return bus.route === route;

});

// Results count
resultsCount.textContent =
    filteredBuses.length +
    " Results Found";

// Generate cards
filteredBuses.forEach(bus => {

    let typeClass = "";

    if (bus.type === "Luxury") {

        typeClass = "luxury";

    }

    else if (bus.type === "Executive") {

        typeClass = "executive";

    }

    else {

        typeClass = "nissan";

    }

    busList.innerHTML += `

<div class="bus-card">

<div>

<span class="route">

${bus.route}

</span>

<span class="bus-type ${typeClass}">

${bus.type}

</span>

</div>

<div class="times">

<div class="time-box">

<h2>${bus.departure}</h2>

<p>Departure</p>

</div>

<div class="duration">

${bus.duration}

</div>

<div class="time-box">

<h2>${bus.arrival}</h2>

<p>Arrival</p>

</div>

</div>

<div class="bottom">

<div>

<div class="price">

KSh ${bus.price}

</div>

<div class="rating">

⭐ ${bus.rating}

</div>

<div class="seats">

${bus.seatsLeft} Seats Left

</div>

</div>

<button

class="view-btn"

onclick="viewSeats(${bus.id})">

VIEW SEATS

</button>

</div>

</div>

`;

});

// ============================
// VIEW SEATS
// ============================

function viewSeats(id){

    const selectedBus =
        buses.find(bus => bus.id === id);

    localStorage.setItem(
        "selectedBus",
        JSON.stringify(selectedBus)
    );

    window.location.href =
        "seats.html";

}
