var $tabContainer = document.querySelector('.tab-container');
var $tabNodes = document.querySelectorAll('.tab');
var $viewNodes = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', tabEvent);

function tabEvent(event) {
  if (!event.target.matches('.tab')) return;

  for (var i = 0; i < $tabNodes.length; i++) {
    if ($tabNodes[i] === event.target) {
      $tabNodes[i].className = 'tab active';
    } else {
      $tabNodes[i].className = 'tab';
    }
  }
  var $attribute = event.target.getAttribute('data-view');
  for (var j = 0; j < $viewNodes.length; j++) {
    if ($viewNodes[j].getAttribute('data-view') === $attribute) {
      $viewNodes[j].className = 'view';
    } else {
      $viewNodes[j].className = 'hidden';
    }
  }
}
