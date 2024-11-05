export const isNotNullAndEmpty = (string: String) => {
  if (string === null) return false;
  if (string.length <= 0) return false;
  else return true;
};

export const isArrayNotNullAndEmpty = (array: Array<any>) => {
  if (array === null) return false;
  if (array.length === 0) return false;
  else return true;
};
