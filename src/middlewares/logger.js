const logger=(req,res,next)=>{
    //Get the current
    const time=new Date().toLocaleDateString();

    //I want to keep track of the method (GET/POST/PUT/PATCH/DELETE)
    const method=req.method;

    //Exact Path on which user is sending the request
    const url=req.url;

    console.log(`${time} Recieved a ${method} request to ${url}`);
    next();
}

module.exports=logger;