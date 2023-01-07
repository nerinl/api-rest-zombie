import { Router } from "express";
import {
    getPorcentajes
} from "../controllers/informes.controller.js";

const router = Router();

router.get("/getPorcentajes/", getPorcentajes);

export default router;
