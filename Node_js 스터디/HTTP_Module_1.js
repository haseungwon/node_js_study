var http = require('http');
var fs = require('fs');
var url = require('url');


// 서버 생성
http.createServer( function (request, response) {  
   // URL 뒤에 있는 디렉토리/파일이름 파싱
   var pathname = url.parse(request.url).pathname;
   
   
   console.log("Request for " + pathname + " received.");
   
   // 파일 이름이 비어있다면 index.html 로 설정
   if(pathname=="/"){
       pathname = "/index.html";
   }
   
   // 파일을 읽기
   /*
        fs.readFile() 함수는 비동기식으로 파일을 읽는 함수이고, 도중에 에러가 발생하면 err 객체에 에러 내용을 담고
        그렇지 않을 시에는 파일 내용을 다 읽고 출력합니다.
   */
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // 페이지를 찾을 수 없음
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
        }
       else{	
         // 페이지를 찾음	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // 파일을 읽어와서 responseBody 에 작성
         response.write(data.toString());		
      }
      // responseBody 전송
      response.end();
   });   
}).listen(8081);


console.log('Server running at http://127.0.0.1:8081/');


//서버가 실행된 상태에서 html<bod>태그 가져오기
var http = require('http');

// HTTPRequest의 옵션(객체) 설정
var options = {
   host: 'localhost',
   port: '8081',
   path: '/index.html'  
};

// 콜백 함수로 Response를 받아온다

var callback = function(response){
   // response 이벤트가 감지되면 데이터를 body에 받아온다
   var body = '';
    
   response.on('data', function(data) {
      body += data;
   });
   
   // end 이벤트가 감지되면 데이터 수신을 종료하고 내용을 출력한다
   response.on('end', function() {
      // 데이저 수신 완료
      console.log(body);
   });
}
// 서버에 HTTP Request 를 날린다.
//options 전달인자는 클라이언트 HTTP 요청을 열고 서버에 전송하는 방법에 대한 속성을 지정한다. callback 전달인자는 서버에 요청이 보내진 후 불리게 되는데, 서버로 부터 받은 응답을 처리한다.
var req = http.request(options, callback);
req.end();

/*
    14번과 19번 줄을 보면 response.on() 을 사용하죠. .on() 메소드, 익숙하지 않나요?
    response 는 강좌 07편 Event Loop에서 봤었던 EventEmitter 클래스를 상속한 객체입니다.
*/