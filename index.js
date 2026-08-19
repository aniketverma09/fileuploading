import express from 'express'
import { dbConnection } from './db/db.js';
import { handlefileuploding } from './controller/fileuploding.controller.js';
import { upload } from './middlewere/multer.middlewere.js';

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
//FILE SEND KE LIYE POST USE HOGA..

const maxCount = 5;
app.post("/sendfile",upload.array("img",maxCount),handlefileuploding)

dbConnection()
app.listen(5000,() => {
    console.log('server is running');
    

})