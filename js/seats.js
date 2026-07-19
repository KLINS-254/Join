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

/* ============================================
   LUXURY BUS LAYOUT (49 SEATS)
============================================ */

function generateLuxuryLayout(){

seatContainer.innerHTML="";

for(let row=0;row<12;row++){

const rowDiv=document.createElement("div");

rowDiv.className="seat-row";

// Left side
const left=document.createElement("div");
left.className="seat-side";

// Aisle
const aisle=document.createElement("div");
aisle.className="aisle";

// Right side
const right=document.createElement("div");
right.className="seat-side";

const leftSeat1=row*4+1;
const leftSeat2=row*4+2;
const rightSeat1=row*4+3;
const rightSeat2=row*4+4;

if(leftSeat1<=48)
left.appendChild(createSeat(leftSeat1));

if(leftSeat2<=48)
left.appendChild(createSeat(leftSeat2));

if(rightSeat1<=48)
right.appendChild(createSeat(rightSeat1));

if(rightSeat2<=48)
right.appendChild(createSeat(rightSeat2));

rowDiv.appendChild(left);
rowDiv.appendChild(aisle);
rowDiv.appendChild(right);

seatContainer.appendChild(rowDiv);

}

// Last Seat (49)

const lastRow=document.createElement("div");

lastRow.className="last-seat-row";

lastRow.appendChild(createSeat(49));

seatContainer.appendChild(lastRow);

}

/* ============================================
   EXECUTIVE LAYOUT (37 SEATS)
============================================ */

function generateExecutiveLayout(){

seatContainer.innerHTML="";

for(let row=0;row<9;row++){

const rowDiv=document.createElement("div");

rowDiv.className="seat-row";

const left=document.createElement("div");

left.className="seat-side";

const aisle=document.createElement("div");

aisle.className="aisle";

const right=document.createElement("div");

right.className="seat-side";

const s1=row*4+1;
const s2=row*4+2;
const s3=row*4+3;
const s4=row*4+4;

if(s1<=36)
left.appendChild(createSeat(s1));

if(s2<=36)
left.appendChild(createSeat(s2));

if(s3<=36)
right.appendChild(createSeat(s3));

if(s4<=36)
right.appendChild(createSeat(s4));

rowDiv.appendChild(left);

rowDiv.appendChild(aisle);

rowDiv.appendChild(right);

seatContainer.appendChild(rowDiv);

}

const vip=document.createElement("div");

vip.className="last-seat-row";

vip.appendChild(createSeat(37));

seatContainer.appendChild(vip);

}

/* ============================================
   NISSAN LAYOUT (14 SEATS)
============================================ */

function generateNissanLayout(){

seatContainer.innerHTML="";

for(let i=1;i<=14;i++){

seatContainer.appendChild(createSeat(i));

}

   }
