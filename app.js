require('dotenv').config()
const express = require('express') //importar el paquete express
const app = express()
const port = 4000 //Definir el puerto

app.use(express.static('public')); //establecer el directorio en que se escuentra el archivo html

app.get('/', (req, res)=>{
    res.send('Hola mundo')
})

app.get('/registrarPedido',(req,res)=>{
    res.sendFile(__dirname + '/public/views/registrarPedido.html')
})

app.get('/Contacto', (req,res)=>{
    res.send('Contacto')
})

app.get('*', (req,res)=>{
    //res.send('Pagina no encontrada')
    res.sendFile(__dirname + '/public/404.html'); //llamar a la pagina
})

app.listen(port,() => {
    console.log(`Escuchando el puerto ${port}`)
})