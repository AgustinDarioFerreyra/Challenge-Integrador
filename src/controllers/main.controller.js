module.exports = {
    home: (req, res) => {
        res.render('index', {
            title: 'Home',
        });
    },
    contact: (req, res) => res.send('Esta es la vista de Contact'),
    about: (req, res) => res.send('Esta es la vista de About'),
    faqs: (req, res) => res.send('Esta es la vista de Preguntas Frecuentes'),
};
