const { Products } = require('./../../models');

module.exports = {

    async showAll(req, res) {
        try {
            const products = await Products.findAll();

            return res.json({
                response: 'Success',
                data: products
            });

        } catch(err) {

            return res.json({
                response: 'Error',
                data:[],
                error: err
            });
        }
    },

    async register(req, res) {
        try {
            const products = await Products.create(req.body);

            return res.json({
                response: 'Success',
                data: products
            });

        } catch(err) {

            return res.json({
                response: 'Error',
                data: [],
                error: err
            });
        }
    },

    async showId(req, res) {
        try {
            const products = await Products.find({ where: { id: req.params.id } });

            return res.json({
                response: 'Success',
                data: products
            });

        } catch(err) {
            return res.json({
                response: 'Error',
                data: [],
                error: err
            });
        }
    },

    async update(req, res) {
        try {
            const products = await Products.update(req.body, { where: { id: req.params.id } });

            return res.json({
                response: 'Success',
                data: products
            });

        } catch(err) {
            return res.json({
                response: 'Error',
                data: [],
                error: err
            });
        }
    },

    async delete(req, res) {
        try {
            const products = await Products.destroy({ where: { id: req.params.id } });

            return res.json({
                response: 'Success',
                data: products
            });

        } catch(err) {
            return res.json({
                response: 'Error',
                data: [],
                error: err
            });
        }
    }

}