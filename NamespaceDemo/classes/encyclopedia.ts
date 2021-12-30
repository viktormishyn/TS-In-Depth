/* eslint-disable no-underscore-dangle */
import { ReferenceItem } from './ReferenceItem';
import { positiveInteger } from '../decorators';

// class Encyclopedia extends ReferenceItem {
//     constructor(title: string, year: number, newId: number, public edition: number) {
//         super(title, year, newId);
//     }

//     printItem(): void {
//         console.log(`${this.title} was published in ${this.year}`);
//         console.log(`Department: ${ReferenceItem.department}`);
//         console.log(`Edition: ${this.edition} (${this.year})`);
//     }
// }

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    constructor(title: string, year: number, newId: number, public edition: number) {
        super(title, year, newId);
    }

    public get copies(): number {
        return this._copies;
    }

    @positiveInteger
    public set copies(value: number) {
        this._copies = value;
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}
