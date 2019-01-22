const { User } = require('./../../models');

module.exports = {

    async showAll(req, res) {
        const user = await User.findAll();

        return res.json(user);
    },

    async create(req, res) {

        try {
            const user = await User.create(req.body);

            return res.status(201).json({
                error: false,
                data: user,
                message: 'New User has been created.'
            });

        } catch (error) {

            return res.json({
                error: true, 
                data: [],
                error: error
            });
        }
    },

    async update(req, res) {

        const user = await User.update(req.body, { where: { id: req.params.id } });

        return res.json(user);
    },

    async showId(req, res) {
        const user = await User.find({ where: { id: req.params.id } });

        return res.json(user);
    },

    async delete(req, res) {
        const user = await User.destroy({ where: {id: req.params.id } });

        return res.json(user);
    }

}