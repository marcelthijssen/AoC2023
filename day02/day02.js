const fs = require( "fs" );
// const collect = require( "collect.js" );

let input = fs
    .readFileSync( "day02.txt" ).toString(); // read day??.txt content


function part1() {
    let total = 0;
    for (let game of input.split( '\n' )) {
        let valid = true;
        let [ gameId, gameData ] = game.split( ': ' );

        for (let gameSet of gameData.split( '; ' )) {
            let cubeCounts = {
                red: 12,
                green: 13,
                blue: 14
            }
            for (let cube of gameSet.split( ', ' )) {
                let [ count, color ] = cube.split( ' ' );
                cubeCounts[color] -= parseInt( count );
                // console.log(cube, cubeCounts)
                for (let key of Object.keys( cubeCounts )) {
                    if (cubeCounts[key] < 0) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            total += parseInt( gameId.split( ' ' )[1] );
        }
    }
    return total;
}

function part2() {
    let total = 0;
    for (let game of input.split( '\n' )) {
        let [ gameId, gameData ] = game.split( ': ' );

        let globalCounts = {
            red: 0,
            green: 0,
            blue: 0,
        }
        for (let gameSet of gameData.split( '; ' )) {
            let localCounts = {
                red: 0,
                green: 0,
                blue: 0
            }
            for (let cube of gameSet.split( ', ' )) {
                let [ count, color ] = cube.split( ' ' );
                localCounts[color] += parseInt( count );

                for (let key of Object.keys( localCounts )) {
                    if (localCounts[key] > globalCounts[key]) {
                        globalCounts[key] = localCounts[key];
                    }
                }
            }
        }
        total += globalCounts.red * globalCounts.blue * globalCounts.green;
    }
    return total;
}


console.log( 'part1: ', part1() );
console.log( 'part2: ', part2() );