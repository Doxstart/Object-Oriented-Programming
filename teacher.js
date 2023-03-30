class Teacher{

    constructor(name, surname, yob, students){
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.students = students;
    }

    findBestStudent(){
        const students = this.students;
        let bestStudent = students[0]
        for (let i = 1; i < students.length; i++) {
            const actualStudent = students[i];
            const bestMean = bestStudent.calculateMean();
            const actualMean = actualStudent.calculateMean();
            if (actualMean > bestMean) {
                bestStudent = actualStudent;
            }
        }
        return bestStudent;
    }

    toString(){
        let studente = this.findBestStudent();
        let result = '';
        result += `NOME: ${this.name}
COGNOME: ${this.surname}
ETA': ${this.calculateAge()}
MIGLIOR STUDENTE: ${studente.name} ${studente.surname} `
                   return result;
    }
    //NOME: Andrea
    //COGNOME: Asioli
    //ETA': 45
    //MIGLIOR STUDENTE: Valentina Cherubini

    calculateAge(){ //Trovare la età attuale del teacher
       let currentYear = new Date().getFullYear()
       return currentYear - this.yob; 
    }
    //45


}