const { app } = require('@azure/functions');
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.API_KEY,
});

app.http('gptFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello Ali, ${name}!` };
    }
});
