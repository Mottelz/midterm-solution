const reviews = require('./data');

// get reviews by game id
async function getReviewsByGameId(id) {
    return await reviews.filter(review => review.gameId === id);
};

// get review by id
function getReviewById(id) {
    return reviews[id];
}

// get reviews by game id and rating
async function getReviewsByGameIdAndRating(id, rating) {
    return await reviews.filter(review => review.gameId === id && Math.floor(review.rating) === rating);
}

module.exports = {
    getReviewsByGameId,
    getReviewById,
    getReviewsByGameIdAndRating
};