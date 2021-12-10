const { getMenu } = require('../db/dataBase');

module.exports = {
    index: (req, res) => {
        res.render('index', {
            menu: getMenu
        });
    },
    detailMenu: (req, res) => {
        let platoId = getMenu.find(platoId => {
            return platoId.id === +req.params.id
        });

        res.render('detalleMenu', {
            plato: platoId
        });
    }
}