import Dexie, {Table} from 'dexie'
import {persons} from './person';

export interface Person {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    profession: string;
    cars: string[];
    isAvailableByPhone: boolean;
    textGreeting: string;
    followers: number;
    image?: Blob;
    videoLink?: string;
  }

    class DB extends Dexie {
       persons!: Dexie.Table<Person, number>;

       constructor() {
          super("MyDB");
           this.version(1).stores({
               persons: "firstName, lastName, email, company, profession, cars, isAvailableByPhone, textGreeting, followers"
           })
           this.persons.bulkAdd(persons)
        
      }
  }
  export default DB;


