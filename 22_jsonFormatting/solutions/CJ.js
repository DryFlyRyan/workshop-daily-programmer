var fs = require('fs');

fs.readFile('./../books.json', 'utf8', function (error, json) {
  var books = JSON.parse(json).data;
  var bookProperties = ['book_id', 'title', 'genre', 'description', 'cover'];
  var authorProperties = ['author_id', 'first_name', 'last_name', 'biography', 'portrait'];
  var bookLookup =  {};
  var authorLookup = {};

  var result = books.reduce(function(result, row){
    var book = bookLookup[row.title];
    if(!book){
      book = bookProperties.reduce(function(book, property){
        book[property] = row[property]
        return book;
      }, {});
      book.authors = [];
      bookLookup[book.title] = book;
      result.push(book);
    }

    var author = authorLookup[row.first_name + row.last_name];
    if(!author){
      var author = authorProperties.reduce(function(author, property){
        author[property] = row[property]
        return author;
      }, {});
      authorLookup[row.first_name + row.last_name] = author;
    }

    book.authors.push(author);

    return result;
  }, []);

  console.log(JSON.stringify(result));
})
