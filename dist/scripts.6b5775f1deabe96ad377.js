(()=>{"use strict";var e,r={579:(e,r,t)=>{t(755),t(169),function(){const e=document.querySelector(".burger"),r=document.querySelector(".menu"),t=document.querySelector("body");e.addEventListener("click",(()=>{r.classList.contains("active")?(r.classList.remove("active"),e.classList.remove("active-burger"),t.classList.remove("locked")):(r.classList.add("active"),e.classList.add("active-burger"),t.classList.add("locked"))})),window.addEventListener("resize",(()=>{window.innerWidth>768.98&&(r.classList.remove("active"),e.classList.remove("active-burger"),t.classList.remove("locked"))}))}(),window.addEventListener("scroll",(function(){const e=document.querySelector("nav");window.scrollY>=768.98&&e.classList.add("fixed__nav")}))}},t={};function o(e){var s=t[e];if(void 0!==s)return s.exports;var a=t[e]={exports:{}};return r[e].call(a.exports,a,a.exports,o),a.exports}o.m=r,e=[],o.O=(r,t,s,a)=>{if(!t){var n=1/0;for(d=0;d<e.length;d++){for(var[t,s,a]=e[d],i=!0,c=0;c<t.length;c++)(!1&a||n>=a)&&Object.keys(o.O).every((e=>o.O[e](t[c])))?t.splice(c--,1):(i=!1,a<n&&(n=a));if(i){e.splice(d--,1);var l=s();void 0!==l&&(r=l)}}return r}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[t,s,a]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={787:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var s,a,[n,i,c]=t,l=0;if(n.some((r=>0!==e[r]))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(c)var d=c(o)}for(r&&r(t);l<n.length;l++)a=n[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},t=self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var s=o.O(void 0,[582],(()=>o(579)));s=o.O(s)})();
//# sourceMappingURL=scripts.6b5775f1deabe96ad377.js.map