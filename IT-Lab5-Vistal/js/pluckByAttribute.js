function pluckByAttribute(arr_obj, key) {
	let arr_value=[];
	for(let i of arr_obj){
		arr_value.push(i[key]);
	}
	return arr_value;
}
var presidents = [
  { name: 'George', surname: 'Kush' },
  { name: 'Barako', surname: 'Obaame' }
];

console.log(pluckByAttribute(presidents, "name"));