function UserException(message) {
  this.message = message;
  this.name = "Failed: Discriminator < 0";
}

function quadratic(a, b, c) {
	let d = Math.pow(b, 2) - 4*a*c;
	if(d >= 0){
		let x1 = (-b+Math.sqrt(d))/(2*a);
		let x2 = (-b-Math.sqrt(d))/(2*a);
		return [x1, x2];
	}
	else{
		throw new UserException("Error: Discriminator");
	}
}

try {
	let a_text = prompt("Введіть ціле число 'a': ");
	let b_text = prompt("Введіть ціле число 'b': ");
	let c_text = prompt("Введіть ціле число 'c': ");

	if (a_text !== null && b_text !== null && c_text !== null) {
    	let a_n = parseInt(a_text);
    	let b_n = parseInt(b_text);
    	let c_n = parseInt(c_text);
    	if (!isNaN(a_n) && !isNaN(b_n) && !isNaN(c_n) && a_n!=0) {
    		let x = quadratic(a_n, b_n, c_n);
    	    alert("x1 = "+x[0]+"\nx2 = "+x[1]);
   		}
    	else {
   	    	alert("Десь число не те");
    	}
	} 
	else {
    	alert("Ви відмінили введення!");
	}
}
catch (e) {
	console.error(e.message, e.name);
}