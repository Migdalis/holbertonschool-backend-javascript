export default function appendToEachArrayValue(array, appendString) {
  const valueList = [];
  for (const value of array) {
    valueList.push(appendString + value);
  }

  return valueList;
}
