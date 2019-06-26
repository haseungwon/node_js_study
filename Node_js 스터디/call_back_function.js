


var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());

console.log("Program has ended");

var fs = require("fs");


/*
모든 Node 어플리케이션의 비동기식 함수에서는 첫번째 매개변수로는 error를, 마지막 매개변수로는 callback 함수를 받습니다.
fs.readFile() 함수는 비동기식으로 파일을 읽는 함수이고, 도중에 에러가 발생하면 err 객체에 에러 내용을 담고
그렇지 않을 시에는 파일 내용을 다 읽고 출력합니다.
*/

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program has ended");