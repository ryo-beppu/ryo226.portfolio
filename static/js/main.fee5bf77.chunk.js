(this["webpackJsonpryo226.portfolio"]=this["webpackJsonpryo226.portfolio"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/Item.7e99472c.svg"},47:function(e,t,n){e.exports=n.p+"static/media/OpeningAnim.3dad17a8.svg"},48:function(e,t,n){e.exports=n.p+"static/media/Cloudy.840d90fe.svg"},49:function(e,t,n){e.exports=n.p+"static/media/Rain.307a81bc.svg"},50:function(e,t,n){e.exports=n.p+"static/media/Sun.e6245550.svg"},51:function(e,t,n){e.exports=n.p+"static/media/Thunder.77beebdd.svg"},52:function(e,t,n){e.exports=n.p+"static/media/Error.0f6b0a20.svg"},53:function(e,t,n){e.exports=n.p+"static/media/Center.01d08c1f.svg"},60:function(e,t,n){e.exports=n(92)},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a,r=n(58),i=n(0),c=n.n(i),o=n(22),u=n.n(o),l=n(42),s=n(43),E=n(15),d=n(9),m=n(57),p=n(2),f=n(13),T=n(28),S=n.n(T),A=n(45),v=n(46),y=n.n(v);!function(e){e.GET_WEATHER_REQUEST="GET_WEATHER_REQUEST",e.GET_WEATHER_SUCCESS="GET_WEATHER_SUCCESS",e.GET_WEATHER_FAILURE="GET_WEATHER_FAILURE",e.CHANGE_STATE="CHANGE_STATE"}(a||(a={}));var O=function(){return{type:a.GET_WEATHER_REQUEST}},b=function(e){return{type:a.GET_WEATHER_SUCCESS,payload:e}},R=function(e){return{type:a.GET_WEATHER_FAILURE,error:e}},h=function(e){return{type:a.CHANGE_STATE,chapter:e}},_={isFetching:!1,payload:[],chapter:"Opening"},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.GET_WEATHER_REQUEST:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!0,payload:[]});case a.GET_WEATHER_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!1,payload:t.payload});case a.GET_WEATHER_FAILURE:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!1,error:t.payload});case a.CHANGE_STATE:return Object(f.a)(Object(f.a)({},e),{},{chapter:t.chapter});default:return e}},g=n(8),C=n.n(g),w=n(47),G=n.n(w),L=(n(87),function(){var e=Object(i.useRef)("loadAnim"),t=Object(d.b)(),n=document.styleSheets.item(0);return Object(i.useEffect)((function(){t(function(){var e=Object(A.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(O()),e.prev=1,e.next=4,y.a.get("https://api.openweathermap.org/data/2.5/weather?q=Yokohama,jp&units=metric&appid=bf2836e4b535547b1e7b8f0c3844db4f");case 4:return n=e.sent,e.abrupt("return",t(b(n.data)));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",t(R(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(i.useEffect)((function(){new C.a(e.current,{file:G.a,type:"scenario-sync"},(function(){n.insertRule(".cls-1{animation: strokeAnimation ease-in-out 1s;}",0)}))}),[e.current]),c.a.createElement("div",{id:"load"},c.a.createElement("div",{id:"loadAnim",onAnimationEnd:function(){return t(h("Weather"))}}))}),N=n(16),U=n.n(N),W=n(48),H=n.n(W),I=n(49),k=n.n(I),F=n(50),x=n.n(F),D=n(51),z=n.n(D),K=n(52),M=n.n(K),P=(n(88),function(){var e=Object(d.b)(),t=document.styleSheets.item(0),n=Object(d.c)((function(e){return e.payload}));switch(Object(i.useEffect)((function(){console.log(n.weather[0].main)}),[]),n.weather[0].main){case"Thunderstorm":return c.a.createElement(U.a,{id:"Thunder",option:{file:z.a,type:"oneByOne",start:"autostart",duration:250},callback:function(){t.insertRule("#Tunder{animation: strokeAnimation ease-in-out 1s;}");var n=document.querySelector("#Thunder");null!=n&&n.addEventListener("animationend",(function(){e(h("Status"))}))}});case"Drizzle":return c.a.createElement("div",{id:"drizzle"},"drizzle");case"Rain":return c.a.createElement(U.a,{id:"Rain",option:{file:k.a,type:"oneByOne",start:"autostart",duration:150,animTimingFunction:C.a.EASE},callback:function(){t.insertRule("#Rain{animation: strokeAnimation ease-in-out 1s;}");var n=document.querySelector("#Rain");null!=n&&n.addEventListener("animationend",(function(){e(h("Status"))}))}});case"Snow":return c.a.createElement("div",{id:"snow"},"snow");case"Atmosphere":return c.a.createElement("div",{id:"atmosphere"},"atmosphere");case"Clear":return c.a.createElement(U.a,{id:"Sun",option:{file:x.a,type:"sync",start:"autostart",duration:30},callback:function(){t.insertRule("#Clear{animation: strokeAnimation ease-in-out 1s;}");var n=document.querySelector("#Sun");null!=n&&n.addEventListener("animationend",(function(){e(h("Status"))}))}});case"Clouds":return c.a.createElement(U.a,{id:"Cloudy",option:{file:H.a,type:"sync",start:"autostart",duration:100,animTimingFunction:C.a.EASE},callback:function(){t.insertRule("#Cloudy{animation: strokeAnimation ease-in-out 1s;}");var n=document.querySelector("#Cloudy");null!=n&&n.addEventListener("animationend",(function(){e(h("Status"))}))}});case void 0:return c.a.createElement(U.a,{id:"Error",option:{file:M.a,type:"sync",start:"autostart",animTimingFunction:C.a.EASE}});default:return c.a.createElement("div",null)}}),q=function(){return c.a.createElement("div",{id:"weather"},c.a.createElement(P,null))},B=n(20),Q=n(105),J=function(e){var t=e.id,n=e.option,a=e.className,r=e.callback,o=e.onAnimationEnd,u=(e.Loop,Object(i.useState)()),l=Object(B.a)(u,2),s=(l[0],l[1]);return Object(i.useEffect)((function(){s(new C.a(t,n,r))}),[]),c.a.createElement("div",{id:t,className:a,onAnimationEnd:o})},V=n(21),X=n.n(V),Y=n(53),Z=n.n(Y),$=(n(89),function(){var e=document.styleSheets.item(0),t=Object(d.c)((function(e){return e.payload})),n=Object(i.useState)(""),a=Object(B.a)(n,2),r=a[0],o=a[1],u=Object(i.useState)(""),l=Object(B.a)(u,2),s=l[0],E=l[1];return Object(i.useEffect)((function(){var e,n;if("undefined"!==typeof(null===(e=t.sys)||void 0===e?void 0:e.sunrise)&&"undefined"!==typeof(null===(n=t.sys)||void 0===n?void 0:n.sunset)){var a,r,i=new Date(1e3*(null===(a=t.sys)||void 0===a?void 0:a.sunrise)),c=new Date(1e3*(null===(r=t.sys)||void 0===r?void 0:r.sunset));o(i.toLocaleTimeString()),E(c.toLocaleTimeString())}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(Q.a,{container:!0,justify:"center"},c.a.createElement(Q.a,{item:!0},c.a.createElement(J,{id:"center",option:{file:Z.a,type:"delayed",start:"autostart",duration:360,animTimingFunction:C.a.EASE},callback:function(){return e.insertRule("#center{animation: strokeAnimation ease-in-out 1s;}")}}))),c.a.createElement(Q.a,{container:!0,justify:"space-around"},c.a.createElement(Q.a,{item:!0},c.a.createElement(J,{id:"item1",option:{file:X.a}}),c.a.createElement("p",null,"CPG : OK"),c.a.createElement("p",null,"NEURAL LINGUAGE : OK"),c.a.createElement("p",null,"ION CONCENTRATION : OK"),c.a.createElement("p",null,"META MOTOR AREA PARAMETERS : OK"),c.a.createElement("p",null,"REACTOR : OK"),c.a.createElement("p",null,"POWER FLOW : OK"),c.a.createElement(J,{id:"item2",option:{file:X.a}})),c.a.createElement(Q.a,{item:!0},c.a.createElement(J,{id:"item3",option:{file:X.a}}),c.a.createElement("p",null,"VISIBLITY : ".concat(t.visibility)),c.a.createElement("p",null,"WEATHER : ".concat(t.weather[0].main)),c.a.createElement("p",null,"AMBIENT TEMPERATURE : ".concat(t.main.temp)),c.a.createElement("p",null,"WIND SPEED : ".concat(t.wind.speed)),c.a.createElement("p",null,"WIND DEG : ".concat(t.wind.deg)),c.a.createElement("p",null,"CLOUDS ALL : ".concat(t.clouds.all)),c.a.createElement("p",null,"SUNRISE : ".concat(r)),c.a.createElement("p",null,"SUNSET : ".concat(s)),c.a.createElement(J,{id:"item4",option:{file:X.a}}))))});function ee(){switch(Object(d.c)((function(e){return e.chapter}))){case"Status":return c.a.createElement($,null);case"Weather":return c.a.createElement(q,null);default:return c.a.createElement(L,null)}}var te=function(){return c.a.createElement(ee,null)},ne=(n(90),Object(s.createLogger)({diff:!0,collapsed:!0}),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.c),ae=[];ae=[l.a];var re=Object(E.d)(j,ne(E.a.apply(void 0,Object(r.a)(ae))));function ie(){return c.a.createElement(m.a,null,c.a.createElement(p.a,{exact:!0,path:"/ryo226.portfolio",component:te}))}u.a.render(c.a.createElement(d.a,{store:re},c.a.createElement(ie,null)),document.getElementById("app"))}},[[60,1,2]]]);
//# sourceMappingURL=main.fee5bf77.chunk.js.map