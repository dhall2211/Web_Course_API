import Dexie, {Table} from 'dexie'

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

  class PersonDB extends Dexie {
      public persons!: Table<Person>;

      public constructor() {
          super("PersonDB");
          this.version(1).stores({
              persons: "firstName, lastName, email, company, profession, cars, isAvailableByPhone, textGreeting, followers"
          })
      }
  }


  export const db = new PersonDB()