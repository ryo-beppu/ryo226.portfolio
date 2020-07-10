(this["webpackJsonpryo226.portfolio"]=this["webpackJsonpryo226.portfolio"]||[]).push([[0],{36:function(e,t,n){e.exports=n.p+"static/media/OpeningAnim.3dad17a8.svg"},37:function(e,t,n){e.exports=n.p+"static/media/Cloudy.840d90fe.svg"},38:function(e,t,n){e.exports=n.p+"static/media/Rain.307a81bc.svg"},39:function(e,t,n){e.exports=n.p+"static/media/Sun.e6245550.svg"},40:function(e,t,n){e.exports=n.p+"static/media/Thunder.77beebdd.svg"},41:function(e,t,n){e.exports=n.p+"static/media/Error.c7f623a4.svg"},45:function(e,t,n){e.exports=n(76)},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var r,a=n(42),c=n(0),u=n.n(c),i=n(12),o=n.n(i),s=n(31),E=n(32),l=n(9),d=n(6),f=n(43),p=n(1),m=n(5),v=n(18),b=n.n(v),h=n(34),T=n(35),O=n.n(T);!function(e){e.GET_WEATHER_REQUEST="GET_WEATHER_REQUEST",e.GET_WEATHER_SUCCESS="GET_WEATHER_SUCCESS",e.GET_WEATHER_FAILURE="GET_WEATHER_FAILURE",e.CHANGE_STATE="CHANGE_STATE"}(r||(r={}));var _=function(){return{type:r.GET_WEATHER_REQUEST}},j=function(e){return{type:r.GET_WEATHER_SUCCESS,payload:e}},y=function(e){return{type:r.GET_WEATHER_FAILURE,error:e}},R=function(e){return{type:r.CHANGE_STATE,chapter:e}},A={isFetching:!1,payload:[],chapter:"Opening"},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.GET_WEATHER_REQUEST:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!0,payload:[]});case r.GET_WEATHER_SUCCESS:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,payload:t.payload});case r.GET_WEATHER_FAILURE:return Object(m.a)(Object(m.a)({},e),{},{isFetching:!1,error:t.payload});case r.CHANGE_STATE:return Object(m.a)(Object(m.a)({},e),{},{chapter:t.chapter});default:return e}},w=n(7),g=n.n(w),C=n(36),G=n.n(C),H=(n(72),function(){var e=Object(c.useRef)("loadAnim"),t=Object(d.b)();document.styleSheets.item(0);return Object(c.useEffect)((function(){t(function(){var e=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_()),e.prev=1,e.next=4,O.a.get("https://api.openweathermap.org/data/2.5/weather?q=Yokohama,jp&units=metric&appid=bf2836e4b535547b1e7b8f0c3844db4f");case 4:return n=e.sent,e.abrupt("return",t(j(n.data)));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",t(y(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(c.useEffect)((function(){new g.a(e.current,{file:G.a,type:"scenario-sync"},(function(){t(R("Weather"))}))}),[e.current]),u.a.createElement("div",{id:"load"},u.a.createElement("div",{id:"loadAnim"}))}),W=n(44),U=n(37),x=n.n(U),F=n(38),z=n.n(F),I=n(39),L=n.n(I),N=n(40),k=n.n(N),Q=n(41),D=n.n(Q);n(73);function J(){var e=Object(c.useRef)("clouds");return Object(c.useEffect)((function(){new g.a(e.current,{file:x.a,type:"scenario-sync",start:"autostart",duration:30})}),[e.current]),u.a.createElement("div",{id:"weather"},u.a.createElement("div",{id:"clouds"}))}function X(){var e=Object(c.useRef)("rain");return Object(c.useEffect)((function(){new g.a(e.current,{file:z.a,type:"scenario-sync",start:"autostart",duration:30})}),[e.current]),u.a.createElement("div",{id:"weather"},u.a.createElement("div",{id:"rain"}))}function q(){var e=Object(c.useRef)("sun");return Object(c.useEffect)((function(){new g.a(e.current,{file:L.a,type:"scenario-sync",start:"autostart",duration:30})}),[e.current]),u.a.createElement("div",{id:"weather"},u.a.createElement("div",{id:"sun"}))}function B(){var e=Object(c.useRef)("thunderstorm");return Object(c.useEffect)((function(){new g.a(e.current,{file:k.a,type:"scenario-sync",start:"autostart",duration:30})}),[e.current]),u.a.createElement("div",{id:"weather"},u.a.createElement("div",{id:"thunderstorm"}))}function M(){var e=Object(c.useRef)("error");return Object(c.useEffect)((function(){new g.a(e.current,{file:D.a,type:"scenario-sync",start:"autostart",duration:15})}),[e.current]),u.a.createElement("div",{id:"weather"},u.a.createElement("div",{id:"error"}))}function P(){var e=Object(d.c)((function(e){return e.payload})),t=Object(c.useState)(),n=Object(W.a)(t,2),r=n[0],a=n[1];switch(Object(c.useEffect)((function(){a(e.weather)}),[r,e]),null===r||void 0===r?void 0:r[0].main){case"Thunderstorm":return u.a.createElement(B,null);case"Drizzle":return u.a.createElement("div",{id:"drizzle"},"drizzle");case"Rain":return u.a.createElement(X,null);case"Snow":return u.a.createElement("div",{id:"snow"},"snow");case"Atmosphere":return u.a.createElement("div",{id:"atmosphere"},"atmosphere");case"Clear":return u.a.createElement(q,null);case"Clouds":return u.a.createElement(J,null);case void 0:return u.a.createElement(M,null);default:return u.a.createElement("div",null)}}var V=function(){return u.a.createElement(P,null)};function Y(){switch(Object(d.c)((function(e){return e.chapter}))){case"Weather":return u.a.createElement(V,null);default:return u.a.createElement(H,null)}}var K=function(){return u.a.createElement(Y,null)},Z=(n(74),Object(E.createLogger)({diff:!0,collapsed:!0}),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c),$=[];$=[s.a];var ee=Object(l.d)(S,Z(l.a.apply(void 0,Object(a.a)($))));function te(){return u.a.createElement(f.a,null,u.a.createElement(p.a,{exact:!0,path:"/ryo226.portfolio",component:K}))}o.a.render(u.a.createElement(d.a,{store:ee},u.a.createElement(te,null)),document.getElementById("app"))}},[[45,1,2]]]);
//# sourceMappingURL=main.770ec08b.chunk.js.map