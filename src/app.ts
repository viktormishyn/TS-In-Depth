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

type Book = {
    id: number;
    title: string;
    author: string;
    category: Category;
    available: boolean;
};

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

function logFistAvailable(books: readonly Book[]): void {
    console.log(`Total number of books: ${books.length}`);
    // const title = books.find(book => book.available)?.title;
    const title = books.find(({ available }) => available)?.title;
    console.log(`First available book: ${title}`);
}

function getBookTitlesByCategory(category: Category): string[] {
    const books = getAllBooks();
    const titles = books.filter(book => book.category == category).map(book => book.title);
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
