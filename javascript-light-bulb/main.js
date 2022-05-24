var $lightBulb = document.querySelector('.light-bulb');
var $background = document.querySelector('.light');
var on = true;

$lightBulb.addEventListener('click', lightEvent);

function lightEvent(event) {
  var onOrOff = null;
  if (on === true) {
    on = false;
    onOrOff = 'off';
  } else {
    on = true;
    onOrOff = 'on';
  }
  $lightBulb.className = 'light-bulb ' + onOrOff;
  $background.className = 'light ' + onOrOff;
}
