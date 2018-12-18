var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');
var library = require ("./static/library.json");

var i = library.Books.length;
//Load page rendering
app.get('', function(req,res){
  res.render('main', {books: library.Books });
})
//searching for any matches
app.post('', urlencodedParser, function(req,res){
  var Radio = req.body.Radios;
  var FoundBook = [];
  //Case of wich Radiobttn chosen
  switch (Radio) {
    case ("Author"):
    var i = library.Books.length;
    while(i--){
      if (library.Books[i].author === req.body.SearchInput) {
        FoundBook.push(library.Books[i].Name);
      }
    }
    break;
    case ("Publisher"):
    var i = library.Books.length;
    while(i--){
      if (library.Books[i].Publisher === req.body.SearchInput) {
        FoundBook.push(library.Books[i].Name);
      }
    }
    break;
    case ("Year"):
    var i = library.Books.length;
    while(i--){
      if (library.Books[i].year === req.body.SearchInput) {
        FoundBook.push(library.Books[i].Name);
      }
    }
    break;
    case ("Key_Word"):
    var i = library.Books.length;
    while(i--){
      if (library.Books[i].Key_Word === req.body.SearchInput) {
        FoundBook.push(library.Books[i].Name);
      }
    }
    break;
    default:
    break;
  }

  res.render('found', {books: FoundBook });

})
//linteneng for 127.0.0.1:3000
app.listen(3000);
