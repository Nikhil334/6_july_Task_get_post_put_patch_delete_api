const joi = require("joi");
//let obj = require("../models/schema");


//const data = obj.students;
const updatevalidation = (req,res,next)=>{
    const schema = joi.object().keys({
        name:joi.string().required(),
        email:joi.string().email().required(),
        id : joi.number().max(300).min(100).required(),
        Phone_no: joi.number().min(6000000000).max(9999999999).required()
    })
    const{error} = schema.validate(req.body);
    if(error){
        res.status(406).json({error:error});
    }
    console.log(res);
    next();
}
module.exports.updatevalidation = updatevalidation;