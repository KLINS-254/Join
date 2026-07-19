// ===============================
// ENA COACH SEAT SELECTION
// ===============================

// Load selected bus
const bus = JSON.parse(localStorage.getItem("selectedBus"));

if (!bus) {

    window.location.href = "results.html";

}

// ===============================
// DISPLAY BUS DETAILS
// ===============================

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

// ===============================
// CONTAINERS
// ===============================

const seatContainer =
document.getElementById("seatContainer");

const selectedSeatsBox =
document.getElementById("selectedSeats");

const totalPrice =
document.getElementById("totalPrice");

// ===============================
// BOOKED SEATS
// ===============================

const bookedSeats = [

3,5,8,12,19,21,26

];

let selectedSeats = [];

// ===============================
// GENERATE SEATS
// ===============================

function generateSeats(total){

seatContainer.innerHTML="";

for(let i=1;i<=total;i++){

const seat=document.createElement("div");

seat.className="seat";

seat.innerHTML=i;

seat.dataset.number=i;

if(bookedSeats.includes(i)){

seat.classList.add("booked");

}

else{

seat.classList.add("available");

seat.onclick=()=>selectSeat(seat);

}

seatContainer.appendChild(seat);

}

  }
