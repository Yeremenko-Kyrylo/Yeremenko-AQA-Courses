const WRONG_URL = 'https://invalid-domain-xyz123.example/api';
const BACKUP_URL = 'https://jsonplaceholder.typicode.com/comments?_limit=2';

async function getData(primary, backup) {
    try {
        console.log(`Звертаюсь до: ${primary}`);
        const r1 = await fetch(primary);
        if (!r1.ok)
            throw new Error(`Primary status ${r1.status}`);
        const d1 = await r1.json();
        console.log('Primary OK:', d1);
        return d1;
    } catch (err1) {
        console.warn('Primary помилка:', err1.message);
        console.log('Пробую backup...');
        try {
            const r2 = await fetch(backup);
            if (!r2.ok) throw new Error(`Backup status ${r2.status}`);
            const d2 = await r2.json();
            console.log('Backup OK:', d2);
            return d2;
        } catch (err2) {
            throw new Error(`Обидва запити неуспішні: ${err1.message}; ${err2.message}`);
        }
    }
}

getData(WRONG_URL, BACKUP_URL)
    .then(d => console.log('Фінальні дані:', d))
    .catch(e => console.error('Помилка:', e.message));
