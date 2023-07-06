const joi = require("joi");
//let obj = require("../models/schema");


//const data = obj.students;
const putvalidation = (req,res,next)=>{
    const schema = joi.object().keys({
        name:joi.string().required(),
        email:joi.string().email().required(),
        id : joi.number().max(3).required(),
        Phone_no: joi.number().max(13).min(10).required()
    })
    const{error} = schema.validate(req.body);
    if(error){
        res.status(406).json({error:error});
    }
    console.log(res);
    next();
}
module.exports.putvalidation = putvalidation;