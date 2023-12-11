const fs = require( "fs" );
const collect = require( "collect.js" );

const input = fs
    .readFileSync( "day01.txt", { encoding: "utf-8" } ) // read day??.txt content
    .split( "\n" )
    .map( ( x ) =>
        x
            .replace( /[^0-9]/g, "" )
    );


console.log( "day01.txt: ", input );

function part01() {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].length === 1) {
            total += parseInt( input[i] ) * 11;
            console.log( 'twodigit: ', total );
        } else if (input[i].length > 2) {
            let twoDigit = input[i].charAt(0) + input[i].slice(-1);
            console.log("last char: ",twoDigit);
            total += parseInt( twoDigit );
        } else {
            total += parseInt( input[i] );
        }
    }
    return total;

}

console.log( "part01: ", part01() );