import assert from 'assert';
import {calculateAge} from './utils/common';

beforeAll(() => {
//  init stuff here
});

afterAll(() => {
//  clean up stuff here
});

describe('utils/common', () => {
  describe('calculateAge', () => {
    it('should return correct result when year of birth is current year', () => {
      expect(calculateAge(new Date().getFullYear())).toBe(1);
    });
    it('should return correct result when year of birth is a past year', () => {
      expect(calculateAge(new Date().getFullYear() - 20)).toBe(21);
    });
    it('should return 0 when year of birth is a future year', () => {
      expect(calculateAge(new Date().getFullYear() + 1)).toBe(0);
    });
    it('should return 0 when year of birth is null', () => {
      expect(calculateAge(null)).toBe(0);
    });
    it('should return 0 when year of birth is undefined', () => {
      expect(calculateAge()).toBe(0);
    });
  });
});
