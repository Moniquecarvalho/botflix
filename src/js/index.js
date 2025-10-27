const moodTextArea = document.getElementById('mood-textarea');
const searchButton = document.getElementById('search-button');

document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
});

function setupEventListeners() {

    moodTextArea.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          handleSearch();
        }
    });

    searchButton.addEventListener('click', handleSearch);
}

async function  handleSearch() {
    const mood = moodTextArea.value.trim();
    
    if (!mood) {
        alert('Preencha o campo de humor!');
        return;
    }

    const response = await fetch('https://moniquecarvalho.app.n8n.cloud/webhook-test/botflix', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userPrompt: mood }),
    });

    const data = await response.json();
    console.log(data);
    


};