(this["webpackJsonpreact-food-recipe"]=this["webpackJsonpreact-food-recipe"]||[]).push([[0],{23:function(e,c,t){},41:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t(2),r=t(14),s=t.n(r),i=t(4),o=t.n(i),u=t(15),d=t(5),l=(t(23),function(e){var c=e.search,t=e.onInputChange,a=e.onSearchClick;return Object(n.jsxs)("div",{className:"jumbotron",children:[Object(n.jsxs)("h1",{className:"display-1",children:[Object(n.jsx)("i",{className:"material-icons brand-icon",children:"fastfood"}),"Food Recipes"]}),Object(n.jsxs)("div",{className:"input-group w-50 mx-auto",children:[Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Search Recipe Here...",value:c,onChange:t}),Object(n.jsx)("div",{className:"input-group-append",children:Object(n.jsx)("button",{className:"btn btn-dark",onClick:a,children:"Search Recipe"})})]})]})}),j=function(e){var c=e.name,t=e.image,a=e.ingredientLines;return Object(n.jsxs)("div",{className:"card py-2 text-center",children:[Object(n.jsx)("img",{src:t,className:"img-fluid w-50 mx-auto rounded-circle"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("h5",{children:[" ",c]})}),Object(n.jsxs)("ul",{className:"list-group list-group-flush",children:["(",a.map((function(e){return Object(n.jsx)("li",{className:"list-group-item",children:e})}))]})]})},p=function(e){var c=e.recipes;return Object(n.jsx)("div",{className:"card-column",children:c.map((function(e){return Object(n.jsx)(j,{name:e.recipe.label,image:e.recipe.image,ingredientLines:e.recipe.ingredientLines},100*Math.random())}))})},b=t(16),m=t.n(b),h=function(){var e=Object(a.useState)(""),c=Object(d.a)(e,2),t=c[0],r=c[1],s=Object(a.useState)([]),i=Object(d.a)(s,2),j=i[0],b=i[1];Object(a.useEffect)((function(){h()}),[]);var h=function(){var e=Object(u.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("86750780","&app_key=").concat("353dfe9915f86f0190df5c6b0bfb60d1"));case 2:c=e.sent,b(c.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(l,{search:t,onInputChange:function(e){r(e.target.value)},onSearchClick:function(){h()}}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(p,{recipes:j})})]})};s.a.render(Object(n.jsx)(h,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.9db10f48.chunk.js.map