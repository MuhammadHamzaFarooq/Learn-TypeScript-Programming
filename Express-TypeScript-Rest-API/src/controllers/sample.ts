import {Request,Response,NextFunction} from 'express'
import logging from '../config/logging'

const NAMESAPCE = 'Sample Controller'

const sampleHealthCheck = (req:Request,res:Response,next:NextFunction)=>{
   logging.info(NAMESAPCE,`Sample Health Checker Route Called.`);
   return res.send(200).json({
       message:"ping"
   });
}


export default{
    sampleHealthCheck
}