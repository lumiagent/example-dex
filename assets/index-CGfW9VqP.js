import{cF as Y,cG as Ar,cH as Br,b7 as mt,cI as Lr,cJ as Pe}from"./Spinner-jqWKWpFL.js";import{e as jt,g as Rr}from"./index-6DuipDjQ.js";import{e as Pr}from"./PendingButton-BOoftPNI.js";import{_ as Mr,U as Or,d as Ir}from"./index.es-DihEmvop.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";var Dr={}.toString,Ge=Array.isArray||function(e){return Dr.call(e)=="[object Array]"},Xe={},S={};Object.defineProperty(S,"__esModule",{value:!0});var Gt=S.getLocalStorage=sn=S.getLocalStorageOrThrow=cn=S.getCrypto=ln=S.getCryptoOrThrow=an=S.getLocation=on=S.getLocationOrThrow=rn=S.getNavigator=nn=S.getNavigatorOrThrow=tn=S.getDocument=en=S.getDocumentOrThrow=Zt=S.getFromWindowOrThrow=Xt=S.getFromWindow=void 0;function J(e){let t;return typeof window<"u"&&typeof window[e]<"u"&&(t=window[e]),t}var Xt=S.getFromWindow=J;function oe(e){const t=J(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}var Zt=S.getFromWindowOrThrow=oe;function $r(){return oe("document")}var en=S.getDocumentOrThrow=$r;function Ur(){return J("document")}var tn=S.getDocument=Ur;function Fr(){return oe("navigator")}var nn=S.getNavigatorOrThrow=Fr;function Wr(){return J("navigator")}var rn=S.getNavigator=Wr;function zr(){return oe("location")}var on=S.getLocationOrThrow=zr;function Hr(){return J("location")}var an=S.getLocation=Hr;function qr(){return oe("crypto")}var ln=S.getCryptoOrThrow=qr;function Kr(){return J("crypto")}var cn=S.getCrypto=Kr;function Vr(){return oe("localStorage")}var sn=S.getLocalStorageOrThrow=Vr;function Yr(){return J("localStorage")}Gt=S.getLocalStorage=Yr;Object.defineProperty(Xe,"__esModule",{value:!0});var un=Xe.getWindowMetadata=void 0;const vt=S;function Jr(){let e,t;try{e=vt.getDocumentOrThrow(),t=vt.getLocationOrThrow()}catch{return null}function n(){const f=e.getElementsByTagName("link"),w=[];for(let y=0;y<f.length;y++){const h=f[y],b=h.getAttribute("rel");if(b&&b.toLowerCase().indexOf("icon")>-1){const d=h.getAttribute("href");if(d)if(d.toLowerCase().indexOf("https:")===-1&&d.toLowerCase().indexOf("http:")===-1&&d.indexOf("//")!==0){let v=t.protocol+"//"+t.host;if(d.indexOf("/")===0)v+=d;else{const p=t.pathname.split("/");p.pop();const m=p.join("/");v+=m+"/"+d}w.push(v)}else if(d.indexOf("//")===0){const v=t.protocol+d;w.push(v)}else w.push(d)}}return w}function r(...f){const w=e.getElementsByTagName("meta");for(let y=0;y<w.length;y++){const h=w[y],b=["itemprop","property","name"].map(d=>h.getAttribute(d)).filter(d=>d?f.includes(d):!1);if(b.length&&b){const d=h.getAttribute("content");if(d)return d}}return""}function o(){let f=r("name","og:site_name","og:title","twitter:title");return f||(f=e.title),f}function a(){return r("description","og:description","twitter:description","keywords")}const i=o(),l=a(),c=t.origin,u=n();return{description:l,url:c,icons:u,name:i}}un=Xe.getWindowMetadata=Jr;var Qr=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),o=0,t=0;t<n;t++)for(var a=arguments[t],i=0,l=a.length;i<l;i++,o++)r[o]=a[i];return r},jr=function(){function e(t,n,r){this.name=t,this.version=n,this.os=r,this.type="browser"}return e}(),Gr=function(){function e(t){this.version=t,this.type="node",this.name="node",this.os=Y.platform}return e}(),Xr=function(){function e(t,n,r,o){this.name=t,this.version=n,this.os=r,this.bot=o,this.type="bot-device"}return e}(),Zr=function(){function e(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return e}(),eo=function(){function e(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return e}(),to=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,no=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,wt=3,ro=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",to]],yt=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function oo(e){return e?bt(e):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new eo:typeof navigator<"u"?bt(navigator.userAgent):lo()}function ao(e){return e!==""&&ro.reduce(function(t,n){var r=n[0],o=n[1];if(t)return t;var a=o.exec(e);return!!a&&[r,a]},!1)}function bt(e){var t=ao(e);if(!t)return null;var n=t[0],r=t[1];if(n==="searchbot")return new Zr;var o=r[1]&&r[1].split(/[._]/).slice(0,3);o?o.length<wt&&(o=Qr(o,co(wt-o.length))):o=[];var a=o.join("."),i=io(e),l=no.exec(e);return l&&l[1]?new Xr(n,a,i,l[1]):new jr(n,a,i)}function io(e){for(var t=0,n=yt.length;t<n;t++){var r=yt[t],o=r[0],a=r[1],i=a.exec(e);if(i)return o}return null}function lo(){var e=typeof Y<"u"&&Y.version;return e?new Gr(Y.version.slice(1)):null}function co(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}function Ze(e){return oo(e)}function Te(){const e=Ze();return e&&e.os?e.os:void 0}function fn(){const e=Te();return e?e.toLowerCase().includes("android"):!1}function dn(){const e=Te();return e?e.toLowerCase().includes("ios")||e.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function so(){return Te()?fn()||dn():!1}function _n(){const e=Ze();return e&&e.name?e.name.toLowerCase()==="node":!1}function uo(){return!_n()&&!!hn()}const fo=Xt,_o=Zt,ho=en,go=tn,po=nn,hn=rn,mo=on,vo=an,wo=ln,yo=cn,bo=sn,Se=Gt;function Co(){return un()}function Eo(e){if(typeof e!="string")throw new Error(`Cannot safe json parse value of type ${typeof e}`);try{return JSON.parse(e)}catch{return e}}function xo(e){return typeof e=="string"?e:JSON.stringify(e)}const gn=Eo,pn=xo;function mn(e,t){const n=pn(t),r=Se();r&&r.setItem(e,n)}function To(e){let t=null,n=null;const r=Se();return r&&(n=r.getItem(e)),t=n&&gn(n),t}function So(e){const t=Se();t&&t.removeItem(e)}const vn="WALLETCONNECT_DEEPLINK_CHOICE";function ko(e,t){const n=encodeURIComponent(e);return t.universalLink?`${t.universalLink}/wc?uri=${n}`:t.deepLink?`${t.deepLink}${t.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}`:""}function No(e){const t=e.href.split("?")[0];mn(vn,Object.assign(Object.assign({},e),{href:t}))}function wn(e,t){return e.filter(n=>n.name.toLowerCase().includes(t.toLowerCase()))[0]}function Ao(e,t){let n=e;return t&&(n=t.map(r=>wn(e,r)).filter(Boolean)),n}const yn="https://registry.walletconnect.com";function Bo(){return yn+"/api/v2/wallets"}function Lo(){return yn+"/api/v2/dapps"}function bn(e,t="mobile"){var n;return{name:e.name||"",shortName:e.metadata.shortName||"",color:e.metadata.colors.primary||"",logo:(n=e.image_url.sm)!==null&&n!==void 0?n:"",universalLink:e[t].universal||"",deepLink:e[t].native||""}}function Ro(e,t="mobile"){return Object.values(e).filter(n=>!!n[t].universal||!!n[t].native).map(n=>bn(n,t))}const Po=Object.freeze(Object.defineProperty({__proto__:null,detectEnv:Ze,detectOS:Te,formatIOSMobile:ko,formatMobileRegistry:Ro,formatMobileRegistryEntry:bn,getClientMeta:Co,getCrypto:yo,getCryptoOrThrow:wo,getDappRegistryUrl:Lo,getDocument:go,getDocumentOrThrow:ho,getFromWindow:fo,getFromWindowOrThrow:_o,getLocal:To,getLocalStorage:Se,getLocalStorageOrThrow:bo,getLocation:vo,getLocationOrThrow:mo,getMobileLinkRegistry:Ao,getMobileRegistryEntry:wn,getNavigator:hn,getNavigatorOrThrow:po,getWalletRegistryUrl:Bo,isAndroid:fn,isBrowser:uo,isIOS:dn,isMobile:so,isNode:_n,mobileLinkChoiceKey:vn,removeLocal:So,safeJsonParse:gn,safeJsonStringify:pn,saveMobileLinkInfo:No,setLocal:mn},Symbol.toStringTag,{value:"Module"})),Mo=jt(Po);var _e={},Oo=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Cn={},H={},Io=Ge;function Do(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},e.foo()===42}catch{return!1}}E.TYPED_ARRAY_SUPPORT=Do();var Ct=E.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function E(e,t,n){return!E.TYPED_ARRAY_SUPPORT&&!(this instanceof E)?new E(e,t,n):typeof e=="number"?En(this,e):qo(this,e,t,n)}E.TYPED_ARRAY_SUPPORT&&(E.prototype.__proto__=Uint8Array.prototype,E.__proto__=Uint8Array,typeof Symbol<"u"&&Symbol.species&&E[Symbol.species]===E&&Object.defineProperty(E,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}));function et(e){if(e>=Ct)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ct.toString(16)+" bytes");return e|0}function $o(e){return e!==e}function G(e,t){var n;return E.TYPED_ARRAY_SUPPORT?(n=new Uint8Array(t),n.__proto__=E.prototype):(n=e,n===null&&(n=new E(t)),n.length=t),n}function En(e,t){var n=G(e,t<0?0:et(t)|0);if(!E.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)n[r]=0;return n}function Uo(e,t){var n=Tn(t)|0,r=G(e,n),o=r.write(t);return o!==n&&(r=r.slice(0,o)),r}function We(e,t){for(var n=t.length<0?0:et(t.length)|0,r=G(e,n),o=0;o<n;o+=1)r[o]=t[o]&255;return r}function Fo(e,t,n,r){if(n<0||t.byteLength<n)throw new RangeError("'offset' is out of bounds");if(t.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");var o;return n===void 0&&r===void 0?o=new Uint8Array(t):r===void 0?o=new Uint8Array(t,n):o=new Uint8Array(t,n,r),E.TYPED_ARRAY_SUPPORT?o.__proto__=E.prototype:o=We(e,o),o}function Wo(e,t){if(E.isBuffer(t)){var n=et(t.length)|0,r=G(e,n);return r.length===0||t.copy(r,0,0,n),r}if(t){if(typeof ArrayBuffer<"u"&&t.buffer instanceof ArrayBuffer||"length"in t)return typeof t.length!="number"||$o(t.length)?G(e,0):We(e,t);if(t.type==="Buffer"&&Array.isArray(t.data))return We(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function xn(e,t){t=t||1/0;for(var n,r=e.length,o=null,a=[],i=0;i<r;++i){if(n=e.charCodeAt(i),n>55295&&n<57344){if(!o){if(n>56319){(t-=3)>-1&&a.push(239,191,189);continue}else if(i+1===r){(t-=3)>-1&&a.push(239,191,189);continue}o=n;continue}if(n<56320){(t-=3)>-1&&a.push(239,191,189),o=n;continue}n=(o-55296<<10|n-56320)+65536}else o&&(t-=3)>-1&&a.push(239,191,189);if(o=null,n<128){if((t-=1)<0)break;a.push(n)}else if(n<2048){if((t-=2)<0)break;a.push(n>>6|192,n&63|128)}else if(n<65536){if((t-=3)<0)break;a.push(n>>12|224,n>>6&63|128,n&63|128)}else if(n<1114112){if((t-=4)<0)break;a.push(n>>18|240,n>>12&63|128,n>>6&63|128,n&63|128)}else throw new Error("Invalid code point")}return a}function Tn(e){if(E.isBuffer(e))return e.length;if(typeof ArrayBuffer<"u"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;typeof e!="string"&&(e=""+e);var t=e.length;return t===0?0:xn(e).length}function zo(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);++o)t[o+n]=e[o];return o}function Ho(e,t,n,r){return zo(xn(t,e.length-n),e,n,r)}function qo(e,t,n,r){if(typeof t=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer?Fo(e,t,n,r):typeof t=="string"?Uo(e,t):Wo(e,t)}E.prototype.write=function(t,n,r){n===void 0?(r=this.length,n=0):r===void 0&&typeof n=="string"?(r=this.length,n=0):isFinite(n)&&(n=n|0,isFinite(r)?r=r|0:r=void 0);var o=this.length-n;if((r===void 0||r>o)&&(r=o),t.length>0&&(r<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");return Ho(this,t,n,r)};E.prototype.slice=function(t,n){var r=this.length;t=~~t,n=n===void 0?r:~~n,t<0?(t+=r,t<0&&(t=0)):t>r&&(t=r),n<0?(n+=r,n<0&&(n=0)):n>r&&(n=r),n<t&&(n=t);var o;if(E.TYPED_ARRAY_SUPPORT)o=this.subarray(t,n),o.__proto__=E.prototype;else{var a=n-t;o=new E(a,void 0);for(var i=0;i<a;++i)o[i]=this[i+t]}return o};E.prototype.copy=function(t,n,r,o){if(r||(r=0),!o&&o!==0&&(o=this.length),n>=t.length&&(n=t.length),n||(n=0),o>0&&o<r&&(o=r),o===r||t.length===0||this.length===0)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(o<0)throw new RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),t.length-n<o-r&&(o=t.length-n+r);var a=o-r,i;if(this===t&&r<n&&n<o)for(i=a-1;i>=0;--i)t[i+n]=this[i+r];else if(a<1e3||!E.TYPED_ARRAY_SUPPORT)for(i=0;i<a;++i)t[i+n]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+a),n);return a};E.prototype.fill=function(t,n,r){if(typeof t=="string"){if(typeof n=="string"?(n=0,r=this.length):typeof r=="string"&&(r=this.length),t.length===1){var o=t.charCodeAt(0);o<256&&(t=o)}}else typeof t=="number"&&(t=t&255);if(n<0||this.length<n||this.length<r)throw new RangeError("Out of range index");if(r<=n)return this;n=n>>>0,r=r===void 0?this.length:r>>>0,t||(t=0);var a;if(typeof t=="number")for(a=n;a<r;++a)this[a]=t;else{var i=E.isBuffer(t)?t:new E(t),l=i.length;for(a=0;a<r-n;++a)this[a+n]=i[a%l]}return this};E.concat=function(t,n){if(!Io(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return G(null,0);var r;if(n===void 0)for(n=0,r=0;r<t.length;++r)n+=t[r].length;var o=En(null,n),a=0;for(r=0;r<t.length;++r){var i=t[r];if(!E.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(o,a),a+=i.length}return o};E.byteLength=Tn;E.prototype._isBuffer=!0;E.isBuffer=function(t){return!!(t!=null&&t._isBuffer)};H.alloc=function(e){var t=new E(e);return t.fill(0),t};H.from=function(e){return new E(e)};var M={},tt,Ko=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];M.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};M.getSymbolTotalCodewords=function(t){return Ko[t]};M.getBCHDigit=function(e){for(var t=0;e!==0;)t++,e>>>=1;return t};M.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');tt=t};M.isKanjiModeEnabled=function(){return typeof tt<"u"};M.toSJIS=function(t){return tt(t)};var ke={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");var r=n.toLowerCase();switch(r){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(ke);function Sn(){this.buffer=[],this.length=0}Sn.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(var n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Vo=Sn,Et=H;function he(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=Et.alloc(e*e),this.reservedBit=Et.alloc(e*e)}he.prototype.set=function(e,t,n,r){var o=e*this.size+t;this.data[o]=n,r&&(this.reservedBit[o]=!0)};he.prototype.get=function(e,t){return this.data[e*this.size+t]};he.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};he.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Yo=he,kn={};(function(e){var t=M.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];for(var o=Math.floor(r/7)+2,a=t(r),i=a===145?26:Math.ceil((a-13)/(2*o-2))*2,l=[a-7],c=1;c<o-1;c++)l[c]=l[c-1]-i;return l.push(6),l.reverse()},e.getPositions=function(r){for(var o=[],a=e.getRowColCoords(r),i=a.length,l=0;l<i;l++)for(var c=0;c<i;c++)l===0&&c===0||l===0&&c===i-1||l===i-1&&c===0||o.push([a[l],a[c]]);return o}})(kn);var Nn={},Jo=M.getSymbolSize,xt=7;Nn.getPositions=function(t){var n=Jo(t);return[[0,0],[n-xt,0],[0,n-xt]]};var An={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){for(var a=o.size,i=0,l=0,c=0,u=null,s=null,f=0;f<a;f++){l=c=0,u=s=null;for(var w=0;w<a;w++){var y=o.get(f,w);y===u?l++:(l>=5&&(i+=t.N1+(l-5)),u=y,l=1),y=o.get(w,f),y===s?c++:(c>=5&&(i+=t.N1+(c-5)),s=y,c=1)}l>=5&&(i+=t.N1+(l-5)),c>=5&&(i+=t.N1+(c-5))}return i},e.getPenaltyN2=function(o){for(var a=o.size,i=0,l=0;l<a-1;l++)for(var c=0;c<a-1;c++){var u=o.get(l,c)+o.get(l,c+1)+o.get(l+1,c)+o.get(l+1,c+1);(u===4||u===0)&&i++}return i*t.N2},e.getPenaltyN3=function(o){for(var a=o.size,i=0,l=0,c=0,u=0;u<a;u++){l=c=0;for(var s=0;s<a;s++)l=l<<1&2047|o.get(u,s),s>=10&&(l===1488||l===93)&&i++,c=c<<1&2047|o.get(s,u),s>=10&&(c===1488||c===93)&&i++}return i*t.N3},e.getPenaltyN4=function(o){for(var a=0,i=o.data.length,l=0;l<i;l++)a+=o.data[l];var c=Math.abs(Math.ceil(a*100/i/5)-10);return c*t.N4};function n(r,o,a){switch(r){case e.Patterns.PATTERN000:return(o+a)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return a%3===0;case e.Patterns.PATTERN011:return(o+a)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(a/3))%2===0;case e.Patterns.PATTERN101:return o*a%2+o*a%3===0;case e.Patterns.PATTERN110:return(o*a%2+o*a%3)%2===0;case e.Patterns.PATTERN111:return(o*a%3+(o+a)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,a){for(var i=a.size,l=0;l<i;l++)for(var c=0;c<i;c++)a.isReserved(c,l)||a.xor(c,l,n(o,c,l))},e.getBestMask=function(o,a){for(var i=Object.keys(e.Patterns).length,l=0,c=1/0,u=0;u<i;u++){a(u),e.applyMask(u,o);var s=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(u,o),s<c&&(c=s,l=u)}return l}})(An);var Ne={},W=ke,me=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],ve=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Ne.getBlocksCount=function(t,n){switch(n){case W.L:return me[(t-1)*4+0];case W.M:return me[(t-1)*4+1];case W.Q:return me[(t-1)*4+2];case W.H:return me[(t-1)*4+3];default:return}};Ne.getTotalCodewordsCount=function(t,n){switch(n){case W.L:return ve[(t-1)*4+0];case W.M:return ve[(t-1)*4+1];case W.Q:return ve[(t-1)*4+2];case W.H:return ve[(t-1)*4+3];default:return}};var Bn={},Ae={},Ln=H,le=Ln.alloc(512),ye=Ln.alloc(256);(function(){for(var t=1,n=0;n<255;n++)le[n]=t,ye[t]=n,t<<=1,t&256&&(t^=285);for(n=255;n<512;n++)le[n]=le[n-255]})();Ae.log=function(t){if(t<1)throw new Error("log("+t+")");return ye[t]};Ae.exp=function(t){return le[t]};Ae.mul=function(t,n){return t===0||n===0?0:le[ye[t]+ye[n]]};(function(e){var t=H,n=Ae;e.mul=function(o,a){for(var i=t.alloc(o.length+a.length-1),l=0;l<o.length;l++)for(var c=0;c<a.length;c++)i[l+c]^=n.mul(o[l],a[c]);return i},e.mod=function(o,a){for(var i=t.from(o);i.length-a.length>=0;){for(var l=i[0],c=0;c<a.length;c++)i[c]^=n.mul(a[c],l);for(var u=0;u<i.length&&i[u]===0;)u++;i=i.slice(u)}return i},e.generateECPolynomial=function(o){for(var a=t.from([1]),i=0;i<o;i++)a=e.mul(a,[1,n.exp(i)]);return a}})(Bn);var Tt=H,Rn=Bn,Qo=Ar.Buffer;function nt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}nt.prototype.initialize=function(t){this.degree=t,this.genPoly=Rn.generateECPolynomial(this.degree)};nt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var n=Tt.alloc(this.degree),r=Qo.concat([t,n],t.length+this.degree),o=Rn.mod(r,this.genPoly),a=this.degree-o.length;if(a>0){var i=Tt.alloc(this.degree);return o.copy(i,a),i}return o};var jo=nt,Pn={},q={},rt={};rt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var I={},Mn="[0-9]+",Go="[A-Z $%*+\\-./:]+",ue="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";ue=ue.replace(/u/g,"\\u");var Xo="(?:(?![A-Z0-9 $%*+\\-./:]|"+ue+`)(?:.|[\r
]))+`;I.KANJI=new RegExp(ue,"g");I.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");I.BYTE=new RegExp(Xo,"g");I.NUMERIC=new RegExp(Mn,"g");I.ALPHANUMERIC=new RegExp(Go,"g");var Zo=new RegExp("^"+ue+"$"),ea=new RegExp("^"+Mn+"$"),ta=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");I.testKanji=function(t){return Zo.test(t)};I.testNumeric=function(t){return ea.test(t)};I.testAlphanumeric=function(t){return ta.test(t)};(function(e){var t=rt,n=I;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(a,i){if(!a.ccBits)throw new Error("Invalid mode: "+a);if(!t.isValid(i))throw new Error("Invalid version: "+i);return i>=1&&i<10?a.ccBits[0]:i<27?a.ccBits[1]:a.ccBits[2]},e.getBestModeForData=function(a){return n.testNumeric(a)?e.NUMERIC:n.testAlphanumeric(a)?e.ALPHANUMERIC:n.testKanji(a)?e.KANJI:e.BYTE},e.toString=function(a){if(a&&a.id)return a.id;throw new Error("Invalid mode")},e.isValid=function(a){return a&&a.bit&&a.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");var a=o.toLowerCase();switch(a){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(a,i){if(e.isValid(a))return a;try{return r(a)}catch{return i}}})(q);(function(e){var t=M,n=Ne,r=ke,o=q,a=rt,i=Ge,l=7973,c=t.getBCHDigit(l);function u(y,h,b){for(var d=1;d<=40;d++)if(h<=e.getCapacity(d,b,y))return d}function s(y,h){return o.getCharCountIndicator(y,h)+4}function f(y,h){var b=0;return y.forEach(function(d){var v=s(d.mode,h);b+=v+d.getBitsLength()}),b}function w(y,h){for(var b=1;b<=40;b++){var d=f(y,b);if(d<=e.getCapacity(b,h,o.MIXED))return b}}e.from=function(h,b){return a.isValid(h)?parseInt(h,10):b},e.getCapacity=function(h,b,d){if(!a.isValid(h))throw new Error("Invalid QR Code version");typeof d>"u"&&(d=o.BYTE);var v=t.getSymbolTotalCodewords(h),p=n.getTotalCodewordsCount(h,b),m=(v-p)*8;if(d===o.MIXED)return m;var g=m-s(d,h);switch(d){case o.NUMERIC:return Math.floor(g/10*3);case o.ALPHANUMERIC:return Math.floor(g/11*2);case o.KANJI:return Math.floor(g/13);case o.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function(h,b){var d,v=r.from(b,r.M);if(i(h)){if(h.length>1)return w(h,v);if(h.length===0)return 1;d=h[0]}else d=h;return u(d.mode,d.getLength(),v)},e.getEncodedBits=function(h){if(!a.isValid(h)||h<7)throw new Error("Invalid QR Code version");for(var b=h<<12;t.getBCHDigit(b)-c>=0;)b^=l<<t.getBCHDigit(b)-c;return h<<12|b}})(Pn);var On={},ze=M,In=1335,na=21522,St=ze.getBCHDigit(In);On.getEncodedBits=function(t,n){for(var r=t.bit<<3|n,o=r<<10;ze.getBCHDigit(o)-St>=0;)o^=In<<ze.getBCHDigit(o)-St;return(r<<10|o)^na};var Dn={},ra=q;function X(e){this.mode=ra.NUMERIC,this.data=e.toString()}X.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};X.prototype.getLength=function(){return this.data.length};X.prototype.getBitsLength=function(){return X.getBitsLength(this.data.length)};X.prototype.write=function(t){var n,r,o;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),o=parseInt(r,10),t.put(o,10);var a=this.data.length-n;a>0&&(r=this.data.substr(n),o=parseInt(r,10),t.put(o,a*3+1))};var oa=X,aa=q,Me=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Z(e){this.mode=aa.ALPHANUMERIC,this.data=e}Z.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};Z.prototype.getLength=function(){return this.data.length};Z.prototype.getBitsLength=function(){return Z.getBitsLength(this.data.length)};Z.prototype.write=function(t){var n;for(n=0;n+2<=this.data.length;n+=2){var r=Me.indexOf(this.data[n])*45;r+=Me.indexOf(this.data[n+1]),t.put(r,11)}this.data.length%2&&t.put(Me.indexOf(this.data[n]),6)};var ia=Z,la=H,ca=q;function ee(e){this.mode=ca.BYTE,this.data=la.from(e)}ee.getBitsLength=function(t){return t*8};ee.prototype.getLength=function(){return this.data.length};ee.prototype.getBitsLength=function(){return ee.getBitsLength(this.data.length)};ee.prototype.write=function(e){for(var t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var sa=ee,ua=q,fa=M;function te(e){this.mode=ua.KANJI,this.data=e}te.getBitsLength=function(t){return t*13};te.prototype.getLength=function(){return this.data.length};te.prototype.getBitsLength=function(){return te.getBitsLength(this.data.length)};te.prototype.write=function(e){var t;for(t=0;t<this.data.length;t++){var n=fa.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var da=te;(function(e){var t=q,n=oa,r=ia,o=sa,a=da,i=I,l=M,c=Pr;function u(v){return unescape(encodeURIComponent(v)).length}function s(v,p,m){for(var g=[],x;(x=v.exec(m))!==null;)g.push({data:x[0],index:x.index,mode:p,length:x[0].length});return g}function f(v){var p=s(i.NUMERIC,t.NUMERIC,v),m=s(i.ALPHANUMERIC,t.ALPHANUMERIC,v),g,x;l.isKanjiModeEnabled()?(g=s(i.BYTE,t.BYTE,v),x=s(i.KANJI,t.KANJI,v)):(g=s(i.BYTE_KANJI,t.BYTE,v),x=[]);var k=p.concat(m,g,x);return k.sort(function(T,N){return T.index-N.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function w(v,p){switch(p){case t.NUMERIC:return n.getBitsLength(v);case t.ALPHANUMERIC:return r.getBitsLength(v);case t.KANJI:return a.getBitsLength(v);case t.BYTE:return o.getBitsLength(v)}}function y(v){return v.reduce(function(p,m){var g=p.length-1>=0?p[p.length-1]:null;return g&&g.mode===m.mode?(p[p.length-1].data+=m.data,p):(p.push(m),p)},[])}function h(v){for(var p=[],m=0;m<v.length;m++){var g=v[m];switch(g.mode){case t.NUMERIC:p.push([g,{data:g.data,mode:t.ALPHANUMERIC,length:g.length},{data:g.data,mode:t.BYTE,length:g.length}]);break;case t.ALPHANUMERIC:p.push([g,{data:g.data,mode:t.BYTE,length:g.length}]);break;case t.KANJI:p.push([g,{data:g.data,mode:t.BYTE,length:u(g.data)}]);break;case t.BYTE:p.push([{data:g.data,mode:t.BYTE,length:u(g.data)}])}}return p}function b(v,p){for(var m={},g={start:{}},x=["start"],k=0;k<v.length;k++){for(var T=v[k],N=[],B=0;B<T.length;B++){var A=T[B],K=""+k+B;N.push(K),m[K]={node:A,lastCount:0},g[K]={};for(var D=0;D<x.length;D++){var P=x[D];m[P]&&m[P].node.mode===A.mode?(g[P][K]=w(m[P].lastCount+A.length,A.mode)-w(m[P].lastCount,A.mode),m[P].lastCount+=A.length):(m[P]&&(m[P].lastCount=A.length),g[P][K]=w(A.length,A.mode)+4+t.getCharCountIndicator(A.mode,p))}}x=N}for(D=0;D<x.length;D++)g[x[D]].end=0;return{map:g,table:m}}function d(v,p){var m,g=t.getBestModeForData(v);if(m=t.from(p,g),m!==t.BYTE&&m.bit<g.bit)throw new Error('"'+v+'" cannot be encoded with mode '+t.toString(m)+`.
 Suggested mode is: `+t.toString(g));switch(m===t.KANJI&&!l.isKanjiModeEnabled()&&(m=t.BYTE),m){case t.NUMERIC:return new n(v);case t.ALPHANUMERIC:return new r(v);case t.KANJI:return new a(v);case t.BYTE:return new o(v)}}e.fromArray=function(p){return p.reduce(function(m,g){return typeof g=="string"?m.push(d(g,null)):g.data&&m.push(d(g.data,g.mode)),m},[])},e.fromString=function(p,m){for(var g=f(p,l.isKanjiModeEnabled()),x=h(g),k=b(x,m),T=c.find_path(k.map,"start","end"),N=[],B=1;B<T.length-1;B++)N.push(k.table[T[B]].node);return e.fromArray(y(N))},e.rawSplit=function(p){return e.fromArray(f(p,l.isKanjiModeEnabled()))}})(Dn);var kt=H,Be=M,Oe=ke,_a=Vo,ha=Yo,ga=kn,pa=Nn,He=An,qe=Ne,ma=jo,be=Pn,va=On,wa=q,Ie=Dn,ya=Ge;function ba(e,t){for(var n=e.size,r=pa.getPositions(t),o=0;o<r.length;o++)for(var a=r[o][0],i=r[o][1],l=-1;l<=7;l++)if(!(a+l<=-1||n<=a+l))for(var c=-1;c<=7;c++)i+c<=-1||n<=i+c||(l>=0&&l<=6&&(c===0||c===6)||c>=0&&c<=6&&(l===0||l===6)||l>=2&&l<=4&&c>=2&&c<=4?e.set(a+l,i+c,!0,!0):e.set(a+l,i+c,!1,!0))}function Ca(e){for(var t=e.size,n=8;n<t-8;n++){var r=n%2===0;e.set(n,6,r,!0),e.set(6,n,r,!0)}}function Ea(e,t){for(var n=ga.getPositions(t),r=0;r<n.length;r++)for(var o=n[r][0],a=n[r][1],i=-2;i<=2;i++)for(var l=-2;l<=2;l++)i===-2||i===2||l===-2||l===2||i===0&&l===0?e.set(o+i,a+l,!0,!0):e.set(o+i,a+l,!1,!0)}function xa(e,t){for(var n=e.size,r=be.getEncodedBits(t),o,a,i,l=0;l<18;l++)o=Math.floor(l/3),a=l%3+n-8-3,i=(r>>l&1)===1,e.set(o,a,i,!0),e.set(a,o,i,!0)}function De(e,t,n){var r=e.size,o=va.getEncodedBits(t,n),a,i;for(a=0;a<15;a++)i=(o>>a&1)===1,a<6?e.set(a,8,i,!0):a<8?e.set(a+1,8,i,!0):e.set(r-15+a,8,i,!0),a<8?e.set(8,r-a-1,i,!0):a<9?e.set(8,15-a-1+1,i,!0):e.set(8,15-a-1,i,!0);e.set(r-8,8,1,!0)}function Ta(e,t){for(var n=e.size,r=-1,o=n-1,a=7,i=0,l=n-1;l>0;l-=2)for(l===6&&l--;;){for(var c=0;c<2;c++)if(!e.isReserved(o,l-c)){var u=!1;i<t.length&&(u=(t[i]>>>a&1)===1),e.set(o,l-c,u),a--,a===-1&&(i++,a=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}function Sa(e,t,n){var r=new _a;n.forEach(function(u){r.put(u.mode.bit,4),r.put(u.getLength(),wa.getCharCountIndicator(u.mode,e)),u.write(r)});var o=Be.getSymbolTotalCodewords(e),a=qe.getTotalCodewordsCount(e,t),i=(o-a)*8;for(r.getLengthInBits()+4<=i&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);for(var l=(i-r.getLengthInBits())/8,c=0;c<l;c++)r.put(c%2?17:236,8);return ka(r,e,t)}function ka(e,t,n){for(var r=Be.getSymbolTotalCodewords(t),o=qe.getTotalCodewordsCount(t,n),a=r-o,i=qe.getBlocksCount(t,n),l=r%i,c=i-l,u=Math.floor(r/i),s=Math.floor(a/i),f=s+1,w=u-s,y=new ma(w),h=0,b=new Array(i),d=new Array(i),v=0,p=kt.from(e.buffer),m=0;m<i;m++){var g=m<c?s:f;b[m]=p.slice(h,h+g),d[m]=y.encode(b[m]),h+=g,v=Math.max(v,g)}var x=kt.alloc(r),k=0,T,N;for(T=0;T<v;T++)for(N=0;N<i;N++)T<b[N].length&&(x[k++]=b[N][T]);for(T=0;T<w;T++)for(N=0;N<i;N++)x[k++]=d[N][T];return x}function Na(e,t,n,r){var o;if(ya(e))o=Ie.fromArray(e);else if(typeof e=="string"){var a=t;if(!a){var i=Ie.rawSplit(e);a=be.getBestVersionForData(i,n)}o=Ie.fromString(e,a||40)}else throw new Error("Invalid data");var l=be.getBestVersionForData(o,n);if(!l)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=l;else if(t<l)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+l+`.
