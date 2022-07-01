const logger = require('../config/loggin/config')

async function removeUser (req, res){
    const id = req.body
    res.send('Deleteing')
}

module.exports = removeUser