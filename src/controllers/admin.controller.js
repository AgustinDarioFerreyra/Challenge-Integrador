const { getAll, getOne } = require('../models/product.model');

module.exports = {
    admin: async (req, res) => {

        const data = await getAll();

        res.render('admin/admin', {
            title: 'Admin',
            data
        });
    },
    createView: (req, res) => {
        res.render('admin/create', {
            title: 'Nuevo Item',
        });
    },
    createItem: (req, res) => {
        (req, res) => res.send('Esta es la ruta para agregar un nuevo item')
    },
    editView: async (req, res) => {

        const { id } = req.params;
        const [product] = await getOne(id);
        res.render('admin/edit', {
            title: 'Editar Item',
            product
        });
    },
    editItem: (req, res) => {
        (req, res) => res.send('Esta es la ruta para impactar la edicion de un item')
    },
    deleteItem: (req, res) => {
        (req, res) => res.send('Esta es la ruta para eliminar un item')
    }
};
