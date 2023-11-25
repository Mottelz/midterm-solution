const router = require('express').Router();
const reviewController = require('./index');

router.get('/reviews/game/:id', async (req, res) => {
    const id = req.params.id;
    const reviews = await reviewController.getReviewsByGameId(id);
    res.json(reviews);
});

router.get('/reviews/review/:id', async (req, res) => {
    const id = req.params.id;
    const review = await reviewController.getReviewById(id);
    res.json(review);
});

router.get('/reviews/game/:id/rating/:rating', async (req, res) => {
    const id = req.params.id;
    const rating = req.params.rating;
    const reviews = await reviewController.getReviewsByGameIdAndRating(id, rating);
    res.json(reviews);
});

module.exports = router;