"strict"
let main = document.getElementById('title');
let header = document.getElementById('headline');

function english() {
  main.innerHTML = 'SAKURA RAMEN - THE BEST RAMEN IN TOWN';
  document.getElementById('menu-bar').innerHTML = 'MENU';
  document.getElementById('location-bar').innerHTML = 'LOCATION';
  document.getElementById('about-bar').innerHTML = 'ABOUT';
  document.getElementById('headline').innerHTML = 'SAKURA RAMEN';
  document.getElementById('headline-span').innerHTML = 'THE BEST RAMEN IN TOWN';
  document.getElementById('order-headline').innerHTML = 'HOW TO ORDER';

  document.getElementById('noodle').innerHTML = 'Pick<br>Your Noodle';
  document.getElementById('broth').innerHTML = 'Pick<br>Your Broth';
  document.getElementById('toppings').innerHTML = 'Pick<br>Your Toppings';

  document.getElementById('menu-text').innerHTML = 'OUR MENU';
  document.getElementById('tonkasu').innerHTML = 'Tonkasu Ramen';
  document.getElementById('spicyMiso').innerHTML = 'Spicy Miso Ramen';
  document.getElementById('shio').innerHTML = 'Shio Ramen';

  document.getElementsByClassName('chicken')[0].innerHTML = 'CHICKEN';
  document.getElementsByClassName('chicken')[1].innerHTML = 'CHICKEN';
  document.getElementsByClassName('chicken')[2].innerHTML = 'CHICKEN';
  document.getElementsByClassName('beef')[0].innerHTML = 'BEEF';
  document.getElementsByClassName('beef')[1].innerHTML = 'BEEF';
  document.getElementsByClassName('beef')[2].innerHTML = 'BEEF';
  document.getElementsByClassName('shrimp')[0].innerHTML = 'SHRIMP';
  document.getElementsByClassName('shrimp')[1].innerHTML = 'SHRIMP';
  document.getElementsByClassName('shrimp')[2].innerHTML = 'SHRIMP';

  document.getElementById('findUs').innerHTML = 'FIND US AT';
}

function german() {
  main.innerHTML = 'SAKURA RAMEN - DIE BESTEN RAMEN IN DER STADT'

  document.getElementById('menu-bar').innerHTML = 'MENÜ';
  document.getElementById('location-bar').innerHTML = 'STANDORT';
  document.getElementById('about-bar').innerHTML = 'ÜBER UNS';
  document.getElementById('headline').innerHTML = 'SAKURA RAMEN';
  document.getElementById('headline-span').innerHTML = 'DIE BESTEN RAMEN IN DER STADT';
  document.getElementById('order-headline').innerHTML = 'WIE BESTELLT MAN';

  document.getElementById('noodle').innerHTML = 'Wähle<br>Deine Nudeln';
  document.getElementById('broth').innerHTML = 'Wähle<br>Deine Brühe';
  document.getElementById('toppings').innerHTML = 'Wähle<br>Deine Einlage';

  document.getElementById('menu-text').innerHTML = 'UNSER MENÜ';
  document.getElementById('tonkasu').innerHTML = 'Tonkasu Ramen';
  document.getElementById('spicyMiso').innerHTML = 'Scharfe Miso Ramen';
  document.getElementById('shio').innerHTML = 'Shio Ramen';

  document.getElementsByClassName('chicken')[0].innerHTML = 'HUHN';
  document.getElementsByClassName('chicken')[1].innerHTML = 'HUHN';
  document.getElementsByClassName('chicken')[2].innerHTML = 'HUHN';
  document.getElementsByClassName('beef')[0].innerHTML = 'RIND';
  document.getElementsByClassName('beef')[1].innerHTML = 'RIND';
  document.getElementsByClassName('beef')[2].innerHTML = 'RIND';
  document.getElementsByClassName('shrimp')[0].innerHTML = 'SCHRIMPS';
  document.getElementsByClassName('shrimp')[1].innerHTML = 'SCHRIMPS';
  document.getElementsByClassName('shrimp')[2].innerHTML = 'SCHRIMPS';

  document.getElementById('findUs').innerHTML = 'FINDE UNS';
}

