// ============================
// ENA COACH BOOKING APP
// app.js
// ============================

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    const from = document.getElementById("from");
    const to = document.getElementById("to");
    const date = document.getElementById("travelDate");
    const searchBtn = document.getElementById("searchBus");

    // Set today's date as minimum
    const today = new Date().toISOString().split("T")[0];
    date.min = today;

    searchBtn.addEventListener("click", searchBus);

});

// ============================
// SEARCH FUNCTION
// ============================

function searchBus() {

    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const travelDate = document.getElementById("travelDate").value;

    // Validate From
    if (from === "") {
        alert("Please select your departure location.");
        return;
    }

    // Validate To
    if (to === "") {
        alert("Please select your destination.");
        return;
    }

    // Same place
    if (from === to) {
        alert("Departure and destination cannot be the same.");
        return;
    }

    // Date
    if (travelDate === "") {
        alert("Please select your travel date.");
        return;
    }

    // Save Booking
    const booking = {
        from: from,
        to: to,
        date: travelDate
    };

    localStorage.setItem(
        "booking",
        JSON.stringify(booking)
    );

    // Open Results Page
    window.location.href = "results.html";

}

// ============================
// CLEAR OLD BOOKING
// ============================

function clearBooking() {

    localStorage.removeItem("booking");

}

// ============================
// SWAP LOCATIONS (Future)
// ============================

function swapLocations() {

    const from = document.getElementById("from");
    const to = document.getElementById("to");

    let temp = from.value;

    from.value = to.value;

    to.value = temp;

}
