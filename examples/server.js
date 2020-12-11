const express = require('express');
const { searchByCpf } = require('../src/ssw');

const app = express();


app.get('/cpf/:cpf', (req, res) => {
    searchByCpf(req.params.cpf.toString(), res);
});

app.listen(3000, () => {
    console.log("Server's up!");
})