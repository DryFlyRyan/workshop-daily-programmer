const fs = require('fs');

fs.readFile('./../books.json', 'utf8', (error, json) => {
  var books = JSON.parse(json).data
  var formattedBooks = format(books)
  console.log(format);
})

function format(data) {
  var authorsIndex = {}
  var bookList = []
  data.forEach(book => {
    var newBook = {}
    var author = {}
    newBook.id = book.book_id;
    newBook.title = book.title;
    newBook.description = book.description;
    newBook.genre = book.genre;
    newBook.cover = book.cover;
    author.first_name = book.first_name;
    author.last_name = book.last_name;
    author.biography = book.biography;
    author.portrait = book.portrait;
    bookList.push(newBook);
    authorsIndex[book.book_id] = authorsIndex[book.book_id] || [];
    authorsIndex[book.book_id].push(author)
  })
  return bookList.reduce((books, book, index, array) => {
    if (array[index + 1] && book.id !== array[index + 1].id) {
      book.authors = authorsIndex[book.id]
      books.push(book)
    } else if (!array[index + 1]) {
      book.authors = authorsIndex[book.id]
      books.push(book)
    }
    return books
  }, [])
}
