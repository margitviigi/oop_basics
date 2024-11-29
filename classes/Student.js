const Person = require('./Person')
class Student extends Person{        
    constructor(name){
        super(name)
        this.id = null
        this.grades = []  
    } 
    setId(id){
        if(this.id === null){
            this.id = id
        } 
    }
    getId(){
        return this.id
    }  
    addGrade(course, grade){
        const newGrade ={
            course: course.name,
            grade: grade
        }        
        this.grades.push(newGrade) 
    } 
    getGrades(){
        return this.grades
    } 
    getAverageGrade(){        
        if(this.grades.length === 0) {
            return -1
        } else {
        // Sum all the grades
        let sum = this.grades.reduce((acc, currentValue) => acc + currentValue.grade, 0);
        // Return the average grade
        return sum / this.grades.length;
        }
            
        } 
    
    descripion(){
        return`Student ${this.name}.  `
    } 
} 
module.exports = Student
