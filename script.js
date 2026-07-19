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
// =========================
// TOGGLE SEAT
// =========================

function toggleSeat(seat){

    if(seat.classList.contains("booked")) return;

    const seatNumber = seat.dataset.seat;

    if(seat.classList.contains("selected")){

        seat.classList.remove("selected");

        seat.classList.add("available");

        selectedSeats = selectedSeats.filter(
            s => s !== seatNumber
        );

    }else{

        seat.classList.remove("available");

        seat.classList.add("selected");

        selectedSeats.push(seatNumber);

    }

    updateSelectedSeats();

}

// =========================
// UPDATE SELECTED SEATS
// =========================

function updateSelectedSeats(){

    if(selectedSeats.length===0){

        output.innerHTML="No seats selected";

        return;

    }

    output.innerHTML="";

    selectedSeats.sort();

    selectedSeats.forEach(seat=>{

        const badge=document.createElement("span");

        badge.className="seat-badge";

        badge.textContent=seat;

        output.appendChild(badge);

    });

}

// =========================
// CLOSE BUTTON
// =========================

const closeBtn=document.querySelector(".close-btn");

closeBtn.addEventListener("click",()=>{

    document.querySelector(".overlay").style.display="none";

});

// =========================
// ESC KEY CLOSE
// =========================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        document.querySelector(".overlay").style.display="none";

    }

});

// =========================
// INITIALIZE
// =========================

updateSelectedSeats();
