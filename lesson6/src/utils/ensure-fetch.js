export default async function ensureFetch() {
    if (typeof fetch !== 'undefined') return;
    try {
        const module = await import('node-fetch');
        // eslint-disable-next-line no-undef
        global.fetch = module.default;
    } catch (err) {
        console.warn('Не вдалося підключити node-fetch. Якщо ви в Node <18, встановіть node-fetch або оновіть Node.');
        throw err;
    }
}
