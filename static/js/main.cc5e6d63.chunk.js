(this["webpackJsonpryo226.portfolio"]=this["webpackJsonpryo226.portfolio"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/Item.7e99472c.svg"},47:function(e,t,n){e.exports=n.p+"static/media/OpeningAnim.3dad17a8.svg"},51:function(e,t,n){e.exports=n.p+"static/media/Cloudy.840d90fe.svg"},52:function(e,t,n){e.exports=n.p+"static/media/Rain.307a81bc.svg"},53:function(e,t,n){e.exports=n.p+"static/media/Sun.e6245550.svg"},54:function(e,t,n){e.exports=n.p+"static/media/Thunder.77beebdd.svg"},55:function(e,t,n){e.exports=n.p+"static/media/Error_animated.0a2aec6f.svg"},56:function(e,t,n){e.exports=n.p+"static/media/Center.01d08c1f.svg"},64:function(e,t,n){e.exports=n(97)},91:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a,r=n(61),i=n(0),c=n.n(i),o=n(22),u=n.n(o),l=n(42),s=n(43),E=n(16),d=n(8),m=n(60),p=n(3),f=n(13),T=n(29),S=n.n(T),O=n(45),v=n(46),A=n.n(v);!function(e){e.GET_WEATHER_REQUEST="GET_WEATHER_REQUEST",e.GET_WEATHER_SUCCESS="GET_WEATHER_SUCCESS",e.GET_WEATHER_FAILURE="GET_WEATHER_FAILURE",e.CHANGE_STATE="CHANGE_STATE"}(a||(a={}));var b=function(){return{type:a.GET_WEATHER_REQUEST}},y=function(e){return{type:a.GET_WEATHER_SUCCESS,payload:e}},R=function(e){return{type:a.GET_WEATHER_FAILURE,error:e}},h=function(e){return{type:a.CHANGE_STATE,chapter:e}},_={isFetching:!1,payload:[],chapter:"Opening"},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.GET_WEATHER_REQUEST:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!0,payload:[]});case a.GET_WEATHER_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!1,payload:t.payload});case a.GET_WEATHER_FAILURE:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!1,error:t.payload});case a.CHANGE_STATE:return Object(f.a)(Object(f.a)({},e),{},{chapter:t.chapter});default:return e}},g=n(10),C=n.n(g),w=n(47),G=n.n(w),L=(n(91),function(){var e=Object(i.useRef)("loadAnim"),t=Object(d.b)(),n=document.styleSheets.item(0);return Object(i.useEffect)((function(){t(function(){var e=Object(O.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b()),e.prev=1,e.next=4,A.a.get("https://api.openweathermap.org/data/2.5/weather?q=Yokohama,jp&units=metric&appid=bf2836e4b535547b1e7b8f0c3844db4f");case 4:return n=e.sent,e.abrupt("return",t(y(n.data)));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",t(R(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(i.useEffect)((function(){new C.a(e.current,{file:G.a,type:"scenario-sync"},(function(){n.insertRule(".cls-1{animation: strokeAnimation ease-in-out 1s;}",0)}))}),[e.current]),c.a.createElement("div",{id:"load"},c.a.createElement("div",{id:"loadAnim",onAnimationEnd:function(){return t(h("Weather"))}}))}),N=n(15),U=n(20),W=n.n(U),H=n(62),I=n(51),k=n.n(I),F=n(52),x=n.n(F),D=n(53),z=n.n(D),K=n(54),M=n.n(K),P=n(55),q=n.n(P),B=(n(93),function(){var e=Object(d.b)(),t=document.styleSheets.item(0),n=Object(d.c)((function(e){return e.payload})),a=Object(i.useState)(),r=Object(N.a)(a,2),o=r[0],u=r[1];switch(Object(i.useEffect)((function(){u(n.weather[0].main)}),[]),o){case"Thunderstorm":return c.a.createElement(W.a,{id:"Thunder",option:{file:M.a,type:"oneByOne",start:"autostart",duration:250},callback:function(){t.insertRule("#Tunder{animation: strokeAnimation ease-in-out 1s;}");var n=document.querySelector("#Thunder");null!=n&&n.addEventListener("animationend",(function(){e(h("Status"))}))}});case"Drizzle":return c.a.createElement("div",{id:"drizzle"},"drizzle");case"Rain":return c.a.createElement(W.a,{id:"Rain",option:{file:x.a,type:"oneByOne",start:"autostart",duration:150,animTimingFunction:C.a.EASE},callback:function(){t.insertRule("#Rain{animation: strokeAnimation ease-in-out 1s;}");var n=document.querySelector("#Rain");null!=n&&n.addEventListener("animationend",(function(){e(h("Status"))}))}});case"Snow":return c.a.createElement("div",{id:"snow"},"snow");case"Atmosphere":return c.a.createElement("div",{id:"atmosphere"},"atmosphere");case"Clear":return c.a.createElement(W.a,{id:"Sun",option:{file:z.a,type:"sync",start:"autostart",duration:30},callback:function(){t.insertRule("#Clear{animation: strokeAnimation ease-in-out 1s;}");var n=document.querySelector("#Sun");null!=n&&n.addEventListener("animationend",(function(){e(h("Status"))}))}});case"Clouds":return c.a.createElement(W.a,{id:"Cloudy",option:{file:k.a,type:"sync",start:"autostart",duration:100,animTimingFunction:C.a.EASE},callback:function(){t.insertRule("#Cloudy{animation: strokeAnimation ease-in-out 1s;}");var n=document.querySelector("#Cloudy");null!=n&&n.addEventListener("animationend",(function(){e(h("Status"))}))}});case void 0:return c.a.createElement(H.a,{src:q.a});default:return c.a.createElement("div",null)}}),Q=function(){return c.a.createElement("div",{id:"weather"},c.a.createElement(B,null))},J=n(110),V=function(e){var t=e.id,n=e.option,a=e.className,r=e.callback,o=e.onAnimationEnd,u=(e.Loop,Object(i.useState)()),l=Object(N.a)(u,2),s=(l[0],l[1]);return Object(i.useEffect)((function(){s(new C.a(t,n,r))}),[]),c.a.createElement("div",{id:t,className:a,onAnimationEnd:o})},X=n(21),Y=n.n(X),Z=n(56),$=n.n(Z),ee=(n(94),function(){var e=document.styleSheets.item(0),t=Object(d.c)((function(e){return e.payload})),n=Object(i.useState)(""),a=Object(N.a)(n,2),r=a[0],o=a[1],u=Object(i.useState)(""),l=Object(N.a)(u,2),s=l[0],E=l[1];return Object(i.useEffect)((function(){var e,n;if("undefined"!==typeof(null===(e=t.sys)||void 0===e?void 0:e.sunrise)&&"undefined"!==typeof(null===(n=t.sys)||void 0===n?void 0:n.sunset)){var a,r,i=new Date(1e3*(null===(a=t.sys)||void 0===a?void 0:a.sunrise)),c=new Date(1e3*(null===(r=t.sys)||void 0===r?void 0:r.sunset));o(i.toLocaleTimeString()),E(c.toLocaleTimeString())}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(J.a,{container:!0,justify:"center"},c.a.createElement(J.a,{item:!0},c.a.createElement(V,{id:"center",option:{file:$.a,type:"delayed",start:"autostart",duration:360,animTimingFunction:C.a.EASE},callback:function(){return e.insertRule("#center{animation: strokeAnimation ease-in-out 1s;}")}}))),c.a.createElement(J.a,{container:!0,justify:"space-around"},c.a.createElement(J.a,{item:!0},c.a.createElement(V,{id:"item1",option:{file:Y.a}}),c.a.createElement("p",null,"CPG : OK"),c.a.createElement("p",null,"NEURAL LINGUAGE : OK"),c.a.createElement("p",null,"ION CONCENTRATION : OK"),c.a.createElement("p",null,"META MOTOR AREA PARAMETERS : OK"),c.a.createElement("p",null,"REACTOR : OK"),c.a.createElement("p",null,"POWER FLOW : OK"),c.a.createElement(V,{id:"item2",option:{file:Y.a}})),c.a.createElement(J.a,{item:!0},c.a.createElement(V,{id:"item3",option:{file:Y.a}}),c.a.createElement("p",null,"VISIBLITY : ".concat(t.visibility)),c.a.createElement("p",null,"WEATHER : ".concat(t.weather[0].main)),c.a.createElement("p",null,"AMBIENT TEMPERATURE : ".concat(t.main.temp)),c.a.createElement("p",null,"WIND SPEED : ".concat(t.wind.speed)),c.a.createElement("p",null,"WIND DEG : ".concat(t.wind.deg)),c.a.createElement("p",null,"CLOUDS ALL : ".concat(t.clouds.all)),c.a.createElement("p",null,"SUNRISE : ".concat(r)),c.a.createElement("p",null,"SUNSET : ".concat(s)),c.a.createElement(V,{id:"item4",option:{file:Y.a}}))))});function te(){switch(Object(d.c)((function(e){return e.chapter}))){case"Status":return c.a.createElement(ee,null);case"Weather":return c.a.createElement(Q,null);default:return c.a.createElement(L,null)}}var ne=function(){return c.a.createElement(te,null)},ae=(n(95),Object(s.createLogger)({diff:!0,collapsed:!0}),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.c),re=[];re=[l.a];var ie=Object(E.d)(j,ae(E.a.apply(void 0,Object(r.a)(re))));function ce(){return c.a.createElement(m.a,null,c.a.createElement(p.a,{exact:!0,path:"/ryo226.portfolio",component:ne}))}u.a.render(c.a.createElement(d.a,{store:ie},c.a.createElement(ce,null)),document.getElementById("app"))}},[[64,1,2]]]);
//# sourceMappingURL=main.cc5e6d63.chunk.js.map