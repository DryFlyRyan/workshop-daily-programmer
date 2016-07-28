module.exports = function(word, array) {
	var results = [];

	array.forEach(function(element, index){
		if (element === word) {
			var splicedElement = array.splice(index, 1)
			results.push(splicedElement[0])
		}
	})

	for (var i = 0; i < array.length; i++){
		var counter = 0;
		var splitWord = word.split('')
		var splitTarget = array[i].split('')
		if (splitWord.length === splitTarget.length) {
			for (var x = 0; x < splitTarget.length; x++) {
				if (splitWord[x] === splitTarget[x]) {
					counter++
				}
			}
			if (counter >= splitWord.length - 1) {
				results.push(array[i])
			}
		}
	}

	console.log(results);
	return results;
}
