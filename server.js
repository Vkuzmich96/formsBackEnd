const express = require('express');
const db = require ('./db');
const app = express();


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
});



app.get("/registration", (req,resp) =>{
    db.put(req.query.name, req.query.email, req.query.password, null, null);
    resp.send(true);
});

app.get("/enter", (req,resp) =>{
    if(db.equals(req.query.email, req.query.password)){
        resp.send(true)
    }else {
        resp.send(false);
    }
});

app.get("/update", (req, resp) =>{
});

app.listen(8080, ()=>
    console.log("works")
);

