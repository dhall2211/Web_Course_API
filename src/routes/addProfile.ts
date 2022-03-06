import { profile } from "console";
import express from "express";
import { Person } from "../Repo/db";
import peopleService from "../services/peopleService";

const router = express.Router();

router.post("/", async (req, res) => {
  const profile: Person = req.body;
  try {
    const profileAdded = await peopleService.addPerson(profile);
    profileAdded ? res.status(200).send() : res.status(406).send();
  } catch (error) {
    res.status(500).send();
  }
});

//router.put('/', () =>)

module.exports = router;
