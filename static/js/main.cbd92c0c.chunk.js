(this["webpackJsonpryo226.portfolio"]=this["webpackJsonpryo226.portfolio"]||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/Cloudy.d93d2938.svg"},25:function(e,t,n){e.exports=n.p+"static/media/Rain.3d435993.svg"},26:function(e,t,n){e.exports=n.p+"static/media/Sun.00f626de.svg"},27:function(e,t,n){e.exports=n.p+"static/media/Thunder.766f0e94.svg"},29:function(e,t,n){e.exports=n(60)},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(6),u=n.n(i),o=n(20),E=n(3),s=n(4),l=n(2),d=n(10),f=n.n(d),p=n(22),m=n(23),T=n.n(m);!function(e){e.GET_WEATHER_REQUEST="GET_WEATHER_REQUEST",e.GET_WEATHER_SUCCESS="GET_WEATHER_SUCCESS",e.GET_WEATHER_FAILURE="GET_WEATHER_FAILURE"}(a||(a={}));var v=function(){return{type:a.GET_WEATHER_REQUEST}},_=function(e){return{type:a.GET_WEATHER_SUCCESS,payload:e}},b=function(e){return{type:a.GET_WEATHER_FAILURE,error:e}},h={isFetching:!1,payload:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.GET_WEATHER_REQUEST:return Object(l.a)(Object(l.a)({},e),{},{isFetching:!0,payload:[]});case a.GET_WEATHER_SUCCESS:return Object(l.a)(Object(l.a)({},e),{},{isFetching:!1,payload:t.payload});case a.GET_WEATHER_FAILURE:return Object(l.a)(Object(l.a)({},e),{},{isFetching:!1,error:t.payload});default:return e}},O=n(28),R=n(5),w=n.n(R),S=n(24),j=n.n(S),A=n(25),g=n.n(A),U=n(26),C=n.n(U),G=n(27),H=n.n(G);n(58);function W(){return Object(r.useEffect)((function(){new w.a("clouds",{file:j.a,type:"scenario-sync"})}),[]),c.a.createElement("div",{id:"weather"},c.a.createElement("div",{id:"clouds"}))}function F(){return Object(r.useEffect)((function(){new w.a("clouds",{file:g.a,type:"scenario-sync"})}),[]),c.a.createElement("div",{id:"weather"},c.a.createElement("div",{id:"clouds"}))}function x(){return Object(r.useEffect)((function(){new w.a("clouds",{file:C.a,type:"scenario-sync"})}),[]),c.a.createElement("div",{id:"weather"},c.a.createElement("div",{id:"clouds"}))}function z(){return Object(r.useEffect)((function(){new w.a("clouds",{file:H.a,type:"scenario-sync"})}),[]),c.a.createElement("div",{id:"weather"},c.a.createElement("div",{id:"clouds"}))}function I(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.payload})),n=Object(r.useState)(),a=Object(O.a)(n,2),i=a[0],u=a[1];switch(Object(r.useEffect)((function(){e(function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v()),e.prev=1,e.next=4,T.a.get("https://api.openweathermap.org/data/2.5/weather?q=Yokohama,jp&units=metric&appid=bf2836e4b535547b1e7b8f0c3844db4f");case 4:return n=e.sent,e.abrupt("return",t(_(n.data)));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",t(b(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.useEffect)((function(){u(t.weather)}),[i,t]),null===i||void 0===i?void 0:i[0].main){case"Thunderstorm":return c.a.createElement(z,null);case"Drizzle":return c.a.createElement("div",{id:"drizzle"},"drizzle");case"Rain":return c.a.createElement(F,null);case"Snow":return c.a.createElement("div",{id:"snow"},"snow");case"Atmosphere":return c.a.createElement("div",{id:"atmosphere"},"atmosphere");case"Clear":return c.a.createElement(x,null);case"Clouds":return c.a.createElement(W,null);default:return c.a.createElement("div",{id:"error"},"error")}}var L=function(){return c.a.createElement("div",null,c.a.createElement(I,null))},k=(n(59),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.c),Q=Object(E.d)(y,k(Object(E.a)(o.a)));u.a.render(c.a.createElement(s.a,{store:Q},c.a.createElement(L,null)),document.getElementById("app"))}},[[29,1,2]]]);
//# sourceMappingURL=main.cbd92c0c.chunk.js.map