(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)i=s[u],r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"43739a75"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e),o=function(t){c.onerror=c.onload=null,clearTimeout(l);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");i.type=n,i.request=o,a[1](i)}r[e]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[e.isLoaded?a("router-view"):a("app-welcome",{attrs:{showBtn:e.showBtn},on:{changeLoaded:e.onLoadedChange}})],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"center"},[a("div",{ref:"desc"},[a("h1",{ref:"title"},[e._v("Hi I'm Maruf Shafique")]),a("p",{ref:"para"},[e._v("UI/UX designer & full stack JavaScript developer")])]),a("transition",{attrs:{name:"slide",mode:"out-in"}},[e.showBtn?a("div",{key:"explore",ref:"explore"},[a("div",{staticClass:"explore d-flex justify-content-center"},[a("div",{staticClass:"d-flex explore-inner",on:{click:e.onExplore}},[a("span",[e._v("Start Exploring")]),a("div",{staticClass:"play"},[a("i",{staticClass:"material-icons"},[e._v("play_arrow")])])])])]):a("div",{key:"spiner",staticClass:"spinner"})])],1)])},s=[],c=a("1209"),l={props:["showBtn"],methods:{onExplore:function(){this.$emit("changeLoaded",!0)}},mounted:function(){var e=this.$refs,t=e.title,a=e.para;Object(c["a"])({targets:t,translateY:["-120px","0px"],duration:1500,opacity:[.5,1],easing:"easeOutExpo"}),Object(c["a"])({targets:a,translateY:["-80px","0px"],delay:200,duration:1300,opacity:[.5,1],easing:"easeOutExpo"})}},u=l,f=(a("99e5"),a("2877")),d=Object(f["a"])(u,i,s,!1,null,"40abc922",null);d.options.__file="Welcome.vue";var p=d.exports,v={data:function(){return{isLoaded:!1,showBtn:!1,firtTimeOut:""}},components:{appWelcome:p},methods:{onLoadedChange:function(e){this.isLoaded=e}},mounted:function(){var e=this;this.firtTimeOut=setTimeout(function(){e.showBtn=!0},2e3)}},m=v,b=(a("bc3f"),Object(f["a"])(m,r,o,!1,null,"f6795078",null));b.options.__file="App.vue";var h=b.exports,g=a("8c4f"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("app-home")],1)},x=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("app-navigation",{ref:"navbar",attrs:{onRefSubmit:"refSubmitted"}}),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("h1",{ref:"title",staticClass:"mt-5"},[e._v("Hello world")])]),a("div",{staticClass:"col-md-6"},[a("p",{ref:"desc",staticClass:"mt-5"},[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quidem facilis corrupti officia. Repellendus quae id expedita architecto quia, tempora atque optio possimus recusandae assumenda aperiam enim aliquid corrupti sapiente?")])])])])],1)},w=[],C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{ref:"navbar",staticClass:"navbar navbar-expand-lg navbar-dark"},[e._m(0)])},O=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Navbar")]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Home "),a("span",{staticClass:"sr-only"},[e._v("(current)")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Features")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Pricing")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link disabled",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[e._v("Disabled")])])])])])}],j={mounted:function(){var e=this.$refs.navbar;this.$emit("onRefSubmit",e)}},k=j,E=(a("ec3f"),Object(f["a"])(k,C,O,!1,null,"427fb3aa",null));E.options.__file="Navigation.vue";var S=E.exports,$={name:"HelloWorld",props:{msg:String},data:function(){return{navbar:""}},components:{appNavigation:S},methods:{refSubmitted:function(e){this.navbar=e}},mounted:function(){var e=this.$refs,t=e.title,a=e.desc,n=e.navbar,r=c["a"].timeline({easing:"easeOutExpo",duration:750});r.add({targets:n.$el,translateY:["-50px","0px"],opacity:[".6","1"]}).add({targets:t,translateY:["-50px","0px"],opacity:[0,1]}).add({targets:a,translateX:["-200px","0px"],opacity:[0,1]}),console.log(n.$el)}},L=$,N=(a("bd0c"),Object(f["a"])(L,y,w,!1,null,"5bacbb5f",null));N.options.__file="Home.vue";var P=N.exports,T={name:"home",components:{appHome:P}},q=T,B=Object(f["a"])(q,_,x,!1,null,null,null);B.options.__file="Home.vue";var H=B.exports;n["a"].use(g["a"]);var M=new g["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:H},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),A=a("2f62");n["a"].use(A["a"]);var Y=new A["a"].Store({state:{},mutations:{},actions:{}}),F=a("9483");Object(F["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("f9e3");n["a"].config.productionTip=!1,new n["a"]({router:M,store:Y,render:function(e){return e(h)}}).$mount("#app")},"8c4d":function(e,t,a){},"99e5":function(e,t,a){"use strict";var n=a("c0f9"),r=a.n(n);r.a},b5a5:function(e,t,a){},bc3f:function(e,t,a){"use strict";var n=a("cfa1"),r=a.n(n);r.a},bd0c:function(e,t,a){"use strict";var n=a("b5a5"),r=a.n(n);r.a},c0f9:function(e,t,a){},cfa1:function(e,t,a){},ec3f:function(e,t,a){"use strict";var n=a("8c4d"),r=a.n(n);r.a}});
//# sourceMappingURL=app.19031056.js.map