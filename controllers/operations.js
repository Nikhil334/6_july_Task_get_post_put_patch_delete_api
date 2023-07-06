const addition = (a,b)=>{
    return a+b;
}

const sub = (a,b)=>{
    return a-b;
}

const mul = (a,b)=>{
    return a*b;
}

const div = (a,b)=>{
    if(b==0){
        return "Invalid input";
    }
    return a/b;
}

const sqrt = (a)=>{
    return Math.sqrt(a);
}

const pow = (a,b)=>{
    return Math.pow(a,b);
}
const log = (a)=>{
    return Math.log(a);
}

module.exports = {addition,sub,mul,div,sqrt,pow,log};