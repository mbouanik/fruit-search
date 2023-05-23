const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	results = fruits.filter((fruit) => fruit.toLocaleLowerCase().includes(str.trim()) && str)
	return results;
}

function searchHandler(e) {
	suggestions.replaceChildren()
	showSuggestions(search(input.value.toLocaleLowerCase()).slice(0,6), input.value.trim())
}

function showSuggestions(results, inputVal) {
	results.map((fruit) => {
		const li = document.createElement('li');
		const positionVal = fruit.toLocaleLowerCase().search(inputVal.toLocaleLowerCase())
		li.innerHTML = `${fruit.slice(0,positionVal)}<b>${fruit.slice(positionVal, positionVal + inputVal.length )}</b>${fruit.slice(positionVal + inputVal.length)}`
		suggestions.append(li)
	})
}

function useSuggestion(e) {
	if (e.target.tagName === "LI"){
		input.value = e.target.innerText;
		suggestions.replaceChildren()
	}

}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
