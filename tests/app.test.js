const request = require('supertest');
const app = require('../src/app');

describe('GET /:number', () => {
  it('should return "GN" when the input is a multiple of both 3 and 5', async () => {
    const response = await request(app).get('/15');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe('GN');
  });

  it('should return "G" when the input is a multiple of 3', async () => {
    const response = await request(app).get('/9');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe('G');
  });

  it('should return "N" when the input is a multiple of 5', async () => {
    const response = await request(app).get('/10');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe('N');
  });

  it('should return the input number when it is not a multiple of 3 or 5', async () => {
    const response = await request(app).get('/7');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(7);
  });

  it('should return an error for invalid input', async () => {
    const response = await request(app).get('/abc');
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid input. Please provide a valid integer.');
  });
});
