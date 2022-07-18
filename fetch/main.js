fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log('Users Data:', data));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => response.json())
  .then(data => console.log('Poke Data:', data));
