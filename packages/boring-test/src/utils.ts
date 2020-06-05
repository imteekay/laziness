export const getLastIndex = (list: any[]) => list.length - 1;

export const getLastElement = (list: any[]) => {
  const lastIndex = getLastIndex(list);
  return list[lastIndex];
};

export const getFirstElement = (list: any[]) => list[0];
export const getSecondElement = (list: any[]) => list[1];

export const excludeLast = (list: any[]) => {
  const lastIndex = getLastIndex(list);
  return [...list.slice(0, lastIndex)];
};
