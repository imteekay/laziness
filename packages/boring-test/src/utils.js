const getLastIndex = list => list.length - 1;

const getLastElement = list => {
  const lastIndex = getLastIndex(list);
  return list[lastIndex];
};

const getFirstElement = list => list[0];
const getSecondElement = list => list[1];

const excludeLast = list => {
  const lastIndex = getLastIndex(list);
  return [...list.slice(0, lastIndex)];
};

export { getLastElement, getFirstElement, getSecondElement, excludeLast };
