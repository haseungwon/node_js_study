//익스프레스(Express.js)는 노드(NodeJS) 상에서 동작하는 웹 개발 프레임웍입니다

/*

프레임워크란
(1) 어플리케이션을 구현할 때 어플리케이션 구현에 꼭 필요한 부분, 구조를 미리 구현해둔 구조체
(2) 루비에는 레일즈(그래서 ruby on rails), php는 라라벨, java는 spring, nodejs는 express를 주로 사용함

*/

/*
    라우터 코드와 서버 코드는 다른 파일에 작성하는것이 좋은 코딩 습관입니다.
    router 라는 폴더를 만들고 그 안에 main.js 를 생성해주세요.
    
    - url을 구성하는 것을 라우트 지정이라 함
    - 쉽게말하면 서비스 사용자가 어떤 메뉴를 클릭했을 때 메뉴에 해당하는 화면을 브라우저에 출력시키기위해서는
    - 서버에 요청을 해야하는데, 요청할 때 주소가 날아감.
    - 어떤 주소가 요청되어져왔을 때 어떤 html 문서 파일을 응답(브라우저로 전송)해주겠다는 것을 연결시키는 작업
    - 이를 라우팅 한다라고 함 
    - 서버로 요청할 때 주소값이 드러나냐 나지않느냐의 차이로 app. 다음에 올 메소드명이 달라짐
    - 주소값이 주소창에 드러나도 상관없을 때에는 get을 쓰고 드러나지 말아야할 때에는 post를 사용함
*/
var express = require('express');
var app = express();
//라우터 모듈인 main.js 를 불러와서 app 에 전달해줍니다.
var router = require('./router/main')(app);



//서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다.
//set 메서드로 사용할 파일들을 설정합니다
app.set('views', __dirname + '/views');

//서버가 HTML 렌더링을 할 때, EJS 엔진을 사용하도록 설정합니다.
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
    console.log("server running at http://localhost:3000/")
});