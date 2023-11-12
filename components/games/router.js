const router = require('express').Router();
const GameController = require('./index');

router.get('/games/all', async (req, res) => {
    const games = await GameController.getAllGames();
    res.json(games);
});

router.get('/games/game/:id', async (req, res) => {
    const id = req.params.id;
    const game = await GameController.getGameById(id);
    res.json(game);
});

router.get('/games/top', async (req, res) => {
    const game = await GameController.getHighestRatedGame();
    res.json(game);
});

module.exports = router;