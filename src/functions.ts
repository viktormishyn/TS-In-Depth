import { Book, TOptions } from './interfaces';
import { Category } from './enums';
import { BookOrUndefined, BookProperties } from './types';
import { RefBook } from './classes';

export function getAllBooks(): readonly Book[] {
    const books = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            category: Category.JavaScript,
            available: true,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            category: Category.JavaScript,
            available: false,
        },
        {
            id: 3,
            title: 'CSS Secrets',
            author: 'Lea Verou',
            category: Category.CSS,
            available: true,
        },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            category: Category.JavaScript,
            available: true,
        },
    ];
    return books;
}

export function logFistAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Total number of books: ${books.length}`);
    // const title = books.find(book => book.available)?.title;
    const title = books.find(({ available }) => available)?.title;
    console.log(`First available book: ${title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    const titles = books.filter(book => book.category === category).map(book => book.title);
    return titles;
}

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    const book = books[index];
    return [book?.title, book?.author];
}

export function calcTotalPages(): void {
    const libs = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];
    let total = BigInt(0);
    libs.forEach(lib => (total += BigInt(lib.books * lib.avgPagesPerBook)));
    console.log(total);
}

export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Name: ${name}`);
    age ? console.log(`Age: ${age}`) : null;
    city ? console.log(`City: ${city}`) : null;
    console.log('\n');
}

// export const getBookByID = (id: number): Book => {
export function getBookByID(id: Book['id']): BookOrUndefined {
    return getAllBooks().find(book => book.id === id);
}

export function сheckoutBooks(customer: string, ...bookIDs: Book['id'][]): string[] {
    console.log(`Customer: ${customer}`);
    const books = getAllBooks();
    return books.filter(book => bookIDs.includes(book.id) && book.available).map(book => book.title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
// export function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id_arg, available_arg] = args;

        if (typeof id_arg === 'number' && typeof available_arg === 'boolean') {
            return books
                .filter(({ id, available }) => id === id_arg && available === available_arg)
                .map(book => book.title);
        }
    }
    return [];
}

export function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('Value should have been a string');
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function bookTitleTransform(title: any): string | never {
    assertStringValue(title);
    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getProperty(book: Book, prop: BookProperties): any {
    const val = book[prop];
    return typeof val === 'function' ? val.name : val;
}

export function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 100;
    options.speed ??= 60;
    return options;
}
