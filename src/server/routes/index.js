import { Router } from "express";
import handleSubmit from "./handlers/submit";
import handleUpdate from "./handlers/update";
import handleViews from "./handlers/views";
import { getCards, getCardById } from "./handlers/cards";

const router = Router();

router.post("/submit", handleSubmit);
router.post("/update", handleUpdate);
router.get("/api/cards", getCards);
router.get("/api/card/:id", getCardById);

// sending all other routes to the view handler
router.get("*", handleViews);

export default router;
