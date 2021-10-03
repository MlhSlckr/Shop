const baskets = document.querySelectorAll(".basket");
const shopping = document.querySelector(".shopping");
const shop = document.querySelector(".shop");
const price = document.querySelector(".price");
const text = document.querySelector(".text");
const title = document.querySelector(".title");
const img = document.querySelector(".img");
const numbers = document.querySelectorAll(".number");
const btns = document.querySelectorAll(".btn");
const pluss = document.querySelectorAll(".plus");
const minuss = document.querySelectorAll(".minus");
let shopTotal = document.querySelector(".shop-total-price");
let basket = [];

shopping.addEventListener("click", () => {
  shop.classList.toggle("left");
});

baskets.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const shoe = e.target.parentElement.parentElement.parentElement;
    const custom = e.currentTarget.parentElement.children[2];

    const item = document.createElement("div");
    item.classList.add("item");

    const itemLeft = document.createElement("div");
    itemLeft.classList.add("item-left");

    const itemRight = document.createElement("div");
    itemRight.classList.add("item-right");

    const itemTitle = document.createElement("p");
    itemTitle.classList.add("item-title");
    itemTitle.textContent = shoe.children[1].children[0].textContent;

    const itemPrice = document.createElement("span");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = shoe.children[1].children[1].dataset.id;

    const itemImg = document.createElement("img");
    itemImg.classList.add("item-img");
    itemImg.src = shoe.children[0].src;

    const itemCount = document.createElement("span");
    itemCount.classList.add("item-count");
    itemCount.textContent = " $ " + " x " + custom.value + " = ";

    const itemTotalPrice = document.createElement("span");
    itemTotalPrice.classList.add("item-total-price");
    itemTotalPrice.textContent = itemPrice.textContent * custom.value;

    basket.push({
      urun: itemTitle.textContent,
      price: parseInt(itemTotalPrice.textContent),
    });

    let sumBasket = basket.reduce((acc, item) => acc + item.price, 0);

    shopTotal.textContent = sumBasket;

    itemLeft.appendChild(itemImg);
    itemRight.appendChild(itemTitle);
    itemRight.appendChild(itemPrice);
    itemRight.appendChild(itemCount);
    itemRight.appendChild(itemTotalPrice);

    item.appendChild(itemLeft);
    item.appendChild(itemRight);

    shop.appendChild(item);
  });
});

btns.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const custom = e.currentTarget.parentElement.children[2];
    if (btn.classList.contains("plus")) {
      custom.value++;
    }
    if (btn.classList.contains("minus")) {
      if (custom.value == 1) {
        custom.style.border = "1px solid red";
        setTimeout(() => {
          custom.style.border = "";
        }, 1500);
      } else {
        custom.value--;
      }
    }
  });
});
