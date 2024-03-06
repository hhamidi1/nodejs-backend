const express = require('express');
const {
  getBanks,
  getBank,
  createBank,
  updateBank,
  deleteBank,
} = require('../controllers/banks');
const router = express.Router();

router.route('/').get(getBanks).post(createBank);

router.route('/:id').get(getBank).put(updateBank).delete(deleteBank);

module.exports = router;
