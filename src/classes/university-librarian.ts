import * as interfaces from './../interfaces';

class UniversityLibrarian implements interfaces.Librarian {
    department: string;
    name: string;
    email: string;
    // constructor(public department: string, public name: string, public email: string) {
    //     console.log('Constructing UniversityLibrarian object');
    // }

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }
}

export { UniversityLibrarian };
