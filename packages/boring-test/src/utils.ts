export const getLastIndex = (list: string[]): number => list.length - 1;

export const getLastElement = (list: string[]): string => {
  const lastIndex: number = getLastIndex(list);
  return list[lastIndex];
};

export const getFirstElement = (list: string[]): string => list[0];
export const getSecondElement = (list: string[]): string => list[1];

export const excludeLast = (list: string[]): string[] => {
  const lastIndex = getLastIndex(list);
  return [...list.slice(0, lastIndex)];
};
