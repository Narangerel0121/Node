// const fs = require('fs');
// fs.writeFile('./hello.txt', 'Hello world', (err) => {
//             if (!err) {
//                 console.log('Amjilttai')
//             }
//         })
// var fs = require('fs');
// fs.appendFile('./hello.txt', '\n This is not my text.', (err) => {
//     if(!err) {
//         console.log('updated')
//     }
// })
// var fs = require('fs');
// fs.unlink('./hello.txt',(err) => {
//     if(!err) {
//         console.log('deleted')
//     }
// })

// const fs = require('fs');
// const data = fs.writeFileSync('./test.txt', 'Hello guys')
// console.log('Amjilttai')
// const data = fs.readFileSync('./test.txt', 'utf8')
// console.log(data)
// const data = fs.appendFileSync('./test.txt', '\nUpdate hiigdev.')
// console.log("Updatelagdav")

// import fs from 'fs'
// let data = fs.readFileSync('./file.json', 'utf-8')

// let value = JSON.parse(data)
// let newData = {"name": "ider",
//     "age": 24}
// value.push(newData)
//  let updated = JSON.stringify(value)
// console.log(updated)

// var fs = require('fs');
// fs.unlink('./file.txt',(err) => {
//     if(!err) {
//         console.log('deleted')
//     }
// })

// function removeItem(array, itemToRemove) {
//     return array.filter(
//     	item => item !== itemToRemove);
// }
// let data = fs.readFileSync('./file.json', 'utf-8')

// const arr = JSON.parse(data);
// let update = removeItem(arr, arr[2])
// // console.log("Updated Array: ", removeItem(arr, arr[2]));
// let updatedData = JSON.stringify(update)
// console.log(updatedData)

// import fs from 'fs'
// function createStudent(student) {
//     const json = fs.readFileSync('student.json', 'utf-8');
//     const data = JSON.parse(json);
//     data.unshift(student);
//     fs.writeFileSync('student.json',JSON.stringify(data))
// }
// createStudent({name: 'ariuka', seat: '14'})

// import fs from 'fs'
// function deleteStudent(seat) {
// const json = fs.readFileSync('student.json', 'utf-8');
// const data = JSON.parse(json);
// const filteredData = data.filter(function(student){
//     return student.seat!= seat
// });
// fs.writeFileSync('student.json', JSON.stringify(filteredData))
// console.log(filteredData)
// }
// deleteStudent("23")

import fs from 'fs'
function readStudent() {
const json = fs.readFileSync('student.json', 'utf-8');
const data = JSON.parse(json);
fs.writeFileSync('student.json', JSON.stringify(data))
console.log(data)
}
readStudent()

import fs from 'fs'
function updateStudent(name) {
const json = fs.readFileSync('student.json', 'utf-8');
const data = JSON.parse(json);
const filteredData = data.filter(function(student){
    return student.name == name
});

fs.writeFileSync('student.json', JSON.stringify(filteredData))
console.log(filteredData)
}
updateStudent("itgel")



