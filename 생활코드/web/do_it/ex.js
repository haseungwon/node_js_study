/*  콜백함수 이해하기
function add(a,b,callback){
    var result =a+b;
    callback(result);

    var count=0;
    var history=function(){
        count++;
        return count + ' : ' + a + ' + ' +b+' = '+result;
    }
    return history;
}
var add_history =add(10,10, function(result){
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기 (10,10)의 결과 :',result);
});
console.log('결과 값으로 받은 함수 실행 결과 : '+add_history());
console.log('결과 값으로 받은 함수 실행 결과 : '+add_history());
console.log('결과 값으로 받은 함수 실행 결과 : '+add_history());*/

/*  프로토타입 객체 만들기
function Person(name, age){
    this.name = name;
    this['age'] = age;
}
Person.prototype.walk=function(speed){
    console.log(speed+'km 속도로 걸어갑니다');
}

var person01= new Person('하승원',22);
var person02=new Person('하하하',21);
console.log(person01.name+'객체의 walk(10)을 호출합니다.');
person01.walk(10);*/

/*  주소 문자열과 요청 파라미터 다루기
var url=require('url');

var curURL=url.parse('https://search.naver.com/search.naver?where=nexearch&query=%EB%A8%BC%EB%8D%B0%EC%9D%B4%ED%82%A4%EC%A6%88&sm=top_lve&ie=utf8');
var curSTR=url.format(curURL);
console.log('주소 문자열: %s', curSTR);
console.dir(curURL);

var querystring=require('querystring');
var param = querystring.parse(curURL.query);

console.log('요청 파라미터 중 query의 값 : %s',param.query);
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));
console.dir(param);*/

/*  이벤트 이해하기
process.on('심심해',function(cnt){
    console.log('심심해 이벤트 발생함 : %s',cnt);;
});

setTimeout(function(){
    console.log('2초 후에 심심해 이벤트 전달 시도함');
    process.emit('심심해','4');

},2000);*/

/*  이벤트 이해하기
var Calc=require('./calc');

var calc= new Calc();
calc.emit('stop');
console.log(Calc.title+'에 stop 이벤트 전달함');*/

/*  파일 다루기
var fs=require('fs');
//파일을 동기식 IO로 읽어 들입니다.
var data=fs.readFileSync('../web1_html_internet-master/data/CSS','utf8');
//읽어 들인 데이터 출력합니다.
console.log(data);

var fs=require('fs');
//파일을 비동기식 IO로 읽어 들입니다.
fs.readFile('../package.json','utf8',function(err,data){
    //읽어 들인 데이터 출력
    console.log(data);
})
console.log('프로젝트 폴더 안의 package.json파일을 읽도록 요청했습니다')

var fs=require('fs');
//파일에 데이터를 씁니다.
fs.writeFile('./output.txt','Hello World',function(err){
    if(err){
        console.log("ERROR : "+err);
    }
    
    console.log('output.txt 파일에 데이터 쓰기 완료');
});*/

/*var fs=require('fs');
//파일에 데이터를 씁니다
fs.open('./output.txt','w',function(err,fd){
    if(err)throw err;
    
    var buf=new Buffer.from('안녕!\n');
    fs.write(fd,buf,0,buf.length,null,function(err,written,buffer){
        if(err)throw err;
        console.dir(fd);
        console.log(err,written,buffer);
        fs.close(fd,function(){
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료');
        });
    });
});*/

/*var fs = require('fs');
//파일에서 데이터를 읽어 들입니다
fs.open('./output.txt','r',function(err,fd){
    if(err)throw err;
    
    var buf=new Buffer(10);
    console.log('버퍼 타입 : %s', Buffer.isBuffer(buf));



    fs.read(fd,buf,0,buf.length,null,function(err,bytesRead,buffer){
        if(err) throw err;

        var inSTR= buffer.toString('utf8',0,bytesRead);
        console.log('파일에서 읽은 데이터 : %s',inSTR);

        console.log(err,bytesRead,buffer);

        fs.close(fd,function(){
                 console.log('output.txt 파일을 열고 읽기 완료');
                 });
        });
});*/

