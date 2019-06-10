const { validateName } = require('../src/libs/util');

describe('validates string to void of characters', () => {
    it('validateName false case', () => {
        expect(validateName('abc_123@#$')).toBeFalsy();
    });

    it('validateName true case', () => {
        expect(validateName('abcd_123')).toBeTruthy();
    });
});