var $message = document.querySelector('.message');

setTimeout(updateMessage, 2000);

function updateMessage() {
  $message.textContent = 'Hello There';
}
