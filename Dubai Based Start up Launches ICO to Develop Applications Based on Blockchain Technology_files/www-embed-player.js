(function(){var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={xa:!0},ea={};try{ea.__proto__=da;ca=ea.xa;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.o=b.prototype}
for(var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ja=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}(),ka=ia,la=["Reflect",
"construct"],ma=0;ma<la.length-1;ma++){var na=la[ma];na in ka||(ka[na]={});ka=ka[na]}var oa=la[la.length-1];ja!=ka[oa]&&null!=ja&&ha(ka,oa,{configurable:!0,writable:!0,value:ja});var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function t(a,b,c){a=a.split(".");c=c||p;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function u(a,b){for(var c=a.split("."),d=b||p,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function pa(){}
function qa(a){a.ja=void 0;a.getInstance=function(){return a.ja?a.ja:a.ja=new a}}
function ra(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function sa(a){return"array"==ra(a)}
function ta(a){var b=ra(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ua(a){return"function"==ra(a)}
function va(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var wa="closure_uid_"+(1E9*Math.random()>>>0),xa=0;function za(a,b,c){return a.call.apply(a.bind,arguments)}
function Aa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=za:v=Aa;return v.apply(null,arguments)}
function x(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var y=Date.now||function(){return+new Date};
function z(a,b){function c(){}
c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.jb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var Ba=document,A=window;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
z(B,Error);B.prototype.name="CustomError";var Ca=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Da(a,b){return a<b?-1:a>b?1:0}
function Ea(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Fa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ga=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function Ha(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Ia(a,b){var c=Fa(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ja(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ka(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ta(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var La;a:{var Ma=p.navigator;if(Ma){var Na=Ma.userAgent;if(Na){La=Na;break a}}La=""}function D(a){return-1!=La.indexOf(a)}
;function Oa(a,b){var c=ta(b),d=c?b:arguments;for(c=c?0:1;c<d.length&&(a=a[d[c]],q(a));c++);return a}
function Pa(a){var b=Ra,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Sa(a){for(var b in a)return!1;return!0}
function Ta(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ua(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Va.length;f++)c=Va[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Xa(a){Xa[" "](a);return a}
Xa[" "]=pa;function Ya(a,b){var c=Za;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var $a=D("Opera"),ab=D("Trident")||D("MSIE"),bb=D("Edge"),cb=D("Gecko")&&!(-1!=La.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),db=-1!=La.toLowerCase().indexOf("webkit")&&!D("Edge");function eb(){var a=p.document;return a?a.documentMode:void 0}
var fb;a:{var gb="",hb=function(){var a=La;if(cb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(bb)return/Edge\/([\d\.]+)/.exec(a);if(ab)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(db)return/WebKit\/(\S+)/.exec(a);if($a)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
hb&&(gb=hb?hb[1]:"");if(ab){var ib=eb();if(null!=ib&&ib>parseFloat(gb)){fb=String(ib);break a}}fb=gb}var jb=fb,Za={};
function kb(a){return Ya(a,function(){for(var b=0,c=Ca(String(jb)).split("."),d=Ca(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Da(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Da(0==g[2].length,0==h[2].length)||Da(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var lb;var mb=p.document;lb=mb&&ab?eb()||("CSS1Compat"==mb.compatMode?parseInt(jb,10):5):void 0;!cb&&!ab||ab&&9<=Number(lb)||cb&&kb("1.9.1");ab&&kb("9");function nb(){this.b="";this.f=ob}
nb.prototype.ia=!0;nb.prototype.ha=function(){return this.b};
function pb(a){return a instanceof nb&&a.constructor===nb&&a.f===ob?a.b:"type_error:TrustedResourceUrl"}
var ob={};function E(){this.b="";this.f=qb}
E.prototype.ia=!0;E.prototype.ha=function(){return this.b};
function rb(a){return a instanceof E&&a.constructor===E&&a.f===qb?a.b:"type_error:SafeUrl"}
var sb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function tb(a){if(a instanceof E)return a;a=a.ia?a.ha():String(a);sb.test(a)||(a="about:invalid#zClosurez");return ub(a)}
var qb={};function ub(a){var b=new E;b.b=a;return b}
ub("about:blank");function vb(){this.b=""}
vb.prototype.ia=!0;vb.prototype.ha=function(){return this.b};
function wb(a){var b=new vb;b.b=a;return b}
wb("<!DOCTYPE html>");wb("");wb("<br>");function xb(a,b){var c=b instanceof E?b:tb(b);a.href=rb(c)}
function yb(a,b){a.src=pb(b)}
;function zb(a,b){this.b=q(a)?a:0;this.f=q(b)?b:0}
zb.prototype.equals=function(a){return a instanceof zb&&(this==a?!0:this&&a?this.b==a.b&&this.f==a.f:!1)};
zb.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
zb.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
zb.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};function Ab(a,b){this.width=a;this.height=b}
k=Ab.prototype;k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Bb(a){var b=document;return r(a)?b.getElementById(a):a}
function Cb(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Db(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Eb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Fb(){var a=Gb;try{var b;if(b=!!a&&null!=a.location.href)a:{try{Xa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
;function Hb(a){Ib();var b=new nb;b.b=a;return b}
var Ib=pa;function Jb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Kb=!!window.google_async_iframe_id,Gb=Kb&&window.parent||window;var Lb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function F(a){return a.match(Lb)}
function Mb(a){return a?decodeURI(a):a}
function Nb(a,b,c){if(sa(b))for(var d=0;d<b.length;d++)Nb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ob(a){var b=[],c;for(c in a)Nb(c,a[c],b);return b.join("&")}
function Pb(a,b){var c=Ob(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var Qb=null;function Rb(a,b){var c=Sb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;function Tb(a,b){this.events=[];this.f=b||p;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue,c=b.google_measure_js_timing);if(null===Qb){Qb="";try{var d=p.top.location.hash;if(d){var e=d.match(/\bdeid=([\d,]+)/);Qb=e?e[1]:""}}catch(f){}}d=Qb;d=d.indexOf&&0<=d.indexOf("1337");this.b=(this.b=null!=c?c:Math.random()<a)||d;c=this.f.performance;this.g=!!(c&&c.mark&&c.clearMarks&&d)}
Tb.prototype.h=function(a){if(a&&this.g){var b=this.f.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};
Tb.prototype.start=function(a,b){if(!this.b)return null;var c=new Rb(a,b);this.g&&this.f.performance.mark("goog_"+c.uniqueId+"_start");return c};
Tb.prototype.end=function(a){this.b&&"number"==typeof a.value&&(a.duration=Sb()-a.value,this.g&&this.f.performance.mark("goog_"+a.uniqueId+"_end"),this.b&&this.events.push(a))};
function Sb(){var a=p.performance;return a&&a.now?a.now():y()}
;if(Kb&&!Fb()){var Ub="."+Ba.domain;try{for(;2<Ub.split(".").length&&!Fb();)Ba.domain=Ub=Ub.substr(Ub.indexOf(".")+1),Gb=window.parent}catch(a){}Fb()||(Gb=window)}var Vb=Gb,G=new Tb(1,Vb);function Wb(){Vb.google_measure_js_timing||(G.events!=G.f.google_js_reporting_queue&&(G.events.length=0,G.g&&C(G.events,G.h,G)),G.b=!1)}
if("complete"==Vb.document.readyState)Wb();else if(G.b){var Xb=function(){Wb()};
Vb.addEventListener?Vb.addEventListener("load",Xb,void 0):Vb.attachEvent&&Vb.attachEvent("onload",Xb)};var Yb=(new Date).getTime();function Zb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function $b(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var H=1518500249}else m=d^f^h,H=1859775393;else 60>c?(m=d&f|h&(d|f),H=2400959708):(m=d^f^h,H=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+H+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[m++]=a[d++],w++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,w;a();return{reset:a,update:c,digest:d,za:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function ac(a,b,c){var d=[],e=[];if(1==(sa(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),bc(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=bc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function bc(a){var b=$b();b.update(a);return b.za().toLowerCase()}
;function cc(a){this.b=a||{cookie:""}}
k=cc.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ca(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ca(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var dc=new cc("undefined"==typeof document?null:document);dc.f=3950;function ec(){var a=[],b=Zb(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new cc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new cc(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,ac(Zb(d),b,a||null)].join(" "):null}return null}
;function fc(a,b,c){this.h=c;this.g=a;this.i=b;this.f=0;this.b=null}
fc.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function gc(a,b){a.i(b);a.f<a.h&&(a.f++,b.next=a.b,a.b=b)}
;function hc(a){p.setTimeout(function(){throw a;},0)}
var ic;
function jc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.oa;c.oa=null;a()}};
return function(a){d.next={oa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function kc(){this.f=this.b=null}
var mc=new fc(function(){return new lc},function(a){a.reset()},100);
kc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function lc(){this.next=this.scope=this.b=null}
lc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
lc.prototype.reset=function(){this.next=this.scope=this.b=null};function nc(a,b){oc||pc();qc||(oc(),qc=!0);var c=rc,d=mc.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var oc;function pc(){if(-1!=String(p.Promise).indexOf("[native code]")){var a=p.Promise.resolve(void 0);oc=function(){a.then(sc)}}else oc=function(){var a=sc;
!ua(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(ic||(ic=jc()),ic(a)):p.setImmediate(a)}}
var qc=!1,rc=new kc;function sc(){for(var a;a=rc.remove();){try{a.b.call(a.scope)}catch(b){hc(b)}gc(mc,a)}qc=!1}
;var tc=D("Firefox"),uc=(D("Chrome")||D("CriOS"))&&!D("Edge");function I(){this.f=this.f;this.F=this.F}
I.prototype.f=!1;I.prototype.dispose=function(){this.f||(this.f=!0,this.l())};
function vc(a,b){a.f?q(void 0)?b.call(void 0):b():(a.F||(a.F=[]),a.F.push(q(void 0)?v(b,void 0):b))}
I.prototype.l=function(){if(this.F)for(;this.F.length;)this.F.shift()()};
function wc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function xc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ta(d)?xc.apply(null,d):wc(d)}}
;var yc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function zc(){}
zc.prototype.next=function(){throw yc;};
zc.prototype.Y=function(){return this};
function Ac(a){if(a instanceof zc)return a;if("function"==typeof a.Y)return a.Y(!1);if(ta(a)){var b=0,c=new zc;c.next=function(){for(;;){if(b>=a.length)throw yc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Bc(a,b){if(ta(a))try{C(a,b,void 0)}catch(c){if(c!==yc)throw c;}else{a=Ac(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==yc)throw c;}}}
function Cc(a){if(ta(a))return Ja(a);a=Ac(a);var b=[];Bc(a,function(a){b.push(a)});
return b}
;function Dc(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function Ec(a){a=String(a);if(Dc(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Fc(a){var b=[];Gc(new Hc,a,b);return b.join("")}
function Hc(){}
function Gc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(sa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Gc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ic(d,c),c.push(":"),Gc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ic(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Jc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Kc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Ic(a,b){b.push('"',a.replace(Kc,function(a){var b=Jc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Jc[a]=b);return b}),'"')}
;function Lc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Mc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function J(a,b){this.b=0;this.m=void 0;this.h=this.f=this.g=null;this.i=this.j=!1;if(a!=pa)try{var c=this;a.call(b,function(a){Nc(c,2,a)},function(a){Nc(c,3,a)})}catch(d){Nc(this,3,d)}}
function Oc(){this.next=this.context=this.f=this.g=this.b=null;this.h=!1}
Oc.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.h=!1};
var Pc=new fc(function(){return new Oc},function(a){a.reset()},100);
function Qc(a,b,c){var d=Pc.get();d.g=a;d.f=b;d.context=c;return d}
function Rc(a){return new J(function(b,c){c(a)})}
J.prototype.then=function(a,b,c){return Sc(this,ua(a)?a:null,ua(b)?b:null,c)};
Lc(J);function Tc(a,b){return Sc(a,null,b,void 0)}
J.prototype.cancel=function(a){0==this.b&&nc(function(){var b=new Uc(a);Vc(this,b)},this)};
function Vc(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.h||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Vc(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Wc(c),Xc(c,e,3,b)))}a.g=null}else Nc(a,3,b)}
function Yc(a,b){a.f||2!=a.b&&3!=a.b||Zc(a);a.h?a.h.next=b:a.f=b;a.h=b}
function Sc(a,b,c,d){var e=Qc(null,null,null);e.b=new J(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Uc?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Yc(a,e);return e.b}
J.prototype.w=function(a){this.b=0;Nc(this,2,a)};
J.prototype.A=function(a){this.b=0;Nc(this,3,a)};
function Nc(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.w,f=a.A;if(d instanceof J){Yc(d,Qc(e||pa,f||null,a));var g=!0}else if(Mc(d))d.then(e,f,a),g=!0;else{if(va(d))try{var h=d.then;if(ua(h)){$c(d,h,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}g||(a.m=c,a.b=b,a.g=null,Zc(a),3!=b||c instanceof Uc||ad(a,c))}}
function $c(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Zc(a){a.j||(a.j=!0,nc(a.u,a))}
function Wc(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
J.prototype.u=function(){for(var a;a=Wc(this);)Xc(this,a,this.b,this.m);this.j=!1};
function Xc(a,b,c,d){if(3==c&&b.f&&!b.h)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,bd(b,c,d);else try{b.h?b.g.call(b.context):bd(b,c,d)}catch(e){cd.call(null,e)}gc(Pc,b)}
function bd(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function ad(a,b){a.i=!0;nc(function(){a.i&&cd.call(null,b)})}
var cd=hc;function Uc(a){B.call(this,a)}
z(Uc,B);Uc.prototype.name="cancel";function K(a){I.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.g={};this.m=!!a}
z(K,I);k=K.prototype;k.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function dd(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=Ha(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.D(b)}}
k.D=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.i?(this.h.push(a),this.b[a+1]=pa):(c&&Ia(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.O=function(a){var b=this.g[a];if(b){for(var c=Array(arguments.length-1),d=1,e=arguments.length;d<e;d++)c[d-1]=arguments[d];if(this.m)for(d=0;d<b.length;d++){var f=b[d];ed(this.b[f+1],this.b[f+2],c)}else{this.i++;try{for(d=0,e=b.length;d<e;d++)f=b[d],this.b[f+1].apply(this.b[f+2],c)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;f=this.h.pop();)this.D(f)}}return 0!=d}return!1};
function ed(a,b,c){nc(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.g[a];b&&(C(b,this.D,this),delete this.g[a])}else this.b.length=0,this.g={}};
k.l=function(){K.o.l.call(this);this.clear();this.h.length=0};function fd(a){this.b=a}
fd.prototype.set=function(a,b){q(b)?this.b.set(a,Fc(b)):this.b.remove(a)};
fd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return Ec(b)}catch(c){throw"Storage: Invalid value was encountered";}};
fd.prototype.remove=function(a){this.b.remove(a)};function gd(a){this.b=a}
z(gd,fd);function hd(a){this.data=a}
function id(a){return!q(a)||a instanceof hd?a:new hd(a)}
gd.prototype.set=function(a,b){gd.o.set.call(this,a,id(b))};
gd.prototype.f=function(a){a=gd.o.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
gd.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function L(a){this.b=a}
z(L,gd);L.prototype.set=function(a,b,c){if(b=id(b)){if(c){if(c<y()){L.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}L.o.set.call(this,a,b)};
L.prototype.f=function(a,b){var c=L.o.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<y()||!!d&&d>y()}if(d)L.prototype.remove.call(this,a);else return c}};function jd(a){this.b=a}
z(jd,L);function kd(){}
;function ld(){}
z(ld,kd);ld.prototype.clear=function(){var a=Cc(this.Y(!0)),b=this;C(a,function(a){b.remove(a)})};function md(a){this.b=a}
z(md,ld);k=md.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.Y=function(a){var b=0,c=this.b,d=new zc;d.next=function(){if(b>=c.length)throw yc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function nd(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
z(nd,md);function od(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
z(od,md);var pd=!1,qd="";function rd(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(pd=!0,a.description)){qd=rd(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){pd=!0;qd="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],pd=!(!a||!a.enabledPlugin))){qd=rd(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");pd=!0;qd=rd(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");pd=!0;qd="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),pd=!0,qd=rd(b.GetVariable("$version"))}catch(c){}})();
var sd=pd,td=qd;var M=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},ud="Microsoft Internet Explorer"==navigator.appName;
function vd(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
;var wd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",wd,void 0);function N(a){vd(wd,arguments)}
function O(a,b){return a in wd?wd[a]:b}
function P(a){return O(a,void 0)}
;function Q(a,b){var c=u("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=O("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),N("ERRORS",c))}
function xd(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Q(b)}}:a}
;function R(a){return O("EXPERIMENT_FLAGS",{})[a]}
;var yd={};function zd(a){return yd[a]||(yd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function Ad(a,b){return a?a.dataset?a.dataset[zd(b)]:a.getAttribute("data-"+b):null}
function Bd(a){a&&(a.dataset?a.dataset[zd("loaded")]="true":a.setAttribute("data-loaded","true"))}
;function S(a,b){ua(a)&&(a=xd(a));return window.setTimeout(a,b)}
;var Cd=u("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.D;K.prototype.publish=K.prototype.O;K.prototype.clear=K.prototype.clear;t("ytPubsubPubsubInstance",Cd,void 0);var Dd=u("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",Dd,void 0);var Gd=u("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",Gd,void 0);var Hd=u("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",Hd,void 0);
function Id(a,b){var c=Jd();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){Dd[d]&&b.apply(window,c)};
try{Hd[a]?f():S(f,0)}catch(g){Q(g)}},void 0);
Dd[d]=!0;Gd[a]||(Gd[a]=[]);Gd[a].push(d);return d}return 0}
function Jd(){return u("ytPubsubPubsubInstance")}
function Kd(a){Gd[a]&&(a=Gd[a],C(a,function(a){Dd[a]&&delete Dd[a]}),a.length=0)}
function Ld(a){var b=Jd();if(b)if(b.clear(a),a)Kd(a);else for(var c in Gd)Kd(c)}
function Md(a,b){var c=Jd();c&&c.publish.apply(c,arguments)}
function Nd(a){var b=Jd();b&&("number"==typeof a?a=[a]:r(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete Dd[a]}))}
;var Od=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Pd=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Qd(a,b){var c=Rd(a),d=document.getElementById(c),e=d&&Ad(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=Id(c,b);var g=""+(b[wa]||(b[wa]=++xa));Sd[g]=e}f||(d=Td(a,c,function(){Ad(d,"loaded")||(Bd(d),Md(c),S(x(Ld,c),0))}))}}
function Td(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
yb(d,Hb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Ud(a){a=Rd(a);var b=document.getElementById(a);b&&(Ld(a),b.parentNode.removeChild(b))}
function Vd(a,b){if(a&&b){var c=""+(b[wa]||(b[wa]=++xa));(c=Sd[c])&&Nd(c)}}
function Rd(a){var b=document.createElement("a");xb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ea(a)}
var Sd={};function Wd(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Od,""),c=c.replace(Pd,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Qd(a,b)}
;var Xd=null;function Yd(){var a=O("BG_I",null),b=O("BG_IU",null),c=O("BG_P",void 0);b?Wd(b,function(){window.botguard?Zd(c):(Ud(b),Q(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),Zd(c))}
function Zd(a){Xd=new window.botguard.bg(a);R("botguard_periodic_refresh")?M():R("botguard_always_refresh")}
function $d(){return null!=Xd}
function ae(){return Xd?Xd.invoke():null}
;y();var be=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function ce(){if(!be)return null;var a=be();return"open"in a?a:null}
function de(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function ee(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?sa(b[f])?Ka(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function fe(a,b){var c=a.split("#",2);a=c[0];c=1<c.length?"#"+c[1]:"";var d=a.split("?",2);a=d[0];d=ee(d[1]||"");for(var e in b)d[e]=b[e];return Pb(a,d)+c}
;var ge={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},he=!1;
function ie(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=F(a)[1]||null,e=Mb(F(a)[3]||null);d&&e?(d=c,c=F(a),d=F(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Mb(F(c)[3]||null)==e&&(Number(F(c)[4]||null)||null)==(Number(F(a)[4]||null)||null):!0;for(var f in ge){if((e=d=O(ge[f]))&&!(e=c)){var g=a;e=f;var h=O("CORS_HEADER_WHITELIST")||{};e=(g=Mb(F(g)[3]||null))?(h=h[g])?0<=Fa(h,e):!1:!0}e&&(b[f]=d)}return b}
function je(a,b){var c=O("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.lb&&(!Mb(F(a)[3]||null)||b.withCredentials||Mb(F(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.B&&b.B[c])}
function ke(a,b){var c=b.format||"JSON";b.Ea&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=O("XSRF_FIELD_NAME",void 0),e=O("XSRF_TOKEN",void 0),f=b.bb;f&&(f[d]&&delete f[d],a=fe(a,f||{}));f=b.postBody||"";var g=b.B;je(a,b)&&(g||(g={}),g[d]=e);g&&r(f)&&(d=ee(f),Wa(d,g),f=b.sa&&"JSON"==b.sa?JSON.stringify(d):Ob(d));d=f||g&&!Sa(g);!he&&d&&"POST"!=b.method&&(he=!0,Q(Error("AJAX request with postData should use POST")));var h=
!1,l,m=le(a,function(a){if(!h){h=!0;l&&window.clearTimeout(l);var d=de(a),e=null;if(d||400<=a.status&&500>a.status)e=me(c,a,b.kb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}e=e||{};var f=b.context||p;d?b.P&&b.P.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Ja&&b.Ja.call(f,a,e)}},b.method,f,b.headers,b.responseType,b.withCredentials);
b.aa&&0<b.timeout&&(l=S(function(){h||(h=!0,m.abort(),window.clearTimeout(l),b.aa.call(b.context||p,m))},b.timeout))}
function me(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?ne(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=oe(a)})}c&&pe(d);
return d}
function pe(a){if(va(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=wb(a[b]);a[c]=d}else pe(a[b])}}
function ne(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function oe(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function qe(a,b){b.method="POST";b.B||(b.B={});ke(a,b)}
function le(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&xd(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=ce();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c;if(e=ie(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var re={},se=0;function te(a,b){a&&(O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?le(a,b):ue(a,b))}
function ue(a,b){var c=new Image,d=""+se++;re[d]=c;c.onload=c.onerror=function(){b&&re[d]&&b();delete re[d]};
c.src=a}
;var ve={value:0};
function we(a,b,c,d,e,f){b=void 0===b?"ERROR":b;e=void 0===e?!1:e;f=f||{};f.name=c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=ve.value)){e=a.stacktrace;c=a.columnNumber;d=u("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(H){h="Not available",
g=!0}try{var l=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(H){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(xe[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=a.fileName;h={bb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,
1E3),line:h,level:b,"client.name":f.name},B:{url:O("PAGE_NAME",window.location.href),file:l},method:"POST"};f.version&&(h["client.version"]=f.version);e&&(h.B.stack=e);for(var m in f)h.B["client."+m]=f[m];if(m=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var w in m)h.B[w]=m[w];ke("/error_204",h);xe[a.message]=!0;ve.value++}}}
var xe={};var ye=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",ye,void 0);function ze(a){vd(ye,arguments)}
;function Ae(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):S(a,c||0)}
function Be(a){if(!isNaN(a)){var b=u("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
;var Ce=[],De=!1;function Ee(){function a(){De=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)}
Wd("//static.doubleclick.net/instream/ad_status.js",a);Ce.push(Ae(function(){De||"google_ad_status"in window||(Vd("//static.doubleclick.net/instream/ad_status.js",a),N("DCLKSTAT",3))},1))}
function Fe(){return parseInt(O("DCLKSTAT",0),10)}
;var Ge=0,He=u("ytDomDomGetNextId")||function(){return++Ge};
t("ytDomDomGetNextId",He,void 0);var Ie={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Je(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ie||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Je.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Je.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Je.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ra=u("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Ra,void 0);var Ke=u("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",Ke,void 0);function Le(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Pa(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Me(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Le(a,b,c,d);if(e)return e;e=++Ke.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Je(d);if(!Eb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Je(b);
b.currentTarget=a;return c.call(a,b)};
g=xd(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ra[e]=[a,b,c,g,d];return e}
function Ne(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Ra){var b=Ra[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ra[a]}}))}
;function Oe(){if(null==u("_lact",window)){var a=parseInt(O("LACT"),10);a=isFinite(a)?y()-Math.max(a,0):-1;t("_lact",a,window);t("_fact",a,window);-1==a&&T();Me(document,"keydown",T);Me(document,"keyup",T);Me(document,"mousedown",T);Me(document,"mouseup",T);Id("page-mouse",T);Id("page-scroll",T);Id("page-resize",T)}}
function T(){null==u("_lact",window)&&(Oe(),u("_lact",window));var a=y();t("_lact",a,window);-1==u("_fact",window)&&t("_fact",a,window);Md("USER_ACTIVE")}
function Pe(){var a=u("_lact",window);return null==a?-1:Math.max(y()-a,0)}
var Qe=T;function Re(a,b,c,d,e){this.g=a;this.i=b;this.h=c;this.f=d;this.b=e}
var Se=1;function Te(a){var b={};void 0!==a.g?b.trackingParams=a.g:(b.veType=a.i,null!=a.h&&(b.veCounter=a.h),null!=a.f&&(b.elementIndex=a.f));void 0!==a.b&&(b.dataElement=Te(a.b));return b}
;var Ue={log_event:"events",log_event2:"events",log_interaction:"interactions"},Ve=Object.create(null);Ve.log_event="GENERIC_EVENT_LOGGING";Ve.log_event2="GENERIC_EVENT_LOGGING";Ve.log_interaction="INTERACTION_LOGGING";var We={},Xe={},Ye=0,U=u("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",U,void 0);var Ze=u("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",Ze,void 0);var $e=u("ytLoggingTransportDispatchedStats_")||{};
t("ytLoggingTransportDispatchedStats_",$e,void 0);var af=u("ytLoggingTransportCapturedTime_")||{};t("ytytLoggingTransportCapturedTime_",af,void 0);function bf(a,b){Xe[a.endpoint]=b;if(a.Z){var c=a.Z;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Ze[a.Z.token]=d;c=cf(a.endpoint,a.Z.token)}else c=cf(a.endpoint);c.push(a.ra);d=R("web_logging_max_batch");c.length>=(Number(d||0)||20)?df():ef()}
function df(){window.clearTimeout(Ye);if(!Sa(U)){for(var a in U){var b=We[a];if(!b){var c=Xe[a];if(!c)continue;b=new c;We[a]=b}c=void 0;var d=a,e=b,f=Ue[d],g=$e[d]||{};$e[d]=g;b=Math.round(M());for(c in U[d]){var h=e.b;h={client:{hl:h.Ha,gl:h.Ga,clientName:h.Fa,clientVersion:h.innertubeContextClientVersion}};O("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});h={context:h};h[f]=cf(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;
h.requestTimeMs=b;var l=Ze[c];if(l)a:{var m=h,w=c;if(l.videoId)var H="VIDEO";else if(l.playlistId)H="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:w,scope:H}]}delete Ze[c];ff(e,d,h)}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete U[a]}Sa(U)||
ef()}}
function ef(){window.clearTimeout(Ye);Ye=S(df,O("LOGGING_BATCH_TIMEOUT",1E4))}
function cf(a,b){b||(b="");U[a]=U[a]||{};U[a][b]=U[a][b]||[];return U[a][b]}
;function gf(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||M());f[a]=b;f.context={lastActivityMs:String(d?-1:Pe())};a=R("web_system_health_gel2")&&"systemHealthCaptured"==a?"log_event2":"log_event";bf({endpoint:a,ra:f,Z:e},c)}
;function hf(a,b,c){jf(kf,{attachChild:{csn:a,parentVisualElement:Te(b),visualElements:[Te(c)]}},void 0)}
function lf(a,b){var c=kf;if(R("interaction_logging_on_gel_web"))b.forEach(function(b){gf("visualElementShown",{csn:a,ve:Te(b),eventType:1},c)});
else{var d=Ga(b,function(a){return Te(a)});
jf(c,{visibilityUpdate:{csn:a,visualElements:d}})}}
function jf(a,b,c){b.eventTimeMs=Math.round(M());b.lactMs=Pe();c&&(b.clientData=c);bf({endpoint:"log_interaction",ra:b},a)}
;function mf(){if(!nf&&!of||!window.JSON)return null;try{var a=nf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))try{a=of.get("yt-player-two-stage-token")}catch(b){}if(!r(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var of,pf=new nd;of=pf.isAvailable()?new jd(pf):null;var nf,qf=new od;nf=qf.isAvailable()?new jd(qf):null;function rf(){var a=O("ROOT_VE_TYPE",void 0);return a?new Re(void 0,a,void 0):null}
function sf(){var a=O("client-screen-nonce",void 0);a||(a=O("EVENT_ID",void 0));return a}
;function tf(a,b,c){dc.set(""+a,b,c,"/","youtube.com",!1)}
;function uf(a){if(a){a=a.itct||a.ved;var b=u("yt.logging.screen.storeParentElement");a&&b&&b(new Re(a))}}
;function vf(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=O("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Mb(F(window.location.href)[3]||null);f&&e.push(f);f=Mb(F(d)[3]||null);if(0<=Fa(e,f)||!f&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(e=document.createElement("a"),xb(e,d),d=e.href),d){f=F(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
sf();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Ea(d).toString(36),e=b?Ob(b):"",tf(d,e,h||5),uf(b))}else h="ST-"+Ea(d).toString(36),d=b?Ob(b):"",tf(h,d,5),uf(b)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var w=void 0===w?window:w;c=w.location;a=Pb(a,l)+m;a=a instanceof E?a:tb(a);c.href=rb(a)}return!0}
;var wf=u("yt.abuse.botguardInitialized")||$d;t("yt.abuse.botguardInitialized",wf,void 0);var xf=u("yt.abuse.invokeBotguard")||ae;t("yt.abuse.invokeBotguard",xf,void 0);var yf=u("yt.abuse.dclkstatus.checkDclkStatus")||Fe;t("yt.abuse.dclkstatus.checkDclkStatus",yf,void 0);var zf=u("yt.player.exports.navigate")||vf;t("yt.player.exports.navigate",zf,void 0);var Af=u("yt.util.activity.init")||Oe;t("yt.util.activity.init",Af,void 0);var Bf=u("yt.util.activity.getTimeSinceActive")||Pe;
t("yt.util.activity.getTimeSinceActive",Bf,void 0);var Cf=u("yt.util.activity.setTimestamp")||Qe;t("yt.util.activity.setTimestamp",Cf,void 0);function Df(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function kf(a){this.b=a||{apiaryHost:P("APIARY_HOST"),ib:P("APIARY_HOST_FIRSTPARTY"),gapiHintOverride:!!O("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:P("GAPI_HINT_PARAMS"),innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),Fa:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ha:P("INNERTUBE_CONTEXT_HL"),Ga:P("INNERTUBE_CONTEXT_GL"),xhrApiaryHost:P("XHR_APIARY_HOST")||"",Ia:P("INNERTUBE_HOST_OVERRIDE")||""}}
function ff(a,b,c){var d={};!O("VISITOR_DATA")&&.01>Math.random()&&Q(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":O("VISITOR_DATA","")},B:c,sa:"JSON",aa:d.aa,P:function(a,b){d.P&&d.P(b)},
onError:function(a,b){if(d.onError)d.onError(b)},
timeout:d.timeout,withCredentials:!0},f=ec();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=O("SESSION_INDEX",0));var g="",h=a.b.Ia;h&&(g=h);f&&!g&&(e.headers["x-origin"]=window.location.origin);qe(""+g+Df(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey,e)}
;function Ef(a){a=a||{};this.url=a.url||"";this.args=a.args||Ua(Ff);this.assets=a.assets||{};this.attrs=a.attrs||Ua(Gf);this.params=a.params||Ua(Hf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Ff={enablejsapi:1},Gf={},Hf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function If(a){a instanceof Ef||(a=new Ef(a));return a}
function Jf(a){var b=new Ef,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==ra(d)?Ua(d):d}return b}
;function Kf(a){I.call(this);this.b=[];this.g=a||this}
n(Kf,I);function Lf(a,b,c,d){d=xd(v(d,a.g));d={target:b,name:c,na:d};b.addEventListener(c,d.na,void 0);a.b.push(d)}
function Mf(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.na)}}
Kf.prototype.l=function(){Mf(this);I.prototype.l.call(this)};function Nf(){this.b=this.minor=this.major=0;var a=u("window.navigator.plugins"),b=u("window.navigator.mimeTypes");a=a&&a["Shockwave Flash"];b=b&&b["application/x-shockwave-flash"];if(b=a&&b&&b.enabledPlugin&&a.description||""){a=b.indexOf("Shockwave Flash");0<=a&&(b=b.substr(a+15));a=b.split(" ");var c="";b="";for(var d=0,e=a.length;d<e;d++)if(c)if(b)break;else b=a[d];else c=a[d];c=c.split(".");a=parseInt(c[0],10)||0;c=parseInt(c[1],10)||0;d=0;if("r"==b.charAt(0)||"d"==b.charAt(0))d=parseInt(b.substr(1),
10)||0;b=[a,c,d]}else b=[0,0,0];this.major=b[0];this.minor=b[1];this.b=b[2];if(0>=this.major){if(ud)try{var f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(m){f=null}else{var g=document.body;var h=document.createElement("object");h.setAttribute("type","application/x-shockwave-flash");f=g.appendChild(h)}if(f&&"GetVariable"in f)try{var l=f.GetVariable("$version")}catch(m){l=""}g&&h&&g.removeChild(h);(f=l||"")?(f=f.split(" ")[1].split(","),f=[parseInt(f[0],10)||0,parseInt(f[1],10)||0,parseInt(f[2],
10)||0]):f=[0,0,0];this.major=f[0];this.minor=f[1];this.b=f[2]}}
qa(Nf);var Of=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Pf(a){a=a||"";if(window.spf){var b=a.match(Of);spf.style.load(a,b?b[1]:"",void 0)}else Qf(a)}
function Qf(a){var b=Rf(a),c=document.getElementById(b),d=c&&Ad(c,"loaded");d||c&&!d||(c=Sf(a,b,function(){Ad(c,"loaded")||(Bd(c),Md(b),S(x(Ld,b),0))}))}
function Sf(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Hb(a);d.rel="stylesheet";d.href=pb(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Rf(a){var b=document.createElement("A");a=ub(a);xb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ea(b)}
;var V={},Tf=(V["api.invalidparam"]=2,V.auth=150,V["drm.auth"]=150,V["heartbeat.net"]=150,V["heartbeat.servererror"]=150,V["heartbeat.stop"]=150,V["html5.unsupportedads"]=5,V["fmt.noneavailable"]=5,V["fmt.decode"]=5,V["fmt.unplayable"]=5,V["html5.missingapi"]=5,V["html5.unsupportedlive"]=5,V["drm.unavailable"]=5,V);var Uf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Vf;var Wf=La;Wf=Wf.toLowerCase();if(-1!=Wf.indexOf("android")){var Xf=Wf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Xf)Vf=parseFloat(Xf[1]);else{var Yf=[],Zf=0,$f;for($f in Uf)Yf[Zf++]=$f;var ag=Wf.match("("+Yf.join("|")+")");Vf=ag?Uf[ag[0]]:0}}else Vf=void 0;var bg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],cg=['audio/mp4; codecs="mp4a.40.2"'];var dg=u("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",dg,void 0);var eg=0;function fg(a){dg[a]=dg[a]||{count:0};var b=dg[a];b.count++;b.time=M();eg||(eg=Ae(gg,0));return 10<b.count?(11==b.count&&we(Error("CSI data exceeded logging limit with key: "+a)),!0):!1}
function gg(){var a=M(),b;for(b in dg)6E4<a-dg[b].time&&delete dg[b];eg=0}
;function hg(a,b){this.version=a;this.args=b}
;function ig(a){this.topic=a}
ig.prototype.toString=function(){return this.topic};var jg=u("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.D;K.prototype.publish=K.prototype.O;K.prototype.clear=K.prototype.clear;t("ytPubsub2Pubsub2Instance",jg,void 0);var kg=u("ytPubsub2Pubsub2SubscribedKeys")||{};t("ytPubsub2Pubsub2SubscribedKeys",kg,void 0);var lg=u("ytPubsub2Pubsub2TopicToKeys")||{};t("ytPubsub2Pubsub2TopicToKeys",lg,void 0);var mg=u("ytPubsub2Pubsub2IsAsync")||{};t("ytPubsub2Pubsub2IsAsync",mg,void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function ng(a,b){var c=u("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;function og(){var a=O("TIMING_TICK_EXPIRATION");a||(a={},N("TIMING_TICK_EXPIRATION",a));return a}
function pg(){var a=og(),b;for(b in a)Be(a[b]);N("TIMING_TICK_EXPIRATION",{})}
;function qg(a,b){hg.call(this,1,arguments)}
n(qg,hg);function rg(a,b){hg.call(this,1,arguments)}
n(rg,hg);var sg=new ig("aft-recorded"),tg=new ig("timing-sent");var W=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};var ug=y().toString();var vg={vc:!0},wg={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",plid:"videoId",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",
st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},xg="ap c cver ei srt yt_fss yt_li ba vpil vpni yt_eil pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),yg="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),zg=!1;
function Ag(a){if("_"!=a[0]){var b=a;W.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),W.mark(b))}b=Bg();var c=M();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=og();if(c=b[a])Be(c),b[a]=0;Cg()["tick_"+a]=void 0;M();R("csi_on_gel")?(b=Dg(),"_start"==a?fg("baseline_"+b)||gf("latencyActionBaselined",{clientActionNonce:b},kf,void 0):fg("tick_"+a+"_"+b)||gf("latencyActionTicked",{tickName:a,clientActionNonce:b},kf,void 0),a=!0):a=!1;if(a=!a)a=!u("yt.timing.pingSent_");if(a&&(b=P("TIMING_ACTION"),
a=Bg(),u("ytglobal.timingready_")&&b&&a._start&&(b=Eg()))){R("tighter_critical_section")&&!zg&&(ng(sg,new qg(Math.round(b-a._start),void 0)),zg=!0);b=!0;c=O("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Fg()}}
function Gg(){var a=Hg().info.yt_lt="hot_bg";Cg().info_yt_lt=a;if(R("csi_on_gel"))if("yt_lt"in wg){var b={},c=wg.yt_lt.split(".");0<=Fa(yg,c)&&(a=!!a);for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=Dg();c=Object.keys(b).join("");fg("info_"+c+"_"+a)||(b.clientActionNonce=a,gf("latencyActionInfo",b,kf))}else 0<=Fa(xg,"yt_lt")||Q(Error("Unknown label yt_lt logged with GEL CSI."))}
function Eg(){var a=Bg();if(a.aft)return a.aft;for(var b=O("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Fg(){pg();if(!R("csi_on_gel")){var a=Bg(),b=Hg().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&sa(a[d])){var e=d.slice(1);if(e in vg){var f=Ga(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=u("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))Ig(f,e),Jg(),Kg(),Lg(!1,void 0),O("TIMING_ACTION")&&N("PREVIOUS_ACTION",O("TIMING_ACTION")),N("TIMING_ACTION","")}else{var g=O("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:O("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var l=window.location.protocol+u("ytplayer.config.assets.js");(l=W.getEntriesByName?W.getEntriesByName(l)[0]:null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):
delete b.h5jse}a.aft=Eg();Mg()&&"youtube"==g&&(Gg(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=M();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=u("ytdebug.logTiming"))&&a(f,b);Ig(f,e,void 0);ng(tg,new rg(b.aft+(h||0),void 0))}}}
var Kg=v(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||pa,W);
function Ig(a,b,c){if(R("debug_csi_data")){var d=u("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||te(a,void 0)}catch(f){te(a,void 0)}else te(a);Lg(!0,c)}
function Dg(){var a=Hg().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=y();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(ug)for(b=1,c=0;c<ug.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^ug.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");Hg().nonce=a}return a}
function Bg(){return Hg().tick}
function Cg(){var a=Hg();"gel"in a||(a.gel={});return a.gel}
function Hg(){return u("ytcsi.data_")||Jg()}
function Jg(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function Lg(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Mg(){var a=Bg(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Hg().info.yt_pvis}
;function Ng(a,b){I.call(this);this.u=this.j=a;this.M=b;this.A=!1;this.g={};this.V=this.L=null;this.N=new K;vc(this,x(wc,this.N));this.i={};this.G=this.W=this.h=this.ea=this.b=null;this.R=!1;this.H=this.w=this.m=this.K=null;this.X={};this.wa=["onReady"];this.T=new Kf(this);vc(this,x(wc,this.T));this.ca=null;this.la=NaN;this.U={};Og(this);this.C("onDetailedError",v(this.Ma,this));this.C("onTabOrderChange",v(this.ya,this));this.C("onTabAnnounce",v(this.ma,this));this.C("WATCH_LATER_VIDEO_ADDED",v(this.Na,
this));this.C("WATCH_LATER_VIDEO_REMOVED",v(this.Oa,this));tc||(this.C("onMouseWheelCapture",v(this.Ka,this)),this.C("onMouseWheelRelease",v(this.La,this)));this.C("onAdAnnounce",v(this.ma,this));this.I=new Kf(this);vc(this,x(wc,this.I));this.da=!1;this.ba=null}
z(Ng,I);var Pg=["fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];k=Ng.prototype;k.ka=function(a,b){this.f||(Qg(this,a),Rg(this,b),this.A&&Sg(this))};
function Qg(a,b){a.ea=b;a.b=Jf(b);a.h=a.b.attrs.id||a.h;"video-player"==a.h&&(a.h=a.M,a.b.attrs.id=a.M);a.u.id==a.h&&(a.h+="-player",a.b.attrs.id=a.h);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.M;a.W||(a.W=Tg(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.u.style.width=Jb(Number(c)||c));if(c=a.b.attrs.height)a.u.style.height=Jb(Number(c)||c)}
k.Ba=function(){return this.ea};
function Sg(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function Ug(a){var b=a.b&&a.b.args;if(b&&b.fflags){var c=b.el;b=b.fflags;if((!c||"profilepage"==c)&&0<=b.indexOf("web_player_disable_flash_watch=true")||"embedded"==c&&0<=b.indexOf("web_player_disable_flash_embed=true"))return!1}if(!q(a.b.disable.flash)){c=a.b.disable;b=Nf.getInstance();var d=a.b.minVersion;d="string"==typeof d?d.split("."):[d,void 0,void 0];d[0]=parseInt(d[0],10)||0;d[1]=parseInt(d[1],10)||0;d[2]=parseInt(d[2],10)||0;c.flash=!(b.major>d[0]||b.major==d[0]&&b.minor>d[1]||b.major==
d[0]&&b.minor==d[1]&&b.b>=d[2])}return!a.b.disable.flash}
function Vg(a,b){var c=a.b,d=c&&c.args&&c.args.fflags;!d||0>d.indexOf("web_player_flash_fallback_killswitch=true")||b&&(5!=(Tf[b.errorCode]||5)||-1==Pg.indexOf(b.errorCode))||!Ug(a)||((d=X(a))&&d.stopVideo&&d.stopVideo(),d&&d.getUpdatedConfigurationData&&(c=d.getUpdatedConfigurationData(),c=If(c)),c.args.autoplay=1,c.args.html5_unavailable="1",Qg(a,c),Rg(a,"flash"))}
function Rg(a,b){if(!a.f){if(!b){var c;if(!(c=!a.b.html5&&Ug(a))){if(!q(a.b.disable.html5)){c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==Vf)var d=!0;else{a:{var e=c;c=u("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),t("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType){e=e?bg:cg;for(var f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=Wg(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?Ug(a)?"flash":"unsupported":"html5"}("flash"==b?a.cb:a.eb).call(a)}}
function Wg(a){var b=!0,c=X(a);c&&a.b&&(a=a.b,b=Ad(c,"version")==a.assets.js);return b&&!!u("yt.player.Application.create")}
k.eb=function(){if(!this.R){var a=Wg(this);if(a&&"html5"==Xg(this))this.G="html5",this.A||this.J();else if(Yg(this),this.G="html5",a&&this.m)this.j.appendChild(this.m),this.J();else{this.b.loaded=!0;var b=!1;this.K=v(function(){b=!0;var a=this.j,d=Jf(this.b);u("yt.player.Application.create")(a,d);this.J()},this);
this.R=!0;a?this.K():(Wd(this.b.assets.js,this.K),Pf(this.b.assets.css),Zg(this)&&!b&&t("yt.player.Application.create",null,void 0))}}};
k.cb=function(){var a=Jf(this.b);if(!this.w){var b=X(this);b&&(this.w=document.createElement("SPAN"),this.w.tabIndex=0,Lf(this.T,this.w,"focus",this.pa),this.H=document.createElement("SPAN"),this.H.tabIndex=0,Lf(this.T,this.H,"focus",this.pa),b.parentNode&&b.parentNode.insertBefore(this.w,b),b.parentNode&&b.parentNode.insertBefore(this.H,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Xg(this))this.G="flash",this.A||this.J();else{Yg(this);this.G=
"flash";this.b.loaded=!0;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.j;var c=a.url;if(c){b=r(b)?Bb(b):b;var d=Ua(a.attrs);d.tabindex=0;var e=Ua(a.params);e.flashvars=Ob(a.args);if(ud){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;a=document.createElement("object");for(var f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type=
"application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var l in e)a.setAttribute(l,e[l])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.J()}};
k.pa=function(){X(this).focus()};
function X(a){var b=Bb(a.h);!b&&a.u&&a.u.querySelector&&(b=a.u.querySelector("#"+a.h));return b}
k.J=function(){if(!this.f){var a=X(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.R=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Vg(this);else{Og(this);this.A=!0;a=X(this);a.addEventListener&&(this.L=$g(this,a,"addEventListener"));a.removeEventListener&&(this.V=$g(this,a,"removeEventListener"));b=a.getApiInterface();b=b.concat(a.getInternalApiInterface());for(var c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=$g(this,a,d))}for(var e in this.i)this.L(e,
this.i[e]);Sg(this);this.W&&this.W(this.g);this.N.O("onReady",this.g)}else this.la=S(v(this.J,this),50)}};
function $g(a,b,c){var d=b[c];return function(){try{return a.ca=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ca=e,Q(e,"WARNING"))}}}
function Og(a){a.A=!1;if(a.V)for(var b in a.i)a.V(b,a.i[b]);for(var c in a.U)window.clearTimeout(parseInt(c,10));a.U={};a.L=null;a.V=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=v(a.C,a);a.g.removeEventListener=v(a.Ta,a);a.g.destroy=v(a.dispose,a);a.g.getLastError=v(a.Ca,a);a.g.getPlayerType=v(a.Da,a);a.g.getCurrentVideoConfig=v(a.Ba,a);a.g.loadNewVideoConfig=v(a.ka,a);a.g.isReady=v(a.fb,a)}
k.fb=function(){return this.A};
k.C=function(a,b){if(!this.f){var c=Tg(this,b);if(c){if(!(0<=Fa(this.wa,a)||this.i[a])){var d=ah(this,a);this.L&&this.L(a,d)}this.N.subscribe(a,c);"onReady"==a&&this.A&&S(x(c,this.g),0)}}};
k.Ta=function(a,b){if(!this.f){var c=Tg(this,b);c&&dd(this.N,a,c)}};
function Tg(a,b){var c=b;if("string"==typeof b){if(a.X[b])return a.X[b];c=function(){var a=u(b);a&&a.apply(p,arguments)};
a.X[b]=c}return c?c:null}
function ah(a,b){var c="ytPlayer"+b+a.M;a.i[b]=c;p[c]=function(c){var d=S(function(){if(!a.f){a.N.O(b,c);var e=a.U,g=String(d);g in e&&delete e[g]}},0);
Ta(a.U,String(d))};
return c}
k.ya=function(a){a=a?Db:Cb;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.w||b==this.H||(b.focus(),b!=document.activeElement));)b=a(b)};
k.ma=function(a){Md("a11y-announce",a)};
k.Ma=function(a){Vg(this,a)};
k.Na=function(a){Md("WATCH_LATER_VIDEO_ADDED",a)};
k.Oa=function(a){Md("WATCH_LATER_VIDEO_REMOVED",a)};
k.Ka=function(){if(!this.da){if(uc){var a=document,b=a.scrollingElement?a.scrollingElement:db||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement;a=a.parentWindow||a.defaultView;this.ba=ab&&kb("10")&&a.pageYOffset!=b.scrollTop?new zb(b.scrollLeft,b.scrollTop):new zb(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop);Lf(this.I,window,"scroll",this.Ra);Lf(this.I,this.j,"touchmove",this.Qa)}else Lf(this.I,this.j,"mousewheel",this.qa),Lf(this.I,this.j,"wheel",this.qa);this.da=
!0}};
k.La=function(){Mf(this.I);this.da=!1};
k.qa=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
k.Ra=function(){window.scrollTo(this.ba.b,this.ba.f)};
k.Qa=function(a){a.preventDefault()};
k.Da=function(){return this.G||Xg(this)};
k.Ca=function(){return this.ca};
function Xg(a){return(a=X(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Yg(a){Ag("dcp");a.cancel();Og(a);a.G=null;a.b&&(a.b.loaded=!1);var b=X(a);"html5"==Xg(a)?Wg(a)||!Zg(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null):b&&b.destroy&&b.destroy();b=a.j;for(var c;c=b.firstChild;)b.removeChild(c);Mf(a.T);a.w=null;a.H=null}
k.cancel=function(){this.K&&Vd(this.b.assets.js,this.K);window.clearTimeout(this.la);this.R=!1};
k.l=function(){Yg(this);if(this.m&&this.b&&this.m.destroy)try{this.m.destroy()}catch(b){Q(b)}this.X=null;for(var a in this.i)p[this.i[a]]=null;this.ea=this.b=this.g=null;delete this.j;delete this.u;Ng.o.l.call(this)};
function Zg(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var bh={},ch="player_uid_"+(1E9*Math.random()>>>0);function dh(a){delete bh[a.M]}
function eh(a){var b="player";b=r(b)?Bb(b):b;a=If(a);var c=ch+"_"+(b[wa]||(b[wa]=++xa)),d=bh[c];if(d)return d.ka(a),d.g;d=new Ng(b,c);bh[c]=d;Md("player-added",d.g);vc(d,x(dh,d));S(function(){d.ka(a)},0);
return d.g}
;function fh(a,b,c){if(va(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function gh(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return fh(a)}
function hh(a,b,c,d){if(va(a)&&!sa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function Y(a){var b=a.video_id||a.videoId;if(r(b)){var c=mf()||{},d=mf()||{};q(void 0)?d[b]=void 0:delete d[b];var e=y()+3E5,f=of;if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
function ih(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
;function jh(a){I.call(this);this.g=a;this.g.subscribe("command",this.ta,this);this.h={};this.i=!1}
z(jh,I);k=jh.prototype;k.start=function(){this.i||this.f||(this.i=!0,kh(this.g,"RECEIVING"))};
k.ta=function(a,b){if(this.i&&!this.f){var c=b||{};switch(a){case "addEventListener":if(r(c.event)&&(c=c.event,!(c in this.h))){var d=v(this.Va,this,c);this.h[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":r(c.event)&&lh(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=mh(a,b||{}),c=this.b[a].apply(this.b,c),(c=nh(a,c))&&this.i&&!this.f&&kh(this.g,a,c))}}};
k.Va=function(a,b){this.i&&!this.f&&kh(this.g,a,this.fa(a,b))};
k.fa=function(a,b){if(null!=b)return{value:b}};
function lh(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
k.l=function(){var a=this.g;a.f||dd(a.b,"command",this.ta,this);this.g=null;for(var b in this.h)lh(this,b);jh.o.l.call(this)};function oh(a,b){jh.call(this,b);this.b=a;this.start()}
z(oh,jh);oh.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
oh.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function mh(a,b){switch(a){case "loadVideoById":return b=fh(b),Y(b),[b];case "cueVideoById":return b=fh(b),Y(b),[b];case "loadVideoByPlayerVars":return Y(b),[b];case "cueVideoByPlayerVars":return Y(b),[b];case "loadPlaylist":return b=hh(b),Y(b),[b];case "cuePlaylist":return b=hh(b),Y(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function nh(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
oh.prototype.fa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return oh.o.fa.call(this,a,b)};
oh.prototype.l=function(){oh.o.l.call(this);delete this.b};function ph(a,b,c,d){I.call(this);this.g=b||null;this.u="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.A=!!a;this.m=v(this.w,this);window.addEventListener("message",this.m)}
n(ph,I);
ph.prototype.w=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.g&&a.source!=this.g)&&r(a.data)){try{var b=Ec(a.data)}catch(c){return}if(!(null==b||this.A&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.h=this.u=a.origin:Q(Error("MessageEvent origin is null"),"WARNING");this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Fa(this.j,b.func))&&this.i(b.func,
b.args)}}};
ph.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=Fc(a);c.postMessage(d,this.u)}catch(e){Q(e,"WARNING")}}};
ph.prototype.l=function(){window.removeEventListener("message",this.m);I.prototype.l.call(this)};function qh(a,b,c){ph.call(this,a,b,c||O("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(qh,ph);function rh(){var a=!!O("WIDGET_ID_ENFORCE");a=this.f=new qh(a);var b=v(this.Sa,this);a.i=b;a.j=null;this.f.channel="widget";if(a=O("WIDGET_ID"))this.f.sessionId=a;this.h=[];this.j=!1;this.i={}}
k=rh.prototype;k.Sa=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.i[c]||"onReady"==c||(this.addEventListener(c,sh(this,c)),this.i[c]=!0)}else this.va(a,b)};
k.va=function(){};
function sh(a,b){return v(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.Aa=function(){this.j=!0;this.sendMessage("initialDelivery",this.ga());this.sendMessage("onReady");C(this.h,this.ua,this);this.h=[]};
k.ga=function(){return null};
function th(a,b){a.sendMessage("infoDelivery",b)}
k.ua=function(a){this.j?this.f.sendMessage(a):this.h.push(a)};
k.sendMessage=function(a,b){this.ua({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function uh(a){rh.call(this);this.b=a;this.g=[];this.addEventListener("onReady",v(this.Pa,this));this.addEventListener("onVideoProgress",v(this.Za,this));this.addEventListener("onVolumeChange",v(this.ab,this));this.addEventListener("onApiChange",v(this.Ua,this));this.addEventListener("onPlaybackQualityChange",v(this.Wa,this));this.addEventListener("onPlaybackRateChange",v(this.Xa,this));this.addEventListener("onStateChange",v(this.Ya,this))}
z(uh,rh);k=uh.prototype;k.va=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&ih(a)){var c=b;if(va(c[0])&&!sa(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=fh.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=gh.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=hh.apply(window,c)}c=d}Y(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);ih(a)&&th(this,this.ga())}};
k.Pa=function(){var a=v(this.Aa,this);this.f.b=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.ga=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ia(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=y()/1E3;return b};
k.Ya=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());th(this,a)};
k.Wa=function(a){th(this,{playbackQuality:a})};
k.Xa=function(a){th(this,{playbackRate:a})};
k.Ua=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.ab=function(){th(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Za=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());th(this,a)};
k.dispose=function(){uh.o.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function vh(){I.call(this);this.b=new K;vc(this,x(wc,this.b))}
z(vh,I);vh.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
vh.prototype.D=function(a){return this.f?!1:this.b.D(a)};
vh.prototype.j=function(a,b){this.f||this.b.O.apply(this.b,arguments)};function wh(a,b,c){vh.call(this);this.g=a;this.h=b;this.i=c}
z(wh,vh);function kh(a,b,c){if(!a.f){var d=a.g;d.f||a.h!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(Fc(a),d.h))}}
wh.prototype.l=function(){this.h=this.g=null;wh.o.l.call(this)};function xh(a,b,c){I.call(this);this.b=a;this.h=c;this.i=Me(window,"message",v(this.j,this));this.g=new wh(this,a,b);vc(this,x(wc,this.g))}
z(xh,I);xh.prototype.j=function(a){var b;if(b=!this.f)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,r(a))){try{a=Ec(a)}catch(d){return}a.command&&(b=this.g,b.f||b.j("command",a.command,a.data))}};
xh.prototype.l=function(){Ne(this.i);this.b=null;xh.o.l.call(this)};function yh(){var a=Oa(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie")||O("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1)||R("html5_serverside_pagead_id_sets_cookie")?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id",b=Ua(zh);return new J(function(c,d){b.P=function(a){de(a)?c(a):d(new Ah("Request failed, status="+a.status,"net.badstatus"))};
b.onError=function(){d(new Ah("Unknown request error","net.unknown"))};
b.aa=function(){d(new Ah("Request timed out","net.timeout"))};
ke(a,b)})}
var Bh={gb:"net.badstatus",hb:"net.retryexhausted",TIMEOUT:"net.timeout",UNKNOWN:"net.unknown"};function Ah(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(Ah,B);var Ch=Ah;function Dh(a){this.g=void 0===a?null:a;this.f=0;this.b=null}
Dh.prototype.then=function(a,b,c){return this.g?this.g.then(a,b,c):1===this.f&&a?(a=a.call(c,this.b),Mc(a)?a:Eh(a)):2===this.f&&b?(a=b.call(c,this.b),Mc(a)?a:Fh(a)):this};
Dh.prototype.getValue=function(){return this.b};
Lc(Dh);function Fh(a){var b=new Dh;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function Eh(a){var b=new Dh;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function Gh(a){B.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Hh;this.isTimeout=a instanceof Ch&&a.errorCode==Bh.TIMEOUT;this.isCanceled=a instanceof Uc}
n(Gh,B);Gh.prototype.name="BiscottiError";function Hh(){B.call(this,"Biscotti ID is missing from server")}
n(Hh,B);Hh.prototype.name="BiscottiMissingError";var zh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ih=null;function Jh(){if("1"===Oa(O("PLAYER_CONFIG",{}),"args","privembed"))return Rc(Error("Biscotti ID is not available in private embed mode"));Ih||(Ih=Tc(yh().then(Kh),function(a){return Lh(2,a)}));
return Ih}
function Kh(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Hh;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Hh;a=a.id;Mh(a);Ih=Eh(a);Nh(18E5,2);return a}
function Lh(a,b){var c=new Gh(b);Mh("");Ih=Fh(c);0<a&&Nh(12E4,a-1);throw c;}
function Nh(a,b){S(function(){Tc(yh().then(Kh,function(a){return Lh(b,a)}),pa)},a)}
function Mh(a){t("yt.ads.biscotti.lastId_",a,void 0)}
;function Oh(){}
function Ph(a){if("1"!==Oa(O("PLAYER_CONFIG",{}),"args","privembed")){a&&!u("yt.ads.biscotti.getId_")&&t("yt.ads.biscotti.getId_",Jh,void 0);try{try{var b=u("yt.ads.biscotti.getId_");var c=b?b():Jh()}catch(d){c=Rc(d)}c.then(Qh,Oh);S(Ph,18E5)}catch(d){Q(d)}}}
var Rh=0;
function Qh(a){a:{try{var b=window.top.location.href}catch(Qa){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:Yb,flash:td||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c=void 0===c?A:c;try{var d=c.history.length}catch(Qa){d=0}b.u_his=d;b.u_java=!!A.navigator&&"unknown"!==typeof A.navigator.javaEnabled&&!!A.navigator.javaEnabled&&A.navigator.javaEnabled();A.screen&&(b.u_h=A.screen.height,b.u_w=A.screen.width,b.u_ah=A.screen.availHeight,b.u_aw=A.screen.availWidth,b.u_cd=
A.screen.colorDepth);A.navigator&&A.navigator.plugins&&(b.u_nplug=A.navigator.plugins.length);A.navigator&&A.navigator.mimeTypes&&(b.u_nmime=A.navigator.mimeTypes.length);b.bid=a;b.ca_type=sd?"flash":"image";if(R("enable_server_side_search_pyv")||R("enable_server_side_mweb_search_pyv")){a=window;try{var e=a.screenX;var f=a.screenY}catch(Qa){}try{var g=a.outerWidth;var h=a.outerHeight}catch(Qa){}try{var l=a.innerWidth;var m=a.innerHeight}catch(Qa){}e=[a.screenLeft,a.screenTop,e,f,a.screen?a.screen.availWidth:
void 0,a.screen?a.screen.availTop:void 0,g,h,l,m];f=window.top||A;try{if(f.document&&!f.document.body)var w=new Ab(-1,-1);else{var H=(f||window).document,Ed="CSS1Compat"==H.compatMode?H.documentElement:H.body;w=(new Ab(Ed.clientWidth,Ed.clientHeight)).round()}var ya=w}catch(Qa){ya=new Ab(-12245933,-12245933)}w=0;window.SVGElement&&document.createElementNS&&(w|=1);ya={bc:w,bih:ya.height,biw:ya.width,brdim:e.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[Ba.webkitVisibilityState||Ba.mozVisibilityState||
Ba.visibilityState||""]||0,wgl:!!A.WebGLRenderingContext};for(var Fd in ya)b[Fd]=ya[Fd]}b.bsq=Rh++;qe("//www.youtube.com/ad_data_204",{Ea:!1,B:b})}
;function Sh(){this.b=O("ALT_PREF_COOKIE_NAME","PREF");var a=dc.get(""+this.b,void 0);if(a){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
qa(Sh);var Z=u("yt.prefs.UserPrefs.prefs_")||{};t("yt.prefs.UserPrefs.prefs_",Z,void 0);function Th(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Uh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Vh(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Sh.prototype.get=function(a,b){Uh(a);Th(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
Sh.prototype.set=function(a,b){Uh(a);Th(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
Sh.prototype.remove=function(a){Uh(a);Th(a);delete Z[a]};
Sh.prototype.clear=function(){Z={}};var Wh=null,Xh=null,Yh=null,Zh={};function $h(a){gf(a.payload_name,a.payload,kf,void 0,void 0)}
function ai(a){var b=a.id;a=a.ve_type;var c=Se++;a=new Re(void 0,a,c,void 0,void 0);Zh[b]=a;b=sf();c=rf();b&&c&&hf(b,c,a)}
function bi(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(N("client-screen-nonce",b),N("ROOT_VE_TYPE",a),a=rf()))for(var c in Zh){var d=Zh[c];d&&hf(b,a,d)}}
function ci(a){Zh[a.id]=new Re(a.tracking_params)}
function di(a){var b=sf();a=Zh[a.id];b&&a&&jf(kf,{click:{csn:b,visualElement:Te(a)}},void 0)}
function ei(a){a=a.ids;var b=sf();if(b){for(var c=[],d=0;d<a.length;d++){var e=Zh[a[d]];e&&c.push(e)}c.length&&lf(b,c)}}
function fi(){var a=Wh;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",N,void 0);t("yt.config.set",N,void 0);t("yt.setMsg",ze,void 0);t("yt.msgs.set",ze,void 0);t("yt.logging.errors.log",we,void 0);
t("writeEmbed",function(){var a=O("PLAYER_CONFIG",void 0);Ph(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=O("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);O("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Y(a.args);Wh=a=eh(a);a.addEventListener("onScreenChanged",bi);a.addEventListener("onLogClientVeCreated",ai);a.addEventListener("onLogServerVeCreated",ci);a.addEventListener("onLogToGel",$h);
a.addEventListener("onLogVeClicked",di);a.addEventListener("onLogVesShown",ei);a.addEventListener("onReady",fi);b=O("POST_MESSAGE_ID","player");O("ENABLE_JS_API")?Yh=new uh(a):O("ENABLE_POST_API")&&r(b)&&r(c)&&(Xh=new xh(window.parent,b,c),Yh=new oh(a,Xh.g));O("BG_P")&&(O("BG_I")||O("BG_IU"))&&Yd();Ee()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){te(a+"mac_204?action_fcts=1");return!0},void 0);
var gi=xd(function(){Ag("ol");var a=Sh.getInstance(),b=1<window.devicePixelRatio;if(!!((Vh("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=Vh(c)||0;d=b?d|67108864:d&-67108865;0==d?delete Z[c]:Z[c]=d.toString(16).toString();a=a.b;b=[];for(var e in Z)b.push(e+"="+escape(Z[e]));tf(a,b.join("&"),63072E3)}}),hi=xd(function(){var a=Wh;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();O("PL_ATT")&&(Xd=null);a=0;for(var b=Ce.length;a<b;a++)Be(Ce[a]);Ce.length=0;Ud("//static.doubleclick.net/instream/ad_status.js");De=!1;N("DCLKSTAT",0);xc(Yh,Xh);if(a=Wh)a.removeEventListener("onScreenChanged",bi),a.removeEventListener("onLogClientVeCreated",ai),a.removeEventListener("onLogServerVeCreated",ci),a.removeEventListener("onLogToGel",$h),a.removeEventListener("onLogVeClicked",di),a.removeEventListener("onLogVesShown",ei),a.removeEventListener("onReady",
fi),a.destroy();Zh={}});
window.addEventListener?(window.addEventListener("load",gi),window.addEventListener("unload",hi)):window.attachEvent&&(window.attachEvent("onload",gi),window.attachEvent("onunload",hi));}).call(this);
