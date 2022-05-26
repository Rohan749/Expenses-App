(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(18),n(5)),s=n(2),i=n(1),r=(n(19),n(0));var u=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})};n(21),n(22),n(23);var j=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsxs)("div",{className:"expense-date__month",children:[" ",t," "]}),Object(r.jsxs)("div",{className:"expense-date__day",children:[" ",n," "]}),Object(r.jsxs)("div",{className:"expense-date__year",children:[" ",a," "]})]})},o=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(u,{className:"expense-item",children:[Object(r.jsx)(j,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsxs)("h2",{children:[" ",e.title," "]}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},d=(n(24),function(e){var t=e.items.map((function(e){return Object(r.jsx)(o,{title:e.title,date:e.date,amount:e.amount},e.id)}));return 0===e.items.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"No Expenses Found!"}):Object(r.jsx)("ul",{className:"expenses-list",children:t})}),b=(n(25),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.defaultValue,onChange:function(t){e.onChangeValue(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})}),x=n(9),v=(n(26),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),O=(n(27),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(v,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),m=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(r.jsx)(O,{dataPoints:n})};var h=function(e){var t=Object(i.useState)("2019"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.item.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(r.jsx)("div",{children:Object(r.jsxs)(u,{className:"expenses",children:[Object(r.jsx)(b,{defaultValue:a,onChangeValue:function(e){console.log(e),c(e)}}),Object(r.jsx)(m,{expenses:l}),Object(r.jsx)(d,{items:l})]})})},p=n(6),f=(n(28),n(29),function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(i.useState)(""),u=Object(s.a)(l,2),j=u[0],o=u[1],d=Object(i.useState)(""),b=Object(s.a)(d,2),x=b[0],v=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+j,date:new Date(x)};e.onSaveExpenseData(n),c(""),o(""),v("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},value:a})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",onChange:function(e){o(e.target.value)},value:j})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",onChange:function(e){v(e.target.value)},value:x})]})]}),Object(r.jsxs)("div",{className:"new-exppense__actions",children:[Object(r.jsx)("button",{onClick:e.onCancel,children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),_=function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!a&&Object(r.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(r.jsx)(f,{onCancel:function(){c(!1)},onSaveExpenseData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)}})]})},N=[{id:"e1",title:"Toilet Paper",amount:67.5,date:new Date(2022,4,12)},{id:"e2",title:"Amul Butter",amount:30.5,date:new Date(2022,9,12)},{id:"e3",title:"Biscuits",amount:89.4,date:new Date(2021,6,12)},{id:"e4",title:"Steel Plates",amount:10.5,date:new Date(2020,7,12)},{id:"e5",title:"Zomato",amount:15.5,date:new Date(2020,8,12)},{id:"e6",title:"Uncle Chips",amount:12.5,date:new Date(2020,9,12)},{id:"e7",title:"Pizza",amount:55.5,date:new Date(2021,1,12)}];var g=function(){var e=Object(i.useState)(N),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(_,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(r.jsx)(h,{item:n})]})};c.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(g,{}))}},[[30,1,2]]]);
//# sourceMappingURL=main.d6fb747c.chunk.js.map