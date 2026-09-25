const Message = require("../model/Message");

const activeConnections = {
customer: null,
support: null,
};

const setupSocket = (io) => {
io.on("connection", (socket) => {
console.log("New connection:", socket.id);

    let assignedRole = null;

    // Assign role automatically
    if (!activeConnections.customer) {
        assignedRole = "customer";
    } else if (!activeConnections.support) {
        assignedRole = "support";
    } else {
        socket.emit(
            "connectionRejected",
            "Both customer and support are already connected."
        );

        socket.disconnect();
        return;
    }

    // Store active connection
    activeConnections[assignedRole] = socket.id;

    // Store role on socket
    socket.role = assignedRole;

    console.log(
        `${assignedRole} connected: ${socket.id}`
    );

    // Tell client its assigned role
    socket.emit("roleAssigned", {
        role: assignedRole,
    });

    socket.on("typing", () => {
        if(!socket.role) {
            return ;
        }

        socket.broadcast.emit("userTyping", {
            role: socket.role,
        });
    });

    socket.on("stopTyping", () => {
        if(!socket.role) {
            return;
        }

        socket.broadcast.emit("userStoppedTyping", {
            role : socket.role,
        });
    });

    // Send message
    socket.on("sendMessage", async (messageData) => {
        try {
            if (!socket.role) {
                console.log(
                    "Socket has no role:",
                    socket.id
                );

                return;
            }

            if (
                !messageData ||
                !messageData.text ||
                !messageData.text.trim()
            ) {
                return;
            }

            const newMessage = new Message({
                text: messageData.text.trim(),
                sender: socket.role,
            });

            const savedMessage = await newMessage.save();

            console.log(
                "Message saved:",
                savedMessage
            );

            socket.broadcast.emit(
                "userStoppedTyping",
                {
                    role : socket.role,
                }
            );

            // IMPORTANT:
            // Emit the saved MongoDB document
            io.emit(
                "receiveMessage",
                savedMessage
            );

        } catch (error) {
            console.error(
                "Error sending message:",
                error
            );
        }
    });

    socket.on("disconnect", () => {
        console.log(
            `${socket.role} disconnected:`,
            socket.id
        );

        if(socket.role) {
            socket.broadcast.emit(
                "userStoppedTyping",
                {
                    role : socket.role,
                }
            );
        }

        if (
            socket.role &&
            activeConnections[socket.role] === socket.id
        ) {
            activeConnections[socket.role] = null;

            console.log(
                `${socket.role} slot is now available`
            );
        }
    });
});
};

module.exports = {
setupSocket,
};
