//科室导航
function myNav(){
	if($("#nav").hasClass("openNav")){
		$("#nav-over").css("display","none");
		$("#nav").removeClass("openNav");
		$("#warmp,.footer-con").removeClass("openMenu");
	}else{
		$("#nav-over").css("display","block");
		$("#nav").addClass("openNav");
		$("#warmp,.footer-con").addClass("openMenu");
				
		$("#scrollerBox").height($(window).height() - $("#nav h3").outerHeight());
		$(window).resize(function(){
			$("#scrollerBox").height($(window).height() - $("#nav h3").outerHeight());
		})
	}	
}
//项目导航
function ksNav(){
	if($("#ks-nav").hasClass("openNav")){
		$("#nav-over").css("display","none");
		$("#ks-nav").removeClass("openNav");
		$("#warmp,.footer-con").removeClass("openMenu")	
	}else{
		$("#nav-over").css("display","block");
		$("#ks-nav").addClass("openNav");
		$("#warmp,.footer-con").addClass("openMenu");
		
		
		$("#ks-scrollerBox").height($(window).height() - $("#ks-nav h3").outerHeight());
		$(window).resize(function(){
			$("#ks-scrollerBox").height($(window).height() - $("#nav h3").outerHeight());
		})
	}
}
$("#nav-over").bind("click",function(){
	$("#nav-over").css("display","none");
	$("#warmp,.footer-con").removeClass("openMenu");
	$("#nav").removeClass("openNav");
	$("#ks-nav").removeClass("openNav");
	$("#warmp,.footer-con").removeClass("openMenu")	
})
$("#nav-over").bind("touchmove touch",function(e){e.preventDefault()},false);//阴止默认事件
$(".navHome").bind("click",myNav);
$(".navIteam").bind("click",ksNav);

//焦点图
TouchSlide({ 
	slideCell:"#slides",
	titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	mainCell:".bd ul", 
	effect:"leftLoop", 
	autoPage:true,//自动分页
	autoPlay:true //自动播放
});
//项目一	
TouchSlide({ 
	slideCell:"#tab-iteam1",
	titCell:".tab-iteam-hd li",
	mainCell:".tab-iteam-con",
	startFun:function(i,c){		
	},
	endFun:function(i,c){
		var bd = document.getElementById("tabBox1-bd");
		bd.parentNode.style.height = bd.children[i].children[0].offsetHeight+bd.children[i].children[1].offsetHeight+20+"px";
		if(i>0)bd.parentNode.style.transition="200ms";//添加动画效果		
		
		var widths = 0;
		for(j=0;j<i-1;j++){
			widths += $("#tab-iteam1 .tab-iteam-hd ul li").eq(j).outerWidth();							
		}
		if(i+1!=c){
			$("#tab-iteam1 .tab-iteam-hd ul").animate({"left":-widths})	
		}
	}
}); 
//项目二
TouchSlide({ 
	slideCell:"#tab-iteam2",
	titCell:".tab-iteam-hd li",
	mainCell:".tab-iteam-con",
	startFun:function(i,c){	
	},
	endFun:function(i,c){	
		var bd = document.getElementById("tabBox2-bd");
		bd.parentNode.style.height = bd.children[i].children[0].offsetHeight+bd.children[i].children[1].offsetHeight+20+"px";
		if(i>0)bd.parentNode.style.transition="200ms";//添加动画效果
		
		var widths = 0;
		for(j=0;j<i-1;j++){
			widths += $("#tab-iteam2 .tab-iteam-hd ul li").eq(j).outerWidth();							
		}
		if(i+1!=c){
			$("#tab-iteam2 .tab-iteam-hd ul").animate({"left":-widths},400)	
		}
	}
});

//荣誉
$("#tab-honner .tab-honner-hd ul li").each(function(i) {
    $(this).click(function(){	
		$(this).addClass("on").siblings().removeClass("on");	
		$("#tab-honner .tab-honner-con .con").eq(i).show().siblings().hide();
		TouchSlide({ 
			slideCell: "#"+$("#tab-honner .tab-honner-con .con").eq(i).children("div").attr("id"),
			mainCell:".bd ul", 
			effect:"leftLoop", 
			autoPlay:true,//自动播放
			interTime:5000,
			autoPage:false, //自动分页
			prevCell:".prev",
			nextCell:".next",
			switchLoad:"_src" //切换加载，真实图片路径为"_src" 
		});
	})
});
TouchSlide({ 
	slideCell:"#zizhi",
	mainCell:".bd ul", 
	effect:"leftLoop", 
	autoPlay:true,//自动播放
	interTime:5000,
	autoPage:false, //自动分页
	prevCell:".prev",
	nextCell:".next",
	switchLoad:"_src" //切换加载，真实图片路径为"_src" 
});

//案例
TouchSlide({ 
	slideCell:"#case",
	mainCell:".bd ul", 
	effect:"leftLoop", 
	autoPlay:true,//自动播放
	interTime:5000,
	autoPage:false, //自动分页
	prevCell:".prev",
	nextCell:".next",
	switchLoad:"_src" //切换加载，真实图片路径为"_src" 
});
//专家
TouchSlide({ 
	slideCell:"#team",
	mainCell:".bd ul", 
	effect:"leftLoop", 
	autoPlay:true,//自动播放
	interTime:5000,
	autoPage:false, //自动分页
	prevCell:".prev",
	nextCell:".next",
	switchLoad:"_src" //切换加载，真实图片路径为"_src" 
});

//返回顶部
$("body").append('<div class="gotop" id="gotop"><div>');
$(window).scroll(function(){$(document).scrollTop()>300?$("#gotop").fadeIn():$("#gotop").fadeOut()});
$("#gotop").click(function(){$("html,body").animate({scrollTop:0},300)})
