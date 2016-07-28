// Created by Elana Kopelevich

function garland(word){
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word.substr(0,i) === word.substr(-i)){
      count = i;
    }
  }
  console.log(word, count);
}

garland('programmer'); //0
garland('ceramic'); //1
garland('onion'); //2
garland('alfalfa'); //4
garland('hotshots'); //4
garland('abracadabra'); //4
garland('couscous'); //4
