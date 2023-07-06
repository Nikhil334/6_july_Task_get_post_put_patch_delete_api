let obj = require("../models/schema");

const patchlogic=(datavalid,res,id)=>{let data = obj.students;
let matched = data.find((acc) => acc.id === id);
let index = data.indexOf(matched);
if (!matched) {
    console.log("error");
    res.status(401).send("error");
}
else {
    obj.students[index] = {...matched,...datavalid};
    console.log(obj);
    res.status(206).send(obj);
}
}
module.exports.patchlogic=patchlogic;