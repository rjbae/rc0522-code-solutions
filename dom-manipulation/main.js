var clickNumber = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', buttonEvent);
$clickCount.addEventListener('click', buttonEvent);

function buttonEvent(event) {
  clickNumber++;
  $clickCount.textContent = 'Clicks: ' + clickNumber;
  if (clickNumber < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clickNumber < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clickNumber < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clickNumber < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clickNumber < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (clickNumber > 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}
