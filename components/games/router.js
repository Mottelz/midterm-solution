const router = require('express').Router();
const gameController = require('./index');

router.get('/games/all', async (req, res) => {
    const games = await gameController.getAllGames();
    res.json(games);
});

router.get('/games/game/:id', async (req, res) => {
    const id = req.params.id;
    const game = await gameController.getGameById(id);
    res.json(game);
});

router.get('/games/top', async (req, res) => {
    const game = await gameController.getHighestRatedGame();
    res.json(game);
});

module.exports = router;