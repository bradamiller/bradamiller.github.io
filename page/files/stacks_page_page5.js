/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
var stacks = {};
stacks.jQuery = jQuery.noConflict(true);
stacks.stacks_in_16_page5 = {};
stacks.stacks_in_16_page5 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{if(typeof module!=="undefined"&&module.exports){a(require("jquery"))}else{a(jQuery)}}}(function(f){var y="1.6.15",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!a,d=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!a,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipe=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipe")}}else{if(F&&typeof H==="object"){F.option.apply(this,arguments)}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}}return G};f.fn.swipe.version=y;f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipe.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,au){var au=f.extend({},au);var az=(a||d||!au.fallbackToMouseEvents),K=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ax=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=az?(d?"mouseleave":null):"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,a2=null,ac=0,a1=0,aZ=0,H=1,ap=0,aJ=0,N=null;var aR=f(a5);var aa="start";var X=0;var aQ={};var U=0,a3=0,a6=0,ay=0,O=0;var aW=null,af=null;try{aR.bind(K,aN);aR.bind(aD,ba)}catch(aj){f.error("events not supported "+K+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(K,aN);aR.bind(aD,ba);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(C,null);aR=null};this.option=function(bd,bc){if(typeof bd==="object"){au=f.extend(au,bd)}else{if(au[bd]!==undefined){if(bc===undefined){return au[bd]}else{au[bd]=bc}}else{if(!bd){return au}else{f.error("Option "+bd+" does not exist on jQuery.swipe.options")}}}return null};function aN(be){if(aB()){return}if(f(be.target).closest(au.excludedElements,aR).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{if(au.preventDefaultEvents!==false){be.preventDefault()}}ag=0;aP=null;a2=null;aJ=null;ac=0;a1=0;aZ=0;H=1;ap=0;N=ab();S();ai(0,bc);if(!bg||(X===au.fingers||au.fingers===i)||aX()){U=ar();if(X==2){ai(1,bg[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}if(au.swipeStatus||au.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(au.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[bf.target]);if(au.hold){bd=au.hold.call(aR,bf,bf.target)}},this),au.longTapThreshold)}an(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||al()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aH(bd);a3=ar();if(bj){X=bj.length}if(au.hold){clearTimeout(af)}aa=k;if(X==2){if(a1==0){ai(1,bj[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}else{aH(bj[1]);aZ=at(aQ[0].end,aQ[1].end);aJ=aq(aQ[0].end,aQ[1].end)}H=a8(a1,aZ);ap=Math.abs(a1-aZ)}if((X===au.fingers||au.fingers===i)||!bj||aX()){aP=aL(bg.start,bg.end);a2=aL(bg.last,bg.end);ak(bf,a2);ag=aS(bg.start,bg.end);ac=aM();aI(aP,ag);be=P(bi,aa);if(!au.triggerOnTouchEnd||au.triggerOnTouchLeave){var bc=true;if(au.triggerOnTouchLeave){var bh=aY(this);bc=F(bg.end,bh)}if(!au.triggerOnTouchEnd&&bc){aa=aC(k)}else{if(au.triggerOnTouchLeave&&!bc){aa=aC(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length&&!al()){G(bd);return true}else{if(be.length&&al()){return true}}}if(al()){X=ay}a3=ar();ac=aM();if(bb()||!am()){aa=q;P(bd,aa)}else{if(au.triggerOnTouchEnd||(au.triggerOnTouchEnd==false&&aa===k)){if(au.preventDefaultEvents!==false){bc.preventDefault()}aa=h;P(bd,aa)}else{if(!au.triggerOnTouchEnd&&a7()){aa=h;aF(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}an(false);return null}function ba(){X=0;a3=0;U=0;a1=0;aZ=0;H=1;S();an(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(au.triggerOnTouchLeave){aa=aC(h);P(bd,aa)}}function aK(){aR.unbind(K,aN);aR.unbind(aD,ba);aR.unbind(ax,a4);aR.unbind(V,M);if(T){aR.unbind(T,L)}an(false)}function aC(bg){var bf=bg;var be=aA();var bd=am();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!au.triggerOnTouchEnd||au.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&au.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if(J()||W()){bd=aF(be,bc,l)}if((Q()||aX())&&bd!==false){bd=aF(be,bc,t)}if(aG()&&bd!==false){bd=aF(be,bc,j)}else{if(ao()&&bd!==false){bd=aF(be,bc,b)}else{if(ah()&&bd!==false){bd=aF(be,bc,B)}}}if(bc===q){if(W()){bd=aF(be,bc,l)}if(aX()){bd=aF(be,bc,t)}ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aF(bf,bc,be){var bd;if(be==l){aR.trigger("swipeStatus",[bc,aP||null,ag||0,ac||0,X,aQ,a2]);if(au.swipeStatus){bd=au.swipeStatus.call(aR,bf,bc,aP||null,ag||0,ac||0,X,aQ,a2);if(bd===false){return false}}if(bc==h&&aV()){clearTimeout(aW);clearTimeout(af);aR.trigger("swipe",[aP,ag,ac,X,aQ,a2]);if(au.swipe){bd=au.swipe.call(aR,bf,aP,ag,ac,X,aQ,a2);if(bd===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ac,X,aQ,a2]);if(au.swipeLeft){bd=au.swipeLeft.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case o:aR.trigger("swipeRight",[aP,ag,ac,X,aQ,a2]);if(au.swipeRight){bd=au.swipeRight.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case e:aR.trigger("swipeUp",[aP,ag,ac,X,aQ,a2]);if(au.swipeUp){bd=au.swipeUp.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case x:aR.trigger("swipeDown",[aP,ag,ac,X,aQ,a2]);if(au.swipeDown){bd=au.swipeDown.call(aR,bf,aP,ag,ac,X,aQ,a2)}break}}}if(be==t){aR.trigger("pinchStatus",[bc,aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchStatus){bd=au.pinchStatus.call(aR,bf,bc,aJ||null,ap||0,ac||0,X,H,aQ);if(bd===false){return false}}if(bc==h&&a9()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchIn){bd=au.pinchIn.call(aR,bf,aJ||null,ap||0,ac||0,X,H,aQ)}break;case A:aR.trigger("pinchOut",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchOut){bd=au.pinchOut.call(aR,bf,aJ||null,ap||0,ac||0,X,H,aQ)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aW);clearTimeout(af);if(Z()&&!I()){O=ar();aW=setTimeout(f.proxy(function(){O=null;aR.trigger("tap",[bf.target]);if(au.tap){bd=au.tap.call(aR,bf,bf.target)}},this),au.doubleTapThreshold)}else{O=null;aR.trigger("tap",[bf.target]);if(au.tap){bd=au.tap.call(aR,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aW);clearTimeout(af);O=null;aR.trigger("doubletap",[bf.target]);if(au.doubleTap){bd=au.doubleTap.call(aR,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aW);O=null;aR.trigger("longtap",[bf.target]);if(au.longTap){bd=au.longTap.call(aR,bf,bf.target)}}}}}return bd}function am(){var bc=true;if(au.threshold!==null){bc=ag>=au.threshold}return bc}function bb(){var bc=false;if(au.cancelThreshold!==null&&aP!==null){bc=(aT(aP)-ag)>=au.cancelThreshold}return bc}function ae(){if(au.pinchThreshold!==null){return ap>=au.pinchThreshold}return true}function aA(){var bc;if(au.maxTimeThreshold){if(ac>=au.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function ak(bc,bd){if(au.preventDefaultEvents===false){return}if(au.allowPageScroll===m){bc.preventDefault()}else{var be=au.allowPageScroll===s;switch(bd){case p:if((au.swipeLeft&&be)||(!be&&au.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((au.swipeRight&&be)||(!be&&au.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((au.swipeUp&&be)||(!be&&au.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((au.swipeDown&&be)||(!be&&au.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aO();var bc=Y();var be=ae();return bd&&bc&&be}function aX(){return !!(au.pinchStatus||au.pinchIn||au.pinchOut)}function Q(){return !!(a9()&&aX())}function aV(){var bf=aA();var bh=am();var be=aO();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(au.swipe||au.swipeStatus||au.swipeLeft||au.swipeRight||au.swipeUp||au.swipeDown)}function J(){return !!(aV()&&W())}function aO(){return((X===au.fingers||au.fingers===i)||!a)}function Y(){return aQ[0].end.x!==0}function a7(){return !!(au.tap)}function Z(){return !!(au.doubleTap)}function aU(){return !!(au.longTap)}function R(){if(O==null){return false}var bc=ar();return(Z()&&((bc-O)<=au.doubleTapThreshold))}function I(){return R()}function aw(){return((X===1||!a)&&(isNaN(ag)||ag<au.threshold))}function a0(){return((ac>au.longTapThreshold)&&(ag<r))}function ah(){return !!(aw()&&a7())}function aG(){return !!(R()&&Z())}function ao(){return !!(a0()&&aU())}function G(bc){a6=ar();ay=bc.touches.length+1}function S(){a6=0;ay=0}function al(){var bc=false;if(a6){var bd=ar()-a6;if(bd<=au.fingerReleaseThreshold){bc=true}}return bc}function aB(){return !!(aR.data(C+"_intouch")===true)}function an(bc){if(!aR){return}if(bc===true){aR.bind(ax,a4);aR.bind(V,M);if(T){aR.bind(T,L)}}else{aR.unbind(ax,a4,false);aR.unbind(V,M,false);if(T){aR.unbind(T,L,false)}}aR.data(C+"_intouch",bc===true)}function ai(be,bc){var bd={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};bd.start.x=bd.last.x=bd.end.x=bc.pageX||bc.clientX;bd.start.y=bd.last.y=bd.end.y=bc.pageY||bc.clientY;aQ[be]=bd;return bd}function aH(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);if(bd===null){bd=ai(be,bc)}bd.last.x=bd.end.x;bd.last.y=bd.end.y;bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bc){return aQ[bc]||null}function aI(bc,bd){bd=Math.max(bd,aT(bc));N[bc].distance=bd}function aT(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=av(p);bc[o]=av(o);bc[e]=av(e);bc[x]=av(x);return bc}function av(bc){return{direction:bc,distance:0}}function aM(){return a3-U}function at(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function aq(){if(H<1){return A}else{return c}}function aS(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aE(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aL(bd,bc){var be=aE(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function ar(){var bc=new Date();return bc.getTime()}function aY(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));// Sort Batch grid thumb

$(document).ready(function(){

	$('<div id="ncdPhotoBase" class="cap-show style-default">\
		<div id="ncdPhotoCaption" data-hide-title="False"><p><span><b></b> <em></em></span></p></div>\
		<div id="ncdPhotoControls">\
		<div id="ncdPhotoCounter" class="ncd-ui" data-show-count="True">\
		<span class="lb-current"></span>\
		/ <span class="lb-total"></span>\
		</div>\
		<div ontouchstart id="ncdPhotoZoom" class="ncd-ui"></div>\
		<span ontouchstart id="ncdPhotoClose" class="ncd-ui"></span>\
		<span ontouchstart id="ncdPhotoNext" class="ncd-ui"></span>\
		<span ontouchstart id="ncdPhotoPrev" class="ncd-ui"></span>\
		</div>\
		<div id="ncdPhotoLoader"><div id="ncdPhotoLoaderSpinner"></div></div>\
		<div id="ncdPhotoOverlay" data-bold-title="True" data-italic-title="True" data-hide-title="False" data-bold-caption="False" data-italic-caption="True" data-hide-caption="False"></div></div>').prependTo('body');

	var bP = $('#ncdPhotoBase'),
	xP = $('#ncdPhotoClose'),
	nP = $('#ncdPhotoNext'),
	pP = $('#ncdPhotoPrev'),
	oP = $('#ncdPhotoOverlay'),
	zP = $('#ncdPhotoZoom'),
	cP = $('#ncdPhotoCaption'),
	iP = $('#ncdPhotoCounter'),
	photo = $('.ncd-photo'),
	photoIE = photo.parent().hasClass('lte-ie'),
	photoGroup = photo.not('.batch, .photo-tcms'),
	photoBatch = $('.ncd-photo.batch'),
	photoTotalCMS = $('.ncd-photo.photo-tcms'),
	photoLoop = "True" == "True",
	photoAutoStop = "True" == "True",
	photoAutoInt,
	photoZoom = "True" == "True",
	photoCount = "True" == "True",
	photoAutoPlayDelay = 0,
	lbCapHide = bP.hasClass('cap-hide') || oP.data('hide-title') == "True" && oP.data('hide-caption') == "True",
	controlTimeAnim = 300;

	

	if(lbCapHide){bP.addClass('cap-hide');}
	if(photoIE){ $('.lte-ie').find(photo).removeClass('photo-flow').addClass('photo-grid'); }

	// Batch

	photoBatch.each(function(){

		var iPi = $(this).find('img[data-photo-count]'),
		batch_album_name = $(this).data('photo-album-name'),
		thumb_gen = $(this).data('thumb-gen'),
		batch_album_name_parse = batch_album_name.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-'),
		batch_orig_parent = iPi.parent().parent();
		batch_orig_src 	= iPi.attr('src'),
		batch_hide = batch_orig_parent.data('batch-hide') == "True",
		uImg = batch_orig_src.split("/").pop().replace(/\d+/g, '').replace('.jpg',''),
		uPath = batch_orig_src.substring(0, batch_orig_src.lastIndexOf("/") + 1);

		$('#out').append(uPath,uImg);

		$(this).children().attr('id',batch_album_name_parse);

		for (var i = 0; i < iPi.data('photo-count'); i++){
			batch_orig_parent.before('<li ontouchstart class="photo-stack '+batch_album_name_parse+'"><div class="img-wrapper" style="background-image: url(\''+uPath+uImg+''+(1+i)+'.jpg\')"><img class="batch t'+(i+1)+'" alt="photo" src="'+uPath+uImg+''+(1+i)+'.jpg" data-src="'+uPath+uImg+''+(1+i)+'.jpg" data-photo-group="'+batch_album_name_parse+'"><p><span><b>'+batch_album_name+'</b></span></p></div></li>');
		}
		if(batch_hide){
			batch_orig_parent.parent().addClass('batch-hide');
		}
		batch_orig_parent.remove();

	}).promise().done(function(){
		
	});

	// Total CMS

	photoTotalCMS.each(function(){

		var batch_album_name = $(this).data('photo-album-name'),
		batch_album_name_parse = batch_album_name.replace(/\s/g,"-"),
		tcms_hide = $(this).find('ol.photo-tcms-hidden').data('tcms-hide') == "True";

		$(this).find('ol.photo-tcms-hidden img').each(function(index){

			var batch_orig_src 	= $(this).attr('src');

			$(this).wrap('<li ontouchstart class="photo-stack '+batch_album_name_parse+'"><div class="img-wrapper" style="background-image: url('+batch_orig_src+')"></div></li>').addClass('batch t'+(index+1)+'').attr('data-src',batch_orig_src).attr('data-photo-group',batch_album_name_parse).after('<p><span><b>'+batch_album_name+'</b></span></p>');
		});

		$(this).find('ol.photo-tcms-hidden').children().unwrap().parent().attr('id',batch_album_name_parse);

		if(tcms_hide){$(this).children('ul').addClass('batch-hide');}

	});

	// Standard

	photoGroup.each(function(){

		var express_album_name = $(this).data('photo-album-name'),
		express_album_name_parse = express_album_name.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');

		$(this).children().attr('id',express_album_name_parse).find('li').addClass(express_album_name_parse);

		$(this).find('img').each(function(index,element){

			var isThumbGen = $(this).attr('data-photo-link') == "True";

			if(isThumbGen){
				var express_src = $(this).unwrap().addClass('t'+(index+1)).attr('data-photo-group',express_album_name).data('src-thumb').replace(/\s/g,"%20");
			}else{
				var express_src = $(this).unwrap().addClass('t'+(index+1)).attr('data-photo-group',express_album_name).data('src').replace(/\s/g,"%20");
			}
			
			if($(this).parent().parent().attr('data-thumb-gen') == "True"){
				$(this).parent().css({'background-image':'url('+ $(this).data('src-thumb').replace(/\s/g,"%20") +')'}).find('b').append(express_album_name);
			}else{
				$(this).parent().css({'background-image':'url('+express_src+')'}).find('b').append(express_album_name);
			}
			
		});

		$(this).find('li').each(function(){

			var isHidden = $(this).attr('data-photo-hide') == "True",
			isLinked = $(this).attr('data-photo-link') == "True",
			isEmpty = $(this).find('img').length < 1;

			if($(this).find('em').is(':empty') && $(this).find('b').css('display') == 'none'){
				$(this).find('span').addClass('empty');
			}
			if(isHidden){
				$(this).addClass('hide');
			}
			if(isLinked){
				$(this).clone().appendTo($('ul.group-link'));
				$(this).addClass(express_album_name_parse+' hide');
			}
			if(isEmpty){
				$(this).remove();
			}
		});
	}).promise().done(function(){
		
	});

	// LB

	function lightBox() {

		bP.addClass('on in');

		$('#ncdPhotoLoader').addClass('processing');

		var $trigger_lb = $(this),
		lbInc = 1,
		evLink = $trigger_lb.attr('data-photo-group'),
		imgGroup_lb;

		if(evLink){
			var group_lb = $(this).data("photo-group").replace(/\s/g,"-");
		}else{
			var lbImgClicked = $trigger_lb.children().children().attr("class").split(' ').pop();
			var group_lb = $trigger_lb.attr("class").split(" ")[1];
		}

		img_lb = $('ul[id='+group_lb+']').find('img');

		img_lb.each(function(index,element){

			var imgLink_tv_lb = $(this).addClass('t'+(index+1)).data('src').replace(/\s/g,"%20");
			var img_lb_src = $('<img src="'+imgLink_tv_lb+'">');
			var imgCap_lb = $(this).next().find('em').text();

			if(evLink) {
				imgGroup_lb = group_lb;
			}else{
				imgGroup_lb = $(this).data("photo-group");
			}

			oP.append($('\
				<div class="slide t'+(index+1)+'" data-index="'+(index+1)+'">\
				<div>\
				<img src="'+imgLink_tv_lb+'"><br>\
				<div class="img-caption-in invis">\
				<p><span><b>'+imgGroup_lb.replace(/-/g," ")+'</b> <em>'+imgCap_lb+'</em></span></p>\
				<p class="ncdPhotoCounter" data-show-count="True">\
				<span class="lb-current">'+(index+1)+'</span> \/\
				<span class="lb-total"></span>\
				</p>\
				</div>\
				</div>\
				</div>'));

			if('True' == 'True' ){ // Protect
				$('.slide').contextmenu(function(){
					return false;
				});
			}

			img_lb_src.on('load', function() {

				if(bP.find('.slide').length == lbInc++){

					$('html').addClass('ncd-photo-lock');
					bP.off().on('touchmove',function(){return false});
					$('#ncdPhotoLoader').removeClass('processing');
					setTimeout(function(){
						bP.removeClass('in');
						maxImgH();
						oP.find('.img-caption-in').addClass('ncd-show').removeClass('invis');
						setTimeout(function(){
							oP.find('.img-caption-in').removeClass('ncd-show');
						}, 600);
					}, 750);

					// Autoplay

					if(photoAutoPlayDelay != 0){
						
						function autoNext(){ nP.trigger("click"); }

						photoAutoInt = setInterval(autoNext, photoAutoPlayDelay);

						if(photoAutoStop){
							nP.add(pP).on("mouseenter",function(){ clearInterval(photoAutoInt); });
						}
					}
				}
			});
		});

		// Set Show

		(evLink) ? oP.children().first().addClass('ncd-show') : oP.find('div.'+lbImgClicked).addClass('ncd-show');
		
		var showLb = oP.find('.ncd-show'),
		imgLb = showLb.find('img'),
		imgLbAll = oP.find('img'),
		showGroup = showLb.find('b').text(),
		showCaption = showLb.find('em').text(),
		showIndex = showLb.data('index');
		iP.find('.lb-current').text(showIndex);

		if(lbCapHide){
			cP.remove();
		}else{
			cP.find('b').text(showGroup).next().text(showCaption);
		}

		var maxImgH = function(){
			
			var thisSlide = oP.find('.ncd-show'),
			imgLb = thisSlide.find('img');

			$("<img>").attr("src", imgLb.attr("src")).load(function() {
	      var imageWidth = this.width;
				var imageHeight = this.height;

				if(lbCapHide){ // No cap
					oP.find('img').css('max-height',bP.height());
				}else if(!lbCapHide){ // Has Cap
					var capH = thisSlide.find('.img-caption-in').outerHeight();
					imgLb.css({'max-height':(bP.height() - capH)});
					$('#ncdPhotoControls').css('bottom',cP.outerHeight());
				}

				if(photoZoom){
					if(imageWidth > $(window).width() || imageHeight > $(window).height()){
						zP.addClass('enable')
					}else{
						zP.removeClass('enable')
					}
				}
	    });
		}

		maxImgH();

		setTimeout(function(){ maxImgH(); }, 300); // stabilize zoom logic

		/*************************
		Controls
		*************************/

		var zoomIn = function(){

			oP.on('mousewheel', function(){return false;});

			var imgLb = oP.find('.ncd-show img'),
			imgParent = imgLb.parent().parent();

			$("<img>").attr("src", imgLb.attr("src")).load(function() {
	      var imageWidth = this.width;
				var imageHeight = this.height;
		
				zP.addClass('zoom');
				nP.add(pP).addClass('hide');
				imgParent.addClass('zoom transition');

				setTimeout(function(){
					imgLb.css('max-height','none');
					imgParent.css({'max-height':window.innerHeight+"px"}).on('mousemove', function(e){
						var offset = imgParent.offset();
						var x = e.pageX - offset.left;
						x = x * (imageWidth - imgParent.width()) / imgParent.width();

						var y = e.pageY - offset.top;
						y = y * (imageHeight - imgParent.height()) / imgParent.height();
						imgParent.scrollTop(y*1).scrollLeft(x*1);
					}).removeClass('transition').addClass('in');

					bP.off('touchmove');

				}, 250);
			});
		}

		var zoomOut = function(){
			var imgParent = oP.find('.ncd-show img').parent().parent();

			zP.removeClass('zoom');
			imgParent.addClass('transition out').off('mousemove');
			nP.add(pP).removeClass('hide');

			setTimeout(function(){

				maxImgH();
				imgParent.scrollLeft(0).scrollTop(0).css('max-height','').removeClass('in transition');

			}, 250);

			setTimeout(function(){

				imgParent.removeClass('zoom out');
				oP.off('mousewheel');
				bP.off().on('touchmove',function(){return false});

			}, 500);
		}

		// Count

		if(photoCount){$('.lb-total').text(oP.find('.slide').length);} 

		// Single Image

		if(imgLbAll.length < 2){ bP.addClass('single-image'); }

		// Zoom

		if(photoZoom){
			zP.off().on('click', function() {
				if(zP.hasClass('enable')){
					zP.hasClass('zoom') ? zoomOut() : zoomIn();
				}
			});
			oP.find('img').off().on('dblclick', function() {
				if(zP.hasClass('enable')){
					zP.hasClass('zoom') ? zoomOut() : zoomIn();
				}
			});
		}

		// Loop Init

		if(oP.children().first().hasClass('ncd-show')){
			!photoLoop ? pP.addClass('hide'): pP.removeClass('hide');
		}
		if(oP.children().last().hasClass('ncd-show')){
			!photoLoop ? nP.addClass('hide'): nP.removeClass('hide');
		}

		// NEXT

		nP.off().on('click', function() {

			zoomOut();

			var show = oP.find('.ncd-show');

			if (show.next().length == 0) {
				oP.children().removeClass('ncd-show');
				var firstSlide = oP.children().first();
				var showGroup = firstSlide.addClass('ncd-show').find('b').text(),
				showCaption = firstSlide.find('em').text(),
				showIndex = firstSlide.data('index');
				cP.find('b').text(showGroup).next().text(showCaption);
				iP.find('.lb-current').text(showIndex);

			} else {
				show.removeClass('ncd-show').next().addClass('ncd-show');

				var showGroup = show.next().find('b').text(),
				showCaption = show.next().find('em').text(),
				showIndex = show.next().data('index');
				cP.find('b').text(showGroup).next().text(showCaption);
				iP.find('.lb-current').text(showIndex);

				if(oP.children().last().hasClass('ncd-show')){
					!photoLoop ? nP.addClass('hide'): nP.removeClass('hide');
				}
			}

			maxImgH();

			bP.addClass('go-next'); // Animate Transition
			setTimeout(function() { bP.removeClass('go-next'); }, controlTimeAnim);
		});

		// PREV

		pP.off().on('click', function() {

			zoomOut();

			var show = oP.find('.ncd-show');

			if (show.prev().length == 0) {
				oP.children().removeClass('ncd-show');
				var lastSlide = oP.children().last();
				var showGroup = lastSlide.addClass('ncd-show').find('b').text(),
				showCaption = lastSlide.find('em').text(),
				showIndex = lastSlide.data('index');
				cP.find('b').text(showGroup).next().text(showCaption);
				iP.find('.lb-current').text(showIndex);

			} else {
				show.removeClass('ncd-show').prev().addClass('ncd-show');

				var showGroup = show.prev().find('b').text(),
				showCaption = show.prev().find('em').text(),
				showIndex = show.prev().data('index');
				cP.find('b').text(showGroup).next().text(showCaption);
				iP.find('.lb-current').text(showIndex);

				if(oP.children().first().hasClass('ncd-show')){
					!photoLoop ? pP.addClass('hide'): pP.removeClass('hide');
				}
			}

			maxImgH();

			bP.addClass('go-prev'); // Animate Transition
			setTimeout(function() {
				bP.removeClass('go-prev');
			}, controlTimeAnim);
		});

		// Keyboard

		$(document).off('keydown').on('keydown', function(e) {
			switch(e.which) {
				case 37: pP.trigger("click");
				break;
				case 38: if(zP.hasClass('enable')){zoomIn();}
				break;
				case 39: nP.trigger("click");
				break;
				case 40: if(zP.hasClass('enable')){zoomOut();}
				break;
				case 88: xP.trigger("click");
				break;
				case 27: xP.trigger("click");
				break;
				default: return;
			}
			e.preventDefault();
		});

		// Swipe

		oP.swipe("enable");

		oP.swipe({
			tap:function(e, target) {
				var img = oP.find('img');
				if (!img.is(e.target) && img.has(e.target).length === 0  && !$(e.target).hasClass('ncd-ui')){
					closeLb();
				}
				e.preventDefault();
			},
			hold:function() {
				
				if(zP.hasClass('enable') && !$('.ncd-show').hasClass('zoom')){
					bP.off('touchmove');
					zoomIn();
				}
				
			},
			swipeStatus:function(event, phase, direction, distance){

				if (phase=="end" && !$('.ncd-show').hasClass('zoom')){
					if(direction=="left"){
						nP.trigger("click");
					}
					if(direction=="right"){
						pP.trigger("click");
					}
				}
				if(direction=="right" && $('.ncd-show').hasClass('zoom') || direction=="left" && $('.ncd-show').hasClass('zoom')){
					bP.off('touchmove');
				}
				
				if(direction=="up" && zP.hasClass('enable') && !$('.ncd-show').hasClass('zoom')){
					bP.off('touchmove');
					zoomIn();
				}
				
				if(direction=="up" && $('.ncd-show').hasClass('zoom')){
					bP.off().on('touchmove',function(){return false});
				}
				
				if(direction=="down" && !$('.ncd-show').hasClass('zoom')){
					closeLb();
				}
				
				
				if(direction=="down" && $('.ncd-show').hasClass('zoom')){
					zoomOut();
					bP.off().on('touchmove',function(){return false});
				}
				
			},
			allowPageScroll:"auto",
			triggerOnTouchEnd:false,
			threshold:30,
		});

		// Close

		var closeLb = function (){

			zoomOut();

			clearInterval(photoAutoInt);
			oP.swipe("disable");
			$('html').removeClass('ncd-photo-lock');
			$('body').off('touchmove');
			nP.add(pP).removeClass('hide');
			oP.removeClass('ncd-show in transition zoom out');
			bP.removeClass('on ev-link event-photo single-image').addClass('out');
			
			setTimeout(function(){ 
				bP.removeClass('out');
				oP.find('.slide').remove();
			}, controlTimeAnim);
		}

		xP.off().on('click',function() {
			setTimeout(function() {
				closeLb();
			}, 100);
		});

		// Resize

		$(window).resize(function(){
			if(!zP.hasClass('zoom') && bP.hasClass('on')){
				maxImgH();
			}else if(bP.hasClass('on')){
				zoomOut();
			}
		});

	}

	// Lightbox Triggers

	$('li.photo-stack').not('[data-photo-group]').not('[data-ext-link="True"]').off().on('click', lightBox);
	$('img[data-photo-group]').off().on('click', lightBox);
	$('a[data-photo-group]').removeAttr("href").off().on('click', lightBox);
	if('True' == 'True' ){
		$('li.photo-stack').on('contextmenu dragstart drop selectstart', function(){return false;});
	}

	// IE 9

	if(photoIE){
		$(window).load(function(){
			photo.find('img').parent().css({'background-size':'cover'});
		});
	}

});



return stack;})(stacks.stacks_in_16_page5);