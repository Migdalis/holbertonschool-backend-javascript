export default function getListStudentIds(arrayStudents) {
  if (arrayStudents instanceof Array) {
    return arrayStudents.map((std) => std.id);
  }
  return [];
}
