const Category = require('../models/category.model');

class CategoryController {
    async index(req, res) {
		try {
            const categories = await Category.find()
            return res.status(200).json(categories);
        } catch (error) {
            return res.status(400).json("erro"+error);
        }
	}

    async insert(req, res) {
		try {
            const name = await Category.findOne({ name: req.body.name })
            if (name) {
                return res.status(400).json({ error: 'Categoria já cadastrado.' });
            }
            const category = await Category.create(req.body);
            if (!category) return res.status(400).json({ error: 'Erro criação categoria.' });

            return res.status(200).json(category);
        } catch (error) {
            return res.status(400).json("erro"+error);
        }
	}

    async update(req, res) {
		try {
            const data = await Category.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!data) return res.status(406).json({ error: 'Erro atualização categoria.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
	}
	
    async delete(req, res) {
        try {
            const data = await Category.findByIdAndRemove(req.params.id);
            if (!data) return res.status(404).json({ error: 'Erro exclusão categoria.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = CategoryController;