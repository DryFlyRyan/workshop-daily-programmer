module.exports = function() {
  this.hey = function(input) {
    if (input.toUpperCase() == input && input.toLowerCase() != input) {
      return 'Whoa, chill out!';
    } else if (input.substr(-1) == '?') {
      return 'Sure.';
    } else if (input.replace(/\s/gi, '').length == 0) {
      return 'Fine. Be that way!';
    } else {
      return 'Whatever.';
    }
  };
}
