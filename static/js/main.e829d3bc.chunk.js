(this["webpackJsonpcorona-dashboard"]=this["webpackJsonpcorona-dashboard"]||[]).push([[0],{43:function(e,t,n){e.exports=n(62)},48:function(e,t,n){},58:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(14),i=n.n(a),o=(n(48),n(2)),u=n(0),s=n(26),l=n(13);function d(){var e=Object(o.a)(["padding-left: 10px;"]);return d=function(){return e},e}function b(){var e=Object(o.a)(["\n  background-color: #282c34;\n  color: #61dafb;\n  height: 60px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  padding: 5px 0px;\n"]);return b=function(){return e},e}var j=Object(u.d)(b()),O=Object(u.d)(d()),f=function(){return Object(u.e)("header",{css:j},Object(u.e)("h3",{css:O},"Corona Dashboard"))},h=n(7),p=n.n(h),v=n(15),x=n(8);function m(){var e=Object(o.a)(["\n    border: 5px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 5px solid #3498db;\n    width: 30px;\n    height: 30px;\n    -webkit-animation: "," 1s linear infinite;\n    animation: "," 1s linear infinite;\n    margin: 0 auto;\n"]);return m=function(){return e},e}function g(){var e=Object(o.a)(["\n    from, 0%, to { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n"]);return g=function(){return e},e}var w=Object(u.f)(g()),y=Object(u.d)(m(),w,w),D=function(){return Object(u.e)("div",{css:y})};function k(){var e=Object(o.a)(["\n    background: grey;\n    color: white;\n    text-align: center;\n    padding: 5%;\n    font-size: 14px;\n    margin: 2%;\n    width: 100%;\n    border-radius: 5px;\n"]);return k=function(){return e},e}function S(){var e=Object(o.a)(["\n    padding: 20px 30px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row;\n"]);return S=function(){return e},e}var C=Object(u.d)(S()),E=Object(u.d)(k()),F=function(){var e=Object(r.useState)({}),t=Object(x.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){return(e=Object(v.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona.lmao.ninja/all");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.e)("div",{css:C},Object(u.e)("div",{css:E},n&&n.cases?Object(u.e)(c.a.Fragment,null,Object(u.e)("div",null,"Confirmed"),Object(u.e)("div",null,n.cases)):Object(u.e)(D,null)),Object(u.e)("div",{css:E},n&&n.deaths?Object(u.e)(c.a.Fragment,null,Object(u.e)("div",null,"Deaths"),Object(u.e)("div",null,n.deaths)):Object(u.e)(D,null)),Object(u.e)("div",{css:E},n&&n.recovered?Object(u.e)(c.a.Fragment,null,Object(u.e)("div",null,"Recovered"),Object(u.e)("div",null,n.recovered)):Object(u.e)(D,null)))},T=n(31),I=n(42),R=n(32);function A(){var e=Object(o.a)(["\n    width: 40px;\n    height: 25px;\n"]);return A=function(){return e},e}function W(){var e=Object(o.a)(["\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n"]);return W=function(){return e},e}function z(){var e=Object(o.a)(["text-align: center;"]);return z=function(){return e},e}function H(){var e=Object(o.a)(["font-weight: 600;"]);return H=function(){return e},e}function M(){var e=Object(o.a)(["background-color: #dddddd;"]);return M=function(){return e},e}function P(){var e=Object(o.a)(["\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n"]);return P=function(){return e},e}function B(){var e=Object(o.a)(["\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n"]);return B=function(){return e},e}var J=R.a.th(B()),q=R.a.td(P()),X=Object(u.d)(M()),Y=Object(u.d)(H()),$=Object(u.d)(z()),G=Object(u.d)(W()),K=Object(u.d)(A()),L=function(e){var t=e.countriesData,n=e.selection;return Object(u.e)("table",{css:G},Object(u.e)("thead",null,Object(u.e)("tr",null,Object(u.e)(J,{css:$},n),Object(u.e)(J,{css:$},Object(u.e)("img",{css:K,src:t[n].countryInfo.flag})))),Object(u.e)("tbody",null,Object(u.e)("tr",null,Object(u.e)(q,null,"Cases Today"),Object(u.e)(q,null,t[n].todayCases)),Object(u.e)("tr",{css:X},Object(u.e)(q,null,"Deaths Today"),Object(u.e)(q,null,t[n].todayDeaths)),Object(u.e)("tr",null,Object(u.e)(q,null,"Recovered"),Object(u.e)(q,null,t[n].recovered)),Object(u.e)("tr",{css:X},Object(u.e)(q,null,"Active"),Object(u.e)(q,null,t[n].active)),Object(u.e)("tr",null,Object(u.e)(q,null,"Total Deaths"),Object(u.e)(q,null,t[n].deaths)),Object(u.e)("tr",{css:[X,Y]},Object(u.e)(q,null,"Total Cases"),Object(u.e)(q,null,t[n].cases))))},N=n(37),Q=n(38),U=n.n(Q),V=function(e){var t=[],n=[],r=[];return Object.entries(e.cases).forEach((function(e,n){t.push([n,e[1]])})),Object.entries(e.deaths).forEach((function(e,t){n.push([t,e[1]])})),Object.entries(e.recovered).forEach((function(e,t){r.push([t,e[1]])})),[{label:"Cases",data:t},{label:"Recovered",data:r,color:"green"},{label:"Deaths",data:n,color:"red"}]};function Z(){var e=Object(o.a)(["\n    height: 250px;\n    width: 250px;\n    margin: 0 auto;\n"]);return Z=function(){return e},e}function _(){var e=Object(o.a)(["\n    height: 250px;\n    width: 100%;\n"]);return _=function(){return e},e}function ee(){var e=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return ee=function(){return e},e}function te(){var e=Object(o.a)(["text-align: center;"]);return te=function(){return e},e}function ne(){var e=Object(o.a)(["margin: 0 auto;"]);return ne=function(){return e},e}function re(){var e=Object(o.a)(["padding: 20% 0% 10% 0%"]);return re=function(){return e},e}function ce(){var e=Object(o.a)(["padding: 4%;"]);return ce=function(){return e},e}var ae=Object(u.d)(ce()),ie=Object(u.d)(re()),oe=Object(u.d)(ne()),ue=Object(u.d)(te()),se=Object(u.d)(ee()),le=Object(u.d)(_()),de=Object(u.d)(Z()),be={container:function(e){return Object(T.a)({},e,{width:"150px"})},option:function(e){return Object(T.a)({},e,{textAlign:"left"})}},je=function(){var e=Object(r.useState)({value:"India",label:"India"}),t=Object(x.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)({}),o=Object(x.a)(i,2),s=o[0],l=o[1],d=Object(r.useState)({}),b=Object(x.a)(d,2),j=b[0],O=b[1],f=Object(r.useState)({}),h=Object(x.a)(f,2),m=h[0],g=h[1],w=c.a.useMemo((function(){return{showPoints:!1}}),[]),y=c.a.useMemo((function(){return[{primary:!0,type:"linear",position:"bottom",show:!1},{type:"linear",position:"left"}]}),[]),k=function(){var e=Object(v.a)(p.a.mark((function e(t){var n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona.lmao.ninja/historical/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,c=V(r.timeline),g(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){function e(){return(e=Object(v.a)(p.a.mark((function e(){var t,r,c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona.lmao.ninja/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,c={},r.forEach((function(e){c[e.country]=e})),O(c),a=r.map((function(e){return{value:e.country,label:e.country}})),l(a),k(n.value);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.e)("div",{css:se},Object.keys(j).length?Object(u.e)(c.a.Fragment,null,Object(u.e)("div",{css:oe},Object(u.e)(I.a,{styles:be,value:n,onChange:function(e){a(e),k(e.value)},options:s})),Object(u.e)("div",{css:ae},Object(u.e)("h3",{css:ue},"Country Statistics"),Object(u.e)(L,{countriesData:j,selection:n.value})),Object(u.e)("hr",null),Object(u.e)("div",{css:ae},m.length?Object(u.e)(c.a.Fragment,null,m[0].data.length?Object(u.e)("div",{css:le},Object(u.e)("h3",{css:ue},"Timeline"),Object(u.e)(N.Chart,{data:m,series:w,axes:y,tooltip:!0})):null):Object(u.e)(D,null)),Object(u.e)("hr",null),Object(u.e)("div",{css:ae},Object(u.e)("div",{css:de},Object(u.e)("h3",{css:ue},"Pie Chart"),Object(u.e)(U.a,{label:!0,labelStyle:{fill:"white",fontSize:"5px"},labelPosition:80,animate:!0,background:"grey",animationDuration:500,data:[{title:"Active",value:j[n.value].active,color:"#007ED6"},{title:"Recovered",value:j[n.value].recovered,color:"#77DD77"},{title:"Deaths",value:j[n.value].deaths,color:"#F13C59"}]})))):Object(u.e)("div",{css:ie},Object(u.e)(D,null)))},Oe=(n(58),n(39)),fe=n.n(Oe);function he(){var e=Object(o.a)(["margin: 30% auto;"]);return he=function(){return e},e}function pe(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0px;\n"]);return pe=function(){return e},e}var ve=Object(u.d)(pe()),xe=Object(u.d)(he()),me={maxHeight:"450px",overflowY:"scroll",overflowX:"hidden"},ge=[{name:"State",selector:"state",sortable:!0,left:!0,width:"30%"},{name:"Confirmed",selector:"confirmed",sortable:!0,center:!0,width:"15%"},{name:"Active",selector:"active",sortable:!0,center:!0,width:"15%"},{name:"Recovered",selector:"recovered",sortable:!0,center:!0,width:"15%"},{name:"Deaths",selector:"deaths",sortable:!0,center:!0,width:"15%"}],we={rows:{style:{height:"30px",minHeight:"30px"}}},ye=function(){var e=Object(r.useState)(!1),t=Object(x.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)({}),o=Object(x.a)(i,2),s=o[0],l=o[1];return Object(r.useEffect)((function(){function e(){return(e=Object(v.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a(!1),l(n.statewise);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.e)(c.a.Fragment,null,n?Object(u.e)("div",{css:xe},Object(u.e)(D,null)):Object(u.e)("div",{css:ve},Object(u.e)(fe.a,{title:"India State-Wise Data",columns:ge,data:s,striped:!0,highlightOnHover:!0,responsive:!0,customStyles:we,style:me})))};function De(){var e=Object(o.a)(["\n  padding: 10px;\n  border: 1px solid grey;\n  border-radius: 5px;\n  margin: 0 10px;\n  background: antiquewhite;\n  a{ text-decoration: none; }\n"]);return De=function(){return e},e}function ke(){var e=Object(o.a)(["\n  width: 65%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 10px;\n  @media screen and (max-width: 460px) { width: 100%; } \n  @media (min-width: 461px) and (max-width: 768px) { width: 85%; }\n"]);return ke=function(){return e},e}function Se(){var e=Object(o.a)(["\n  width: 65%;\n  margin: 0 auto;\n  @media screen and (max-width: 460px) { width: 95%; } \n  @media (min-width: 461px) and (max-width: 768px) { width: 85%; }\n"]);return Se=function(){return e},e}var Ce=Object(u.d)(Se()),Ee=Object(u.d)(ke()),Fe=Object(u.d)(De()),Te=function(){return Object(u.e)("div",null,Object(u.e)(f,null),Object(u.e)(s.a,null,Object(u.e)("div",{css:Ee},Object(u.e)("div",{css:[Fe]},Object(u.e)(s.b,{to:"/coronaDashboard"},"India Tracker")),Object(u.e)("div",{css:[Fe]},Object(u.e)(s.b,{to:"/coronaDashboard/worldwide"},"World Tracker"))),Object(u.e)("div",{css:Ce},Object(u.e)(l.c,null,Object(u.e)(l.a,{path:"/coronaDashboard/worldwide"},Object(u.e)(F,null),Object(u.e)(je,null)),Object(u.e)(l.a,{path:"/coronaDashboard"},Object(u.e)(ye,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.e829d3bc.chunk.js.map