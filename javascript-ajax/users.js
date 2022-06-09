var $userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.addEventListener('load', xhrEvent);

function xhrEvent(event) {
  console.log('status', xhr.status);
  console.log('response', xhr.response);
  var users = xhr.response;
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    var list = document.createElement('li');
    list.textContent = user.name;
    $userList.appendChild(list);
  }
}

xhr.send();
