$(document).ready(function(){
    //carousel
    $(".left img").hover(
        function(){$(this).attr("src","img/hleft.svg");},
        function(){$(this).attr("src","img/left.svg");}
    );
    $(".right img").hover(
        function(){$(this).attr("src","img/hright.svg");},
        function(){$(this).attr("src","img/right.svg");}
    );
        let nextimg;
        let dot=$('.dot').find('div');
        let slideimg=$('.carousel').find('img'),
            slidelecount=slideimg.length,
            currentindex=0;
        slideimg.eq(currentindex).fadeIn();
        $('.left').click(function(){
            nextimg=currentindex-1;
            if(nextimg==-1) {nextimg=2;}
            dot.css('backgroundColor','rgba(255, 255, 255, 0.5)');
            dot.eq(nextimg).css('backgroundColor','white');
            slideimg.eq(currentindex).fadeOut(500);
            slideimg.eq(nextimg).fadeIn(1500);
            currentindex=nextimg;
        });
        $('.right').click(function(){
            nextimg=currentindex+1;
            if(nextimg==3) {nextimg=0;}
            dot.css('backgroundColor','rgba(255, 255, 255, 0.5)');
            dot.eq(nextimg).css('backgroundColor','white');
            slideimg.eq(currentindex).fadeOut(500);
            slideimg.eq(nextimg).fadeIn(1500);
            currentindex=nextimg;
        });
        /*setInterval(shownext,5000);
        function shownext(){
            nextimg=currentindex+1;
            if(nextimg==3) {nextimg=0;}
            slideimg.eq(currentindex).fadeOut(1000);
            slideimg.eq(nextimg).fadeIn(2000);
            currentindex=nextimg;
        }*/
        //goto_doc
        $('.monster_doc').hover(
            function(){$(this).removeClass("animate__animated animate__flash animate__infinite");},
            function(){$(this).addClass("animate__animated animate__flash animate__infinite");}
        );
});