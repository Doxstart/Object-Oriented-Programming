const student1 = new Student('Davide', 'Consigliere', 1989, [4, 6, 7, 4, 6])
const student2 = new Student('Francesco', 'Badile', 1993, [5, 8, 6, 7, 10])
const student3 = new Student('Valentina', 'Cherubini', 2001, [8, 7, 10, 9, 8])
const teacher = new Teacher('Andrea', 'Asioli', 1978, [student1, student2, student3])

console.log(teacher);
console.log(student2.calculateMean());

//FUNZIONE PER CALCOLARE LA MEDIA

// function calculateMeanOfStudent(student){ //Mean è media, quindi la funzione serve per calcolare la media
//     const grades = student.grades;
//     let sum = 0
//     for (let i = 0; i < grades.length; i++) {
//         const grade = grades[i];
//         sum += grade;
//     }
//     const mean = sum / grades.length;
//     return mean;
// }

//console.log('MEAN: ', calculateMean());

// function findBestStudentOfTeacher(teacher){
//     const students = teacher.students;
//     let bestStudent = students[0]
//     for (let i = 1; i < students.length; i++) {
//         const actualStudent = students[i];
//         const bestMean = bestStudent.calculateMean();
//         const actualMean = actualStudent.calculateMean();
//         if (actualMean > bestMean) {
//             bestStudent = actualStudent;
//         }
//     }
//     return bestStudent;
// }

console.log('Best student of teacher: ', teacher.findBestStudent());

console.log(student1.calculateAge());
console.log(student2.calculateAge());
console.log(student3.calculateAge());
console.log(teacher.calculateAge());

console.log(student1.toString());
console.log(student2.toString());
console.log(student3.toString());
console.log(teacher.toString());
