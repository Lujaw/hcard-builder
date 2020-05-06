import express from "express";
import { handleSubmit } from "./handlers/submit";
import { handleUpdate } from "./handlers/update";
import { getCards, getCardById } from "./handlers/cards";
import { handleSsr } from "./handlers/ssr";

const router = express.Router();

router.post("/submit", handleSubmit);
router.post("/update", handleUpdate);
router.get("/api/cards", getCards);
router.get("/api/card/:id", getCardById);
router.get("/card*", handleSsr);

export default router;
