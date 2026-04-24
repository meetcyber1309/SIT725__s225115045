const chai = require('chai');
const expect = chai.expect;

const { add } = require('../math');

describe('Add Function Tests', () => {

    // ✅ Valid case
    it('should return 5 for 2 + 3', () => {
        expect(add(2, 3)).to.equal(5);
    });

    // ❌ Invalid case
    it('should throw error for invalid input', () => {
        expect(() => add('a', 3)).to.throw('Invalid input');
    });

    // ⚠️ Edge case
    it('should return 0 for 0 + 0', () => {
        expect(add(0, 0)).to.equal(0);
    });

    // ⚠️ Negative numbers
    it('should return -5 for -2 + -3', () => {
        expect(add(-2, -3)).to.equal(-5);
    });

});