const search = document.getElementById('search');
search.addEventListener(
	'keydown', function(event) {
	if (event.key === 'Enter') {
		const query = search.value;
		const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
		window.open(googleSearchUrl, '_blank');
	}
}
)


const button_search = document.getElementById('button-search');
button_search.addEventListener('click', function() {
	const query = search.value;
	const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
	window.open(googleSearchUrl, '_blank');
});

const have_look = document.getElementById('have_look');
have_look.addEventListener('click', function() {
	const doodles = `https://doodles.google/`;
	window.open(doodles, '_blank');
});