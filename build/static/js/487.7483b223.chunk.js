(self.webpackChunke_comerse=self.webpackChunke_comerse||[]).push([[487],{1449:function(e,t,n){"use strict";n.d(t,{_:function(){return s}});var r,a=n(168),i=n(6444),o=n(2710),s=i.ZP.section(r||(r=(0,a.Z)(["\n\t","\n"])),o._7)},4576:function(e,t,n){"use strict";n.d(t,{T:function(){return r}});var r="https://fakestoreapi.com/products"},9803:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r,a=n(885),i=n(2791),o=n(9434),s=n(3359),l=n(9592),c=n(4452),u=n(4349),p=n(1087),d=n(168),f=n(6444).ZP.article(r||(r=(0,d.Z)(["\n\tmax-width: 350px;\n\tjustify-self: center;\n\n\t.product {\n\t\t&__body {\n\t\t\tposition: relative;\n\n\t\t\t&:hover .product__icon-actions {\n\t\t\t\topacity: 1;\n\t\t\t\tvisibility: visible;\n\t\t\t}\n\t\t}\n\n\t\t&__img {\n\t\t\twidth: 100%;\n\t\t\theight: 22rem;\n\t\t\tobject-fit: contain;\n\n\t\t\t@media (min-width: 768px) {\n\t\t\t\theight: 25rem;\n\t\t\t}\n\t\t}\n\n\t\t&__bottom {\n\t\t\tpadding-top: 2em;\n\t\t}\n\n\t\t&__title {\n\t\t\tfont-size: 1.6rem;\n\t\t\tcolor: var(--light-gray);\n\t\t\tmargin-bottom: 0.5em;\n\t\t\tcolor: hsl(210, 22%, 49%);\n\t\t}\n\n\t\t&__price {\n\t\t\tfont-size: 1.8rem;\n\t\t\tfont-weight: bold;\n\t\t\tcolor: hsl(209, 34%, 30%);\n\t\t}\n\n\t\t&__icon-actions {\n\t\t\tmax-width: 10rem;\n\t\t\tposition: absolute;\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: center;\n\t\t\tgap: 1rem;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\ttransform: translate(-50%, -50%);\n\t\t\topacity: 0;\n\t\t\tvisibility: hidden;\n\t\t\ttransition: opacity 0.3s linear, visibility 0.3s linear;\n\n\t\t\t.product__details,\n\t\t\t.product__add,\n\t\t\t.product__favourite {\n\t\t\t\tdisplay: grid;\n\t\t\t\twidth: 40px;\n\t\t\t\theight: 40px;\n\t\t\t\tfont-size: 1.8rem;\n\t\t\t\tcolor: #fff;\n\t\t\t\tbackground-color: var(--orange);\n\t\t\t\tplace-items: center;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\ttransition: background-color 0.3s;\n\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground-color: var(--orange-hover);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.product__favourite {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t}\n\t}\n"])),(function(e){return e.favourite?"var(--fail-color)":"#fff"})),g=n(7087),m=n.p+"static/media/product-placeholder.013cd76f21371b0905a8.webp",h=n(184),v=function(){return(0,h.jsx)("img",{style:{width:"100%"},src:m,alt:"Placeholder image"})},b=function(e){var t=(0,i.useState)(!1),n=(0,a.Z)(t,2),r=n[0],d=n[1],m=(0,o.I0)(),b=(0,o.v9)((function(e){return e.favProducts})).favProductsArr,x=(0,o.v9)((function(e){return e.authentication})).isLoggedIn,y={id:e.id,title:e.title,price:e.price,image:e.image,amount:1},C=function(){return b.some((function(t){return t.id===e.id}))};(0,i.useEffect)((function(){x&&C()&&d(!0)}),[x]);return(0,i.useEffect)((function(){r&&!C()&&d(!1),localStorage.setItem("favProducts",JSON.stringify(b))}),[b]),(0,h.jsxs)(f,{className:"product",favourite:r,children:[(0,h.jsxs)("div",{className:"product__body",children:[(0,h.jsx)(g.LazyLoadImage,{className:"product__img",alt:e.title,src:e.image,placeholder:(0,h.jsx)(v,{})}),(0,h.jsxs)("div",{className:"product__icon-actions",children:[(0,h.jsx)(p.rU,{to:"../products/".concat(e.id),"aria-label":"Show product details",className:"product__details",children:(0,h.jsx)("i",{className:"fa-solid fa-magnifying-glass"})}),(0,h.jsx)("button",{"aria-label":"add product button",className:"product__add",onClick:function(){return m(s.U.addProduct(y))},children:(0,h.jsx)("i",{className:"fa-solid fa-cart-shopping"})}),(0,h.jsx)("button",{"aria-label":"add to favourite button",className:"product__favourite",onClick:function(){x?(m(r?c.k.removeProduct(y.id):c.k.addProduct(y)),d(!r)):(m(l.e.toggleOverlay()),m(u.I.showAlert({status:"warning",title:"Warning",message:"If you wanna select product as favourite you have to be logged\n\t\t\tfirstfully"})))},children:(0,h.jsx)("i",{className:"fa-solid fa-heart"})})]})]}),(0,h.jsxs)("div",{className:"product__bottom",children:[(0,h.jsx)(p.rU,{to:"../products/".concat(e.id),children:(0,h.jsx)("h3",{className:"product__title",children:e.title})}),(0,h.jsxs)("span",{className:"product__price",children:["$",e.price.toFixed(2)]})]})]})}},4984:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r,a,i,o=n(7326),s=n(4165),l=n(5861),c=n(885),u=n(2791),p=n(6048),d=n.n(p),f=n(7250),g=n(168),m=n(6444),h=m.ZP.div(r||(r=(0,g.Z)(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\tgap: 7rem;\n"]))),v=n(9803),b=n(4576),x=n(9434),y=function(e){var t=(0,u.useState)([]),n=(0,c.Z)(t,2),r=n[0],a=n[1],i=(0,x.v9)((function(e){return e.filter})),o=i.filterName,s=i.filterCategory,l=i.filterPrice,p=function(e){return"all"===s?e.category!==s:e.category===s};return(0,u.useEffect)((function(){if(0!==e.length){var t=e.filter((function(e){return e.title.toLowerCase().includes(o)})).filter(p).filter((function(e){return e.price<=l}));a(t)}}),[e,o,l,s]),r},C=n(184),P=0,_=function(){var e=(0,u.useState)(0),t=(0,c.Z)(e,2),n=t[0],r=t[1],a=(0,u.useState)([]),i=(0,c.Z)(a,2),o=i[0],p=i[1],g=(0,u.useState)(!1),m=(0,c.Z)(g,2),x=m[0],_=m[1],k=(0,u.useState)(null),N=(0,c.Z)(k,2),j=N[0],w=N[1],L=(0,u.useState)(0),O=(0,c.Z)(L,2),E=O[0],R=O[1],S=y(o),T=function(){var e=(0,l.Z)((0,s.Z)().mark((function e(){var t,r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),w(null),e.prev=2,e.next=5,fetch(b.T);case 5:if((t=e.sent).ok){e.next=8;break}throw new Error("Something went wrong");case 8:return e.next=10,t.json();case 10:r=e.sent,a=r.slice(n,n+8),p(a),P=Math.ceil(r.length/8),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),w(e.t0.message);case 19:_(!1);case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){T()}),[n]);var A=(0,C.jsx)("p",{className:"error-text",children:"Products not found"});return x?(0,C.jsx)("img",{style:{display:"block",margin:"0 auto"},src:f,alt:"Loadingspinner"}):j?(0,C.jsxs)("p",{className:"error-text",children:[j.message,' Check if URL address "',b.T,'" is correct.']}):(S.length>0&&(A=(0,C.jsx)(C.Fragment,{children:S.map((function(e){return(0,C.jsx)(v.Z,{id:e.id,image:e.image,title:e.title,price:e.price},e.id)}))})),(0,C.jsxs)(h,{className:"products__list text-center",children:[A,(0,C.jsx)(d(),{previousLabel:"prev",nextLabel:"next",pageCount:P,onPageChange:function(e){var t=e.selected;R(t),r(8*t)},containerClassName:"pagination",activeClassName:"active",forcePage:E})]}))},k=n(5095),N=n.n(k),j=m.ZP.div(a||(a=(0,g.Z)(["\n\tmargin-bottom: 10em;\n\taccent-color: var(--orange);\n\n\t@media (min-width: 768px) {\n\t\tposition: sticky;\n\t\ttop: 5rem;\n\t\talign-self: start;\n\t}\n\n\t.filter {\n\t\t&__form--one {\n\t\t\tmargin-bottom: 3em;\n\n\t\t\tinput {\n\t\t\t\tpadding: 0.8em;\n\t\t\t\tborder: none;\n\t\t\t\tfont-size: 1.4rem;\n\t\t\t\tbackground-color: var(--dirty-white);\n\t\t\t\toutline-color: var(--orange);\n\n\t\t\t\t@media (min-width: 1400px) {\n\t\t\t\t\tfont-size: 1.6rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__categories,\n\t\t&__options ul li,\n\t\t&__price {\n\t\t\tcolor: var(--dark-blue);\n\t\t\topacity: 0.9;\n\t\t}\n\n\t\t&__categories {\n\t\t\tfont-size: 1.4rem;\n\t\t\tletter-spacing: 1px;\n\t\t\tmargin-bottom: 1em;\n\n\t\t\t@media (min-width: 1400px) {\n\t\t\t\tfont-size: 1.6rem;\n\t\t\t}\n\t\t}\n\n\t\t&__options {\n\t\t\tborder: none;\n\t\t\tmargin-bottom: 2em;\n\n\t\t\tul {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\trow-gap: 1.5rem;\n\n\t\t\t\tli {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tcolumn-gap: 1rem;\n\t\t\t\t\tpadding-left: 1em;\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tletter-spacing: 1px;\n\t\t\t\t\tfont-size: 1.1rem;\n\n\t\t\t\t\t@media (min-width: 1400px) {\n\t\t\t\t\t\tfont-size: 1.3rem;\n\t\t\t\t\t}\n\n\t\t\t\t\tinput,\n\t\t\t\t\tlabel {\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__form--two {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: flex-start;\n\t\t\tjustify-content: center;\n\n\t\t\tinput {\n\t\t\t\tmargin-bottom: 1em;\n\t\t\t}\n\n\t\t\t.filter__price {\n\t\t\t\tfont-size: 1.4rem;\n\n\t\t\t\t@media (min-width: 1400px) {\n\t\t\t\t\tfont-size: 1.6rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]))),w=n(790),L=function(){var e=(0,x.I0)(),t=(0,x.v9)((function(e){return e.filter})),n=t.filterName,r=t.filterCategory,a=t.filterPrice,i=N()((function(t){e(w.w.setFilterPrice(t.target.valueAsNumber))}),50);return(0,C.jsxs)(j,{className:"filter",children:[(0,C.jsxs)("form",{className:"filter__form--one",children:[(0,C.jsx)("label",{htmlFor:"search"}),(0,C.jsx)("input",{name:"search",id:"search",type:"text",value:n,placeholder:"Search...",onChange:function(t){e(w.w.setFilterName(t.target.value))}})]}),(0,C.jsx)("h3",{className:"filter__categories",children:"Categories"}),(0,C.jsx)("fieldset",{className:"filter__options",onChange:function(t){e(w.w.setFilterCategory(t.target.value))},children:(0,C.jsxs)("ul",{children:[(0,C.jsxs)("li",{children:[(0,C.jsx)("input",{name:"option",value:"all",id:"options__all",type:"radio",defaultChecked:r.includes("all")}),(0,C.jsx)("label",{htmlFor:"options__all",children:"All"})]}),(0,C.jsxs)("li",{children:[(0,C.jsx)("input",{name:"option",value:"men's clothing",id:"options__men",type:"radio",defaultChecked:r.includes("men's clothing")}),(0,C.jsx)("label",{htmlFor:"options__men",children:"Men's clothing"})]}),(0,C.jsxs)("li",{children:[(0,C.jsx)("input",{name:"option",value:"women's clothing",id:"options__woman",type:"radio",defaultChecked:r.includes("women's clothing")}),(0,C.jsx)("label",{htmlFor:"options__woman",children:"Women's clothing"})]}),(0,C.jsxs)("li",{children:[(0,C.jsx)("input",{name:"option",value:"jewelery",id:"options__jewelery",type:"radio",defaultChecked:r.includes("jewelery")}),(0,C.jsx)("label",{htmlFor:"options__jewelery",children:"Jewelery"})]}),(0,C.jsxs)("li",{children:[(0,C.jsx)("input",{name:"option",value:"electronics",id:"options__electronics",type:"radio",defaultChecked:r.includes("electronics")}),(0,C.jsx)("label",{htmlFor:"options__electronics",children:"Electronics"})]})]})}),(0,C.jsx)("h3",{className:"filter__categories",children:"Max price"}),(0,C.jsxs)("form",{className:"filter__form--two",children:[(0,C.jsx)("label",{htmlFor:"input_price"}),(0,C.jsx)("input",{name:"input_price",id:"input_price",type:"range",min:0,max:1e3,step:1,onChange:i}),(0,C.jsxs)("span",{className:"filter__price",children:["Value: $",a]})]})]})},O=m.ZP.div(i||(i=(0,g.Z)(["\n\tpadding: 4rem 0;\n\n\t@media (min-width: 576px) {\n\t\tpadding: 4rem 1.5rem;\n\t}\n\n\t@media (min-width: 768px) {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 4fr;\n\t\tcolumn-gap: 2rem;\n\t}\n\n\t@media (min-width: 992px) {\n\t\tcolumn-gap: 0;\n\t}\n"]))),E=function(){return(0,C.jsx)("section",{className:"products section",children:(0,C.jsx)(o.Z,{children:(0,C.jsxs)(O,{className:"products__container",children:[(0,C.jsx)(L,{}),(0,C.jsx)(_,{})]})})})},R=n(1449),S=function(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(R._,{children:(0,C.jsx)(o.Z,{children:(0,C.jsx)("h2",{children:"Products"})})}),(0,C.jsx)(E,{})]})}},5095:function(e,t,n){var r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")(),p=Object.prototype.toString,d=Math.max,f=Math.min,g=function(){return u.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||o.test(e)?s(e.slice(2),n?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var r,a,i,o,s,l,c=0,u=!1,p=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=a;return r=a=void 0,c=t,o=e.apply(i,n)}function x(e){return c=e,s=setTimeout(C,t),u?b(e):o}function y(e){var n=e-l;return void 0===l||n>=t||n<0||p&&e-c>=i}function C(){var e=g();if(y(e))return P(e);s=setTimeout(C,function(e){var n=t-(e-l);return p?f(n,i-(e-c)):n}(e))}function P(e){return s=void 0,v&&r?b(e):(r=a=void 0,o)}function _(){var e=g(),n=y(e);if(r=arguments,a=this,l=e,n){if(void 0===s)return x(l);if(p)return s=setTimeout(C,t),b(l)}return void 0===s&&(s=setTimeout(C,t)),o}return t=h(t)||0,m(n)&&(u=!!n.leading,i=(p="maxWait"in n)?d(h(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),_.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=a=s=void 0},_.flush=function(){return void 0===s?o:P(g())},_}},6048:function(e,t,n){var r;e.exports=(r=n(2791),function(){var e={703:function(e,t,n){"use strict";var r=n(414);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},697:function(e,t,n){e.exports=n(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:function(e){"use strict";e.exports=r}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){"use strict";n.r(a),n.d(a,{default:function(){return P}});var e=n(98),t=n.n(e),r=n(697),i=n.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var s=function(e){var n=e.pageClassName,r=e.pageLinkClassName,a=e.page,i=e.selected,s=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,f=e.pageLabelBuilder,g=e.rel,m=e.ariaLabel||"Page "+a+(d?" "+d:""),h=null;return i&&(h="page",m=e.ariaLabel||"Page "+a+" is your current page",n=void 0!==n?n+" "+s:s,void 0!==r?void 0!==l&&(r=r+" "+l):r=l),t().createElement("li",{className:n},t().createElement("a",o({rel:g,role:p?void 0:"button",className:r,href:p,tabIndex:i?"-1":"0","aria-label":m,"aria-current":h,onKeyPress:u},c(u)),f(a)))};s.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};var l=s;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var u=function(e){var n=e.breakLabel,r=e.breakClassName,a=e.breakLinkClassName,i=e.breakHandler,o=e.getEventListener,s=r||"break";return t().createElement("li",{className:s},t().createElement("a",c({className:a,role:"button",tabIndex:"0",onKeyPress:i},o(i)),n))};u.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};var p=u;function d(e){return null!=e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function v(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(s,e);var n,r,a,i,o=(a=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(a);if(i){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function s(e){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),y(b(n=o.call(this,e)),"handlePreviousPage",(function(e){var t=n.state.selected;n.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0})})),y(b(n),"handleNextPage",(function(e){var t=n.state.selected,r=n.props.pageCount;n.handleClick(e,null,t<r-1?t+1:void 0,{isNext:!0})})),y(b(n),"handlePageSelected",(function(e,t){if(n.state.selected===e)return n.callActiveCallback(e),void n.handleClick(t,null,void 0,{isActive:!0});n.handleClick(t,null,e)})),y(b(n),"handlePageChange",(function(e){n.state.selected!==e&&(n.setState({selected:e}),n.callCallback(e))})),y(b(n),"getEventListener",(function(e){return y({},n.props.eventListener,e)})),y(b(n),"handleClick",(function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=a.isPrevious,o=void 0!==i&&i,s=a.isNext,l=void 0!==s&&s,c=a.isBreak,u=void 0!==c&&c,p=a.isActive,d=void 0!==p&&p;e.preventDefault?e.preventDefault():e.returnValue=!1;var f=n.state.selected,g=n.props.onClick,m=r;if(g){var h=g({index:t,selected:f,nextSelectedPage:r,event:e,isPrevious:o,isNext:l,isBreak:u,isActive:d});if(!1===h)return;Number.isInteger(h)&&(m=h)}void 0!==m&&n.handlePageChange(m)})),y(b(n),"handleBreakClick",(function(e,t){var r=n.state.selected;n.handleClick(t,e,r<e?n.getForwardJump():n.getBackwardJump(),{isBreak:!0})})),y(b(n),"callCallback",(function(e){void 0!==n.props.onPageChange&&"function"==typeof n.props.onPageChange&&n.props.onPageChange({selected:e})})),y(b(n),"callActiveCallback",(function(e){void 0!==n.props.onPageActive&&"function"==typeof n.props.onPageActive&&n.props.onPageActive({selected:e})})),y(b(n),"getElementPageRel",(function(e){var t=n.state.selected,r=n.props,a=r.nextPageRel,i=r.prevPageRel,o=r.selectedPageRel;return t-1===e?i:t===e?o:t+1===e?a:void 0})),y(b(n),"pagination",(function(){var e=[],r=n.props,a=r.pageRangeDisplayed,i=r.pageCount,o=r.marginPagesDisplayed,s=r.breakLabel,l=r.breakClassName,c=r.breakLinkClassName,u=n.state.selected;if(i<=a)for(var d=0;d<i;d++)e.push(n.getPageElement(d));else{var f=a/2,g=a-f;u>i-a/2?f=a-(g=i-u):u<a/2&&(g=a-(f=u));var m,h,v=function(e){return n.getPageElement(e)},b=[];for(m=0;m<i;m++){var x=m+1;x<=o||x>i-o||m>=u-f&&m<=u+(0===u&&a>1?g-1:g)?b.push({type:"page",index:m,display:v(m)}):s&&b.length>0&&b[b.length-1].display!==h&&(a>0||o>0)&&(h=t().createElement(p,{key:m,breakLabel:s,breakClassName:l,breakLinkClassName:c,breakHandler:n.handleBreakClick.bind(null,m),getEventListener:n.getEventListener}),b.push({type:"break",index:m,display:h}))}b.forEach((function(t,n){var r=t;"break"===t.type&&b[n-1]&&"page"===b[n-1].type&&b[n+1]&&"page"===b[n+1].type&&b[n+1].index-b[n-1].index<=2&&(r={type:"page",index:t.index,display:v(t.index)}),e.push(r.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),r=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,n.state={selected:r},n}return n=s,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,n=e.disableInitialCallback,r=e.extraAriaContext,a=e.pageCount,i=e.forcePage;void 0===t||n||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(a)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(a,"). Did you forget a Math.ceil()?")),void 0!==t&&t>a-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(a-1,").")),void 0!==i&&i>a-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(a-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,n=t.pageCount,r=e+t.pageRangeDisplayed;return r>=n?n-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,n=t.hrefBuilder,r=t.pageCount,a=t.hrefAllControls;if(n)return a||e>=0&&e<r?n(e+1,r,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var n=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(n=n+" "+this.props.extraAriaContext),n}}},{key:"getPageElement",value:function(e){var n=this.state.selected,r=this.props,a=r.pageClassName,i=r.pageLinkClassName,o=r.activeClassName,s=r.activeLinkClassName,c=r.extraAriaContext,u=r.pageLabelBuilder;return t().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:n===e,rel:this.getElementPageRel(e),pageClassName:a,pageLinkClassName:i,activeClassName:o,activeLinkClassName:s,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var n=this.props,r=n.disabledClassName,a=n.disabledLinkClassName,i=n.pageCount,o=n.className,s=n.containerClassName,l=n.previousLabel,c=n.previousClassName,u=n.previousLinkClassName,p=n.previousAriaLabel,f=n.prevRel,m=n.nextLabel,h=n.nextClassName,v=n.nextLinkClassName,b=n.nextAriaLabel,x=n.nextRel,y=this.state.selected,C=0===y,P=y===i-1,_="".concat(d(c)).concat(C?" ".concat(d(r)):""),k="".concat(d(h)).concat(P?" ".concat(d(r)):""),N="".concat(d(u)).concat(C?" ".concat(d(a)):""),j="".concat(d(v)).concat(P?" ".concat(d(a)):""),w=C?"true":"false",L=P?"true":"false";return t().createElement("ul",{className:o||s,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:_},t().createElement("a",g({className:N,href:this.getElementHref(y-1),tabIndex:C?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":w,"aria-label":p,rel:f},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),t().createElement("li",{className:k},t().createElement("a",g({className:j,href:this.getElementHref(y+1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":L,"aria-label":b,rel:x},this.getEventListener(this.handleNextPage)),m)))}}])&&m(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),s}(e.Component);y(C,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),y(C,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});var P=C}(),a}())}}]);
//# sourceMappingURL=487.7483b223.chunk.js.map