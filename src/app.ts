import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import favicon from "serve-favicon";
import path from "path";

// Generate application
const app = express();

// Set server port
app.set("port", process.env.PORT || 3000);

// Use favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// Allow cors when on development mode
if (process.env.NODE_ENV == "development") {
    app.use(
        cors({
            origin: ["http://localhost:7000"],
            credentials: true
        })
    );
}

// Compress all responses
app.use(compression());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());
// Set static file path
app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * primary app routes
 */
// app.get("/", homeController.index);

/** 
 * Test route
 */

import * as UserController from "./controllers/users";

app.get("/api/users", UserController.getAllUsers);

export default app;
