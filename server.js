const express=require('express');

const nunjucks=require('nunjucks');


const server=express();

server.use(express.static('public'));

server.set("view engine","html");

nunjucks.configure("views",{
    express: server
})

// ROTAS
server.get("/", function(req, res){
    return res.render('home');
})
server.get("/courses", function(req, res){
    return res.render('courses');
})

//PAGINA DE ERRO
server.use( function(req, res){
    res.status(404).render('not-found')
})


server.listen(5008,function(){
    console.log("listening on");
})