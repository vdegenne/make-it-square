import * as chai from 'chai';
import {makeItSquare} from '../make-it-square';

const expect = chai.expect;

suite('Make it Square', () => {
  const o: any = {};
  o.o = o;

  test('can\'t stringify a circular object', (done) => {
    try {
      JSON.stringify(o);
      done(new Error('what'));
    } catch (err) {
      done();
    }
  });

  test('can stringify a square', (done) => {
    const squared: any = makeItSquare(o);
    try {
      JSON.stringify(squared);
      done();
    } catch (err) {
      done(new Error('this shouldn\'t happen'));
    }
  });
});
