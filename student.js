class Student{

    constructor(name, surname, yob, grades){
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.grades = grades;
    }

    calculateMean(){
        const grades = this.grades;
        let sum = 0
        for (let i = 0; i < grades.length; i++) {
            const grade = grades[i];
            sum += grade;
        }
        const mean = sum / grades.length;
        return mean;
    }

    toString(){
        let result = '';
        result += `NOME: ${this.name}
COGNOME: ${this.surname}
ETA': ${this.calculateAge()}
MEDIA: ${this.calculateMean()}  `
                   return result;
    }
    //NOME: Davide
    //COGNOME: Consigliere
    //ETA': 34
    //MEDIA: 5.4

    calculateAge(){
        let currentYear = new Date().getFullYear()
       return currentYear - this.yob; 
    }
    //34
}