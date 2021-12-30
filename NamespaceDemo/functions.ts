/* eslint-disable no-redeclare */

import { Category } from './enums';
import { Book, LibMgrCallback } from './interfaces';
import { BookOrUndefined, BookProperties, Library } from './types';
import RefBook from './classes/encyclopedia';

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

export function getAllBooks(): Array<Book> {
    const books: Book[] =
        [
            { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', category: Category.JavaScript, available: true },
            { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', category: Category.JavaScript, available: false },
            { id: 3, title: 'CSS Secrets', author: 'Lea Verou', category: Category.CSS, available: true },
            { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', category: Category.JavaScript, available: true }
        ];
    return books;
};

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Amount of books: ${books.length}`);
    console.log(`First available book: ${books.find(book => book.available).title}`);
};

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    return getAllBooks()
        .filter(book => book.category === category)
        .map(book => book.title);
};

export function logBookTitles(titles: string[]): void {
    console.log(`Book titles: ${titles.join(', ')}`);
};

export function getBookAuthorByIndex(index: number): { title: string; author: string } {
    return getAllBooks()[index];
};

export function calcTotalPages(libraries: Library[]): bigint {
    return BigInt(libraries
        .map(library => library.books * library.avgPagesPerBook)
        .reduce((prev, cur) => prev + cur));
};

export function createCustomerID(name: string, id: number): string {
    return id + ' ' + name;
}

export function createCustomer(name: string, age?: number, city?: string) {
    console.log(`Name: ${name}`);
    if (age !== null) {
        console.log(`Age: ${age}`);
    }

    if (city !== null) {
        console.log(`City: ${city}`);
    }
}

export function getBookByID(id: number): BookOrUndefined {
    return getAllBooks().find(book => book.id === id);
}

export function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(customer);
    return getAllBooks()
        .filter(book => bookIDs.indexOf(book.id) !== -1 && book.available === true)
        .map(book => book.title);
}

export function getTitles(author: string): Array<Book>;
export function getTitles(available: boolean): Array<Book>;
export function getTitles(id: number, available: boolean): Array<Book>;
export function getTitles(...args: any[]): Array<Book> {
    if (typeof args[0] === 'string') {
        return getAllBooks().filter(book => book.author === args[0]);
    }

    if (typeof args[0] === 'boolean') {
        return getAllBooks().filter(book => book.available === args[0]);
    }

    if (typeof args[0] === 'number' && typeof args[1] === 'boolean') {
        return getAllBooks().filter(book => book.id === args[0] && book.available === args[1]);
    }

    throw Error('Unknown parameters!');
};

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw Error('value should have been a string');
    }
}

export function bookTitleTransform(title: any): string | never {
    assertStringValue(title);
    return [...title].reverse().join('');
}

export function printBook(book: Book) {
    console.log(`${book.title} by ${book.author}`);
}

export function getProperty<TObject, TKey extends keyof TObject>(object: TObject, property: TKey): TObject[TKey] | string {
    if (typeof property === 'function') {
        return property;
    }

    return object[property];
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition)
        throw new Error('It is not instance of RefBook');
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

export function makeProperty<T>(
    prototype: any,
    propertyName: string,
    getTransformer?: (value: any) => T,
    setTransformer?: (value: any) => T
) {
    const values = new Map<any, T>();

    Object.defineProperty(prototype, propertyName, {
        set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
                get() {
                    if (getTransformer) {
                        return getTransformer(values.get(this));
                    } else {
                        values.get(this);
                    }
                },
                set(value: any) {
                    if (setTransformer) {
                        values.set(this, setTransformer(value));
                    } else {
                        values.set(this, value);
                    }
                },
                enumerable: true
            });
            this[propertyName] = firstValue;
        },
        enumerable: true,
        configurable: true
    });
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            let books = getBookTitlesByCategory(category);
            if (books.length !== 0) {
                callback(null, books);
            } else {
                throw new Error('No books found.');
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    err ? console.log(err.message) : console.log(titles.join(', '));
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                let books = getBookTitlesByCategory(category);
                if (books.length !== 0) {
                    resolve(books);
                } else {
                    throw new Error('No books found.');
                }
            } catch (err) {
                reject(err);
            }
        }, 2000);
    });
}

export async function logSearchResults(category: Category) {
    console.log((await getBooksByCategoryPromise(category)).length);
}