import { fetchUser } from './api';
import { transformUserToSummary } from './transformer';
import { SummarizedEntity } from './abstraction';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function main() {
    try {
        const user = await fetchUser(1);
        const summary = transformUserToSummary(user);
        const entity = new SummarizedEntity(summary);
        console.log('ID:', entity.getId());
        console.log('Опис:', entity.describe());
    } catch (err) {
        console.error('Error:', err);
    }
}

main();
