import { Intercambio } from "../models/Intercambio.js";

//Persona By Id
export const getTradeByIds = async (req, res) => {
    try {
        const trade = await Intercambio.findById(req.params.id);
        return res.json(trade);
    } catch (error) {
        return res.status(500).json({ error: "error de server" });
    }
};

//Persona By Name && Password
/*export const getPersona = async (req, res) => {
    try {
        const persona = await Persona.findOne({username: req.params.username, password: req.params.password});
        return res.json({ username: persona.username, admin: persona.admin, id: persona.id });
    } catch (error) {
        return res.status(500).json({ error: "Datos incorrectos" });
    }
};

//Todas las Personas
export const getPersonas = async (req, res) => {
    try {
        const personas = await Persona.find();

        return res.json( personas );
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error de servidor" });
    }
};*/

export const setTrade = async (req, res) => {
    try {    
        console.log('trade');
        const trade = new Intercambio(req.body);
        console.log(trade);
        res.json(trade);
        await trade.save();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "No se puede guardar intercambio" });
    }
};
/*
export const updatePersona = async (req, res) => {
    try {
        const {id} = req.params;
        const persona = {
            nombre: req.body.nombre,
            edad: req.body.edad,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            infectado: req.body.infectado,
            password: req.body.password,
            sexo: req.body.sexo
        };
        await Persona.findByIdAndUpdate(id, {$set: persona}, {new: true});
        res.json('Persona actualizada');
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error de servidor" });
    }
};

export const setInfectado = async (req, res) => {
    try {
        console.log('ndeej');
        let persona = await Persona.findById(req.params.id);
        persona.infectado = true;
        
        await persona.save();
        //await Persona.findByIdAndUpdate(id, {$set: persona}, {new: true});
        res.json('Persona marcada como infectada');
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error de servidor" });
    }
};

export const removePersona = async (req, res) => {
    try {
        const { id } = req.params;
        const persona = await Persona.findById(id);

        if (!persona) return res.status(404).json({ error: "No existe la persona" });

        await persona.remove();

        return res.json(persona );
    } catch (error) {
        console.log(error);
        if (error.kind === "ObjectId") {
            return res.status(403).json({ error: "Formato id incorrecto" });
        }
        return res.status(500).json({ error: "error de servidor" });
    }
};*/