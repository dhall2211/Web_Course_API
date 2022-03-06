import { Person } from "../Repo/db";
import peopleRepo from "../Repo/people";

const peopleServices = {
  getAllPeople: async () => {
    try {
      const AllPeople = await peopleRepo.getPeople();
      return AllPeople;
    } catch (err) {
      throw Error;
    }
  },

  addPerson: async (person: Person) => {
    try {
      const addper = "added one";
      return addper;
    } catch (err) {
      throw Error;
    }
  },
};

export default peopleServices;
