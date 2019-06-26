
//HTTP 모듈을불러오고 반환되는 HTTP 인스턴스를 http 변수에 저장합니다.
var http = require("http");



var fs = require("fs");
var data = fs.readFileSync('input.txt');

//1단계에서 만들은 http 인스턴스를 사용하여 http.createServer() 메소드를 실행합니다.
http.createServer(function(request, response){
    /* 
        HTTP 헤더 전송
        HTTP Status: 200 : OK
        Content Type: text/plain
    */
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    /*
        Response Body data로 설정
    */
   
    response.end(data.toString());

/*
listen 메소드를 사용하여 포트 8081과 bind 해줍니다.
http.createServer() 의 매개변수로는 request와 response를 매개변수로 가지고있는 함수를 넣어줍니다.
*/
}).listen(8081);

console.log("server running at http://127.0.0.1:8081");