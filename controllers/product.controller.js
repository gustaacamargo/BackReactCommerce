const Product = require('../models/product.model');

class ProductController {
    async index(req, res) {
		try {
            const products = await Product.find().populate('category').populate('owner')
            return res.status(200).json(products);
        } catch (error) {
            return res.status(400).json("erro"+error);
        }
	}

    async show(req, res) {
		try {
            const product = await Product.findOne({ _id: req.params.id })
            if (!product) return res.status(404).json({ error: 'Produto não encontrado.' });

            return res.status(200).json(product);
        } catch (error) {
            return res.status(400).json("erro"+error);
        }
	}

    async insert(req, res) {
		try {
            const product = await Product.create(req.body);
            if (!product) return res.status(400).json({ error: 'Erro criação produto.' });

            return res.status(200).json(product);
        } catch (error) {
            return res.status(400).json("erro"+error);
        }
	}

    async update(req, res) {
		try {
            const data = await Product.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!data) return res.status(406).json({ error: 'Erro atualização produto.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
	}
	
    async delete(req, res) {
        try {
            const data = await Product.findByIdAndRemove(req.params.id);
            if (!data) return res.status(404).json({ error: 'Erro exclusão produto.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = ProductController;