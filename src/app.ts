showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ========================== 02 Types ==========================

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
}

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     category: Category;
//     available: boolean;
// };

interface Book {
    id: number;
    title: string;
    author: string;
    category: Category;
    available: boolean;
    pages?: number;
    markDamaged?: DamageLogger;
    // markDamaged?(reason: string): void;
}

interface DamageLogger {
    (reason: string): void;
}

function getAllBooks(): readonly Book[] {
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

function logFistAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Total number of books: ${books.length}`);
    // const title = books.find(book => book.available)?.title;
    const title = books.find(({ available }) => available)?.title;
    console.log(`First available book: ${title}`);
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    const titles = books.filter(book => book.category === category).map(book => book.title);
    return titles;
}

function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    const book = books[index];
    return [book?.title, book?.author];
}

function calcTotalPages(): void {
    const libs = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];
    let total = BigInt(0);
    libs.forEach(lib => (total += BigInt(lib.books * lib.avgPagesPerBook)));
    console.log(total);
}

// ==================================================================

// const books = getAllBooks();
// logFistAvailable(books);
// const titles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(titles);
// console.log(getBookAuthorByIndex(6));
// calcTotalPages();

// ==================================================================

// ========================== 03 Functions ==========================

function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

const myID = createCustomerID('Ann', 10);

// let idGenerator: (name: string, id: number) => string;
let idGenerator: typeof createCustomerID;
idGenerator = (name: string, id: number) => `${id}-${name}`;
idGenerator = createCustomerID;

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Name: ${name}`);
    age ? console.log(`Age: ${age}`) : null;
    city ? console.log(`City: ${city}`) : null;
    console.log('\n');
}

// const getBookByID = (id: number): Book => {
function getBookByID(id: Book['id']): Book | undefined {
    return getAllBooks().find(book => book.id === id);
}

function сheckoutBooks(customer: string, ...bookIDs: Book['id'][]): string[] {
    console.log(`Customer: ${customer}`);
    const books = getAllBooks();
    return books.filter(book => bookIDs.includes(book.id) && book.available).map(book => book.title);
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
// function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
function getTitles(...args: any[]): string[] {
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

function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('Value should have been a string');
    }
}

function bookTitleTransform(title: any): string | never {
    assertStringValue(title);
    return [...title].reverse().join('');
}

// ==================================================================

// console.log(myID);
// console.log(idGenerator('Ann', 10));

// createCustomer('Ann');
// createCustomer('Ann', 75);
// createCustomer('Ann', 75, 'London');

// console.log(getBookTitlesByCategory());
// logFistAvailable();

// console.log(getBookByID(1));

// const myBooks: string[] = сheckoutBooks('Ann', 1, 2, 4);
// // const myBooks: string[] = сheckoutBooks('Ann', ...[1, 2, 4]);
// console.log(myBooks);

// console.log(getTitles(1, true));
// console.log(getTitles('Lea Verou'));

// console.log(bookTitleTransform('12345'));
// console.log(bookTitleTransform(12356));

// ==================================================================

// ========================== 04 Interfaces =========================

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => {
        console.log(`Damaged: ${reason}`);
    },
    // year: 2015,
    // copies: 3,
};

const logDamage: DamageLogger = (reason: string) => {
    console.log(`Damaged: ${reason}`);
};

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

const favoriteAuthor: Author = {
    name: 'John Adams',
    email: 'johnadams@gmail.com',
    numBooksPublished: 2,
};

const favoriteLibrarian: Librarian = {
    name: 'Anna Clark',
    email: 'annaclark@gmail.com',
    department: 'N12',
    assistCustomer(custName: string, bookTitle: string) {
        console.log(`${custName}: ${bookTitle}`);
    },
};

const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

type BookProperties = keyof Book;

function getProperty(book: Book, prop: BookProperties): any {
    const val = book[prop];
    return typeof val === 'function' ? val.name : val;
}

// ==================================================================

// printBook(myBook);
// myBook.markDamaged('missing back cover');
// logDamage('missing back cover');

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book?.authors?.[0]);

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// // console.log(getProperty(myBook, 'isbn'));

// ==================================================================
