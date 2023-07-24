const catchAsync = require('../utils/catchAsync');
const { mainService } = require('../services');

const getLetter = catchAsync(async (req, res) => {
  const result = await mainService.chooseLetter(req.params.number);
  res.json({ success: true, result });
});

module.exports = {
  getLetter
};