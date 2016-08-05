// Done by Ryan Douglas

module.exports = function Bob() {
  return {
    hey: function(string) {


      if ((/^ *$/).test(string)) {
        console.log(string, ' = ', 'Fine. Be that way!');
        return 'Fine. Be that way!'
      } else if ((string.toUpperCase() === string && (/\d/g).test(string) == false) || (string.toUpperCase() === string && (/\!$/).test(string) == true)) {
        console.log(string, ' = ', "Whoa, chill out!");
        return "Whoa, chill out!"
      } else if((/\?$/g).test(string)) {
        console.log(string, ' = ', "Sure.");
        return "Sure."
      } else {
        console.log(string, ' = ', "Whatever.");
        return "Whatever."
      }
    }
  }
}
