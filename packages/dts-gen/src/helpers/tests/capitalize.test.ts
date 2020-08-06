import { capitalize } from '../capitalize';

describe('capitalize', () => {
  describe('for a common string', () => {
    it('returns a capitalized string', () => {
      expect(capitalize('string')).toEqual('String');
    });
  });

  describe('for a capitalized string', () => {
    it('returns a capitalized string', () => {
      expect(capitalize('String')).toEqual('String');
    });
  });

  describe('for an empty', () => {
    it('returns an empty string', () => {
      expect(capitalize('')).toEqual('');
    });
  });

  describe('for an uppercased string', () => {
    it('returns an empty string', () => {
      expect(capitalize('STRING')).toEqual('String');
    });
  });

  describe('for a one letter string', () => {
    it('returns the uppercased letter', () => {
      expect(capitalize('S')).toEqual('S');
    });
  });
});
