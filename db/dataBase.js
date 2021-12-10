let fs = require('fs');

module.exports = {
    getMenu: JSON.parse(fs.readFileSync('./db/menu.json', 'utf-8'))
}