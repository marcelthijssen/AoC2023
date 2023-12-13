//  https://adventofcode.com/
const fs = require( "fs" );
const collect = require( "collect.js" );

const inputPart1 = fs
    .readFileSync( "day01.txt", { encoding: "utf-8" } ) // read day??.txt content
    .trim()
    .split( "\n" )
    .map( ( x ) =>
        x
            .replace( /[^1-9]/g, "" )
    );

const inputPart011 = fs
    .readFileSync( "day01.txt", { encoding: "utf-8" } ) // read day??.txt content
    .trim()
    .split( "\n" );


// console.log( 'inputPart011', inputPart011 );

// part one my way
function part01() {
    let total = 0;
    for (let i = 0; i < inputPart1.length; i++) {
        if (inputPart1[i].length === 1) {
            total += parseInt( inputPart1[i] ) * 11;
        } else if (inputPart1[i].length > 2) {
            let twoDigit = inputPart1[i].charAt( 0 ) + inputPart1[i].slice( -1 );
            total += parseInt( twoDigit );
        } else {
            total += parseInt( inputPart1[i] );
        }
    }
    return total;
}

function part011() {
    const values = inputPart011
        .map( ( line ) => {
            let first = line.split( '' ).find( ( v ) => !Number.isNaN( Number( v ) ) );
            let last = line.split( '' ).findLast( ( v ) => !Number.isNaN( Number( v ) ) );
            return Number( first + last );
        } )
    return values.reduce( ( s, v ) => s + v );
}

function day01Part12(){
        let input = fs.readFileSync( "day01.txt", "utf-8" ).toString();
// console.log(input)
        let total = 0;
        for (let line of input.split( '\n' )) {
            const numbers = line.split( '' ).filter( el => !isNaN( parseInt( el ) ) ); // removing all isNaN
            total += parseInt( `${ numbers[0] }${ numbers[numbers.length - 1] }` ); // adding first found number and last found number into a string and parsing it into a Int AND adding it to total
        }
        return total
    }

function day01part02() {
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




console.log( "part01: ", part01() );

console.log( 'part011: ', part011() );

console.log( 'day01Part12: ', day01Part12() );

console.log( 'day01part02(): ', day01part02() );

// console.log( "part02: ", part02() );