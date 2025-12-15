document.addEventListener('DOMContentLoaded',() => {
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');
    const results = document.getElementById('gif-results');

    const api_key = 'YkEft3Sif7PtdqRPwP7OQZQgqoIPisxr'

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const term = input.ariaValueMax.trim ();
        if (!term) return;

        results.innerHTML = '<p>Loading...</P>'
        const url = `https://api.giphy.com/v1/gifs/search?api_key=YkEft3Sif7PtdqRPwP7OQZQgqoIPisxr&q=&limit=25&offset=0&rating=pg-13&lang=en&bundle=messaging_non_clips`;

        try {
            const response = await
            fetch(url);
            if (!response.ok) throw new error (`HTTP $ {response.status}`);
            const json = await
            response.json();

            results.innerHTML = "; 
            if (!json.data || json.data.length === 0){
                results.innerHTML = '<p> No Results. Try Another Search.</p>';
                return;
            } 

            json.data.forEach ((gif)) => {
                const img = document.createElement('img');
                img.src = gif.images.fixed_height.url;
                img.alt = gif.title || term;
                results.appendChild(img);
            });
        } catch (err) {
            console.error('Error fetching GIFs:', err);
            results.innerHTML = '<p>Error Loading GIFs. Please Try Again.</P>';
        }
     });
    });