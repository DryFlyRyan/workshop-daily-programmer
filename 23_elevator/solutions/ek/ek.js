// Created by Elana Kopelevich

$(document).ready(function(){
  var id = 1;
  for (var i = 0; i < 33; i++) {
    $('.btn-container').append('<div class="btn"><h1 class="num">' + id + '</h1></div>');
    id++;
  }
});
