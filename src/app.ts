
import { Library, RefBook, ReferenceItem, UL, Shelf } from '../NamespaceDemo/classes';
import { Category } from '../NamespaceDemo/enums';
import { printRefBook, bookTitleTransform, createCustomerID, getAllBooks, getBookByID, getBookTitlesByCategory, getProperty, getTitles, logBookTitles, logFirstAvailable, printBook, showHello, сheckoutBooks, purge, createCustomer, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from '../NamespaceDemo/functions';
import { Author, Book, Librarian, Logger, Magazine } from '../NamespaceDemo/interfaces';
import { BookOrUndefined, BookProperties, BookRequiredFields, CreateCustomerFunctionType, Library as Lib, PersonBook, UpdatedBook } from '../NamespaceDemo/types';


showHello('greeting', 'TypeScript');

// Task 02.01. Basic Types

const libraries: Lib[] =
    [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

logFirstAvailable(getAllBooks());
logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// Task 03.01. Function Type
let myID: string = createCustomerID('Ann', 10);
console.log(myID);

let idGenerator: typeof createCustomerID = (name: string, id: number): string => id + ' ' + name;
idGenerator = createCustomerID;
idGenerator('Ann', 10);

// Task 03.02. Optional, Default and Rest Parameters

console.log(getBookByID(1).title);

let myBooks: string[] = сheckoutBooks('Ann', 1, 2, 4);
console.log(myBooks.join(', '));

// Task 03.03. Function Overloading

let checkedOutBooks = getTitles(false);
console.log(`checkedOutBooks: ${checkedOutBooks.map(book => book.title).join(', ')}`);

// Task 03.04. Assertion Functions
console.log(bookTitleTransform('title'));
// console.log(bookTitleTransform(123));

// Task 04.01. Defining an Interface

let myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
};

printBook(myBook);
myBook.markDamaged('missing back cover');

// Task 04.02. Defining an Interface for Function Types

let logDamage: Logger = (value: string): void => console.log(value);
logDamage('hI');

// Task 04.03. Extending Interface

let favoriteAuthot: Author = {
    name: 'Ann',
    email: 'ann@mail.ru',
    numBooksPublished: 5
};

let favoriteLibrarian: Librarian = {
    name: 'Ben',
    email: 'ben@mail.ru',
    department: 'Department#1',
    assistCustomer: (custName: string) => console.log(custName)
};

// Task 04.04. Optional Chaining

const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

console.log(offer?.magazine);
console.log(offer?.magazine?.getTitle());
console.log(offer?.book?.getTitle?.());
console.log(offer?.book?.authors?.[0]);

// Task 04.05. Keyof Operator

console.log(getProperty(getAllBooks()[0], 'title'));
console.log(getProperty(getAllBooks()[0], 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'isbn'));

// Task 05.01. Creating and Using Classes

// class ReferenceItem {
//     // title: string;
//     // year: number;

//     // constructor(newTitle: string, newYear: number) {
//     //     console.log('Creating a new ReferenceItem...');
//     //     this.title = newTitle;
//     //     this.year = newYear;
//     // }
//     private _publisher: string;
//     #id: number;
//     static department: string = 'department1';

//     get publisher(): string {
//         return this._publisher.toUpperCase();
//     }

//     set publisher(newPublisher: string) {
//         this._publisher = newPublisher;
//     }

//     constructor(public title: string, protected year: number, newId: number) {
//         console.log('Creating a new ReferenceItem...');
//         this.#id = newId;
//     }

//     printItem(): void {
//         console.log(`${this.title} was published in ${this.year}`);
//         console.log(`Department: ${ReferenceItem.department}`);
//     }

//     getId(): number {
//         return this.#id;
//     }
// }

// let ref = new ReferenceItem('Title', 2021, 1);
// console.log(ref.printItem());

// ref.publisher = 'Publisher1';
// console.log(ref.publisher);

// console.log(ref.getId());

// Task 05.02. Extending Classes, Task 06.03. Default Export

let refBook1 = new RefBook('Title', 2021, 1, 54);
// console.log(refBook.printItem());
printRefBook(refBook1);

const librarian = new UL.UniversityLibrarian();
// printRefBook(librarian);

// Task 05.03. Creating Abstract Classes

console.log(refBook1.printCitation());

// Task 05.04. Interfaces for Class Types

let favoriteLibrarian1: Librarian = new UL.UniversityLibrarian();
favoriteLibrarian1.name = 'Name1';
favoriteLibrarian1.assistCustomer('Name2');

// Task 05.05. Intersection and Union Types

let book1: PersonBook = {
    title: 'Title',
    author: 'Ann',
    available: true,
    name: 'Victor',
    email: 'victor@mail.ru',
    id: 5,
    category: Category.Angular
};

console.log(book1);

// Task 06.05. Dynamic Import Expression

const flag = true;

if (flag) {
    const module = await import('../NamespaceDemo/classes');
    const reader = new module.Reader();

    reader.name = 'Ann';
    console.log(reader);
}

// Task 06.06. Type-Only Imports and Exports

// let library: Library = new Library();
let library: Library = { id: 5, name: 'Ann', address: 'address1' };
console.log(library);

// Task 07.01. Generic Functions

let inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// console.log(purge(inventory));
// console.log(purge<number>([1, 2, 3]));

// Task 07.02. Generic Interfaces and Classes

let bookShelf: Shelf<Book> = new Shelf<Book>();

inventory.forEach(book => bookShelf.add(book));
console.log(bookShelf.getFirst()?.title);

let magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();

magazines.forEach(magazine => magazineShelf.add(magazine));
console.log(magazineShelf.getFirst());

// Task 07.03. Generic Constraints

magazineShelf.printTitles();

const magazine = magazineShelf.find('Five Points');
console.log(magazine);

const magazinePublisher = getProperty(magazines[0], 'publisher');
const numberString = getProperty<number, 'toString'>(123, 'toString');

// Task 07.04. Utility Types

let bookRequiredFields: BookRequiredFields = {
    id: 1,
    title: 'Title',
    author: 'Author',
    available: true,
    category: Category.CSS,
    pages: 153,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
};

let updatedBook: UpdatedBook = {};

let params: Parameters<CreateCustomerFunctionType> = ['param'];
createCustomer(...params);

// Task 08.01. Class Decorators (sealed)

const librarian1 = new UL.UniversityLibrarian();
console.log(librarian1);
librarian1.name = 'Anna';
librarian1.assistCustomer('Victor');

// Task 08.02. Class Decorators that replace constructor functions (logger)

let fLibrarian = new UL.UniversityLibrarian();
fLibrarian.name = 'Ann';
fLibrarian['printLibrarian']();

// Task 08.03. Method Decorator (writable)

fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity = null;

// Task 08.04. Method Decorator (timeout)

const refBook = new RefBook('Title', 2021, 1, 54);
// refBook.printItem();

// Task 08.05. Parameter Decorator (logParameter)
fLibrarian.assistCustomer('Victor');

// Task 08.06. Property Decorator

console.log(fLibrarian.name);

// refBook.copies = -10;
// refBook.copies = 0;
// refBook.copies = 4.5;
refBook.copies = 5;

console.log('Start');
getBooksByCategory(Category.JavaScript, logCategorySearch);
getBooksByCategory(Category.Software, logCategorySearch);
console.log('End');

// Task 09.02. Promises

console.log('Start');
getBooksByCategoryPromise(Category.JavaScript)
    .then(titles => console.log(titles))
    .catch(reason => console.log(reason));

getBooksByCategoryPromise(Category.Software)
    .then(titles => console.log(titles))
    .catch(reason => console.log(reason));
console.log('End');

// Task 09.03. Async Functions

console.log('Start');
logSearchResults(Category.JavaScript)
    .catch(err => console.log(err));
console.log('End');