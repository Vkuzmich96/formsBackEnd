const express = require('express');

const service = require('../service');
const app = express();


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
});


app.get("/registration", (req,resp) => {
    if(service.put(req.query.name, req.query.email, req.query.password, null, null)){
        resp.send("true");
    }else {
        resp.send('');
    }
});

app.get("/enter", (req,resp) =>{
    if(service.equals(req.query.email, req.query.password)){
        resp.send("true")
    }else {
        resp.send('');
    }
});

app.get("/update", (req, resp) =>{
    service.update(req.query.id, req.query.number, req.query.address);
    resp.send("true")
});

app.listen(8080, ()=>
    console.log("works")
);

