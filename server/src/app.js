require("dotenv").config();

const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server, {
    cors : {
        origin : "*",
    },
});

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("API is running successfully!");
});

io.on("connection", (socket) => {
    console.log("a user connected:", socket.id);

    socket.on("sendMessage", (message) => {
        console.log("Message received:", message);

        socket.emit("receiveMessage", message);
    });

    socket.on("disconnect", () => {
        console.log("a user disconnected:", socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
});