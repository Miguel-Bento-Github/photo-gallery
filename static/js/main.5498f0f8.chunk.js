(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[0],[,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);n(13);function c(){return r.a.createElement("div",{className:"folding-cube"},r.a.createElement("div",{className:"cube1 cube"}),r.a.createElement("div",{className:"cube2 cube"}),r.a.createElement("div",{className:"cube4 cube"}),r.a.createElement("div",{className:"cube3 cube"}))}},,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),u=n(1);n(10);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createElement("path",{d:"M55.8675762,57.6858508 C55.7521994,57.570474 55.5488428,57.5673711 55.4340706,57.6611982 C55.4340706,57.6611982 55.3808392,57.7067714 55.2388087,57.8179618 C52.6922064,59.8116028 49.4848857,61 46,61 C37.7157288,61 31,54.2842712 31,46 C31,37.7157288 37.7157288,31 46,31 C54.2842712,31 61,37.7157288 61,46 C61,49.4666902 59.8239803,52.6587063 57.8491239,55.1988653 C57.7280376,55.3546125 57.6627324,55.4317825 57.6627324,55.4317825 C57.5601236,55.557088 57.5698381,55.7515635 57.6858508,55.8675762 L58.6838476,56.865573 C58.7992243,56.9809498 59.0301294,57.049804 59.1953126,57.0239442 C59.1953126,57.0239442 59.2405401,57.0072112 59.4167681,57.0013773 C60.0840244,56.979288 60.7584405,57.2229066 61.267767,57.732233 L68.267767,64.732233 C69.2440777,65.7085438 69.2440777,67.2914562 68.267767,68.267767 C67.2914562,69.2440777 65.7085438,69.2440777 64.732233,68.267767 L57.732233,61.267767 C57.2154794,60.7510133 56.9722395,60.0643202 57.0025131,59.3875828 C57.0099586,59.2211462 57.0254854,59.1784509 57.0254854,59.1784509 C57.052545,59.0206658 56.9815857,58.7998602 56.865573,58.6838476 L55.8675762,57.6858508 Z M46,57 C52.0751322,57 57,52.0751322 57,46 C57,39.9248678 52.0751322,35 46,35 C39.9248678,35 35,39.9248678 35,46 C35,52.0751322 39.9248678,57 46,57 Z"}),m=function(e){var t=e.svgRef,n=e.title,a=l(e,["svgRef","title"]);return r.a.createElement("svg",i({viewBox:"0 0 100 100",transform:"scale(1)",height:"100%",x:0,y:0,ref:t},a),n?r.a.createElement("title",null,n):null,s)},f=r.a.forwardRef((function(e,t){return r.a.createElement(m,i({svgRef:t},e))})),d=(n.p,n(11),function(e){var t=e.action,n=e.className,a=e.children,c=e.isDisabled,o=e.type,u=e.onClick;return r.a.createElement("button",{type:o||"button",onClick:u,className:"button button--".concat(t).concat(c?" button--disabled":""," ").concat(n),disabled:c},a)});n(12);var v=function(e){var t=e.type,n=e.action,c=e.isFocused,o=e.placeholder,i=e.setUserInput,l=Object(a.useState)(""),s=Object(u.a)(l,2),m=s[0],f=s[1];return Object(a.useEffect)((function(){return i(m)}),[m,i]),r.a.createElement("input",{type:t,onChange:function(e){var t=e.target;return f(t.value)},placeholder:"input your ".concat(o," here..."),className:"input ".concat(n?"input-".concat(n):""),maxLength:"100",value:m,onFocus:c})},b=n(3),p=(n(14),Object(a.lazy)((function(){return n.e(3).then(n.bind(null,17))})));var h=function(e){var t=e.theme,n=e.photoAmount,c=e.photoData,o=e.onAdd,u=e.onRemove;return r.a.createElement("div",{className:"container",id:"container"},r.a.createElement(a.Suspense,{fallback:r.a.createElement(b.a,null)},function(){for(var e=[],a=0;a<n;a++)e.push(r.a.createElement(p,{theme:t,key:a,photoId:c[a]}));return e}()),r.a.createElement(d,{action:"remove",isDisabled:n<5,onClick:u}),r.a.createElement(d,{action:"add",isDisabled:n>30,onClick:o}))};var E=function(){document.title="David's Gallery";var e=Object(a.useState)("netherlands"),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(4),i=Object(u.a)(o,2),l=i[0],s=i[1],m=Object(a.useState)([]),b=Object(u.a)(m,2),p=b[0],E=b[1],y=function(e){if(e.length>2)return E([]),c(e)},C=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),r=n[0],c=n[1],o=function(t){t.key===e&&c(!0)},i=function(t){t.key===e&&c(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",o),window.addEventListener("keyup",i),function(){window.removeEventListener("keydown",o),window.removeEventListener("keyup",i)}}),[]),r}("enter")?y:null;return r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header-title"},"Gallery")),r.a.createElement(h,{onAdd:function(){return s(l+2)},onRemove:function(){return s(l-2)},theme:n,photoAmount:l,photoData:p}),r.a.createElement("form",{className:"form",onSubmit:function(e){return e.preventDefault(),y(n)},onKeyPress:C},r.a.createElement(v,{placeholder:"theme",action:"set-theme",type:"text",onFocus:function(){},setUserInput:c}),r.a.createElement(d,{type:"submit",action:"submit",onClick:function(){return y(n)},className:"focus"},r.a.createElement(f,null))))};o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.5498f0f8.chunk.js.map