(this.webpackJsonptypingspeed=this.webpackJsonptypingspeed||[]).push([[0],{46:function(e,t,n){e.exports=n(59)},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=(n(51),n(52),n(53),n(23));var i=function(){var e=Object(l.b)({from:{opacity:0,transform:"translateY(-20vh)"},to:{opacity:1,transform:"translateY(0vh)"},config:{duration:1e3}});return r.a.createElement(l.a.header,{style:e},r.a.createElement("h2",{id:"headerTitle"},"Typing Speed Test"))},s=n(12),u=(n(54),n(93)),d=(n(55),n(92)),m=n(31),f=n.n(m),v=n(36),g=n.n(v);var h=function(e){var t=e.end,n=Object(a.useState)(0),o=Object(s.a)(n,2),c=o[0],i=o[1],m=Object(a.useState)(""),v=Object(s.a)(m,2),h=v[0],w=v[1],p=Object(a.useState)(!0),E=Object(s.a)(p,2),b=E[0],y=E[1],j=Object(a.useState)(0),O=Object(s.a)(j,2),N=O[0],k=O[1],B=Object(a.useState)(""),S=Object(s.a)(B,2),T=S[0],C=S[1],I=function(){var e=c,n=T.split("").filter((function(e,t){return e===h[t]}));n.length/h.length===1?f.a.fire("you got: "+n.length+" / "+h.length+" ("+Math.round(n.length/h.length*100)+"%)","your time is: ".concat(e," seconds"),"success"):0===n.length?f.a.fire("you got: "+n.length+" / "+h.length+" ("+Math.round(n.length/h.length*100)+"%)","your time is: ".concat(e," seconds"),"error"):f.a.fire("you got: "+n.length+" / "+h.length+" ("+Math.round(n.length/h.length*100)+"%)","your time is: ".concat(e," seconds")),t({grade:n.length,word:h,time:c})};Object(a.useEffect)((function(){w(g()()),y(!1);var e=setInterval((function(){return i((function(e){return e+1}))}),1e3);return clearInterval(e)}),[]);var W=Object(l.b)({from:{opacity:0},to:{opacity:1},config:{duration:1e3}});return Object(a.useEffect)((function(){k(T.length)}),[T]),r.a.createElement(l.a.div,{style:W,className:"testModal"},b?r.a.createElement("div",{className:"load"},r.a.createElement("div",{className:"windows8"},r.a.createElement("div",{className:"wBall",id:"wBall_1"},r.a.createElement("div",{className:"wInnerBall"})),r.a.createElement("div",{className:"wBall",id:"wBall_2"},r.a.createElement("div",{className:"wInnerBall"})),r.a.createElement("div",{className:"wBall",id:"wBall_3"},r.a.createElement("div",{className:"wInnerBall"})),r.a.createElement("div",{className:"wBall",id:"wBall_4"},r.a.createElement("div",{className:"wInnerBall"})),r.a.createElement("div",{className:"wBall",id:"wBall_5"},r.a.createElement("div",{className:"wInnerBall"})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"seconds"},"timer: ",c),r.a.createElement("div",{className:"word"},"you need to type:"," ",h.split("").map((function(e,t){return r.a.createElement("span",{style:N===t?{color:"green",fontSize:40}:{color:"blue"},key:t},e)}))),r.a.createElement("div",null,r.a.createElement(d.a,{onChange:function(e){return function(e){C(e.target.value)}(e)},placeholder:"Type...",style:{marginTop:20},onKeyUp:function(e){13===e.keyCode&&I()}})),r.a.createElement("div",null,r.a.createElement(u.a,{onClick:I,style:{marginTop:50},variant:"contained",color:"secondary"},"Submit"))))};var w=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),l=Object(s.a)(c,2),i=l[0],d=l[1],m=Object(a.useState)("block"),f=Object(s.a)(m,2),v=f[0],g=f[1],w=Object(a.useState)([]),p=Object(s.a)(w,2),E=p[0],b=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"gameCounter"},"game number: ",n),r.a.createElement("div",{id:"test"},r.a.createElement(u.a,{onClick:function(){o((function(e){return e+1})),d(!0),g("none")},style:{height:40,display:v},variant:"contained",color:"primary"},"Start Test"),i&&r.a.createElement(h,{end:function(e){d(!1),g("block"),b((function(t){return t.concat([e])}))}})),E.length>0&&r.a.createElement("div",{className:"scores"},E.map((function(e,t){return r.a.createElement("div",{className:"records",key:t},r.a.createElement("div",null,"grade:",e.grade,"/",e.word.length," (",100*Math.round(e.grade/e.word.length),"%)"),r.a.createElement("div",null,"word: ",e.word),r.a.createElement("div",null,"time: ",e.time," seconds"))}))))};var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(w,null))},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(t,e)}))}}()}},[[46,1,2]]]);
//# sourceMappingURL=main.4a2c456f.chunk.js.map