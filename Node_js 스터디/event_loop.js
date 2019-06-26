// events 모듈 사용
var events = require('events');



// EventEmitter 객체 생성
//이벤트를 내보내는 모든 객체는 EventEmitter 클래스의 인스턴스다. 
//이 객체는 하나 이상의 함수를 이벤트로 사용할 수 있도록 이름을 넣어 추가하는 eventEmiter.on() 함수를 사용할 수 있다. 
var eventEmitter = new events.EventEmitter();

// EventHandler 함수 생성
// 작동 3
var eventHandler = function connected(){
    console.log("Connection Successful");
    
    // data_recevied 이벤트를 발생시키기
    eventEmitter.emit("data_received");
}



//이벤트 핸들러와 이벤트를 연동시키는건 다음과 같습니다
// event와 EventHandler 를 연동(bind)
// eventName 은 임의로 설정 가능
//eventName의 이름이 발생하면 eventHandler를 활동한다.
//작동 2
eventEmitter.on('eventName',eventHandler);

// data_received 이벤트와 익명 함수와 연동
// 함수를 변수안에 담는 대신에, .on() 메소드의 인자로 직접 함수를 전달


//작동 4
eventEmitter.on('data_received', function(){
    console.log("Data Received");
});

//eventName의 이름으로 이벤트 발행시킨다.
//작동 1
eventEmitter.emit('eventName');

//작동 5
console.log("Program has ended");