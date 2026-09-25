const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.TOKEN_HARBOR_API_KEY,
    baseURL : "https://tokenharbor.ai/v1",
});

