window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
 
 //widowFix
 !function(t){jQuery.fn.widowFix=function(i){var n=t.extend({letterLimit:null,prevLimit:null,linkFix:!1,dashes:!1},i);if(this.length)return this.each(function(){var i,e=t(this);if(n.linkFix){var r=e.find("a:last");r.wrap("<var>");var l=t("var").html();i=r.contents()[0],r.contents().unwrap()}var a=t(this).html().split(" "),h=a.pop();if(!(a.length<=1)){if(function t(){""===h&&(h=a.pop(),t())}(),n.dashes){t.each(["-","–","—"],function(t,i){if(h.indexOf(i)>0)return h='<span style="white-space:nowrap;">'+h+"</span>",!1})}var s=a[a.length-1];if(n.linkFix){if(null!==n.letterLimit&&i.length>=n.letterLimit)return void e.find("var").each(function(){t(this).contents().replaceWith(l),t(this).contents().unwrap()});if(null!==n.prevLimit&&s.length>=n.prevLimit)return void e.find("var").each(function(){t(this).contents().replaceWith(l),t(this).contents().unwrap()})}else{if(null!==n.letterLimit&&h.length>=n.letterLimit)return;if(null!==n.prevLimit&&s.length>=n.prevLimit)return}var u=a.join(" ")+"&nbsp;"+h;e.html(u),n.linkFix&&e.find("var").each(function(){t(this).contents().replaceWith(l),t(this).contents().unwrap()})}})}}(jQuery);

$('h1, h2, h3, h4, h5, p, li').widowFix({
    letterLimit: 9,
    prevLimit: 8,
    //linkFix: false
});

var mediaQuery = window.matchMedia("(max-width: 1185px)");


// mkto sticky form toggle
$('.mobileForm').on('click', function() {
  // $('body').toggleClass('locked');
  // $('.form--sticky').toggleClass('swapPosition');
  $('.form--sticky .container').slideToggle(300);
  $(this).parents('.flip-card').toggleClass('mobile-expanded');
  $('.span1').toggleClass('swap');
  $('.span2').toggleClass('swap');
});

$('.mobile-v2').on('click', function() {
	if (mediaQuery.matches) {
		$(this).parents('.flip-card').addClass('mobile-expanded');
		var currentScrollTop = $(document).scrollTop();
		var formPos = $('.flip-card').position().top;
		if (formPos > currentScrollTop) {
			$("html, body").animate({scrollTop: formPos + 500});
		}
	}
});

