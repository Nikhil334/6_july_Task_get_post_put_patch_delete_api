const validator = require("validator");
const {registerlogic} = require("../controllers/registerlogic");

const register = (data, res) => {
    registerlogic(data,res);
    // try {
    //     if (Object.keys(data).length != 0) {
    //          console.log(Object.keys(data).length);
    //         if (data.id != null && data.name != null && data.email != null && data.Phone_no != null) {
    //             // console.log(validator.isEmail(data.email));
    //              if(validator.isEmail(data.email)){
    //                  res.status(201).send(`Account Created:-${data}`);
    //              }
    //              else{
    //                  res.status(406).json("Please ender valid email");
    //              }
    //         }
    //         else {
    //             res.status(406).json("Please fill all details");
    //         }
    //     }
    //     else {
    //         res.status(411).json("Data Required Please fill details");
    //     }
    // }
    // catch (err) {
    //     res.status(500).send("500 :- Internal Server Error");
    // }
}

module.exports.register = register;