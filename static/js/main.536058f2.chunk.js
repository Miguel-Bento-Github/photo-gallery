(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[0],[,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);n(16);function c(){return r.a.createElement("div",{className:"folding-cube"},r.a.createElement("div",{className:"cube1 cube"}),r.a.createElement("div",{className:"cube2 cube"}),r.a.createElement("div",{className:"cube4 cube"}),r.a.createElement("div",{className:"cube3 cube"}))}},,,function(e,t,n){e.exports=n(18)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),u=n(2),l=n.n(u),i=n(6),s=n(1);n(13);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v=r.a.createElement("path",{d:"M55.8675762,57.6858508 C55.7521994,57.570474 55.5488428,57.5673711 55.4340706,57.6611982 C55.4340706,57.6611982 55.3808392,57.7067714 55.2388087,57.8179618 C52.6922064,59.8116028 49.4848857,61 46,61 C37.7157288,61 31,54.2842712 31,46 C31,37.7157288 37.7157288,31 46,31 C54.2842712,31 61,37.7157288 61,46 C61,49.4666902 59.8239803,52.6587063 57.8491239,55.1988653 C57.7280376,55.3546125 57.6627324,55.4317825 57.6627324,55.4317825 C57.5601236,55.557088 57.5698381,55.7515635 57.6858508,55.8675762 L58.6838476,56.865573 C58.7992243,56.9809498 59.0301294,57.049804 59.1953126,57.0239442 C59.1953126,57.0239442 59.2405401,57.0072112 59.4167681,57.0013773 C60.0840244,56.979288 60.7584405,57.2229066 61.267767,57.732233 L68.267767,64.732233 C69.2440777,65.7085438 69.2440777,67.2914562 68.267767,68.267767 C67.2914562,69.2440777 65.7085438,69.2440777 64.732233,68.267767 L57.732233,61.267767 C57.2154794,60.7510133 56.9722395,60.0643202 57.0025131,59.3875828 C57.0099586,59.2211462 57.0254854,59.1784509 57.0254854,59.1784509 C57.052545,59.0206658 56.9815857,58.7998602 56.865573,58.6838476 L55.8675762,57.6858508 Z M46,57 C52.0751322,57 57,52.0751322 57,46 C57,39.9248678 52.0751322,35 46,35 C39.9248678,35 35,39.9248678 35,46 C35,52.0751322 39.9248678,57 46,57 Z"}),d=function(e){var t=e.svgRef,n=e.title,a=m(e,["svgRef","title"]);return r.a.createElement("svg",f({viewBox:"0 0 100 100",transform:"scale(1)",height:"100%",x:0,y:0,ref:t},a),n?r.a.createElement("title",null,n):null,v)},p=r.a.forwardRef((function(e,t){return r.a.createElement(d,f({svgRef:t},e))})),b=(n.p,n(14),function(e){var t=e.action,n=e.className,a=e.children,c=e.isDisabled,o=e.type,u=e.onClick;return r.a.createElement("button",{type:o||"button",onClick:u,className:"button button--".concat(t).concat(c?" button--disabled":""," ").concat(n),disabled:c},a)});n(15);var h=function(e){var t=e.type,n=e.action,c=e.isFocused,o=e.placeholder,u=e.setUserInput,l=Object(a.useState)(""),i=Object(s.a)(l,2),f=i[0],m=i[1];return Object(a.useEffect)((function(){return u(f)}),[f,u]),r.a.createElement("input",{type:t,onChange:function(e){var t=e.target;return m(t.value)},placeholder:"input your ".concat(o," here..."),className:"input ".concat(n?"input-".concat(n):""),maxLength:"100",value:f,onFocus:c})},E=n(4),y=(n(17),Object(a.lazy)((function(){return n.e(3).then(n.bind(null,20))})));var C=function(e){var t=e.theme,n=e.photoAmount,c=e.photoData,o=e.onAdd,u=e.onRemove;return r.a.createElement("div",{className:"container",id:"container"},r.a.createElement(a.Suspense,{fallback:r.a.createElement(E.a,null)},function(){for(var e=[],a=0;a<n;a++)e.push(r.a.createElement(y,{theme:t,key:a,photoId:c[a]}));return e}()),r.a.createElement(b,{action:"remove",isDisabled:n<5,onClick:u}),r.a.createElement(b,{action:"add",isDisabled:n>30,onClick:o}))};var O=function(){document.title="David's Gallery";var e=Object(a.useState)("netherlands"),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(4),u=Object(s.a)(o,2),f=u[0],m=u[1],v=Object(a.useState)([]),d=Object(s.a)(v,2),E=d[0],y=d[1];Object(a.useEffect)((function(){var e=!1;if(!e){var t=setInterval((function(){E.length<=f+2&&function(){var t;l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.a.awrap(fetch("https://source.unsplash.com/random/?".concat(n)));case 3:if(t=a.sent,!E.includes(t.url)){a.next=6;break}return a.abrupt("return");case 6:e||y((function(e){return[].concat(Object(i.a)(e),[t.url])})),a.next=12;break;case 9:throw a.prev=9,a.t0=a.catch(0),new Error(a.t0);case 12:case"end":return a.stop()}}),null,null,[[0,9]])}()}),50);return E.length<=f+2?function(){e=!0}:(clearInterval(t),void(e=!0))}}),[f,E,E.length,n]);var O=function(e){if(e.length>2)return y([]),c(e)},g=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],c=n[1],o=function(t){t.key===e&&c(!0)},u=function(t){t.key===e&&c(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",o),window.addEventListener("keyup",u),function(){window.removeEventListener("keydown",o),window.removeEventListener("keyup",u)}}),[]),r}("enter")?O:null;return r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header-title"},"Gallery")),r.a.createElement(C,{onAdd:function(){return m(f+2)},onRemove:function(){return m(f-2)},theme:n,photoAmount:f,photoData:E}),r.a.createElement("form",{className:"form",onSubmit:function(e){return e.preventDefault(),O(n)},onKeyPress:g},r.a.createElement(h,{placeholder:"theme",action:"set-theme",type:"text",onFocus:function(){},setUserInput:c}),r.a.createElement(b,{type:"submit",action:"submit",onClick:function(){return O(n)},className:"focus"},r.a.createElement(p,null))))};o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.536058f2.chunk.js.map