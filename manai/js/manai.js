$(window).load(function(){
	imgRealWidth = $("#backgroupdImg").width();
	imgRealHeight = $("#backgroupdImg").height();
	setImgBG();
});

$(window).resize(function(){
	setImgBG();
});

function setImgBG(){
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var setHeight = windowHeight;
	
	//当窗口宽度小于800时，图片的宽度不在变化，图片有最小的宽度800
	var minImgWidth = 800;
	if(windowWidth < minImgWidth){
		$("#backgroupdImg").css({top:"0", bottom:"0"});
		$("#backgroupdImg").width(minImgWidth);
		$("#backgroupdImg").height((minImgWidth/imgRealWidth)* imgRealHeight);
		return;
	}
	//当窗口宽度大于800，要将图片等比缩放。
	$("#backgroupdImg").css("width", "100%");
	$("#backgroupdImg").css("height", "");
	var imgWidth = $("#backgroupdImg").width();
	var imgHeight = $("#backgroupdImg").height();
	//如果窗口的高度大于750，则计算页面的高度，保证一个页面铺整个图片
	if(windowHeight > 750){
		$("#backgroupdImg").css({top:"0", bottom:""});
		setBodyHeight = windowHeight;
		/*
		if(imgHeighttmp != 0){
			var minHeight = 750;
			if(minHeight > imgHeighttmp){
				imgHeighttmp = minHeight + 50;
				var top = ($(document).height() - imgHeight)/2;
				$("#backgroupdImg").css({top:top, left:left});
			}else{
				imgHeighttmp = minHeight + 50;
			}
			setHeight = imgHeighttmp;
		}
		*/
	}else{
		//如果窗口高度小于了750，则可以滚动显示整个页面
		var setBodyHeight = 0;
		//设置大图片是的绝对位置
		$("#backgroupdImg").css({top:"0", bottom:""});
		setBodyHeight = imgHeight;

		//如果屏幕的高度已经大于了要设置的高度，则图片的高度要拉扯
		if(windowHeight > setBodyHeight){
			$("#backgroupdImg").height(windowHeight);
			setBodyHeight = windowHeight;
		}else{
			//如果当前 setBodyHeight 比 弹窗的高度小的话，要进行高度补充、
			var minHeight = 50;
			try{
				//获取当前页面的可能的最小高度=弹窗的位移点+高度（包括边框）
				minHeight += $(".wid_950 div:eq(0)").offset().top + $(".wid_950 div:eq(0)").outerHeight();
			}catch(e){
			}
			if(setBodyHeight < minHeight){
				setBodyHeight = minHeight + 50;
			}
			$("#backgroupdImg").height(setBodyHeight);
		}
		
	}
	$("body, #body").height(setBodyHeight);
}

$(document).ready(function(){
	ie6Tips();
});

function setPage1($navigator,$imgobjectDiv){
	$navigator.find("a").bind("click", function(){
		$("div[id^=href]").hide();
		$navigator.find("a").css("color", "");
		$(this).css("color", "#d1b272");
		var current = $(this).attr("pos");
		var $currentObj = $("div[id^=href]").eq(current-1);
		$currentObj.show();
		setImgSlides1($currentObj.find('div[name=slides]'), $currentObj.find("span[name=icoleft]"), $currentObj.find("span[name=icoright]"));
		return false;
	});
	$navigator.find("a").eq(0).click();
	setslidesContainerAEvent($imgobjectDiv);
}

function setPage2($navigator,$imgobjectDiv, height){
	$navigator.find("a").bind("click", function(){
		$("div[id^=href]").hide();
		$navigator.find("a").css("color", "");
		$(this).css("color", "#d1b272");
		var current = $(this).attr("pos");
		var $currentObj = $("div[id=href"+current+"]");
		$currentObj.show();
		setImgSlides1($currentObj.find('div[name=slides]'), $currentObj.find("span[name=icoleft]"), $currentObj.find("span[name=icoright]"));
		
		$currentObj = $("div[id=href"+current+"] div[name=scroll]");
		setScroll($currentObj, height);
		return false;
	});
	$navigator.find("a").eq(0).click();
	setslidesContainerAEvent($imgobjectDiv);
	$(".slides_container img").show();
}


