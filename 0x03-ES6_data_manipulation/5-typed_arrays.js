export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const intView = new DataView(buffer, 0);

  intView.setInt8(position, value);
  return intView;
}
