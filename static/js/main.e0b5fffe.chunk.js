(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{122:function(e,t,n){e.exports=n(153)},127:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(11),i=n.n(o),l=(n(127),n(18)),u=n(40),s=n(95);!function(e){e.IS_ERROR="IS_ERROR",e.REQUEST_ARTICLES="REQUEST_ARTICLES",e.RECEIVE_ARTICLES="RECEIVE_ARTICLES"}(a||(a={}));var E,m=function(e){var t="\n        {\n            getNews(category: ".concat(e,") {\n                source,\n                author,\n                title,\n                description,\n                url,\n                urlToImage,\n                publishedAt,\n                content\n            }\n        }\n    ");return function(e){return e({type:a.REQUEST_ARTICLES}),fetch("https://www.xiaoxihome.com/api/news?query="+encodeURIComponent(t)).then((function(e){return e.json()})).then((function(t){t.errors?e({type:a.IS_ERROR}):e(function(e){return{type:a.RECEIVE_ARTICLES,articles:e.slice()}}(t.data.getNews))}))}};!function(e){e.HEADLINE="HEADLINE",e.BUSINESS="BUSINESS",e.ENTERTAINMENT="ENTERTAINMENT",e.HEALTH="HEALTH",e.SCIENCE="SCIENCE",e.SPORTS="SPORTS",e.TECHNOLOGY="TECHNOLOGY",e.SEARCH="SEARCH"}(E||(E={}));var d,f=["HEADLINE","BUSINESS","ENTERTAINMENT","HEALTH","SCIENCE","SPORTS","TECHNOLOGY"];!function(e){e.SET_CATEGORY="SET_CATEGORY"}(d||(d={}));var h=function(e){return function(t){t(function(e){return{type:d.SET_CATEGORY,category:e}}(e)),t(m(e))}};var p={category:E.HEADLINE,articles:{isError:!1,isFetching:!0,articles:[]},copyLinkSnackBar:{isActive:!1},searchKeyword:""};var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.category,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.SET_CATEGORY:return E[t.category];default:return e}};var b,v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.articles,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.IS_ERROR:return Object.assign({},e,{isError:!0});case a.REQUEST_ARTICLES:return Object.assign({},e,{isError:!1,isFetching:!0});case a.RECEIVE_ARTICLES:return Object.assign({},{isError:!1,isFetching:!1,articles:t.articles.slice()});default:return e}};!function(e){e.CLOSE_SNACKBAR="CLOSE_SNACKBAR",e.OPEN_SNACKBAR="OPEN_SNACKBAR"}(b||(b={}));var y,O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.copyLinkSnackBar;switch((arguments.length>1?arguments[1]:void 0).type){case b.CLOSE_SNACKBAR:return{isActive:!1};case b.OPEN_SNACKBAR:return{isActive:!0};default:return e}};!function(e){e.SET_KEYWORD="SET_KEYWORD"}(y||(y={}));var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.searchKeyword,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.SET_KEYWORD:return t.keyword;default:return e}},S=Object(u.c)({category:g,articles:v,copyLinkSnackBar:O,searchKeyword:w}),j=p;var L,R=n(215),A=n(187),C=n(6),x=n(105),N=n(220),T=Object(x.a)({palette:{primary:{main:"#333333",contrastText:"#fff"},secondary:{main:"#1EB980",contrastText:"#fff"}}});(T=Object(N.a)(T)).typography.h1=(L={fontFamily:["Anton","sans-serif"].join(","),fontWeight:400,fontSize:"2rem"},Object(C.a)(L,T.breakpoints.up("md"),{fontSize:"2.5rem"}),Object(C.a)(L,"fontStyle","normal"),Object(C.a)(L,"color","inherit"),L);var k=T,I=n(100),D=n(216),B=n(199),_=n(200),H=n(201),F=n(107),M=n(218),W=n(202),Y=n(16),P=n(12);var U,V=function(e){var t=Date.now();return function(){var n=Date.now();return n-t>e&&(t=n,!0)}};!function(e){e.FIXED="FIXED",e.RELATIVE="RELATIVE"}(U||(U={}));var G=function(e){return Object(Y.a)({},{FIXED:{position:"fixed",top:0,left:0,width:"100%"},RELATIVE:{position:"relative",width:"100%"}}[e])};var K=function(e){var t=Object(r.useState)(U.RELATIVE),n=Object(P.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(!1),i=Object(P.a)(o,2),l=i[0],u=i[1],s=V(10);function E(){var t=window.scrollY;if(0===t&&a!==U.RELATIVE)return c(U.RELATIVE),void u(!1);s()&&(t>=e&&a!==U.FIXED?(c(U.FIXED),u(!0)):t<e&&a!==U.RELATIVE&&(c(U.RELATIVE),u(!1)))}return Object(r.useEffect)((function(){return document.addEventListener("scroll",E),function(){document.removeEventListener("scroll",E)}}),[a]),{style:G(a),isFixed:l}},X=function(e){var t=K(e.fixedStartHeight),n=t.style,a=t.isFixed,o=Object(r.useRef)(document.createElement("div"));return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement("div",{style:{visibility:"hidden"}},e.children),c.a.createElement("div",{style:Object(Y.a)({},n,{zIndex:e.zIndex?e.zIndex:"auto"}),ref:o},e.children))},z=n(188),Q=n(101),J=n.n(Q),q=n(99),$=n.n(q),Z=n(222),ee=n(221),te=n(197),ne=n(192),ae=n(191),re=n(198),ce=n(17),oe=n.n(ce),ie=oe()((function(e){return{dialog:{minWidth:"50vw"}}})),le=function(e){var t=e.search,n=(ie(),Object(r.useState)(!1)),a=Object(P.a)(n,2),o=a[0],i=a[1],l=Object(r.useState)(""),u=Object(P.a)(l,2),s=u[0],E=u[1],m=Object(r.useState)(!1),d=Object(P.a)(m,2),f=d[0],h=d[1],p=function(){E(""),i(!1)};return c.a.createElement("div",null,c.a.createElement(z.a,{"aria-label":"search",color:"inherit",onClick:function(){i(!0)}},c.a.createElement($.a,null)),c.a.createElement(ee.a,{open:o,onClose:p,"aria-labelledby":"form-dialog-title",fullWidth:!0,maxWidth:"sm"},c.a.createElement("form",{action:"/",onSubmit:function(e){e.preventDefault(),s.length?(t(s),p()):h(!0)}},c.a.createElement(ae.a,null,"Search from archived news"),c.a.createElement(ne.a,null,c.a.createElement(Z.a,{error:f,autoFocus:!0,margin:"dense",label:"Keywords",type:"news keyword",fullWidth:!0,value:s,onChange:function(e){f&&h(!1),E(e.target.value)},helperText:f?"Keyword cannot be empty.":" "})),c.a.createElement(te.a,null,c.a.createElement(re.a,{onClick:p,color:"primary"},"Cancel"),c.a.createElement(re.a,{type:"submit",color:"primary"},"Search")))))};var ue=Object(l.b)(null,(function(e){return{search:function(t){e(function(e){return{type:y.SET_KEYWORD,keyword:e}}(t)),e({type:d.SET_CATEGORY,category:E.SEARCH})}}}))(le),se=Object(I.a)((function(e){return{tab:{flexShrink:0,flexGrow:1,color:e.palette.primary.contrastText},heading:{textTransform:"uppercase",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},appBarNoBoxShadow:{boxShadow:"none"},appBarBottomBoxShadow:{boxShadow:"0px 4px 4px -1px rgba(0,0,0,0.2), 0px 5px 5px 0px rgba(0,0,0,0.14), 0px 10px 10px 0px rgba(0,0,0,0.12)"},trendIcon:{color:"#FFF"}}}));var Ee=function(e){var t=se(),n=Object(l.c)(),a=Object(r.useRef)(document.createElement("div")),o=function(e){n(function(e){return function(t,n){n().category!==e&&t(h(e))}}(e))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(B.a,{color:"primary",position:"static",ref:a,className:t.appBarNoBoxShadow},c.a.createElement(_.a,null,c.a.createElement(H.a,{container:!0},c.a.createElement(H.a,{item:!0,xs:1,md:3}),c.a.createElement(H.a,{item:!0,xs:7,md:6},c.a.createElement(F.a,{align:"center",className:t.heading,variant:"h1",component:"h1"},"News Canada")),c.a.createElement(H.a,{item:!0,xs:4,md:3},c.a.createElement(H.a,{container:!0,alignItems:"center",justify:"flex-end"},c.a.createElement(H.a,{item:!0},c.a.createElement(ue,null)),c.a.createElement(H.a,{item:!0},c.a.createElement(z.a,{"aria-label":"news trend",color:"inherit"},c.a.createElement(J.a,null)))))))),c.a.createElement(X,{fixedStartHeight:null!==a?a.current.offsetTop+a.current.offsetHeight:50,zIndex:1100},c.a.createElement(B.a,{color:"primary",position:"static",className:t.appBarBottomBoxShadow},c.a.createElement(M.a,{value:-1!==e.headers.indexOf(e.category)&&e.headers.indexOf(e.category),indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto"},e.headers.map((function(e,n){return c.a.createElement(W.a,{label:e,key:n,className:t.tab,onClick:function(){return o(E[e])}})}))))))},me=n(203),de=n(204),fe=n(205),he=n(206),pe=n(21),ge=n(207),be=n(208),ve=n(210),ye=n(211),Oe=n(209);var we,Se,je=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)};!function(e){e.NULL="NULL",e.LEFT="LEFT",e.RIGHT="RIGHT"}(we||(we={})),function(e){e.NULL="NULL",e.SWIPE="SWIPE",e.SCROLL="SCROLL"}(Se||(Se={}));var Le=10;var Re=function(e,t){var n=Object(r.useState)(0),a=Object(P.a)(n,2),c=a[0],o=a[1],i=Object(r.useState)(0),l=Object(P.a)(i,2),u=l[0],s=l[1],E=Object(r.useState)(Se.NULL),m=Object(P.a)(E,2),d=m[0],f=m[1],h=Object(r.useState)(we.NULL),p=Object(P.a)(h,2),g=p[0],b=p[1],v=Object(r.useState)(0),y=Object(P.a)(v,2),O=y[0],w=y[1],S=V(Le);function j(e){o(e.changedTouches[0].clientX),s(e.changedTouches[0].clientY)}function L(e){if(S()){var t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY;"SWIPE"===d?(e.cancelable&&e.preventDefault(),w(e.changedTouches[0].clientX-c)):"NULL"===d&&Math.abs(t-c)>Math.abs(n-u)?f(Se.SWIPE):"NULL"===d&&Math.abs(t-c)<=Math.abs(n-u)&&f(Se.SCROLL)}}function R(e){var n=e.changedTouches[0].clientX,a=e.changedTouches[0].clientY;Math.abs(n-c)>Math.abs(a-u)&&Math.abs(n-c)>t&&d===Se.SWIPE&&b(n>c?we.RIGHT:we.LEFT),w(0),f(Se.NULL)}return Object(r.useEffect)((function(){var t=e.current;if(t)return t.addEventListener("touchstart",j),function(){t.removeEventListener("touchstart",j)}}),[e]),Object(r.useEffect)((function(){var t=e.current;if(t)return t.addEventListener("touchmove",L),function(){t.removeEventListener("touchmove",L)}}),[u,d,e]),Object(r.useEffect)((function(){var t=e.current;if(t)return t.addEventListener("touchend",R),function(){t.removeEventListener("touchend",R)}}),[u,d,e]),{direction:g,dragDistance:O,resetSwipeStatus:function(){b(we.NULL)}}};var Ae=Object(l.b)(null,(function(e){return{goPrevious:function(){return e((function(e,t){var n=t().category,a=f.indexOf(n);e(h(0===a?E[f[f.length-1]]:E[f[a-1]]))}))},goNext:function(){return e((function(e,t){var n=t().category,a=f.indexOf(n),r=a===f.length-1;e(h(r?E[f[0]]:E[f[a+1]]))}))}}}))((function(e){var t=Object(r.useRef)(null),n=Re(t,50),a=n.direction,o=n.dragDistance,i=n.resetSwipeStatus;return Object(r.useEffect)((function(){return a===we.RIGHT?e.goPrevious():a===we.LEFT&&e.goNext(),function(){i()}}),[a]),c.a.createElement("div",{style:{width:"100%",transform:"translateX(".concat(o,"px)")},ref:t},e.children)})),Ce=Object(I.a)((function(e){return Object(me.a)(Object(C.a)({wrapper:{width:"calc(100% - 40px)",margin:"20px"}},e.breakpoints.down("sm"),{wrapper:{width:"calc(100% - 16px)",margin:"8px"}}))}));function xe(e,t,n){return"calc(".concat(e," * ").concat(n.typography[t].fontSize," * ").concat(n.typography[t].lineHeight,")")}function Ne(e,t){return Object(me.a)({root:{position:"relative","&:after":{content:"''",position:"absolute",bottom:0,right:0,width:"20%",height:xe(1,e,t),backgroundImage:"linear-gradient(to right, rgba(255, 255, 255, 0) , rgba(255, 255, 255, 1))",zIndex:10}}})}var Te={width:"100%",overflow:"hidden",position:"relative"},ke=Object(I.a)((function(e){return Object(me.a)(Object(C.a)({media:Object(Y.a)({height:"550px"},Te),skeleton:Object(Y.a)({height:"550px"},Te),title:Object(Y.a)({height:xe(1,"body1",e)},Ne("body1",e).root,{},Te),source:Object(Y.a)({height:xe(1,"body2",e)},Te),articleContent:Object(Y.a)({height:xe(2,"body2",e)},Ne("body2",e).root,{},Te),buttons:Object(Y.a)({},Te)},e.breakpoints.down("sm"),{media:{height:"200px"},skeleton:{height:"200px"}}))})),Ie=Object(I.a)((function(e){return Object(me.a)(Object(C.a)({media:Object(Y.a)({height:"200px"},Te),skeleton:Object(Y.a)({height:"200px"},Te),title:Object(Y.a)({height:xe(2,"body1",e)},Ne("body1",e).root,{},Te),source:Object(Y.a)({height:xe(1,"body2",e)},Te),articleContent:Object(Y.a)({height:xe(3,"body2",e)},Ne("body2",e).root,{},Te),buttons:Object(Y.a)({},Te)},e.breakpoints.down("sm"),{}))}));function De(e){return c.a.createElement(de.a,{className:e.className},c.a.createElement(fe.a,{href:e.url,target:"_blank",rel:"noopener",underline:"none"},c.a.createElement(re.a,{size:"small",color:"primary"},"Learn more")),c.a.createElement(re.a,{size:"small",color:"primary",onClick:function(){je(e.url),e.openCopyLinkSnackBar()}},"Share"))}function Be(e){var t=Object(r.useRef)(null),n=function(e){var t=Object(r.useState)(!1),n=Object(P.a)(t,2),a=n[0],c=n[1],o=Date.now()-1e3;function i(){var t=Date.now();if(!(t-o<20)&&(o=t,e.current)){var n=e.current.getBoundingClientRect(),a=n.top+n.height<0,r=n.top>window.innerHeight;a||r||c(!0)}}return Object(r.useEffect)((function(){if(!a)return i(),document.addEventListener("scroll",i),function(){document.removeEventListener("scroll",i)}})),a}(t),a=Object(r.useState)(!1),o=Object(P.a)(a,2),i=o[0],l=o[1],u=!Object(he.a)(Object(pe.a)().breakpoints.down("sm")),s=0===e.id||1===e.id,E=ke(),m=Ie(),d=s?E:m;Object(r.useEffect)((function(){u&&setTimeout((function(){return l(!0)}),225)}),[]);var f=c.a.createElement(H.a,{item:!0,xs:12,md:s?6:3,ref:t},c.a.createElement(ge.a,{raised:!0},n&&e.urlToImage?c.a.createElement(be.a,{component:"img",alt:e.title,className:d.media,image:e.urlToImage,title:e.title}):c.a.createElement(Oe.a,{variant:"rect",className:d.skeleton}),c.a.createElement(ve.a,null,c.a.createElement(F.a,{gutterBottom:!0,variant:"body1",component:"h2",className:d.title},c.a.createElement(D.a,{fontWeight:700},e.title)),c.a.createElement(F.a,{variant:"body2",color:"textSecondary",component:"p",className:d.source},c.a.createElement(D.a,{component:"span",fontWeight:700},e.source?e.source+" - ":e.author?e.author+" - ":"",function(e){var t=Date.now()-e.getTime();if(t<0)return"now";var n=Math.floor(t/6e4);if(n<=59)return"".concat(n," ").concat(1===n?"minute":"minutes"," ago");var a=Math.floor(t/36e5);if(a<=23)return"".concat(a," ").concat(1===a?"hour":"hours"," ago");var r=Math.floor(t/864e5);if(r<=30)return"".concat(r," ").concat(1===r?"day":"days"," ago");var c=Math.floor(t/2592e6);if(c<=12)return"".concat(c," ").concat(1===c?"month":"months"," ago");var o=Math.floor(t/31536e6);return"".concat(o," ").concat(1===o?"year":"years"," ago")}(new Date(e.publishedAt)))),c.a.createElement(F.a,{variant:"body2",color:"textSecondary",component:"p",className:d.articleContent},e.content&&e.content.replace(/\[\+[0-9]+\schars\]/gi,""))),c.a.createElement(De,{url:e.url,className:d.buttons,openCopyLinkSnackBar:e.openCopyLinkSnackBar})));return u?c.a.createElement(ye.a,{in:!i||n},f):f}function _e(e){return c.a.createElement(c.a.Fragment,null,e.articles.map((function(t,n){return c.a.createElement(Be,Object.assign({},t,{key:n,id:n,openCopyLinkSnackBar:e.openCopyLinkSnackBar}))})))}var He=Object(l.b)(null,(function(e){return{openCopyLinkSnackBar:function(){return e({type:b.OPEN_SNACKBAR})}}}))((function(e){var t,n=Ce();return Object(r.useEffect)((function(){window.scrollTo(0,0)})),t=e.articles.isError?c.a.createElement("div",{style:{width:"100%",minHeight:"100vh"}},"error"):e.articles.isFetching?c.a.createElement(c.a.Fragment,null,Array.from(Array(10),(function(e,t){return c.a.createElement(H.a,{item:!0,key:t},c.a.createElement(D.a,{width:500,height:300,maxWidth:"100%"},c.a.createElement(Oe.a,{variant:"rect",width:500,height:200}),c.a.createElement(Oe.a,{width:500}),c.a.createElement(Oe.a,{width:500})))}))):c.a.createElement(_e,{articles:e.articles.articles,openCopyLinkSnackBar:e.openCopyLinkSnackBar}),c.a.createElement(Ae,null,c.a.createElement(D.a,{className:n.wrapper},c.a.createElement(H.a,{container:!0,direction:"row",alignContent:"center",justify:"center",spacing:2},t)))})),Fe=n(225),Me=n(226);var We=function(){return c.a.createElement(D.a,{mt:10,mb:2,mx:2},c.a.createElement(H.a,{container:!0,direction:"row",spacing:2},c.a.createElement(H.a,{item:!0},c.a.createElement(fe.a,{href:"https://www.xiaoxihome.com/",target:"_blank",rel:"noopener",underline:"none"},c.a.createElement(Fe.a,{avatar:c.a.createElement(Me.a,null,"X"),label:"\ud83d\udd27 with \u2764\ufe0f by XiaoxiHome",color:"primary",clickable:!0}))),c.a.createElement(H.a,{item:!0},c.a.createElement(fe.a,{href:"https://newsapi.org/",target:"_blank",rel:"noopener",underline:"none"},c.a.createElement(Fe.a,{avatar:c.a.createElement(Me.a,null,"N"),label:"News data courtesy of NewsAPI.org",color:"secondary",clickable:!0})))))},Ye=n(227),Pe=n(212),Ue=n(102),Ve=n.n(Ue),Ge=n(68),Ke=oe()((function(){return Object(me.a)({successSnackBar:{backgroundColor:Ge.a[600]}})}));var Xe=function(e){var t=Ke();function n(){e.closeCopyLinkSnackBar()}return c.a.createElement(Ye.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:e.isActive,autoHideDuration:3e3,onClose:n},c.a.createElement(Pe.a,{className:t.successSnackBar,message:c.a.createElement("span",{id:"client-snackbar"},"Link copied to clipboard"),action:[c.a.createElement(z.a,{key:"close","aria-label":"close",color:"inherit",onClick:n},c.a.createElement(Ve.a,null))]}))};var ze,Qe=Object(l.b)((function(e){return{isActive:e.copyLinkSnackBar.isActive}}),(function(e){return{closeCopyLinkSnackBar:function(){return e({type:b.CLOSE_SNACKBAR})}}}))(Xe),Je=n(20);!function(e){e.LOADING="LOADING",e.LOADED_NORMAL="LOADED_NORMAL",e.LOADED_EMPTY="LOADED_EMPTY",e.LOADED_NO_MORE="LOADED_NO_MORE",e.ERROR="ERROR"}(ze||(ze={}));var qe,$e=ze,Ze="https://www.xiaoxihome.com/api/search-news",et=function(e,t,n,a,r,c){n($e.LOADING);var o=0===t?"".concat(Ze,"?keyword=").concat(e):"".concat(Ze,"?keyword=").concat(e,"&skip=").concat(t);fetch(o).then((function(e){return e.json()})).then((function(e){"error"===e.status?n($e.ERROR):e.totalCount?(c(e.totalCount),a((function(t){return[].concat(Object(Je.a)(t),Object(Je.a)(e.data))})),n($e.LOADED_NORMAL)):(c(0),n($e.LOADED_EMPTY))})).catch((function(e){console.log(e),n($e.ERROR)}))};!function(e){e.RELEVANCE="RELEVANCE",e.DATE="DATE"}(qe||(qe={}));var tt=qe,nt=function(e){var t=Object(r.useState)($e.LOADING),n=Object(P.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)([]),i=Object(P.a)(o,2),l=i[0],u=i[1],s=Object(r.useState)(tt.RELEVANCE),E=Object(P.a)(s,2),m=E[0],d=E[1],f=Object(r.useState)(0),h=Object(P.a)(f,2),p=h[0],g=h[1];return Object(r.useEffect)((function(){u([]),et(e,0,c,u,[],g)}),[e]),{status:a,setStatus:c,data:l,setData:u,sortType:m,sortByDate:function(){u((function(e){return e.sort((function(e,t){var n=new Date(e.publishedAt).getTime();return new Date(t.publishedAt).getTime()-n}))})),d(tt.DATE)},sortByRelevance:function(){u((function(e){return e.sort((function(e,t){return t.score-e.score}))})),d(tt.RELEVANCE)},totalCount:p,setTotalCount:g}},at=oe()((function(e){return{root:{margin:e.spacing(2,0)}}})),rt=function(e){var t=e.count,n=e.keyword,a=e.currentLength,r=1===t?"article":"articles",o=at();return c.a.createElement(F.a,{variant:"body1",component:"div",className:o.root},c.a.createElement(D.a,{fontWeight:700},"".concat(t," news ").concat(r,' found related to "').concat(n,'", displaying 1 - ').concat(a)))},ct=function(){return c.a.createElement(Oe.a,{variant:"rect",width:"100%",height:200,animation:"wave"})},ot=oe()((function(e){return{root:{margin:e.spacing(5,0),width:300}}})),it=function(e){var t=e.onClick,n=ot();return c.a.createElement(re.a,{variant:"contained",disableElevation:!0,color:"secondary",onClick:t,className:n.root},"Load more")},lt=n(224),ut=n(195),st=n(217),Et=n(228),mt=function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)},dt=oe()((function(e){return{root:{margin:e.spacing(2,0),minWidth:200}}})),ft=function(e){var t=e.sortByDate,n=e.sortByRelevance,a=e.sortType,r=dt();return c.a.createElement(ut.a,{className:r.root,color:"secondary"},c.a.createElement(lt.a,{htmlFor:"searched-article-sort"},"Sort By"),c.a.createElement(st.a,{value:a,onChange:function(e){var r=e.target.value;if(r!==a)switch(r){case tt.RELEVANCE:n();break;case tt.DATE:t();break;default:n()}},inputProps:{name:"sort",id:"searched-article-sort"}},c.a.createElement(Et.a,{value:tt.RELEVANCE},mt(tt.RELEVANCE)),c.a.createElement(Et.a,{value:tt.DATE},mt(tt.DATE))))},ht=n(213),pt=oe()((function(e){return{root:{margin:e.spacing(2,0)}}})),gt=function(e){var t=e.message,n=e.divider,a=pt();return c.a.createElement(c.a.Fragment,null,c.a.createElement(F.a,{variant:"body1",component:"div",className:a.root},c.a.createElement(D.a,{fontWeight:700},t)),n&&c.a.createElement(ht.a,{style:{width:"100%"}}))},bt=n(214),vt=oe()((function(e){return Object(me.a)({highlight:{backgroundColor:e.palette.secondary.light}})})),yt=function(e){var t=e.content,n=e.keyword,a=new RegExp("("+n+")","gi"),r=t.split(a),o=vt();return c.a.createElement(c.a.Fragment,null,r.map((function(e,t){return t%2===1?c.a.createElement("span",{className:o.highlight,key:t},e):c.a.createElement("span",{key:t},e)})))},Ot=Object(I.a)((function(e){return{cardRoot:{width:"100%",margin:e.spacing(2,0)},cardActionArea:{width:"100%",height:"100%","& a":{width:"100%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center","&:visited, &:link":{textDecoration:"inherit",color:"inherit",cursor:"pointer"}}},cardMedia:{width:"20%",height:"100%"},cardContent:{width:"80%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}})),wt=function(e){var t=e.article,n=e.keyword,a=Ot(),o=function(){var e=Object(r.useState)(0),t=Object(P.a)(e,2),n=t[0],a=t[1],c=Object(r.useRef)(null);return Object(r.useEffect)((function(){if(c.current){var e=c.current.getBoundingClientRect().height;a(e)}}),[c]),{cardHeight:n,heightRef:c}}(),i=o.cardHeight,l=o.heightRef;return c.a.createElement(ge.a,{className:a.cardRoot,style:{height:i?"".concat(i,"px"):"auto"}},c.a.createElement(bt.a,{className:a.cardActionArea},c.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},c.a.createElement(be.a,{component:"img",alt:t.title,className:a.cardMedia,image:t.urlToImage,title:t.title}),c.a.createElement(ve.a,{className:a.cardContent,ref:l},c.a.createElement(F.a,{variant:"body1",component:"h2"},c.a.createElement(D.a,{fontWeight:700},c.a.createElement(yt,{content:t.title,keyword:n}))),c.a.createElement(F.a,{variant:"body2",component:"div",color:"textSecondary"},c.a.createElement(D.a,{fontWeight:700},new Date(t.publishedAt).toDateString())),c.a.createElement(F.a,{variant:"body2",color:"textSecondary",component:"p"},c.a.createElement(yt,{content:t.content.replace(/\[\+[0-9]+\schars\]/gi,""),keyword:n}))))))},St=n(104),jt=n.n(St),Lt=n(229),Rt=n(189),At=oe()((function(e){return{root:Object(C.a)({position:"fixed",bottom:"50px",right:"50px",backgroundColor:e.palette.secondary.main,color:"#FFF",transition:e.transitions.create("background-color opacity"),transform:"rotate(-90deg)","&:hover":{backgroundColor:e.palette.secondary.light}},e.breakpoints.down("md"),{bottom:"15px",right:"15px"})}})),Ct=function(){var e=At(),t=function(){var e=Object(r.useState)(!1),t=Object(P.a)(e,2),n=t[0],a=t[1],c=function(){window.scrollY>window.innerHeight&&!n?a(!0):window.scrollY<window.innerHeight&&n&&a(!1)};return Object(r.useEffect)((function(){return document.addEventListener("scroll",c),function(){document.removeEventListener("scroll",c)}}),[n]),n}();return c.a.createElement(Rt.a,{in:t},c.a.createElement(Lt.a,{title:"Scroll to Top",className:e.root},c.a.createElement(z.a,{"aria-label":"Scroll to Top",onClick:function(){window.scrollTo(0,0)}},c.a.createElement(jt.a,null))))},xt=Object(I.a)((function(e){return{root:{width:"100%",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"},widthWrapper:Object(C.a)({width:"1000px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",padding:e.spacing(2)},e.breakpoints.down("md"),{width:"100%"}),cardRoot:{width:"100%",margin:e.spacing(2,0)},cardActionArea:{width:"100%",height:"100%","& a":{width:"100%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center","&:visited, &:link":{textDecoration:"inherit",color:"inherit",cursor:"pointer"}}},cardMedia:{width:"20%",height:"100%"},cardContent:{width:"80%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}})),Nt=function(e){var t=e.keyword,n=nt(t),a=n.status,r=n.data,o=n.setStatus,i=n.setData,l=n.sortType,u=n.sortByRelevance,s=n.sortByDate,E=n.setTotalCount,m=n.totalCount,d=xt(),f=r.length;return c.a.createElement("div",{className:d.root},c.a.createElement("div",{className:d.widthWrapper},f>0&&c.a.createElement(rt,{count:m,keyword:t,currentLength:r.length}),f>0&&c.a.createElement(ft,{sortType:l,sortByRelevance:u,sortByDate:s}),a===$e.LOADED_EMPTY&&c.a.createElement(gt,{message:'No news article related to "'.concat(t,'" was found')}),a===$e.ERROR&&c.a.createElement(gt,{message:"Server error please try later"}),r.length>0&&r.map((function(e){return c.a.createElement(wt,{article:e,keyword:t,key:e._id})})),a===$e.LOADING&&c.a.createElement(ct,null),a===$e.LOADED_NORMAL&&f<m&&m>0&&c.a.createElement(it,{onClick:function(){et(t,r.length,o,i,r,E)}}),f===m&&m>0&&c.a.createElement(gt,{message:"End of results",divider:!0})),c.a.createElement(Ct,null))};var Tt=Object(l.b)((function(e){return{keyword:e.searchKeyword}}))(Nt),kt=Object(I.a)((function(){return{root:{width:"100vw",maxWidth:"100%",minHeight:"100vh",overflowX:"hidden",paddingBottom:"10px"}}}));var It=Object(l.b)((function(e){var t=e.category===E.SEARCH;return{category:e.category,articles:e.articles,isSearching:t}}),(function(e){return{fetchArticlesAfterMount:function(){return e(m(E.HEADLINE))}}}))((function(e){var t=kt();return Object(r.useEffect)((function(){e.fetchArticlesAfterMount()}),[]),c.a.createElement(D.a,{className:t.root},c.a.createElement(Ee,{headers:f,category:e.category}),e.isSearching?c.a.createElement(Tt,null):c.a.createElement(He,{articles:e.articles}),c.a.createElement(We,null),c.a.createElement(Qe,null))})),Dt=Object(u.d)(S,j,Object(u.a)(s.a));var Bt=function(){return c.a.createElement(l.a,{store:Dt},c.a.createElement(A.a,{theme:k},c.a.createElement(R.a,null),c.a.createElement(It,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(Bt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[122,1,2]]]);
//# sourceMappingURL=main.e0b5fffe.chunk.js.map