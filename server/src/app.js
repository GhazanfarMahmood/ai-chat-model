require("dotenv").config();

const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const connectDB = require("./config/db");
const Message = require("./model/Message");
const messageRoutes = require("./routes/messageRoutes")
const cors = require('cors');

const {setupSocket} = require("./sockets/socket.js");

const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server, {
    cors : {
        origin : "http://localhost:3000",
    },
});

app.use(cors({
    origin : "http://localhost:3000",
}));

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("API is running successfully!");
});

app.use("/api/messages", messageRoutes);

setupSocket(io);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
});
