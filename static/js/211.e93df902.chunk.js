(self.webpackChunke_comerse=self.webpackChunke_comerse||[]).push([[211],{4576:function(t,n,e){"use strict";e.d(n,{T:function(){return r}});var r="https://fakestoreapi.com/products"},3641:function(t,n,e){"use strict";e.d(n,{Z:function(){return x}});var r,i=e(885),o=e(2791),a=e(9434),c=e(3359),s=e(9592),d=e(4452),l=e(4349),u=e(1087),f=e(168),m=e(6444).ZP.article(r||(r=(0,f.Z)(["\n\tmax-width: 350px;\n\tjustify-self: center;\n\n\t.product {\n\t\t&__body {\n\t\t\tposition: relative;\n\n\t\t\t&:hover .product__icon-actions {\n\t\t\t\topacity: 1;\n\t\t\t\tvisibility: visible;\n\t\t\t}\n\t\t}\n\n\t\t&__img {\n\t\t\twidth: 100%;\n\t\t\theight: 22rem;\n\t\t\tobject-fit: contain;\n\n\t\t\t@media (min-width: 768px) {\n\t\t\t\theight: 25rem;\n\t\t\t}\n\t\t}\n\n\t\t&__bottom {\n\t\t\tpadding-top: 2em;\n\t\t}\n\n\t\t&__title {\n\t\t\tfont-size: 1.6rem;\n\t\t\tcolor: var(--light-gray);\n\t\t\tmargin-bottom: 0.5em;\n\t\t\tcolor: hsl(210, 22%, 49%);\n\t\t}\n\n\t\t&__price {\n\t\t\tfont-size: 1.8rem;\n\t\t\tfont-weight: bold;\n\t\t\tcolor: hsl(209, 34%, 30%);\n\t\t}\n\n\t\t&__icon-actions {\n\t\t\tmax-width: 10rem;\n\t\t\tposition: absolute;\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: center;\n\t\t\tgap: 1rem;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\ttransform: translate(-50%, -50%);\n\t\t\topacity: 0;\n\t\t\tvisibility: hidden;\n\t\t\ttransition: opacity 0.3s linear, visibility 0.3s linear;\n\n\t\t\t.product__details,\n\t\t\t.product__add,\n\t\t\t.product__favourite {\n\t\t\t\tdisplay: grid;\n\t\t\t\twidth: 40px;\n\t\t\t\theight: 40px;\n\t\t\t\tfont-size: 1.8rem;\n\t\t\t\tcolor: #fff;\n\t\t\t\tbackground-color: var(--orange);\n\t\t\t\tplace-items: center;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\ttransition: background-color 0.3s;\n\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground-color: var(--orange-hover);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.product__favourite {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.favourite?"var(--fail-color)":"#fff"})),p=e(7087),h=e.p+"static/media/product-placeholder.013cd76f21371b0905a8.webp",g=e(184),x=function(t){var n=(0,o.useState)(!1),e=(0,i.Z)(n,2),r=e[0],f=e[1],x=(0,a.I0)(),b=(0,a.v9)((function(t){return t.favProducts})).favProductsArr,v=(0,a.v9)((function(t){return t.authentication})).isLoggedIn,j={id:t.id,title:t.title,price:t.price,image:t.image,amount:1},_=function(){return b.some((function(n){return n.id===t.id}))};(0,o.useEffect)((function(){v&&_()&&f(!0)}),[v]);return(0,o.useEffect)((function(){r&&!_()&&f(!1),localStorage.setItem("favProducts",JSON.stringify(b))}),[b]),(0,g.jsxs)(m,{className:"product",favourite:r,children:[(0,g.jsxs)("div",{className:"product__body",children:[(0,g.jsx)(p.LazyLoadImage,{className:"product__img",alt:t.title,src:t.image,placeholderSrc:h}),(0,g.jsxs)("div",{className:"product__icon-actions",children:[(0,g.jsx)(u.rU,{to:"../products/".concat(t.id),"aria-label":"Show product details",className:"product__details",children:(0,g.jsx)("i",{className:"fa-solid fa-magnifying-glass"})}),(0,g.jsx)("button",{"aria-label":"add product button",className:"product__add",onClick:function(){return x(c.U.addProduct(j))},children:(0,g.jsx)("i",{className:"fa-solid fa-cart-shopping"})}),(0,g.jsx)("button",{"aria-label":"add to favourite button",className:"product__favourite",onClick:function(){v?(x(r?d.k.removeProduct(j.id):d.k.addProduct(j)),f(!r)):(x(s.e.toggleOverlay()),x(l.I.showAlert({status:"warning",title:"Warning",message:"If you wanna select product as favourite you have to be logged\n\t\t\tfirstfully"})))},children:(0,g.jsx)("i",{className:"fa-solid fa-heart"})})]})]}),(0,g.jsxs)("div",{className:"product__bottom",children:[(0,g.jsx)(u.rU,{to:"../products/".concat(t.id),children:(0,g.jsx)("h3",{className:"product__title",children:t.title})}),(0,g.jsxs)("span",{className:"product__price",children:["$",t.price.toFixed(2)]})]})]})}},2983:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return E}});e(2791);var r,i,o,a,c,s=e(7326),d=e(168),l=e(1087),u=e(6444),f=e.p+"static/media/background.7880c4eab3c7fb142ae4.jpeg",m=u.ZP.header(r||(r=(0,d.Z)(["\n\tposition: relative;\n\theight: 100vh;\n\tmargin-top: -11rem;\n\tbackground-image: url(",");\n\tbackground-size: cover;\n\tbackground-position: center;\n\toverflow: hidden;\n\n\t@media (min-width: 768px) {\n\t\tmargin-top: -12rem;\n\t}\n\n\t&::before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tinset: 0;\n\t\tbackground-color: rgb(0 0 0 /0.5);\n\t}\n"])),f),p=u.ZP.div(i||(i=(0,d.Z)(["\n\tposition: absolute;\n\ttop: 60%;\n\tleft: 0;\n\tpadding: 0 2em;\n\ttransform: translate(0, -50%);\n\tcolor: #fff;\n\n\t@media (min-width: 992px) {\n\t\ttop: 50%;\n\t\tleft: 6%;\n\t}\n\n\tp:first-child {\n\t\tfont-family: cursive;\n\t\tfont-size: 4.5rem;\n\n\t\t@media (min-width: 768px) {\n\t\t\tfont-size: 6rem;\n\t\t}\n\n\t\t@media (min-width: 992px) {\n\t\t\tfont-size: 8rem;\n\t\t}\n\t}\n\n\tp {\n\t\tfont-size: 2.5rem;\n\t\tmargin: 1em 0;\n\n\t\t@media (min-width: 768px) {\n\t\t\tfont-size: 4rem;\n\t\t\tmargin: 0.5em 0;\n\t\t}\n\n\t\t@media (min-width: 992px) {\n\t\t\tfont-size: 4.5rem;\n\t\t\tmargin: 0.3em 0;\n\t\t}\n\t}\n"]))),h=(0,u.ZP)(l.rU)(o||(o=(0,d.Z)(["\n\tdisplay: inline-block;\n\tpadding: 0.7em 1em;\n\tfont-size: 1.4rem;\n\ttext-transform: uppercase;\n\tbackground-color: transparent;\n\tcolor: #fff;\n\tborder: 1px solid #fff;\n\tborder-radius: 5px;\n\ttransition: color 0.3s linear, background-color 0.3s linear;\n\n\t@media (min-width: 768px) {\n\t\tfont-size: 1.8rem;\n\t}\n\n\t&:hover {\n\t\tbackground-color: #fff;\n\t\tcolor: var(--orange);\n\t}\n"]))),g=m,x=e(184),b=function(){return(0,x.jsx)(g,{children:(0,x.jsx)(s.Z,{children:(0,x.jsxs)(p,{children:[(0,x.jsx)("p",{children:"Rest, Relax, Unwind"}),(0,x.jsx)("p",{children:"Embrace your choices - we do"}),(0,x.jsx)(h,{to:"../products",children:"Show now"})]})})})},v=e(6915),j=e.n(v),_=e(3641),y=function(t){var n=t.id,e=t.image,r=t.title,i=t.price;return(0,x.jsx)(_.Z,{id:n,image:e,title:r,price:i})},w=u.ZP.div(a||(a=(0,d.Z)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgap: 5rem;\n\tmargin-bottom: 4em;\n\n\t@media (min-width: 768px) {\n\t\tgrid-template-columns: 1fr 1fr;\n\t}\n\n\t@media (min-width: 1200px) {\n\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t}\n"]))),k=e(7250),N=e(4576),Z="".concat(N.T,"?limit=3"),P=function(){var t=j()(Z),n=t.isLoading,e=t.error,r=t.data,i=(0,x.jsx)("p",{className:"error-text",children:"Products not found"});return n&&(i=(0,x.jsx)("img",{style:{display:"block",margin:"0 auto"},src:k,alt:"Loadingspinner"})),e&&(i=(0,x.jsxs)("p",{className:"error-text",children:[e.status," ",e.message,' Check if URL address "',Z,'" is correct.']})),r&&(i=(0,x.jsx)(w,{className:"product-list",children:r.map((function(t){return(0,x.jsx)(y,{id:t.id,image:t.image,title:t.title,price:t.price},t.id)}))})),(0,x.jsx)(x.Fragment,{children:i})},z=e(2710),L=u.ZP.div(c||(c=(0,d.Z)(["\n\th2 {\n\t\t","\n\t\tmargin-bottom: 2em;\n\t\tfont-size: 3rem;\n\t\tcolor: var(--light-gray);\n\n\t\t","\n\t}\n\n\t.featured-btn {\n\t\t&:hover {\n\t\t\tbackground-color: var(--orange-hover);\n\t\t}\n\t}\n"])),z.Ig,z.Tm),O=function(){return(0,x.jsx)("section",{className:"pt-5 pb-5 text-center section",children:(0,x.jsx)(s.Z,{children:(0,x.jsxs)(L,{children:[(0,x.jsx)("h2",{children:"Featured"}),(0,x.jsx)(P,{}),(0,x.jsx)(l.rU,{to:"../products",className:"featured-btn button",children:"All products"})]})})})},E=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(b,{}),(0,x.jsx)(O,{})]})}},6915:function(t,n,e){var r=e(5175);function i(t,n,e,r,o){var a=new Error(e,r,o);return a.name="UseFetchError",a.status=t,a.statusText=n,Object.setPrototypeOf(a,Object.getPrototypeOf(this)),Error.captureStackTrace&&Error.captureStackTrace(a,i),a}i.prototype=Object.create(Error.prototype,{constructor:{value:Error,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf(i,Error),t.exports=function(t,n,e){var o=(e&&e.depends||n&&n.depends||[]).reduce((function(t,n){return t||!n}),!1);return r(!o&&function(t,n,e){return fetch(t,n).then(e&&e.formatter||n&&n.formatter||function(t){if(!t.ok)throw new i(t.status,t.statusText,"Fetch error");return t.json()})},t,n||{},e||{})}},5175:function(t,n,e){var r=e(2791),i=e(9971);t.exports=function(t){var n=Array.prototype.slice.call(arguments,[1]),e=r.useState({isLoading:!!t});return r.useEffect((function(){t&&(!e[0].isLoading&&e[1]({data:e[0].data,isLoading:!0}),t.apply(null,n).then((function(t){e[1]({data:t,isLoading:!1})})).catch((function(t){e[1]({error:t,isLoading:!1})})))}),i(n)),e[0]}},9971:function(t){t.exports=function t(){for(var n=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r instanceof Array)for(var i=0;i<r.length;i++)n=n.concat(t(r[i]));else if("undefined"!==typeof URL&&r instanceof URL)n=n.concat(r.toJSON());else if(r instanceof Object)for(var o=Object.keys(r),a=0;a<o.length;a++){var c=o[a];n=n.concat([c]).concat(t(r[c]))}else n=n.concat(r)}return n}}}]);
//# sourceMappingURL=211.e93df902.chunk.js.map