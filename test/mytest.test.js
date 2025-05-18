const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../index');  // Import the app from app.js

describe('GET /', () => {
    it('should return status 200 and message "Hi there"', async () => {
        const response = await request(app).get('/');  // Send GET request to the root

        // Assert the status code and message in the response body
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal('Hi there');
    });
});
