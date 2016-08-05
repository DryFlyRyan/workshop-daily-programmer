$(document).ready(function(){
  createDots();
  createDrops();
});

function createDots(){
  var id = 0;
  for (var i = 0; i < 1200; i++) {
    id++;
    $('.dots').append('<div class="dot" id="' + id + '"></div>');
  }
}

function createDrops(){
  $('[id="315"]').append('<div class="drop"></div>');
  $('[id="375"]').append('<div class="drop"></div>');
  $('[id="435"]').append('<div class="drop"></div>');
}
