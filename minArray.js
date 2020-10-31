// function seeks smallest number in array
function findMin( n ) {
	let min = Infinity;
	n.forEach( ( el ) => {
		min = ( el < min ) ? el : min; 
	});
	return min;

} 
//example
console.log(findMin([1,3,-5,6,8,9])); // -5 