// Write a function that merges two sorted arrays into a single one.
//The arrays only contain integers. 
// Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
	let c = [...a, ...b] //соединяем массивы 
	let sortArr = [... new Set(c)] // удаляем дубликаты из массива 
	return sortArr.sort((a, b) => a - b) // сортируем в порядке возрастания 
}