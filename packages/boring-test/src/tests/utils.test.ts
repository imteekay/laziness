import {
  getLastElement,
  getFirstElement,
  getSecondElement,
  excludeLast,
} from '../utils';

describe('getLastElement', () => {
  describe('with 1 element', () => {
    const list = [1];

    it('returns the last element', () => {
      expect(getLastElement(list)).toEqual(1);
    });
  });

  describe('with no element', () => {
    const list: number[] = [];

    it('returns undefined', () => {
      expect(getLastElement(list)).toBeUndefined;
    });
  });

  describe('with 5 elements', () => {
    const list = [1, 2, 3, 4, 5];

    it('returns the last element', () => {
      expect(getLastElement(list)).toEqual(5);
    });
  });
});

describe('getFirstElement', () => {
  describe('with 1 element', () => {
    const list = [1];

    it('returns the first element', () => {
      expect(getFirstElement(list)).toEqual(1);
    });
  });

  describe('with no element', () => {
    const list: number[] = [];

    it('returns undefined', () => {
      expect(getFirstElement(list)).toBeUndefined;
    });
  });

  describe('with 5 elements', () => {
    const list = [1, 2, 3, 4, 5];

    it('returns the first element', () => {
      expect(getFirstElement(list)).toEqual(1);
    });
  });
});

describe('getSecondElement', () => {
  describe('with 1 element', () => {
    const list = [1];

    it('returns undefined', () => {
      expect(getSecondElement(list)).toBeUndefined;
    });
  });

  describe('with no element', () => {
    const list: number[] = [];

    it('returns undefined', () => {
      expect(getSecondElement(list)).toBeUndefined;
    });
  });

  describe('with 5 elements', () => {
    const list = [1, 2, 3, 4, 5];

    it('returns the first element', () => {
      expect(getSecondElement(list)).toEqual(2);
    });
  });
});

describe('excludeLast', () => {
  describe('with 1 element', () => {
    const list = [1];

    it('returns an empty list', () => {
      expect(excludeLast(list)).toEqual([]);
    });
  });

  describe('with no element', () => {
    const list: number[] = [];

    it('returns an empty list', () => {
      expect(excludeLast(list)).toEqual([]);
    });
  });

  describe('with 5 elements', () => {
    const list = [1, 2, 3, 4, 5];

    it('returns the first element', () => {
      expect(excludeLast(list)).toEqual([1, 2, 3, 4]);
    });
  });
});
