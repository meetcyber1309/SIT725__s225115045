const chai = require('chai');

const expect = chai.expect;

const { add, divide } = require('../calculator');

describe('Calculator Function Tests', () => {

    it('should add two numbers correctly', () => {

        const result = add(2, 3);

        expect(result).to.equal(5);
    });

    it('should divide two numbers correctly', () => {

        const result = divide(10, 2);

        expect(result).to.equal(5);
    });

    it('should throw error when dividing by zero', () => {

        expect(() => divide(10, 0)).to.throw('Cannot divide by zero');
    });

});