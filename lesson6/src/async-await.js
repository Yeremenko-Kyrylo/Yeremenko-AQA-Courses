const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=3';

function showPostTitles(posts) {
    posts.forEach(p => console.log(`ID ${p.id}: ${p.title}`));
}

async function fetchPosts(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        showPostTitles(data);
    } catch (err) {
        console.error('Помилка у fetchPosts:', err.message);
    }
}

fetchPosts(POSTS_URL);
