let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];

let studentsUppercase = students.map( student => (student['name'].toUpperCase()));


let gradeOver70 = students.filter(
    function ( student) {
        if ( student['grades'] > 70 ) {
            return true;
        }


    }
);

console.log(gradeOver70);

let gradeOver70AndIdOver120 = students.filter(
    function ( student) {
        if ( student['grades'] > 70 && student['id'] > 120) {
            return true;
        }


    }
);
console.log(gradeOver70AndIdOver120);