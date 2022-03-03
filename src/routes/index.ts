import express from "express";
import peopleService from "../services/peopleService";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const peopleData = await peopleService.getAllPeople();
    res.json(peopleData);
  } catch (error) {
    res.status(500).send();
  }
});

//router.put('/', () =>)

module.exports = router;
