export class Survey
{
    constructor(
        public _id?: number,
        public name?: string,
        public email?: string,
        public published?: string

    ){}
    public toString(): string
    {
        return 'Book --------------------- Name: ${this.name}';
    }
}