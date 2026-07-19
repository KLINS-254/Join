/* ============================================
   ENA COACH - seats.js
============================================ */

// ============================================
// GET SELECTED BUS
// ============================================

const bus = JSON.parse(localStorage.getItem("selectedBus"));

if (!bus) {

    window.location.href = "results.html";

}

// ============================================
// DISPLAY BUS DETAILS
// ============================================

document.getElementById("busName").textContent =
bus.company + " " + bus.type;

document.getElementById("route").textContent =
bus.route.replace("-", " - ");

document.getElementById("departure").textContent =
bus.departure;

document.getElementById("arrival").textContent =
bus.arrival;

document.getElementById("price").textContent =
"KSh " + bus.price;

// ============================================
// CONTAINERS
// ============================================

const seatContainer =
document.getElementById("seatContainer");

const selectedSeatsBox =
document.getElementById("selectedSeats");

const totalPrice =
document.getElementById("totalPrice");

const continueBtn =
document.getElementById("continueBtn");

// ============================================
// BOOKED SEATS
// ============================================

const bookedSeats = [

2,
5,
8,
12,
17,
20,
24,
29,
34,
39,
42,
46

];

// ============================================
// SELECTED SEATS
// ============================================

let selectedSeats = [];

// ============================================
// CREATE SEAT
// ============================================

function createSeat(number){

const seat =
document.createElement("div");

seat.className =
"seat available";

seat.dataset.number =
number;

seat.innerHTML =

`
<div class="arm-left"></div>

<div class="arm-right"></div>

<span>${number}</span>
`;

if(bookedSeats.includes(number)){

seat.classList.remove("available");

seat.classList.add("booked");

}

else{

seat.onclick = function(){

toggleSeat(this);

};

}

return seat;

}

// ============================================
// TOGGLE SEAT
// ============================================

function toggleSeat(seat){

if(seat.classList.contains("booked")){

return;

}

const number =
Number(seat.dataset.number);

if(seat.classList.contains("selected")){

seat.classList.remove("selected");

seat.classList.add("available");

selectedSeats =
selectedSeats.filter(

n=>n!==number

);

}

else{

seat.classList.remove("available");

seat.classList.add("selected");

selectedSeats.push(number);

}

updateSummary();

}

// ============================================
// UPDATE SUMMARY
// ============================================

function updateSummary(){

selectedSeats.sort(

(a,b)=>a-b

);

if(selectedSeats.length===0){

selectedSeatsBox.innerHTML =
"None";

totalPrice.innerHTML =
"KSh 0";

return;

}

selectedSeatsBox.innerHTML =
selectedSeats.join(", ");

const total =
selectedSeats.length *
bus.price;

totalPrice.innerHTML =
"KSh " + total;

}