function setPageForNews($menu3,  height){
	//设置4级菜单
	var $menu4 = $(".menu4");
	$menu4.find("a").bind("click", function(){
		$("div[name^=_href]").hide();
		//设置字体颜色
		$menu4.find("a").css("color", "");
		$(this).css("color", "#d1b272");
		//获取控制的对象
		var current = $(this).attr("pos");
		
		var $controlObj = $(this).parents("div[id^=href]").find("div[name=_href"+current+"]");
		//显示
		$controlObj.show();
		//设置当前控制对象中的图片
		setImgSlides1($controlObj.find('div[name=slides]'), $controlObj.find("span[name=icoleft]"), $controlObj.find("span[name=icoright]"));
		
		var $scrollObj = $controlObj.find("div[name=scroll]");
		setScroll($scrollObj, height);
		if($scrollObj.find(".mCSB_scrollTools").css("display") == "block"){
			$(this).parents(".layleft1").removeClass("xian");
		}else{
			$(this).parents(".layleft1").addClass("xian");
		}
		return false;
	});
	//设置三级菜单
	$menu3.find("a").bind("click", function(){
		$("div[id^=href]").hide();
		//设置字体颜色
		$menu3.find("a").css("color", "");
		$(this).css("color", "#d1b272");
		//获取控制的对象
		var current = $(this).attr("pos");
		var $controlObj = $("div[id=href"+current+"]");
		//显示
		$controlObj.show();
		//如果有四级菜单，让四级菜单显示
		if($controlObj.find(".menu4").length > 0){
			$controlObj.find(".menu4 a").eq(0).click();
		}else{
			setImgSlides1($controlObj.find('div[name=slides]'), $controlObj.find("span[name=icoleft]"), $controlObj.find("span[name=icoright]"));
		}
		return false;
	});
	$menu3.find("a").eq(0).click();
	setslidesContainerAEvent($("div[id^=href]"));
	$(".slides_container img").show();
}

function setslidesContainerAEvent($imgobjectDiv){
	$imgobjectDiv.find(".slides_container a").bind("click", function(){
		
		var imggroup = $(this).attr("imggroup");
		if((typeof(imggroup)=='undefined') || (imggroup == "") ){
			imggroup = "";
		}
		var index =$(this).parents(".slides_container").find("a").index($(this));
		if(typeof(index)=='undefined'){
			index=0;
		}
		$(".wid_950 .layer, .wid_950 .layer_lx").hide();
		set580ImgDiv(index, imggroup);
		
		return false;
	});
}

function setslidesContainerAEventold($imgobjectDiv){
	$imgobjectDiv.find(".slides_container a").bind("click", function(){
		var $imgs= $("#img220 img");
		var imggroup = $(this).attr("imggroup");
		
		if((typeof(imggroup)!='undefined') && (imggroup != "") ){
			$imgs = $("#img180_"+imggroup + " img");
		}else{
			imggroup = "";
		}
		
		var imgs = [], imgdes = [];
		$imgs.each(function(i){
			imgs[i]=$(this).attr("src");
			imgdes[i]=$(this).attr("desc");
		});
		$(".wid_950 .layer, .wid_950 .layer_lx").hide();
		imgCarouselDiv(imgs, imgdes, "图片", imggroup);
		return false;
	});
}

function setScroll($obj, height){
	if($obj.height() > height){
		$obj.parent().removeClass("xian");
		$obj.height(height);
		scrollObj($obj);
		return true;
	}
	return false;
}

function setScroll2($obj, height){
	if($obj.height() > height){
		$obj.removeClass("xian");
		$obj.height(height);
		scrollObj($obj);
	}
}

function scrollObj($obj){
	$obj.mCustomScrollbar({
		autoDraggerLength:false,
		scrollEasing:"easeOutQuint",
		scrollInertia:50,
		scrollButtons:{
			enable:true
		}
	});
};


