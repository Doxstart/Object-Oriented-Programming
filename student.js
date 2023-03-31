class Student extends Person{

    constructor(name, surname, yob, grades = []){
        super(name, surname, yob); 
        this._grades = grades; //-------->underscore è una convenzione che serve per avvisare che è meglio non cambiare la variabile (_grades)
    }

    get grades(){
        return this._grades;
    }

    // get yob(){
    //     return this._yob;
    // }

    // set yob(value){
    //     const oldYob = this._yob;
    //     this._yob = value;
    //     const newAge = this.calculateAge();
    //     if (newAge < 18 || newAge > 100) {
    //         this._yob = oldYob;
    //     }
    // }

    calculateMean(){
        const grades = this.grades;
        if (grades.length === 0) {
            return -1
        }
        let sum = 0
        for (let i = 0; i < grades.length; i++) {
            const grade = grades[i];
            sum += grade;
        }
        const mean = sum / grades.length;
        return mean;
    }

//     toString(){
//         let result = '';
//         result += `NOME: ${this.name}
// COGNOME: ${this.surname}
// ETA': ${this.calculateAge()}
// MEDIA: ${this.calculateMean()}  `
//                    return result;
//     }

    toString(){
        return super.toString()
            + "MEDIA: " + this.calculateMean() + '\n'
    }

    //NOME: Davide
    //COGNOME: Consigliere
    //ETA': 34
    //MEDIA: 5.4

    // calculateAge(){
    //     let currentYear = new Date().getFullYear()
    //    return currentYear - this.yob; 
    // }
    //34

}