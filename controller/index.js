const express = require('express');

const db = require('../service');
const app = express();


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
});


app.get("/registration", (req,resp) => {
    db.put(req.query.name, req.query.email, req.query.password, null, null);
    resp.send("true");
});



app.get("/enter", (req,resp) =>{
    if(db.equals(req.query.email, req.query.password)){
        console.log("true");
        resp.send("true")
    }else {
        console.log("false");
        resp.send("false");
    }
});

app.get("/update", (req, resp) =>{
});

app.listen(8080, ()=>
    console.log("works")
);

