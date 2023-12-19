function decypherPhrase(dict, text, func) {
	let decypher_text="";
	dict=func(dict);
	for(let i of text){
		if(dict[i]!==undefined){
			decypher_text+=dict[i];
		}
		else{
			decypher_text+=i;
		}
	}
	return decypher_text;
}

function reverseMap(map) {
  const reversedMap = {};
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      const value = map[key];
      reversedMap[value] = key;
    }
  }
  return reversedMap;
}

let decharactersMap = {a: 'o', c: 'd', t: 'g'};
console.log(decypherPhrase(decharactersMap, "kitty cat", reverseMap));