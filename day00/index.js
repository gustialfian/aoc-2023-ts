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
    return 'not impl'
}


function solution2(input) {
    return 'not impl'
}

