import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Controllers (route handlers)
import * as apiController from "./controllers/api";


// Create Express server
const app = express();



// Express configuration
app.set("port", process.env.PORT || 3600);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



/**
 * API examples routes.
 */
app.get("/api/carousel", apiController.getApi);

export default app;
