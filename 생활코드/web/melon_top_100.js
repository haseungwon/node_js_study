var cheerio=require('cheerio');
var request=require('request');

var url='http://www.melon.com/chart/';



request(url,function(error,response,html){
    var $ = cheerio.load(html);
    var title=new Array();
    var artist=Array();
    
    for (var i=0;i<100;i++){
    $('.ellipsis.rank01 > span > a').each(function(){
        var title_info=$(this);
        var title_info_text=title_info.text();
        title[i]=title_info_text;
        i++;
    })
    }
    
    for(var i=0;i<100;i++){
    $('.checkEllipsis').each(function(){
        var artist_info=$(this);      
        var artist_info_text=artist_info.text();
        artist[i]=artist_info_text;
        i++;
    })
    }
    var up_date;
    var up_time;
    
    $('.year').each(function(){
        var date_info=$(this);
        var date_info_text=date_info.text();
        up_date=date_info_text;
    })
    $('.hhmm > span').each(function(){
        var time_info=$(this);
        var time_info_text=time_info.text();
        up_time=time_info_text;
    })
    var up_date_arr= new Array();
    up_date_arr=up_date.split('.');
    var up_time_arr= new Array();
    up_time_arr=up_time.split(':');
    var new_time;
    
    if(up_time_arr[0]>12){
        up_time_arr[0]-=12;
        new_time="오후 "+up_time_arr[0];
    }
    else{
        new_time="오전 "+up_time_arr[0];
    }
    
    
    console.log("< 실시간 멜론 top 100 >")
    for(var i=0;i<100;i++){
    console.log(i+1+ " " + artist[i] + " - " + title[i]); 
    }
    console.log("("+up_date_arr[0]+"년 "+up_date_arr[1] +"월 "+ up_date_arr[2]+"일 " + new_time+"시에 업데이트됨)" );
});
