(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(8),c=n.n(i),s=n(9),l=n(2),u=n(3),o=n(4),h=n(6),d=n(5),b=n(18),j=n(0),m=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={id:Object(b.a)(),name:"",number:""},e.handleChange=function(t){e.setState(Object(l.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.handleSubmit(e.state),e.setState({name:"",number:""})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(j.jsx)("input",{name:"name",type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:this.state.name}),Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:this.state.number}),Object(j.jsx)("button",{type:"submit",className:"btnStyle",children:"Add"})]})}}]),n}(a.Component),f=function(e){var t=e.handleChange,n=e.filter;return Object(j.jsxs)("div",{className:"filterStyle",children:[Object(j.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),Object(j.jsx)("input",{id:"filter",name:"filter",type:"text",className:"px-4 py-3 rounded-md",onChange:t,value:n})]})},O=function(e){var t=e.item,n=e.handleDelete,a=t.name,r=t.number;return Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"flex justify-content-between",children:[Object(j.jsxs)("span",{children:[" ",a,":",r]}),Object(j.jsx)("button",{onClick:n,children:"Delete"})]})})},p=function(e){var t=e.items,n=e.handleDelete;return Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)(O,{item:e,handleDelete:function(){return n(e.id)}},e.id)}))})},x=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={items:[],filter:""},e.handleDelete=function(t){e.setState((function(e){return{items:e.items.filter((function(e){return e.id!==t}))}}))},e.handleChange=function(t){e.setState(Object(l.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){if(t)if(e.state.items.some((function(e){return e.name===t.name})))alert("Contact "+t.name);else{var n={id:Object(b.a)(),name:t.name,number:t.number};e.setState((function(e){return{items:[n].concat(Object(s.a)(e.items))}}))}else alert("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c!")},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.items,n=e.filter,a=n.toLowerCase().trim(),r=t.filter((function(e){return e.name.toLowerCase().includes(a)}));return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(m,{handleSubmit:this.handleSubmit}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(f,{filter:n,handleChange:this.handleChange}),Object(j.jsx)(p,{items:r,handleDelete:this.handleDelete})]})}}]),n}(a.Component),v=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(x,{})})};n(16);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3494eb62.chunk.js.map