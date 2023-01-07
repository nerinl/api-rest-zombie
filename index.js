import "dotenv/config";
import "./database/connectdb.js";
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

import personaRouter from "./routes/persona.route.js";
import redirectRouter from "./routes/redirect.route.js";
import tradeRouter from "./routes/trade.route.js";
import informeRouter from "./routes/informes.route.js";

const app = express();

const whiteList = [process.env.ORIGIN1, process.env.ORIGIN2];

app.use(
    cors({
        origin: function (origin, callback) {
            console.log("😲😲😲 =>", origin);
            if (!origin || whiteList.includes(origin)) {
                return callback(null, origin);
            }
            return callback(
                "Error de CORS origin: " + origin + " No autorizado!"
            );
        },
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

// ejemplo back redirect (opcional)
app.use("/", redirectRouter);

//app.use("/api/v1/auth", authRouter);
//app.use("/api/v1/links", linkRouter);
app.use("/api/v1/personas", personaRouter);
app.use("/api/v1/trades", tradeRouter);
app.use("/api/v1/informes", informeRouter);

// solo para el ejemplo de login/token
// app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("🍉🍉🍉 http://localhost:" + PORT));
