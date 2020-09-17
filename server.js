const express=require('express');//import
const bodyParser=require('body-parser');//import
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response){ 
    //console.log(__dirname);//dirname polnij put k failu
    response.sendFile(__dirname+'/index.html');//fail otpravlat
});

app.post('/',function(request,response){
    console.log(request.body);//zapros body
    let num1=Number(request.body.num1);
    let num2=Number(request.body.num2);
    let result=num1+num2;
    console.log(`${num1}+${num2}=${result}`);
    response.send(`${num1}+${num2}=${result}`);//result 10

    
});

app.listen(3001, function(){//nomer porta 3000, error funkzija
    console.log('Server is running on Port 3001');//call back funktsija
    
});