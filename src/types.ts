import { Book, Person } from './interfaces';

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     category: Category;
//     available: boolean;
// };

export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;
