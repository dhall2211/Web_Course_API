import { Person } from "../Repo/people";
import peopleRepo from "../Repo/people";

const peopleServices = {
  getAllPeople: async () => {
    try {
      const allPeople = await peopleRepo.getPeople();
      return allPeople;
    } catch (err) {
      throw Error;
    }
  },

  addPerson: async (person: Person) => {
    try {
      const addper = await peopleRepo.addPerson(person);
      return addper;
    } catch (err) {
      throw Error;
    }
  },
};

export default peopleServices;
