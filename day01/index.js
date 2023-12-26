const fs = require('fs/promises');


(async () => {
    const part = process.argv[2] ?? '1'
    const path = process.argv[3] ?? 'sample.txt'
    const input = await fs.readFile(`${__dirname}/${path}`, { encoding: 'utf8' });

    console.time()
    const got = part === '1' ? solution1(input) : solution2(input)
    console.timeEnd()

    console.log(got)
})()

function solution1(input) {
    const d = input.split('\n').map(x => x.match(/\d/g))
    const fl = d.map(x => String(x[0]) + String(x.slice(-1)))
    const result = fl.reduce((xs, x) => xs + Number(x), 0)
    return result
}


function solution2(input) {
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
    const regex = new RegExp(`(?=(?<digit>[0-9]|${letters.join('|')}))`, 'g');
    const lines = input.split('\n');
    const numbers = lines.map(line => {
        const first = [...line.matchAll(regex)].at(0).groups.digit;
        const last = [...line.matchAll(regex)].at(-1).groups.digit;
        const a = Number.isNaN(+first) ? letters.indexOf(first) : +first;
        const b = Number.isNaN(+last) ? letters.indexOf(last) : +last;
        return a * 10 + b;
    });
    return numbers.reduce((a, b) => a + b, 0);
}