$(function(){
    var day=$("#day");
    var hour=$("#hour");
    var branch=$("#branch");
    var second=$("#second");
    var data=[2019,12,25,0,0,0];
    var obj={};
    stati(data);
    day.text(obj.day);
    hour.text(obj.hour);
    branch.text(obj.branch);
    second.text(obj.second);
    $(".nav_h .container_nav .search li").click(function(){
        $(".searchbox").toggle();
    });
    $(".lbox_1").mouseover(function(){
        $(".lbox_1 .carousel-control").show();
    });
    $(".lbox_1").mouseout(function(){
        $(".lbox_1 .carousel-control").hide();
    });
    $(".b_right").mouseover(function(){
        $(".b_right ul li").mouseover(function(){
            $(".b_right ul li").removeClass("ac");
            $(this).addClass("ac");
        });
    });
    $(".b_right").mouseout(function(){
        $(".b_right ul li").removeClass("ac");
        $(".b_right ul li").eq(0).addClass("ac");
    })
    $(document).click(function(e){
        var x=e.pageX
        var y=e.pageY;
        $("<div class='box'></div>").appendTo("body");  
        $(".box").css({left:(x-$(".box").width())+"px",top:(y-$(".box").height())+"px"}); 
        $(".box").animate({top:"-="+$(".box").position().top/2+"px",opacity:0},1000,function(){
            $(this).remove();
        });
    });
    var box=$("<div class='rotate'></div>");
    var ul=$("<ul></uk>");
    for(var i=0;i<6;i++)ul.append("<li>欢迎光临</li>");
    box.append(ul).appendTo("body");
    //阻止文字被选中
    $(".rotate ul li").on({
        selectstart:function(){return false;},
        mousedown:function(){return false;},
        mouseup:function(){return true}
    });
    $("<audio id='audio'></audio>").prop("src","http://antiserver.kuwo.cn/anti.s?rid=MUSIC_13791491&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3").prop({"autoplay":"autoplay"}).appendTo("body");
    $("#audio").on('ended',function(){
        $(this).remove();
    })
    var timer=setInterval(show(),1000);
    function Time(obj){
        if(obj.second==60){
            obj.second=0;
            obj.branch++;
        }
        if(obj.branch==60){
            obj.branch=0;
            obj.hour++;
        }
        if(obj.hour==24){
            obj.hour=0;
            obj.day++;
        }
    }
    function stati(arr){
       var data=new Date(arr[0],arr[1]-1,arr[2],arr[3],arr[4],arr[5]);
       var data2=new Date();
       var day=parseInt((data2-data)/(1000*60*60*24));
       var hour=parseInt((data2-data)/(1000*60*60)-day*24);
       var branch=parseInt((data2-data)/(1000*60)-day*24*60-hour*60);
       var second=parseInt((data2-data)/1000-day*24*60*60-hour*60*60-branch*60);
        obj={day:day,hour:hour,branch:branch,second:second};
    }
    function show(){
        Time(obj);
        day.text(obj.day);
        hour.text(obj.hour);
        branch.text(obj.branch);
        second.text(obj.second);
        obj.second++;
        return show;
    }
})