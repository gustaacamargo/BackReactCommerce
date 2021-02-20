const User = require('../models/user.model');

class UserController {
    async insert(req, res) {
		try {
            const email = await User.findOne({ email: req.body.email })
            if (email) {
                res.status(400).json({ error: 'Email já cadastrado.' });
            }
            const user = await User.create(req.body);
            if (!user) return res.status(400).json({ error: 'Erro criação usuário.' });

            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json("erro"+error);
        }
	}

	async user_test(req, res) {
		res.send("Teste usuário!!!");
	}
}

module.exports = UserController;