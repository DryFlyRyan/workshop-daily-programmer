var fs = require('fs');

function getBooks(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, 'utf8', function(error, json) {
      if (error) return reject(error);
      resolve(JSON.parse(json).data);
    });
  });
}

function parseBooks(file) {
  return getBooks(file).then(function(books) {
    bookFields = ['id', 'title', 'genre', 'description', 'cover'];
    authorFields = ['author_id', 'first_name', 'last_name', 'biography', 'portrait'];
    return books.reduce(function(results, book) {
      book.id = book.book_id;
      var existingBook = findIt(results, 'id', book.id);
      if (!existingBook) {
        existingBook = reduceFields(book, bookFields);
        results.push(existingBook);
        existingBook.authors = [];
      }
      var author = reduceFields(book, authorFields);
      author.id = author.author_id;
      delete author.author_id;
      existingBook.authors.push(author);
      return results;
    }, []);
  });
}

function findIt(array, field, value) {
  return array.filter(function(element) {
    return element[field] == value;
  })[0];
}

function reduceFields(object, fields) {
  return Object.keys(object).reduce(function(result, key) {
    if (fields.indexOf(key) + 1) result[key] = object[key];
    return result;
  }, {});
}

parseBooks('../books.json').then(function(books) {
  // to display author list properly...
  bookFields = ['id', 'title', 'genre', 'description', 'cover'];
  books.forEach(function(book) {
    console.log(reduceFields(book, bookFields));
    console.log('authors:', book.authors);
  })
});
