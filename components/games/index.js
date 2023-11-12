const games = require('./data');

// get all games
function getAllGames() {
    return games;
};

// get game by id
function getGameById(id) {
    return games[id];
};

// get highest rated game
async function getHighestRatedGame() {
    const topRatedGame = await games.sort((a, b) => b.rating - a.rating)[0];
    return topRatedGame;
};

module.exports = {
    getAllGames,
    getGameById,
    getHighestRatedGame
};