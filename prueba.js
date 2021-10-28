let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

let aclean = arr => {
	let cleanArr = new Set();
	let charstoSearch = new Set();
	for (let words of arr) {
		cleanArr.add(words);
	}
	for (let word of cleanArr) {
		for (let char of word) {
			charstoSearch.add(char);
		}
	}
	for (let items of )
	return cleanArr;
}
console.log(aclean(arr));;
