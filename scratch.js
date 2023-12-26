const s = '1eightwothree'
// const p = /\d|one|two|three|four|five|six|seven|eight|nine/
// const p = /(?=(?\d|one|two|three|four|five|six|seven|eight|nine))/g
const letters = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
];
const p = `(?=(?<digit>[0-9]|${letters.join('|')}))`
const regex = new RegExp(p, 'g');


function parseLetter(s) {
    const xs = [...s.matchAll(regex)]
    const first = xs.at(0).groups.digit;
    const last = xs.at(-1).groups.digit;
    console.log({xs, first, last});
}

parseLetter(s)