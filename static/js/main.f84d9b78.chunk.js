(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{63:function(e,t,a){e.exports=a(76)},68:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(14),i=a.n(o),l=(a(68),a(5)),s=a(41),u=a(23),m=a(52);!function(e){e.HEADLINE="HEADLINE",e.BUSINESS="BUSINESS",e.ENTERTAINMENT="ENTERTAINMENT",e.HEALTH="HEALTH",e.SCIENCE="SCIENCE",e.SPORTS="SPORTS",e.TECHNOLOGY="TECHNOLOGY"}(n||(n={}));var h,E,d=["HEADLINE","BUSINESS","ENTERTAINMENT","HEALTH","SCIENCE","SPORTS","TECHNOLOGY"];function f(e){return function(t,a){t(function(e){return{type:h.SET_CATEGORY,category:e}}(e)),t(p(e))}}!function(e){e.SET_CATEGORY="SET_CATEGORY"}(h||(h={})),function(e){e.IS_ERROR="IS_ERROR",e.REQUEST_ARTICLES="REQUEST_ARTICLES",e.RECEIVE_ARTICLES="RECEIVE_ARTICLES"}(E||(E={}));var b="https://www.xiaoxihome.com/api/news?query=";function p(e){var t="\n        {\n            getNews(category: ".concat(e,") {\n                source,\n                author,\n                title,\n                description,\n                url,\n                urlToImage,\n                publishedAt,\n                content\n            }\n        }\n    ");return function(e){return e({type:E.REQUEST_ARTICLES}),fetch(b+encodeURIComponent(t)).then((function(e){return e.json()})).then((function(t){t.errors?e({type:E.IS_ERROR}):e(function(e){return{type:E.RECEIVE_ARTICLES,articles:e.slice()}}(t.data.getNews))}))}}var g={category:n.HEADLINE,articles:{isError:!1,isFetching:!0,articles:[]}};var v=Object(u.c)({category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.category,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.SET_CATEGORY:return n[t.category];default:return e}},articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.articles,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.IS_ERROR:return Object.assign({},e,{isError:!0});case E.REQUEST_ARTICLES:return Object.assign({},e,{isError:!1,isFetching:!0});case E.RECEIVE_ARTICLES:return Object.assign({},{isError:!1,isFetching:!1,articles:t.articles.slice()});default:return e}}}),O=g;var y=a(53),j=a(121),T=a(116),w=a(115),S=a(58),N=a(119),R=a(114),C=a(98),I=a(99),L=a(100),x=a(78),k=a(117),A=a(101),H=Object(y.a)((function(e){return{tab:{flexShrink:0,flexGrow:1,color:e.palette.primary.contrastText},toolbar:{textTransform:"uppercase"}}}));var _=function(e){var t=H(),a=function(t){e.dispatcher(function(e){return function(t,a){a().category!==e&&t(f(e))}}(t))};return c.a.createElement(C.a,{color:"primary",position:"static"},c.a.createElement(I.a,null,c.a.createElement(L.a,null,c.a.createElement(x.a,{align:"center",className:t.toolbar,variant:"h1",component:"h1"},"News Canada"))),c.a.createElement(k.a,{value:e.headers.indexOf(e.category),indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto"},e.headers.map((function(e,r){return c.a.createElement(A.a,{label:e,key:r,className:t.tab,onClick:function(){return a(n[e])}})}))))},M=a(15),B=a(13),D=a(102),G=a(103),U=a(104),F=a(118),Y=a(105),X=a(106),z=a(107),W=a(26),P=a(108),Q=a(109),V=a(110),J=a(112),q=a(113),$=a(57),K=a.n($),Z=a(38),ee=a(111);var te,ae=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)};!function(e){e.NULL="NULL",e.LEFT="LEFT",e.RIGHT="RIGHT"}(te||(te={}));var ne=function(e,t){var a=Object(r.useState)(0),n=Object(M.a)(a,2),c=n[0],o=n[1],i=Object(r.useState)(0),l=Object(M.a)(i,2),s=l[0],u=l[1],m=Object(r.useState)(te.NULL),h=Object(M.a)(m,2),E=h[0],d=h[1],f=Object(r.useState)(0),b=Object(M.a)(f,2),p=b[0],g=b[1];function v(e){o(e.changedTouches[0].clientX),u(e.changedTouches[0].clientY)}function O(e){var a=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY;Math.abs(a-c)>Math.abs(n-s)&&Math.abs(a-c)>t&&g(e.changedTouches[0].clientX-c)}function y(e){var a=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY;Math.abs(a-c)>Math.abs(n-s)&&Math.abs(a-c)>t&&d(a>c?te.RIGHT:te.LEFT),g(0)}return Object(r.useEffect)((function(){var t=e.current;if(t)return t.addEventListener("touchstart",v),t.addEventListener("touchend",y),t.addEventListener("touchmove",O),function(){t.removeEventListener("touchstart",v),t.removeEventListener("touchend",y),t.removeEventListener("touchmove",O)}})),{direction:E,dragDistance:p,resetSwipeStatus:function(){d(te.NULL)}}},re=Object(y.a)((function(e){return Object(j.a)(Object(l.a)({successSnackBar:{backgroundColor:Z.a[600]},wrapper:{width:"calc(100% - 40px)",margin:"20px"}},e.breakpoints.down("sm"),{wrapper:{width:"calc(100% - 16px)",margin:"8px"}}))}));function ce(e,t,a){return"calc(".concat(e," * ").concat(a.typography[t].fontSize," * ").concat(a.typography[t].lineHeight,")")}function oe(e,t){return Object(j.a)({root:{position:"relative","&:after":{content:"''",position:"absolute",bottom:0,right:0,width:"20%",height:ce(1,e,t),backgroundImage:"linear-gradient(to right, rgba(255, 255, 255, 0) , rgba(255, 255, 255, 1))",zIndex:10}}})}var ie={width:"100%",overflow:"hidden",position:"relative"},le=Object(y.a)((function(e){return Object(j.a)(Object(l.a)({media:Object(B.a)({height:"550px"},ie),skeleton:Object(B.a)({height:"550px"},ie),title:Object(B.a)({height:ce(1,"body1",e)},oe("body1",e).root,{},ie),source:Object(B.a)({height:ce(1,"body2",e)},ie),articleContent:Object(B.a)({height:ce(2,"body2",e)},oe("body2",e).root,{},ie),buttons:Object(B.a)({},ie)},e.breakpoints.down("sm"),{media:{height:"200px"},skeleton:{height:"200px"}}))})),se=Object(y.a)((function(e){return Object(j.a)(Object(l.a)({media:Object(B.a)({height:"200px"},ie),skeleton:Object(B.a)({height:"200px"},ie),title:Object(B.a)({height:ce(2,"body1",e)},oe("body1",e).root,{},ie),source:Object(B.a)({height:ce(1,"body2",e)},ie),articleContent:Object(B.a)({height:ce(3,"body2",e)},oe("body2",e).root,{},ie),buttons:Object(B.a)({},ie)},e.breakpoints.down("sm"),{}))}));function ue(e){var t=re(),a=Object(r.useState)(!1),n=Object(M.a)(a,2),o=n[0],i=n[1];function l(){i(!1)}return c.a.createElement(D.a,{className:e.className},c.a.createElement(G.a,{href:e.url,target:"_blank",rel:"noopener",underline:"none"},c.a.createElement(U.a,{size:"small",color:"primary"},"Learn more")),c.a.createElement(U.a,{size:"small",color:"primary",onClick:function(){ae(e.url),i(!0)}},"Share"),c.a.createElement(F.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:o,autoHideDuration:3e3,onClose:l},c.a.createElement(Y.a,{className:t.successSnackBar,message:c.a.createElement("span",{id:"client-snackbar"},"Link copied to clipboard"),action:[c.a.createElement(X.a,{key:"close","aria-label":"close",color:"inherit",onClick:l},c.a.createElement(K.a,null))]})))}function me(e){var t=Object(r.useRef)(null),a=function(e){var t=Object(r.useState)(!1),a=Object(M.a)(t,2),n=a[0],c=a[1],o=Date.now()-1e3;function i(){var t=Date.now();if(!(t-o<20)&&(o=t,e.current)){var a=e.current.getBoundingClientRect(),n=a.top+a.height<0,r=a.top>window.innerHeight;n||r||c(!0)}}return Object(r.useEffect)((function(){if(!n)return i(),document.addEventListener("scroll",i),function(){document.removeEventListener("scroll",i)}})),n}(t),n=Object(r.useState)(!1),o=Object(M.a)(n,2),i=o[0],l=o[1],s=!Object(z.a)(Object(W.a)().breakpoints.down("sm")),u=0===e.id||1===e.id,m=le(),h=se(),E=u?m:h;Object(r.useEffect)((function(){s&&setTimeout((function(){return l(!0)}),225)}),[]);var d=c.a.createElement(P.a,{item:!0,xs:12,md:u?6:3,ref:t},c.a.createElement(Q.a,{raised:!0},a&&e.urlToImage?c.a.createElement(V.a,{component:"img",alt:e.title,className:E.media,image:e.urlToImage,title:e.title}):c.a.createElement(ee.a,{variant:"rect",className:E.skeleton}),c.a.createElement(J.a,null,c.a.createElement(x.a,{gutterBottom:!0,variant:"body1",component:"h2",className:E.title},c.a.createElement(T.a,{fontWeight:700},e.title)),c.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p",className:E.source},c.a.createElement(T.a,{component:"span",fontWeight:700},e.source?e.source+" - ":e.author?e.author+" - ":"",function(e){var t=Date.now()-e.getTime();if(t<0)return"now";var a=Math.floor(t/6e4);if(a<=59)return"".concat(a," ").concat(1===a?"minute":"minutes"," ago");var n=Math.floor(t/36e5);if(n<=23)return"".concat(n," ").concat(1===n?"hour":"hours"," ago");var r=Math.floor(t/864e5);if(r<=30)return"".concat(r," ").concat(1===r?"day":"days"," ago");var c=Math.floor(t/2592e6);if(c<=12)return"".concat(c," ").concat(1===c?"month":"months"," ago");var o=Math.floor(t/31536e6);return"".concat(o," ").concat(1===o?"year":"years"," ago")}(new Date(e.publishedAt)))),c.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p",className:E.articleContent},e.content&&e.content.replace(/\[\+[0-9]+\schars\]/gi,""))),c.a.createElement(ue,{url:e.url,className:E.buttons})));return s?c.a.createElement(q.a,{in:!i||a},d):d}function he(e){return c.a.createElement(c.a.Fragment,null,e.articles.map((function(e,t){return c.a.createElement(me,Object.assign({},e,{key:t,id:t}))})))}var Ee=function(e){var t,a=re(),o=Object(r.useRef)(null),i=ne(o,20),l=i.direction,s=i.dragDistance,u=i.resetSwipeStatus;return Object(r.useEffect)((function(){return l===te.RIGHT?e.dispatcher((function(e,t){var a=t().category,r=d.indexOf(a);e(f(0===r?n[d[d.length-1]]:n[d[r-1]]))})):l===te.LEFT&&e.dispatcher((function(e,t){var a=t().category,r=d.indexOf(a);e(f(r===d.length-1?n[d[0]]:n[d[r+1]]))})),function(){u()}}),[l]),t=e.articles.isError?c.a.createElement("div",{style:{width:"100%",minHeight:"100vh"}},"error"):e.articles.isFetching?c.a.createElement(c.a.Fragment,null,Array.from(Array(10),(function(e,t){return c.a.createElement(P.a,{item:!0,key:t},c.a.createElement(T.a,{width:500,height:300,maxWidth:"100%"},c.a.createElement(ee.a,{variant:"rect",width:500,height:200}),c.a.createElement(ee.a,{width:500}),c.a.createElement(ee.a,{width:500})))}))):c.a.createElement(he,{articles:e.articles.articles}),c.a.createElement("div",{style:{width:"100%",transform:"translateX(".concat(s,"px)")}},c.a.createElement(T.a,{className:a.wrapper},c.a.createElement(P.a,{container:!0,direction:"row",alignContent:"center",justify:"center",spacing:2,ref:o},t)))},de=a(122),fe=a(120);var be,pe=function(){return c.a.createElement(T.a,{mt:10,mb:2,mx:2},c.a.createElement(P.a,{container:!0,direction:"row",spacing:2},c.a.createElement(P.a,{item:!0},c.a.createElement(G.a,{href:"https://www.xiaoxihome.com/",target:"_blank",rel:"noopener",underline:"none"},c.a.createElement(de.a,{avatar:c.a.createElement(fe.a,null,"X"),label:"\ud83d\udd27 with \u2764\ufe0f by XiaoxiHome",color:"primary",clickable:!0}))),c.a.createElement(P.a,{item:!0},c.a.createElement(G.a,{href:"https://newsapi.org/",target:"_blank",rel:"noopener",underline:"none"},c.a.createElement(de.a,{avatar:c.a.createElement(fe.a,null,"N"),label:"News data courtesy of NewsAPI.org",color:"secondary",clickable:!0})))))},ge=Object(u.d)(v,O,Object(u.a)(m.a)),ve=Object(y.a)((function(e){return Object(j.a)({root:{width:"100vw",maxWidth:"100%",minHeight:"100vh",overflowX:"hidden",paddingBottom:"10px"}})}));var Oe=Object(s.b)((function(e){return e}))((function(e){var t=ve();return Object(r.useEffect)((function(){e.dispatch(p(n.HEADLINE))}),[]),c.a.createElement(T.a,{className:t.root},c.a.createElement(_,{headers:d,dispatcher:e.dispatch,category:e.category}),c.a.createElement(Ee,{articles:e.articles,dispatcher:e.dispatch}),c.a.createElement(pe,null))})),ye=Object(S.a)({palette:{primary:{main:"#333333",contrastText:"#fff"},secondary:{main:"#1EB980",contrastText:"#fff"}}});(ye=Object(N.a)(ye)).typography.h1=(be={fontFamily:["Anton","sans-serif"].join(","),fontWeight:400,fontSize:"2rem"},Object(l.a)(be,ye.breakpoints.up("md"),{fontSize:"2.5rem"}),Object(l.a)(be,"fontStyle","normal"),Object(l.a)(be,"color","inherit"),be);var je=function(){return c.a.createElement(s.a,{store:ge},c.a.createElement(R.a,{theme:ye},c.a.createElement(w.a,null),c.a.createElement(Oe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[63,1,2]]]);
//# sourceMappingURL=main.f84d9b78.chunk.js.map