(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),r=n(14),a=n.n(r),o=(n(24),n(25),n(15)),i=n(16),h=n(19),l=n(18),d=(n(26),n(1)),j=function(e){return Object(d.jsxs)("div",{className:"card-container",children:[Object(d.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(d.jsx)("h2",{children:e.monster.name},e.monster.id),Object(d.jsx)("p",{children:e.monster.email})]})},u=(n(28),function(e){return Object(d.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(d.jsx)(j,{monster:e},e.id)}))})}),m=(n(29),function(e){var t=e.placeholder,n=e.handleChange;return Object(d.jsx)("input",{type:"search",className:"search",placeholder:t,onChange:n})}),b=(n(30),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleChange=function(e){s.setState({searchField:e.target.value})},s.state={monsters:[{id:1,name:"Frankenstein"},{id:2,name:"Dracula"},{id:3,name:"Zombie"}],searchField:"",title:"Monsters Rolodex"},s}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=e.title,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:s}),Object(d.jsx)(m,{placeholder:"Search Monsters",handleChange:this.handleChange}),Object(d.jsxs)("p",{className:"search-tag",children:["Filter by Name: ",Object(d.jsx)("i",{children:n})]}),Object(d.jsx)(u,{monsters:c})]})}}]),n}(s.Component)),x=n(2),f=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Monster"})})},O=function(e){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(x.c,{children:[Object(d.jsx)(x.a,{exact:!0,path:"/",component:b}),Object(d.jsx)(x.a,{path:"/details",component:f})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))},g=n(11);a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g.a,{basename:"/monsters-rolodex",children:Object(d.jsx)(O,{})})}),document.getElementById("root")),p()}},[[39,1,2]]]);
//# sourceMappingURL=main.45bb8164.chunk.js.map