/*! For license information please see 782e7d4f.78da44c2.js.LICENSE.txt */
"use strict";(self.webpackChunktheorybear=self.webpackChunktheorybear||[]).push([[998],{3905:(e,t,r)=>{r.d(t,{ah:()=>l});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,p=u["".concat(a,".").concat(d)]||u[d]||f[d]||s;return r?n.createElement(p,i(i({ref:t},h),{},{components:r})):n.createElement(p,i({ref:t},h))}));h.displayName="MDXCreateElement"},4673:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(7462),o=r(7294),s=r(6010),i=r(2389),c=r(6043);const a={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function l(e){return!!e&&("SUMMARY"===e.tagName||l(e.parentElement))}function f(e,t){return!!e&&(e===t||f(e.parentElement,t))}function h(e){let{summary:t,children:r,...h}=e;const u=(0,i.Z)(),d=(0,o.useRef)(null),{collapsed:p,setCollapsed:m}=(0,c.u)({initialState:!h.open}),[b,y]=(0,o.useState)(h.open),j=o.isValidElement(t)?t:o.createElement("summary",null,t??"Details");return o.createElement("details",(0,n.Z)({},h,{ref:d,open:b,"data-collapsed":p,className:(0,s.Z)(a.details,u&&a.isBrowser,h.className),onMouseDown:e=>{l(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;l(t)&&f(t,d.current)&&(e.preventDefault(),p?(m(!1),y(!0)):m(!0))}}),j,o.createElement(c.z,{lazy:!1,collapsed:p,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),y(!e)}},o.createElement("div",{className:a.collapsibleContent},r)))}const u={details:"details_b_Ee"},d="alert alert--info";function p(e){let{...t}=e;return o.createElement(h,(0,n.Z)({},t,{className:(0,s.Z)(d,u.details,t.className)}))}},6064:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>f});r(7294);var n=r(3905),o=r(5893);r(4673);const s=r.p+"assets/images/polar-bear-f5717bb2491760eab06447ce7c65312f.jpg",i={},c="Concert Choir",a={unversionedId:"concert-choir/concert-choir",id:"concert-choir/concert-choir",title:"Concert Choir",description:"Hello! Welcome to theorybear for Concert Choir! You can learn more at the Introduction, or dive right into Unit 1: Clefs, staff, lines + spaces, intro to sheet music!",source:"@site/docs/concert-choir/concert-choir.mdx",sourceDirName:"concert-choir",slug:"/concert-choir/",permalink:"/docs/concert-choir/",draft:!1,editUrl:"https://github.com/thatrobotdev/theorybear/tree/main/docs/concert-choir/concert-choir.mdx",tags:[],version:"current",frontMatter:{},sidebar:"theory",previous:{title:"Lesson 30: Key Signatures \u2013 The Flat Keys",permalink:"/docs/alfreds-essentials-of-music-theory/book-2/unit-7/key-signatures-the-flat-keys"},next:{title:"Unit 1: Clefs, staff, lines + spaces, intro to sheet music",permalink:"/docs/concert-choir/unit-1/"}},l={},f=[{value:"Units",id:"units",level:2},{value:"Unit 1: Clefs, staff, lines + spaces, intro to sheet music",id:"unit-1-clefs-staff-lines--spaces-intro-to-sheet-music",level:3},{value:"The Staff",id:"the-staff",level:4},{value:"Music Notes and Clefs",id:"music-notes-and-clefs",level:4}];function h(e){const t=Object.assign({h1:"h1",p:"p",a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4"},(0,n.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"concert-choir",children:"Concert Choir"}),"\n",(0,o.jsxs)(t.p,{children:["Hello! Welcome to theorybear for Concert Choir! You can learn more at the ",(0,o.jsx)(t.a,{href:"/docs/introduction",children:"Introduction"}),", or dive right into ",(0,o.jsx)(t.a,{href:"/docs/concert-choir/unit-1",children:"Unit 1: Clefs, staff, lines + spaces, intro to sheet music"}),"!"]}),"\n",(0,o.jsxs)("figure",{class:"card card__body",style:{display:"inline-flex",float:"right",maxWidth:"500px"},children:[(0,o.jsx)("img",{src:s,alt:"Polar bear",style:{width:"200px"}}),(0,o.jsxs)("figcaption",{children:[(0,o.jsxs)("p",{class:"card__body",children:[(0,o.jsx)(t.em,{children:"Ursus maritimus"})," (Polar bear) in Churchill, Manitoba, Canada. Look at how cute the snow is on its nose! ",(0,o.jsx)(t.em,{children:"Ahem..."})," time to learn some music theory!"]}),(0,o.jsx)("footer",{class:"card__footer",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)("a",{href:"https://commons.wikimedia.org/wiki/File:Polar_Bear,_Churchill,_Manitoba,_Canada..jpg",children:"Teresa from M\xe9xico"}),", ",(0,o.jsx)("a",{href:"https://creativecommons.org/licenses/by/2.0",children:"CC BY 2.0"}),", via Wikimedia Commons"]})})]})]}),"\n",(0,o.jsx)(t.h2,{id:"units",children:"Units"}),"\n",(0,o.jsx)(t.h3,{id:"unit-1-clefs-staff-lines--spaces-intro-to-sheet-music",children:(0,o.jsx)(t.a,{href:"/docs/concert-choir/unit-1",children:"Unit 1: Clefs, staff, lines + spaces, intro to sheet music"})}),"\n",(0,o.jsx)(t.h4,{id:"the-staff",children:(0,o.jsx)(t.a,{href:"/docs/concert-choir/unit-1/the-staff",children:"The Staff"})}),"\n",(0,o.jsx)(t.h4,{id:"music-notes-and-clefs",children:(0,o.jsx)(t.a,{href:"/docs/concert-choir/unit-1/music-notes-clefs",children:"Music Notes and Clefs"})})]})}const u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(h,e)})):h(e)}},5251:(e,t,r)=>{r(7418);var n=r(7294),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),t.Fragment=s("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,f=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(f=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:f,props:s,_owner:i.current}}t.jsx=l,t.jsxs=l},5893:(e,t,r)=>{e.exports=r(5251)}}]);