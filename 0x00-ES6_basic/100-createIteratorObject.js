export default function createIteratorObject(report) {
  const emplyList = new Set();

  for (const emply of Object.values(report.allEmployees)) {
    for (const name of emply) {
      emplyList.add(name);
    }
  }
  return emplyList;
}