function spanish() {
  main.innerHTML = 'SAKURA RAMEN - EL MEJOR RAMEN DE LA CIUDAD';

  document.getElementById('menu-bar').innerHTML = 'CARTA';
  document.getElementById('location-bar').innerHTML = 'UBICACIÓN';
  document.getElementById('about-bar').innerHTML = 'SOBRE NOSOTROS';
  document.getElementById('headline').innerHTML = 'SAKURA RAMEN';
  document.getElementById('headline-span').innerHTML = 'EL MEJOR RAMEN DE LA CIUDAD';
  document.getElementById('order-headline').innerHTML = 'CÓMO HACER UN PEDIDO';

  document.getElementById('noodle').innerHTML = 'Elige <br> Tu Fideos';
  document.getElementById('broth').innerHTML = 'Elige <br> Tu Caldo';
  document.getElementById('toppings').innerHTML = 'Elige <br> Tu Coberturas';

  document.getElementById('menu-text').innerHTML = 'NUESTRA CARTA';
  document.getElementById('tonkasu').innerHTML = 'Tonkasu Ramen';
  document.getElementById('spicyMiso').innerHTML = 'Miso Ramen Picante';
  document.getElementById('shio').innerHTML = 'Shio Ramen';

  document.getElementsByClassName('chicken')[0].innerHTML = 'POLLO';
  document.getElementsByClassName('chicken')[1].innerHTML = 'POLLO';
  document.getElementsByClassName('chicken')[2].innerHTML = 'POLLO';
  document.getElementsByClassName('beef')[0].innerHTML = 'VACA';
  document.getElementsByClassName('beef')[1].innerHTML = 'VACA';
  document.getElementsByClassName('beef')[2].innerHTML = 'VACA';
  document.getElementsByClassName('shrimp')[0].innerHTML = 'CAMARÓN';
  document.getElementsByClassName('shrimp')[1].innerHTML = 'CAMARÓN';
  document.getElementsByClassName('shrimp')[2].innerHTML = 'CAMARÓN';

  document.getElementById('findUs').innerHTML = 'ENCUÉNTRANOS EN';
}

function russian() {
  main.innerHTML = 'САКУРА РАМЭН - ЛУЧШИЙ РАМЕН В ГОРОДЕ'

  document.getElementById('menu-bar').innerHTML = 'МЕНЮ';
  document.getElementById('location-bar').innerHTML = 'МЕСТОПОЛОЖЕНИЕ';
  document.getElementById('about-bar').innerHTML = 'ОКОЛО';
  document.getElementById('headline').innerHTML = 'САКУРА РАМЭН';
  document.getElementById('headline-span').innerHTML = 'ЛУЧШИЙ РАМЕН В ГОРОДЕ';
  document.getElementById('order-headline').innerHTML = 'КАК ЗАКАЗАТЬ';

  document.getElementById('noodle').innerHTML = 'Выберите <br>лапшу';
  document.getElementById('broth').innerHTML = 'Выберите <br>свой бульон';
  document.getElementById('toppings').innerHTML = 'Выберите <br>начинку';

  document.getElementById('menu-text').innerHTML = 'НАШЕ МЕНЮ';
  document.getElementById('tonkasu').innerHTML = 'Тонкасу Рамэн';
  document.getElementById('spicyMiso').innerHTML = 'Пряный Мисо Рамэн';
  document.getElementById('shio').innerHTML = 'Шио Рамэн';

  document.getElementsByClassName('chicken')[0].innerHTML = 'КУРИЦА';
  document.getElementsByClassName('chicken')[1].innerHTML = 'КУРИЦА';
  document.getElementsByClassName('chicken')[2].innerHTML = 'КУРИЦА';
  document.getElementsByClassName('beef')[0].innerHTML = 'ГОВЯДИНА';
  document.getElementsByClassName('beef')[1].innerHTML = 'ГОВЯДИНА';
  document.getElementsByClassName('beef')[2].innerHTML = 'ГОВЯДИНА';
  document.getElementsByClassName('shrimp')[0].innerHTML = 'КРЕВЕТКА';
  document.getElementsByClassName('shrimp')[1].innerHTML = 'КРЕВЕТКА';
  document.getElementsByClassName('shrimp')[2].innerHTML = 'КРЕВЕТКА';

  document.getElementById('findUs').innerHTML = 'НАЙДИТЕ НАС ПО АДРЕСУ';
}

function japanese() {
  main.innerHTML = 'さくらラーメン町で最高のラーメン';

  document.getElementById('menu-bar').innerHTML = 'メニュー';
  document.getElementById('location-bar').innerHTML = '場所';
  document.getElementById('about-bar').innerHTML = 'に関しては';
  header.innerHTML = '桜ラーメン';
  document.getElementById('headline-span').innerHTML = '町で一番のラーメン';
  document.getElementById('order-headline').innerHTML = '注文方法';

  document.getElementById('noodle').innerHTML = '摘む<br>あなたの麺';
  document.getElementById('broth').innerHTML = '摘む<br>あなたのブロス';
  document.getElementById('toppings').innerHTML = '摘む<br>あなたのトッピング';

  document.getElementById('menu-text').innerHTML = '私たちのメニュー';
  document.getElementById('tonkasu').innerHTML = 'とんかすラーメン';
  document.getElementById('spicyMiso').innerHTML = 'スパイシーな味噌ラーメン';
  document.getElementById('shio').innerHTML = '塩大ラーメン';

  document.getElementsByClassName('chicken')[0].innerHTML = '鶏';
  document.getElementsByClassName('chicken')[1].innerHTML = '鶏';
  document.getElementsByClassName('chicken')[2].innerHTML = '鶏';
  document.getElementsByClassName('beef')[0].innerHTML = '牛肉';
  document.getElementsByClassName('beef')[1].innerHTML = '牛肉';
  document.getElementsByClassName('beef')[2].innerHTML = '牛肉';
  document.getElementsByClassName('shrimp')[0].innerHTML = '蝦';
  document.getElementsByClassName('shrimp')[1].innerHTML = '蝦';
  document.getElementsByClassName('shrimp')[2].innerHTML = '蝦';

  document.getElementById('findUs').innerHTML = 'で私たちを見つける';
}