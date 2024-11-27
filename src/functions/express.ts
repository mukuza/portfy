import express from "express";
import cors from "cors";
import router from "../routes/routes";

const app = express();

const corsOptions = {
    origin: "*", //colocar aq o front-end
    methods: ["GET"],
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

export default app;