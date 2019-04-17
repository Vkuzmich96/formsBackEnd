const express = require('express');
const Cookies = require('cookies');
const db = require ('./db');
const app = express();


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
});

app.use("/update", (req, res, next) => {
    if((new Cookies(req, res)).get('Access') === true){
        next();
    }
    else {
        res.send('1');
    }
});

app.get("/registration", (req,resp) =>{
    db.put(req.query.name, req.query.email, req.query.password);
    resp.send("1");
});

app.get("/enter", (req,resp) =>{
    if('enter ' + req.query.email + ' ' + req.query.password){
        let CookieOptions ={
            path:'/'
        };
        (new Cookies(req, resp)).set('Access',true, CookieOptions)
        resp.send('1')
    }
    resp.send("2");
});

app.get("/update", (req, resp) =>{
    console.log("user was here!!")
});

app.listen(8080, ()=>
    console.log("works")
);

