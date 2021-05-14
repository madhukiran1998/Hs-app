import express from "express";

const router = express.Router();
import { getTestlist, createQuestions } from "../controllers/testlist.js";

router.get("/", getTestlist);
router.post("/", createQuestions);

export default router;
