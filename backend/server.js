import express from 'express';
import { data } from './data.js';
const app = express();

app.get('/api/products/', (req, res) => {
    res.send(data.products)
});

app.get('/api/products/title/:title', (req, res) => {
    const product = data.products.find(x => x.title === req.params.title)
    if (product) {
        res.send(product)
    }
    else {
        res.status(404).send({ message: 'never got product' })
    }
});

const port = process.env.PORT || 2552;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})