// =========================
// BOOKED SEATS
// =========================

const bookedSeats = [

"A1",
"A2",
"A3",
"A11",
"A13",
"A15",

"B4",
"B6"

];

// =========================
// SELECTED SEATS
// =========================

let selectedSeats = [];

// =========================
// CONTAINERS
// =========================

const leftContainer =
document.getElementById("leftSeats");

const rightContainer =
document.getElementById("rightSeats");

const output =
document.getElementById("selectedSeats");

// =========================
// CREATE SEAT
// =========================

function createSeat(name){

const seat =
document.createElement("div");

seat.className="seat";

if(bookedSeats.includes(name)){

seat.classList.add("booked");

}else{

seat.classList.add("available");

}

seat.dataset.seat=name;

seat.innerHTML=`

<i></i>

<span>${name}</span>

`;

if(!bookedSeats.includes(name)){

seat.addEventListener(

"click",

()=>{

toggleSeat(seat);

}

);

}

return seat;

}

// =========================
// GENERATE LEFT SIDE
// =========================

for(

let i=1;

i<=24;

i++

){

leftContainer.appendChild(

createSeat(

"A"+i

)

);

}

// =========================
// GENERATE RIGHT SIDE
// =========================

for(

let i=1;

i<=24;

i++

){

rightContainer.appendChild(

createSeat(

"B"+i

)

);

}

// =========================
// SEAT 25
// =========================

const seat25 =

document.querySelector(

".rear-seat .seat"

);

seat25.innerHTML=`

<i></i>

<span>25</span>

`;

seat25.addEventListener(

"click",

()=>{

toggleSeat(seat25);

}

);
