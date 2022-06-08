var $countdown = document.querySelector('.countdown-display');
var interval = setInterval(countDown, 1000);
var counter = 4;

function countDown() {
  counter--;
  if (counter === 0) {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(interval);
  } else {
    $countdown.textContent = counter;
  }
}
