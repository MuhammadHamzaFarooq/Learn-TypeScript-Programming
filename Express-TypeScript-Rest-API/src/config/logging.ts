const getTimeStmp = ():string=>{
    return new Date().toISOString()
}

const info = (namespace:string,message:string,object?:any )=>{
 if(object){
     console.log(`[${getTimeStmp()}] [INFO] [${namespace}] [${message}]`,object);
 }
 else{
    console.log(`[${getTimeStmp()}] [INFO] [${namespace}] [${message}]`);
 }
}
const warn = (namespace:string,message:string,object?:any )=>{
 if(object){
     console.warn(`[${getTimeStmp()}] [WARN] [${namespace}] [${message}]`,object);
 }
 else{
    console.warn(`[${getTimeStmp()}] [WARN] [${namespace}] [${message}]`);
 }
}
const error = (namespace:string,message:string,object?:any )=>{
 if(object){
     console.error(`[${getTimeStmp()}] [ERROR] [${namespace}] [${message}]`,object);
 }
 else{
    console.error(`[${getTimeStmp()}] [ERROR] [${namespace}] [${message}]`);
 }
}
const debug = (namespace:string,message:string,object?:any )=>{
 if(object){
     console.debug(`[${getTimeStmp()}] [DEBUG] [${namespace}] [${message}]`,object);
 }
 else{
    console.debug(`[${getTimeStmp()}] [DEBUG] [${namespace}] [${message}]`);
 }
}

export default{
    info,
    warn,
    error,
    debug
}