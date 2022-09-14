export default function getStudentIdsSum(arrayStudents) {
  return arrayStudents.reduce((sum, std) => sum + std.id, 0);
}
