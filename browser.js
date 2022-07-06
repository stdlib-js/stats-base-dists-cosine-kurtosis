// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(r,t,n,e,u,i){"use strict";function o(r){return r&&"object"==typeof r&&"default"in r?r:{default:r}}var a=o(r),f=o(t),c=o(n),l=o(e),s=o(u),y=o(i);function p(r){return r!=r}function v(r){return a.default(r)===r}function d(r){return v(r/2)}function w(r){return d(r>0?r-1:r+1)}var b=Number.POSITIVE_INFINITY,A=Number.NEGATIVE_INFINITY;function h(r){return r===b||r===A}var m=Math.sqrt;function F(r){return Math.abs(r)}var N="function"==typeof Uint32Array?Uint32Array:void 0,I=f.default()?N:function(){throw new Error("not implemented")},E="function"==typeof Float64Array;function U(r){return E&&r instanceof Float64Array||"[object Float64Array]"===c.default(r)}var H,q="function"==typeof Float64Array?Float64Array:null,T="function"==typeof Float64Array?Float64Array:void 0;H=function(){var r,t;if("function"!=typeof q)return!1;try{r=U(t=new q([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?T:function(){throw new Error("not implemented")};var G,O,W,g=H,L="function"==typeof Uint8Array?Uint8Array:void 0,S=l.default()?L:function(){throw new Error("not implemented")},j="function"==typeof Uint16Array?Uint16Array:void 0,x=s.default()?j:function(){throw new Error("not implemented")},M={uint16:x,uint8:S};(G=new M.uint16(1))[0]=4660,!0==(52===new M.uint8(G.buffer)[0])?(O=1,W=0):(O=0,W=1);var V={HIGH:O,LOW:W},Y=new g(1),_=new I(Y.buffer),k=V.HIGH,C=V.LOW;function P(r,t){return Y[0]=t,r[0]=_[k],r[1]=_[C],r}function $(r,t){return 1===arguments.length?P([0,0],r):P(r,t)}var z,B="function"==typeof Float64Array?Float64Array:null,D="function"==typeof Float64Array?Float64Array:void 0;z=function(){var r,t;if("function"!=typeof B)return!1;try{r=U(t=new B([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J,K=z,Q={uint16:x,uint8:S};J=function(){var r;return(r=new Q.uint16(1))[0]=4660,52===new Q.uint8(r.buffer)[0]}();var R=!0===J?0:1,X=new K(1),Z=new I(X.buffer);function rr(r,t){return X[0]=r,Z[R]=t>>>0,X[0]}function tr(r){return 0|r}var nr,er="function"==typeof Float64Array?Float64Array:null,ur="function"==typeof Float64Array?Float64Array:void 0;nr=function(){var r,t;if("function"!=typeof er)return!1;try{r=U(t=new er([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var ir,or=nr,ar={uint16:x,uint8:S};ir=function(){var r;return(r=new ar.uint16(1))[0]=4660,52===new ar.uint8(r.buffer)[0]}();var fr=!0===ir?1:0,cr=new or(1),lr=new I(cr.buffer);function sr(r){return cr[0]=r,lr[fr]}var yr,pr="function"==typeof Float64Array?Float64Array:null,vr="function"==typeof Float64Array?Float64Array:void 0;yr=function(){var r,t;if("function"!=typeof pr)return!1;try{r=U(t=new pr([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var dr,wr,br,Ar=yr,hr={uint16:x,uint8:S};dr=function(){var r;return(r=new hr.uint16(1))[0]=4660,52===new hr.uint8(r.buffer)[0]}(),!0===dr?(wr=1,br=0):(wr=0,br=1);var mr={HIGH:wr,LOW:br},Fr=new Ar(1),Nr=new I(Fr.buffer),Ir=mr.HIGH,Er=mr.LOW,Ur=[0,0];function Hr(r,t){var n,e,u,i;return $(Ur,r),n=Ur[0],n&=2147483647,e=sr(t),u=n|=e&=2147483648,i=Ur[1],Nr[Ir]=u,Nr[Er]=i,Fr[0]}var qr,Tr="function"==typeof Float64Array?Float64Array:null,Gr="function"==typeof Float64Array?Float64Array:void 0;qr=function(){var r,t;if("function"!=typeof Tr)return!1;try{r=U(t=new Tr([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Or,Wr=qr,gr={uint16:x,uint8:S};Or=function(){var r;return(r=new gr.uint16(1))[0]=4660,52===new gr.uint8(r.buffer)[0]}();var Lr=!0===Or?1:0,Sr=new Wr(1),jr=new I(Sr.buffer);function xr(r,t){return Sr[0]=r,jr[Lr]=t>>>0,Sr[0]}var Mr=1023,Vr=1048576,Yr=[1,1.5],_r=[0,.5849624872207642],kr=[0,1.350039202129749e-8];function Cr(r,t){return p(t)||h(t)?(r[0]=t,r[1]=0,r):0!==t&&F(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var Pr=[0,0],$r=[0,0];function zr(r,t){var n,e;return 0===t||0===r||p(r)||h(r)?r:(function(r,t){1===arguments.length?Cr([0,0],r):Cr(r,t)}(Pr,r),t+=Pr[1],t+=function(r){var t=sr(r);return(t=(2146435072&t)>>>20)-Mr|0}(r=Pr[0]),t<-1074?Hr(0,r):t>1023?r<0?A:b:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,$($r,r),n=$r[0],n&=2148532223,n|=t+Mr<<20,e*y.default(n,$r[1])))}var Br=2147483647,Dr=1048575,Jr=1048576,Kr=2147483647,Qr=1083179008,Rr=1e300,Xr=1e-300,Zr=[0,0],rt=[0,0];function tt(r,t){var n,e,u,i,o,a,f,c,l,s,y,d,N,I;if(p(r)||p(t))return NaN;if($(Zr,t),o=Zr[0],0===Zr[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return m(r);if(-.5===t)return 1/m(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(h(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:F(r)<1==(t===b)?0:b}(r,t)}if($(Zr,r),i=Zr[0],0===Zr[1]){if(0===i)return function(r,t){return t===A?b:t===b?0:t>0?w(t)?r:0:w(t)?Hr(b,r):b}(r,t);if(1===r)return 1;if(-1===r&&w(t))return-1;if(h(r))return r===A?tt(-0,-t):t<0?0:b}if(r<0&&!1===v(t))return(r-r)/(r-r);if(u=F(r),n=i&Kr|0,e=o&Kr|0,f=o>>>31|0,a=(a=i>>>31|0)&&w(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&sr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?a*Rr*Rr:a*Xr*Xr;if(n>1072693248)return 0===f?a*Rr*Rr:a*Xr*Xr;y=function(r,t){var n,e,u,i,o,a;return n=(o=1.9259629911266175e-8*(u=t-1)-u*u*(0===(a=u)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=rr(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=n,r}(rt,u)}else y=function(r,t,n){var e,u,i,o,a,f,c,l,s,y,p,v,d,w,b,A,h,m,F,N,I;return m=0,n<Vr&&(m-=53,n=sr(t*=9007199254740992)),m+=(n>>20)-Mr|0,n=1072693248|(F=1048575&n|0),F<=235662?N=0:F<767610?N=1:(N=0,m+=1,n-=Vr),o=rr(u=(A=(t=xr(t,n))-(c=Yr[N]))*(h=1/(t+c)),0),e=524288+(n>>1|536870912),f=xr(0,e+=N<<18),b=(i=u*u)*i*(0===(I=i)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),f=rr(f=3+(i=o*o)+(b+=(a=h*(A-o*f-o*(t-(f-c))))*(o+u)),0),d=(p=-7.028461650952758e-9*(s=rr(s=(A=o*f)+(h=a*f+(b-(f-3-i))*u),0))+.9617966939259756*(h-(s-A))+kr[N])-((v=rr(v=(y=.9617967009544373*s)+p+(l=_r[N])+(w=m),0))-w-l-y),r[0]=v,r[1]=d,r}(rt,u,n);if(s=(t-(c=rr(t,0)))*y[0]+t*y[1],l=c*y[0],$(Zr,d=s+l),N=tr(Zr[0]),I=tr(Zr[1]),N>=Qr){if(0!=(N-Qr|I))return a*Rr*Rr;if(s+8008566259537294e-32>d-l)return a*Rr*Rr}else if((N&Kr)>=1083231232){if(0!=(N-3230714880|I))return a*Xr*Xr;if(s<=d-l)return a*Xr*Xr}return d=function(r,t,n){var e,u,i,o,a,f,c,l,s,y;return s=((l=r&Br|0)>>20)-Mr|0,c=0,l>1071644672&&(u=xr(0,((c=r+(Jr>>s+1)>>>0)&~(Dr>>(s=((c&Br)>>20)-Mr|0)))>>>0),c=(c&Dr|Jr)>>20-s>>>0,r<0&&(c=-c),t-=u),r=tr(r=sr(f=1-((f=(i=.6931471824645996*(u=rr(u=n+t,0)))+(o=.6931471805599453*(n-(u-t))+-1.904654299957768e-9*u))*(e=f-(u=f*f)*(0===(y=u)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((a=o-(f-i))+f*a)-f))),(r+=c<<20>>>0)>>20<=0?zr(f,c):xr(f,r)}(N,l,s),a*d}var nt=9.869604401089358;return function(r,t){var n;return p(r)||p(t)||t<=0?NaN:(n=-44.45454620401458,n/=5*tt(nt-6,2))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@stdlib/math-base-special-floor"),require("@stdlib/assert-has-uint32array-support"),require("@stdlib/utils-native-class"),require("@stdlib/assert-has-uint8array-support"),require("@stdlib/assert-has-uint16array-support"),require("@stdlib/number-float64-base-from-words")):"function"==typeof define&&define.amd?define(["@stdlib/math-base-special-floor","@stdlib/assert-has-uint32array-support","@stdlib/utils-native-class","@stdlib/assert-has-uint8array-support","@stdlib/assert-has-uint16array-support","@stdlib/number-float64-base-from-words"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).kurtosis=t(r.floor,r.hasUint32ArraySupport,r.nativeClass,r.hasUint8ArraySupport,r.hasUint16ArraySupport,r.fromWords$1);
//# sourceMappingURL=browser.js.map
