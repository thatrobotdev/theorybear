/*! For license information please see 6b7aa5d8.210d0e76.js.LICENSE.txt */
"use strict";(self.webpackChunktheorybear=self.webpackChunktheorybear||[]).push([[463],{3905:(e,n,t)=>{t.d(n,{ah:()=>d});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},A={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),h=d(t),p=s,u=h["".concat(o,".").concat(p)]||h[p]||A[p]||l;return t?r.createElement(u,i(i({ref:n},c),{},{components:t})):r.createElement(u,i({ref:n},c))}));c.displayName="MDXCreateElement"},4673:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(7462),s=t(7294),l=t(6010),i=t(2389),a=t(6043);const o={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function A(e,n){return!!e&&(e===n||A(e.parentElement,n))}function c(e){let{summary:n,children:t,...c}=e;const h=(0,i.Z)(),p=(0,s.useRef)(null),{collapsed:u,setCollapsed:f}=(0,a.u)({initialState:!c.open}),[b,m]=(0,s.useState)(c.open),y=s.isValidElement(n)?n:s.createElement("summary",null,n??"Details");return s.createElement("details",(0,r.Z)({},c,{ref:p,open:b,"data-collapsed":u,className:(0,l.Z)(o.details,h&&o.isBrowser,c.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;d(n)&&A(n,p.current)&&(e.preventDefault(),u?(f(!1),m(!0)):f(!0))}}),y,s.createElement(a.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{f(e),m(!e)}},s.createElement("div",{className:o.collapsibleContent},t)))}const h={details:"details_b_Ee"},p="alert alert--info";function u(e){let{...n}=e;return s.createElement(c,(0,r.Z)({},n,{className:(0,l.Z)(p,h.details,n.className)}))}},3445:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>A,toc:()=>h});t(7294);var r=t(3905),s=t(5893),l=t(4673),i=t(201),a=t(9851);const o={},d="Lesson 26: Tetrachords and Major Scales",A={unversionedId:"alfreds-essentials-of-music-theory/book-2/unit-7/tetrachords-major-scales",id:"alfreds-essentials-of-music-theory/book-2/unit-7/tetrachords-major-scales",title:"Lesson 26: Tetrachords and Major Scales",description:"7.A:* Identify whether the distance between two notes is a whole step or a half step.",source:"@site/docs/alfreds-essentials-of-music-theory/book-2/unit-7/26-tetrachords-major-scales.mdx",sourceDirName:"alfreds-essentials-of-music-theory/book-2/unit-7",slug:"/alfreds-essentials-of-music-theory/book-2/unit-7/tetrachords-major-scales",permalink:"/docs/alfreds-essentials-of-music-theory/book-2/unit-7/tetrachords-major-scales",draft:!1,editUrl:"https://github.com/thatrobotdev/theorybear/tree/main/docs/alfreds-essentials-of-music-theory/book-2/unit-7/26-tetrachords-major-scales.mdx",tags:[],version:"current",sidebarPosition:26,frontMatter:{},sidebar:"theory",previous:{title:"Unit 7",permalink:"/docs/alfreds-essentials-of-music-theory/book-2/unit-7/"},next:{title:"Lesson 27: The Sharp Scales \u2013 G and D Major",permalink:"/docs/alfreds-essentials-of-music-theory/book-2/unit-7/the-sharp-scales"}},c={},h=[{value:"Practice",id:"practice",level:2},{value:"musictheory.net",id:"musictheorynet",level:3},{value:"Keyboard Identification",id:"keyboard-identification",level:4},{value:"Keyboard Note Identification",id:"keyboard-note-identification",level:5},{value:"Recommended settings:",id:"recommended-settings",level:4},{value:"Keyboard Reverse Identification",id:"keyboard-reverse-identification",level:5},{value:"Recommended settings:",id:"recommended-settings-1",level:4},{value:"Additional Resources",id:"additional-resources",level:2},{value:"Readings",id:"readings",level:3},{value:"Lessons",id:"lessons",level:3},{value:"musictheory.net",id:"musictheorynet-1",level:4},{value:"The Basics",id:"the-basics",level:5},{value:"Scales and Key Signatures",id:"scales-and-key-signatures",level:5},{value:"Reference",id:"reference",level:3}];function p(e){const n=Object.assign({h1:"h1",ul:"ul",li:"li",strong:"strong",h2:"h2",h3:"h3",h4:"h4",h5:"h5",a:"a"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"lesson-26-tetrachords-and-major-scales",children:"Lesson 26: Tetrachords and Major Scales"}),"\n",(0,s.jsx)(l.Z,{summary:"Learning Objectives",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"7.A:"})," Identify whether the distance between two notes is a whole step or a half step."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"7.B:"})," Build tetrachords using a pattern of whole and half steps."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"7.C:"})," Build sharp and flat major scales using tetrachords, starting on a keynote."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"7.D:"})," Identify the degrees/steps/tones of a scale."]}),"\n"]})}),"\n","\n",(0,s.jsx)(n.h2,{id:"practice",children:"Practice"}),"\n",(0,s.jsx)(n.h3,{id:"musictheorynet",children:"musictheory.net"}),"\n",(0,s.jsx)(n.h4,{id:"keyboard-identification",children:"Keyboard Identification"}),"\n",(0,s.jsx)(n.h5,{id:"keyboard-note-identification",children:"Keyboard Note Identification"}),"\n",(0,s.jsx)("a",{className:"button button--outline button--info",href:"https://www.musictheory.net/exercises/keyboard",children:"Go to musictheory.net"}),"\n",(0,s.jsx)(n.h4,{id:"recommended-settings",children:"Recommended settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Notes: All"}),"\n",(0,s.jsx)(n.li,{children:"Note Names: Letters"}),"\n"]}),"\n",(0,s.jsx)(n.h5,{id:"keyboard-reverse-identification",children:"Keyboard Reverse Identification"}),"\n",(0,s.jsx)("a",{className:"button button--outline button--info",href:"https://www.musictheory.net/exercises/keyboard-reverse",children:"Go to musictheory.net"}),"\n",(0,s.jsx)(n.h4,{id:"recommended-settings-1",children:"Recommended settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Clefs: Treble Clef, Bass Clef"}),"\n",(0,s.jsxs)(n.li,{children:["Treble Range: ",(0,s.jsx)("img",{src:i.Z,style:{height:"100px"},alt:"A treble clef on a staff with whole notes placed on the C and A ledger lines"})]}),"\n",(0,s.jsxs)(n.li,{children:["Bass Range: ",(0,s.jsx)("img",{src:a.Z,style:{height:"100px"},alt:"A bass clef on a staff with whole notes placed on the E and C ledger lines"})]}),"\n",(0,s.jsx)(n.li,{children:"Positions: Lines and Spaces"}),"\n",(0,s.jsx)(n.li,{children:"Key Signatures: Natural, 1 Sharp, 2 Sharps, 1 Flat, 2 Flats"}),"\n",(0,s.jsx)(n.li,{children:"Require Octave: OFF"}),"\n",(0,s.jsx)(n.li,{children:"Helpers: OFF"}),"\n",(0,s.jsx)(n.li,{children:"Accidentals: ON"}),"\n"]}),"\n","\n","\n",(0,s.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,s.jsx)(n.h3,{id:"readings",children:"Readings"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Open Music Theory","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://viva.pressbooks.pub/openmusictheory/chapter/half-and-whole-steps/",children:"Half Steps, Whole Steps, and Accidentals"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://viva.pressbooks.pub/openmusictheory/chapter/half-and-whole-steps/#chapter-1384-section-1",children:"Half Steps and Whole Steps"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://viva.pressbooks.pub/openmusictheory/chapter/half-and-whole-steps/#chapter-1384-section-3",children:"The Black Keys on the Piano Keyboard"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://viva.pressbooks.pub/openmusictheory/chapter/half-and-whole-steps/",children:"Major Scales, Scale Degrees, and Key Signatures"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://viva.pressbooks.pub/openmusictheory/chapter/major-scales/#chapter-82-section-1",children:"Major Scales"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://viva.pressbooks.pub/openmusictheory/chapter/major-scales/#chapter-82-section-2",children:"Scale Degrees, Solf\xe8ge, and Scale-Degree Names"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"lessons",children:"Lessons"}),"\n",(0,s.jsx)(n.h4,{id:"musictheorynet-1",children:"musictheory.net"}),"\n",(0,s.jsx)(n.h5,{id:"the-basics",children:"The Basics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.musictheory.net/lessons/20",children:"Steps and Accidentals"})}),"\n"]}),"\n",(0,s.jsx)(n.h5,{id:"scales-and-key-signatures",children:"Scales and Key Signatures"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.musictheory.net/lessons/21",children:"The Major Scale"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.musictheory.net/lessons/23",children:"Scale Degrees"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Wikipedia","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Tetrachord",children:"Tetrachords"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Major_scale",children:"Major scale"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Major_second",children:"Major second"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Semitone",children:"Semitone"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Tonic_(music)",children:"Tonic (music)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Degree_(music)",children:"Degree (music)"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Encyclopedia Britannica","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.britannica.com/art/tetrachord",children:"tetrachord"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.britannica.com/art/major-scale",children:"major scale"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.britannica.com/art/semitone",children:"semitone"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.britannica.com/art/tonic-music",children:"tonic"})}),"\n"]}),"\n"]}),"\n"]})]})}const u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(p,e)})):p(e)}},5251:(e,n,t)=>{t(7418);var r=t(7294),s=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var l=Symbol.for;s=l("react.element"),n.Fragment=l("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,l={},d=null,A=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(A=n.ref),n)a.call(n,r)&&!o.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:s,type:e,key:d,ref:A,props:l,_owner:i.current}}n.jsx=d,n.jsxs=d},5893:(e,n,t)=>{e.exports=t(5251)},9851:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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"},201:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAboAAAEQCAAAAADjG+7RAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnCgIWADlgggZ6AAAMUHpUWHRSYXcgcHJvZmlsZSB0eXBlIGljYwAAWIWtmGmOIzuuhf9rFb0EDdTA5VADgbf/DfQn25mVee1q4ALPWaoYFCFR5OHhUYT/Wyv8h18pIiHe306xpR57bCvm9LjVdjtdeq5ZuuQc66haLcfYT6fbaDyYaLlyPkNLrfTSo6Qaa5QVX79/Xv+vnzNreI78/O2S97dl//IX/t3jKTVptZdWnpf1db/l0OTebvvZMeV5PMaCY8/9eV3s9UIuveO5+HV/yWsCCbjz4cZnxx5fHa3/vH/W9/2fz8u3pY+BhMg8TZX07BpxEYTUc+uP65W/LIq9YX9/WfRlUCwxtMOqtZ1nR//qOARiN2+vF+bXQOM10PNyfa2gjND+ZlH/u6Xtg6Xh0dHfO35F589vCPZf3DWG7Pqn41+G/++///+BcO3q9Z9Lye11stroWUZ9rT09j2mPNpvLrDm8dZyW5Yi/3df2jZpf9wdRGbW+D0QKS3kB7ud9aUlE5oeJFxOv94FaU2mi7xZ1Ea3ydp/YSq3lbSDQ7ODnfWkNHxVJb/fB/w9n/xiotlnrhxeYW/SLn348b20A3f4+EEurTc7b/cIE5d1HdyAsPR+W1mvNtb77op1Luh+X3D6Ff/cfWPq1NGVp75bKXZqMD+EnzETho0Xpk6W91PEp/NgJXj4urX6Y4LKl5A9Lu3n9p3r8GmhJf08RmKARhHdkP2qZfHiBmSlQ74A0XGH1HUewGOY3AHlL0j1ewN3ua+Xtk8dg/fLV6N/5F6Q0ZzYF0QrBjRthedU2ohoFGm4lnwzplVxue/jpu/J+DXT/85IuXXwVSorXsn8+eH8j70fZKruqP35zfT33i9hkPXEy5TxJ3c76NGDu9kT4no/n1xg1QBsVNLdfT/5hnguDSyl+axdNb/W8hfJWFBoWFmYpt/aX+XzzYkd46Wb+jU7lpcpLlzXbuBz6dPytRR3HD1wxMGDwvt6lKQMoAygDGC8ZLxkvTV6avDR5aaXLts8Cd920611XjHdlh/Mzw8NqhAlt4u7712kblxea0hx0VBr9LCOVQTuslHtAIhHaVDXEGzAqG43OTidmp8EgmJyUh7A2GRMYg06OkyMWpsURhZY2x5MY6HDivOAG7grtqjah7ZipIjk7vh0xQ3YZPgL3NPqYPPd0Q4jfkX55nJiVB4lxNgaZvMyMGX9kfJFvkA7nXuOFYokzXtwVNCLCLBYmoVwE/vN4q0ZpdBKV0g+agGvlmsGLcT25RmGUDbTPU+YUV4LdSIMS5QJSGFWAAOQEAkh8wi2YLAwoY5EjBirow1IQG4XB5KQHSsQPSNuxJvioEo2KJIPaY60jVtZewUoFIxWrqtEmiQ+7VJZaCXclyo8/ltgyaVkg/4YlDfC1ZrH1CfZWbLpjM38SwNXOp0AENd5c7kCiM3kvGwpwlBeA6Ti7M3NXOnF0n3RsZBmzdh/ooQmAPQ7wM6TFgS+prXEMrrF2GNfk29gw5ECAD8CogFcBnrJMZaZb6xUFpINz4xyH6+KcSZTnDbFuLMuwzCoWGUsy8saAgBEhwxe2VzS/geYP2T+LxllTnI0jGTR5ds6bPRxx/HSQvWDHlQ1hWeKqCx1Z4YUTl/W4bpqB3MWg+/4B0C031Sxu2HHz3Abxe4GjvbnAHwc8HNB3iB4CNZ7u8egkH1s8+O2cQ1pqdJbvoNxhBgfVjq98MpCzbj83vfFSJgRS7haHUGCzklyT+7vfNxOJ/PiXxKHRndJYKRneWhpSOoPF9URepSw15SaJ3EnZSsqLdgq20jKNSRCoEADNwPSqEEElM1tIQuahfND0lmRMasuGHQ6Twg4pJ4oWBbYlagZsMVOdO7Gqm21XJ7M50dTaCqkNT21mLOWmW+pwQ5eUqHupD03dTgJbqXtPAx4ZAsPQN4alYZ7G5twtPCmHJWmbSRUqm2B370SGJcuWDNdY79DRSUAjURAYTtIsM02WORlwzhzS3JYuAwGBtCrHPtPCP2uttHDwhrU2Wbz75TBNhDptBjso/YN1B5cclZAOiDpHkxMOLyd541wl+fTkx/KDS/E9iZeBOaCDNOA6QgX/DdbM7JYCJpzMWznnnhFYOQ9OzTPFkKJjFNaR4apcVHJZORe/ZOlZZLPdXVlsZtkWbnblysO10ajcddGcCs7AlPd8lXqbtDOIL0009263SOa+F9Vt51E8sHECNoYhWzJkkpVBcXxW3Rk2IXkwsNSMVsymEzZ2SCTnWRqsrHnyHIgIeUFtq2heDaHAgGt3OHPljV92b3kz8z7gEtQgzDOGQeE9kzKZBULlll0ZyFmKO8xVkGNt4Rayd08SASgL4cNFaXL0XK5tuZWSdcL7gi7ZpcDNpXsoZY5SCJlgrFzxpafIHgXwlwpBV0RZXblU3+XuL1Cxpdkp7Wi5Gr7fmqErlI6MHUnKoNqMscpYA/apjyBp96KThTt0xzDWpbBSCosXFlxmA5ZmZZ4RiGgvSKqyWNI6pWwiTLYUcFpgmHLy3eHSqEgwSfGcitPvIMNPploWclaCQJGXfHAtKGyktC0BodhDpcL2PCsexRTSHfOZ7Yq/gvJFzg4TEvxyRqCUoT0h5boPm3pUfEMe2hTko+Ad6X2CO0ocBWvIFPJYBvRIsiALcakh5B0NaaWLMROGUNmXPHYcDDwxm/wTgiprmgAp4SnZSiw22g4RcBDxQOHWyiDOxgBfiu9b6CHsnirMDtXDFdRC6KCSmRUQ1NxJa0gdWquEkbpqFYeh8HPAXifKbK0yG0o2NIS6wsK1UVqbsVNytCFbgU4mUcXrAIKj7zrWrArJKLspnSNQD3o1XjOjea0Tr02lsWNYhQaLrd3qxtrdR91LK8xU2YLWM3eF8angKVQqAFILIyrQYjSqAVqeLoNHMSzj0qyrIZNwLWDS3gqlRW7Q7671KODZgbJPkp/7yWOz58uNLG/U9dYVEPMQmd0oz22cxUarNFVr6hcobB/UkQi9TfHQpnHijqEdne5oV/ZsiIw90fzUlMPO/izQgMcdoeBQOmqMOo9sOYQGvCetoaMRCDDpbBiCgix4gvwDofL85LQIE2SDcu84566rN4i9+ehsgIFZob6kwBynDx7WbF0HsuFAW9I6kUXkSIfg+ySPINa+Bu0WFXYrpFC/8vXAgGfl0GEHFIx0P6gs6SiJcSXFoEaNtDYkwh5EIWAXKKEPspTyuQdQH3LIdd6pNgPq6Ho3383seKxJfTDiYA8LGZyhkLYqtvoZpOWwZWMyOC4c09dYDcJYFsaGujbvbPdxHsE5wwtlU9HNaDfkGnKD0oL6TDaU8gFpm1LKb7IoXKJXjCpz6M2TWl3r0kceEl9FQineVByhbH51TAwDVIg7VV+AYKix35pQ/TQPShnUxTPLu24gRhVSCp8eO8Bls9DJ5gyN15C3m7IqndLaYHeaNnYvtN6CwVpwSLtpTgYOq8ZkaBU8YIAGlB3DKhsUkrHEIFieUMTMMqPoU1Fs9hpsHqWkL1tIwS1oEYr5oXYcyv4FMBbdXR4ytqK6bCJDZtrUK6HiL4i+4Hs7gSWSp0oqpzLrMPQZhnedEBuoGxNr5rj5vdnOUFaVl2HpabMy0uHkwiyFuXRexTM30pYVwONwGrtVZB2Zg6hESsaDomgd5QDFV6foUREgkrLZCyD7oduwqrDDvXAQttWLHYdcQQJAyl5jrkX9YC5FoIyFMxZkseZsi5EW61gUrAWdBQpHW7ACwrUvZwHsZnacyLayWAwytPhmt7Sh+025wY2KHRCRnF033qp1tz3C7gyIH+5XEdQu2GwIYuJOuLb5xPeoX3YhaxjyCxGsjQq+NopnO+rAjZ0Nm2NcyX1hv7PQN5Uyxh4c+jqQ16GMHPFFFsLzcZ/7URe6OADgsK04LB2NBfR3DMcgVTuwJuwy8TfUehC+Z+tCJoxzphyn8vlCR1f2E6d6Qi4kd88DjyR1KCm4UECoO7A15LuPt7a93aChNAcPDVCH1HFd3WEWN5T87N0JJ4kycKD6nhb8yPSzFxy570eKHh/fsdOPzwlfX7ig4fb40OBQ1/NLRH18ZqS2vz5psLxfH7z//NKPbyY/78V/3g9/6/i6/vXh/I+RD8vsdfd+bXpYdIVBfOTTeq3h9eF8vx58vV6fn47Qp49PP7+Ob5+hf32i/775NNZ+fH25ev/uYn8u7ePv17f913pexy+n/7oOHx74Nr/8MeCv1+G/X5lHchaftw8AAAFXelRYdFJhdyBwcm9maWxlIHR5cGUgeG1wAAAokYVTSXKEMAy8+xV5gpFkyTzHwfYtVTnm+WkZMjBAEVQMoK1bbU34+foOH36J5MCLZS6WtVrUqslEJ4r+rYs2Y49xJdJJRbuSJi6r/5XdiSiGvQ2cn16SstQUKQprNxRSZKXGcdzELRaKbqBAaK5cEokE0RP+GnQO2QQWuQCz27ioGZKoDQijzhPPbtQDRyY4CL91bYIn24y2oG2ZqgN4eOdyZiSiKRgrwzGP0Wao0MBwS4AuBGwo4QwhxFujo1kO+1CQLqPVzViDU9vlxjv004rIVuOjTUPEfqX+N8ALoKQI5lmTLmkW549zcxCfJGjjBglchmVHeC7ymjNoeEDNdw1YYDeg4ano31ETcpORb5yLvZYLt7SeYNraZZyYnLAPpcfKWMI7GvXjblxX47jXe+622R4c7st/biD9AtFj1cm1hhMEAAASO0lEQVR42u2df3hcVZnH3zsztUGGOmB4CDTggAEqRjay9dlQgkxrcFPMaliiBghscVMeClkNNfUJWJquxRapEndbrBrWVOK2XQOEJmqQIJGmNMJUgmYh0CCDhGUo2TbS7OMUB3P2j7k/zrn33LQp3Dtnpt/vX+0955m5+X7mnnt+vi8xKEdFsADoIKCDgA7oIKCDgA4COqCDgA4COqCDgA4COgjogA4COgjogA4CujxVeqSrtTYWK4lGo9GKWE1zR3wK6NTXRM9tsbnk0MWrdh4AOqXBtUZ1VrG27pH49nVlFr3i5jGgU1VjTQU6pspB49pQlQUvVDMIdEqqzQBHVWn+cohrOKvGgU69ttJ6vErFXslAmGMX6QI6xTRUZOHptZX18c8d1U8BnUraeb7FJpa2l96t8ez+6TX10aW768pKGsaOA3JTXE+SmpzldcJIoTatOrreTEc53Jv/6Op5MpK32XhYYNesNrp0g9kn7s93ciMCmAFJjQ3iCH1YZXTpWutGw4k8R3etwEXW/x87V6hyk8romvg7rcpvco8JzeEH3pbV+bKArnBAXXR3CneqdeQ1ug6xNZTWGSU/33bvAt2o+Fqm4ql8RneL+MdK55n/coFQ5zpl0cXsM+et+YyuWvxb/yCtdLVQZ5Gq6LY4Fj0i+fTY0XuvvYqg++/znff2b0CXC+i+Ibm3JW/lb4NZJf6pX5VW6hfqfFjNBvPlMtnv6sf5i265+JfKh0K/FepUqImuW9okVOQvujbxLw1NyiolhDoxJdElF0nRffB3eYtuLCT+qZtkleI5MK7rd3kTt+XvYyd2/Okzsjr38TVKnlMSXYMwFm/taCnP/CjL8hfdDhGd1nek+aVbmYroUoX80lWKMcb6I0RElMcLdzUiu2WSKo18hUEl0XGdlFCHMS9WSES0Ln/RvSCyO22Ho8a+KDc/8T2mJDprseeD7ebFbxMR1ebxXNjQZeI8V9xeYbNVGLiLKYkuZU08N1pX02VEVJDKY3aj4mC20r6HgZvnrGNqouuytrTxpNrdlo/zRqnmmXr/G611501MUXQ3mS+6Yf7yRIiI1rK8Vn+xsBCelv6gYwmmKroFkuaSMcYqiWhxfqNjqS0l/PTRiDlJ0WSM2Us7/LmTY0G3y3xRvywW3EFE5xzIc3Ys3VVpzayE6ronGEv2mScRqvv8uo9jQbfdbW11gIi0IZb/mmivKeB2VEWMAUFd+7h/N3Es6IxXXShpK5giIq2dHR8a6WqpLo9m5iai0Yr61s64vzdwDOgOf1RHt9Je8s7pRNo6BqmKbsJ9G2kFEV0JU5VFN6STW+AsqiOij8BUZdEZI88fOou+SEQfSsNVVdG1ZMgVTDiLlhGRNgpXVUVX4758v4yItAG4qiq689x37lUTkfYEXFUU3R/1qYQnJWWLiEj7GVxVFJ2+6yksW91ZmP/HRnIZ3RMZdDdIisZPJCLt+3BVUXQ9GXT3Sor6iYi0jXBVUXQDGXSyWebMitVauKoouq2BQCAQCLwjKVoeCAQCAaBTFd36YDAYDMq2qD9XHAwGg6FtcDVb6IIBSA0F58wWHaSK5ry3DeZPNE3TtPXOgt3v1zRN0wKYw1T1XTfkdi5EP6GsJeCq0rMpkkBL+v5SbRKuKopunIiInAfpvqUv482HqaqiY0XSQEsp46jEmTBVWXSLiMjZ9Vll7FhZAVOVRbeMiArsFx8/wzgyuBmmKotuPRGdaL/4JfO0569hqrLoBiThzeLmVm50MH3S9DGgm3Sim7KOUGAvn8LoDp9FFBSerUPXHymMD6QEOlZJRC/xF/jIuT+CqQqja7ZtWk9EfIx4DL0bdJ1EtJ0bjJfzcV7gqcrofiXsWn9VCONzDzz1SX89FnRvFBLdbvzn/4TIuqegvVQaHbuM6Brj33eIOTVgqdroWqx3WpcYsA7nIhVH10dEaRk5GoelaqObChHFZeQq4aji6Fh5ZoeDnVx+hyrKD3S3Et3I3rnTlqNCGmcQUgvdAFERFxILD13uoEuHiWod5GLwU310toxgGZ34c/iZA+jaJejw0OUCusGwk1woDjvVR9clIed9blLo3aPbOE9yKuWqA3BTeXQPzJUdSnkMZmYfHc7X5cT5ur/ifF2unq+bdYP5/VM1icp3owFT/V23tViWhKn4v+Ck6uhGi6T5s1bDSNXRJUuk5KoRAVN1dHtiUnI3Y0SnOrrnPisl98+vw0bF0e1fJiVXn4CLqqPbICVXmoSJqqOTk/vy/8BD1dENyRYLaBn6lsqjS8oHdCk4qDq631XKc1nvhYOqo5N2LiuI2uGg4ug2ScCF2kaImuCg2ujaT5AMCrax8ZPoH+Gg0ugmo05y4X7G2EIKw0GV0b3xBSe5Sx9hjLHrKfACLFQY3RbJMzdkvAK7YKG66O6POMhdom8hephoAyxUFt3UAuczN2iUEVXDQlXR/ek6B7myHrP0o/R3sFBVdOsc5D7ygFVaS/Neg4dZ0hHipow5J507uOKNRH3wUEl06fKZdxD1ESH3kprobneQu00of4boFniYLc2Ervc0O7mGg0KF1Nn0KVioILoDV9rJfe5FW5WldMZb8FA9dF2OAd2IvcpqPX4KpBS6w2fZD5484qjzcCCA9J7qoftX+7GTlZLBQzB4xXdXfvbCD88PBk+78NM3b96LzSrZRIfzdchfB2Ulf13cfoTOtg2ld7HmrhOaJtCeZetdd7ja1rtsEYp/diXNrIt+DGuzhG6bfUTHB7p8ZfXpdCRF1vwvzM0KuhobiUGubKqKjkaXo9HMBroHZ5h0fmgRHZ3KkeXaS7lMPzfYplG44zyDRXS0mjMAg/1Gt/cUkcG9VtF/nEJHLwR28B2d7UBWzSGra3kBzUa1r8BiryTd4JBeIsa5fNB6HBfT7NT0Djz2E13CNc5l3SzJkbYJHvuJTmwvQ8NmQZ+TTSFR8cBIIpEY626JSY5PzhmCyT6iE8dtDVZDWiZiiTZ0jLII0ZRZYXi1Y8PtYpjsH7oXP8Bbf+YzZoG4s++q7WnGGLuciE+sO7rWtuf2hJ1w2Td0A2IoIvN6ih/RFXfoK3PNmWwVll5vDOGxyxK6VsF5a6Mlf0AyZg7Su4jqbR/QI7zzNAzMfUMnnD4uta5z58kbrcXwMaFORr+P4rHLCroqeVazCasdbOWr8/0Us9Esx2OXDXQLeXRj5uVOK7aUUL1SXFfI6BDfGb0BPvuE7lTO9Wusy/9gXFtxSKj+FSLJrrDHLuTO48Fnn9DxLyqr85gy+h4R2zqcpJ/CGGO/4FrMURjtDzp+CdzaNLvH4NBhq75bnnFweo2F7l4Y7Q+686T9y536pS/Zqx88g04/KPno/YuR185vdFys2Qrrard+yTknKe2nMMYeMj/mJMQS831wwEUj6shcWeis75hPMZrMMgwPfEZ3g4WO212y0nHF0A/cAk7dR27vR8gbdG0Wuu3W1cZM91LS9MnmUzKPXanxOWvhtC/otlronrauXuOa6ezgGTT/T1J0LcbnfA1O+4JuQDaXwm4mIqKfyj6kkmiP9NN7MJ/iL7rDVno6blfQnYFAIBB4Q/YhqwKBzfIW0ziidxmc9gUdu8I8acJFmd0aDAaDH5J+yAPB4I1ydDfrn1MCp31Bh/N1yF8H+Z+/zsxRxwe0+bimaS4zWpdrmjwawNP65wTQvvnzrmM3yVbmmt0nI5uJ5PstXzXG5HDaJ3SDZhQ+7uIwyZcIGGNd/JY/oZ9ibCuD0z6hY0ZuyBCfsWcBUZH8U8ZEyJZe1j/nY3DaL3TNxmPHv+w2EJHLommEQtLFgV36x3weTvuFLhlxLtixyYhtQ5EwnyLtp2zDHKbf6Ky9mHHxYiQ1q37K3XovBdG9/UM3aex0brRdbJtNP2W6Sd+8PgWnfUPH1uvoFvJ7FzpPpkv3u3RJr5C1uwuc/CGv0aWMZMjttnZ0tVs/RRId7Bm9veyE0T6iY9/V0f3tb7mLb9bRvB/Kan9K1k+ZziwU0d8ghIqv6MzDdLVCE1hE4WF5P8WZEG1af3KvhM++omODxhmDbuFqIUWT0n5Ko9vQQOuGz/6iY98ydvQ9z199JEaX9MjG3o5EI0+er6ech81+ozMD34j9/mRpJgWavZ9SkJaPDOZg27onmjFYvpnmQBzMTVVQqF0yn2J7Bz4TksXXh3xBx568WDqRtf+b59C1T4hV/4XofuHCg3pz+Zn9cDkL6Fi8QPrcsdEKinTM2E95XR+Nz+mFyVlBZ2xXd06AbYpQ2QD3/zFxT/vBCr13iRzK2ULHthvH6lbbeiGTrYUUG3DppzyvP3NaGyzOGjoWNyaiF47ZSlJtxVS6JSnppzxqrBndAYe905FztSaNs+XhLY6y/oawcVTEmk851BwCOSXQsVS9GV3RGRM4NTBo66f0GAeaT0Zuu2yj4yJMFba5rrxl+inpbjPsxicScDf76Fi/GRog0jrpUidCBfHVZr1QE06yKoGOvbLmTAPK2c3yYz18/NN5jU/BWkXQMTZixc8PxTY40qElO0stcudiHK4SOsaG+eQHxQ1dI8a4INHXwkc4qgI41dAx9uzyeeJRlLMuWrLkHOHKOategqkKomMsteOKue4HU+aueRaOZhMdztchfx2Ulfx1x6BHNO0HaMaUfdfNpMRcWglDcxIdu9C5tQjKDXS1dN40HM1JdF8negGO5iS6+4l64GhOontKPAUL5Q66ydPoRjiak+jYJ/mEaVAuoVtOp78FS3MS3bdJexqW5iS6XtJ+AktzEt2Lmlt0DkhxdGwBXQ1LcxPd5+giv248PdLVWhuLlUSj0WhFrKa5Iz4FdO9CX6PwuA83PdFzW2yuM6Xvxat2HgC6Y9R9pP3Ke3Ctxm7PWFv3SHz7Oi7hWnHzGNDNYN3IYCItLxrz/mzPWJNx5q/STEezh0uIEqoZBDqZUp31Ef3nPSwrD3sdF/8eAxwt5X8+9/CpfZeOA50DXBufJLkq4axRTp/w8m7ftB6vj4m9ksf51L4ndwGdqGFbyvGw88hqI53g4c3usX45mn2f7i+ElNrXTQEdpy0Fjj6d48X276SNeHavD3OZ9RY73rZ3a/ydLXsN6Ey1k0T2526Xh7EvhdS9tzqKp+uEO/t8Guh09YZk6ApsnZWD3h1lna7nE2ZLfiCvCpnsaRXQZTRZTFLZwnVPRz0L5vZ7OlKu8/XCnWnDQMcYY2w5ueg/RXRL6ZMePXTXClxk/f995wp3tgLoGGNsIuSGrkI0uIU0bzp3/UJzGHlbRvcrwp2dOgB0LBMoX675rwgV15L2R09u9Ediayit8zwdT2+7o0RX6YqOxA7DNo9y6k7fIqKTzjO/fYFQ6XqgY+wvp7qj2yrUfIg0T2JuTFeL6P4grXS1UGkR0DGWdidnWxd//D0a2E3Tey5t7/GIbvcMjojpW79D2rNApxC638zgyC7B8a/S+970pMGsEr+1WVrrUaFOCRpMxsZnQLfPNhsV9WZYZxtYLpXW2ivUuRToGGNRV3Jilp/pcq8Mu0f82jmTskovC3UWAx1j7Auu6MRsIz/1LHjpPnFSQJOmf3oa4zqHNruRC4mjuAaav8+jiTCx4y8/QCusbpz7HNAxxqYKXNCVC9VShd69YLaLXxyQDR/X8TXy/WD70U4/18rJFYza5ss0z6JMTdeIXy3ZBDPdyDepg0DHGMsk2ZVIDEwbD3nZNRgV2RXtcNR4ketNnfw9BnQZ3SCbehbt2f1xOtvLn/qey4Rvv8SRu2uTVRi8iwGdrjHnso8tGHS6xus1sufLhO+/3J6KhpvnPA7OPhz93pS7bOCKbxffc3uvIlru8cnIPzfP1Pu/2yw4aRMDOk78tp1IRZttnXqigqgo6fn9PipstFiRFsaU5lg8wYBOGCDomQSLehNORIkFROG4Dzec2lLCz3WZWwdfbzJa9NIOxoBO1K6/16M/32sveamlkGjJL/255XRXpfXeDdV1TzCW7DNPIlQfNyH6Z7VxPWnEd26ZFK4PlRPRAh/z1E2013BzBGEjmUmkrn2cMaCTtpkxw6Q2a9Z5tI6IKJb0+c5Hulqqy6OFREQUjVbUt3bG2XGlWZ70SW8yfuFFdR2jCZYa2riQiKi4g0Fqo2PsqRuDzuOkmyfhpProGNu1ZhHP7YIVO5LwMTfQMZbub64tLyKKllc3dE7BxBxCBwEdBHRABwEdBHQQ0AEdBHQQ0AEdBHQQ0EFAB3QQ0EFAB3QQ0EFABwEd0EEK6v8BL/f0iqVO8LgAAACKZVhJZk1NACoAAAAIAAQBGgAFAAAAAQAAAD4BGwAFAAAAAQAAAEYBKAADAAAAAQACAACHaQAEAAAAAQAAAE4AAAAAAAAAkAAAAAEAAACQAAAAAQADkoYABwAAABIAAAB4oAIABAAAAAEAAAG6oAMABAAAAAEAAAEQAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdIQOg94AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTAtMDJUMjI6MDA6NTYrMDA6MDB9IZ8vAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEwLTAyVDIyOjAwOjU2KzAwOjAwDHwnkwAAABJ0RVh0ZXhpZjpFeGlmT2Zmc2V0ADc4ydR7JwAAABh0RVh0ZXhpZjpQaXhlbFhEaW1lbnNpb24ANDQyypsmrgAAABh0RVh0ZXhpZjpQaXhlbFlEaW1lbnNpb24AMjcyeDToqQAAACN0RVh0ZXhpZjpVc2VyQ29tbWVudABBU0NJSS4uLlNjcmVlbnNob3QryJpJAAAAKHRFWHRpY2M6Y29weXJpZ2h0AENvcHlyaWdodCBBcHBsZSBJbmMuLCAyMDIzk7OPCgAAABd0RVh0aWNjOmRlc2NyaXB0aW9uAERpc3BsYXkXG5W4AAAAF3RFWHR4bXA6UGl4ZWxYRGltZW5zaW9uADQ0MtCUayMAAAAXdEVYdHhtcDpQaXhlbFlEaW1lbnNpb24AMjcyYjulJAAAABp0RVh0eG1wOlVzZXJDb21tZW50AFNjcmVlbnNob3TT4LJ8AAAAAElFTkSuQmCC"}}]);