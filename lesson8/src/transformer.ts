import { User, UserSummary } from './models';

export function transformUserToSummary(user: User): UserSummary {
    return new UserSummary(user);
}
