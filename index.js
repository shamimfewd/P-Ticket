const allSeat = document.getElementsByClassName("seat");
let count = 0;
let totalSeat = 40;
let fare = 550;
let totalFare = 0;

for (const seat of allSeat) {
  seat.addEventListener("click", function (e) {
    if (count >= 3) {
      document.getElementById("couponBtn").removeAttribute("disabled");
    }

    if (count >= 4) {
      alert("You Can Buy Only 4 Tickets");
      return;
    }

    const seatText = e.target.innerText;
    seat.classList.add("bg-[#1DD100]", "text-[#fff]");
    seat.disabled = true;
    seat.removeEventListener("click", arguments.callee);

    const seatContainer = document.getElementById("seatContainer");
    const li = document.createElement("li");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    p.innerText = seatText;
    p2.innerText = "Economy";
    p3.innerText = "550";
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    seatContainer.appendChild(li);

    document.getElementById("seatQuantity");
    document.getElementById("totalSeat");
    count = count + 1;
    totalSeat = totalSeat - 1;
    setInnerText("totalSeat", totalSeat);
    setInnerText("seatQuantity", count);

    document.getElementById("total");
    totalFare = totalFare + fare;
    setInnerText("total", totalFare);
  });
}

document.getElementById("couponBtn").addEventListener("click", function (e) {
  const couponField = document.getElementById("couponField").value;

  if (count >= 4) {
    if (couponField === "NEW15") {
      const discount = totalFare * 0.15;
      document.getElementById("discount15").innerText = discount;
      const minus = totalFare - parseInt(discount);
      document.getElementById("grandTotal").innerText = minus;
      document.getElementById("couponContainer").classList.add("hidden");
    } else if (couponField === "Couple 20") {
      const discount = totalFare * 0.2;
      document.getElementById("discount15").innerText = discount;
      const minus = totalFare - parseInt(discount);
      document.getElementById("grandTotal").innerText = minus;
      document.getElementById("couponContainer").classList.add("hidden");
    }else{
      alert('Invalid Coupon Code')
    }
  } else {
    return alert("You have to take at least 4 Tickets");
  }
});

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
