import './polyfills.server.mjs';
import{A as f,B as O,E as v,I as w,L as y,M as D,a as l,b,c as _,d,e as g,f as M,g as u,h as p,i as n,j as e,k as a,l as h,m as k,n as S,o as t,p as C,q as s,x as P,z as E}from"./chunk-2QN4GKLC.mjs";var T=(()=>{class i{constructor(){this.title="teste"}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=l({type:i,selectors:[["app-root"]],standalone:!0,features:[s],decls:1,vars:0,template:function(o,m){o&1&&a(0,"router-outlet")},dependencies:[D,w]})}}return i})();var q=["*"],x=(()=>{class i{constructor(){this.target="_self"}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=l({type:i,selectors:[["app-link"]],inputs:{href:"href",target:"target"},standalone:!0,features:[s],ngContentSelectors:q,decls:2,vars:2,consts:[[1,"link",3,"href"]],template:function(o,m){o&1&&(k(),n(0,"a",0),S(1),e()),o&2&&(p("href",m.href,d),u("target",m.target?m.target:null))},styles:[".link[_ngcontent-%COMP%]{color:#04d361;text-decoration:none;font-weight:700;border-bottom:2px solid transparent;transition:border-color .3s ease,color .3s ease}.link[_ngcontent-%COMP%]:focus, .link[_ngcontent-%COMP%]:active{outline:none;color:#595965}.link[_ngcontent-%COMP%]:visited{color:#04d361}.link[_ngcontent-%COMP%]:hover{color:#f0f5fe;border-bottom-color:#04d361}"]})}}return i})();var F=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=l({type:i,selectors:[["app-home"]],standalone:!0,features:[s],decls:19,vars:0,consts:[[1,"home"],["src","assets/img/avatar.png","alt","Foto de Guil",1,"avatar"],["href","/about",1,"link"],[1,"ToDoList"]],template:function(o,m){o&1&&(n(0,"section",0),a(1,"img",1),n(2,"h1"),t(3,"Guil"),e(),n(4,"p"),t(5,"Desenvolvedor de Software"),e(),n(6,"p"),t(7,"Me conhe\xE7a clicando "),n(8,"app-link",2),t(9,"aqui!"),e()(),n(10,"section",3)(11,"h2"),t(12,"TODO"),e(),n(13,"p"),t(14,"Atualizar Descri\xE7\xF5es"),e(),n(15,"p"),t(16,"Atualizar GitHub (Yuki0.1.0, RPGBot)"),e(),n(17,"p"),t(18,"Atualizar Linkedin"),e()()())},dependencies:[f,x],styles:[".home[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;text-align:center;background-color:#0c0d12}.home[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{border-radius:50%;width:150px;height:150px;object-fit:cover;margin-bottom:20px}.home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4rem;margin:0;color:#f0f5fe}.home[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;margin:0;color:#f0f5fe}.home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem;color:#a6a7a8}"]})}}return i})();var z=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=l({type:i,selectors:[["app-skill-list"]],standalone:!0,features:[s],decls:15,vars:0,consts:[[1,"skill-list"]],template:function(o,m){o&1&&(n(0,"ul",0)(1,"li"),t(2,"Adaptabilidade"),e(),n(3,"li"),t(4,"Comunica\xE7\xE3o"),e(),n(5,"li"),t(6,"Criatividade"),e(),n(7,"li"),t(8,"Ingl\xEAs Fluente"),e(),n(9,"li"),t(10,"Lideran\xE7a"),e(),n(11,"li"),t(12,"Trabalho em Equipe"),e(),n(13,"li"),t(14,"Organiza\xE7\xE3o"),e()())},styles:[".skill-list[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:15px;flex-wrap:wrap;padding-left:0}.skill-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background-color:#595965;padding:10px 15px;border-radius:5px;list-style:none;font-size:.9rem;font-weight:700;cursor:default;-webkit-user-select:none;user-select:none;transition:background-color .1s ease}.skill-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#04d361;color:#f0f5fe}"]})}}return i})();function J(i,G){if(i&1&&(n(0,"a",2),t(1),e()),i&2){let r=h();p("href",r.href,d),u("target",r.target),g(),C(r.text)}}function U(i,G){if(i&1&&(n(0,"button",3),t(1),e()),i&2){let r=h();p("disabled",r.disabled),g(),C(r.text)}}var A=(()=>{class i{constructor(){this.target="_self",this.disabled=!1}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=l({type:i,selectors:[["app-button"]],inputs:{text:"text",href:"href",target:"target",disabled:"disabled"},standalone:!0,features:[s],decls:2,vars:2,consts:[["class","button",3,"href",4,"ngIf"],["class","button",3,"disabled",4,"ngIf"],[1,"button",3,"href"],[1,"button",3,"disabled"]],template:function(o,m){o&1&&M(0,J,2,3,"a",0)(1,U,2,2,"button",1),o&2&&(p("ngIf",m.href),g(),p("ngIf",!m.href))},dependencies:[f,E],styles:["a[_ngcontent-%COMP%]{display:inline-block;white-space:nowrap;text-align:center;text-overflow:ellipsis;background-color:#04d361;color:#f0f5fe;padding:.625rem 1.25rem;border-radius:5px;text-decoration:none;font-weight:700;transition:background-color .3s ease}a[_ngcontent-%COMP%]:hover{background-color:#595965}button[_ngcontent-%COMP%]{text-align:center;margin-right:1rem;padding-bottom:5rem}"]})}}return i})();var j=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=l({type:i,selectors:[["app-about"]],standalone:!0,features:[s],decls:33,vars:0,consts:[[1,"about-wrapper"],[1,"about-intro"],["src","assets/icons/circuit-board-square.png",1,"board"],["src","assets/img/avatar.png","alt","Foto de Guil",1,"avatar"],[1,"about-me"],[1,"skills"],[1,"experience"],[1,"timeline"],[1,"buttons"],["href","competence","text","Veja Minhas Compent\xEAncias"],["href","contact","text","Entre Em Contato"],["src","../../assets/icons/circuit-board.png",1,"experience-icon"]],template:function(o,m){o&1&&(n(0,"div",0)(1,"section",1),a(2,"img",2)(3,"img",3),n(4,"section",4)(5,"h1"),t(6,"Sobre Mim"),e(),n(7,"p"),t(8,"Sou um desenvolvedor apaixonado por programa\xE7\xE3o e por criar solu\xE7\xF5es criativas. Meu primeiro contato com a tecnologia aconteceu aos 13 anos, e desde ent\xE3o, descobri um mundo de possibilidades infinitas. A ideia de transformar ideias em realidade, seja programando, compondo ou desenvolvendo, \xE9 o que me motiva a continuar sempre buscando novos desafios."),e()()(),n(9,"section",5)(10,"h2"),t(11,"Minhas Habilidades"),e(),a(12,"app-skill-list"),e(),n(13,"section",6)(14,"h2"),t(15,"Experi\xEAncias"),e(),n(16,"ul",7)(17,"li")(18,"strong"),t(19,"Desenvolvedor Analista Junior"),e(),t(20," - NDD Tech Brasil (2024 - Presente)"),e(),n(21,"li")(22,"strong"),t(23,"Est\xE1gio e Lider de Equipe"),e(),t(24," - Academia do Programador (2023 - 2024)"),e(),n(25,"li")(26,"strong"),t(27,"Bacharelado Ci\xEAncia da Computa\xE7\xE3o"),e(),t(28," - IFSC - C\xE2mpus Lages (2022 - 2025)"),e()(),n(29,"section",8),a(30,"app-button",9)(31,"app-button",10),e()(),a(32,"img",11),e())},dependencies:[A,z],styles:['.about-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;grid-template-areas:". about about about ." ". skill skill skill ." ". experience experience icon .";color:#a6a7a8;background-color:#0c0d12;height:100%;min-height:100vh}.about-wrapper[_ngcontent-%COMP%]   .about-intro[_ngcontent-%COMP%]{grid-area:about;padding-top:5rem;display:grid;grid-template-columns:1fr 2fr;grid-template-rows:1fr 1fr 1fr;grid-template-areas:"avatar text" "avatar text " "avatar text";align-items:center;text-align:center;margin-bottom:40px}.about-wrapper[_ngcontent-%COMP%]   .about-intro[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%]{grid-area:avatar;max-width:17.5rem;justify-self:start}.about-wrapper[_ngcontent-%COMP%]   .about-intro[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{grid-area:avatar;justify-self:end;border-radius:50%;width:15rem;height:15rem;object-fit:cover}.about-wrapper[_ngcontent-%COMP%]   .about-intro[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]{display:grid;justify-content:center;align-items:center;grid-area:text;grid-template-rows:1fr 1fr 1fr;grid-template-areas:"tittle" "text" "text"}.about-wrapper[_ngcontent-%COMP%]   .about-intro[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{grid-area:tittle;font-size:2.25rem;color:#04d361;margin-bottom:1rem}.about-wrapper[_ngcontent-%COMP%]   .about-intro[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{grid-area:text;font-size:1.25rem;line-height:1.6;max-width:700px;margin:0;text-align:left}.about-wrapper[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]{grid-area:skill;text-align:center;margin-bottom:40px}.about-wrapper[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;margin-bottom:20px;color:#f0f5fe}.about-wrapper[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]{grid-area:experience;margin-bottom:2.5rem;display:flex;flex-direction:column;justify-content:center;align-items:start}.about-wrapper[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.75rem;margin-bottom:20px;color:#f0f5fe}.about-wrapper[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]{list-style:none;padding-left:0}.about-wrapper[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:15px;font-size:1rem}.about-wrapper[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#04d361}.about-wrapper[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:left;flex-wrap:wrap;gap:1rem}.about-wrapper[_ngcontent-%COMP%]   .experience-icon[_ngcontent-%COMP%]{max-width:70%;grid-area:icon;align-self:start;justify-self:center}@media (max-width: 767px){.about-wrapper[_ngcontent-%COMP%]   .experience-icon[_ngcontent-%COMP%]{display:none}}']})}}return i})();var L=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=l({type:i,selectors:[["app-competence"]],standalone:!0,features:[s],decls:100,vars:0,consts:[[1,"skills-container"],[1,"skills-intro"],[1,"intro"],[1,"caption"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-chevron-right"],["fill-rule","evenodd","d","M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"],[1,"skills-list"],[1,"skills"],["target","_blank","href","https://docs.oracle.com/en/java/index.html"],["target","_blank","href","https://learn.microsoft.com/en-us/dotnet/csharp/"],["target","_blank","href","https://www.python.org/"],["target","_blank","href","https://developer.mozilla.org/en-US/docs/Web/HTML"],["target","_blank","href","https://developer.mozilla.org/en-US/docs/Web/CSS"],["target","_blank","href","https://sass-lang.com/"],["target","_blank","href","https://developer.mozilla.org/en-US/docs/Web/JavaScript"],["target","_blank","href","https://www.typescriptlang.org/"],["target","_blank","href","https://angular.io/cli"],["target","_blank","href","https://dotnet.microsoft.com/apps/aspnet"],["target","_blank","href","https://learn.microsoft.com/en-us/ef/core/"],["target","_blank","href","https://getbootstrap.com/"],["target","_blank","href","https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest"],["target","_blank","href","https://junit.org/junit5/docs/current/user-guide/"],["target","_blank","href","https://jasmine.github.io/"],["target","_blank","href","https://code.visualstudio.com/"],["target","_blank","href","https://visualstudio.microsoft.com/"],["target","_blank","href","https://netbeans.apache.org/"],["target","_blank","href","https://git-scm.com/"],["target","_blank","href","https://github.com/"],["target","_blank","href","https://www.microsoft.com/en-us/sql-server/"],["target","_blank","href","https://martinfowler.com/tags/domain%20driven%20design.html"],["target","_blank","href","https://www.agilealliance.org/glossary/tdd"],["target","_blank","href","https://www.scrum.org/"],["target","_blank","href","https://www.atlassian.com/agile/kanban"]],template:function(o,m){o&1&&(n(0,"div",0)(1,"section",1)(2,"div",2)(3,"h2"),t(4,"Tecnologias que J\xE1 Utilizei"),e(),n(5,"div",3),b(),n(6,"svg",4),a(7,"path",5),e(),_(),n(8,"h3"),t(9," Conhe\xE7a as Ferramentas e Tecnologias Com as Quais Trabalhei "),e()()(),n(10,"div",6)(11,"h3"),t(12,"Linguagens de Programa\xE7\xE3o"),e(),n(13,"p",7)(14,"app-link",8),t(15,"Java"),e(),t(16," - "),n(17,"app-link",9),t(18,"C#"),e(),t(19," - "),n(20,"app-link",10),t(21,"Python"),e(),t(22," - "),n(23,"app-link",11),t(24,"HTML"),e(),t(25," - "),n(26,"app-link",12),t(27,"CSS"),e(),t(28," | "),n(29,"app-link",13),t(30,"SCSS"),e(),t(31," - "),n(32,"app-link",14),t(33,"JavaScript"),e(),t(34," | "),n(35,"app-link",15),t(36,"TypeScript"),e()(),a(37,"br"),n(38,"h3"),t(39,"Frameworks e Bibliotecas"),e(),n(40,"p",7)(41,"app-link",16),t(42,"Angular CLI"),e(),t(43," - "),n(44,"app-link",17),t(45,"ASP.NET Core"),e(),t(46," - "),n(47,"app-link",18),t(48,"Entity Framework Core"),e(),t(49," - "),n(50,"app-link",19),t(51,"Bootstrap"),e()(),a(52,"br"),n(53,"h3"),t(54,"Ferramentas de Testes"),e(),n(55,"p",7)(56,"app-link",20),t(57,"MSTest"),e(),t(58," - "),n(59,"app-link",21),t(60,"JUnit"),e(),t(61," - "),n(62,"app-link",22),t(63,"Jasmine"),e()(),a(64,"br"),n(65,"h3"),t(66,"Ferramentas e Tecnologias"),e(),n(67,"p",7)(68,"app-link",23),t(69,"VS Code"),e(),t(70," - "),n(71,"app-link",24),t(72,"Microsoft Visual Studio"),e(),t(73," - "),n(74,"app-link",25),t(75,"Netbeans"),e(),t(76," - "),n(77,"app-link",26),t(78,"Git"),e(),t(79," | "),n(80,"app-link",27),t(81,"GitHub"),e(),t(82," - "),n(83,"app-link",28),t(84,"Microsoft SQL Server"),e()(),a(85,"br"),n(86,"h3"),t(87,"Metodologias"),e(),n(88,"p",7)(89,"app-link",29),t(90,"DDD"),e(),t(91," - "),n(92,"app-link",30),t(93,"TDD"),e(),t(94," - "),n(95,"app-link",31),t(96,"Scrum"),e(),t(97," - "),n(98,"app-link",32),t(99,"Kanban"),e()()()()())},dependencies:[x],styles:[".skills-container[_ngcontent-%COMP%]{background-color:#0c0d12;color:#f0f5fe;height:100%;min-height:100vh;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none}.skills-container[_ngcontent-%COMP%]   .skills-intro[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.skills-container[_ngcontent-%COMP%]   .skills-intro[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;color:#04d361;margin-bottom:0}.skills-container[_ngcontent-%COMP%]   .skills-intro[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;color:#595965}@media (max-width: 768px){.skills-container[_ngcontent-%COMP%]   .skills-intro[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:none}}.skills-container[_ngcontent-%COMP%]   .skills-intro[_ngcontent-%COMP%]   .skills-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#f0f5fe;margin-bottom:10px}"]})}}return i})();var I=[{path:"",component:F},{path:"about",component:j},{path:"competence",component:L},{path:"**",redirectTo:"",pathMatch:"full"}];var B={providers:[y(I)]};var R={providers:[v()]},H=P(B,R);var N=()=>O(T,H),kt=N;export{kt as a};