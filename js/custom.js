var cursor = $(".cursor"),
		follower = $(".cursor-follower"),
		positionX = 0,
		positionY = 0,
		mouseX = 0, 	//마우스 X축 좌표 값
		mouseY = 0;		//마우스 Y축 좌표 값

$(document).mousemove(function(e){
		mouseX = e.pageX;
		mouseY = e.pageY;
	
// 	  positionX += (mouseX - positionX) / 9;
// 	  positionY += (mouseY - positionY) / 9;
	
// 		cursor.css("left", mouseX).css("top", mouseY);
// 	  follower.css("left", positionX).css("top", positionY);
});


TweenMax.to({},0.016,{
	repeat: -1,
	onRepeat: function(){
	  positionX += (mouseX - positionX) / 9;
	  positionY += (mouseY - positionY) / 9;
		
		TweenMax.set(cursor,{
			css: {
				left: mouseX,
				top: mouseY
			}
		});
		
		TweenMax.set(follower,{
			css: {
				left: positionX - 11,
				top: positionY - 11
			}
		});
	}
});


$(".chover").on("mouseenter",function(){
	cursor.addClass("active");
	follower.addClass("active");
});

$(".chover").on("mouseleave",function(){
	cursor.removeClass("active");
	follower.removeClass("active");
});

        $("a[href^='#']").click(function(e){
            e.preventDefault;
            var target = $( $(this).attr("href") );

            if(target.length){
                $("html,body").animate({ scrollTop:target.offset().top },400);
            }
        });