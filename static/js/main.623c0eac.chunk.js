(this["webpackJsonpryo226.portfolio"]=this["webpackJsonpryo226.portfolio"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var a,r=n(72),i=n(0),c=n.n(i),o=n(26),u=n.n(o),l=n(46),s=n(47),E=n(20),p=n(11),d=n(71),m=n(3),f=n(15),b=n(32),O=n.n(b),v=n(49),y=n(50),T=n.n(y);!function(e){e.GET_WEATHER_REQUEST="GET_WEATHER_REQUEST",e.GET_WEATHER_SUCCESS="GET_WEATHER_SUCCESS",e.GET_WEATHER_FAILURE="GET_WEATHER_FAILURE",e.CHANGE_STATE="CHANGE_STATE"}(a||(a={}));var h=function(){return{type:a.GET_WEATHER_REQUEST}},S=function(e){return{type:a.GET_WEATHER_SUCCESS,payload:e}},j=function(e){return{type:a.GET_WEATHER_FAILURE,error:e}},A=function(e){return{type:a.CHANGE_STATE,chapter:e}},g={isFetching:!1,payload:[],chapter:"Opening"},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.GET_WEATHER_REQUEST:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!0,payload:[]});case a.GET_WEATHER_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!1,payload:t.payload});case a.GET_WEATHER_FAILURE:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!1,error:t.payload});case a.CHANGE_STATE:return Object(f.a)(Object(f.a)({},e),{},{chapter:t.chapter});default:return e}},_=n(8),x=n(19),w=n(9),C=n(54),L=n.n(C);function U(){var e=Object(_.a)(['\n  position: absolute;\n  font-size: 70px;\n  margin: 0;\n  z-index: 2;\n  opacity: 0;\n  font-style: italic;\n  font-family: "Rajdhani";\n  animation: '," 1s linear 3s forwards, "," 2s 3s forwards,\n    "," 3s linear 6s forwards;\n"]);return U=function(){return e},e}function G(){var e=Object(_.a)(["\n  position: absolute;\n  width: 2560px;\n  z-index: 1;\n  filter: drop-shadow(0 0 5px #09fbd3) drop-shadow(0 0 10px #09fbd3);\n"]);return G=function(){return e},e}function N(){var e=Object(_.a)(["\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n"]);return N=function(){return e},e}function W(){var e=Object(_.a)(["\n  40% {\n    opacity: .85;\n  }\n  42% {\n    opacity: .4;\n  }\n  43% {\n    opacity: .85;\n  }\n  45% {\n    opacity: .4;\n  }\n  46% {\n    opacity: .85;\n  }\n"]);return W=function(){return e},e}function H(){var e=Object(_.a)(["\n  0% {\n    opacity: 1;\n  }\n  95% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]);return H=function(){return e},e}function I(){var e=Object(_.a)(["\n  0%{\n    opacity: 0;\n  }\n  100%{\n    opacity: 1;\n  }\n"]);return I=function(){return e},e}var k=Object(w.b)(I()),F=Object(w.b)(H()),D=Object(w.b)(W()),z=w.a.div(N()),K=Object(w.a)(x.a)(G()),M=w.a.p(U(),k,D,F),P=function(){var e=Object(p.b)();return Object(i.useEffect)((function(){e(function(){var e=Object(v.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(h()),e.prev=1,e.next=4,T.a.get("https://api.openweathermap.org/data/2.5/weather?q=Yokohama,jp&units=metric&appid=bf2836e4b535547b1e7b8f0c3844db4f");case 4:return n=e.sent,e.abrupt("return",t(S(n.data)));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",t(j(e.t0)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]),c.a.createElement(z,null,c.a.createElement(K,{src:L.a}),c.a.createElement(M,{onAnimationEnd:function(t){return"euuCaJ"===t.animationName?e(A("Timeline")):""}},"LoadingComplete"))},q=n(58),B=n.n(q),Q=n(59),J=n.n(Q),V=n(60),X=n.n(V),Y=n(61),Z=n.n(Y);function $(){var e=Object(_.a)(["\n  position: absolute;\n  height: 42px;\n  bottom: 10px;\n  right: 10px;\n"]);return $=function(){return e},e}function ee(){var e=Object(_.a)(["\n  position: absolute;\n  height: 42px;\n  top: 10px;\n  right: 10px;\n"]);return ee=function(){return e},e}function te(){var e=Object(_.a)(["\n  position: absolute;\n  height: 42px;\n  bottom: 10px;\n  left: 10px;\n"]);return te=function(){return e},e}function ne(){var e=Object(_.a)(["\n  position: absolute;\n  height: 42px;\n  top: 10px;\n  left: 10px;\n"]);return ne=function(){return e},e}function ae(){var e=Object(_.a)(["\n  width: 100%;\n  height: 100%;\n"]);return ae=function(){return e},e}var re=w.a.div(ae()),ie=Object(w.a)(x.a)(ne()),ce=Object(w.a)(x.a)(te()),oe=Object(w.a)(x.a)(ee()),ue=Object(w.a)(x.a)($()),le=function(){return c.a.createElement(re,null,c.a.createElement(ie,{src:B.a}),c.a.createElement(ce,{src:J.a}),c.a.createElement(oe,{src:X.a}),c.a.createElement(ue,{src:Z.a}))},se=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(le,null))},Ee=n(18),pe=n(16),de=n.n(pe),me=n(24),fe=n.n(me),be=n(62),Oe=n.n(be),ve=n(63),ye=n.n(ve),Te=n(64),he=n.n(Te),Se=n(65),je=n.n(Se),Ae=(n(101),n(66)),ge=n.n(Ae),Re=(n(102),function(){return c.a.createElement("img",{src:ge.a,alt:"error",id:"error"})}),_e=function(){var e=Object(p.b)(),t=document.styleSheets.item(1),n=Object(p.c)((function(e){return e.payload})),a=Object(i.useState)(),r=Object(Ee.a)(a,2),o=r[0],u=r[1];switch(Object(i.useEffect)((function(){Object.keys(n).length>0&&u(n.weather[0].main)}),[]),o){case"Thunderstorm":return c.a.createElement(fe.a,{id:"Thunder",option:{file:je.a,type:"oneByOne",start:"autostart",duration:250},callback:function(){t.insertRule("#Tunder{animation: strokeAnimation ease-in-out 1s;}");var n=document.querySelector("#Thunder");null!=n&&n.addEventListener("animationend",(function(){e(A("Status"))}))}});case"Drizzle":return c.a.createElement("div",{id:"drizzle"},"drizzle");case"Rain":return c.a.createElement(fe.a,{id:"Rain",option:{file:ye.a,type:"oneByOne",start:"autostart",duration:150,animTimingFunction:de.a.EASE},callback:function(){t.insertRule("#Rain{animation: strokeAnimation ease-in-out 1s;}");var n=document.querySelector("#Rain");null!=n&&n.addEventListener("animationend",(function(){e(A("Status"))}))}});case"Snow":return c.a.createElement("div",{id:"snow"},"snow");case"Atmosphere":return c.a.createElement("div",{id:"atmosphere"},"atmosphere");case"Clear":return c.a.createElement(fe.a,{id:"Sun",option:{file:he.a,type:"sync",start:"autostart",duration:30},callback:function(){t.insertRule("#Clear{animation: strokeAnimation ease-in-out 1s;}");var n=document.querySelector("#Sun");null!=n&&n.addEventListener("animationend",(function(){e(A("Status"))}))}});case"Clouds":return c.a.createElement(fe.a,{id:"Cloudy",option:{file:Oe.a,type:"sync",start:"autostart",duration:100,animTimingFunction:de.a.EASE},callback:function(){t.insertRule("#Cloudy{animation: strokeAnimation ease-in-out 1s;}");var n=document.querySelector("#Cloudy");null!=n&&n.addEventListener("animationend",(function(){e(A("Status"))}))}});default:return c.a.createElement(Re,null)}},xe=function(){return c.a.createElement("div",{id:"weather"},c.a.createElement(_e,null))},we=(n(103),n(119)),Ce=function(e){var t=e.id,n=e.option,a=e.className,r=e.callback,o=e.onAnimationEnd,u=(e.Loop,Object(i.useState)()),l=Object(Ee.a)(u,2),s=(l[0],l[1]);return Object(i.useEffect)((function(){s(new de.a(t,n,r))}),[]),c.a.createElement("div",{id:t,className:a,onAnimationEnd:o})},Le=n(67),Ue=n.n(Le),Ge=n(25),Ne=n.n(Ge),We=function(){var e=document.styleSheets.item(0),t=Object(p.c)((function(e){return e.payload})),n=Object(i.useState)(""),a=Object(Ee.a)(n,2),r=a[0],o=a[1],u=Object(i.useState)(""),l=Object(Ee.a)(u,2),s=l[0],E=l[1];return Object(i.useEffect)((function(){var e,n;if("undefined"!==typeof(null===(e=t.sys)||void 0===e?void 0:e.sunrise)&&"undefined"!==typeof(null===(n=t.sys)||void 0===n?void 0:n.sunset)){var a,r,i=new Date(1e3*(null===(a=t.sys)||void 0===a?void 0:a.sunrise)),c=new Date(1e3*(null===(r=t.sys)||void 0===r?void 0:r.sunset));o(i.toLocaleTimeString()),E(c.toLocaleTimeString())}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(we.a,{container:!0,justify:"center"},c.a.createElement(we.a,{item:!0},c.a.createElement(Ce,{id:"center",option:{file:Ue.a,type:"delayed",start:"autostart",duration:360,animTimingFunction:de.a.EASE},callback:function(){return e.insertRule("#center{animation: strokeAnimation ease-in-out 1s;}")}}))),c.a.createElement(we.a,{container:!0,justify:"space-around"},c.a.createElement(we.a,{item:!0},c.a.createElement(Ce,{id:"item1",option:{file:Ne.a}}),c.a.createElement("p",null,"CPG : OK"),c.a.createElement("p",null,"NEURAL LINGUAGE : OK"),c.a.createElement("p",null,"ION CONCENTRATION : OK"),c.a.createElement("p",null,"META MOTOR AREA PARAMETERS : OK"),c.a.createElement("p",null,"REACTOR : OK"),c.a.createElement("p",null,"POWER FLOW : OK"),c.a.createElement(Ce,{id:"item2",option:{file:Ne.a}})),c.a.createElement(we.a,{item:!0},c.a.createElement(Ce,{id:"item3",option:{file:Ne.a}}),c.a.createElement("p",null,"VISIBLITY : ".concat(t.visibility)),c.a.createElement("p",null,"WEATHER : ".concat(t.weather[0].main)),c.a.createElement("p",null,"AMBIENT TEMPERATURE : ".concat(t.main.temp)),c.a.createElement("p",null,"WIND SPEED : ".concat(t.wind.speed)),c.a.createElement("p",null,"WIND DEG : ".concat(t.wind.deg)),c.a.createElement("p",null,"CLOUDS ALL : ".concat(t.clouds.all)),c.a.createElement("p",null,"SUNRISE : ".concat(r)),c.a.createElement("p",null,"SUNSET : ".concat(s)),c.a.createElement(Ce,{id:"item4",option:{file:Ne.a}}))))},He=function(){switch(Object(p.c)((function(e){return e.chapter}))){case"Status":return c.a.createElement(We,null);case"Weather":return c.a.createElement(xe,null);case"Timeline":return c.a.createElement(se,null);default:return c.a.createElement(P,null)}},Ie=function(){return c.a.createElement(He,null)},ke=(n(104),Object(s.createLogger)({diff:!0,collapsed:!0}),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.c),Fe=[];Fe=[l.a];var De=Object(E.d)(R,ke(E.a.apply(void 0,Object(r.a)(Fe))));function ze(){return c.a.createElement(d.a,null,c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/ryo226.portfolio",component:Ie}),c.a.createElement(m.a,{component:Re})))}u.a.render(c.a.createElement(p.a,{store:De},c.a.createElement(ze,null)),document.getElementById("app"))},25:function(e,t,n){e.exports=n.p+"static/media/Item.ae28d1ed.svg"},54:function(e,t,n){e.exports=n.p+"static/media/LoadingAnim.0b14fa62.svg"},58:function(e,t,n){e.exports=n.p+"static/media/UpperLeft.16e4a600.svg"},59:function(e,t,n){e.exports=n.p+"static/media/LowerLeft.dfde4979.svg"},60:function(e,t,n){e.exports=n.p+"static/media/UpperRight.90728299.svg"},61:function(e,t,n){e.exports=n.p+"static/media/LowerRight.360d08d3.svg"},62:function(e,t,n){e.exports=n.p+"static/media/Cloudy.840d90fe.svg"},63:function(e,t,n){e.exports=n.p+"static/media/Rain.307a81bc.svg"},64:function(e,t,n){e.exports=n.p+"static/media/Sun.e6245550.svg"},65:function(e,t,n){e.exports=n.p+"static/media/Thunder.77beebdd.svg"},66:function(e,t,n){e.exports=n.p+"static/media/Error_animated.0a2aec6f.svg"},67:function(e,t,n){e.exports=n.p+"static/media/Center.01d08c1f.svg"},74:function(e,t,n){e.exports=n(106)}},[[74,1,2]]]);
//# sourceMappingURL=main.623c0eac.chunk.js.map