//An a express server to connect OpenaAI
const OpenaAI = require('openai');
const { Configuration, OpenAIApi } = OpenaAI;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-Ocpm89EaNSJCFSEEKhvWpfqc",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());
app.post('/', async (req, res) => {
    const { prompt } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        max_tokens: 512,
        temperature: 1,
    });
    console.log(response.data);
    if (response.data.choices[0].text) {
        res.json({message: response.data.choices[0].text})
    }
});
app.listen(port, () => console.log('Server running on port: ', port));