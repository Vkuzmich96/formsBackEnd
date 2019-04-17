const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
});

app.get("/registration", (req,resp) =>{
    console.log('registration ' + req.query.email + ' '+ req.query.name +' '+ req.query.password);
    resp.send("1");
});

app.get("/enter", (req,resp) =>{
    console.log('enter ' + req.query.email + ' ' + req.query.password);
    resp.send("2");
});

app.listen(8080, ()=>
    console.log("works")
);

