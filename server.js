import express from 'express';
import data from './data.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get('/api/product/:id', (req, res) => {
    const product = data.products.find(product => product.id === parseInt(req.params.id));
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found'});
    }
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at http://localhost:${port}`));