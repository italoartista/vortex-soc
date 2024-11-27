const express = require('express')
const router = express.Router()
const { listPlayers, createPlayer } = require('../controllers/playerController')


// router.get('/players/:id', getPlayerById)
router.get('/players', listPlayers)
router.post('/players', createPlayer)
// router.put('/players/:id', updatePlayer)
// router.delete('/players/:id', deletePlayer)

module.exports = router