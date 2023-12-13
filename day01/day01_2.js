let fs = require( 'fs' );

// function day1part12() {
//     let input = fs.readFileSync( "day01.txt", "utf-8" ).toString();
// // console.log(input)
//     let total = 0;
//     for (let line of input.split( '\n' )) {
//         const numbers = line.split( '' ).filter( el => !isNaN( parseInt( el ) ) ); // removing all isNaN
//         total += parseInt( `${ numbers[0] }${ numbers[numbers.length - 1] }` ); // adding first found number and last found number into a string and parsing it into a Int AND adding it to total
//     }
//     return total
// }
//
// console.log( 'day1part12(): ', day1part12() )


// using number mapping
function day1part2() {
const numberMappings = {
    one: 'one1one', // also adding one infront and back to ensure characters are not lost for other numbers
    two: 'two2two',
    three: 'three3three',
    four: 'four4four',
    five: 'five5five',
    six: 'six6six',
    seven: 'seven7seven',
    eight: 'eight8eight',
    nine: 'nine9nine',
}
    let input = fs.readFileSync( "day01.txt" ).toString();
    let total = 0;

    for (let line of input.split( '\n' )) {
        for (let num of Object.keys( numberMappings )) {
            line = line.replaceAll( num, numberMappings[num] );
        }
        const numbers = line.split( '' ).filter( el => !isNaN( parseInt( el ) ) ); // removing all isNaN
        total += parseInt( `${ numbers[0] }${ numbers[numbers.length - 1] }` ); // adding first found number and last found number into a string an
    }
    return total
}
//


console.log( 'day1part2(): ', day1part2() );
