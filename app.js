const baskets = document.querySelectorAll(".basket");
const shopping = document.querySelector(".shopping");
const shop = document.querySelector(".shop");
const price = document.querySelector(".price");
const text = document.querySelector(".text");
const title = document.querySelector(".title");
const img = document.querySelector(".img");
const numbers = document.querySelectorAll(".number");
const minuss = document.querySelectorAll(".minus");
const pluss = document.querySelectorAll(".plus");

let totalPrice = 0;
/*
const items = [
  {
    title: "Shoes1",
    img: "https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682&w=1600&h=900",
    price: "15.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente cum amet accusantium exercitationem expedita? A facilis doloribus hic cumque totam non commodi impedit quisquam dolor dicta. Ea,dignissimos corrupti!",
  },
  {
    title: "Shoes2",
    price: "20.00",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente cum amet accusantium exercitationem expedita? A facilis doloribus hic cumque totam non commodi impedit quisquam dolor dicta. Ea,dignissimos corrupti!",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const item = items[currentItem];
  img.src = item.img;
  title.textContent = item.title;
  price.textContent = item.price;
  text.textContent = item.desc;
});
*/

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
    itemPrice.textContent = shoe.children[1].children[1].dataset.id + " $";

    const itemImg = document.createElement("img");
    itemImg.classList.add("item-img");
    itemImg.src = shoe.children[0].src;

    const itemCount = document.createElement("span");
    itemCount.classList.add("item-count");
    itemCount.textContent = custom.value;

    itemLeft.appendChild(itemImg);
    itemRight.appendChild(itemTitle);
    itemRight.appendChild(itemPrice);
    itemRight.appendChild(itemCount);

    item.appendChild(itemLeft);
    item.appendChild(itemRight);

    shop.appendChild(item);
  });
});

pluss.forEach((plus) => {
  let count = 1;
  plus.addEventListener("click", (e) => {
    const custom = e.currentTarget.parentElement.children[2];
    count++;
    console.log(count);
    custom.value = count;
  });
});
