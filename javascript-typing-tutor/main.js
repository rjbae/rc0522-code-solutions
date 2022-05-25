var $letters = document.querySelectorAll('span');
var phrase = 'grumpy wizards make toxic brew';
var index = 0;

document.addEventListener('keydown', keyEvent);

function keyEvent(event) {
  if (event.key === phrase[index]) {
    $letters[index].className = 'correct';
    index++;
    $letters[index].className = 'underline-correct';
  } else {
    $letters[index].className = 'incorrect';
  }
}
