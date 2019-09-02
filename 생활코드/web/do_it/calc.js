var util=require('util');
var EventEmitter= require('events').EventEmitter;

var Calc = function(){              //prototype 객체 생성
    var self =this;
    this.on('stop',function(){
        console.log('Calc에 stop event 전달됨');
    });
};
util.inherits(Calc, EventEmitter);//Calc 객체가 EventEmitter를 상속받게 함.
Calc.prototype.add=function(a,b){
    return a+b;
};

module.exports=Calc;
module.exports.title='calculator';