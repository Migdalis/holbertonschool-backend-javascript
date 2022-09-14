import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(arrayStudents, city, newGrades) {
  const studentsCity = getStudentsByLocation(arrayStudents, city);

  return studentsCity.map((std) => {
    let grade = newGrades.filter((element) => element.studentId === std.id)
      .map((g) => g.grade)[0];
    if (grade) {
      return { ...std, grade };
    }
    grade = 'N/A';
    return { ...std, grade };
  });
}