/* 버퍼 객체 사용 방법
//버퍼 객체를 크기만 지정하여 만든 후 문자열을 씁니다
var output = '안녕 1!';
var buffer1= new Buffer(10);
var len= buffer1.write(output,'utf8');
console.log('첫번째 버퍼의 문자열 %s',buffer1.toString());

//버퍼 객체를 문자열을 이용해 만듭니다.
var buffer2=new Buffer('안녕 2!','utf8');
console.log('두 번째 버퍼의 문자열 %s',buffer2.toString());

//타입을 확인합니다
console.log('버퍼1 객체의 타입 : %s',Buffer.isBuffer(buffer1));
console.log('버퍼2 객체의 타입 : %s',Buffer.isBuffer(buffer2));

//버퍼 객체에 들어 있는 문자열 데이터를 문자열 변수로 만듭니다

var str1=buffer1.toString('utf8');
var str2=buffer2.toString('utf8');
console.log(str1);
console.log(str2);

//첫번째 버퍼 객체의 분자열을 두번째 버퍼 객체로 복사합니다
buffer1.copy(buffer2,0,0,len);
console.log('두 번째 버퍼에 복사한 후의 문자열 : %s',buffer2.toString('utf8'));

//두 개의 버퍼를 붙여 줍니다.
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log('두개의 버퍼를 붙인 후의 문자열 : %s',buffer3.toString('utf8'));*/

/*  스트림 단위로 파일 읽고 쓰기
var fs=require('fs');

var infile=fs.createReadStream('./output.txt',{flags: 'r'});
var outfile=fs.createWriteStream('./output2.txt',{flags:'w'});

infile.on('data',function(d){
    console.log('읽어들인 데이터',d);
    outfile.write(d);
});
infile.on('end',function(){
    console.log('파일 읽기 종료');
    outfile.end(function(){
        console.log('파일 쓰기 종료');
    });
});*/

/*스트림 단위로 파일 읽고 쓰기
var fs= require('fs');
var inname='./output.txt';
var outname='./output2.txt';

fs.access(outname,fs.constants.F_OK,function(err){
    if(!err){
        fs.unlink(outname,function(err){
            if(err) throw err;
            console.log('기존 파일 ['+ outname +'] 삭제함.');
        });
    }
    var infile=fs.createReadStream(inname,{flags:'r'});
    var outfile=fs.createWriteStream(outname,{flags:'w'});
    infile.pipe(outfile);
    console.log('파일 복사['+inname+'] -> ['+outname+']');
});*/

/*    http 모듈로 요청받은 파일 내용을 읽고 응답하기
var fs=require('fs');
var http=require('http');
var server=http.createServer(function(req,res){
    //파일을 읽어 응답 스트림과 pipe()로 연결합니다.
    var instream=fs.createReadStream('./output.txt');
    instream.pipe(res);
});
server.listen(7001,'127.0.0.1');*/

/*  fs 모듈로 새 디렉터리 만들고 삭제하기
var fs = require('fs');
fs.mkdir('./docs',0666,function(err){
    if(err) throw err;
    console.log('새로운 docs 폴더를 만들었습니다.');
    
    fs.rmdir('./docs',function(err){
        if(err) throw err;
        console.log('docs 폴더를 삭제했습니다.');
    });
});*/

/*  로그 파일 남기기
var winston = require('winston');    				// 로그 처리 모듈
var winstonDaily = require('winston-daily-rotate-file');    	// 로그 일별 처리 모듈
var moment = require('moment');    				// 시간 처리 모듈

function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ'); // '2016-05-01 20:14:28.500 +0900'
};

var logger = new (winston.Logger)({

//winston 모듈로 만드는 로거(Logger, 로그를 출력하는 객체를 말할 때 사용하는 용어)는 transports 라는 속성 값으로 여러 개의 설정 정보를 전달 할 수 있다.

    transports: [
        new (winstonDaily)({
//이름이 info-file인 설정 정보는 매일 새로운 파일에 로그를 기록하도록 설정
            name: 'info-file',
            filename: './log/server',
            datePattern: '_yyyy-MM-dd.log',
            colorize: false,
// 50MB를 넘어 가면 자동으로 새로운 파일을 생성되며, 이때 자동으로 분리되어 생성 되는 파일의 개수는 최대 1000개 까지 가능하다.
            maxsize: 50000000,           
            maxFiles: 1000,
//info 수준의 로그만 기록하도록 설정함.
            level: 'info',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'debug-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ],
    exceptionHandlers: [
        new (winstonDaily)({
            name: 'exception-file',
            filename: './log/exception',
            datePattern: '_yyyy-MM-dd.log',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'error',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'exception-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ]
});

//logger를 통한 로그 출력
logger.info("infolevel 로깅");
*/


var http=require('http');

var server = http.createServer();

var port= 3000;
server.listen(port, function(){
    console.log('웹 서버가 시작되었습니다 : %d',port);
});












