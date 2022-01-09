let images = [
  './img/img1.jpg', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg',
  './img/img5.jpg', './img/img6.jpg', './img/img7.jpg', './img/img8.jpg',
  './img/img9.jpg', './img/img10.jpg', './img/img11.jpg', './img/img12.jpg',
  './img/img13.jpg', './img/img14.jpg', './img/img15.jpg', './img/img16.jpg', 
  './img/img17.jpg', './img/img18.jpg', './img/img19.jpg', './img/img20.jpg', './img/img21.jpg'];

let imgContainer = document.getElementById('image-container');

let column1 = document.getElementsByClassName('photos_column')[0];
let column2 = document.getElementsByClassName('photos_column')[1];
let column3 = document.getElementsByClassName('photos_column')[2];

function renderImages(){
  let x = window.matchMedia('(max-width: 1100px)');
  columnQuery(x);
  x.addEventListener(columnQuery());
}

function columnQuery(x){
  if(x.matches){
    column3.classList.add('d-none');

    for(let i=0; i < images.length; i++) {
     
      column1.innerHTML += `
      <div class="img-box">
        <img src="${images[i]}">
      </div>`;
      i++;
    }
    for(let i=1; i < images.length; i++){
      column2.innerHTML += `
      <div class="img-box">
        <img src="${images[i]}">
      </div>`;
      i++;
  }
}else{
  column3.classList.remove('d-none');

  for(let i=0; i < images.length; i++) {
    
    column1.innerHTML += `
    <div class="img-box">
      <img src="${images[i]}">
    </div>`;
    i = i + 2;

  }
  
  for(let i=1; i < images.length; i++){
    column2.innerHTML += `
    <div class="img-box">
      <img src="${images[i]}">
    </div>`;
    i = i + 2;
  }

  for(let i=2; i < images.length; i++){
    column3.innerHTML += `
    <div class="img-box">
      <img src="${images[i]}">
    </div>`;
    i = i + 2;
  }
}

};


