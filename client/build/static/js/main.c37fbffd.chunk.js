(this["webpackJsonpsolomon-eke-portfolio"]=this["webpackJsonpsolomon-eke-portfolio"]||[]).push([[0],{44:function(e){e.exports=JSON.parse('[{"id":1,"title":"","deployed":"","repo":"","image":"","description":"","techs":[]},{"id":2,"title":"","deployed":"","repo":"","image":"","description":"","techs":["Express.js","Handlebars.js","MySQL","Node.js","Socket.io"]},{"id":3,"title":"","deployed":"","repo":"","image":"tracker.png","description":"","techs":["Node.js","Inquirer.js","MySQL"]}]')},53:function(e,a,t){e.exports=t(86)},58:function(e,a,t){},59:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),o=t.n(r),c=(t(58),t(59),t(60),t(4));var m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"pageTitle"},"About"),l.a.createElement("hr",null),l.a.createElement("img",{className:"img-fluid",id:"me",src:"/images/me.jpeg",alt:"Solomon"}),l.a.createElement("h3",null,"Hey, I'm Solomon EKe."),l.a.createElement("p",null,"Full Stack Web Developer leveraging a background in Cyber Security. Recently earned a certificate in Full Stack Development from Carleton University with skills in HTML, CSS, JavaScript, responsive web design, jQuery, Node.js, Express.js, and MySQL. Strengths in problem-solving, attention to detail, team-work and leadership. Excited to combine my natural creativity, curiosity, and passion with web development skills in order to generate meaningful, aesthetic, user-friendly apps and websites."),l.a.createElement("div",{className:"online row"},l.a.createElement("div",{className:"linkedin col-md-4"},l.a.createElement("a",{href:"https://www.linkedin.com/in/solomon-eke-0819a3189/",target:"_blank"},l.a.createElement("i",{className:"fab fa-linkedin fa-lg icon"}))),l.a.createElement("div",{className:"github col-md-4"},l.a.createElement("a",{href:"https://github.com/solomon-eke",target:"_blank"},l.a.createElement("i",{className:"fab fa-github icon"})))))},i=t(18),s=t(25),u=t(50),p=t(40),E=t.n(p);var d=function(){var e=Object(n.useState)({from:"",subject:"",text:""}),a=Object(u.a)(e,2),t=a[0],r=a[1],o=function(e){var a=e.target,n=a.name,l=a.value;r(Object(s.a)(Object(s.a)({},t),{},Object(i.a)({},n,l)),console.log(t))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"pageTitle"},"Contact"),l.a.createElement("hr",null),l.a.createElement("form",{className:"form"},l.a.createElement("label",null,"Name"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"John Smith",className:"form-control userName",name:"subject",id:"name",onChange:o}),l.a.createElement("br",null),l.a.createElement("label",null,"Email"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"example@gmail.com",className:"form-control userEmail",name:"from",id:"email",onChange:o}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"comment"},"Message"),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"5",className:"form-control",name:"text",id:"comment",onChange:o}),l.a.createElement("br",null),l.a.createElement("input",{type:"button",value:"Submit",className:"rounded",id:"submit",onClick:function(e){e.preventDefault(),console.log(t),E.a.post("/mail",t).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))}})))},f=t(41),g=t(42),h=t(52),b=t(51),v=t(90);var k=function(e){return l.a.createElement(v.a,{style:{width:"18rem"}},l.a.createElement(v.a.Img,{className:"image img-fulid",variant:"top",src:"/images/".concat(e.image)}),l.a.createElement(v.a.Body,null,l.a.createElement(v.a.Title,{className:"image-text"},l.a.createElement("a",{href:e.deployed,target:"blank"},e.title)),l.a.createElement(v.a.Text,null,l.a.createElement("a",{href:e.repo,target:"blank"},"Repository"),l.a.createElement("br",null),l.a.createElement("span",{className:"projectDescription"},e.description),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("strong",null,"Technologies:"),e.techs.map((function(e){return l.a.createElement("li",null,e)})))))},N=t(44),y=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(f.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={projects:N},e}return Object(g.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"pageTitle"},"Portfolio"),l.a.createElement("hr",null),this.state.projects.map((function(e){return l.a.createElement(k,{key:e.id,title:e.title,description:e.description,deployed:e.deployed,repo:e.repo,image:e.image,techs:e.techs})})))}}]),t}(n.Component);var j=function(){return l.a.createElement("div",{className:"col-sm-11",id:"contentBox"},l.a.createElement(c.a,{exact:!0,path:"/",component:m}),l.a.createElement(c.a,{exact:!0,path:"/portfolio",component:Object(c.f)(y)}),l.a.createElement(c.a,{exact:!0,path:"/contact",component:d}))};var x=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(j,null)))};var w=function(){return l.a.createElement("main",{role:"main",className:"flex-shrink-0"},l.a.createElement(x,null))},S=t(88),O=t(14),C=t(89);var T=Object(c.f)((function(){var e=Object(c.e)();return l.a.createElement(C.a,{className:"ml-auto"},l.a.createElement(O.b,{to:"/",className:"/"===e.pathname==="about"?"nav-link active":"nav-link"},"About"),l.a.createElement(O.b,{to:"/portfolio",className:"/portfolio"===e.pathname?"nav-link active":"nav-link"},"Portfolio"),l.a.createElement(O.b,{to:"/contact",className:"/contact"===e.pathname?"nav-link active":"nav-link"},"Contact"))}));var F=function(){return l.a.createElement("header",null,l.a.createElement(S.a,{className:"nav1",collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light"},l.a.createElement(S.a.Brand,{className:"name"},"SOLOMON EKE"),l.a.createElement(S.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(S.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(T,null))))};var M=function(){return l.a.createElement("nav",{className:"navbar fixed-bottom navbar-dark bg-dark footer"},l.a.createElement("span",{className:"footer-text"},"phone: 613-408-6662 | email:"," ",l.a.createElement("a",{className:"footerEmail",href:"mailto:ekesolomon11@gmail.com"},"ekesolomon11@gmail.com")),l.a.createElement("span",{className:"footer-text"},"\xa9 2020 Solomon Eke. All rights reserved."))};var B=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,null,l.a.createElement(F,{fixed:"top"}),l.a.createElement(w,null),l.a.createElement(c.a,{exact:!0,path:"/mail",component:null}),l.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.c37fbffd.chunk.js.map