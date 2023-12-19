function getTransformedArray(arr, func) {
	new_arr=[];
	for (let i of arr){
		new_arr.push(func(i));
	}
	return new_arr;
}
function addOne(e){
	return e+1;
}

console.log(getTransformedArray([33,11,3,4], addOne));