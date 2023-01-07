import mongoose from "mongoose";
const {Schema} = mongoose;

const PersonaSchema = new Schema({    
    username:{
        type: String,
        required: true,
        unique: true,
        index: { unique: true }
    },
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true,
    },
    sexo:{        
        type: String,
        required: true
    },
    latitud: {
        type: Number,
        required: true,
    },
    longitud: {
        type: Number,
        required: true,
    },
    infectado: {
        type: Boolean,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    admin:{
        type: Boolean,
        required: false
    },
    agua: {
        type: Number,
        required: false,
    },
    comida: {
        type: Number,
        required: false,
    },
    medicamento: {
        type: Number,
        required: false,
    },
    municion: {
        type: Number,
        required: false,
    }

});

export const Persona = mongoose.model("Persona", PersonaSchema);