/**
设置图片切换
*/
function setImgSlides1($obj, $left, $right, param){
	if($obj.find(".next").length > 0){
		return;
	}
	if($obj.find("img").length < 2){
		return;
	}
	
	if (typeof(param)=="undefined"){
		param = {
			generateNextPrev: true,
			generatePagination: false
		};
	}
	
	$obj.slides(param);
	setBtn(-1);
	$left.bind("click", function(){
		if(!($obj.find("img").index($obj.find("img:visible")) <= 0)){
			$obj.find(".prev").click();
		}
		setBtn(200);
		return false;
	});
	$right.bind("click", function(){
		if(!($obj.find("img").index($obj.find("img:visible")) == ($obj.find("img").length-1))){
			$obj.find(".next").click();
		}
		setBtn(200);
		return false;
	});
	
	function setBtn(time){
		setTimeout(function(){
			var current = $obj.find("img").index($obj.find("img:visible"));
			if(current <= 0){
				$left.removeClass("icoleft").addClass("icoleft_no");
			}else{
				$left.removeClass("icoleft_no").addClass("icoleft");
			}
			
			if(current >= ($obj.find("img").length-1)){
				$right.removeClass("icoright").addClass("icoright_no");
			}else{
				$right.removeClass("icoright_no").addClass("icoright");
			}
		}, time);
	}
}

/**
设置图片左右滚动切换
*/
var imgIndex = 0;
function setImgCarousel1($slider, $left, $right){
	var minImgLength = 4;

	var imgLength = $slider.find("li").length;
	var sliderImgWidth = $slider.find("li").width();
	$slider.width(imgLength * sliderImgWidth);
	
	setBtn();
	if(imgLength <= minImgLength){
		return;
	}
	
	$left.bind("click", function(){
		if(imgIndex <= 0){
			return false;
		}
		imgIndex--;
		$slider.animate({left: '+=' + sliderImgWidth + 'px'}, 'slow');
		setBtn();
		return false;
	});
	
	$right.bind("click", function(){
		if (imgLength <= minImgLength || imgIndex >= imgLength - minImgLength) {
			return false;
		}
		imgIndex++;
		$slider.animate({left: '-=' + sliderImgWidth + 'px'}, 'slow');
		setBtn();
		return false;
	});
	
	function setBtn(time){
		setTimeout(function(){
			if(imgIndex <= 0){
				$left.removeClass("icoleft").addClass("icoleft_no");
			}else{
				$left.removeClass("icoleft_no").addClass("icoleft");
			}
			if((imgLength <= minImgLength) || (imgIndex >= (imgLength - minImgLength))){
				$right.removeClass("icoright").addClass("icoright_no");
			}else{
				$right.removeClass("icoright_no").addClass("icoright");
			}
		}, time);
		
	}
}

/**
弹出浮层，一堆图片
*/
function imgCarouselDiv(imgs, imgDess, title, imggroup){
	$(".wid_950 #imgCarouselDiv").remove();
	var templet = '<div id="imgCarouselDiv" class="layer layer_2">'
			+'<strong></strong>'
			+'<span name="icoleft" class="icoleft"></span>'
			+'<div class="flo_l">'
			+'<ul name="imgCarousel">'
			+'</ul>'
			+'</div>'
			+'<span name="icoright" class="icoright"></span>'
			+'</div>';
	$(".wid_950").append($(templet));
	$.each(imgs, function(i, n){
		$("#imgCarouselDiv ul[name=imgCarousel]").append('<li><a href="#" pos='+i+'><img src="'+n+'" /></a><a href="#">'+imgDess[i]+'</a></li>');
	});
	//$("#imgCarouselDiv strong").text(title);
	setImgCarousel1($("#imgCarouselDiv ul[name=imgCarousel]"),$("#imgCarouselDiv span[name=icoleft]"), $("#imgCarouselDiv span[name=icoright]"));
	
	$("#imgCarouselDiv ul[name=imgCarousel] li a[pos]").bind("click" ,function(){
		$("#imgCarouselDiv").hide();
		var index = $(this).attr("pos");
		set580ImgDiv(index, imggroup);
		return false;
	});
	$("#imgCarouselDiv ul[name=imgCarousel] li a").bind("click" ,function(){
		return false;
	});
}


