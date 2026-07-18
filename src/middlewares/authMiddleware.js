const jwt=require('jsonwebtoken');
const User=require('../models/userModel');


//Authorization

const auth=async (req,res,next)=>{
    let token;
    //Tokens are sent in Header of req object
    // Authorization: "Bearer juhsbndsjdbbbdnhjdnhdndndnd"

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

        token=req.headers.authorization.split(' ')[1];

        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        req.user=await User.findById(decoded.id).select('-password');
        next();

    }

    if(!token){
        res.status(401);
        next(new Error("No token sent"));
    }


}

module.exports={auth};