/*! For license information please see e08cd72e.adbe7c36.js.LICENSE.txt */
"use strict";(self.webpackChunktheorybear=self.webpackChunktheorybear||[]).push([[76],{3905:(e,t,n)=>{n.d(t,{ah:()=>l});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,p=u["".concat(c,".").concat(f)]||u[f]||d[f]||s;return n?r.createElement(p,a(a({ref:t},h),{},{components:n})):r.createElement(p,a({ref:t},h))}));h.displayName="MDXCreateElement"},4673:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(7462),i=n(7294),s=n(6010),a=n(2389),o=n(6043);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function l(e){return!!e&&("SUMMARY"===e.tagName||l(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function h(e){let{summary:t,children:n,...h}=e;const u=(0,a.Z)(),f=(0,i.useRef)(null),{collapsed:p,setCollapsed:m}=(0,o.u)({initialState:!h.open}),[b,y]=(0,i.useState)(h.open),j=i.isValidElement(t)?t:i.createElement("summary",null,t??"Details");return i.createElement("details",(0,r.Z)({},h,{ref:f,open:b,"data-collapsed":p,className:(0,s.Z)(c.details,u&&c.isBrowser,h.className),onMouseDown:e=>{l(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;l(t)&&d(t,f.current)&&(e.preventDefault(),p?(m(!1),y(!0)):m(!0))}}),j,i.createElement(o.z,{lazy:!1,collapsed:p,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{m(e),y(!e)}},i.createElement("div",{className:c.collapsibleContent},n)))}const u={details:"details_b_Ee"},f="alert alert--info";function p(e){let{...t}=e;return i.createElement(h,(0,r.Z)({},t,{className:(0,s.Z)(f,u.details,t.className)}))}},2653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});n(7294);var r=n(3905),i=n(5893),s=n(4673);const a={sidebar_position:1},o="Unit 1: Clefs, staff, lines + spaces, intro to sheet music",c={unversionedId:"concert-choir/unit-1/unit-1",id:"concert-choir/unit-1/unit-1",title:"Unit 1: Clefs, staff, lines + spaces, intro to sheet music",description:"Learning Objectives",source:"@site/docs/concert-choir/unit-1/unit-1.mdx",sourceDirName:"concert-choir/unit-1",slug:"/concert-choir/unit-1/",permalink:"/docs/concert-choir/unit-1/",draft:!1,editUrl:"https://github.com/thatrobotdev/theorybear/tree/main/docs/concert-choir/unit-1/unit-1.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"theory",previous:{title:"Concert Choir",permalink:"/docs/concert-choir/"},next:{title:"The Staff",permalink:"/docs/concert-choir/unit-1/the-staff"}},l={},d=[{value:"Learning Objectives",id:"learning-objectives",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Resources",id:"resources",level:2},{value:"One-Minute Theory Book 1",id:"one-minute-theory-book-1",level:3},{value:"Quizlet",id:"quizlet",level:3},{value:"Flashcards",id:"flashcards",level:4}];function h(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",h4:"h4"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"unit-1-clefs-staff-lines--spaces-intro-to-sheet-music",children:"Unit 1: Clefs, staff, lines + spaces, intro to sheet music"}),"\n",(0,i.jsx)(t.h2,{id:"learning-objectives",children:"Learning Objectives"}),"\n",(0,i.jsx)(s.Z,{summary:"1.A Identify, draw, and describe a staff",children:(0,i.jsx)(t.p,{children:"Students can identify and draw a five-line staff and describe its use in conveying pitch."})}),"\n",(0,i.jsx)(s.Z,{summary:"1.B Identify and draw the Treble (G) Clef and Bass (F) Clef.",children:(0,i.jsx)(t.p,{children:"Students can identify and draw a Treble (G) Clef and Bass (F) Clef."})}),"\n",(0,i.jsx)(s.Z,{summary:"1.C Explain how clefs help us identify pitches on the staff.",children:(0,i.jsx)(t.p,{children:"Students can explain how clefs help us identify pitches on the staff."})}),"\n",(0,i.jsx)(s.Z,{summary:"1.D Identify and notate pitches on a staff with Treble (G) Clef and Bass (F) Clef with the musical alphabet",children:(0,i.jsx)(t.p,{children:"Students can identify and notate pitches on a staff with Treble (G) Clef and Bass (F) Clef using the musical alphabet."})}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:'Welcome to your first music theory unit! In this unit you will learn about indentifying and drawing staves, how to utilize musical clefs, and how to place pitches on a staff. On unit pages like these, you can find resources and objectives for the entire unit which you can refer to for studying. To delve deeper into a specific topic, click the "Next" button at the bottom of the page or check the sidebar!'}),"\n",(0,i.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsx)(t.h3,{id:"one-minute-theory-book-1",children:"One-Minute Theory Book 1"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Topic"}),(0,i.jsx)(t.th,{children:"Page"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Staff"}),(0,i.jsx)(t.td,{children:"3-4"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Treble (G) Clef"}),(0,i.jsx)(t.td,{children:"5-6"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Bass (F) Clef"}),(0,i.jsx)(t.td,{children:"6-7"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Lines and Spaces on both Clefs"}),(0,i.jsx)(t.td,{children:"8-18"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"quizlet",children:(0,i.jsx)(t.a,{href:"https://quizlet.com/831280005/concert-choir-unit-1-clefs-staff-lines-spaces-intro-to-sheet-music-flash-cards/",children:"Quizlet"})}),"\n",(0,i.jsx)(t.h4,{id:"flashcards",children:"Flashcards"}),"\n",(0,i.jsx)("iframe",{src:"https://quizlet.com/831280005/flashcards/embed?i=4jdgf1&x=1jj1",height:"500",width:"100%",style:{border:"0"}})]})}const u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}},5251:(e,t,n)=>{n(7418);var r=n(7294),i=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;i=s("react.element"),t.Fragment=s("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:a.current}}t.jsx=l,t.jsxs=l},5893:(e,t,n)=>{e.exports=n(5251)}}]);