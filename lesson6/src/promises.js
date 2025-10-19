const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

function showUserNames(users) {
    const names = users.map(u => u.name).join(', ');
    console.log('Список користувачів:', names);
}

function fetchUsers(url) {
    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
            return res.json();
        })
        .then(data => {
            showUserNames(data);
        })
        .catch(err => {
            console.error('Помилка у fetchUsers:', err.message);
        });
}

fetchUsers(USERS_URL).then();
