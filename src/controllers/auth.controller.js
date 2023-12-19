module.exports = {
    login: (req, res) => {
        res.render('auth/login', {
            title: 'Ingresar',
        });
    },
    doLogin: (req, res) => {
        (req, res) => res.send('Esta es la ruta que valida los datos de LOGIN')
    },
    register: (req, res) => {
        res.render('auth/register', {
            title: 'Registro',
        });
    },
    doRegister: (req, res) => {
        (req, res) => res.send('Esta es la ruta para registrar un nuevo usuario')
    },
    logout: (req, res) => {
        (req, res) => res.send('Esta es la ruta para cerrar sesion')
    }
};