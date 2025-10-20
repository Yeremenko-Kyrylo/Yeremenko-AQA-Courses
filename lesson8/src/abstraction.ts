import { UserSummary } from './models';

export abstract class Entity {
    public abstract getId(): number;
    public abstract describe(): string;
}

export class SummarizedEntity extends Entity {
    private summary: UserSummary;

    public constructor(summary: UserSummary) {
        super();
        this.summary = summary;
    }

    public getId(): number {
        return this.summary.id;
    }

    public describe(): string {
        return this.summary.summary();
    }
}
