const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/carrito-compras', (req,res)=>{
    res.sendFile(__dirname + '/views/carrito-compras.html');
});

app.get('/detalle-producto', (req,res)=>{
    res.sendFile(__dirname + '/views/detalle-producto.html');
});

app.get('/registro', (req,res)=>{
    res.sendFile(__dirname + '/views/registro.html');
});