//rellax
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof module&&module.exports?module.exports=t():e.Rellax=t()}("undefined"!=typeof window?window:global,function(){var e=function(t,o){var n=Object.create(e.prototype),r=0,i=0,a=0,l=0,s=[],p=!0,d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},c=null,m=!1;try{var u=Object.defineProperty({},"passive",{get:function(){m=!0}});window.addEventListener("testPassive",null,u),window.removeEventListener("testPassive",null,u)}catch(e){}var w=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,f=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t,o=["Webkit","Moz","ms"];for(t in o)if(void 0!==e.style[o[t]+"Transform"])return o[t]+"Transform"}return"transform"}();if(n.options={speed:-2,verticalSpeed:null,horizontalSpeed:null,breakpoints:[576,768,1201],center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,verticalScrollAxis:"y",horizontalScrollAxis:"x",callback:function(){}},o&&Object.keys(o).forEach(function(e){n.options[e]=o[e]}),o.breakpoints&&function(){if(3===n.options.breakpoints.length&&Array.isArray(n.options.breakpoints)){var e,t=!0,o=!0;if(n.options.breakpoints.forEach(function(n){"number"!=typeof n&&(o=!1),null!==e&&n<e&&(t=!1),e=n}),t&&o)return}n.options.breakpoints=[576,768,1201],console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")}(),t||(t=".rellax"),0<(u="string"==typeof t?document.querySelectorAll(t):[t]).length){if(n.elems=u,n.options.wrapper&&!n.options.wrapper.nodeType){if(!(u=document.querySelector(n.options.wrapper)))return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");n.options.wrapper=u}var x,v=function(){for(var e=0;e<s.length;e++)n.elems[e].style.cssText=s[e].style;for(s=[],i=window.innerHeight,l=window.innerWidth,e=n.options.breakpoints,x=l<e[0]?"xs":l>=e[0]&&l<e[1]?"sm":l>=e[1]&&l<e[2]?"md":"lg",h(),e=0;e<n.elems.length;e++){var t=void 0,o=n.elems[e],r=o.getAttribute("data-rellax-percentage"),a=o.getAttribute("data-rellax-speed"),d=o.getAttribute("data-rellax-xs-speed"),c=o.getAttribute("data-rellax-mobile-speed"),m=o.getAttribute("data-rellax-tablet-speed"),u=o.getAttribute("data-rellax-desktop-speed"),w=o.getAttribute("data-rellax-vertical-speed"),f=o.getAttribute("data-rellax-horizontal-speed"),g=o.getAttribute("data-rellax-vertical-scroll-axis"),z=o.getAttribute("data-rellax-horizontal-scroll-axis"),T=o.getAttribute("data-rellax-zindex")||0,E=o.getAttribute("data-rellax-min"),L=o.getAttribute("data-rellax-max"),S=o.getAttribute("data-rellax-min-x"),Y=o.getAttribute("data-rellax-max-x"),k=o.getAttribute("data-rellax-min-y"),O=o.getAttribute("data-rellax-max-y"),X=!0;d||c||m||u?t={xs:d,sm:c,md:m,lg:u}:X=!1,d=n.options.wrapper?n.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,n.options.relativeToWrapper&&(d=(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop)-n.options.wrapper.offsetTop);var R=n.options.vertical&&(r||n.options.center)?d:0,W=n.options.horizontal&&(r||n.options.center)?n.options.wrapper?n.options.wrapper.scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0;d=R+o.getBoundingClientRect().top,c=o.clientHeight||o.offsetHeight||o.scrollHeight,m=W+o.getBoundingClientRect().left,u=o.clientWidth||o.offsetWidth||o.scrollWidth,R=r||(R-d+i)/(c+i),r=r||(W-m+l)/(u+l),n.options.center&&(R=r=.5),t=X&&null!==t[x]?Number(t[x]):a||n.options.speed,w=w||n.options.verticalSpeed,f=f||n.options.horizontalSpeed,g=g||n.options.verticalScrollAxis,z=z||n.options.horizontalScrollAxis,a=b(r,R,t,w,f),o=o.style.cssText,X="",(r=/transform\s*:/i.exec(o))&&(X=(r=(X=o.slice(r.index)).indexOf(";"))?" "+X.slice(11,r).replace(/\s/g,""):" "+X.slice(11).replace(/\s/g,"")),s.push({baseX:a.x,baseY:a.y,top:d,left:m,height:c,width:u,speed:t,verticalSpeed:w,horizontalSpeed:f,verticalScrollAxis:g,horizontalScrollAxis:z,style:o,transform:X,zindex:T,min:E,max:L,minX:S,maxX:Y,minY:k,maxY:O})}A(),p&&(window.addEventListener("resize",v),p=!1,y())},h=function(){var e=r,t=a;return r=n.options.wrapper?n.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,a=n.options.wrapper?n.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,n.options.relativeToWrapper&&(r=((document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset)-n.options.wrapper.offsetTop),!!(e!=r&&n.options.vertical||t!=a&&n.options.horizontal)},b=function(e,t,o,r,i){var a={};return e=100*(i||o)*(1-e),t=100*(r||o)*(1-t),a.x=n.options.round?Math.round(e):Math.round(100*e)/100,a.y=n.options.round?Math.round(t):Math.round(100*t)/100,a},g=function(){window.removeEventListener("resize",g),window.removeEventListener("orientationchange",g),(n.options.wrapper?n.options.wrapper:window).removeEventListener("scroll",g),(n.options.wrapper?n.options.wrapper:document).removeEventListener("touchmove",g),c=d(y)},y=function(){h()&&!1===p?(A(),c=d(y)):(c=null,window.addEventListener("resize",g),window.addEventListener("orientationchange",g),(n.options.wrapper?n.options.wrapper:window).addEventListener("scroll",g,!!m&&{passive:!0}),(n.options.wrapper?n.options.wrapper:document).addEventListener("touchmove",g,!!m&&{passive:!0}))},A=function(){for(var e,t=0;t<n.elems.length;t++){var o=s[t].verticalScrollAxis.toLowerCase(),p=s[t].horizontalScrollAxis.toLowerCase();e=-1!=o.indexOf("x")?r:0,o=-1!=o.indexOf("y")?r:0;var d=-1!=p.indexOf("x")?a:0;p=-1!=p.indexOf("y")?a:0,p=(e=b((e+d-s[t].left+l)/(s[t].width+l),(o+p-s[t].top+i)/(s[t].height+i),s[t].speed,s[t].verticalSpeed,s[t].horizontalSpeed)).y-s[t].baseY,o=e.x-s[t].baseX,null!==s[t].min&&(n.options.vertical&&!n.options.horizontal&&(p=p<=s[t].min?s[t].min:p),n.options.horizontal&&!n.options.vertical&&(o=o<=s[t].min?s[t].min:o)),null!=s[t].minY&&(p=p<=s[t].minY?s[t].minY:p),null!=s[t].minX&&(o=o<=s[t].minX?s[t].minX:o),null!==s[t].max&&(n.options.vertical&&!n.options.horizontal&&(p=p>=s[t].max?s[t].max:p),n.options.horizontal&&!n.options.vertical&&(o=o>=s[t].max?s[t].max:o)),null!=s[t].maxY&&(p=p>=s[t].maxY?s[t].maxY:p),null!=s[t].maxX&&(o=o>=s[t].maxX?s[t].maxX:o),n.elems[t].style[f]="translate3d("+(n.options.horizontal?o:"0")+"px,"+(n.options.vertical?p:"0")+"px,"+s[t].zindex+"px) "+s[t].transform}n.options.callback(e)};return n.destroy=function(){for(var e=0;e<n.elems.length;e++)n.elems[e].style.cssText=s[e].style;p||(window.removeEventListener("resize",v),p=!0),w(c),c=null},v(),n.refresh=v,n}console.warn("Rellax: The elements you're trying to select don't exist.")};return e});

