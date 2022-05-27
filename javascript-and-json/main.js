var books = [
  {
    isbn: '978-0547928227',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '978-0061122415',
    title: 'The Alchemist',
    author: 'Paul Coelho'
  },
  {
    isbn: '978-0451524935',
    title: '1984',
    author: 'George Orwell'
  }
];

console.log('books array:', books, 'typeof books:', typeof books);

var booksString = JSON.stringify(books);
console.log('JSON Books:', booksString, 'typeof JSON Books:', typeof booksString);

var student = '{"numberID": "2003030", "name": "Ryan Bae"}';
console.log('student:', student, 'typeof student:', typeof student);

var studentObj = JSON.parse(student);
console.log('studentObj:', studentObj, 'typeof studentObj:', typeof studentObj);
