!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports["time-picker-input-react-component"]=t(require("react"),require("react-dom")):e["time-picker-input-react-component"]=t(e.react,e["react-dom"])}(self,(function(e,t){return function(){"use strict";var n={424:function(e,t,n){var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"",""]),t.Z=i},974:function(e,t,n){var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,".time-input {\n    padding: 0px 2px 0px 2px;\n    display: inline-flex;\n    align-items: center;\n    border: 1px solid rgb(111, 111, 111);\n    border-radius: 4px;\n    color: black;\n}\n\n.time-input input {\n    color: inherit;\n    border: none;\n    width: 30px;\n    height: 30px;\n    padding: 3px 0px 3px 0px;\n    text-align: center;\n    font-size: 16px;\n    outline: none;\n}\n\n.time-input input {\n    cursor: text;\n}\n\n.time-input span {\n    font-size: 16px;\n    font-weight: bold;\n    color: black;\n}\n\n.clock {\n    margin: 0px 5px 0px 5px;\n}",""]),t.Z=i},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:function(e){e.exports=function(e){return e[1]}},745:function(e,t,n){var r=n(111);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},379:function(e){var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var u=e[c],l=r.base?u[0]+r.base:u[0],s=a[l]||0,f="".concat(l," ").concat(s);a[l]=s+1;var p=n(f),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var m=o(d,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var u=r(e,o),l=0;l<a.length;l++){var s=n(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=u}}},569:function(e){var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},156:function(t){t.exports=e},111:function(e){e.exports=t}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,o),a.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var a={};return function(){o.r(a),o.d(a,{default:function(){return I}});var e=o(156),t=o.n(e),n=o(745),r=o(379),i=o.n(r),c=o(795),u=o.n(c),l=o(569),s=o.n(l),f=o(565),p=o.n(f),d=o(216),m=o.n(d),v=o(589),y=o.n(v),h=o(424),g={};g.styleTagTransform=y(),g.setAttributes=p(),g.insert=s().bind(null,"head"),g.domAPI=u(),g.insertStyleElement=m(),i()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x=t().createContext&&t().createContext(b),N=function(){return N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},N.apply(this,arguments)},S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function w(e){return e&&e.map((function(e,n){return t().createElement(e.tag,N({key:n},e.attr),w(e.child))}))}function E(e){return function(n){return t().createElement(k,N({attr:N({},e.attr)},n),w(e.child))}}function k(e){var n=function(n){var r,o=e.attr,a=e.size,i=e.title,c=S(e,["attr","size","title"]),u=a||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t().createElement("svg",N({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,c,{className:r,style:N(N({color:e.color||n.color},n.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&t().createElement("title",null,i),e.children)};return void 0!==x?t().createElement(x.Consumer,null,(function(e){return n(e)})):n(b)}function O(e){return E({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attr:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]})(e)}var j=o(974),A={};function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,c=[],u=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(n){var r=n.onTimeChange,o=n.defaultHours,a=void 0===o?"":o,i=n.defaultMinutes,c=void 0===i?"":i,u=n.id,l=C((0,e.useState)(""),2),s=l[0],f=l[1],p=C((0,e.useState)(""),2),d=p[0],m=p[1],v=(0,e.useRef)(),y=(0,e.useRef)();function h(e){isNaN(e)||Number(e)>=0&&Number(e)<100&&f(e)}function g(e){isNaN(e)||Number(e)<60&&Number(e)>=0&&m(e)}return(0,e.useEffect)((function(){if(a&&("string"==typeof a||"number"==typeof a)&&!isNaN(a)){var e=Number(a);e<100&&e>=0&&f(a)}if(c&&("string"==typeof c||"number"==typeof c)&&!isNaN(c)){var t=Number(c);t<60&&t>=0&&m(c)}}),[a,c]),(0,e.useEffect)((function(){r&&(Number(d)?Number(s)?r("".concat(s,":").concat(d)):r("0:".concat(d)):Number(s)?r("".concat(s,":00")):r("0:00"))}),[s,d,r]),t().createElement("div",{className:"time-input",id:u},t().createElement("input",{id:u?u+"-hours":"",type:"text",className:"hour-input",maxLength:"2",placeholder:"HH",value:s,onChange:function(e){h(e.target.value)},onKeyDown:function(e){e.target.selectionStart===s.length&&("ArrowRight"===e.key||"Delete"===e.key?(e.preventDefault(),y.current.focus()):isNaN(e.key)||2!==e.target.selectionStart||y.current.focus()),"ArrowUp"===e.key&&h("99"!==s?String(Number(s)+1):"0"),"ArrowDown"===e.key&&h("0"!==s&&"00"!==s?String(Number(s)-1):"99"),isNaN(e.key)||0!==e.target.selectionStart||f("")},ref:v}),t().createElement("span",null,":"),t().createElement("input",{id:u?u+"-minutes":"",type:"text",className:"minute-input",maxLength:"2",placeholder:"MM",value:d,onChange:function(e){g(e.target.value)},onKeyDown:function(e){if("ArrowLeft"!==e.key&&"Backspace"!==e.key||0!==e.target.selectionStart||(e.preventDefault(),v.current.focus(),v.current.setSelectionRange(s.length,s.length)),"ArrowUp"===e.key&&g(Number(d)<55?String(Number(d)+5-Number(d)%5):"0"),"ArrowDown"===e.key){var t=Number(d)%5?Number(d)%5:5;g("0"!==d&&"00"!==d?String(Number(d)-t):"55")}isNaN(e.key)||0!==e.target.selectionStart||m("")},ref:y}),t().createElement(O,{className:"clock"}))}A.styleTagTransform=y(),A.setAttributes=p(),A.insert=s().bind(null,"head"),A.domAPI=u(),A.insertStyleElement=m(),i()(j.Z,A),j.Z&&j.Z.locals&&j.Z.locals,n.createRoot(document.getElementById("root")).render(t().createElement(t().StrictMode,null,t().createElement(T,{id:"foo",defaultHours:"99",defaultMinutes:"59",onTimeChange:function(e){console.log(e)}})));var I=T}(),a}()}));