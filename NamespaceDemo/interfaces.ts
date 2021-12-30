import { Category } from './enums';

export interface Book {
    id: number;
    title: string;
    author: string;
    category: Category;
    available: boolean;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    (value: string): void;
}

export interface Person {
    name: string;
    email: string;
}

export interface Author extends Person {
    numBooksPublished: number;
}

export interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

export interface Magazine {
    title: string;
    publisher: string;
}

export interface ShelfItem {
    title: string;
}

export interface LibMgrCallback {
    (err: Error, titles: string[]): void;
}

export { DamageLogger as Logger };