/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

!function(factory){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],factory):factory("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function($){"use strict";function init(options){return!options||void 0!==options.allowPageScroll||void 0===options.swipe&&void 0===options.swipeStatus||(options.allowPageScroll=NONE),void 0!==options.click&&void 0===options.tap&&(options.tap=options.click),options||(options={}),options=$.extend({},$.fn.swipe.defaults,options),this.each(function(){var $this=$(this),plugin=$this.data(PLUGIN_NS);plugin||(plugin=new TouchSwipe(this,options),$this.data(PLUGIN_NS,plugin))})}function TouchSwipe(element,options){function touchStart(jqEvent){if(!(getTouchInProgress()||$(jqEvent.target).closest(options.excludedElements,$element).length>0)){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(!event.pointerType||"mouse"!=event.pointerType||0!=options.fallbackToMouseEvents){var ret,touches=event.touches,evt=touches?touches[0]:event;return phase=PHASE_START,touches?fingerCount=touches.length:options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),distance=0,direction=null,currentDirection=null,pinchDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,maximumsMap=createMaximumsData(),cancelMultiFingerRelease(),createFingerData(0,evt),!touches||fingerCount===options.fingers||options.fingers===ALL_FINGERS||hasPinches()?(startTime=getTimeStamp(),2==fingerCount&&(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)),(options.swipeStatus||options.pinchStatus)&&(ret=triggerHandler(event,phase))):ret=!1,ret===!1?(phase=PHASE_CANCEL,triggerHandler(event,phase),ret):(options.hold&&(holdTimeout=setTimeout($.proxy(function(){$element.trigger("hold",[event.target]),options.hold&&(ret=options.hold.call($element,event,event.target))},this),options.longTapThreshold)),setTouchInProgress(!0),null)}}}function touchMove(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(phase!==PHASE_END&&phase!==PHASE_CANCEL&&!inMultiFingerRelease()){var ret,touches=event.touches,evt=touches?touches[0]:event,currentFinger=updateFingerData(evt);if(endTime=getTimeStamp(),touches&&(fingerCount=touches.length),options.hold&&clearTimeout(holdTimeout),phase=PHASE_MOVE,2==fingerCount&&(0==startTouchesDistance?(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)):(updateFingerData(touches[1]),endTouchesDistance=calculateTouchesDistance(fingerData[0].end,fingerData[1].end),pinchDirection=calculatePinchDirection(fingerData[0].end,fingerData[1].end)),pinchZoom=calculatePinchZoom(startTouchesDistance,endTouchesDistance),pinchDistance=Math.abs(startTouchesDistance-endTouchesDistance)),fingerCount===options.fingers||options.fingers===ALL_FINGERS||!touches||hasPinches()){if(direction=calculateDirection(currentFinger.start,currentFinger.end),currentDirection=calculateDirection(currentFinger.last,currentFinger.end),validateDefaultEvent(jqEvent,currentDirection),distance=calculateDistance(currentFinger.start,currentFinger.end),duration=calculateDuration(),setMaxDistance(direction,distance),ret=triggerHandler(event,phase),!options.triggerOnTouchEnd||options.triggerOnTouchLeave){var inBounds=!0;if(options.triggerOnTouchLeave){var bounds=getbounds(this);inBounds=isInBounds(currentFinger.end,bounds)}!options.triggerOnTouchEnd&&inBounds?phase=getNextPhase(PHASE_MOVE):options.triggerOnTouchLeave&&!inBounds&&(phase=getNextPhase(PHASE_END)),phase!=PHASE_CANCEL&&phase!=PHASE_END||triggerHandler(event,phase)}}else phase=PHASE_CANCEL,triggerHandler(event,phase);ret===!1&&(phase=PHASE_CANCEL,triggerHandler(event,phase))}}function touchEnd(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent,touches=event.touches;if(touches){if(touches.length&&!inMultiFingerRelease())return startMultiFingerRelease(event),!0;if(touches.length&&inMultiFingerRelease())return!0}return inMultiFingerRelease()&&(fingerCount=fingerCountAtRelease),endTime=getTimeStamp(),duration=calculateDuration(),didSwipeBackToCancel()||!validateSwipeDistance()?(phase=PHASE_CANCEL,triggerHandler(event,phase)):options.triggerOnTouchEnd||options.triggerOnTouchEnd===!1&&phase===PHASE_MOVE?(options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),phase=PHASE_END,triggerHandler(event,phase)):!options.triggerOnTouchEnd&&hasTap()?(phase=PHASE_END,triggerHandlerForGesture(event,phase,TAP)):phase===PHASE_MOVE&&(phase=PHASE_CANCEL,triggerHandler(event,phase)),setTouchInProgress(!1),null}function touchCancel(){fingerCount=0,endTime=0,startTime=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,cancelMultiFingerRelease(),setTouchInProgress(!1)}function touchLeave(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;options.triggerOnTouchLeave&&(phase=getNextPhase(PHASE_END),triggerHandler(event,phase))}function removeListeners(){$element.unbind(START_EV,touchStart),$element.unbind(CANCEL_EV,touchCancel),$element.unbind(MOVE_EV,touchMove),$element.unbind(END_EV,touchEnd),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave),setTouchInProgress(!1)}function getNextPhase(currentPhase){var nextPhase=currentPhase,validTime=validateSwipeTime(),validDistance=validateSwipeDistance(),didCancel=didSwipeBackToCancel();return!validTime||didCancel?nextPhase=PHASE_CANCEL:!validDistance||currentPhase!=PHASE_MOVE||options.triggerOnTouchEnd&&!options.triggerOnTouchLeave?!validDistance&&currentPhase==PHASE_END&&options.triggerOnTouchLeave&&(nextPhase=PHASE_CANCEL):nextPhase=PHASE_END,nextPhase}function triggerHandler(event,phase){var ret,touches=event.touches;return(didSwipe()||hasSwipes())&&(ret=triggerHandlerForGesture(event,phase,SWIPE)),(didPinch()||hasPinches())&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,PINCH)),didDoubleTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,DOUBLE_TAP):didLongTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,LONG_TAP):didTap()&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,TAP)),phase===PHASE_CANCEL&&touchCancel(event),phase===PHASE_END&&(touches?touches.length||touchCancel(event):touchCancel(event)),ret}function triggerHandlerForGesture(event,phase,gesture){var ret;if(gesture==SWIPE){if($element.trigger("swipeStatus",[phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection]),options.swipeStatus&&(ret=options.swipeStatus.call($element,event,phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection),ret===!1))return!1;if(phase==PHASE_END&&validateSwipe()){if(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),$element.trigger("swipe",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipe&&(ret=options.swipe.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection),ret===!1))return!1;switch(direction){case LEFT:$element.trigger("swipeLeft",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeLeft&&(ret=options.swipeLeft.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case RIGHT:$element.trigger("swipeRight",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeRight&&(ret=options.swipeRight.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case UP:$element.trigger("swipeUp",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeUp&&(ret=options.swipeUp.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case DOWN:$element.trigger("swipeDown",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeDown&&(ret=options.swipeDown.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection))}}}if(gesture==PINCH){if($element.trigger("pinchStatus",[phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchStatus&&(ret=options.pinchStatus.call($element,event,phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData),ret===!1))return!1;if(phase==PHASE_END&&validatePinch())switch(pinchDirection){case IN:$element.trigger("pinchIn",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchIn&&(ret=options.pinchIn.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData));break;case OUT:$element.trigger("pinchOut",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchOut&&(ret=options.pinchOut.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData))}}return gesture==TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),hasDoubleTap()&&!inDoubleTap()?(doubleTapStartTime=getTimeStamp(),singleTapTimeout=setTimeout($.proxy(function(){doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target))},this),options.doubleTapThreshold)):(doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target)))):gesture==DOUBLE_TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),doubleTapStartTime=null,$element.trigger("doubletap",[event.target]),options.doubleTap&&(ret=options.doubleTap.call($element,event,event.target))):gesture==LONG_TAP&&(phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),doubleTapStartTime=null,$element.trigger("longtap",[event.target]),options.longTap&&(ret=options.longTap.call($element,event,event.target)))),ret}function validateSwipeDistance(){var valid=!0;return null!==options.threshold&&(valid=distance>=options.threshold),valid}function didSwipeBackToCancel(){var cancelled=!1;return null!==options.cancelThreshold&&null!==direction&&(cancelled=getMaxDistance(direction)-distance>=options.cancelThreshold),cancelled}function validatePinchDistance(){return null===options.pinchThreshold||pinchDistance>=options.pinchThreshold}function validateSwipeTime(){var result;return result=!options.maxTimeThreshold||!(duration>=options.maxTimeThreshold)}function validateDefaultEvent(jqEvent,direction){if(options.preventDefaultEvents!==!1)if(options.allowPageScroll===NONE)jqEvent.preventDefault();else{var auto=options.allowPageScroll===AUTO;switch(direction){case LEFT:(options.swipeLeft&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case RIGHT:(options.swipeRight&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case UP:(options.swipeUp&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case DOWN:(options.swipeDown&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case NONE:}}}function validatePinch(){var hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),hasCorrectDistance=validatePinchDistance();return hasCorrectFingerCount&&hasEndPoint&&hasCorrectDistance}function hasPinches(){return!!(options.pinchStatus||options.pinchIn||options.pinchOut)}function didPinch(){return!(!validatePinch()||!hasPinches())}function validateSwipe(){var hasValidTime=validateSwipeTime(),hasValidDistance=validateSwipeDistance(),hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),didCancel=didSwipeBackToCancel(),valid=!didCancel&&hasEndPoint&&hasCorrectFingerCount&&hasValidDistance&&hasValidTime;return valid}function hasSwipes(){return!!(options.swipe||options.swipeStatus||options.swipeLeft||options.swipeRight||options.swipeUp||options.swipeDown)}function didSwipe(){return!(!validateSwipe()||!hasSwipes())}function validateFingers(){return fingerCount===options.fingers||options.fingers===ALL_FINGERS||!SUPPORTS_TOUCH}function validateEndPoint(){return 0!==fingerData[0].end.x}function hasTap(){return!!options.tap}function hasDoubleTap(){return!!options.doubleTap}function hasLongTap(){return!!options.longTap}function validateDoubleTap(){if(null==doubleTapStartTime)return!1;var now=getTimeStamp();return hasDoubleTap()&&now-doubleTapStartTime<=options.doubleTapThreshold}function inDoubleTap(){return validateDoubleTap()}function validateTap(){return(1===fingerCount||!SUPPORTS_TOUCH)&&(isNaN(distance)||distance<options.threshold)}function validateLongTap(){return duration>options.longTapThreshold&&distance<DOUBLE_TAP_THRESHOLD}function didTap(){return!(!validateTap()||!hasTap())}function didDoubleTap(){return!(!validateDoubleTap()||!hasDoubleTap())}function didLongTap(){return!(!validateLongTap()||!hasLongTap())}function startMultiFingerRelease(event){previousTouchEndTime=getTimeStamp(),fingerCountAtRelease=event.touches.length+1}function cancelMultiFingerRelease(){previousTouchEndTime=0,fingerCountAtRelease=0}function inMultiFingerRelease(){var withinThreshold=!1;if(previousTouchEndTime){var diff=getTimeStamp()-previousTouchEndTime;diff<=options.fingerReleaseThreshold&&(withinThreshold=!0)}return withinThreshold}function getTouchInProgress(){return!($element.data(PLUGIN_NS+"_intouch")!==!0)}function setTouchInProgress(val){$element&&(val===!0?($element.bind(MOVE_EV,touchMove),$element.bind(END_EV,touchEnd),LEAVE_EV&&$element.bind(LEAVE_EV,touchLeave)):($element.unbind(MOVE_EV,touchMove,!1),$element.unbind(END_EV,touchEnd,!1),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave,!1)),$element.data(PLUGIN_NS+"_intouch",val===!0))}function createFingerData(id,evt){var f={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return f.start.x=f.last.x=f.end.x=evt.pageX||evt.clientX,f.start.y=f.last.y=f.end.y=evt.pageY||evt.clientY,fingerData[id]=f,f}function updateFingerData(evt){var id=void 0!==evt.identifier?evt.identifier:0,f=getFingerData(id);return null===f&&(f=createFingerData(id,evt)),f.last.x=f.end.x,f.last.y=f.end.y,f.end.x=evt.pageX||evt.clientX,f.end.y=evt.pageY||evt.clientY,f}function getFingerData(id){return fingerData[id]||null}function setMaxDistance(direction,distance){direction!=NONE&&(distance=Math.max(distance,getMaxDistance(direction)),maximumsMap[direction].distance=distance)}function getMaxDistance(direction){if(maximumsMap[direction])return maximumsMap[direction].distance}function createMaximumsData(){var maxData={};return maxData[LEFT]=createMaximumVO(LEFT),maxData[RIGHT]=createMaximumVO(RIGHT),maxData[UP]=createMaximumVO(UP),maxData[DOWN]=createMaximumVO(DOWN),maxData}function createMaximumVO(dir){return{direction:dir,distance:0}}function calculateDuration(){return endTime-startTime}function calculateTouchesDistance(startPoint,endPoint){var diffX=Math.abs(startPoint.x-endPoint.x),diffY=Math.abs(startPoint.y-endPoint.y);return Math.round(Math.sqrt(diffX*diffX+diffY*diffY))}function calculatePinchZoom(startDistance,endDistance){var percent=endDistance/startDistance*1;return percent.toFixed(2)}function calculatePinchDirection(){return pinchZoom<1?OUT:IN}function calculateDistance(startPoint,endPoint){return Math.round(Math.sqrt(Math.pow(endPoint.x-startPoint.x,2)+Math.pow(endPoint.y-startPoint.y,2)))}function calculateAngle(startPoint,endPoint){var x=startPoint.x-endPoint.x,y=endPoint.y-startPoint.y,r=Math.atan2(y,x),angle=Math.round(180*r/Math.PI);return angle<0&&(angle=360-Math.abs(angle)),angle}function calculateDirection(startPoint,endPoint){if(comparePoints(startPoint,endPoint))return NONE;var angle=calculateAngle(startPoint,endPoint);return angle<=45&&angle>=0?LEFT:angle<=360&&angle>=315?LEFT:angle>=135&&angle<=225?RIGHT:angle>45&&angle<135?DOWN:UP}function getTimeStamp(){var now=new Date;return now.getTime()}function getbounds(el){el=$(el);var offset=el.offset(),bounds={left:offset.left,right:offset.left+el.outerWidth(),top:offset.top,bottom:offset.top+el.outerHeight()};return bounds}function isInBounds(point,bounds){return point.x>bounds.left&&point.x<bounds.right&&point.y>bounds.top&&point.y<bounds.bottom}function comparePoints(pointA,pointB){return pointA.x==pointB.x&&pointA.y==pointB.y}var options=$.extend({},options),useTouchEvents=SUPPORTS_TOUCH||SUPPORTS_POINTER||!options.fallbackToMouseEvents,START_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerDown":"pointerdown":"touchstart":"mousedown",MOVE_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerMove":"pointermove":"touchmove":"mousemove",END_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerUp":"pointerup":"touchend":"mouseup",LEAVE_EV=useTouchEvents?SUPPORTS_POINTER?"mouseleave":null:"mouseleave",CANCEL_EV=SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerCancel":"pointercancel":"touchcancel",distance=0,direction=null,currentDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,pinchDirection=0,maximumsMap=null,$element=$(element),phase="start",fingerCount=0,fingerData={},startTime=0,endTime=0,previousTouchEndTime=0,fingerCountAtRelease=0,doubleTapStartTime=0,singleTapTimeout=null,holdTimeout=null;try{$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel)}catch(e){$.error("events not supported "+START_EV+","+CANCEL_EV+" on jQuery.swipe")}this.enable=function(){return this.disable(),$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel),$element},this.disable=function(){return removeListeners(),$element},this.destroy=function(){removeListeners(),$element.data(PLUGIN_NS,null),$element=null},this.option=function(property,value){if("object"==typeof property)options=$.extend(options,property);else if(void 0!==options[property]){if(void 0===value)return options[property];options[property]=value}else{if(!property)return options;$.error("Option "+property+" does not exist on jQuery.swipe.options")}return null}}var VERSION="1.6.18",LEFT="left",RIGHT="right",UP="up",DOWN="down",IN="in",OUT="out",NONE="none",AUTO="auto",SWIPE="swipe",PINCH="pinch",TAP="tap",DOUBLE_TAP="doubletap",LONG_TAP="longtap",HORIZONTAL="horizontal",VERTICAL="vertical",ALL_FINGERS="all",DOUBLE_TAP_THRESHOLD=10,PHASE_START="start",PHASE_MOVE="move",PHASE_END="end",PHASE_CANCEL="cancel",SUPPORTS_TOUCH="ontouchstart"in window,SUPPORTS_POINTER_IE10=window.navigator.msPointerEnabled&&!window.PointerEvent&&!SUPPORTS_TOUCH,SUPPORTS_POINTER=(window.PointerEvent||window.navigator.msPointerEnabled)&&!SUPPORTS_TOUCH,PLUGIN_NS="TouchSwipe",defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};$.fn.swipe=function(method){var $this=$(this),plugin=$this.data(PLUGIN_NS);if(plugin&&"string"==typeof method){if(plugin[method])return plugin[method].apply(plugin,Array.prototype.slice.call(arguments,1));$.error("Method "+method+" does not exist on jQuery.swipe")}else if(plugin&&"object"==typeof method)plugin.option.apply(plugin,arguments);else if(!(plugin||"object"!=typeof method&&method))return init.apply(this,arguments);return $this},$.fn.swipe.version=VERSION,$.fn.swipe.defaults=defaults,$.fn.swipe.phases={PHASE_START:PHASE_START,PHASE_MOVE:PHASE_MOVE,PHASE_END:PHASE_END,PHASE_CANCEL:PHASE_CANCEL},$.fn.swipe.directions={LEFT:LEFT,RIGHT:RIGHT,UP:UP,DOWN:DOWN,IN:IN,OUT:OUT},$.fn.swipe.pageScroll={NONE:NONE,HORIZONTAL:HORIZONTAL,VERTICAL:VERTICAL,AUTO:AUTO},$.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:ALL_FINGERS}});


var rellax = new Rellax('.channel-stat, .background-box', {
    breakpoints: [576, 768, 1201],
    center: true,
    speed: -.6
});

function fadeBubbles(){
	$('.desktop-only .bubble-tr').fadeIn(1000).delay(1750).fadeOut(1000,function(){
		$('.desktop-only .bubble-bl').fadeIn(1000).delay(1750).fadeOut(1000,function(){
			$('.desktop-only .bubble-tl').fadeIn(1000).delay(1750).fadeOut(1000,function(){
				$('.desktop-only .bubble-br').fadeIn(1000).delay(1750).fadeOut(1000,function(){
					fadeBubbles();
				});
			});
		});
	});
};
function fadeBubblesMobile(){
	$('.mobile-only .bubble-tr').fadeIn(1000).delay(1750).fadeOut(1000,function(){
		$('.mobile-only .bubble-bl').fadeIn(1000).delay(1750).fadeOut(1000,function(){
			$('.mobile-only .bubble-tl').fadeIn(1000).delay(1750).fadeOut(1000,function(){
				$('.mobile-only .bubble-br').fadeIn(1000).delay(1750).fadeOut(1000,function(){
					fadeBubblesMobile();
				});
			});
		});
	});
};

$(function() {

    // Copied from Drupal site, not sure if needed
    setTimeout(function() {
        $(".LPMcontainer .LPMimage").attr("onclick", "ga('send', 'event', 'chat', 'click', 'site-wide button')");
        $(".LPMcontainer").attr("onclick", "ga('send', 'event', 'form', 'submit', 'Chat engagement clicks')");
    }, 3000);
	
	appendDismissLine('.mobile-v2', '.sticky-form', function() {
		$('.sticky-form').removeClass('mobile-expanded').attr('style', null);
	});

});

/*function getBrandLogo(url) {
	var matches = url.match(/(?<=\/\/)([a-zA-Z\.0-9]*)/);
	if (matches.length == 0) return null;
	var imageUrl = "https://logo.clearbit.com/" + matches[0];
	$('#brand-logo').attr('src', imageUrl);
}*/

function showAsyncChannels(formVals) {
	
	$('.paragraph-19-copy').append($('.thumbs-up'));
	appendDismissLine();
	
	var abcVisible = navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Mac OS X/i);
	
	var message = "Send%20this%20message%20to%20continue%20scheduling%20your%20demo.%20We%E2%80%99ll%20use%20"+formVals.Email+"%20as%20your%20unique%20identifier%2C%20so%20don%E2%80%99t%20delete%20your%20email%20from%20this%20message%20%F0%9F%99%82";
	
	var waUrl = "https://api.whatsapp.com/send?phone=12126094200&text=" + message;
	var abcUrl = "https://bcrw.apple.com/business/api/messageprofiles/redirecthelper?service=iMessage&recipient=urn:biz:9c27617e-f108-4e9e-a010-81ea843471e4&biz-group-id=AgentQR&body=" + message;
	var fbmUrl = "https://m.me/liveperson?ref="+formVals.Email;
	var smsUrl = "sms:+16462572513?body=" + message;
	
	var waImg = $('<img>').addClass('channel').attr('src', 'https://assets-global.website-files.com/5fd12c44f4b20161bb3602da/6090337f5589f64990ec61d3_whatsapp.svg');
	var waLink = $('<a>').attr('target', '_blank').attr('href', waUrl).attr('title', 'WhatsApp Business').append(waImg);
	
	var abcImg = $('<img>').addClass('channel').attr('src', 'https://assets-global.website-files.com/5fd12c44f4b20161bb3602da/609033e67821e30ed73e7722_apple.svg');
	if (abcVisible) {
		var abcLink = $('<a>').attr('target', '_blank').attr('href', abcUrl).attr('title', 'Apple Business Chat').append(abcImg);
	} else {
		var abcLink = $('<a>').attr('target', '_blank').attr('href', smsUrl).attr('title', 'SMS Text Messaging').append(abcImg);
	}

	var fbmImg = $('<img>').addClass('channel').attr('src', 'https://assets-global.website-files.com/5fd12c44f4b20161bb3602da/609033b8b4b1ad41a070ffbc_fbm.svg');
	var fbmLink = $('<a>').attr('target', '_blank').attr('href', fbmUrl).attr('title', 'FaceBook Messenger').append(fbmImg);
	
	$('.async-channels').append(abcLink).append(fbmLink).append(waLink);
}

