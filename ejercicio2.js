const express = require('express');
const axios = require("axios");

const app = express();



app.listen(4004);

app.get('/', (req, res) => {
axios.get("https://www.el-tiempo.net/api/json/v2/provincias/50/municipios/50297")
    .then(response => {
        console.log(response.data);
        let data = response.data;
        res.send(
            `<ul><li>${data.origin.productor} / ${data.municipio.NOMBRE_PROVINCIA}</li>`+
            `<li>${data.fecha}</li>` +
            `<li>Current temp: ${data.temperatura_actual}</li>` +
            `<li>Max temp: ${data.temperaturas.max} / Min temp: ${data.temperaturas.min} </li>` +
        
            `</ul>`);
    })
    .catch(error => {
            console.log(error);
        }
    ) ; 
});