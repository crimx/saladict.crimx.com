!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o={chrome:{chs:{title:"Chrome 网上应用店",url:"https://chrome.google.com/webstore/detail/cdonnmffkdaoajfknoeeecmchibpmkmg/reviews?hl=zh"},en:{title:"Chrome Web Store",url:"https://chrome.google.com/webstore/detail/cdonnmffkdaoajfknoeeecmchibpmkmg/reviews?hl=en"}},firefox:{chs:{title:"Firefox 扩展",url:"https://addons.mozilla.org/zh/firefox/addon/ext-saladict/"},en:{title:"Firefox",url:"https://addons.mozilla.org/en/firefox/addon/ext-saladict/"}},edge:{chs:{title:"Microsoft Edge 外接程序",url:"https://microsoftedge.microsoft.com/addons/detail/idghocbbahafpfhjnfhpbfbmpegphmmp"},en:{title:"Microsoft Edge Addons",url:"https://microsoftedge.microsoft.com/addons/detail/idghocbbahafpfhjnfhpbfbmpegphmmp"}}},r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];document.querySelectorAll(".jelly").forEach(e=>{let t;const n=()=>{clearTimeout(t),e.classList.remove("jellify"),e.scrollHeight,e.classList.add("jellify"),e.classList.contains("jelly-beat")&&(t=setTimeout(n,3e3))};e.addEventListener("click",n),e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",n),e.classList.contains("jellify")&&(t=setTimeout(n,3e3))}),async function(){const e=document.querySelector(".testimonials");if(!e)return;const t=location.pathname.startsWith("/en/"),n=await fetch(`/assets/testimonials/${t?"en":"zh-cn"}.json`).then(e=>e.json()).catch(()=>[]);if(!n||n.length<=0)return;const i=function(){let e=0,i=n.length-1,s=NaN;return(l="next")=>{if(s=isNaN(s)?0:"next"===l?(s+1)%n.length:(s-1+n.length)%n.length,s>=e&&s<=i){const t=Math.floor(Math.random()*(i-e+1)+e),o=n[s];n[s]=n[t],n[t]=o,s===e?e+=1:i-=1}const a=n[s],c=new Date(a.date);let u="",d="";if(t){u=r[c.getUTCMonth()]+" "+c.getUTCDate()+", "+c.getUTCFullYear();const e=o[a.source].en;d=`From <a href="${e.url}">${e.title}</a>`}else{u=c.getUTCFullYear()+"年"+(c.getUTCMonth()+1)+"月"+c.getUTCDate()+"日";const e=o[a.source].chs;d=`留言自 <a href="${e.url}">${e.title}</a>`}return`\n      <div class="container">\n        <div class="testimonial-main">\n          <p title="${a.content}" class="testimonial-content is-size-4-tablet">\n            “ ${a.content.split("\n").join("<br>")} ”\n          </p>\n          <p class="is-size-6 has-text-right">—— ${a.author}</p>\n          <p class="is-size-7 has-text-right">${u} · ${d}</p>\n        </div>\n      </div>\n      `}}(),[s,l,a]=e.children,c={next:a.children[0],real:a.children[1],prev:a.children[2]};let u;c.real.innerHTML=i(),e.classList.add("is-active");let d=!1;function f(e){e.currentTarget.blur()}function m(e){e&&e.preventDefault(),clearTimeout(u),u=setTimeout(m,5e3),d||h("next")}function h(e){c[e].innerHTML=c.real.innerHTML,c.real.innerHTML=i(e),a.classList.add(`is-move-${e}-start`),a.offsetHeight,a.classList.remove(`is-move-${e}-start`)}s.addEventListener("click",(function(e){e&&(e.preventDefault(),console.log(e.buttons));clearTimeout(u),u=setTimeout(m,5e3),d||h("prev")})),l.addEventListener("click",m),s.addEventListener("mouseleave",f),l.addEventListener("mouseleave",f),a.addEventListener("mouseenter",()=>{d=!0}),a.addEventListener("mouseleave",()=>{d=!1}),u=setTimeout(m,2e3)}()}]);