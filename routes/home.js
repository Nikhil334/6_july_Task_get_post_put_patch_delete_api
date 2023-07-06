//const app = require("../server");
;


const home=(res)=>{
    try{
    res.send("Welcome to home page");
    }
    catch(err){
      res.send(`Error is :-${err}`);
    }
}

module.exports.home = home;