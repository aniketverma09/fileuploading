import express from 'express'
import { dbConnection } from './db/db.js';
import { handlefileuploding } from './controller/fileuploding.controller.js';
import { upload } from './middlewere/multer.middlewere.js';

const app = express()

//FILE SEND KE LIYE POST USE HOGA..
app.post("/sendfile",upload.single("img"),handlefileuploding)

dbConnection()
app.listen(5000,() => {
    console.log('server is running');
    

})