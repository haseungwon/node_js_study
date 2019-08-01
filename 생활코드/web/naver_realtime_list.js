var cheerio=require('cheerio');
var request=require('request');

var url='https://www.naver.com/';

request(url,function(error,response,html){
    var $ = cheerio.load(html);
    /*var title=new Array();
    var title_info_text;
    for(i=0;i<20;i++){
    $('.ah_a > span.ah_k').each(function(){
        var title_info=$(this);
        title_info_text=title_info.text();
       title[i]=title_info_text;
        i++;
    });
    }
    var time_arr=new Array();
    var time_text;
    
    $('ah_time').each(function(){
        var time_info=$(this);
        
    })
    console.log("< 네이버 실시간 검색어 1위 >")
    for(var i=0;i<20;i++){
        console.log(i+1+"위 - "+title[i]);
 
    }*/
    
    
    
    
    
    
    
    
    
    
    
});