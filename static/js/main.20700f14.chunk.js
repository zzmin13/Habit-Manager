(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),s=n.n(r),o=(n(16),n(9)),i=n(6),l=n(2),h=n(3),u=n(5),b=n(4),d=(n(17),n(0)),j=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.habit,t=e.name,n=e.count;return console.log("habit : ".concat(t)),Object(d.jsxs)("li",{className:"habit",children:[Object(d.jsx)("span",{className:"habit-name",children:t}),Object(d.jsx)("span",{className:"habit-count",children:n}),Object(d.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(d.jsx)("i",{className:"fas fa-minus-square"})}),Object(d.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.PureComponent),p=Object(a.memo)((function(e){var t=c.a.createRef();return console.log("habitAddForm"),Object(d.jsxs)("form",{className:"add-form",onSubmit:function(n){n.preventDefault(),e.onAdd(t.current.value),t.current.value=""},children:[Object(d.jsx)("input",{ref:t,className:"add-input",type:"text",name:"habitText",placeholder:"habit"}),Object(d.jsx)("button",{className:"add-button",children:"Add"})]})})),m=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).onReset=function(){e.props.onReset()},e}return Object(h.a)(n,[{key:"render",value:function(){return console.log("resetBtn"),Object(d.jsx)("button",{className:"reset-button",onClick:this.onReset,children:"Reset All"})}}]),n}(a.PureComponent),f=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(t){e.props.onIncrement(t)},e.handleDecrement=function(t){e.props.onDecrement(t)},e.handleDelete=function(t){e.props.onDelete(t)},e.handleAdd=function(t){e.props.onAdd(t)},e.handleReset=function(){e.props.onReset()},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.habits;return console.log("habits"),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{onAdd:this.handleAdd}),t.map((function(t){return Object(d.jsx)(j,{habit:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete},t.id)})),Object(d.jsx)(m,{onReset:this.handleReset})]})}}]),n}(a.Component),O=(n(10),function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.totalCount;return console.log("navbar"),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)("i",{className:"fas fa-heart navbar-logo"}),Object(d.jsx)("span",{className:"navbar-name",children:"Habit Manager"}),Object(d.jsx)("span",{className:"navbar-count",children:e})]})})}}]),n}(a.PureComponent)),v=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},e.handleIncrement=function(t){var n=e.state.habits.map((function(e){return t.id===e.id?Object(i.a)(Object(i.a)({},e),{},{count:e.count+1}):e}));e.setState({habits:n})},e.handleDecrement=function(t){var n=e.state.habits.map((function(e){return t.id===e.id?Object(i.a)(Object(i.a)({},e),{},{count:e.count-1<0?0:e.count-1}):e}));e.setState({habits:n})},e.handleDelete=function(t){var n=e.state.habits.filter((function(e){return e.id!==t.id}));e.setState({habits:n})},e.handleAdd=function(t){var n=[].concat(Object(o.a)(e.state.habits),[{id:Date.now(),name:t,count:0}]);e.setState({habits:n})},e.handleReset=function(){var t=Object(o.a)(e.state.habits).map((function(e){return 1!==e.count?Object(i.a)(Object(i.a)({},e),{},{count:0}):e}));e.setState({habits:t})},e}return Object(h.a)(n,[{key:"render",value:function(){return console.log("app"),Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{totalCount:this.state.habits.filter((function(e){return 0!==e.count})).length}),Object(d.jsx)(f,{habits:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handleReset})]})}}]),n}(a.Component);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.20700f14.chunk.js.map