const Person = require('./classes/Person')
const Student = require('./classes/Student')
const Course = require('./classes/Course')
const School = require('./classes/School')

const school = new School("Awesome School")
const student1 = new Student("John Smith")
student1.setDateOfBirth(1995)
const student2 = new Student("Mary Lee")
student2.setDateOfBirth(2000)

school.addStudent(student1)
school.addStudent(student2)


//we cannot add one student twice
school.addStudent(student1)

//console.log(school.getStudents().length)  // 2

const course1 = new Course("Math")
const course2 = new Course("Physics")

school.addCourse(course1)
school.addCourse(course2)

console.log(school)

//we cannot add one course twice
school.addCourse(course1)

//console.log(school.getCourses().length) // 2

school.addStudentGrade(student1, course1, 4)
school.addStudentGrade(student1, course2, 5)
school.addStudentGrade(student2, course1, 5)

//console.log(student1)
//console.log(student2)


const student3 = new Student("Cocoo Turner")
student3.setDateOfBirth(2000)

//cannot add grades to the student who is not in the school
school.addStudentGrade(student3, course1, 5)


school.addStudent(student3)
school.addStudentGrade(student3, course1, 3)
school.addStudentGrade(student3, course2, 5)

//console.log(student3)
//console.log(student3.getGrades().length) // 2

//console.log(student3.getGrades())  
//console.log(course1.getGrades())  

//console.log(student1, student1.getAverageGrade())
//console.log(student2, student2.getAverageGrade())
//console.log(student3, student3.getAverageGrade())

//console.log(course1, course1.getAverageGrade())
//console.log(course2, course2.getAverageGrade())


console.log("Students ordered by average grade:")
school.getStudentsOrderedByAverageGrade().forEach((student) => {
    console.log(student.name, student.getAverageGrade())
     })
console.log()
console.log("Course average grades")
school.getCourses().forEach((course) => {
    console.log(course.name, course.getAverageGrade())
}) 

console.log(school.getStudentsOrderedByAverageGrade())
