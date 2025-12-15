document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');
    const results = document.getElementById('gif-results');

    const API_KEY = 'YOYkEft3Sif7PtdqRPwP7OQZQgqoIPisxr';

    form.addEventListener('submit', async (e) => {
     e.preventDefault();
        const term = input.value.trim();
     if (!term) return;

     results.innerHTML = '<p>Loading…</p>';

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURIComponent(term)}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
     const json = await response.json();

     results.innerHTML = '';
        if (!json.data || json.data.length === 0) {
        results.innerHTML = '<p>No results. Try another search.</p>';
        return;
    }

    json.data.forEach((gif) => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        img.alt = gif.title || term;
        results.appendChild(img);
    });
    } catch (err) {
        console.error('Error fetching GIFs:', err);
        results.innerHTML = '<p>Error loading GIFs. Please try again.</p>';
    }
  });
});