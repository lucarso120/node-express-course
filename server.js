const express = require('express');
const app = express();


//server is now listening for requests made on localhost:8000

// so now lets return some mock data

const mockUserData = [{name:'Mark'}, {name:'Jill'}]

app.get('/users', function(req,res){
    res.json({success: true, message: 'succsessfully got users. Nice!', users: mockUserData})
})

app.get('/users/:id', function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        users: req.params.id
    })
})


app.listen(8000,function(){
    console.log("server is listening")
})