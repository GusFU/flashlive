const express = require("express");
const router = require("./routes/routes");
const app = express();
const http = require("http").createServer(app);
const socketio = require("socket.io")(http, {
    cors: "*"
});

require("./database/mongo");

app.use(express.json());
 
app.use("/", router);
socketio.on("connection", socket => {
socket.on("conectado", () =>{
    console.log("usuario conectado")
})

});
const port = 5000;
http.listen(port, () => console.log(`Servidor escuchando por el puerto ${port}!`));