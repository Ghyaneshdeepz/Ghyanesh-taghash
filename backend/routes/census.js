import express from "express";
import { addPerson, getPeople } from "../controllers/censusController.js";

const router = express.Router();

router.post("/people", addPerson);
router.get("/people", getPeople);

export default router;