var currentIndex = 0;
var intervalId580Img = null;
function set580ImgDiv(index, imggroup){
	currentIndex = index;
	var $580DivImgs = $("#img580 div");
	
	//判断数据来源
	if((typeof(imggroup) != 'undefined') && (imggroup != "")){
		$580DivImgs = $("#img600_"+imggroup+" div");
	}
	
	var $580DivImg = $580DivImgs.eq(index);
	
	var title = $580DivImg.find("title").text();
	var des = $580DivImg.find("span").text();
	var strongClass = "";
	
	var templet = '<div id="580ImgDiv" class="layer layer_5">'
				+'<div class="layleft flo_l">'
				+'<div class="leftcontent">'
				+'<h2>'+title+'</h2>'
				+'<p>'+des+'</p>'
				+'</div>'
				+'</div>'
				+'<div class="return"><a href="#"><img src="../img/back.png"></a></div>'
				+'<div class="layright flo_l">'
				+'<div name="slides">'
				+'<span name="icoleft" class="icoleft"></span>'
				+'<ul name="580imgs" class="slides_container">'
				+'</ul>'
				+'<span name="icoright" class="icoright"></span>'
				+'</div>'
				+'</div>'
				+'</div>';
	
	$(".wid_950 #580ImgDiv").remove();
	$(".wid_950").append($(templet));
	
	$("#580ImgDiv ul[name=580imgs]").append('<li style="text-align:center"><a href="#"><img class="imgheight400" src="'+$580DivImg.find("img").attr("src")+'" /></a></li>');

	var maxLength = $580DivImgs.length;
	//setBtn();
	$("#580ImgDiv span[name=icoleft]").bind("click", function(){
		clearInterval(intervalId580Img);
		setContent(--currentIndex);
		//setBtn();
		return false;
	});
	$("#580ImgDiv span[name=icoright]").bind("click", function(){
		clearInterval(intervalId580Img);
		setContent(++currentIndex);
		//setBtn();
		return false;
	});
	
	//设置定时
	setTimeout(function(){
		intervalId580Img = setInterval(function(){
			setContent(++currentIndex);
		},5000);
	},2000);
	
	//设置返回按钮
	$("#580ImgDiv .return a").bind("click", function(){
		$("#580ImgDiv").hide();
		$(".wid_950 div:eq(0)").show();
		return false;
	});
	
	//更新数据内容
	function setContent(currentIndex){
		var indexTmp = currentIndex%maxLength;
		if(indexTmp < 0){
			indexTmp = maxLength+indexTmp;
		}
		$("#580ImgDiv h2").html($580DivImgs.eq(indexTmp).find("title").text());
		$("#580ImgDiv p").html($580DivImgs.eq(indexTmp).find("span").text());
		$("#580ImgDiv ul[name=580imgs] img").attr("src", $580DivImgs.eq(indexTmp).find("img").attr("src"));
	}
	
	$("#580ImgDiv ul[name=580imgs] li a").bind("click" ,function(){
		return false;
	});
	
	function setBtn(){
		if(currentIndex <= 0){
			$("#580ImgDiv span[name=icoleft]").removeClass("icoleft").addClass("icoleft_no");
		}else{
			$("#580ImgDiv span[name=icoleft]").removeClass("icoleft_no").addClass("icoleft");
		}
		
		if(currentIndex >= (maxLength - 1)){
			$("#580ImgDiv span[name=icoright]").removeClass("icoright").addClass("icoright_no");
		}else{
			$("#580ImgDiv span[name=icoright]").removeClass("icoright_no").addClass("icoright");
		}
		
	}
}

/**
背景图片的切换
*/

function setGBSLide1(){
	setGBSLideCor($("#backgroupDiv"),$("span[name=bgicoleft]"),$("span[name=bgicoright]"));
	setAutoPlay($("#backgroupDiv"));
}

var gBSLideIntervalId=null;
var gBSLideTimeoutId=null;
function setAutoPlay($obj){
	gBSLideTimeoutId = setTimeout(function(){
		gBSLideIntervalId = setInterval(function(){
			clearTimeout(gBSLideTimeoutId);
			$obj.find(".next").click();
		},7000);
	},5000);
}

function setGBSLideCor($obj, $left, $right, param){
	if (typeof(param)=="undefined"){
		param = {
			generateNextPrev: true,
			generatePagination: false,
			fadeSpeed:300,
			slideSpeed:300,
			effect:'fade'
		};
	}
	
	$obj.slides(param);
	
	$left.bind("click", function(){
		clearInterval(gBSLideIntervalId);
		clearTimeout(gBSLideTimeoutId);
		$obj.find(".prev").click();
		setAutoPlay($("#backgroupDiv"));
		return false;
	});
	$right.bind("click", function(){
		clearInterval(gBSLideIntervalId);
		clearTimeout(gBSLideTimeoutId);
		$obj.find(".next").click();
		setAutoPlay($("#backgroupDiv"));
		return false;
	});
}

