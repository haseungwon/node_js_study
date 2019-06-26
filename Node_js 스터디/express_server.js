//익스프레스(Express.js)는 노드(NodeJS) 상에서 동작하는 웹 개발 프레임웍입니다

/*
    라우터 코드와 서버 코드는 다른 파일에 작성하는것이 좋은 코딩 습관입니다.
    router 라는 폴더를 만들고 그 안에 main.js 를 생성해주세요.
*/
var express = require('express');
var app = express();
//라우터 모듈인 main.js 를 불러와서 app 에 전달해줍니다.
var router = require('./router/main')(app);


//서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다.
app.set('views', __dirname + '/views');

//서버가 HTML 렌더링을 할 때, EJS 엔진을 사용하도록 설정합니다.
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
    console.log("server running at http://localhost:3000/")
});