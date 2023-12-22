const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
// API 1 - GET method
app.get('/api1', (req, res) => {
    const str1 = req.query.str1 || '';
    const str2 = req.query.str2 || '';

    const combinedString = str1 + ' ' + str2;

    res.send(combinedString);
});

// API 2 - POST method
app.post('/api2', (req, res) => {
    const num1 = parseFloat(req.body.num1) || 0;
    const num2 = parseFloat(req.body.num2) || 0;
    const num3 = parseFloat(req.body.num3) || 0;

    const result = num1 + num2 + num3;

    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
