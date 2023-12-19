module.exports = {
    shop: (req, res) => {
        res.render('shop/shop');
    },
    item: (req, res) => {
        res.render('shop/item');
    },
    addItem: (req, res) => {
        (req, res) => res.send('Esta es la vista para agregar un nuevo item')
    },
    cart: (req, res) => {
        res.render('shop/cart');
    },
    addToCart: (req, res) => {
        (req, res) => res.send('Esta es la ruta para agregar un nuevo item al carrito')
    }
};
