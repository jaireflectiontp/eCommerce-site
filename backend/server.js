import express from 'express';
import { data } from './data.js';
import cors from 'cors'
const app = express();

app.use(cors({
    origin: 'https://dainty-zabaione-f61962.netlify.app',
}));



app.get('/api/products/', (req, res) => {
    res.send(data.products)
});

app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.products.find(x => x.slug === req.params.slug)
    if (product) {
        res.send(product)
    }
    else {
        res.status(404).send({ message: 'never got product' })
    }
});
app.get('/api/products/:query', (req, res) => {
    const searchQuery = req.params.query;
    const searchResults = data.products.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
    );

    if (searchResults.length > 0) {
        res.send(searchResults);
    } else {
        res.status(404).send({ message: 'No products found matching the search query' });
    }
});
const port = process.env.PORT || 2552;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})