import { User } from './models';

export async function fetchUser(userId: number): Promise<User> {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const data = await resp.json();
    return data as User;
}
