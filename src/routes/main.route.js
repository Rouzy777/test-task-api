const express = require('express');
const { mainController } = require('../controllers');

const router = express.Router();

router
  .route('/:number')
  .get(mainController.getLetter);

module.exports = router;

/**
 * @swagger
 * /{number}:
 *   get:
 *     summary: Get the correct letter based on the input number
 *     description: Return a letter or the input number depending on its multiples.
 *     tags: [Main functionality]
 *     parameters:
 *       - name: number
 *         in: path
 *         description: The input number.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response. The result will be a letter (G, N, or GN) or the input number.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string
 *                   description: The letter (G, N, or GN) or the input number.
 *       400:
 *         description: Bad Request. Invalid input provided.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: The error message describing the issue.
 *             example:
 *               error: Invalid input. Please provide a valid integer.
 */