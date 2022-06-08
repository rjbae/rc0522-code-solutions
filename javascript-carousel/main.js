var $rightArrow = document.querySelector('.fa-chevron-right');
var $leftArrow = document.querySelector('.fa-chevron-left');
var $imageNodes = document.querySelectorAll('li');
var $dotNodes = document.querySelectorAll('span');
var $dotDiv = document.querySelector('.progress-dots');
var $body = document.querySelector('body');

var interval;
function startCarousel() {
  interval = setInterval(carousel, 4000);
}
startCarousel();

var count = 0;
function carousel() {
  if (count < 4) {
    count++;
    viewSwap(count);
  } else {
    count = 0;
    viewSwap(count);
  }
}

function viewSwap(icons) {
  for (var i = 0; i < $imageNodes.length; i++) {
    if (icons === Number($imageNodes[i].getAttribute('data-img'))) {
      $imageNodes[i].classList.remove('hidden');
      $dotNodes[i].className = 'fa-solid fa-circle';
    } else {
      $imageNodes[i].classList.add('hidden');
      $dotNodes[i].className = 'fa-regular fa-circle';
    }
  }
}

function carouselBackwards() {
  if (count > 0) {
    count--;
    viewSwap(count);
  } else {
    count = 4;
    viewSwap(count);
  }
}

$dotDiv.addEventListener('click', dotClickEvent);

function dotClickEvent(event) {
  var $dataImg = event.target.getAttribute('data-img');
  $dataImg = Number($dataImg);
  if (event.target.matches('span')) {
    count = $dataImg;
    viewSwap($dataImg);
  }
}

$rightArrow.addEventListener('click', arrowClickEvent);
$leftArrow.addEventListener('click', arrowClickEvent);

function arrowClickEvent(event) {
  if (event.target === $rightArrow) {
    carousel();
  } else if (event.target === $leftArrow) {
    carouselBackwards();
  }
}

$body.addEventListener('click', timerResetEvent);

function timerResetEvent(event) {
  if (event.target.matches('i')) {
    clearInterval(interval);
    startCarousel();
  }
}
