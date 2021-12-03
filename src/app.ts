showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

type Book = {
    id: number;
    title: string;
    author: string;
    category: Category;
    available: boolean;
};

type Library = {
    lib: string;
    books: number;
    avgPagesPerBook: number;
};

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular
};

const libraries: Library[] =
    [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

logFirstAvailable(getAllBooks());
logBookTitles(getBookTitlesByCategory(Category.JavaScript));

function getAllBooks() {
    const books: Book[] =
        [
            { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', category: Category.JavaScript, available: true },
            { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', category: Category.JavaScript, available: false },
            { id: 3, title: 'CSS Secrets', author: 'Lea Verou', category: Category.CSS, available: true },
            { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', category: Category.JavaScript, available: true }
        ];
    return books;
};

function logFirstAvailable(books: Book[]): void {
    console.log(`Amount of books: ${books.length}`);
    console.log(`First available book: ${books.find(book => book.available).title}`);
};

function getBookTitlesByCategory(category: Category): Array<string> {
    return getAllBooks().filter(book => book.category === category).map(book => book.title);
};

function logBookTitles(titles: string[]): void {
    console.log(`Book titles: ${titles.join(', ')}`);
};

function getBookAuthorByIndex(id: number): { title: string; author: string } {
    return getAllBooks().find(book => book.id === id);
};

function calcTotalPages(libraries: Library[]): bigint {
    return BigInt(libraries.map(library => library.books * library.avgPagesPerBook).reduce((prev, cur) => prev + cur, 0));
};