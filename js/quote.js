
(async function getQuote() {
    const quoteEl = document.getElementById('quote');
    const authorEl = document.getElementById('quote-author');

    function showQuote(text, author) {
        quoteEl.innerHTML = `<p>${text}</p>`;
        authorEl.textContent = author ? `— ${author}` : '';
    }

    const localQuotes = [
        { q: "I'm still in the red! I just want to break even!", a: "Johnny Joestar" },
        { q: "Failing to understand and failing to listen are rather different things.", a: "Naoto Shirogane" },
        { q: "Blues wasn't forced on us like that religion. Nah, son, we brought that with us from home. It's magic what we do. It's sacred... and big.", a: "Delta Slim" }
    ];

    try {
        const res = await fetch('https://zenquotes.io/api/today');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
            showQuote(data[0].q, data[0].a);
        } else {
            throw new Error('bad data');
        }
    } catch (err) {
        console.warn('could not load quote, using local one.');
        const q = localQuotes[Math.floor(Math.random() * localQuotes.length)];
        showQuote(q.q, q.a);
    }
})();
