const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FurmatFullname', () => {
    it('should return an error if fullName is null', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname()).to.equal('Error');
        expect(formatFullname(null)).to.equal('Error');
    });
    it('should return an error if fullName is not a string', () => {
        expect(formatFullname(20)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function () {})).to.equal('Error');
    });
    it('should return good format text if proper arg', () => {
        expect(formatFullname('john doe')).to.equal('John Doe');
        expect(formatFullname('joHn dOe')).to.equal('John Doe');
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    });
    it('should return an error if firstName or lastName are missing', () => {
        expect(formatFullname('john')).to.equal('Error');
    });
    it('should return an error if fullName contains too many words', () => {
        expect(formatFullname('john doe smith')).to.equal('Error');
        expect(formatFullname('john doe smith amanda')).to.equal('Error');
    });
});