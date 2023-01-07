import { Router } from "express";
import {
    //getPersonas,
    setTrade
    //getPersona,
    //getPersonaById,
    //updatePersona,
    //removePersona
} from "../controllers/intercambio.controller.js";

const router = Router();

//router.get("/", getPersonas);
router.post("/setTrade", setTrade);
//router.get("/:id", getPersonaById);
//router.get("/Name/:username/Password/:password", getPersona);
//router.patch("/updatePersona/:id", updatePersona);
//router.patch("/setInfectado/:id", setInfectado);
//router.post("/removePersona/:id", removePersona);

export default router;
