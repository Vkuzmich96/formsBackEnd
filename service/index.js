const User = require('../entety/User');

let array = [];

exports.put = (name, email, password, phone, address) => {
    if(!_findUser(email)) {
        array.push(new User(name, email, password, phone, address));
        return true
    }else{
        return false
    }
};

exports.equals = (email, password) => {
    let result = false;
    array.forEach((value)=>{
        if (value.email === email&&value.password===password){
            result = true;
        }
    });
    return result;
};

_findUser =(email)=>{
    let result = null;
    array.forEach((value)=>{
        if (value.email === email){
            result = value;
        }
    });
    return result;
};

exports.update =(email, number, address)=>{
    let user = _findUser(email);
    user.phone = number;
    user.address = address;
};