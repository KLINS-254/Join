function selectSeat(seat){

if(seat.classList.contains("booked")) return;

const seatNo = Number(seat.dataset.number);

if(seat.classList.contains("selected")){

seat.classList.remove("selected");
seat.classList.add("available");

selectedSeats = selectedSeats.filter(
s => s !== seatNo
);

}else{

seat.classList.remove("available");
seat.classList.add("selected");

selectedSeats.push(seatNo);

}

updateBooking();

}