`);var c=Sa(t,n,o),u=Be.getSymbolSize(t),s=new ha(u);return ba(s,t),Ca(s),Ea(s,t),De(s,n,0),t>=7&&xa(s,t),Ta(s,c),isNaN(r)&&(r=He.getBestMask(s,De.bind(null,s,n))),He.applyMask(r,s),De(s,n,r),{modules:s,version:t,errorCorrectionLevel:n,maskPattern:r,segments:o}}Cn.create=function(t,n){if(typeof t>"u"||t==="")throw new Error("No input text");var r=Oe.M,o,a;return typeof n<"u"&&(r=Oe.from(n.errorCorrectionLevel,Oe.M),o=be.from(n.version),a=He.from(n.maskPattern),n.toSJISFunc&&Be.setToSJISFunction(n.toSJISFunc)),Na(t,o,r,a)};var $n={},ot={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");var r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(a){return[a,a]}))),r.length===6&&r.push("F","F");var o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});var o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,a=r.width&&r.width>=21?r.width:void 0,i=r.scale||4;return{width:a,scale:a?4:i,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){var a=e.getScale(r,o);return Math.floor((r+o.margin*2)*a)},e.qrToImageData=function(r,o,a){for(var i=o.modules.size,l=o.modules.data,c=e.getScale(i,a),u=Math.floor((i+a.margin*2)*c),s=a.margin*c,f=[a.color.light,a.color.dark],w=0;w<u;w++)for(var y=0;y<u;y++){var h=(w*u+y)*4,b=a.color.light;if(w>=s&&y>=s&&w<u-s&&y<u-s){var d=Math.floor((w-s)/c),v=Math.floor((y-s)/c);b=f[l[d*i+v]?1:0]}r[h++]=b.r,r[h++]=b.g,r[h++]=b.b,r[h]=b.a}}})(ot);(function(e){var t=ot;function n(o,a,i){o.clearRect(0,0,a.width,a.height),a.style||(a.style={}),a.height=i,a.width=i,a.style.height=i+"px",a.style.width=i+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(a,i,l){var c=l,u=i;typeof c>"u"&&(!i||!i.getContext)&&(c=i,i=void 0),i||(u=r()),c=t.getOptions(c);var s=t.getImageWidth(a.modules.size,c),f=u.getContext("2d"),w=f.createImageData(s,s);return t.qrToImageData(w.data,a,c),n(f,u,s),f.putImageData(w,0,0),u},e.renderToDataURL=function(a,i,l){var c=l;typeof c>"u"&&(!i||!i.getContext)&&(c=i,i=void 0),c||(c={});var u=e.render(a,i,c),s=c.type||"image/png",f=c.rendererOpts||{};return u.toDataURL(s,f.quality)}})($n);var Un={},Aa=ot;function Nt(e,t){var n=e.a/255,r=t+'="'+e.hex+'"';return n<1?r+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function $e(e,t,n){var r=e+t;return typeof n<"u"&&(r+=" "+n),r}function Ba(e,t,n){for(var r="",o=0,a=!1,i=0,l=0;l<e.length;l++){var c=Math.floor(l%t),u=Math.floor(l/t);!c&&!a&&(a=!0),e[l]?(i++,l>0&&c>0&&e[l-1]||(r+=a?$e("M",c+n,.5+u+n):$e("m",o,0),o=0,a=!1),c+1<t&&e[l+1]||(r+=$e("h",i),i=0)):o++}return r}Un.render=function(t,n,r){var o=Aa.getOptions(n),a=t.modules.size,i=t.modules.data,l=a+o.margin*2,c=o.color.light.a?"<path "+Nt(o.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",u="<path "+Nt(o.color.dark,"stroke")+' d="'+Ba(i,a,o.margin)+'"/>',s='viewBox="0 0 '+l+" "+l+'"',f=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",w='<svg xmlns="http://www.w3.org/2000/svg" '+f+s+' shape-rendering="crispEdges">'+c+u+`</svg>
`;return typeof r=="function"&&r(null,w),w};var La=Oo,Ke=Cn,Fn=$n,Ra=Un;function at(e,t,n,r,o){var a=[].slice.call(arguments,1),i=a.length,l=typeof a[i-1]=="function";if(!l&&!La())throw new Error("Callback required as last argument");if(l){if(i<2)throw new Error("Too few arguments provided");i===2?(o=n,n=t,t=r=void 0):i===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=n,n=t,t=void 0))}else{if(i<1)throw new Error("Too few arguments provided");return i===1?(n=t,t=r=void 0):i===2&&!t.getContext&&(r=n,n=t,t=void 0),new Promise(function(u,s){try{var f=Ke.create(n,r);u(e(f,t,r))}catch(w){s(w)}})}try{var c=Ke.create(n,r);o(null,e(c,t,r))}catch(u){o(u)}}_e.create=Ke.create;_e.toCanvas=at.bind(null,Fn.render);_e.toDataURL=at.bind(null,Fn.renderToDataURL);_e.toString=at.bind(null,function(e,t,n){return Ra.render(e,n)});var Pa=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||n.forEach(function(o){e.addRange(o)}),t&&t.focus()}},Ma=Pa,At={"text/plain":"Text","text/html":"Url",default:"Text"},Oa="Copy to clipboard: #{key}, Enter";function Ia(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Da(e,t){var n,r,o,a,i,l,c=!1;t||(t={}),n=t.debug||!1;try{o=Ma(),a=document.createRange(),i=document.getSelection(),l=document.createElement("span"),l.textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(s){if(s.stopPropagation(),t.format)if(s.preventDefault(),typeof s.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var f=At[t.format]||At.default;window.clipboardData.setData(f,e)}else s.clipboardData.clearData(),s.clipboardData.setData(t.format,e);t.onCopy&&(s.preventDefault(),t.onCopy(s.clipboardData))}),document.body.appendChild(l),a.selectNodeContents(l),i.addRange(a);var u=document.execCommand("copy");if(!u)throw new Error("copy command was unsuccessful");c=!0}catch(s){n&&console.error("unable to copy using execCommand: ",s),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),c=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),r=Ia("message"in t?t.message:Oa),window.prompt(r,e)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(a):i.removeAllRanges()),l&&document.body.removeChild(l),o()}return c}var $a=Da,C,ce,it,Wn,Bt,lt,zn,U={},Le=[],Ua=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function $(e,t){for(var n in t)e[n]=t[n];return e}function Hn(e){var t=e.parentNode;t&&t.removeChild(e)}function F(e,t,n){var r,o=arguments,a={};for(r in t)r!=="key"&&r!=="ref"&&(a[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(n!=null&&(a.children=n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)a[r]===void 0&&(a[r]=e.defaultProps[r]);return Ce(e,a,t&&t.key,t&&t.ref,null)}function Ce(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return o==null&&(a.__v=a),C.vnode&&C.vnode(a),a}function qn(){return{}}function ge(e){return e.children}function O(e,t){this.props=e,this.context=t}function fe(e,t){if(t==null)return e.__?fe(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?fe(e):null}function Kn(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Kn(e)}}function we(e){(!e.__d&&(e.__d=!0)&&ce.push(e)&&!it++||Bt!==C.debounceRendering)&&((Bt=C.debounceRendering)||Wn)(Fa)}function Fa(){for(var e;it=ce.length;)e=ce.sort(function(t,n){return t.__v.__b-n.__v.__b}),ce=[],e.some(function(t){var n,r,o,a,i,l,c;t.__d&&(l=(i=(n=t).__v).__e,(c=n.__P)&&(r=[],(o=$({},i)).__v=o,a=ct(c,i,o,n.__n,c.ownerSVGElement!==void 0,null,r,l??fe(i)),Yn(r,i),a!=l&&Kn(i)))})}function Vn(e,t,n,r,o,a,i,l,c){var u,s,f,w,y,h,b,d=n&&n.__k||Le,v=d.length;if(l==U&&(l=a!=null?a[0]:v?fe(n,0):null),u=0,t.__k=z(t.__k,function(p){if(p!=null){if(p.__=t,p.__b=t.__b+1,(f=d[u])===null||f&&p.key==f.key&&p.type===f.type)d[u]=void 0;else for(s=0;s<v;s++){if((f=d[s])&&p.key==f.key&&p.type===f.type){d[s]=void 0;break}f=null}if(w=ct(e,p,f=f||U,r,o,a,i,l,c),(s=p.ref)&&f.ref!=s&&(b||(b=[]),f.ref&&b.push(f.ref,null,p),b.push(s,p.__c||w,p)),w!=null){var m;if(h==null&&(h=w),p.__d!==void 0)m=p.__d,p.__d=void 0;else if(a==f||w!=l||w.parentNode==null){e:if(l==null||l.parentNode!==e)e.appendChild(w),m=null;else{for(y=l,s=0;(y=y.nextSibling)&&s<v;s+=2)if(y==w)break e;e.insertBefore(w,l),m=l}t.type=="option"&&(e.value="")}l=m!==void 0?m:w.nextSibling,typeof t.type=="function"&&(t.__d=l)}else l&&f.__e==l&&l.parentNode!=e&&(l=fe(f))}return u++,p}),t.__e=h,a!=null&&typeof t.type!="function")for(u=a.length;u--;)a[u]!=null&&Hn(a[u]);for(u=v;u--;)d[u]!=null&&se(d[u],d[u]);if(b)for(u=0;u<b.length;u++)Jn(b[u],b[++u],b[++u])}function z(e,t,n){if(n==null&&(n=[]),e==null||typeof e=="boolean")t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)z(e[r],t,n);else n.push(t?t(typeof e=="string"||typeof e=="number"?Ce(null,e,null,null,e):e.__e!=null||e.__c!=null?Ce(e.type,e.props,e.key,null,e.__v):e):e);return n}function Wa(e,t,n,r,o){var a;for(a in n)a==="children"||a==="key"||a in t||Ee(e,a,null,n[a],r);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||Ee(e,a,t[a],n[a],r)}function Lt(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=typeof n=="number"&&Ua.test(t)===!1?n+"px":n??""}function Ee(e,t,n,r,o){var a,i,l,c,u;if(o?t==="className"&&(t="class"):t==="class"&&(t="className"),t==="style")if(a=e.style,typeof n=="string")a.cssText=n;else{if(typeof r=="string"&&(a.cssText="",r=null),r)for(c in r)n&&c in n||Lt(a,c,"");if(n)for(u in n)r&&n[u]===r[u]||Lt(a,u,n[u])}else t[0]==="o"&&t[1]==="n"?(i=t!==(t=t.replace(/Capture$/,"")),l=t.toLowerCase(),t=(l in e?l:t).slice(2),n?(r||e.addEventListener(t,Rt,i),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,Rt,i)):t!=="list"&&t!=="tagName"&&t!=="form"&&t!=="type"&&t!=="size"&&!o&&t in e?e[t]=n??"":typeof n!="function"&&t!=="dangerouslySetInnerHTML"&&(t!==(t=t.replace(/^xlink:?/,""))?n==null||n===!1?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):n==null||n===!1&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function Rt(e){this.l[e.type](C.event?C.event(e):e)}function ct(e,t,n,r,o,a,i,l,c){var u,s,f,w,y,h,b,d,v,p,m=t.type;if(t.constructor!==void 0)return null;(u=C.__b)&&u(t);try{e:if(typeof m=="function"){if(d=t.props,v=(u=m.contextType)&&r[u.__c],p=u?v?v.props.value:u.__:r,n.__c?b=(s=t.__c=n.__c).__=s.__E:("prototype"in m&&m.prototype.render?t.__c=s=new m(d,p):(t.__c=s=new O(d,p),s.constructor=m,s.render=Ha),v&&v.sub(s),s.props=d,s.state||(s.state={}),s.context=p,s.__n=r,f=s.__d=!0,s.__h=[]),s.__s==null&&(s.__s=s.state),m.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=$({},s.__s)),$(s.__s,m.getDerivedStateFromProps(d,s.__s))),w=s.props,y=s.state,f)m.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(m.getDerivedStateFromProps==null&&d!==w&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(d,p),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(d,s.__s,p)===!1||t.__v===n.__v&&!s.__){for(s.props=d,s.state=s.__s,t.__v!==n.__v&&(s.__d=!1),s.__v=t,t.__e=n.__e,t.__k=n.__k,s.__h.length&&i.push(s),u=0;u<t.__k.length;u++)t.__k[u]&&(t.__k[u].__=t);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(d,s.__s,p),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(w,y,h)})}s.context=p,s.props=d,s.state=s.__s,(u=C.__r)&&u(t),s.__d=!1,s.__v=t,s.__P=e,u=s.render(s.props,s.state,s.context),t.__k=u!=null&&u.type==ge&&u.key==null?u.props.children:Array.isArray(u)?u:[u],s.getChildContext!=null&&(r=$($({},r),s.getChildContext())),f||s.getSnapshotBeforeUpdate==null||(h=s.getSnapshotBeforeUpdate(w,y)),Vn(e,t,n,r,o,a,i,l,c),s.base=t.__e,s.__h.length&&i.push(s),b&&(s.__E=s.__=null),s.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=za(n.__e,t,n,r,o,a,i,c);(u=C.diffed)&&u(t)}catch(g){t.__v=null,C.__e(g,t,n)}return t.__e}function Yn(e,t){C.__c&&C.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){C.__e(r,n.__v)}})}function za(e,t,n,r,o,a,i,l){var c,u,s,f,w,y=n.props,h=t.props;if(o=t.type==="svg"||o,a!=null){for(c=0;c<a.length;c++)if((u=a[c])!=null&&((t.type===null?u.nodeType===3:u.localName===t.type)||e==u)){e=u,a[c]=null;break}}if(e==null){if(t.type===null)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,h.is&&{is:h.is}),a=null,l=!1}if(t.type===null)y!==h&&e.data!=h&&(e.data=h);else{if(a!=null&&(a=Le.slice.call(e.childNodes)),s=(y=n.props||U).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!l){if(y===U)for(y={},w=0;w<e.attributes.length;w++)y[e.attributes[w].name]=e.attributes[w].value;(f||s)&&(f&&s&&f.__html==s.__html||(e.innerHTML=f&&f.__html||""))}Wa(e,h,y,o,l),f?t.__k=[]:(t.__k=t.props.children,Vn(e,t,n,r,t.type!=="foreignObject"&&o,a,i,U,l)),l||("value"in h&&(c=h.value)!==void 0&&c!==e.value&&Ee(e,"value",c,y.value,!1),"checked"in h&&(c=h.checked)!==void 0&&c!==e.checked&&Ee(e,"checked",c,y.checked,!1))}return e}function Jn(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){C.__e(r,n)}}function se(e,t,n){var r,o,a;if(C.unmount&&C.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Jn(r,null,t)),n||typeof e.type=="function"||(n=(o=e.__e)!=null),e.__e=e.__d=void 0,(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){C.__e(i,t)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&se(r[a],t,n);o!=null&&Hn(o)}function Ha(e,t,n){return this.constructor(e,n)}function de(e,t,n){var r,o,a;C.__&&C.__(e,t),o=(r=n===lt)?null:n&&n.__k||t.__k,e=F(ge,null,[e]),a=[],ct(t,(r?t:n||t).__k=e,o||U,U,t.ownerSVGElement!==void 0,n&&!r?[n]:o?null:Le.slice.call(t.childNodes),a,n||U,r),Yn(a,e)}function Qn(e,t){de(e,t,lt)}function qa(e,t){var n,r;for(r in t=$($({},e.props),t),arguments.length>2&&(t.children=Le.slice.call(arguments,2)),n={},t)r!=="key"&&r!=="ref"&&(n[r]=t[r]);return Ce(e.type,n,t.key||e.key,t.ref||e.ref,null)}function jn(e){var t={},n={__c:"__cC"+zn++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,a=this;return this.getChildContext||(o=[],this.getChildContext=function(){return t[n.__c]=a,t},this.shouldComponentUpdate=function(i){a.props.value!==i.value&&o.some(function(l){l.context=i.value,we(l)})},this.sub=function(i){o.push(i);var l=i.componentWillUnmount;i.componentWillUnmount=function(){o.splice(o.indexOf(i),1),l&&l.call(i)}}),r.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}C={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&n.constructor.getDerivedStateFromError!=null&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),n.componentDidCatch!=null&&(r=!0,n.componentDidCatch(e)),r)return we(n.__E=n)}catch(o){e=o}throw e}},O.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof e=="function"&&(e=e(n,this.props)),e&&$(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),we(this))},O.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),we(this))},O.prototype.render=ge,ce=[],it=0,Wn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,lt=U,zn=0;var Q,R,Pt,ne=0,Ve=[],Mt=C.__r,Ot=C.diffed,It=C.__c,Dt=C.unmount;function ae(e,t){C.__h&&C.__h(R,e,ne||t),ne=0;var n=R.__H||(R.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function st(e){return ne=1,ut(rr,e)}function ut(e,t,n){var r=ae(Q++,2);return r.__c||(r.__c=R,r.__=[n?n(t):rr(void 0,t),function(o){var a=e(r.__[0],o);r.__[0]!==a&&(r.__[0]=a,r.__c.setState({}))}]),r.__}function Gn(e,t){var n=ae(Q++,3);!C.__s&&dt(n.__H,t)&&(n.__=e,n.__H=t,R.__H.__h.push(n))}function ft(e,t){var n=ae(Q++,4);!C.__s&&dt(n.__H,t)&&(n.__=e,n.__H=t,R.__h.push(n))}function Xn(e){return ne=5,Re(function(){return{current:e}},[])}function Zn(e,t,n){ne=6,ft(function(){typeof e=="function"?e(t()):e&&(e.current=t())},n==null?n:n.concat(e))}function Re(e,t){var n=ae(Q++,7);return dt(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function er(e,t){return ne=8,Re(function(){return e},t)}function tr(e){var t=R.context[e.__c],n=ae(Q++,9);return n.__c=e,t?(n.__==null&&(n.__=!0,t.sub(R)),t.props.value):e.__}function nr(e,t){C.useDebugValue&&C.useDebugValue(t?t(e):e)}function Ka(e){var t=ae(Q++,10),n=st();return t.__=e,R.componentDidCatch||(R.componentDidCatch=function(r){t.__&&t.__(r),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Va(){Ve.some(function(e){if(e.__P)try{e.__H.__h.forEach(Ye),e.__H.__h.forEach(Je),e.__H.__h=[]}catch(t){return e.__H.__h=[],C.__e(t,e.__v),!0}}),Ve=[]}function Ye(e){e.t&&e.t()}function Je(e){var t=e.__();typeof t=="function"&&(e.t=t)}function dt(e,t){return!e||t.some(function(n,r){return n!==e[r]})}function rr(e,t){return typeof t=="function"?t(e):t}C.__r=function(e){Mt&&Mt(e),Q=0,(R=e.__c).__H&&(R.__H.__h.forEach(Ye),R.__H.__h.forEach(Je),R.__H.__h=[])},C.diffed=function(e){Ot&&Ot(e);var t=e.__c;if(t){var n=t.__H;n&&n.__h.length&&(Ve.push(t)!==1&&Pt===C.requestAnimationFrame||((Pt=C.requestAnimationFrame)||function(r){var o,a=function(){clearTimeout(i),cancelAnimationFrame(o),setTimeout(r)},i=setTimeout(a,100);typeof window<"u"&&(o=requestAnimationFrame(a))})(Va))}},C.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ye),n.__h=n.__h.filter(function(r){return!r.__||Je(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],C.__e(r,n.__v)}}),It&&It(e,t)},C.unmount=function(e){Dt&&Dt(e);var t=e.__c;if(t){var n=t.__H;if(n)try{n.__.forEach(function(r){return r.t&&r.t()})}catch(r){C.__e(r,t.__v)}}};function _t(e,t){for(var n in t)e[n]=t[n];return e}function Qe(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}var or=function(e){var t,n;function r(o){var a;return(a=e.call(this,o)||this).isPureReactComponent=!0,a}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.shouldComponentUpdate=function(o,a){return Qe(this.props,o)||Qe(this.state,a)},r}(O);function ar(e,t){function n(o){var a=this.props.ref,i=a==o.ref;return!i&&a&&(a.call?a(null):a.current=null),t?!t(this.props,o)||!i:Qe(this.props,o)}function r(o){return this.shouldComponentUpdate=n,F(e,_t({},o))}return r.prototype.isReactComponent=!0,r.displayName="Memo("+(e.displayName||e.name)+")",r.t=!0,r}var $t=C.__b;function ir(e){function t(n){var r=_t({},n);return delete r.ref,e(r,n.ref)}return t.prototype.isReactComponent=t.t=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}C.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),$t&&$t(e)};var Ut=function(e,t){return e?z(e).reduce(function(n,r,o){return n.concat(t(r,o))},[]):null},lr={map:Ut,forEach:Ut,count:function(e){return e?z(e).length:0},only:function(e){if((e=z(e)).length!==1)throw new Error("Children.only() expects only one child.");return e[0]},toArray:z},Ya=C.__e;function cr(e){return e&&((e=_t({},e)).__c=null,e.__k=e.__k&&e.__k.map(cr)),e}function xe(){this.__u=0,this.o=null,this.__b=null}function sr(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function ur(e){var t,n,r;function o(a){if(t||(t=e()).then(function(i){n=i.default||i},function(i){r=i}),r)throw r;if(!n)throw t;return F(n,a)}return o.displayName="Lazy",o.t=!0,o}function j(){this.i=null,this.l=null}C.__e=function(e,t,n){if(e.then){for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return r.__c(e,t.__c)}Ya(e,t,n)},(xe.prototype=new O).__c=function(e,t){var n=this;n.o==null&&(n.o=[]),n.o.push(t);var r=sr(n.__v),o=!1,a=function(){o||(o=!0,r?r(i):i())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){a(),t.__c&&t.__c()};var i=function(){var l;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});l=n.o.pop();)l.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),e.then(a,a)},xe.prototype.render=function(e,t){return this.__b&&(this.__v.__k[0]=cr(this.__b),this.__b=null),[F(O,null,t.u?null:e.children),t.u&&e.fallback]};var Ft=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(j.prototype=new O).u=function(e){var t=this,n=sr(t.__v),r=t.l.get(e);return r[0]++,function(o){var a=function(){t.props.revealOrder?(r.push(o),Ft(t,e,r)):o()};n?n(a):a()}},j.prototype.render=function(e){this.i=null,this.l=new Map;var t=z(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},j.prototype.componentDidUpdate=j.prototype.componentDidMount=function(){var e=this;e.l.forEach(function(t,n){Ft(e,n,t)})};var Ja=function(){function e(){}var t=e.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(n){return n.children},e}();function Qa(e){var t=this,n=e.container,r=F(Ja,{context:t.context},e.vnode);return t.s&&t.s!==n&&(t.v.parentNode&&t.s.removeChild(t.v),se(t.h),t.p=!1),e.vnode?t.p?(n.__k=t.__k,de(r,n),t.__k=n.__k):(t.v=document.createTextNode(""),Qn("",n),n.appendChild(t.v),t.p=!0,t.s=n,de(r,n,t.v),t.__k=t.v.__k):t.p&&(t.v.parentNode&&t.s.removeChild(t.v),se(t.h)),t.h=r,t.componentWillUnmount=function(){t.v.parentNode&&t.s.removeChild(t.v),se(t.h)},null}function fr(e,t){return F(Qa,{vnode:e,container:t})}var Wt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;O.prototype.isReactComponent={};var dr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103;function je(e,t,n){if(t.__k==null)for(;t.firstChild;)t.removeChild(t.firstChild);return de(e,t),typeof n=="function"&&n(),e?e.__c:null}function ja(e,t,n){return Qn(e,t),typeof n=="function"&&n(),e?e.__c:null}var zt=C.event;function Ue(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n}})}C.event=function(e){zt&&(e=zt(e)),e.persist=function(){};var t=!1,n=!1,r=e.stopPropagation;e.stopPropagation=function(){r.call(e),t=!0};var o=e.preventDefault;return e.preventDefault=function(){o.call(e),n=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return n},e.nativeEvent=e};var Ht={configurable:!0,get:function(){return this.class}},qt=C.vnode;C.vnode=function(e){e.$$typeof=dr;var t=e.type,n=e.props;if(t){if(n.class!=n.className&&(Ht.enumerable="className"in n,n.className!=null&&(n.class=n.className),Object.defineProperty(n,"className",Ht)),typeof t!="function"){var r,o,a;for(a in n.defaultValue&&n.value!==void 0&&(n.value||n.value===0||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&t==="select"&&(z(n.children).forEach(function(i){n.value.indexOf(i.props.value)!=-1&&(i.props.selected=!0)}),delete n.value),n)if(r=Wt.test(a))break;if(r)for(a in o=e.props={},n)o[Wt.test(a)?a.replace(/[A-Z0-9]/,"-$&").toLowerCase():a]=n[a]}(function(i){var l=e.type,c=e.props;if(c&&typeof l=="string"){var u={};for(var s in c)/^on(Ani|Tra|Tou)/.test(s)&&(c[s.toLowerCase()]=c[s],delete c[s]),u[s.toLowerCase()]=s;if(u.ondoubleclick&&(c.ondblclick=c[u.ondoubleclick],delete c[u.ondoubleclick]),u.onbeforeinput&&(c.onbeforeinput=c[u.onbeforeinput],delete c[u.onbeforeinput]),u.onchange&&(l==="textarea"||l.toLowerCase()==="input"&&!/^fil|che|ra/i.test(c.type))){var f=u.oninput||"oninput";c[f]||(c[f]=c[u.onchange],delete c[u.onchange])}}})(),typeof t=="function"&&!t.m&&t.prototype&&(Ue(t.prototype,"componentWillMount"),Ue(t.prototype,"componentWillReceiveProps"),Ue(t.prototype,"componentWillUpdate"),t.m=!0)}qt&&qt(e)};var Ga="16.8.0";function _r(e){return F.bind(null,e)}function ht(e){return!!e&&e.$$typeof===dr}function hr(e){return ht(e)?qa.apply(null,arguments):e}function gr(e){return!!e.__k&&(de(null,e),!0)}function pr(e){return e&&(e.base||e.nodeType===1&&e)||null}var mr=function(e,t){return e(t)};const Xa={useState:st,useReducer:ut,useEffect:Gn,useLayoutEffect:ft,useRef:Xn,useImperativeHandle:Zn,useMemo:Re,useCallback:er,useContext:tr,useDebugValue:nr,version:"16.8.0",Children:lr,render:je,hydrate:je,unmountComponentAtNode:gr,createPortal:fr,createElement:F,createContext:jn,createFactory:_r,cloneElement:hr,createRef:qn,Fragment:ge,isValidElement:ht,findDOMNode:pr,Component:O,PureComponent:or,memo:ar,forwardRef:ir,unstable_batchedUpdates:mr,Suspense:xe,SuspenseList:j,lazy:ur},Za=Object.freeze(Object.defineProperty({__proto__:null,Children:lr,Component:O,Fragment:ge,PureComponent:or,Suspense:xe,SuspenseList:j,cloneElement:hr,createContext:jn,createElement:F,createFactory:_r,createPortal:fr,createRef:qn,default:Xa,findDOMNode:pr,forwardRef:ir,hydrate:ja,isValidElement:ht,lazy:ur,memo:ar,render:je,unmountComponentAtNode:gr,unstable_batchedUpdates:mr,useCallback:er,useContext:tr,useDebugValue:nr,useEffect:Gn,useErrorBoundary:Ka,useImperativeHandle:Zn,useLayoutEffect:ft,useMemo:Re,useReducer:ut,useRef:Xn,useState:st,version:Ga},Symbol.toStringTag,{value:"Module"})),ei=jt(Za);function vr(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var L=Mo,wr=vr(_e),ti=vr($a),_=ei;function ni(e){wr.toString(e,{type:"terminal"}).then(console.log)}var ri=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function oi(e,t){try{var n=e()}catch(r){return t(r)}return n&&n.then?n.then(void 0,t):n}var ai="data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",ii="WalletConnect",li=300,ci="rgb(64, 153, 255)",yr="walletconnect-wrapper",Kt="walletconnect-style-sheet",br="walletconnect-qrcode-modal",si="walletconnect-qrcode-close",Cr="walletconnect-qrcode-text",ui="walletconnect-connect-button";function fi(e){return _.createElement("div",{className:"walletconnect-modal__header"},_.createElement("img",{src:ai,className:"walletconnect-modal__headerLogo"}),_.createElement("p",null,ii),_.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:e.onClose},_.createElement("div",{id:si,className:"walletconnect-modal__close__icon"},_.createElement("div",{className:"walletconnect-modal__close__line1"}),_.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function di(e){return _.createElement("a",{className:"walletconnect-connect__button",href:e.href,id:ui+"-"+e.name,onClick:e.onClick,rel:"noopener noreferrer",style:{backgroundColor:e.color},target:"_blank"},e.name)}var _i="data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E";function hi(e){var t=e.color,n=e.href,r=e.name,o=e.logo,a=e.onClick;return _.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:a,rel:"noopener noreferrer",target:"_blank"},_.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),_.createElement("div",{className:"walletconnect-modal__base__row__right"},_.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+o+"') "+t,backgroundSize:"100%"}}),_.createElement("img",{src:_i,className:"walletconnect-modal__base__row__right__caret"})))}function gi(e){var t=e.color,n=e.href,r=e.name,o=e.logo,a=e.onClick,i=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return _.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:a,rel:"noopener noreferrer",target:"_blank"},_.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+o+"') "+t,backgroundSize:"100%"}}),_.createElement("div",{style:{fontSize:i},className:"walletconnect-connect__button__text"},r))}var pi=5,Fe=12;function mi(e){var t=L.isAndroid(),n=_.useState(""),r=n[0],o=n[1],a=_.useState(""),i=a[0],l=a[1],c=_.useState(1),u=c[0],s=c[1],f=i?e.links.filter(function(g){return g.name.toLowerCase().includes(i.toLowerCase())}):e.links,w=e.errorMessage,y=i||f.length>pi,h=Math.ceil(f.length/Fe),b=[(u-1)*Fe+1,u*Fe],d=f.length?f.filter(function(g,x){return x+1>=b[0]&&x+1<=b[1]}):[],v=!t&&h>1,p=void 0;function m(g){o(g.target.value),clearTimeout(p),g.target.value?p=setTimeout(function(){l(g.target.value),s(1)},1e3):(o(""),l(""),s(1))}return _.createElement("div",null,_.createElement("p",{id:Cr,className:"walletconnect-qrcode__text"},t?e.text.connect_mobile_wallet:e.text.choose_preferred_wallet),!t&&_.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:m}),_.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(t?"__android":y&&f.length?"__wrap":"")},t?_.createElement(di,{name:e.text.connect,color:ci,href:e.uri,onClick:_.useCallback(function(){L.saveMobileLinkInfo({name:"Unknown",href:e.uri})},[])}):d.length?d.map(function(g){var x=g.color,k=g.name,T=g.shortName,N=g.logo,B=L.formatIOSMobile(e.uri,g),A=_.useCallback(function(){L.saveMobileLinkInfo({name:k,href:B})},[d]);return y?_.createElement(gi,{color:x,href:B,name:T||k,logo:N,onClick:A}):_.createElement(hi,{color:x,href:B,name:k,logo:N,onClick:A})}):_.createElement(_.Fragment,null,_.createElement("p",null,w.length?e.errorMessage:e.links.length&&!f.length?e.text.no_wallets_found:e.text.loading))),v&&_.createElement("div",{className:"walletconnect-modal__footer"},Array(h).fill(0).map(function(g,x){var k=x+1,T=u===k;return _.createElement("a",{style:{margin:"auto 10px",fontWeight:T?"bold":"normal"},onClick:function(){return s(k)}},k)})))}function vi(e){var t=!!e.message.trim();return _.createElement("div",{className:"walletconnect-qrcode__notification"+(t?" notification__show":"")},e.message)}var wi=function(e){try{var t="";return Promise.resolve(wr.toString(e,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(t=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),t})}catch(n){return Promise.reject(n)}};function yi(e){var t=_.useState(""),n=t[0],r=t[1],o=_.useState(""),a=o[0],i=o[1];_.useEffect(function(){try{return Promise.resolve(wi(e.uri)).then(function(c){i(c)})}catch(c){Promise.reject(c)}},[]);var l=function(){var c=ti(e.uri);c?(r(e.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return _.createElement("div",null,_.createElement("p",{id:Cr,className:"walletconnect-qrcode__text"},e.text.scan_qrcode_with_wallet),_.createElement("div",{dangerouslySetInnerHTML:{__html:a}}),_.createElement("div",{className:"walletconnect-modal__footer"},_.createElement("a",{onClick:l},e.text.copy_to_clipboard)),_.createElement(vi,{message:n}))}function bi(e){var t=L.isAndroid(),n=L.isMobile(),r=n?e.qrcodeModalOptions&&e.qrcodeModalOptions.mobileLinks?e.qrcodeModalOptions.mobileLinks:void 0:e.qrcodeModalOptions&&e.qrcodeModalOptions.desktopLinks?e.qrcodeModalOptions.desktopLinks:void 0,o=_.useState(!1),a=o[0],i=o[1],l=_.useState(!1),c=l[0],u=l[1],s=_.useState(!n),f=s[0],w=s[1],y={mobile:n,text:e.text,uri:e.uri,qrcodeModalOptions:e.qrcodeModalOptions},h=_.useState(""),b=h[0],d=h[1],v=_.useState(!1),p=v[0],m=v[1],g=_.useState([]),x=g[0],k=g[1],T=_.useState(""),N=T[0],B=T[1],A=function(){c||a||r&&!r.length||x.length>0||_.useEffect(function(){var D=function(){try{if(t)return Promise.resolve();i(!0);var P=oi(function(){var ie=e.qrcodeModalOptions&&e.qrcodeModalOptions.registryUrl?e.qrcodeModalOptions.registryUrl:L.getWalletRegistryUrl();return Promise.resolve(fetch(ie)).then(function(Tr){return Promise.resolve(Tr.json()).then(function(Sr){var kr=Sr.listings,Nr=n?"mobile":"desktop",pe=L.getMobileLinkRegistry(L.formatMobileRegistry(kr,Nr),r);i(!1),u(!0),B(pe.length?"":e.text.no_supported_wallets),k(pe);var pt=pe.length===1;pt&&(d(L.formatIOSMobile(e.uri,pe[0])),w(!0)),m(pt)})})},function(ie){i(!1),u(!0),B(e.text.something_went_wrong),console.error(ie)});return Promise.resolve(P&&P.then?P.then(function(){}):void 0)}catch(ie){return Promise.reject(ie)}};D()})};A();var K=n?f:!f;return _.createElement("div",{id:br,className:"walletconnect-qrcode__base animated fadeIn"},_.createElement("div",{className:"walletconnect-modal__base"},_.createElement(fi,{onClose:e.onClose}),p&&f?_.createElement("div",{className:"walletconnect-modal__single_wallet"},_.createElement("a",{onClick:function(){return L.saveMobileLinkInfo({name:x[0].name,href:b})},href:b,rel:"noopener noreferrer",target:"_blank"},e.text.connect_with+" "+(p?x[0].name:"")+" ›")):t||a||!a&&x.length?_.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(K?" right__selected":"")},_.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?_.createElement(_.Fragment,null,_.createElement("a",{onClick:function(){return w(!1),A()}},e.text.mobile),_.createElement("a",{onClick:function(){return w(!0)}},e.text.qrcode)):_.createElement(_.Fragment,null,_.createElement("a",{onClick:function(){return w(!0)}},e.text.qrcode),_.createElement("a",{onClick:function(){return w(!1),A()}},e.text.desktop))):null,_.createElement("div",null,f||!t&&!a&&!x.length?_.createElement(yi,Object.assign({},y)):_.createElement(mi,Object.assign({},y,{links:x,errorMessage:N})))))}var Ci={choose_preferred_wallet:"Wähle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterstützten Wallet",no_wallets_found:"keine Wallet gefunden"},Ei={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},xi={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera móvil",scan_qrcode_with_wallet:"Escanea el código QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo salió mal",no_supported_wallets:"Todavía no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},Ti={choose_preferred_wallet:"Choisissez votre portefeuille préféré",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copié!",connect_with:"Connectez-vous à l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourné",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouvé"},Si={choose_preferred_wallet:"원하는 지갑을 선택하세요",connect_mobile_wallet:"모바일 지갑과 연결",scan_qrcode_with_wallet:"WalletConnect 지원 지갑에서 QR코드를 스캔하세요",connect:"연결",qrcode:"QR 코드",mobile:"모바일",desktop:"데스크탑",copy_to_clipboard:"클립보드에 복사",copied_to_clipboard:"클립보드에 복사되었습니다!",connect_with:"와 연결하다",loading:"로드 중...",something_went_wrong:"문제가 발생했습니다.",no_supported_wallets:"아직 지원되는 지갑이 없습니다",no_wallets_found:"지갑을 찾을 수 없습니다"},ki={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se à carteira móvel",scan_qrcode_with_wallet:"Ler o código QR com uma carteira compatível com WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda não há carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},Ni={choose_preferred_wallet:"选择你的钱包",connect_mobile_wallet:"连接至移动端钱包",scan_qrcode_with_wallet:"使用兼容 WalletConnect 的钱包扫描二维码",connect:"连接",qrcode:"二维码",mobile:"移动",desktop:"桌面",copy_to_clipboard:"复制到剪贴板",copied_to_clipboard:"复制到剪贴板成功！",connect_with:"通过以下方式连接",loading:"正在加载...",something_went_wrong:"出了问题",no_supported_wallets:"目前还没有支持的钱包",no_wallets_found:"没有找到钱包"},Ai={choose_preferred_wallet:"کیف پول مورد نظر خود را انتخاب کنید",connect_mobile_wallet:"به کیف پول موبایل وصل شوید",scan_qrcode_with_wallet:"کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",connect:"اتصال",qrcode:"کد QR",mobile:"سیار",desktop:"دسکتاپ",copy_to_clipboard:"کپی به کلیپ بورد",copied_to_clipboard:"در کلیپ بورد کپی شد!",connect_with:"ارتباط با",loading:"...بارگذاری",something_went_wrong:"مشکلی پیش آمد",no_supported_wallets:"هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",no_wallets_found:"هیچ کیف پولی پیدا نشد"},Vt={de:Ci,en:Ei,es:xi,fr:Ti,ko:Si,pt:ki,zh:Ni,fa:Ai};function Bi(){var e=L.getDocumentOrThrow(),t=e.getElementById(Kt);t&&e.head.removeChild(t);var n=e.createElement("style");n.setAttribute("id",Kt),n.innerText=ri,e.head.appendChild(n)}function Li(){var e=L.getDocumentOrThrow(),t=e.createElement("div");return t.setAttribute("id",yr),e.body.appendChild(t),t}function Er(){var e=L.getDocumentOrThrow(),t=e.getElementById(br);t&&(t.className=t.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=e.getElementById(yr);n&&e.body.removeChild(n)},li))}function Ri(e){return function(){Er(),e&&e()}}function Pi(){var e=L.getNavigatorOrThrow().language.split("-")[0]||"en";return Vt[e]||Vt.en}function Mi(e,t,n){Bi();var r=Li();_.render(_.createElement(bi,{text:Pi(),uri:e,onClose:Ri(t),qrcodeModalOptions:n}),r)}function Oi(){Er()}var xr=function(){return typeof Y<"u"&&typeof Y.versions<"u"&&typeof Y.versions.node<"u"};function Ii(e,t,n){console.log(e),xr()?ni(e):Mi(e,t,n)}function Di(){xr()||Oi()}var $i={open:Ii,close:Di},Ui=$i;const Yt=Rr(Ui);class V extends Error{constructor(){super(),Object.setPrototypeOf(this,V.prototype)}}class gt extends Error{constructor(){super(),Object.setPrototypeOf(this,gt.prototype)}}var Jt;(function(e){e.Mainnet="solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ",e.Devnet="solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"})(Jt||(Jt={}));var re;(function(e){e.signTransaction="solana_signTransaction",e.signMessage="solana_signMessage"})(re||(re={}));const Qt=e=>({requiredNamespaces:{solana:{chains:[e],methods:[re.signTransaction,re.signMessage],events:[]}}}),Fi=e=>"version"in e;class Vi{constructor(t){this._options=t.options,this._network=t.network}async connect(){const t=this._client??await Mr.init(this._options),n=t.find(Qt(this._network)).filter(r=>r.acknowledged);if(n.length)return this._session=n[n.length-1],this._client=t,{publicKey:this.publicKey};{const{uri:r,approval:o}=await t.connect(Qt(this._network));return new Promise((a,i)=>{r&&Yt.open(r,()=>{i(new gt)}),o().then(l=>{this._session=l,this._client=t,a({publicKey:this.publicKey})}).catch(i).finally(()=>{Yt.close()})})}}async disconnect(){if(this._client&&this._session)await this._client.disconnect({topic:this._session.topic,reason:Or("USER_DISCONNECTED")}),this._session=void 0;else throw new V}get client(){if(this._client)return Object.assign({},this._client,{off:this._client.removeListener});throw new V}get publicKey(){if(this._client&&this._session){const{address:t}=Ir(this._session.namespaces.solana.accounts[0]);return new Br(t)}else throw new V}async signTransaction(t){if(this._client&&this._session){let n,r;Fi(t)?(n=mt.from(t.serialize()).toString("base64"),t.version==="legacy"&&(r=Lr.from(t.serialize()))):(n=t.serialize({requireAllSignatures:!1,verifySignatures:!1}).toString("base64"),r=t);const{signature:o}=await this._client.request({chainId:this._network,topic:this._session.topic,request:{method:re.signTransaction,params:{...r,transaction:n}}});return t.addSignature(this.publicKey,mt.from(Pe.decode(o))),t}else throw new V}async signMessage(t){if(this._client&&this._session){const{signature:n}=await this._client.request({chainId:this._network,topic:this._session.topic,request:{method:re.signMessage,params:{pubkey:this.publicKey.toString(),message:Pe.encode(t)}}});return Pe.decode(n)}else throw new V}}export{V as ClientNotInitializedError,gt as QRCodeModalError,Jt as WalletConnectChainID,Mr as WalletConnectClient,re as WalletConnectRPCMethods,Vi as WalletConnectWallet};
