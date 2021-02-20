const User = require('../models/user.model');

class UserController {
    async index(req, res) {
		try {
            const users = await User.find()
            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).json("erro"+error);
        }
	}

    async show(req, res) {
		try {
            const user = await User.findOne({ _id: req.params.id })
            if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });

            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json("erro"+error);
        }
	}

    async insert(req, res) {
		try {
            const email = await User.findOne({ email: req.body.email })
            if (email) {
                return res.status(400).json({ error: 'Email já cadastrado.' });
            }
            const user = await User.create(req.body);
            if (!user) return res.status(400).json({ error: 'Erro criação usuário.' });

            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json("erro"+error);
        }
	}

    async update(req, res) {
		try {
            const data = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (!data) return res.status(406).json({ error: 'Erro atualização usuário.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
	}
	
    async delete(req, res) {
        try {
            const data = await User.findByIdAndRemove(req.params.id);
            if (!data) return res.status(404).json({ error: 'Erro exclusão usuário.' });
            return res.status(200).json(data);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = UserController;