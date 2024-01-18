const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 2552;
const productsData = JSON.parse(fs.readFileSync(path.join(__dirname, "productsData.json")));

app.get('/api/products/', (req, res) => {
    res.status(200).json({
        status: "success",
        productsData
    })
});

app.get('/api/products/slug/:slug', (req, res) => {
    const product = productsData.products.find(item => item.slug === req.params.slug)
    if (product) {
        res.send(product)
    }
    else {
        res.status(404).send({ message: 'Product Not Found' })
    }
});

app.get('/api/products/:query', (req, res) => {
    const searchQuery = req.params.query;
    const searchResults = productsData.products.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
    );
    console.log(searchResults);
    if (searchResults.length > 0) {
        res.send(searchResults);
    } else {
        res.status(404).send({ message: 'No Product Forund In Search' });
    }
});

app.listen(port, () => {
    console.log(`Server is runing at http://localhost:${port}`)
});