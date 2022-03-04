import { profile } from "console";
import express from "express";
import peopleService from "../services/peopleService";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const profileAdded = await peopleService.addPerson();
    profileAdded ? 
    res.status(200).send() : res.status(406).send()
  } catch (error) {
    res.status(500).send();
  }
});

//router.put('/', () =>)

module.exports = router;