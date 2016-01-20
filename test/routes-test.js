'use strict';

const request = require('supertest');
const expect = require('chai').expect;

const app = require('../src/routes');

const db = require('../src/db/client');

describe('Express Routes', () => {
  describe('To Root path', () => {
    it('Returns a 200 status', (done) => {
      request(app)
        .get('/')
        .expect(200, done);
    });
    it('Returns JSON format', (done) => {
      request(app)
        .get('/')
        .expect('Content-Type', /json/, done);
    });
  });
});
