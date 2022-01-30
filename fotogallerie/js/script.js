let images = [
  './img/img1.jpg', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg',
  './img/img5.jpg', './img/img6.jpg', './img/img7.jpg', './img/img8.jpg',
  './img/img9.jpg', './img/img10.jpg', './img/img11.jpg', './img/img12.jpg',
  './img/img13.jpg', './img/img14.jpg', './img/img15.jpg', './img/img16.jpg',
  './img/img17.jpg', './img/img18.jpg', './img/img19.jpg', './img/img20.jpg',
  './img/img21.jpg'
];
let header = document.getElementById('header');
let imgContainer = document.getElementById('image-container');
let bigScreen = document.getElementById('bigScreen');
let symbols = document.getElementById('bigScreenSymbols')

function renderImages() {

  for (let i = 0; i < images.length; i++) {
    imgContainer.innerHTML += `
        <div class="img-box">
          <img onclick="openImg(${i})" src="${images[i]}">
        </div>
      `;
  }
};

function openImg(i) {
  bigPic()
  bigScreen.innerHTML += `
  <img src="${images[i]}">
  <div id="bigScreenSymbols" class="bigScreen-symbols">
  <i class="fas fa-times exit" onclick="closeImg()"></i>
  <div id="left-right">
    <i class="fas fa-chevron-circle-left" onclick="previousImg(${i})"></i>
    <i class="fas fa-chevron-circle-right" onclick="nextImg(${i})"></i>
  </div>
  `;

}

function bigPic() {
  header.classList.add('d-none');
  bigScreen.classList.remove('d-none');
  imgContainer.style = 'display: none';
  bigScreen.style = 'display: flex;'
  bigScreen.innerHTML = ''

}

function closeImg() {
  header.classList.remove('d-none');
  bigScreen.style = 'display: none'
  imgContainer.style = 'display: '
}

function previousImg(i) {
  i--
  if (i >= 0) openImg(i)
  else openImg(images.length - 1)
}

function nextImg(i) {
  i++
  if (i < images.length) openImg(i)
  else openImg(0)
}