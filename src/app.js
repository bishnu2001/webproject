const express=require('express');
const app=express();
const port=800;
const path=require('path');

const data=path.join(__dirname,'../public');
// app.set("view engine",'hbs');
app.use(express.static(data));
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/weather',(req,res)=>{
    res.send('weather page')
})
app.get('*',(req,res)=>{
    res.send('error page')
})
app.listen(port,()=>{
    console.log(`server runnning at ${port}`);
})