let array = [];
let flag=0;
class User{
    constructor(name, email, password){
        this.userName=name;
        this.email = email;
        this.password= password;
    }
}

exports.put = function(name, email, password){
    array.push(new User(name, email, password));
    flag++
};

exports.equals = function (email, password) {
    for( i =0; i<flag; i++){
        if(array[i].email === email&&array[i].password===password)
            return true;
    }
    return false;
};