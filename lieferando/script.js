'use strict'


function $(id) {
  document.getElementById(id);
}

let basketCheckout = $('basket-checkout');
let subtotal;
let endprice;




function init() {

}



function addToBasket(amount, name, price) {
  document.getElementById('basket-card').innerHTML += `
  <div class="added-menu">

    <div class="menu flex">
      <div>
        <b><span>${amount}</span></b>
        <b><span>${name}</span></b>
      </div>
      <div>
        <span class="text-small">${price}</span>
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


function add() {

}

function remove() {

}