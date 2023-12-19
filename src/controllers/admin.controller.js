module.exports = {
    admin: (req, res) => {
        res.render('admin/admin');
    },
    createView: (req, res) => {
        res.render('admin/create');
    },
    createItem: (req, res) => {
        (req, res) => res.send('Esta es la ruta para agregar un nuevo item')
    },
    editView: (req, res) => {
        res.render('admin/edit');
    },
    editItem: (req, res) => {
        (req, res) => res.send('Esta es la ruta para impactar la edicion de un item')
    },
    deleteItem: (req, res) => {
        (req, res) => res.send('Esta es la ruta para eliminar un item')
    }
};
