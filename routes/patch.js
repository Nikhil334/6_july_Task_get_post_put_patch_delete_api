let obj = require("../models/schema");

const {patchlogic} = require("../controllers/patchlogic");

const update2 = (datavalid, res, id) => {
    patchlogic(datavalid,res,id);
    
    // let data = obj.students;
    // let matched = data.find((acc) => acc.id === id);
    // let index = data.indexOf(matched);
    // if (!matched) {
    //     console.log("error");
    //     res.status(401).send("error");
    // }
    // else {
    //     obj.students[index] = {...matched,...datavalid};
    //     console.log(obj);
    //     res.status(206).send(obj);
    // }
}




module.exports.update2=update2;
