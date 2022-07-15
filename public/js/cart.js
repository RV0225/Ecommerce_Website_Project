let itemcount = document.querySelectorAll(".item-count");
let increment = document.querySelectorAll(".increment");
let decrement = document.querySelectorAll(".decrement");
let price = document.querySelectorAll(".sm-price");
let b = document.querySelector(".bill");
var bill = 100;
for (let i = 0; i < 3; i++) {
  increment[i].addEventListener("click", () => {
    if (itemcount[i].innerHTML >= 0) {
      itemcount[i].innerHTML++;
      bill = bill + parseInt(price[i].innerHTML);
      b.innerHTML = bill;
      price[i].innerHTML *= 2;
    }
  });
}
for (let i = 0; i < 3; i++) {
  decrement[i].addEventListener("click", () => {
    if (itemcount[i].innerHTML > 1) {
      itemcount[i].innerHTML--;

      price[i].innerHTML /= 2;
      bill = bill - parseInt(price[i].innerHTML);
      b.innerHTML = bill;
    }
  });
}
let buy = document.querySelector(".checkout-btn");
buy.addEventListener("click", () => {
  alert("Your Order is Placed");
});