function appendDismissLine(appendTo, selector, callback) {
	selector = selector || '.flipped';
	appendTo = appendTo || '.flipped';
	var dismiss = $('<div>').addClass('dismiss-line');
	var container = $('<div>').addClass('dismiss-container').append(dismiss).swipe({
		threshold: 70,
		cancelThreshold: 10,
		swipe: function(event, direction) {
			var currentScrollTop = $(document).scrollTop();
			if (direction === 'up') {
				var touchHeight = $(selector).height();
				
				if (currentScrollTop < $(selector).position().top - 5) {
					callback ? callback(this) : ($(selector).addClass('dismissed'));
				} else {
					if (callback) {
						callback(this);
					} else {
						$(selector).animate({top: -1 * (touchHeight)}, 'fast', function() {
							$(selector).addClass('dismissed');
						});
					}
				}
			}
			$(selector).attr('style', null);
		},
		swipeStatus: function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
			var touchHeight = $(selector).height();
			if (phase == 'cancel' || phase == 'end') {
				$(selector).attr('style', null);
				return;
			}
			if (currentDirection === 'left' || currentDirection === 'right') return;
			if (currentDirection === 'down') distance = distance * -1;
			var currentScrollTop = $(document).scrollTop();
			
			var newHeight = touchHeight - (distance);
			
			if (currentScrollTop < $(selector).position().top - 5) {
				$(selector).height(newHeight);
				$(selector).css('top', 0);
			} else {
				var newTop = -1 * (touchHeight - newHeight);
				if (newTop > 0) {
					$(selector).css('top', 0);
				} else {
					$(selector).css('top', newTop);
				}
			}
			
			//$('.flipped').css('margin-bottom', 260-newHeight);
			//$('.flipped .card-back, .flipped .card-back-smb').css('bottom', -1 * (distance * .6) );
			//$('.flipped').css('top', distance * -1);
			
			/*var curTop = parseInt($('.flipped').css('top'));
			if (curTop >= 0) {
				$('.flipped').css('top', 0);
				return;
			}*/
		}
	});
	
	$(appendTo).append(container);
}

const el = document.querySelector(".sticky-form");
if (el) {
	const observer = new IntersectionObserver(function([e]) {
		e.target.classList.toggle("is-pinned", e.intersectionRatio < 1 && e.boundingClientRect.y == -1);
	}, { threshold: [1] });
	observer.observe(el);

}

$('.nav-menu + a').click(function(){
	//Hotjar recording tag
	hj('tagRecording', ['Sign in button clicked']);
});

setTimeout(function(){
	var sixSenseData = JSON.parse(localStorage.getItem('_6senseCompanyDetails'));
	hj('identify', null, {
		'6S_Company': sixSenseData.company.name,
		'6S_Industry' : sixSenseData.company.industry
	});
}, 5000);

var timeOnSite = sessionStorage.getItem('timeOnSite') || Math.round(performance.now());
var timerInterval = setInterval(function(){
  timeOnSite = parseInt(sessionStorage.getItem('timeOnSite'))? parseInt(sessionStorage.getItem('timeOnSite')) + 15000 : 15000;
  sessionStorage.setItem('timeOnSite', timeOnSite);
  hj('identify', null, {
    'timeOnSite': timeOnSite
  });
  if(timeOnSite >= 30000){
    clearInterval(timerInterval);
  }
}, 15000);