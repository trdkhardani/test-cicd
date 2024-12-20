const express = require('express');
const app = express();

const PORT = 3010;

app.get('/', (req, res, next) => {
    return res.send("Hello with CI/CD!!!")
});

app.get('/new-ep', (req, res, next) => {
    return res.send("Hello with CI/CD!!!")
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})