var currentBigIndex = 0;
function setbigImgDiv(index){
	currentBigIndex = index;
	var $bigDivImgs = $("#bigImgs div");
	var $580DivImg = $bigDivImgs.eq(index);
	
	var title = $580DivImg.find("title").text();
	var des = $580DivImg.find("span").text();
	var templet = '<div id="bigImgDiv" class="layer layer_5">'
				+'<div class="layleft flo_l">'
				+'<div class="leftcontent">'
				+'<h2>'+title+'</h2>'
				+'<p>'+des+'</p>'
				+'</div>'
				+'</div>'
				+'<div class="layright flo_l">'
				+'<div name="slides">'
				+'<span name="icoleft" class="icoleft"></span>'
				+'<ul name="580imgs" class="slides_container">'
				+'</ul>'
				+'<span name="icoright" class="icoright"></span>'
				+'</div>'
				+'</div>'
				+'</div>';
	
	$(".wid_950 #bigImgDiv").remove();
	$(".wid_950").append($(templet));
	
	$("#bigImgDiv ul[name=580imgs]").append('<li style="text-align:center"><a href="#"><img class="imgheight400" src="'+$580DivImg.find("img").attr("src")+'" /></a></li>');
	
	var maxLength = $bigDivImgs.length;
	setBtn();
	$("#bigImgDiv span[name=icoleft]").bind("click", function(){
		if(currentBigIndex <= 0){
			return false;
		}
		currentBigIndex--;
		$("#bigImgDiv h2").html($bigDivImgs.eq(currentBigIndex).find("title").text());
		$("#bigImgDiv p").html($bigDivImgs.eq(currentBigIndex).find("span").text());
		$("#bigImgDiv ul[name=580imgs] img").attr("src", $bigDivImgs.eq(currentBigIndex).find("img").attr("src"));
		setBtn();
		return false;
	});
	$("#bigImgDiv span[name=icoright]").bind("click", function(){
		if(currentBigIndex >= (maxLength - 1)){
			return false;
		}
		currentBigIndex++;
		$("#bigImgDiv h2").html($bigDivImgs.eq(currentBigIndex).find("title").text());
		$("#bigImgDiv p").html($bigDivImgs.eq(currentBigIndex).find("span").text());
		$("#bigImgDiv ul[name=580imgs] img").attr("src", $bigDivImgs.eq(currentBigIndex).find("img").attr("src"));
		setBtn();
		return false;
	});
	
	$("#bigImgDiv ul[name=580imgs] li a").bind("click" ,function(){
		return false;
	});
	
	function setBtn(){
		if(currentBigIndex <= 0){
			$("#bigImgDiv span[name=icoleft]").removeClass("icoleft").addClass("icoleft_no");
		}else{
			$("#bigImgDiv span[name=icoleft]").removeClass("icoleft_no").addClass("icoleft");
		}
		
		if(currentBigIndex >= (maxLength - 1)){
			$("#bigImgDiv span[name=icoright]").removeClass("icoright").addClass("icoright_no");
		}else{
			$("#bigImgDiv span[name=icoright]").removeClass("icoright_no").addClass("icoright");
		}
		
	}
}

var imgReady = (function () {
	var list = [], intervalId = null,

	// 用来执行队列
	tick = function () {
		var i = 0;
		for (; i < list.length; i++) {
			list[i].end ? list.splice(i--, 1) : list[i]();
		};
		!list.length && stop();
	},
	// 停止所有定时器队列
	stop = function () {
		clearInterval(intervalId);
		intervalId = null;
	};
	return function (url, ready, load, error) {
		var onready, width, height, newWidth, newHeight,
		img = new Image();
		img.src = url;

		// 如果图片被缓存，则直接返回缓存数据
		if (img.complete) {
			ready.call(img);
			load && load.call(img);
			return;
		};
	   
		width = img.width;
		height = img.height;

		// 加载错误后的事件
		img.onerror = function () {
			error && error.call(img);
			onready.end = true;
			img = img.onload = img.onerror = null;
		};
	   
		// 图片尺寸就绪
		onready = function () {
			newWidth = img.width;
			newHeight = img.height;
			if (newWidth !== width || newHeight !== height ||
				// 如果图片已经在其他地方加载可使用面积检测
				newWidth * newHeight > 1024
			) {
				ready.call(img);
				onready.end = true;
			};
		};
		onready();
	   
		// 完全加载完毕的事件
		img.onload = function () {
			// onload在定时器时间差范围内可能比onready快
			// 这里进行检查并保证onready优先执行
			!onready.end && onready();

			load && load.call(img);
		   
			// IE gif动画会循环执行onload，置空onload即可
			img = img.onload = img.onerror = null;
		};
		// 加入队列中定期执行
		if (!onready.end) {
			list.push(onready);
			// 无论何时只允许出现一个定时器，减少浏览器性能损耗
			if (intervalId === null) intervalId = setInterval(tick, 40);
		};
	};
})();

