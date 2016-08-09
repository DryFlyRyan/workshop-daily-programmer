<<<<<<< HEAD
var Bob = require('../solutions/RD.js');
=======
var Bob = require('../solutions/bda.js');
>>>>>>> c825930a994dbae012187333a0dad665feb79c1a
var assert = require('assert');

describe('Bob', function() {
  var bob = new Bob();

  it('stating something', function() {
    var result = bob.hey('Tom-ay-to, tom-aaaah-to.');
    assert(result == 'Whatever.');
  });

  it('shouting', function() {
    var result = bob.hey('WATCH OUT!');
    assert(result == 'Whoa, chill out!');
  });

  it('asking a question', function() {
    var result = bob.hey('Does this cryogenic chamber make me look fat?');
    assert(result == 'Sure.');
  });

  it('talking forcefully', function() {
    var result = bob.hey('Let\'s go make out behind the gym!');
    assert(result == 'Whatever.');
  });

  it('using acronyms in regular speech', function() {
    var result = bob.hey('It\'s OK if you don\'t want to go to the DMV.');
    assert(result == 'Whatever.');
  });

  it('forceful questions', function() {
    var result = bob.hey('WHAT THE HELL WERE YOU THINKING?');
    assert(result == 'Whoa, chill out!');
  });

  it('shouting numbers', function() {
    var result = bob.hey('1, 2, 3 GO!');
    assert(result == 'Whoa, chill out!');
  });

  it('only numbers', function() {
    var result = bob.hey('1, 2, 3');
    assert(result == 'Whatever.');
  });

  it('question with only numbers', function() {
    var result = bob.hey('4?');
    assert(result == 'Sure.');
  });

  it('shouting with special characters', function() {
    var result = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    assert(result == 'Whoa, chill out!');
  });

  it('shouting with umlauts', function() {
    // NOTE: "\xfcML\xe4\xdcTS" === "üMLäÜTS"
    var result = bob.hey('\xdcML\xc4\xdcTS!');
    assert(result == 'Whoa, chill out!');
  });

  it('calmly speaking about umlauts', function() {
    var result = bob.hey('\xfcML\xe4\xdcTS');
    assert(result == 'Whatever.');
  });

  it('shouting with no exclamation mark', function () {
    var result = bob.hey('I HATE YOU');
    assert(result == 'Whoa, chill out!');
  });

  it('statement containing question mark', function() {
    var result = bob.hey('Ending with a ? means a question.');
    assert(result == 'Whatever.');
  });

  it('prattling on', function () {
    var result = bob.hey('Wait! Hang on.  Are you going to be OK?');
    assert(result == 'Sure.');
  });

  it('silence', function () {
    var result = bob.hey('');
    assert(result == 'Fine. Be that way!');
  });

<<<<<<< HEAD
   it('prolonged silence', function () {
=======
  it('prolonged silence', function () {
>>>>>>> c825930a994dbae012187333a0dad665feb79c1a
    var result = bob.hey('   ');
    assert(result == 'Fine. Be that way!');
  });
});
