import { createCustomer, getBooksByCategoryPromise } from './functions';
import { Author, Book, Person } from './interfaces';

export type Library = {
    lib: string;
    books: number;
    avgPagesPerBook: number;
};

export type BookProperties = keyof Book;

export type PersonBook = Person & Book;

export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;

export type UpdatedBook = Partial<Book>;

export type AuthorWoEmail = Omit<Author, 'email'>;

export type CreateCustomerFunctionType = typeof createCustomer;

export type fn = (x: string, y: number, z: boolean) => symbol;

type Param1<T> = T extends (x: infer R, y: number, z: boolean) => symbol ? R : never;
type Param2<T> = T extends (x: string, y: infer R, z: boolean) => symbol ? R : never;
type Param3<T> = T extends (x: string, y: number, z: infer R) => symbol ? R : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;

export type Unpromisify<T> = T extends Promise<infer R> ? R : never;

type p = ReturnType<typeof getBooksByCategoryPromise>;
type dataType = Unpromisify<p>;