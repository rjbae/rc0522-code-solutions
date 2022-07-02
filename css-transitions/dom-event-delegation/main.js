var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', taskEvent);

function taskEvent(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    var ancestor = event.target.closest('.task-list-item');
    console.log(ancestor);
    ancestor.remove();
  }
}
