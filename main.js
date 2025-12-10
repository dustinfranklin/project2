document.getElementById('search-form').addEventListener('submit', async (e) =>
    e.preventDefault();
    const searchTerm = document.getElementById('search-input').value;
    const apiKey = 'YkEft3Sif7PtdqRPwP7OQZQgqoIPisxr'
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=YkEft3Sif7PtdqRPwP7OQZQgqoIPisxr&q=&limit=25&offset=0&rating=pg-13&lang=en&bundle=messaging_non_clips`)

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        const gifReultsDiv = document.getElementById('gif-results');
        gifReultsDiv.innerHTML - '';

        data.data.forEach(gif => {
            const img = document.createElement('img');
            img.src = gif.images.fixed_height.url;
            img.alt = gif.title;
            gifReultsDiv.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching GIFs:', error);
        gifReultsDiv.innerHTML = '<p>Error loading GIFs. Please try again.</p>';
    }
});
        