(this["webpackJsonpmetal-calculator"]=this["webpackJsonpmetal-calculator"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),l=c(3),i=c.n(l),n=c(2),o=(c(14),c(15),c(9)),r=c.n(o),u=c(1),d=function(e){var t=e.title,c=e.selected,a=e.onClick;return Object(u.jsx)("button",{className:r()("chip",{selected:c}),onClick:a,children:t})},h=c(6),m=[{id:1,code:"gold",img:"https://static8.depositphotos.com/1000128/859/i/600/depositphotos_8595716-stock-photo-stacks-of-gold-bars.jpg",title:"\u0417\u043e\u043b\u043e\u0442\u043e",finenessList:[{id:1,value:375,cash:90,checkingAccount:100},{id:2,value:575,cash:190,checkingAccount:250},{id:3,value:775,cash:290,checkingAccount:350}]},{id:2,code:"argent",img:"https://st.depositphotos.com/1187563/4173/i/600/depositphotos_41738915-stock-photo-stack-of-bank-silver-bars.jpg",title:"\u0421\u0435\u0440\u0435\u0431\u0440\u043e",finenessList:[{id:1,value:460,cash:290,checkingAccount:200},{id:2,value:700,cash:390,checkingAccount:350},{id:3,value:975,cash:490,checkingAccount:450}]},{id:3,code:"palladium",img:"https://st3.depositphotos.com/1001877/34917/i/600/depositphotos_349170978-stock-photo-palladium-bars-or-ingots-background.jpg",title:"\u041f\u0430\u043b\u043b\u0430\u0434\u0438\u0439",finenessList:[{id:1,value:800,cash:490,checkingAccount:400},{id:2,value:500,cash:590,checkingAccount:550},{id:3,value:375,cash:690,checkingAccount:650}]},{id:4,code:"platinum",img:"https://images11.popmeh.ru/upload/img_cache/766/7666779fb91dc5440bbf12938e462122_ce_1200x640x0x119_cropped_666x444.jpg",title:"\u041f\u043b\u0430\u0442\u0438\u043d\u0430",finenessList:[{id:1,value:300,cash:690,checkingAccount:600},{id:2,value:500,cash:790,checkingAccount:750},{id:3,value:275,cash:890,checkingAccount:850}]}],g=[{value:"cash",label:"\u041d\u0430\u043b\u0438\u0447\u043d\u044b\u0435"},{value:"checkingAccount",label:"\u041d\u0430 \u0440\u0430\u0441\u0447\u0451\u0442\u043d\u044b\u0439 \u0441\u0447\u0451\u0442"}],j=function(){var e=Object(a.useState)(m[0]),t=Object(n.a)(e,2),c=t[0],s=t[1],l=Object(a.useState)(m[0].img),i=Object(n.a)(l,2),o=i[0],r=i[1],j=Object(a.useState)(localStorage.getItem("fineness")),p=Object(n.a)(j,2),b=p[0],v=p[1],O=Object(a.useState)(localStorage.getItem("payment")),f=Object(n.a)(O,2),k=f[0],S=f[1],x=Object(a.useState)(localStorage.getItem("gramms")),_=Object(n.a)(x,2),N=_[0],I=_[1],A=Object(a.useState)(localStorage.getItem("sum")),y=Object(n.a)(A,2),J=y[0],C=y[1],L=function(e){v(e)};return Object(a.useEffect)((function(){var e=localStorage.getItem("metal");if(null!=e){var t=JSON.parse(e);s(t)}var c=localStorage.getItem("fineness");if(null!=c){var a=JSON.parse(c);v(a)}var l=localStorage.getItem("payment");if(null!=l){var i=JSON.parse(l);S(i)}null!==J&&C(J)}),[]),Object(u.jsxs)("div",{className:"calculator",children:[Object(u.jsx)("div",{className:"calculator__title",children:Object(u.jsx)("h2",{children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"})}),Object(u.jsxs)("div",{className:"calculator__content",children:[Object(u.jsx)("div",{className:"calculator__metal-image",children:Object(u.jsx)("img",{src:o,alt:""})}),Object(u.jsxs)("div",{className:"calculator__metals",children:[Object(u.jsx)("div",{className:"check-metal",children:m.map((function(e){return Object(u.jsx)(d,{title:e.title,selected:c.id===e.id,onClick:function(){return s(t=e),r(t.img),L(null),void C(null);var t}},e.id)}))}),Object(u.jsxs)("div",{className:"calculator__parameters ",children:[Object(u.jsx)("h2",{children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:"}),Object(u.jsx)(h.a,{className:"select",value:b,onChange:L,options:c.finenessList.map((function(e){return{value:e,label:e.value}})),placeholder:"\u041f\u0440\u043e\u0431\u0430 \u043c\u0435\u0442\u0430\u043b\u043b\u0430",required:!0}),Object(u.jsx)(h.a,{className:"select",value:k,onChange:function(e){S(e)},options:g,placeholder:"\u0421\u043f\u043e\u0441\u043e\u0431 \u0432\u044b\u043f\u043b\u0430\u0442\u044b",required:!0}),Object(u.jsx)("input",{type:"number",value:N,onChange:function(e){I(e.target.value)},placeholder:"\u0412\u0435\u0441 \u043c\u0435\u0442\u0430\u043b\u043b\u0430 (\u0432 \u0433\u0440\u0430\u043c\u043c\u0430\u0445)",required:!0})]}),Object(u.jsxs)("div",{className:"calculator__calculate",children:[J&&Object(u.jsxs)("h2",{children:["\u0418\u0442\u043e\u0433\u043e:",J]}),Object(u.jsx)("button",{disabled:!b||!k||!N,onClick:function(){var e=b.value[k.value]*parseInt(N);C(e),localStorage.setItem("metal",JSON.stringify(c)),localStorage.setItem("sum",e),localStorage.setItem("fineness",JSON.stringify(b)),localStorage.setItem("payment",JSON.stringify(k)),localStorage.setItem("gramms",N)},children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})]})]})]})]})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.ef9e41c8.chunk.js.map