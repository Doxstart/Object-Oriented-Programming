class Teacher extends Person{

    constructor(name, surname, yob, students){
        super(name, surname, yob);
        this.students = students; //-------->underscore è una convenzione che serve per avvisare che è meglio non cambiare la variabile (_yob)
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

//     toString(){ //Funzione standard per trasformare qualcosa che non è una stringa in una stringa
//         let studente = this.findBestStudent();
//         let result = '';
//         result += `NOME: ${this.name}
// COGNOME: ${this.surname}
// ETA': ${this.calculateAge()}
// MIGLIOR STUDENTE: ${studente.name} ${studente.surname} `
//                    return result;
//     }

    // calculateAge(){
    //     const actualDate = new Date() //SOLUZIONE PROF.
    //         const actualYear = actualDate.getFullYear()
    //         const age = actualYear - this.yob;
    //         return age;
    //     }


    toString(){ //SOLUZIONE PROF.
        return super.toString()
            + "MIGLIOR STUDENTE: " + bestStudent.name + " " + bestStudent.surname + '\n'
    }

    //NOME: Andrea
    //COGNOME: Asioli
    //ETA': 45
    //MIGLIOR STUDENTE: Valentina Cherubini

    // calculateAge(){ //Trovare la età attuale del teacher
    //    let currentYear = new Date().getFullYear()
    //    return currentYear - this._yob; 
    // }

    
    //return new Date().getFullYear() - this.yob; //ONE LINER
    
    //45


}