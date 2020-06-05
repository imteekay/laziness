import {
  getLastElement,
  getFirstElement,
  getSecondElement,
  excludeLast,
} from '../utils';

describe('getLastElement', () => {
  describe('with 1 element', () => {
    const list = ['one'];

    it('returns the last element', () => {
      expect(getLastElement(list)).toEqual('one');
    });
  });

  describe('with no element', () => {
    const list: string[] = [];

    it('returns undefined', () => {
      expect(getLastElement(list)).toBeUndefined;
    });
  });

  describe('with 5 elements', () => {
    const list = ['one', 'two', 'three', 'four', 'five'];

    it('returns the last element', () => {
      expect(getLastElement(list)).toEqual('five');
    });
  });
});

describe('getFirstElement', () => {
  describe('with 1 element', () => {
    const list = ['one'];

    it('returns the first element', () => {
      expect(getFirstElement(list)).toEqual('one');
    });
  });

  describe('with no element', () => {
    const list: string[] = [];

    it('returns undefined', () => {
      expect(getFirstElement(list)).toBeUndefined;
    });
  });

  describe('with 5 elements', () => {
    const list = ['one', 'two', 'three', 'four', 'five'];

    it('returns the first element', () => {
      expect(getFirstElement(list)).toEqual('one');
    });
  });
});

describe('getSecondElement', () => {
  describe('with 1 element', () => {
    const list = ['one'];

    it('returns undefined', () => {
      expect(getSecondElement(list)).toBeUndefined;
    });
  });

  describe('with no element', () => {
    const list: string[] = [];

    it('returns undefined', () => {
      expect(getSecondElement(list)).toBeUndefined;
    });
  });

  describe('with 5 elements', () => {
    const list = ['one', 'two', 'three', 'four', 'five'];

    it('returns the second element', () => {
      expect(getSecondElement(list)).toEqual('two');
    });
  });
});

describe('excludeLast', () => {
  describe('with 1 element', () => {
    const list = ['one'];

    it('returns an empty list', () => {
      expect(excludeLast(list)).toEqual([]);
    });
  });

  describe('with no element', () => {
    const list: string[] = [];

    it('returns an empty list', () => {
      expect(excludeLast(list)).toEqual([]);
    });
  });

  describe('with 5 elements', () => {
    const list = ['one', 'two', 'three', 'four', 'five'];

    it('returns the first element', () => {
      expect(excludeLast(list)).toEqual(['one', 'two', 'three', 'four']);
    });
  });
});
