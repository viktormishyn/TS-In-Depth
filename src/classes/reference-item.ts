abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');

    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    static department: string = 'Research Department';
    private _publisher: string;
    #id: number;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
        console.log(`Department: ${Object.getPrototypeOf(this).constructor.department}`);
    }

    get id(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}

export { ReferenceItem };
