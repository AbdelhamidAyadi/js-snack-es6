const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

// Esercizio risolto con forEach


let min = Number(prompt("Il minimo"));
let max = Number(prompt("Il massimo"));
// let newArray = [];

if (isNaN(min) || isNaN(max) || min > max || min < 0 || max > 5) {
    alert("Inserisci due numeri compresi tra 0 e 5");

} else if (min.length == 0 || max.length == 0) {
    alert("Inserisci due numeri compresi tra 0 e 5");
} else {
    myArray.forEach(
        function (element, index, array) {

            if (index >= min && index <= max) {
                newArray.push(myArray[index]);
            }

        }
    );
};

alert(newArray);

// Esercizio risolto con Filter

if (isNaN(min) || isNaN(max) || min > max || min < 0 || max > 5) {
    alert("Inserisci due numeri compresi tra 0 e 5");

} else if (min.length == 0 || max.length == 0) {
    alert("Inserisci due numeri compresi tra 0 e 5");
} else {


    let newArray2 = myArray.filter(
        function (number) {
            if (myArray.indexOf(number) >= min && myArray.indexOf(number) <= max) {
                return true;
            }


        }
    );
    console.log(newArray2);
};