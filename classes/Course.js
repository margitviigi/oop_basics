class Course{
    constructor(name){
        this.name = name
        this.students = []
        this.grades = []  
    } 
    getGrades(){
        return this.grades
    } 
    addGrade(course, grade){
        const newGrade ={
            course: course,
            grade: grade
        }
        this.grades.push(newGrade) 
    } 
} 
module.exports = Course