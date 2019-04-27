const User = require('../entety/User');

let array = [];
let flag=0;

exports.put = (name, email, password, phone, address) => {
    let object = new User(name, email, password, phone, address);
    console.log(object);
    array.push(object);
    flag++
};

exports.equals = (email, password) => {
    console.log(email + " " + password);

    for(let i=0; i<flag; i++){
        if(array[i].email === email&&array[i].password===password) {
            return true;
        }
    }
    return false;
};