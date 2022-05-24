var $modalButton = document.querySelector('.modal-button');
var $noButton = document.querySelector('.no-button');
var $modalContent = document.querySelector('.modal-content');
var $background = document.querySelector('.modal-container');

$modalButton.addEventListener('click', openModal);
$noButton.addEventListener('click', closeModal);

function openModal(event) {
  $modalContent.className = 'modal-content';
  $background.className = 'modal-container ' + 'background';
}

function closeModal(event) {
  $modalContent.className = 'modal-content ' + 'hidden';
  $background.className = 'modal-container';
}
