import { profile } from "console";
import express from "express";
import { Person } from "../Repo/people";
import peopleService from "../services/peopleService";

const router = express.Router();

router.post("/", async (req, res) => {
  const profile: Person = req.body;
  // const profile = {
  //     firstName: "Bob",
  //     lastName: "Muller",
  //     email: "@surfshop25635",
  //     company: "Bobs surf shop",
  //     profession: "beach bum",
  //     cars: [],
  //     isAvailableByPhone: true,
  //     textGreeting: "Surf up dude",
  //     followers: 3
  //     telephone: "5872147899",
  // }
  try {
    const profileAdded = await peopleService.addPerson(profile);
    profileAdded ? res.status(200).send('person added!') : res.status(406).send('unable to add person');
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
