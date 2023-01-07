import { Router } from "express";
import { body } from "express-validator";
import {
    getPersonas,
    setPersona,
    getPersona,
    getPersonaById,
    updatePersona,
    setInfectado,
    removePersona,
    getPorcentajes
} from "../controllers/persona.controller.js";

const router = Router();

router.get("/", getPersonas);
router.post("/setPersona", setPersona);
router.get("/:id", getPersonaById);
router.get("/Name/:username/Password/:password", getPersona);
router.patch("/updatePersona/:id", updatePersona);
router.patch("/setInfectado/:id", setInfectado);
router.post("/removePersona/:id", removePersona);

export default router;
