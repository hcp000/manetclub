(function(g){var n={init:function(b){b=g.extend(!0,{set_width:!1,set_height:!1,horizontalScroll:!1,scrollInertia:550,scrollEasing:"easeOutCirc",mouseWheel:"pixels",mouseWheelPixels:60,autoDraggerLength:!0,scrollButtons:{enable:!1,scrollType:"continuous",scrollSpeed:20,scrollAmount:40},advanced:{updateOnBrowserResize:!0,updateOnContentResize:!1,autoExpandHorizontalScroll:!1,autoScrollOnFocus:!0},callbacks:{onScrollStart:function(){},onScroll:function(){},onTotalScroll:function(){},onTotalScrollBack:function(){},
onTotalScrollOffset:0,whileScrolling:!1,whileScrollingInterval:30}},b);g(document).data("mCS-is-touch-device",!1);"ontouchstart"in window&&g(document).data("mCS-is-touch-device",!0);return this.each(function(){var a=g(this);b.set_width&&a.css("width",b.set_width);b.set_height&&a.css("height",b.set_height);if(g(document).data("mCustomScrollbar-index")){var f=parseInt(g(document).data("mCustomScrollbar-index"));g(document).data("mCustomScrollbar-index",f+1)}else g(document).data("mCustomScrollbar-index",
"1");a.wrapInner("<div class='mCustomScrollBox' id='mCSB_"+g(document).data("mCustomScrollbar-index")+"' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_"+g(document).data("mCustomScrollbar-index"));var c=a.children(".mCustomScrollBox");b.horizontalScroll?(c.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />"),f=c.children(".mCSB_h_wrapper"),f.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({width:f.children().outerWidth(),
position:"relative"}).unwrap()):c.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />");var h=c.children(".mCSB_container");g(document).data("mCS-is-touch-device")&&h.addClass("mCS_touch");h.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer' style='position:relative;'><div class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
var f=c.children(".mCSB_scrollTools"),e=f.children(".mCSB_draggerContainer").children(".mCSB_dragger");b.horizontalScroll?e.data("minDraggerWidth",e.width()):e.data("minDraggerHeight",e.height());b.scrollButtons.enable&&(b.horizontalScroll?f.prepend("<a class='mCSB_buttonLeft' style='display:block; position:relative;'></a>").append("<a class='mCSB_buttonRight' style='display:block; position:relative;'></a>"):f.prepend("<a class='mCSB_buttonUp' style='display:block; position:relative;'></a>").append("<a class='mCSB_buttonDown' style='display:block; position:relative;'></a>"));
c.bind("scroll",function(){a.is(".mCS_disabled")||c.scrollTop(0).scrollLeft(0)});a.data({mCS_Init:!0,horizontalScroll:b.horizontalScroll,scrollInertia:b.scrollInertia,scrollEasing:b.scrollEasing,mouseWheel:b.mouseWheel,mouseWheelPixels:b.mouseWheelPixels,autoDraggerLength:b.autoDraggerLength,scrollButtons_enable:b.scrollButtons.enable,scrollButtons_scrollType:b.scrollButtons.scrollType,scrollButtons_scrollSpeed:b.scrollButtons.scrollSpeed,scrollButtons_scrollAmount:b.scrollButtons.scrollAmount,autoExpandHorizontalScroll:b.advanced.autoExpandHorizontalScroll,
autoScrollOnFocus:b.advanced.autoScrollOnFocus,onScrollStart_Callback:b.callbacks.onScrollStart,onScroll_Callback:b.callbacks.onScroll,onTotalScroll_Callback:b.callbacks.onTotalScroll,onTotalScrollBack_Callback:b.callbacks.onTotalScrollBack,onTotalScroll_Offset:b.callbacks.onTotalScrollOffset,whileScrolling_Callback:b.callbacks.whileScrolling,whileScrolling_Interval:b.callbacks.whileScrollingInterval,bindEvent_scrollbar_click:!1,bindEvent_mousewheel:!1,bindEvent_focusin:!1,bindEvent_buttonsContinuous_y:!1,
bindEvent_buttonsContinuous_x:!1,bindEvent_buttonsPixels_y:!1,bindEvent_buttonsPixels_x:!1,bindEvent_scrollbar_touch:!1,bindEvent_content_touch:!1,mCSB_buttonScrollRight:!1,mCSB_buttonScrollLeft:!1,mCSB_buttonScrollDown:!1,mCSB_buttonScrollUp:!1,whileScrolling:!1}).mCustomScrollbar("update");b.horizontalScroll?"none"!==a.css("max-width")&&(b.advanced.updateOnContentResize||(b.advanced.updateOnContentResize=!0),a.data({mCS_maxWidth:parseInt(a.css("max-width")),mCS_maxWidth_Interval:setInterval(function(){parseInt(a.css("width"))>
a.data("mCS_maxWidth")&&(clearInterval(a.data("mCS_maxWidth_Interval")),a.mCustomScrollbar("update"))},150)})):"none"!==a.css("max-height")&&a.data({mCS_maxHeight:parseInt(a.css("max-height")),mCS_maxHeight_Interval:setInterval(function(){c.css("max-height",a.data("mCS_maxHeight"));parseInt(a.css("height"))>a.data("mCS_maxHeight")&&(clearInterval(a.data("mCS_maxHeight_Interval")),a.mCustomScrollbar("update"))},150)});if(b.advanced.updateOnBrowserResize){var k;g(window).resize(function(){k&&clearTimeout(k);
k=setTimeout(function(){!a.is(".mCS_disabled")&&!a.is(".mCS_destroyed")&&a.mCustomScrollbar("update")},150)})}if(b.advanced.updateOnContentResize){var j=b.horizontalScroll?h.outerWidth():h.outerHeight();setInterval(function(){if(b.horizontalScroll){b.advanced.autoExpandHorizontalScroll&&h.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:h.outerWidth(),position:"relative"}).unwrap();var d=h.outerWidth()}else d=
h.outerHeight();d!=j&&(a.mCustomScrollbar("update"),j=d)},300)}})},update:function(){var b=g(this),a=b.children(".mCustomScrollBox"),f=a.children(".mCSB_container");f.removeClass("mCS_no_scrollbar");b.removeClass("mCS_disabled mCS_destroyed");a.scrollTop(0).scrollLeft(0);var c=a.children(".mCSB_scrollTools"),h=c.children(".mCSB_draggerContainer"),e=h.children(".mCSB_dragger");if(b.data("horizontalScroll")){var k=c.children(".mCSB_buttonLeft"),j=c.children(".mCSB_buttonRight"),d=a.width();b.data("autoExpandHorizontalScroll")&&
f.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:f.outerWidth(),position:"relative"}).unwrap();var l=f.outerWidth()}else var r=c.children(".mCSB_buttonUp"),m=c.children(".mCSB_buttonDown"),q=a.height(),p=f.outerHeight();p>q&&!b.data("horizontalScroll")?(c.css("display","block"),d=h.height(),g.browser.msie&&"7.0"==g.browser.version&&(b.data("scrollButtons_enable")&&d==c.height())&&(r=c.children(".mCSB_buttonUp"),
m=c.children(".mCSB_buttonDown"),d=d-m.height()-m.height(),h.height(d)),b.data("autoDraggerLength")&&(l=Math.round(q/p*d),c=e.data("minDraggerHeight"),l<=c?e.css({height:c}):l>=d-10?e.css({height:d-10}):e.css({height:l}),e.children(".mCSB_dragger_bar").css({"line-height":e.height()+"px"})),l=e.height(),b.data("scrollAmount",(p-q)/(d-l)).mCustomScrollbar("scrolling",a,f,h,e,r,m,k,j),a=Math.abs(Math.round(f.position().top)),b.mCustomScrollbar("scrollTo",a,{callback:!1})):l>d&&b.data("horizontalScroll")?
(c.css("display","block"),q=h.width(),b.data("autoDraggerLength")&&(p=Math.round(d/l*q),c=e.data("minDraggerWidth"),p<=c?e.css({width:c}):p>=q-10?e.css({width:q-10}):e.css({width:p})),p=e.width(),b.data("scrollAmount",(l-d)/(q-p)).mCustomScrollbar("scrolling",a,f,h,e,r,m,k,j),a=Math.abs(Math.round(f.position().left)),b.mCustomScrollbar("scrollTo",a,{callback:!1})):(a.unbind("mousewheel focusin"),b.data("horizontalScroll")?e.add(f).css("left",0):e.add(f).css("top",0),c.css("display","none"),f.addClass("mCS_no_scrollbar"),
b.data({bindEvent_mousewheel:!1,bindEvent_focusin:!1}))},scrolling:function(b,a,f,c,h,e,k,j){var d=g(this);d.mCustomScrollbar("callbacks","whileScrolling");if(!c.hasClass("ui-draggable")){var l=d.data("horizontalScroll")?"x":"y";c.draggable({axis:l,containment:"parent",drag:function(){d.mCustomScrollbar("scroll");c.addClass("mCSB_dragger_onDrag")},stop:function(){c.removeClass("mCSB_dragger_onDrag")}})}d.data("bindEvent_scrollbar_click")||(f.bind("click",function(a){if(d.data("horizontalScroll")){if(a=
a.pageX-f.offset().left,a<c.position().left||a>c.position().left+c.width())a>=f.width()-c.width()&&(a=f.width()-c.width()),c.css("left",a),d.mCustomScrollbar("scroll")}else if(a=a.pageY-f.offset().top,a<c.position().top||a>c.position().top+c.height())a>=f.height()-c.height()&&(a=f.height()-c.height()),c.css("top",a),d.mCustomScrollbar("scroll")}),d.data({bindEvent_scrollbar_click:!0}));if(d.data("mouseWheel")){var r=d.data("mouseWheel");"auto"===d.data("mouseWheel")&&(r=8,l=navigator.userAgent,-1!=
l.indexOf("Mac")&&(-1!=l.indexOf("Safari")&&-1!=l.indexOf("AppleWebKit")&&-1==l.indexOf("Chrome"))&&(r=1));d.data("bindEvent_mousewheel")||(b.bind("mousewheel",function(b,g){b.preventDefault();var e=Math.abs(g*r);if(d.data("horizontalScroll"))if("pixels"===d.data("mouseWheel"))g=0>g?-1:1,e=Math.abs(Math.round(a.position().left))-g*d.data("mouseWheelPixels"),d.mCustomScrollbar("scrollTo",e);else{e=c.position().left-g*e;c.css("left",e);0>c.position().left&&c.css("left",0);var e=f.width(),h=c.width();
c.position().left>e-h&&c.css("left",e-h);d.mCustomScrollbar("scroll")}else"pixels"===d.data("mouseWheel")?(g=0>g?-1:1,e=Math.abs(Math.round(a.position().top))-g*d.data("mouseWheelPixels"),d.mCustomScrollbar("scrollTo",e)):(e=c.position().top-g*e,c.css("top",e),0>c.position().top&&c.css("top",0),e=f.height(),h=c.height(),c.position().top>e-h&&c.css("top",e-h),d.mCustomScrollbar("scroll"))}),d.data({bindEvent_mousewheel:!0}))}if(d.data("scrollButtons_enable"))if("pixels"===d.data("scrollButtons_scrollType")){var m;
g.browser.msie&&9>parseInt(g.browser.version)&&d.data("scrollInertia",0);d.data("horizontalScroll")?(j.add(k).unbind("mousedown touchstart onmsgesturestart mouseup mouseout touchend onmsgestureend",q,p),d.data({bindEvent_buttonsContinuous_x:!1}),d.data("bindEvent_buttonsPixels_x")||(j.bind("click",function(b){b.preventDefault();a.is(":animated")||(m=Math.abs(a.position().left)+d.data("scrollButtons_scrollAmount"),d.mCustomScrollbar("scrollTo",m))}),k.bind("click",function(b){b.preventDefault();a.is(":animated")||
(m=Math.abs(a.position().left)-d.data("scrollButtons_scrollAmount"),a.position().left>=-d.data("scrollButtons_scrollAmount")&&(m="left"),d.mCustomScrollbar("scrollTo",m))}),d.data({bindEvent_buttonsPixels_x:!0}))):(e.add(h).unbind("mousedown touchstart onmsgesturestart mouseup mouseout touchend onmsgestureend",q,p),d.data({bindEvent_buttonsContinuous_y:!1}),d.data("bindEvent_buttonsPixels_y")||(e.bind("click",function(b){b.preventDefault();a.is(":animated")||(m=Math.abs(a.position().top)+d.data("scrollButtons_scrollAmount"),
d.mCustomScrollbar("scrollTo",m))}),h.bind("click",function(b){b.preventDefault();a.is(":animated")||(m=Math.abs(a.position().top)-d.data("scrollButtons_scrollAmount"),a.position().top>=-d.data("scrollButtons_scrollAmount")&&(m="top"),d.mCustomScrollbar("scrollTo",m))}),d.data({bindEvent_buttonsPixels_y:!0})))}else if(d.data("horizontalScroll")){if(j.add(k).unbind("click"),d.data({bindEvent_buttonsPixels_x:!1}),!d.data("bindEvent_buttonsContinuous_x")){j.bind("mousedown touchstart onmsgesturestart",
function(b){b.preventDefault();b.stopPropagation();d.data({mCSB_buttonScrollRight:setInterval(function(){var b=Math.round((Math.abs(Math.round(a.position().left))+d.data("scrollButtons_scrollSpeed"))/d.data("scrollAmount"));d.mCustomScrollbar("scrollTo",b,{moveDragger:!0})},30)})});var q=function(a){a.preventDefault();a.stopPropagation();clearInterval(d.data("mCSB_buttonScrollRight"))};j.bind("mouseup touchend onmsgestureend mouseout",q);k.bind("mousedown touchstart onmsgesturestart",function(b){b.preventDefault();
b.stopPropagation();d.data({mCSB_buttonScrollLeft:setInterval(function(){var b=Math.round((Math.abs(Math.round(a.position().left))-d.data("scrollButtons_scrollSpeed"))/d.data("scrollAmount"));d.mCustomScrollbar("scrollTo",b,{moveDragger:!0})},30)})});var p=function(a){a.preventDefault();a.stopPropagation();clearInterval(d.data("mCSB_buttonScrollLeft"))};k.bind("mouseup touchend onmsgestureend mouseout",p);d.data({bindEvent_buttonsContinuous_x:!0})}}else e.add(h).unbind("click"),d.data({bindEvent_buttonsPixels_y:!1}),
d.data("bindEvent_buttonsContinuous_y")||(e.bind("mousedown touchstart onmsgesturestart",function(b){b.preventDefault();b.stopPropagation();d.data({mCSB_buttonScrollDown:setInterval(function(){var b=Math.round((Math.abs(Math.round(a.position().top))+d.data("scrollButtons_scrollSpeed"))/d.data("scrollAmount"));d.mCustomScrollbar("scrollTo",b,{moveDragger:!0})},30)})}),e.bind("mouseup touchend onmsgestureend mouseout",function(a){a.preventDefault();a.stopPropagation();clearInterval(d.data("mCSB_buttonScrollDown"))}),
h.bind("mousedown touchstart onmsgesturestart",function(b){b.preventDefault();b.stopPropagation();d.data({mCSB_buttonScrollUp:setInterval(function(){var b=Math.round((Math.abs(Math.round(a.position().top))-d.data("scrollButtons_scrollSpeed"))/d.data("scrollAmount"));d.mCustomScrollbar("scrollTo",b,{moveDragger:!0})},30)})}),h.bind("mouseup touchend onmsgestureend mouseout",function(a){a.preventDefault();a.stopPropagation();clearInterval(d.data("mCSB_buttonScrollUp"))}),d.data({bindEvent_buttonsContinuous_y:!0}));
d.data("autoScrollOnFocus")&&!d.data("bindEvent_focusin")&&(b.bind("focusin",function(){b.scrollTop(0).scrollLeft(0);var e=g(document.activeElement);if(e.is("input,textarea,select,button,a[tabindex],area,object"))if(d.data("horizontalScroll")){var h=a.position().left,l=e.position().left,j=b.width(),e=e.outerWidth();0<=h+l&&h+l<=j-e||(e=l/d.data("scrollAmount"),e>=f.width()-c.width()&&(e=f.width()-c.width()),c.css("left",e),d.mCustomScrollbar("scroll"))}else h=a.position().top,l=e.position().top,j=
b.height(),e=e.outerHeight(),0<=h+l&&h+l<=j-e||(e=l/d.data("scrollAmount"),e>=f.height()-c.height()&&(e=f.height()-c.height()),c.css("top",e),d.mCustomScrollbar("scroll"))}),d.data({bindEvent_focusin:!0}));if(g(document).data("mCS-is-touch-device")){if(!d.data("bindEvent_scrollbar_touch")){var n,x;c.bind("touchstart onmsgesturestart",function(a){a.preventDefault();a.stopPropagation();var b=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];a=g(this);var d=a.offset(),c=b.pageX-d.left,b=
b.pageY-d.top;c<a.width()&&(0<c&&b<a.height()&&0<b)&&(n=b,x=c)});c.bind("touchmove onmsgesturechange",function(a){a.preventDefault();a.stopPropagation();var b=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0],e=g(this).offset();a=b.pageX-e.left;b=b.pageY-e.top;d.data("horizontalScroll")?d.mCustomScrollbar("scrollTo",c.position().left-x+a,{moveDragger:!0}):d.mCustomScrollbar("scrollTo",c.position().top-n+b,{moveDragger:!0})});d.data({bindEvent_scrollbar_touch:!0})}if(!d.data("bindEvent_content_touch")){var s,
u,t,v,w,y,z;a.bind("touchstart onmsgesturestart",function(a){s=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];u=g(this);t=u.offset();v=s.pageX-t.left;y=w=s.pageY-t.top;z=v});a.bind("touchmove onmsgesturechange",function(a){a.preventDefault();a.stopPropagation();s=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];u=g(this).parent();t=u.offset();v=s.pageX-t.left;w=s.pageY-t.top;d.data("horizontalScroll")?d.mCustomScrollbar("scrollTo",z-v):d.mCustomScrollbar("scrollTo",y-w)});
d.data({bindEvent_content_touch:!0})}}},scroll:function(b){var a=g(this),f=a.find(".mCSB_dragger"),c=a.find(".mCSB_container");a.find(".mCustomScrollBox");if(a.data("horizontalScroll"))var h=-f.position().left*a.data("scrollAmount"),e=c.position().left,e=Math.round(e-h);else var k=-f.position().top*a.data("scrollAmount"),j=c.position().top,j=Math.round(j-k);if(g.browser.webkit)var d=(window.outerWidth-8)/window.innerWidth,d=0.98>d||1.02<d;0===a.data("scrollInertia")||d?(b||a.mCustomScrollbar("callbacks",
"onScrollStart"),a.data("horizontalScroll")?c.css("left",h):c.css("top",k),b||(a.data("whileScrolling")&&a.data("whileScrolling_Callback").call(),a.mCustomScrollbar("callbacks","onScroll")),a.data({mCS_Init:!1})):(b||a.mCustomScrollbar("callbacks","onScrollStart"),a.data("horizontalScroll")?c.stop().animate({left:"-="+e},a.data("scrollInertia"),a.data("scrollEasing"),function(){b||a.mCustomScrollbar("callbacks","onScroll");a.data({mCS_Init:!1})}):c.stop().animate({top:"-="+j},a.data("scrollInertia"),
a.data("scrollEasing"),function(){b||a.mCustomScrollbar("callbacks","onScroll");a.data({mCS_Init:!1})}))},scrollTo:function(b,a){a=g.extend({moveDragger:!1,callback:!0},a);var f=g(this),c,h=f.find(".mCustomScrollBox"),e=h.children(".mCSB_container"),k=f.find(".mCSB_draggerContainer"),j=k.children(".mCSB_dragger");if(b||0===b)"number"===typeof b?c=a.moveDragger?b:Math.round(b/f.data("scrollAmount")):"string"===typeof b&&(c="top"===b?0:"bottom"===b&&!f.data("horizontalScroll")?e.outerHeight()-h.height():
"left"===b?0:"right"===b&&f.data("horizontalScroll")?e.outerWidth()-h.width():"first"===b?f.find(".mCSB_container").find(":first"):"last"===b?f.find(".mCSB_container").find(":last"):f.find(b),1===c.length&&(c=f.data("horizontalScroll")?c.position().left:c.position().top,c=Math.ceil(c/f.data("scrollAmount")))),0>c&&(c=0),f.data("horizontalScroll")?(c>=k.width()-j.width()&&(c=k.width()-j.width()),j.css("left",c)):(c>=k.height()-j.height()&&(c=k.height()-j.height()),j.css("top",c)),a.callback?f.mCustomScrollbar("scroll",
!1):f.mCustomScrollbar("scroll",!0)},callbacks:function(b){var a=g(this),f=a.find(".mCustomScrollBox"),c=a.find(".mCSB_container");switch(b){case "onScrollStart":c.is(":animated")||a.data("onScrollStart_Callback").call();break;case "onScroll":a.data("horizontalScroll")?(b=Math.round(c.position().left),0>b&&b<=f.width()-c.outerWidth()+a.data("onTotalScroll_Offset")?a.data("onTotalScroll_Callback").call():b>=-a.data("onTotalScroll_Offset")?a.data("onTotalScrollBack_Callback").call():a.data("onScroll_Callback").call()):
(b=Math.round(c.position().top),0>b&&b<=f.height()-c.outerHeight()+a.data("onTotalScroll_Offset")?a.data("onTotalScroll_Callback").call():b>=-a.data("onTotalScroll_Offset")?a.data("onTotalScrollBack_Callback").call():a.data("onScroll_Callback").call());break;case "whileScrolling":a.data("whileScrolling_Callback")&&!a.data("whileScrolling")&&a.data({whileScrolling:setInterval(function(){c.is(":animated")&&!a.data("mCS_Init")&&a.data("whileScrolling_Callback").call()},a.data("whileScrolling_Interval"))})}},
disable:function(b){var a=g(this),f=a.children(".mCustomScrollBox"),c=f.children(".mCSB_container"),h=f.children(".mCSB_scrollTools"),e=h.find(".mCSB_dragger");f.unbind("mousewheel focusin");b&&(a.data("horizontalScroll")?e.add(c).css("left",0):e.add(c).css("top",0));h.css("display","none");c.addClass("mCS_no_scrollbar");a.data({bindEvent_mousewheel:!1,bindEvent_focusin:!1}).addClass("mCS_disabled")},destroy:function(){var b=g(this),a=b.find(".mCSB_container").html();b.find(".mCustomScrollBox").remove();
b.html(a).removeClass("mCustomScrollbar _mCS_"+g(document).data("mCustomScrollbar-index")).addClass("mCS_destroyed")}};g.fn.mCustomScrollbar=function(b){if(n[b])return n[b].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof b||!b)return n.init.apply(this,arguments);g.error("Method "+b+" does not exist")}})(jQuery);iOSVersion=iOSVersion();
6<=iOSVersion&&function(g){function n(a,b,c){var e,f=c[0],j=a===h;c[0]=function(){f&&(f.apply(g,arguments),j||(delete b[e],f=null))};e=a.apply(g,c);b[e]={args:c,created:Date.now(),cb:f,id:e};return e}function b(a,b,c,e){function f(){j.cb&&(j.cb.apply(g,arguments),k||(delete c[e],j.cb=null))}var j=c[e];if(j){var k=a===h;b(j.id);if(!k){b=j.args[1];var n=Date.now()-j.created;0>n&&(n=0);b-=n;0>b&&(b=0);j.args[1]=b}j.args[0]=f;j.created=Date.now();j.id=a.apply(g,j.args)}}var a={},f={},c=g.setTimeout,h=
g.setInterval,e=g.clearTimeout,k=g.clearInterval;if(!g.addEventListener)return!1;g.setTimeout=function(){return n(c,a,arguments)};g.setInterval=function(){return n(h,f,arguments)};g.clearTimeout=function(b){var c=a[b];c&&(delete a[b],e(c.id))};g.clearInterval=function(a){var b=f[a];b&&(delete f[a],k(b.id))};for(var j=g;j.location!=j.parent.location;)j=j.parent;j.addEventListener("scroll",function(){for(var d in a)b(c,e,a,d);for(d in f)b(h,k,f,d)})}(window);
function iOSVersion(){var g=window.navigator.userAgent,n=g.indexOf("OS ");return(-1<g.indexOf("iPhone")||-1<g.indexOf("iPad"))&&-1<n?window.Number(g.substr(n+3,3).replace("_",".")):0};
