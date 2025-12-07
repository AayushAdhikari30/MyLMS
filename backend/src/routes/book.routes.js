import { Router } from "express";
import { registerBook } from "../controllers/book.controller.js";

const router = Router();


router.route("/registerbook").post(registerBook)




export default router