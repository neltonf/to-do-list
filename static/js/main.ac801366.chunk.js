(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),a=c(7),r=c.n(a),i=(c(13),c(3)),o=(c(14),c(8)),u=c(0),l=function(t){var e=t.userText,c=t.setUserText,n=t.setTask,s=t.task,a=t.setStatus;return Object(u.jsxs)("form",{className:"form-wrapper",children:[Object(u.jsx)("input",{className:"form-input",value:e,onChange:function(t){c(t.target.value)},type:"text"}),Object(u.jsx)("button",{className:"form-btn",onClick:function(t){t.preventDefault(),n([].concat(Object(o.a)(s),[{text:e,completed:!1,id:1e3*Math.random()}])),c("")},type:"submit",children:"DONE"}),Object(u.jsx)("select",{className:"form-select",onChange:function(t){a(t.target.value)},children:["ALL","DONE","REMAINING"].map((function(t){return Object(u.jsx)("option",{children:t},t)}))})]})},j=c(6);var d=function(t){var e=t.task,c=t.tasks,n=t.setTask;return Object(u.jsxs)("span",{className:"todo",children:[Object(u.jsx)("div",{className:"list-item ".concat(e.completed?"completed":""),children:e.text}),Object(u.jsx)("button",{onClick:function(){n(c.map((function(t){return t.id===e.id?Object(j.a)(Object(j.a)({},t),{},{completed:!t.completed}):t})))},className:"done-btn",children:"DONE"}),Object(u.jsx)("button",{onClick:function(){n(c.filter((function(t){return t.id!==e.id})))},className:"delete-btn",children:"DELETE"})]})},b=function(t){var e=t.tasks,c=t.setTask,n=t.filter;return Object(u.jsx)("div",{className:"todo-wrapper",children:Object(u.jsx)("ul",{className:"list-group",children:n.map((function(t){return Object(u.jsx)(d,{task:t,tasks:e,setTask:c},t.id)}))})})};var f=function(){var t=Object(n.useState)(),e=Object(i.a)(t,2),c=e[0],s=e[1],a=Object(n.useState)([]),r=Object(i.a)(a,2),o=r[0],j=r[1],d=Object(n.useState)("ALL"),f=Object(i.a)(d,2),O=f[0],m=f[1],p=Object(n.useState)([]),x=Object(i.a)(p,2),h=x[0],k=x[1];return Object(n.useEffect)((function(){!function(){switch(O){case"DONE":k(o.filter((function(t){return!0===t.completed})));break;case"REMAINING":k(o.filter((function(t){return!1===t.completed})));break;default:k(o)}}()}),[o,O]),Object(u.jsx)("div",{className:"app",children:Object(u.jsxs)("div",{className:"container-center",children:[Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:"To-Do LIST"})}),Object(u.jsxs)("main",{children:[Object(u.jsx)(l,{userText:c,setUserText:s,task:o,setTask:j,setStatus:m}),Object(u.jsx)(b,{tasks:o,setTask:j,setStatus:m,filter:h})]})]})})},O=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;c(t),n(t),s(t),a(t),r(t)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.ac801366.chunk.js.map