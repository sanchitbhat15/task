const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use((res,req,next)=>{
    console.log("this always runs");
    next();
})
app.use('/add-product',(req,res,next) => {
    console.log("In another mddleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="Size"><button type= "submit">Add product</button></form>');
   
});

app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
});

app.use('/',(req,res,next) => {
    
    res.send('<h1>Hello from express!</h1>');
   
});

app.listen(3000);
