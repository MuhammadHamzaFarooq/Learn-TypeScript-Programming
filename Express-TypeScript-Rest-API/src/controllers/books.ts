import {Request,Response,NextFunction} from 'express'
import logging from '../config/logging'

const NAMESAPCE = 'Books Controller'

const getAllBooks = (req:Request,res:Response,next:NextFunction)=>{
   logging.info(NAMESAPCE,`Books Route Called.`);
   return res.send(200).json({
       message:"All Books"
   });
}


export default{
    getAllBooks
}