!function(){var n="rRseEfaqQtTdwWczxvgASDFGZXCVkoiOjpuPhynbmlYUIHJKLBNM",e="ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅁㄴㅇㄹㅎㅋㅌㅊㅍㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡㅣㅛㅕㅑㅗㅓㅏㅣㅠㅜㅡ",i="ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ",f="ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ",d="ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ",x=44032,O=function(n){for(var e={},i=0;i<n.length;++i)e[n[i]]=i;return e}(n),o=function(n){for(var e={},i=0;i<n.length;++i)e[n[i]]=i;return e}(e),t={"ㄱㅅ":"ㄳ","ㄴㅈ":"ㄵ","ㄴㅎ":"ㄶ","ㄹㄱ":"ㄺ","ㄹㅁ":"ㄻ","ㄹㅂ":"ㄼ","ㄹㅅ":"ㄽ","ㄹㅌ":"ㄾ","ㄹㅍ":"ㄿ","ㄹㅎ":"ㅀ","ㅂㅅ":"ㅄ"},r={"ㅗㅏ":"ㅘ","ㅗㅐ":"ㅙ","ㅗㅣ":"ㅚ","ㅜㅓ":"ㅝ","ㅜㅔ":"ㅞ","ㅜㅣ":"ㅟ","ㅡㅣ":"ㅢ"},u=function(n){return o[n]>=28};function a(n){var e=n||{};return this._allowDoubleConsonant=void 0!==e.allowDoubleConsonant&&e.allowDoubleConsonant,this}a.prototype.config=function(n){var e=n||{};this._allowDoubleConsonant=void 0!==e.allowDoubleConsonant&&e.allowDoubleConsonant},a.prototype.VERSION="1.0.6",a.prototype.en2ko=function(n,x){var o=x||{},a=void 0!==o.allowDoubleConsonant?o.allowDoubleConsonant:this._allowDoubleConsonant,l=this,p=[0,1,1,2,2,2,3,3,4,4,5],s=[[1,1,2,2],[3,1,4,4],[1,1,5,2],[3,1,4,-1],[6,1,7,2],[1,1,2,2],[9,1,4,4],[9,1,2,2],[1,1,4,4],[10,1,4,4],[1,1,4,4]],h=function(n){return n[n.length-1]},v=function(n){var x=[];if(n.forEach(function(n,i){var f=e[n];0!==i&&u(h(x)[0])===u(f)||x.push([]),h(x).push(f)}),1===(x=x.map(function(n){var e=n.join("");return t[e]||r[e]||e})).length)return x[0];var O=[i,f,d],o=x.map(function(n,e){return O[e].indexOf(n)});return o.length<3&&o.push(-1),l.한글생성.apply(l,o)};return function(){for(var i,f,d=n.length,x=-1,o=[],l=0,h=[],c=function(){h.length>0&&o.push(v(h)),h=[]},w=0;w<d;++w){var y=n[w],g=O[y];if(void 0===g)l=0,c(),o.push(y);else{var C=(void 0,void 0,i=(e[x]||"")+e[g],f=u(e[x]),u(e[g])?f?r[i]?2:3:2:f?-1==="ㄸㅃㅉ".indexOf(e[g])?0:1:(1!==l||a)&&t[i]?0:1),b=s[l][C];h.push(g);var m=h.length-p[b];m&&o.push(v(h.splice(0,m))),l=b,x=g}}return c(),o.join("")}()},a.prototype.en2kr=function(x){var O="";if(""===x||void 0===x)return O;for(var o=-1,t=-1,r=-1,u=0;u<x.length;u++){var a=x[u],l=n.indexOf(a),p=e[l];if(-1===l)-1!==o?O+=-1!==t?this.한글생성(o,t,r):i[o]:-1!==t?O+=f[t]:-1!==r&&(O+=d[r]),o=-1,t=-1,r=-1,O+=a;else if(l<28)-1!==t?-1===o?(O+=f[t],t=-1,o=i.indexOf(p)):-1===r?-1===(r=d.indexOf(p))&&(O+=this.한글생성(o,t,r),o=i.indexOf(p),t=-1):r===d.indexOf("ㄱ")&&"ㅅ"===p?r=d.indexOf("ㄳ"):r===d.indexOf("ㄴ")&&"ㅈ"===p?r=d.indexOf("ㄵ"):r===d.indexOf("ㄴ")&&"ㅎ"===p?r=d.indexOf("ㄶ"):r===d.indexOf("ㄹ")&&"ㄱ"===p?r=d.indexOf("ㄺ"):r===d.indexOf("ㄹ")&&"ㅁ"===p?r=d.indexOf("ㄻ"):r===d.indexOf("ㄹ")&&"ㅂ"===p?r=d.indexOf("ㄼ"):r===d.indexOf("ㄹ")&&"ㅅ"===p?r=d.indexOf("ㄽ"):r===d.indexOf("ㄹ")&&"ㅌ"===p?r=d.indexOf("ㄾ"):r===d.indexOf("ㄹ")&&"ㅍ"===p?r=d.indexOf("ㄿ"):r===d.indexOf("ㄹ")&&"ㅎ"===p?r=d.indexOf("ㅀ"):r===d.indexOf("ㅂ")&&"ㅅ"===p?r=d.indexOf("ㅄ"):(O+=this.한글생성(o,t,r),t=-1,r=-1,o=i.indexOf(p)):-1===o?o=i.indexOf(p):(O+=i[o],o=i.indexOf(p));else{var s;if(-1!==r)r===d.indexOf("ㄳ")?(r=d.indexOf("ㄱ"),s=i.indexOf("ㅅ")):r===d.indexOf("ㄵ")?(r=d.indexOf("ㄴ"),s=i.indexOf("ㅈ")):r===d.indexOf("ㄶ")?(r=d.indexOf("ㄴ"),s=i.indexOf("ㅎ")):r===d.indexOf("ㄺ")?(r=d.indexOf("ㄹ"),s=i.indexOf("ㄱ")):r===d.indexOf("ㄻ")?(r=d.indexOf("ㄹ"),s=i.indexOf("ㅁ")):r===d.indexOf("ㄼ")?(r=d.indexOf("ㄹ"),s=i.indexOf("ㅂ")):r===d.indexOf("ㄽ")?(r=d.indexOf("ㄹ"),s=i.indexOf("ㅅ")):r===d.indexOf("ㄾ")?(r=d.indexOf("ㄹ"),s=i.indexOf("ㅌ")):r===d.indexOf("ㄿ")?(r=d.indexOf("ㄹ"),s=i.indexOf("ㅍ")):r===d.indexOf("ㅀ")?(r=d.indexOf("ㄹ"),s=i.indexOf("ㅎ")):r===d.indexOf("ㅄ")?(r=d.indexOf("ㅂ"),s=i.indexOf("ㅅ")):(s=i.indexOf(d[r]),r=-1),O+=-1!=o?this.한글생성(o,t,r):d[r],o=s,t=-1,r=-1;-1===t?t=f.indexOf(p):t===f.indexOf("ㅗ")&&"ㅏ"===p?t=f.indexOf("ㅘ"):t===f.indexOf("ㅗ")&&"ㅐ"===p?t=f.indexOf("ㅙ"):t===f.indexOf("ㅗ")&&"ㅣ"===p?t=f.indexOf("ㅚ"):t===f.indexOf("ㅜ")&&"ㅓ"===p?t=f.indexOf("ㅝ"):t===f.indexOf("ㅜ")&&"ㅔ"===p?t=f.indexOf("ㅞ"):t===f.indexOf("ㅜ")&&"ㅣ"===p?t=f.indexOf("ㅟ"):t===f.indexOf("ㅡ")&&"ㅣ"===p?t=f.indexOf("ㅢ"):(-1!=o?(O+=this.한글생성(o,t,r),o=-1):O+=f[t],t=-1,O+=p)}}return-1!==o?O+=-1!==t?this.한글생성(o,t,r):i[o]:-1!==t?O+=f[t]:-1!==r&&(O+=d[r]),O},a.prototype.ko2en=function(e){var i="";if(""===e||void 0===e)return i;for(var f=[-1,-1,-1,-1,-1],d=0;d<e.length;d++){var O=e[d],o=O.charCodeAt();o>=x&&o<=55203||o>=12593&&o<=12643?f=this.한글분리(O):(i+=O,f=[-1,-1,-1,-1,-1]);for(var t=0;t<f.length;t++)-1!==f[t]&&(i+=n[f[t]])}return i},a.prototype.한글생성=function(n,e,i){return String.fromCharCode(44032+588*n+28*e+i+1)},a.prototype.한글분리=function(n){var O=n.charCodeAt();if(O>=x&&O<=55203){var o=Math.floor((O-x)/588),t=Math.floor((O-x-588*o)/28),r=O-x-588*o-28*t-1,u=t,a=-1,l=r,p=-1;return t==f.indexOf("ㅘ")?(u=e.indexOf("ㅗ"),a=e.indexOf("ㅏ")):t==f.indexOf("ㅙ")?(u=e.indexOf("ㅗ"),a=e.indexOf("ㅐ")):t==f.indexOf("ㅚ")?(u=e.indexOf("ㅗ"),a=e.indexOf("ㅣ")):t==f.indexOf("ㅝ")?(u=e.indexOf("ㅜ"),a=e.indexOf("ㅓ")):t==f.indexOf("ㅞ")?(u=e.indexOf("ㅜ"),a=e.indexOf("ㅔ")):t==f.indexOf("ㅟ")?(u=e.indexOf("ㅜ"),a=e.indexOf("ㅣ")):t==f.indexOf("ㅢ")&&(u=e.indexOf("ㅡ"),a=e.indexOf("ㅣ")),r==d.indexOf("ㄳ")?(l=e.indexOf("ㄱ"),p=e.indexOf("ㅅ")):r==d.indexOf("ㄵ")?(l=e.indexOf("ㄴ"),p=e.indexOf("ㅈ")):r==d.indexOf("ㄶ")?(l=e.indexOf("ㄴ"),p=e.indexOf("ㅎ")):r==d.indexOf("ㄺ")?(l=e.indexOf("ㄹ"),p=e.indexOf("ㄱ")):r==d.indexOf("ㄻ")?(l=e.indexOf("ㄹ"),p=e.indexOf("ㅁ")):r==d.indexOf("ㄼ")?(l=e.indexOf("ㄹ"),p=e.indexOf("ㅂ")):r==d.indexOf("ㄽ")?(l=e.indexOf("ㄹ"),p=e.indexOf("ㅅ")):r==d.indexOf("ㄾ")?(l=e.indexOf("ㄹ"),p=e.indexOf("ㅌ")):r==d.indexOf("ㄿ")?(l=e.indexOf("ㄹ"),p=e.indexOf("ㅍ")):r==d.indexOf("ㅀ")?(l=e.indexOf("ㄹ"),p=e.indexOf("ㅎ")):r==d.indexOf("ㅄ")&&(l=e.indexOf("ㅂ"),p=e.indexOf("ㅅ")),-1===a&&(u=e.indexOf(f[t])),-1===p&&(l=e.indexOf(d[r])),[o,u,a,l,p]}if(O>=12593&&O<=12643){if(i.indexOf(n)>-1)return[o=e.indexOf(n),-1,-1,-1,-1];if(f.indexOf(n)>-1){u=t=f.indexOf(n),a=-1;return t==f.indexOf("ㅘ")?(u=e.indexOf("ㅗ"),a=e.indexOf("ㅏ")):t==f.indexOf("ㅙ")?(u=e.indexOf("ㅗ"),a=e.indexOf("ㅐ")):t==f.indexOf("ㅚ")?(u=e.indexOf("ㅗ"),a=e.indexOf("ㅣ")):t==f.indexOf("ㅝ")?(u=e.indexOf("ㅜ"),a=e.indexOf("ㅓ")):t==f.indexOf("ㅞ")?(u=e.indexOf("ㅜ"),a=e.indexOf("ㅔ")):t==f.indexOf("ㅟ")?(u=e.indexOf("ㅜ"),a=e.indexOf("ㅣ")):t==f.indexOf("ㅢ")&&(u=e.indexOf("ㅡ"),a=e.indexOf("ㅣ")),-1===a&&(u=e.indexOf(f[t])),[-1,u,a,-1,-1]}}return[-1,-1,-1,-1,-1]},a.prototype.is한글=function(n){if(n.length>1)throw new Error("한글자가 아닙니다.");return/[ㄱ-ㅎ|ㅏ-ㅣ|기-힣]/.test(n)},"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=a),exports.Inko=a),"function"==typeof define&&define.amd&&define([],function(){return a}),"undefined"!=typeof importScripts&&(inko=new a,self.Inko=a),"object"==typeof window&&"object"==typeof window.document&&(window.Inko=a,window.inko=new a)}();