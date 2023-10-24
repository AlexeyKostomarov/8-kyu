// Write a method, that will get an integer array as parameter and will process every number from this array.

function squareOrSquareRoot(array) {
	return array.map((val) => {
		let result = Math.sqrt(val)
		if (result % 1 === 0) {
			return Math.sqrt(val)
		}
		else {
			return val * val
		}
	})
}