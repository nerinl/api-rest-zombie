import { Persona } from "../models/Persona.js";
const personaCtrl = {};

//ArticulosByPersona
export const getArticulosByPersona = async (req, res) => {
    try {
        const articulo = await Articulo.findById(req.params.id);
        console.log("si pasó: " + articulo);
        return res.json({ nombre: articulo.nombre, infectado: articulo.infectado });
    } catch (error) {
        return res.status(500).json({ error: "error de server" });
    }
};

//Persona
export const getPersona = async (req, res) => {
    try {
        const persona = await Articulo.findOne({nombre: req.params.nombre, password: req.params.password});
        console.log("si pasó: " + persona.nombre);
        return res.json({ nombre: persona.nombre, infectado: persona.infectado });
    } catch (error) {
        return res.status(500).json({ error: "error de server" });
    }
};

//Todas las Personas
export const getPersonas = async (req, res) => {
    try {
        const personas = await Articulo.find();

        return res.json({ personas });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error de servidor" });
    }
};

export const setPersona = async (req, res) => {
    try {
        /*const personas = await Persona.find();
        return res.json({ personas });*/

        let persona = await Persona.findOne({nombre: req.body.nombre});
        if (persona) throw { code: 11000 };
        console.log(persona);

        persona = new Articulo(req.body);
        console.log(persona);
        res.json(persona);
        await persona.save();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "No se puede guardar sobreviviente" });
    }
};

export const updatePersona = async (req, res) => {
    try {
        const {id} = req.params;
        const persona = {
            nombre: req.body.nombre,
            edad: req.body.edad,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
            infectado: req.body.infectado,
            password: req.body.password
        };
        console.log('antes');
        await Articulo.findByIdAndUpdate(id, {$set: persona}, {new: true});
        res.json('Persona actualizada');
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error de servidor" });
    }
};

export const setInfectado = async (req, res) => {
    try {
        console.log('ndeej');
        let persona = await Articulo.findById(req.params.id);
        persona.infectado = true;
        
        await persona.save();
        //await Persona.findByIdAndUpdate(id, {$set: persona}, {new: true});
        res.json('Persona marcada como infectada');
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error de servidor" });
    }
};
