export default function getStudentsByLocation(arrayStudents, city) {
  return arrayStudents.filter((std) => std.location === city);
}
