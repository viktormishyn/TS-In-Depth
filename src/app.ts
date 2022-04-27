import { ReferenceItem, UL, RefBook } from './classes';
import { Category } from './enums';
import { createCustomerID, printRefBook } from './functions';
import { Author, Book, Librarian, Logger } from './interfaces';
import { PersonBook } from './types';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ========================== 02 Types ==========================

// const books = getAllBooks();
// logFistAvailable(books);
// const titles = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(titles);
// console.log(getBookAuthorByIndex(6));
// calcTotalPages();

// ========================== 03 Functions ==========================

const myID = createCustomerID('Ann', 10);

// let idGenerator: (name: string, id: number) => string;
let idGenerator: typeof createCustomerID;
idGenerator = (name: string, id: number) => `${id}-${name}`;
idGenerator = createCustomerID;

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

// ========================== 04 Interfaces =========================

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

const logDamage: Logger = (reason: string) => {
    console.log(`Damaged: ${reason}`);
};

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

// =========================== 05 Classses ==========================

const personBook: PersonBook = {
    name: 'Ann',
    email: 'ann@gmail.com',
    id: 1,
    title: 'Learn TypeScript',
    author: 'John Adams',
    category: Category.TypeScript,
    available: true,
};

// ==================================================================

// const refBook = new RefBook(1, 'Learn TypeScript', 2022, 3);

// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// ref.printItem();
// ref.publisher = 'asdf';
// console.log(ref.publisher);
// console.log(ref.id);
// // ReferenceItem class was changed to abstract

// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();
// printRefBook(refBook);
// // printRefBook('Not refBook argument - an error');

// const universityLibrarian: Librarian = new UL.UniversityLibrarian()
// universityLibrarian.name = 'Anna'
// universityLibrarian.assistCustomer('Adam', 'Learn TypeScript')

// let obj: TOptions = {speed: 50};
// obj = setDefaultConfig(obj);
// console.log(obj);

// =========================== 06 Modules ==========================

const flag = false;

// if (flag) {
//     import('./classes')
//         .then(module => {
//             const reader = new module.Reader();
//             console.log(reader);
//         })
//         .catch(e => console.log(e));
// }

if (flag) {
    const module = await import('./classes');
    const reader = new module.Reader();
    console.log(reader);
}
