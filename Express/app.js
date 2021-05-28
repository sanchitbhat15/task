const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log("In the mddleware");
    next(); //allows the req to continue to the next middleware in line
});

app.use((req,res,next) => {
    console.log("In another mddleware");
    res.send('<h1>Hello from express!</h1>');
});

app.listen(3000);
