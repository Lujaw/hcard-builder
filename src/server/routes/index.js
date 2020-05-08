import { Router } from "express";
import handleSubmit from "./handlers/submit";
import handleUpdate from "./handlers/update";
import handleSsr from "./handlers/ssr";
import { getCards, getCardById } from "./handlers/cards";

const router = Router();

router.post("/submit", handleSubmit);
router.post("/update", handleUpdate);
router.get("/api/cards", getCards);
router.get("/api/card/:id", getCardById);
router.get("/card*", handleSsr);

export default router;
