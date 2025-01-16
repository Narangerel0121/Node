import fs from 'fs'
import sharp from 'sharp'
const data = fs.readdirSync('./input')
for(let i = 0; i < data.length; i++){
    sharp(`./input/${data[i]}`).toFile(`./output/result-${i}.webp`, (err, info) => {
        console.log({err, info})
    });
}
console.log(data) 