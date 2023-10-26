/*! For license information please see 1eab856b.03c9d6ee.js.LICENSE.txt */
"use strict";(self.webpackChunktheorybear=self.webpackChunktheorybear||[]).push([[6944],{3905:(e,n,s)=>{s.d(n,{ah:()=>c});var t=s(7294);function r(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function i(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function a(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?i(Object(s),!0).forEach((function(n){r(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function l(e,n){if(null==e)return{};var s,t,r=function(e,n){if(null==e)return{};var s,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)s=i[t],n.indexOf(s)>=0||(r[s]=e[s]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)s=i[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var o=t.createContext({}),c=function(e){var n=t.useContext(o),s=n;return e&&(s="function"==typeof e?e(n):a(a({},n),e)),s},h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var s=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(s),f=r,p=u["".concat(o,".").concat(f)]||u[f]||h[f]||i;return s?t.createElement(p,a(a({ref:n},d),{},{components:s})):t.createElement(p,a({ref:n},d))}));d.displayName="MDXCreateElement"},4673:(e,n,s)=>{s.d(n,{Z:()=>p});var t=s(7462),r=s(7294),i=s(6010),a=s(2389),l=s(6043);const o={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function h(e,n){return!!e&&(e===n||h(e.parentElement,n))}function d(e){let{summary:n,children:s,...d}=e;const u=(0,a.Z)(),f=(0,r.useRef)(null),{collapsed:p,setCollapsed:y}=(0,l.u)({initialState:!d.open}),[m,j]=(0,r.useState)(d.open),x=r.isValidElement(n)?n:r.createElement("summary",null,n??"Details");return r.createElement("details",(0,t.Z)({},d,{ref:f,open:m,"data-collapsed":p,className:(0,i.Z)(o.details,u&&o.isBrowser,d.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;c(n)&&h(n,f.current)&&(e.preventDefault(),p?(y(!1),j(!0)):y(!0))}}),x,r.createElement(l.z,{lazy:!1,collapsed:p,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{y(e),j(!e)}},r.createElement("div",{className:o.collapsibleContent},s)))}const u={details:"details_b_Ee"},f="alert alert--info";function p(e){let{...n}=e;return r.createElement(d,(0,t.Z)({},n,{className:(0,i.Z)(f,u.details,n.className)}))}},4637:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>h});s(7294);var t=s(3905),r=s(5893),i=s(4673);const a={},l="Lesson 30: Key Signatures \u2013 The Flat Keys",o={unversionedId:"alfreds-essentials-of-music-theory/book-2/unit-7/key-signatures-the-flat-keys",id:"alfreds-essentials-of-music-theory/book-2/unit-7/key-signatures-the-flat-keys",title:"Lesson 30: Key Signatures \u2013 The Flat Keys",description:"7.E: Build sharp and flat key signatures using the order of sharps and flats.",source:"@site/docs/alfreds-essentials-of-music-theory/book-2/unit-7/30-key-signatures-the-flat-keys.mdx",sourceDirName:"alfreds-essentials-of-music-theory/book-2/unit-7",slug:"/alfreds-essentials-of-music-theory/book-2/unit-7/key-signatures-the-flat-keys",permalink:"/docs/alfreds-essentials-of-music-theory/book-2/unit-7/key-signatures-the-flat-keys",draft:!1,editUrl:"https://github.com/thatrobotdev/theorybear/tree/main/docs/alfreds-essentials-of-music-theory/book-2/unit-7/30-key-signatures-the-flat-keys.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"theory",previous:{title:"Lesson 29: Key Signatures \u2013 The Sharp Keys",permalink:"/docs/alfreds-essentials-of-music-theory/book-2/unit-7/key-signatures-the-sharp-keys"},next:{title:"Unit 8",permalink:"/docs/alfreds-essentials-of-music-theory/book-2/unit-8/"}},c={},h=[{value:"Practice",id:"practice",level:2},{value:"musictheory.net",id:"musictheorynet",level:3},{value:"Staff Identification",id:"staff-identification",level:4},{value:"Key Signature Identification",id:"key-signature-identification",level:5},{value:"Staff construction",id:"staff-construction",level:4},{value:"Key Signature Construction",id:"key-signature-construction",level:5},{value:"Additional Resources",id:"additional-resources",level:2},{value:"Readings",id:"readings",level:3},{value:"Lessons",id:"lessons",level:3},{value:"musictheory.net",id:"musictheorynet-1",level:4},{value:"The Basics",id:"the-basics",level:5},{value:"Scales and Key Signatures",id:"scales-and-key-signatures",level:5},{value:"Reference",id:"reference",level:3}];function d(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",h3:"h3",h4:"h4",h5:"h5",a:"a",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"lesson-30-key-signatures--the-flat-keys",children:"Lesson 30: Key Signatures \u2013 The Flat Keys"}),"\n",(0,r.jsx)(i.Z,{summary:"Learning Objective",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"7.E:"})," Build sharp and flat key signatures using the order of sharps and flats."]})}),"\n","\n",(0,r.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,r.jsx)(n.h3,{id:"musictheorynet",children:"musictheory.net"}),"\n",(0,r.jsx)(n.h4,{id:"staff-identification",children:"Staff Identification"}),"\n",(0,r.jsx)(n.h5,{id:"key-signature-identification",children:(0,r.jsx)(n.a,{href:"https://www.musictheory.net/exercises/keysig",children:"Key Signature Identification"})}),"\n",(0,r.jsx)(i.Z,{summary:"Recommended settings",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Clefs: Treble Clef, Bass Clef"}),"\n",(0,r.jsx)(n.li,{children:"Key Signatures: Natural, All Sharps"}),"\n",(0,r.jsx)(n.li,{children:"Scales: Major"}),"\n"]})}),"\n",(0,r.jsx)(n.h4,{id:"staff-construction",children:"Staff construction"}),"\n",(0,r.jsx)(n.h5,{id:"key-signature-construction",children:(0,r.jsx)(n.a,{href:"https://www.musictheory.net/exercises/keysig-construction",children:"Key Signature Construction"})}),"\n",(0,r.jsx)(i.Z,{summary:"Recommended settings",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Clefs: Treble Clef, Bass Clef"}),"\n",(0,r.jsx)(n.li,{children:"Key Signatures: Natural, All Sharps"}),"\n",(0,r.jsx)(n.li,{children:"Scales: Major"}),"\n",(0,r.jsx)(n.li,{children:"Note Names: Letters"}),"\n"]})}),"\n","\n","\n",(0,r.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,r.jsx)(n.h3,{id:"readings",children:"Readings"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Open Music Theory","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://viva.pressbooks.pub/openmusictheory/chapter/half-and-whole-steps/",children:"Half Steps, Whole Steps, and Accidentals"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://viva.pressbooks.pub/openmusictheory/chapter/half-and-whole-steps/#chapter-1384-section-1",children:"Half Steps and Whole Steps"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://viva.pressbooks.pub/openmusictheory/chapter/half-and-whole-steps/#chapter-1384-section-3",children:"The Black Keys on the Piano Keyboard"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://viva.pressbooks.pub/openmusictheory/chapter/half-and-whole-steps/",children:"Major Scales, Scale Degrees, and Key Signatures"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://viva.pressbooks.pub/openmusictheory/chapter/major-scales/#chapter-82-section-1",children:"Major Scales"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://viva.pressbooks.pub/openmusictheory/chapter/major-scales/#chapter-82-section-2",children:"Scale Degrees, Solf\xe8ge, and Scale-Degree Names"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"lessons",children:"Lessons"}),"\n",(0,r.jsx)(n.h4,{id:"musictheorynet-1",children:"musictheory.net"}),"\n",(0,r.jsx)(n.h5,{id:"the-basics",children:"The Basics"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.musictheory.net/lessons/20",children:"Steps and Accidentals"})}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"scales-and-key-signatures",children:"Scales and Key Signatures"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.musictheory.net/lessons/21",children:"The Major Scale"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.musictheory.net/lessons/23",children:"Scale Degrees"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Wikipedia","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Key_signature",children:"Key signature"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Flat_(music)",children:"Flat (music)"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Encyclopedia Britannica","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.britannica.com/art/key-signature",children:"key signature"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.britannica.com/art/accidental",children:"accidental"})}),"\n"]}),"\n"]}),"\n"]})]})}const u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},5251:(e,n,s)=>{s(7418);var t=s(7294),r=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;r=i("react.element"),n.Fragment=i("react.fragment")}var a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var t,i={},c=null,h=null;for(t in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(h=n.ref),n)l.call(n,t)&&!o.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:r,type:e,key:c,ref:h,props:i,_owner:a.current}}n.jsx=c,n.jsxs=c},5893:(e,n,s)=>{e.exports=s(5251)}}]);