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
    
} 
module.exports = Course