(this["webpackJsonpcovid-pro-frontend"]=this["webpackJsonpcovid-pro-frontend"]||[]).push([[0],{40:function(e,t,n){},61:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(29),a=n.n(c),o=(n(40),n(41),n(10)),j=n.n(o),b=n(13),i=n(5),u=n(4),l=n(2),O=n(11),h=n.n(O),x=(n(61),Object(r.createContext)(null)),d=n(0);var p=function(){var e=Object(r.useContext)(x).userData,t=Object(l.f)();return Object(r.useEffect)((function(){e.user||t.push("/login")}),[]),Object(d.jsx)("div",{children:e.user?Object(d.jsxs)("div",{className:"Dashboard",children:[Object(d.jsxs)("h1",{children:["Welcome to ",e.user.shopName]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),console.log(e.user),Object(d.jsx)("a",{className:"btn btn-primary",href:"/facemask",role:"button",children:" Checking Process "}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{className:"btn btn-primary",href:"/viewdata",role:"button",children:" View Data "}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{className:"btn btn-primary",href:"/announcement",role:"button",children:" Announcements "}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"You are not logged in"}),Object(d.jsx)(u.b,{to:"/login",children:"Login"})]})})},m=n(32),f=n(33),g=n(35),v=n(34);var k=function(){var e=Object(r.useContext)(x),t=e.userData,n=e.setUserData,s=Object(l.f)();return Object(d.jsx)("nav",{className:"auth-options",children:t.user?Object(d.jsx)("button",{className:"btn btn-primary mr-2",onClick:function(){n({token:void 0,user:void 0}),localStorage.setItem("auth-token","")},children:"Logout"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{className:"btn btn-primary mr-2",onClick:function(){return s.push("/register")},children:"Sign Up"}),Object(d.jsx)("button",{className:"btn btn-primary mr-2",onClick:function(){return s.push("/login")},children:"Login"})]})})},w=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)(u.b,{to:"/",children:Object(d.jsx)("h2",{className:"title",children:"Covid Pro"})}),Object(d.jsx)(k,{})]})}}]),n}(r.Component);var y=function(){var e=Object(r.useContext)(x).userData,t=Object(l.f)();return Object(r.useEffect)((function(){e.user||t.push("/login")}),[]),Object(d.jsx)("div",{children:e.user?Object(d.jsxs)(d.Fragment,{children:[console.log(e.user),console.log(e.user.shopName),console.log(e.user.shopOwner),Object(d.jsx)(p,{})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"You are not logged in"}),Object(d.jsx)(u.b,{to:"/login",children:"Login"})]})})};var C=function(e){return Object(d.jsxs)("div",{className:"error-notice",children:[Object(d.jsx)("span",{children:e.message}),Object(d.jsx)("button",{onClick:e.clearError,children:"X"})]})};var N=function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(),a=Object(i.a)(c,2),o=a[0],u=a[1],O=Object(r.useState)(),p=Object(i.a)(O,2),m=p[0],f=p[1],g=Object(r.useState)(),v=Object(i.a)(g,2),k=v[0],w=v[1],y=Object(r.useState)(),N=Object(i.a)(y,2),S=N[0],D=N[1],E=Object(r.useState)(),F=Object(i.a)(E,2),I=F[0],L=F[1],P=Object(r.useState)(),U=Object(i.a)(P,2),M=U[0],Y=U[1],R=Object(r.useState)(),V=Object(i.a)(R,2),W=V[0],A=V[1],B=Object(r.useContext)(x).setUserData,J=Object(l.f)(),X=function(){var e=Object(b.a)(j.a.mark((function e(t){var r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,r={email:n,password:o,passwordCheck:m,shopName:k,shopOwner:S,shopAddress:I,contactNumber:M},e.next=5,h.a.post("http://localhost:5000/users/register",r);case 5:return e.next=7,h.a.post("http://localhost:5000/users/login",{email:n,password:o});case 7:s=e.sent,B({token:s.data.token,user:s.data.user}),localStorage.setItem("auth-token",s.data.token),J.push("/"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),e.t0.response.data.msg&&A(e.t0.response.data.msg);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"register",children:[Object(d.jsx)("h2",{children:"Register"}),Object(d.jsx)("br",{}),W&&Object(d.jsx)(C,{message:W,clearError:function(){return A(void 0)}}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{onSubmit:X,children:[Object(d.jsx)("label",{children:"Email: "}),Object(d.jsx)("input",{type:"email",id:"email",onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Password: "}),Object(d.jsx)("input",{type:"password",id:"password",onChange:function(e){return u(e.target.value)}}),Object(d.jsx)("input",{type:"password",placeholder:"Confirm password",onChange:function(e){return f(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Shop name:  "}),Object(d.jsx)("input",{type:"text",id:"shop-name",onChange:function(e){return w(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Shop owner: "}),Object(d.jsx)("input",{type:"text",id:"shop-owner",onChange:function(e){return D(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Shop address: "}),Object(d.jsx)("input",{type:"text",id:"shop-address",onChange:function(e){return L(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Contact number: "}),Object(d.jsx)("input",{type:"text",id:"contact-number",onChange:function(e){return Y(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"submit",value:"Register",className:"btn btn-primary"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})]})};var S=function(){var e=Object(r.useState)(),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(),a=Object(i.a)(c,2),o=a[0],u=a[1],O=Object(r.useState)(),p=Object(i.a)(O,2),m=p[0],f=p[1],g=Object(r.useContext)(x).setUserData,v=Object(l.f)(),k=function(){var e=Object(b.a)(j.a.mark((function e(t){var r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,r={email:n,password:o},e.next=5,h.a.post("http://localhost:5000/users/login",r);case 5:s=e.sent,g({token:s.data.token,user:s.data.user}),localStorage.setItem("auth-token",s.data.token),v.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response.data.msg&&f(e.t0.response.data.msg);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)("h2",{children:"Login"}),Object(d.jsx)("br",{}),m&&Object(d.jsx)(C,{message:m,clearError:function(){return f(void 0)}}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{onSubmit:k,children:[Object(d.jsx)("label",{children:"Email: "}),Object(d.jsx)("input",{type:"email",id:"email",onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Password: "}),Object(d.jsx)("input",{type:"password",id:"password",onChange:function(e){return u(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary"})]})]})};var D=function(){var e=Object(r.useContext)(x).userData,t=Object(l.f)();return Object(r.useEffect)((function(){null===e.user&&(console.log("NUll"),t.push("/"))}),[e.user,t]),Object(d.jsx)("div",{children:e.user?Object(d.jsxs)("div",{className:"FaceMask",children:[console.log("Mask"),console.log(e.user),Object(d.jsx)("h1",{children:"Scan Face Mask"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{className:"btn btn-primary",href:"/next",role:"button",children:" Checking Process "}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"You are not logged in"}),Object(d.jsx)(u.b,{to:"/login",children:"Login"})]})})};var E=function(){var e=Object(r.useContext)(x).userData,t=Object(l.f)();return Object(r.useEffect)((function(){null===e.user&&(console.log("NUll"),t.push("/"))}),[e.user,t]),Object(d.jsx)("div",{children:e.user?Object(d.jsxs)("div",{className:"FaceMask",children:[console.log("Mask"),console.log(e.user),Object(d.jsx)("h1",{children:"View Data"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{className:"btn btn-primary",href:"/staffinfo",role:"button",children:" Staff Info "}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{className:"btn btn-primary",href:"/customerdata",role:"button",children:" Customer Data "}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{className:"btn btn-primary",href:"/covidcases",role:"button",children:" Potential Covid Cases "}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{className:"btn btn-primary",href:"/dailyreport",role:"button",children:" Daily Report "}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"You are not logged in"}),Object(d.jsx)(u.b,{to:"/login",children:"Login"})]})})};var F=function(){var e=Object(r.useState)({token:void 0,user:void 0}),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=localStorage.getItem("auth-token"))&&(localStorage.setItem("auth-token",""),t=""),e.next=4,h.a.post("http://localhost:5000/users/tokenIsValid",null,{headers:{"x-auth-token":t}});case 4:if(!e.sent.data){e.next=10;break}return e.next=8,h.a.get("http://localhost:5000/users/",{headers:{"x-auth-token":t}});case 8:n=e.sent,s({token:t,user:n.data});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsx)(u.a,{children:Object(d.jsxs)(x.Provider,{value:{userData:n,setUserData:s},children:[Object(d.jsx)(w,{}),Object(d.jsx)("br",{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:y}),Object(d.jsx)(l.a,{path:"/dashboard",component:p}),Object(d.jsx)(l.a,{path:"/register",component:N}),Object(d.jsx)(l.a,{path:"/login",component:S}),Object(d.jsx)(l.a,{path:"/facemask",component:D}),Object(d.jsx)(l.a,{path:"/viewdata",component:E})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.ba044e4d.chunk.js.map