/* eslint-disable no-underscore-dangle */
import { timeout } from '../decorators';

export abstract class ReferenceItem {
    // title: string;
    // year: number;
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    private _publisher: string;
    #id: number;
    static department: string = 'department1';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(public title: string, protected year: number, newId: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = newId;
    }

    @timeout(2000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    getId(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}
