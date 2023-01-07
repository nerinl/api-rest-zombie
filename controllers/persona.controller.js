import { Persona } from "../models/Persona.js";
const personaCtrl = {};

//Persona By Id
export const getPersonaById = async (req, res) => {
    try {
        const persona = await Persona.findById(req.params.id);
        return res.json(persona);
    } catch (error) {
        return res.status(500).json({ error: "error de server" });
    }
};

//Persona By Name && Password
export const getPersona = async (req, res) => {
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
};

export const setPersona = async (req, res) => {
    try {
        /*const personas = await Persona.find();
        return res.json({ personas });*/

        let persona = await Persona.findOne({username: req.body.username});
        if (persona) throw { code: 11000 };
        console.log(persona);

        persona = new Persona(req.body);
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
};

//Porcentajes infectados
export const getPorcentajes = async (req, res) => {
    try {
        let infectados = 0;
        const persona = await Persona.find({infectado: true});
        //contar
        persona.count(function(err,count){
            if(err) return res.status(500).json({ error: "error de servidor" });
            else{
                infectados = count;
            }
        });

        return res.json(infectados);
    } catch (error) {
        return res.status(500).json({ error: "Datos incorrectos" });
    }
};