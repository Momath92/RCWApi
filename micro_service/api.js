const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/calculate', (req, res) => {
    const product = req.body.product;
    const amount = parseFloat(req.body.amount);

    // Exemple de calcul, ici simplement on passe le montant à Flask
    axios.post('http://localhost:5000/taxes', { product, amount })
        .then(response => {
            res.send(`Le montant total avec taxes est: ${response.data.totalWithTaxes}`);
        })
        .catch(error => {
            res.send('Erreur lors du calcul des taxes');
        });
});

app.listen(3000, () => {
    console.log('API Node.js en écoute sur le port 3000');
});
