function cypherPhrase(dict, text) {
	let cypher_text="";
	for(let i of text){
		if(dict[i]!==undefined){
			cypher_text+=dict[i];
		}
		else{
			cypher_text+=i;
		}
	}
	return cypher_text;
}

let charactersMap = {a: 'o', c: 'd', t: 'g'};
console.log(cypherPhrase(charactersMap, "kitty cat"));