'use strict'

let x = window.matchMedia("(max-width: 1000px)");
let shoppingBasket = ['Brurger Menu with Muffin', 'Burger Menu with Drink', 'Sweet Potato Fries', 'Salad - Veggie Delight Salad', 'Burger - Veggie BBQ-Burger (vegan)', 'Wraps - Veggie BBQ Wrap (vegan)', 'Wraps - Veggie Cheese Wrap (vegan)', 'Avocado Fries(vegetarian)', 'Dessert - Chocolate Muffin', 'Dessert - Blueberry Muffin'];
let prices = [14.90, 14.90, 4.90, 4.50, 6.90, 9.80, 10.90, 9.80, 10.50, 6.90, 3.90, 3.90];

let basketProducts = [];
let basketPrices = [];
let basketAmounts = [];

function $(id) {
  document.getElementById(id);
}

function init() {
  asideWindow();

}

function asideWindow() {
  window.onscroll = function () {
    let aside = document.querySelector('aside');
    if (window.scrollY > 69) {
      aside.style.position = 'fixed';
      aside.style.top = '0';
    } else {
      aside.style.position = 'relative';
      aside.style.top = '';
    }
  }
}


function generateMenu(amount, name, price)

function addToBasket(name, price) {
  for (let i = 0; i < shoppingBasket.length; i++) {
    let basketCard = $('basket-card');
    basketCard.innerHTML += `
    <div class="added-menu">
      <div class="menu flex">
        <div>
          <b><span>${amount}</span></b>
          <b><span>${name[i]}</span></b>
        </div>
        <div>
          <span class="text-small">${price[i]}</span>
        </div>
      </div>
      <div class="add-node flex">
        <a href="#">Add note</a>
        <div class="flex">
          <div class="add-box">
          <i class="fas fa-minus" onclick="remove()"></i>
          </div>
          <div class="add-box">
          <i class="fas fa-plus" onclick="add()">
          </i></div>
        
        </div>
      </div>
  
    </div>
    `;
  }


}

function add() {

}


function add() {

}

function remove() {

}