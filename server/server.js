const express = require ('express');
const routes = require('./routes/TasksRoute'); // import the routes
require('env').config({ path: '../.env' }); // Asegúrate de ajustar la ruta adecuada al archivo .env de Vite
const apiKey = process.env.API_KEY; // Reemplaza API_KEY con el nombre de la variable que contiene tu clave de la base de datos


const app = express();

app.use(express.json());

app.use('/', routes); //to use the routes

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)

    //console.log(import.meta.env.VITE_SUPABASE_URL);
    //console.log(process.env.VITE_SUPABASE_ANON_KEY);
    console.log(apiKey);
})



// Ahora puedes usar apiKey en tu lógica del servidor
// Ejemplo:
