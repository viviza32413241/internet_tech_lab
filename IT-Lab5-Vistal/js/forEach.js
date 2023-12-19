function forEach(arr, func) {
	for (let e of arr){
		console.log(func(e));
	}
}

function sqrt(element){
	return element*element;
}

forEach([33,11,3,4], sqrt);