function ie6Tips(){
	if(checkIE6()){
		if($("#ie6tips").length < 1){
			var html = "<div id='ie6tips'><div class='detail'><p>由于你正在使用IE6浏览器，建议你立即升级到以下最新浏览器，以获得更好的产品体验。</p><p><a href='http://download.microsoft.com/download/4/1/8/418981a4-6ef9-4de6-befc-1a53e886cb62/IE7-WindowsXP-x86-chs.exe' target='_blank' >Internet Explorer 8</a><span>|</span><a href='http://download.ie.sogou.com/se/sogou_explorer_4.0t.exe' target='_blank' >搜狗浏览器</a><span>|</span><a href='http://down.360safe.com/se/360se6_setup.exe' target='_blank'>360安全浏览器</a><span>|</span><a href='火狐浏览器：' target='_blank'>百度浏览器</a><span>|</span><a href='http://download.firefox.com.cn/releases/webins3.0/official/zh-CN/Firefox-latest.exe' target='_blank'>火狐浏览器</a></p></div></div>";
			$(html).insertBefore($(".object"));
			$("#ie6tips").bind("click", function(){
				$(this).hide("slow");
			});
			$("#ie6tips .detail").bind("click", function(e){
				e.stopPropagation(); 
			});
		}
	}
}

function checkIE6(){
	var nav = navigator.userAgent;
	$('body').append('<div style="display:none">'+nav+'</b>')
	if (/MSIE [78]/.test(nav)) 
		return false;
	if (/MSIE [56]/.test(nav)) 
		return true;
	return false;
}

function popBook(booklist, startNum){
	if($("#mybookParent").length > 0){
		$("#mybookParent").remove();
	}
	//设置隐藏的obj
	var $hideobj = $(".wid_950 div:eq(0), .wid_1050")
	//div的展示容器
	var $contain = $(".wid_950");
	//模板
	var booktemplet = $('<div class="layer layebook" id="mybookParent">\
		<div id="mybook" class="layleft1">\
		<div class="content_img flo_l">\
			<span name="icoleft" class="icoleft"></span>\
			<div name="slides" class="lb_img" style="overflow:hidden;"><div class="slides_container"></div></div>\
			<span name="icoright" class="icoright"></span>\
		</div>\
		</div>\
		<div class="nav clear"></div>\
		<div id="return"><a href="#">返回</a></div>\
		</div>');
	//绑定返回事件
	booktemplet.find("#return a").bind("click", function(){
		$("#mybookParent").remove();
		$hideobj.show();
		return false;
	});
	
	// 创造出一个图书对象，然后设置图片内容，并展示出来
	var $book=booktemplet.clone(true);
	$.each(booklist, function(i, n){
		if (i==0){
			$book.find('.slides_container').append('<a href="#"><img src="'+n+'" class="imgwidth870" /></a>');
		}else{
			$book.find('.slides_container').append('<a href="#"><img src="'+n+'" class="imgwidth870" style="display:none" /></a>');
		}
	});
	$hideobj.hide();
	$contain.append($book);
	
	
	//绑定图书翻页效果
	$controlObj = $book.find("#mybook");
	param = {
		generateNextPrev: true,
		generatePagination: true,
		start: startNum
	};
	setImgSlides1($controlObj.find('div[name=slides]'), $controlObj.find("span[name=icoleft]"), $controlObj.find("span[name=icoright]"), param);
	$controlObj.find(".slides_container img").show();
	$book.find(".nav").append($controlObj.find(".pagination").clone(true));
	$book.find(".nav .pagination li a").bind("click", function(){
		$(this).parent().parent().find("li").removeClass();
		$(this).parent().addClass("current");
	});
}
