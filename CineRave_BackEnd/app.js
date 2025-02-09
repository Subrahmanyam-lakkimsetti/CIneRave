require('dotenv').config();
const express = require('express');
require('./config/dbconfig');
const cors = require('cors');

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.use(express.json());

const Movie = require('./models/modelScheema');

app.get('/', (req, res) => {
  res.send('<h1>Welcome to home page</h1>');
});

app.get('/movies', async (req, res) => {
  try {
    const data = await Movie.find();
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    console.log('Error in the GET: ', error.message);
    res.status(500).json({
      status: 'Failure',
      message: 'Internal server error',
    });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Movie.findById(id);
    console.log(data);

    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    console.log('error in get single: ', error.message);
    res.status(500).json({
      status: 'failure',
      message: 'Internal server error',
    });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const reqData = req.body;
    const data = await Movie.create(reqData);
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    console.log('Error in post: ', error.message);
    res.status(500).json({
      status: 'Failure',
      message: 'Error in internal servver error',
    });
  }
});

app.patch('/movies/:MovieId', async (req, res) => {
  try {
    const { MovieId } = req.params;
    const { userName, comment, rating, ...updateData } = req.body;
    const newReview = { userName, comment, rating };

    let updateQuery = {};
    if (newReview) {
      updateQuery.$push = { reviews: newReview };
    }

    if (Object.keys(updateData).length > 0) {
      updateQuery.$set = updateData;
    }
    console.log(updateQuery);

    // const { _id, ...reqData } = req.body;
    const data = await Movie.findByIdAndUpdate(MovieId, updateQuery, {
      returnDocument: 'after',
      runValidators: true,
    });
    res.status(200).json({
      status: 'sucess',
      data,
    });
  } catch (error) {
    console.log('Error in Patch', error.message);
    res.status(500).json({
      status: 'Failure',
      message: 'Internal server error',
    });
  }
});

app.delete('/movies/:MovieId', async (req, res) => {
  try {
    const { MovieId } = req.params;
    const deleteddata = await Movie.findByIdAndDelete(MovieId);
    res.status(201).json({
      status: 'success',
      deleteddata,
    });
  } catch (error) {
    console.log('Error in delete: ', error.message);
    res.status(500).json({
      status: 'failure',
      message: 'internal server error',
    });
  }
});

app.delete('/movies/:MovieId/reviews/:ReviewId', async (req, res) => {
  try {
    const { MovieId, ReviewId } = req.params;

    const data = await Movie.findByIdAndUpdate(MovieId, {
      $pull: { reviews: { _id: ReviewId } },
    });
    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    console.log('error in Delete Reviews: ', error);
    res.status(500).json({
      status: 'Failure',
      message: 'internal server error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
