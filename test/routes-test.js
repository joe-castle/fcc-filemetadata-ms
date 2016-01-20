'use strict';

const request = require('supertest');
const expect = require('chai').expect;

const app = require('../src/routes');

describe('Express Routes', () => {
  describe('To Root path', () => {
    it('Returns a 200 status', (done) => {
      request(app)
        .get('/')
        .expect(200, done);
    });
    it('Returns HTML format', (done) => {
      request(app)
        .get('/')
        .expect('Content-Type', /html/, done);
    });
  });
});
