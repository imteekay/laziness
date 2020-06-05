export const getLastIndex = (list: number[]) => list.length - 1;

export const getLastElement = (list: number[]) => {
  const lastIndex = getLastIndex(list);
  return list[lastIndex];
};

export const getFirstElement = (list: number[]) => list[0];
export const getSecondElement = (list: number[]) => list[1];

export const excludeLast = (list: number[]) => {
  const lastIndex = getLastIndex(list);
  return [...list.slice(0, lastIndex)];
};
