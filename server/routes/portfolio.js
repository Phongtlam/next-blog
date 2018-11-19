const express = require('express');
const mongoSchema = require('../../database');
const { auth } = require('../middleware');

const router = express.Router();

const findAllPortfolio = res => {
  mongoSchema.Portfolio.find({}, (error, portfolio) => {
    if (error) {
      return res.status(400).json({
        error
      });
    }
    return res.status(200).json({
      portfolioData: portfolio.sort((a, b) => b.order - a.order)
    });
  });
};

router.post('/publish', auth.required, (req, res) => {
  if (req.body === null) {
    return res.status(400).send(
      JSON.stringify({
        error: true,
        message: 'No file in staging'
      })
    );
  }
  const newPortfolio = new mongoSchema.Portfolio(req.body);
  return newPortfolio
    .save()
    .then(item => {
      res.status(200).send(
        JSON.stringify({
          success: true,
          portfolio: item,
          message: 'Successfully publish your new portfolio!'
        })
      );
    })
    .catch(err => {
      res.status(400).send(
        JSON.stringify({
          error: err,
          message: 'Unable to save'
        })
      );
    });
});

router.put('/edit', auth.required, (req, res) => {
  mongoSchema.Portfolio.findById(req.body._id, (error, portfolio) => {
    if (error) {
      res.status(400).send({
        error,
        message: 'This document does not exist'
      });
    } else {
      portfolio.set(req.body);
      portfolio.save((errorSave, updatedPortfolio) => {
        if (errorSave) {
          res.status(400).end({
            error: errorSave,
            message: 'Unable to save'
          });
        }
        res.status(200).send({
          success: true,
          portfolio: updatedPortfolio,
          message: 'Successfully updated document'
        });
      });
    }
  });
});

router.delete('/delete', auth.required, (req, res) => {
  mongoSchema.Portfolio.findById(req.body._id)
    .deleteOne()
    .exec()
    .then(() => {
      findAllPortfolio(res);
    })
    .catch(error => {
      res.status(400).send({
        error,
        message: 'Unable to delete'
      });
    });
});

router.get('/all', (req, res) => {
  findAllPortfolio(res);
});

module.exports = router;
