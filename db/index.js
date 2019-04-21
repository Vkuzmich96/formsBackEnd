let array = [];
let flag=0;
class User{
    constructor(name, email, password, phone, adres){
        this.name=name;
        this.email = email;
        this.password= password;
        this.phone =phone;
        this.adres =adres;
    }
}

exports.put = function(name, email, password, phone, adres){
    array.push(new User(name, email, password));
    flag++
};

exports.equals = function (email, password) {
    for( i =0; i<flag; i++){
        if(array[i].email === email&&array[i].password===password) {
            return true;
        }
    }
    return false;
};