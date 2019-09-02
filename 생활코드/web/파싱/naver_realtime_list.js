var cheerio=require('cheerio');
var request=require('request');

var url='https://www.naver.com/';



request(url,function(error,response,html){
    var $ = cheerio.load(html);
    var title=new Array();

    
    for(var i=0;i<20;i++){
    $('.ah_a > span.ah_k').each(function(){
        var title_info=$(this);
        var title_info_text=title_info.text();
        title[i]=title_info_text;
        i++;
    });
    }
    var date_arr= Array();
    var time_arr= new Array();
    var time_text;
    
    $('.ah_time').each(function(){
        var time_info=$(this);
        var tmp=time_info.text();
        date_arr=tmp.split('.');
        time_arr=date_arr[3].split(':');
        
    })
    var real_time;
    if(time_arr[0]>12){
        time_arr[0]-=12;
        real_time= "오후 "+time_arr[0]+"시전 "+time_arr[1]+"분 기준";
    }
    else{
        real_time= "오전 "+time_arr[0]+"시 "+time_arr[1]+"분 기준";
    }
    console.log("< 네이버 실시간 검색어 1위 >")
    for(var i=0;i<20;i++){
        console.log(i+1+"위 - "+title[i]);
 
    };
    console.log("( "+date_arr[0]+"년 "+date_arr[1]+"월 "+date_arr[2]+"일 "+ real_time+")");
});