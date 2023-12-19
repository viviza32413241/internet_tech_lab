function convert(eur, usd) {
	const usd_c=36;
	const eur_c=39.4;
	return {"eur_uah":eur*eur_c, "usd_uah":usd*usd_c, "usd_eur":(usd*usd_c)/eur_c};
}
try {
	let eur_text = prompt("Введіть кількість євро(число): ");
	let usd_text = prompt("Введіть кількість доларів(число): ");

	if (eur_text !== null && usd_text !== null) {
    	let eur_n = parseInt(eur_text);
    	let usd_n = parseInt(usd_text);
    	if (!isNaN(eur_n) && !isNaN(usd_n)) {
    		let value = convert(eur_n, usd_n);
    	    alert("Євро в гривні: "+value["eur_uah"]+"\nДолари в гривні: "+value["usd_uah"]+"\nДолари в євро: "+value["usd_eur"]);
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