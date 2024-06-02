const API_KEY = 'eabd79d5-699b-45ca-ab08-8def26cbdf99'; 
const API_URL = 'https://api.harvardartmuseums.org/object';
async function searchArtworks() {
    const query = document.getElementById('search-input').value;
    const url = `${API_URL}?apikey=${API_KEY}&q=${query}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayArtworks(data.records);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}