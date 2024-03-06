const Banks = require('../model/Banks');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Get all Banks
// @route   GET /api/v1/banks
// @access  Public
exports.getBanks = asyncHandler(async (req, res, next) => {
  const banks = await Banks.find();

  res.status(200).json({
    success: true,
    data: banks,
    count: banks.length,
  });
});

// @desc    Get single Banks
// @route   GET /api/v1/banks/:id
// @access  Public
exports.getBank = asyncHandler(async (req, res, next) => {
  const bank = await Banks.findById(req.params.id);

  if (!bank) {
    return next(
      new ErrorResponse(`Banks not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: bank,
  });
});

// @desc    Create new Banks
// @route   POST /api/v1/banks
// @access  Private
exports.createBank = asyncHandler(async (req, res, next) => {
  const banks = await Banks.create(req.body);

  res.status(201).json({
    success: true,
    data: banks,
  });
});

// @desc    Create new Banks
// @route   PUT /api/v1/banks
// @access  Private
exports.updateBank = asyncHandler(async (req, res, next) => {
  const data = req.body;
  Object.keys(data).forEach((v) => data[v] == '' && delete data[v]);

  const bank = await Banks.findByIdAndUpdate(req.params.id, data, {
    new: true,
    runValidators: true,
  });

  if (!bank) {
    return next(
      new ErrorResponse(`Banks not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: bank,
  });
});

// @desc    Delete new Banks
// @route   DELETE /api/v1/banks/:id
// @access  Private
exports.deleteBank = asyncHandler(async (req, res, next) => {
  const bank = await Banks.findByIdAndDelete(req.params.id);

  if (!bank) {
    return next(
      new ErrorResponse(`Banks not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: {},
  });
});
