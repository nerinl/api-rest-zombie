import { Persona } from "../models/Persona.js";

//Porcentajes infectados
export const getPorcentajes = async (req, res) => {
    try {
        console.log('inicia');
        const infectados = await Persona.count({infectado: true});        
        const noInfectados = await Persona.count({infectado: false});
        const totalPersonas = await Persona.count();
        let promedioInfectados=0;
        let promedioNoInfectados=0;
        if(infectados>0) promedioInfectados = infectados*100/totalPersonas;
        if(noInfectados>0) promedioNoInfectados = noInfectados*100/totalPersonas;

        return res.json({infectados: infectados, noInfectados: noInfectados, totalPersonas: totalPersonas,
            promedioInfectados:promedioInfectados, promedioNoInfectados: promedioNoInfectados});
    } catch (error) {
        return res.status(500).json({ error: "Datos incorrectos" });
    }
};