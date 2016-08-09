module.exports = function Bob(){
  this.hey = function(message) {
    if(message.trim() == '') {
      return 'Fine. Be that way!';
    }

    if(message.match(/[a-zA-Z]/)
    && message == message.toUpperCase()) {
      return 'Whoa, chill out!';
    }

    if(message[message.length - 1] == '?') {
      return 'Sure.';
    }

    return 'Whatever.';
  }
}
