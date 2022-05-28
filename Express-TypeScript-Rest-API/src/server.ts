import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from 'body-parser';
import logging from "./config/logging";
import config from "./config/config";
import http from 'http';
import sampleRoutes from './routes/sample'
import booksRoutes from './routes/books'

const NAEMESAPCE = "server";
const router = express();

// logging resquest
router.use((req, res, next) => {
    logging.info(NAEMESAPCE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    res.on("finish", () => {
        logging.info(NAEMESAPCE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${req.statusCode}]`)
    });
    next();
})

// Parse the request
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Rules of our api
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requests-With, Content-Type, Accept, Authorization");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GE,T PATCH, DELETE, POST, PUT");
        return res.status(200).json({});
    }
    next();
})

/** Routes **/
router.use("/sample",sampleRoutes)
router.use("/api/v1",booksRoutes)


/** Error Handling ***/
router.use((req, res, next) => {
    const error = new Error("Not found");
    return res.status(404).json({
        message: error.message
    });
})


/** Create a server**/
const httpServer = http.createServer(router);

httpServer.listen(config.server.port,()=>logging.info(NAEMESAPCE,`Server running on ${config.server.hostname}:${config.server.port}`))
