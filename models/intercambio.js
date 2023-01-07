import mongoose from "mongoose";
const {Schema} = mongoose;

const IntercambioSchema = new Schema({    
    idSolicita:{
        type: String,
        required: true
    },
    usernameSolicita: {
        type: String,
        required: true
    },
    idSolicitado:{
        type: String,
        required: true
    },
    usernameSolicitado: {
        type: String,
        required: true
    },
    aguaSolicita: {
        type: Number,
        required: true,
    },
    comidaSolicita: {
        type: Number,
        required: true,
    },
    medicamentoSolicita: {
        type: Number,
        required: true,
    },
    municionSolicita: {
        type: Number,
        required: true,
    },
    aguaSolicitado: {
        type: Number,
        required: false,
    },
    comidaSolicitado: {
        type: Number,
        required: false,
    },
    medicamentoSolicitado: {
        type: Number,
        required: false,
    },
    municionSolicitado: {
        type: Number,
        required: false,
    },
    nombreSolicita: {
        type: String,
        required: false,
    },
    nombreSolicitado: {
        type: String,
        required: false,
    },
    aprobado: {
        type: Boolean,
        required: true,
    }

});

export const Intercambio = mongoose.model("Intercambio", IntercambioSchema);

