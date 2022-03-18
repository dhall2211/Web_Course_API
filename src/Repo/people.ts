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
}
import { readFile, writeFile } from "fs";

const peopleRepo = {
  getPeople: async function () {
    return new Promise<void>((resolve, reject) => {
      readFile("./src/repo/persons.json", "utf-8", (err, peopleData) => {
        if (err != null) {
          reject(err);
        }
        const parsedData = JSON.parse(peopleData);
        resolve(parsedData);
      });
    });
  },
  addPerson: async (newData: Person) => {
    try {
      let oldData: Person[] = []; 
      let changedData = [];
      let testData = "";
      const dataPromise = new Promise<void>((resolve, reject) => {
        readFile("./src/repo/persons.json", "utf-8", (err, peopleData) => {
          if (err != null) {
            reject(err);
          }
          const parsedData = JSON.parse(peopleData);
          resolve(parsedData);
        });
      });
      function mergeData(data: any) {
        // const dataStringed = JSON.stringify(data);
        // testData = dataStringed;
        return  data;
      }
      const resolvedData = await dataPromise.then((res) => mergeData(res));
      changedData = resolvedData;
      changedData.push(newData);
      console.log(changedData);
      const dataStringed = JSON.stringify(changedData);

      
      writeFile("./src/repo/persons.json", dataStringed, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("file successfully written");
        }
      });
      return true;
    } catch (error) {
      return false;
    }
  },
};

export default peopleRepo;
