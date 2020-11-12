export class Survey
{
    constructor(
        public _id?: number,
        public title?: string,
        public questions?: string[]

    ){}
    public toString(): string
    {
        return 'Book --------------------- Name: ${this.name}';
    }
}