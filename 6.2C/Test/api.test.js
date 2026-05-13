const request = require('supertest');
const chai = require('chai');

const expect = chai.expect;

const app = require('../app');

describe('API Endpoint Tests', () => {

    it('should return Hello World message', async () => {

        const res = await request(app).get('/api/message');

        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Hello World');
    });

    it('should return 404 for invalid route', async () => {

        const res = await request(app).get('/wrongroute');

        expect(res.status).to.equal(404);
    });

});