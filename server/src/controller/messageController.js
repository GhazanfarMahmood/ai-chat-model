const Message = require("../model/Message");

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: 1});

        res.status(200).json(messages);
    } catch (error) {
        console.error("Error fetching messages:", error);

        res.status(500).json({
            message : "Failed to fetch messages",
        });
    }
};

module.exports = {
    getMessages,
}