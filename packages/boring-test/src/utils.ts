export const getLastIndex = (list) => list.length - 1;

export const getLastElement = (list) => {
  const lastIndex = getLastIndex(list);
  return list[lastIndex];
};

export const getFirstElement = (list) => list[0];
export const getSecondElement = (list) => list[1];

export const excludeLast = (list) => {
  const lastIndex = getLastIndex(list);
  return [...list.slice(0, lastIndex)];
};
