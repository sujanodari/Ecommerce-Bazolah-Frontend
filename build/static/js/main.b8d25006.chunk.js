(this.webpackJsonpbazolah=this.webpackJsonpbazolah||[]).push([[0],{135:function(e,a,t){e.exports=t(175)},140:function(e,a,t){},141:function(e,a,t){},159:function(e,a,t){},164:function(e,a,t){},170:function(e,a,t){},171:function(e,a,t){},173:function(e,a,t){},175:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),o=t.n(r),c=(t(140),t(141),t(17)),i=t(13),m=t(7),s=t(250),u=t(237),d=t(228),p=t(229),g=t(227),E=t(231),f=t(246),h=t(236),v=t(43),b=t(216),y=t(230),C=t(106),S=t.n(C).a.create({baseURL:"https://bazolah.com/api/v1"}),O=t(247),k=t(241),j=t(37),w=t(222),N=t(223),x=t(225),_=t(224),W=t(226),A=t(251),P=t(232),T=t(233),I=t(252),D=t(234),z=t(248),B=t(235),R=t(57),q=t.n(R),F=t(71),L=t.n(F),V=t(72),U=t.n(V),M=t(73),G=t.n(M),H=(t(159),Object(n.createContext)()),Y=function(e){var a=e.reducer,t=e.initialState,r=e.children;return l.a.createElement(H.Provider,{value:Object(n.useReducer)(a,t)},r)},J=function(){return Object(n.useContext)(H)},K=t(24),$="SET_USER",Q="SET_PRODUCT",X="ADD_PRODUCT",Z="SET_CATEGORY",ee="ADD_CATEGORY",ae="ADD_TO_BASKET",te=function(e,a){switch(console.log(a),a.type){case $:return Object(K.a)(Object(K.a)({},e),{},{user:a.user});case Q:case X:return Object(K.a)(Object(K.a)({},e),{},{product:a.product});case Z:case ee:return Object(K.a)(Object(K.a)({},e),{},{category:a.category});case ae:return Object(K.a)(Object(K.a)({},e),{},{basket:a.basket});default:return e}},ne=t(48),le=(t(99),Object(b.a)((function(e){return{container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"}}}))),re=Object(b.a)((function(e){return{arrow:{color:e.palette.common.black},tooltip:{backgroundColor:e.palette.common.black}}}));function oe(e){var a=re();return l.a.createElement(A.a,Object.assign({arrow:!0,classes:a},e))}ne.a.configure();var ce=function(e){var a=e.product,t=e.showCategory,n=J(),r=Object(m.a)(n,2),o=r[0],c=o.category,i=o.basket,f=r[1],b=le(),C=l.a.useState(!1),O=Object(m.a)(C,2),k=O[0],A=O[1],R=l.a.useState(""),F=Object(m.a)(R,2),V=F[0],M=F[1],H=l.a.useState(""),Y=Object(m.a)(H,2),K=Y[0],$=Y[1],Q=function(){A(!1),M("")};return l.a.createElement(w.a,{className:b.root},l.a.createElement(N.a,null,l.a.createElement(_.a,{className:"card__toggler",component:"img",alt:null===a||void 0===a?void 0:a.name,height:"200",image:"https://cdn.pixabay.com/photo/2017/12/08/11/16/clock-3005574__340.jpg",title:null===a||void 0===a?void 0:a.name}),l.a.createElement(v.a,{style:{paddingLeft:"7px"},gutterBottom:!0,variant:"h5",component:"h2"},null===a||void 0===a?void 0:a.name),l.a.createElement(v.a,{style:{paddingLeft:"7px"},variant:"body2",color:"textSecondary",component:"p"},"Rs ",null===a||void 0===a?void 0:a.price)),l.a.createElement(x.a,null,t&&l.a.createElement(W.a,{onClick:function(){var e;e=null===a||void 0===a?void 0:a._id,M(e),A(!0)},size:"small",color:"primary"},"Add to Category"),l.a.createElement(s.a,{open:k,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(g.a,{id:"alert-dialog-title"},l.a.createElement(q.a,{fontSize:"small",onClick:function(){Q()}})," ","Choose a Category"),l.a.createElement(d.a,null,l.a.createElement(p.a,{id:"alert-dialog-description"},l.a.createElement(y.a,{component:"main",maxWidth:"xs"},l.a.createElement(E.a,null),l.a.createElement("form",{style:{color:"#2d2d2d"},className:b.form,noValidate:!0},l.a.createElement(P.a,{component:"fieldset"},l.a.createElement(T.a,{component:"legend"},"Category"),l.a.createElement(I.a,{"aria-label":"gender",name:"gender1",value:K,onChange:function(e){$(e.target.value)}},c.map((function(e){var a=e._id,t=e.category;return l.a.createElement(D.a,{key:a,value:a,control:l.a.createElement(z.a,null),label:t})})))," "),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(W.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",id:"ctop",disabled:!V||!K,onClick:function(e){e.preventDefault(),S.put("/category/".concat(K),{products:V},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){console.log(e.data),$("")})).catch((function(e){console.log(e.response)}))},className:b.submit},"Add"),l.a.createElement(h.a,{container:!0},l.a.createElement(h.a,{item:!0,xs:!0})))))),l.a.createElement(u.a,null,l.a.createElement(W.a,{className:"login__topSpan",onClick:function(){Q()},color:"primary",autoFocus:!0},"Close"))),!t&&l.a.createElement(l.a.Fragment,null,l.a.createElement(oe,{className:"hover__effect",title:"Add to cart",placement:"top"},l.a.createElement(B.a,{onClick:function(){!function(e){f({type:ae,basket:[].concat(Object(j.a)(i),[e])}),ne.a.info(e.name+"  is added to the cart!(\u273f\u25e0\u203f\u25e0)",{position:"top-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}(a)}},l.a.createElement(L.a,{className:"font"}))),l.a.createElement(oe,{className:"hover__effect",title:"Add to wishlist",placement:"top"},l.a.createElement(B.a,null," ",l.a.createElement(U.a,{className:"font"}))),l.a.createElement(oe,{className:"hover__effect",title:"Full Details",placement:"top"},l.a.createElement(B.a,null," ",l.a.createElement(G.a,{className:"font"}))))))},ie=(t(164),t(111));t(169),t(170);var me=function(){return l.a.createElement("div",null,l.a.createElement(ie.Carousel,{autoPlay:!0},l.a.createElement("div",null,l.a.createElement("img",{alt:"",src:"https://dokansewa.com/image/cache/catalog/demo/slideshow/home2/id2-slide1-1920x510.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{alt:"",src:"https://dokansewa.com/image/cache/catalog/demo/slideshow/home2/id2-slide2-1920x510.jpg"})),l.a.createElement("div",null,l.a.createElement("img",{alt:"",src:"https://dokansewa.com/image/cache/catalog/demo/slideshow/home2/id2-slide3-1920x510.jpg"}))))},se=t(239),ue=t(112),de=t.n(ue),pe=t(113),ge=t.n(pe),Ee=t(114),fe=t.n(Ee),he=t(115),ve=t.n(he),be=(t(171),t(238));var ye=function(e){var a=e.handleClickOpenLogin,t=e.searchTerm,n=e.setSearchTerm,r=e.handleSearch,o=e.handleClickOpenRegister,c=J(),i=Object(m.a)(c,2),s=i[0].basket;return i[1],l.a.createElement("div",null,l.a.createElement("div",{className:"login__top"},l.a.createElement("div",{className:"login__topLeft"},l.a.createElement(de.a,{fontSize:"small"}),l.a.createElement("span",{onClick:a,className:"login__topSpan"},"Login")),l.a.createElement("div",{className:"login__searchDiv"},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("input",{type:"text",value:t,placeholder:"Search Product",onChange:function(e){return n(e.target.value)},className:"login__searchInput"}),l.a.createElement(ge.a,{type:"submit",disabled:!t,onClick:r,className:"login__searchIcon"}))),l.a.createElement("div",{className:"login__topRightCenter"},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(be.a,{badgeContent:s.length,color:"secondary"},l.a.createElement(fe.a,null)))),l.a.createElement("div",{className:"login__topRight"},l.a.createElement(ve.a,{fontSize:"small"}),l.a.createElement("span",{onClick:o,className:"login__topSpan"},"Sign Up"))))},Ce=Object(b.a)((function(e){return{container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"}}})),Se=Object(b.a)((function(e){return{arrow:{color:e.palette.common.black},tooltip:{backgroundColor:e.palette.common.black}}}));function Oe(e){var a=Se();return l.a.createElement(A.a,Object.assign({arrow:!0,classes:a},e))}ne.a.configure();var ke=function(e){var a=e.searchProducts,t=e.clearSearch,n=Ce(),r=J(),o=Object(m.a)(r,2),c=o[0].basket,i=o[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{maxWidth:"lg",className:n.container},l.a.createElement("h4",{align:"center"},"Search Result Total: ",a.length," ",l.a.createElement(W.a,{onClick:t},"Clear Search")),l.a.createElement(h.a,{container:!0,spacing:3},a.map((function(e){return l.a.createElement(h.a,{key:null===e||void 0===e?void 0:e._id,item:!0,xs:6,md:4,lg:3},l.a.createElement(w.a,{className:n.root},l.a.createElement(N.a,null,l.a.createElement(_.a,{component:"img",alt:null===e||void 0===e?void 0:e.name,height:"200",image:"https://cdn.pixabay.com/photo/2017/12/08/11/16/clock-3005574__340.jpg",title:null===e||void 0===e?void 0:e.name}),l.a.createElement(v.a,{style:{paddingLeft:"7px"},gutterBottom:!0,variant:"h5",component:"h2"},null===e||void 0===e?void 0:e.name),l.a.createElement(v.a,{style:{paddingLeft:"7px"},variant:"body2",color:"textSecondary",component:"p"},"Rs ",null===e||void 0===e?void 0:e.price)),l.a.createElement(x.a,null,l.a.createElement(Oe,{title:"Add to cart",placement:"top"},l.a.createElement(B.a,{onClick:function(){!function(e){i({type:ae,basket:[].concat(Object(j.a)(c),[e])}),ne.a.info(e.name+"  is added to the cart!(\u273f\u25e0\u203f\u25e0)",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}(e)}},l.a.createElement(L.a,{className:"font"}))),l.a.createElement(Oe,{title:"Add to wishlist",placement:"top"},l.a.createElement(B.a,null," ",l.a.createElement(U.a,{className:"font"}))),l.a.createElement(Oe,{title:"Full Details",placement:"top"},l.a.createElement(B.a,null," ",l.a.createElement(G.a,{className:"font"}))))))})))),l.a.createElement("hr",null))},je=t(240),we=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(0),display:"flex",flexDirection:"column",alignItems:"center"},root:{maxWidth:345},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Ne=l.a.forwardRef((function(e,a){return l.a.createElement(se.a,Object.assign({direction:"right",ref:a},e))})),xe=l.a.forwardRef((function(e,a){return l.a.createElement(se.a,Object.assign({direction:"left",ref:a},e))}));function _e(e){e.handleOpen,e.setHandleOpen,e.isMobile;var a=l.a.useState(""),t=Object(m.a)(a,2),r=t[0],o=t[1],b=l.a.useState(""),C=Object(m.a)(b,2),j=C[0],w=C[1],N=l.a.useState(""),x=Object(m.a)(N,2),_=x[0],A=x[1],T=l.a.useState(""),B=Object(m.a)(T,2),R=B[0],F=B[1],L=l.a.useState(""),V=Object(m.a)(L,2),U=V[0],M=V[1],G=l.a.useState(""),H=Object(m.a)(G,2),Y=H[0],J=H[1],K=l.a.useState(""),$=Object(m.a)(K,2),Q=$[0],X=$[1],Z=l.a.useState(""),ee=Object(m.a)(Z,2),ae=ee[0],te=ee[1],ne=l.a.useState(""),le=Object(m.a)(ne,2),re=le[0],oe=le[1],ie=l.a.useState(!1),se=Object(m.a)(ie,2),ue=se[0],de=se[1],pe=Object(i.g)(),ge=l.a.useState(!1),Ee=Object(m.a)(ge,2),fe=Ee[0],he=Ee[1],ve=l.a.useState(!1),be=Object(m.a)(ve,2),Ce=be[0],Se=be[1],Oe=we(),_e=l.a.useState([]),We=Object(m.a)(_e,2),Ae=We[0],Pe=We[1],Te=l.a.useState([]),Ie=Object(m.a)(Te,2),De=Ie[0],ze=Ie[1],Be=l.a.useState(""),Re=Object(m.a)(Be,2),qe=Re[0],Fe=Re[1],Le=l.a.useState(""),Ve=Object(m.a)(Le,2),Ue=Ve[0],Me=Ve[1],Ge=function(){he(!0)},He=function(){Se(!0)},Ye=function(){he(!1),Se(!1)},Je=function(){ze([]),Me("")};Object(n.useEffect)((function(){localStorage.getItem("token")&&"Vendor"===localStorage.getItem("type")&&pe.push("/vendor")}),[pe]),Object(n.useEffect)((function(){var e=setInterval((function(){S.get("/product").then((function(e){Pe(e.data)})).catch((function(e){console.log(e.response)}))}),2e3);return function(){clearInterval(e)}}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(ye,{handleClickOpenLogin:Ge,searchTerm:qe,setSearchTerm:Fe,handleSearch:function(e){e.preventDefault(),qe&&S.post("/product/search",{name:qe}).then((function(e){if(0===e.data.length)return Me("Product ".concat(qe," not found")),Fe(""),void ze([]);Fe(""),ze(e.data)}))},handleClickOpenRegister:He}),l.a.createElement(me,null),0===De.length?l.a.createElement("p",{align:"center",style:{color:"red",fontSize:"25px"}},Ue," ",Ue&&l.a.createElement(W.a,{onClick:function(){Me("")}},"Clear Message")):l.a.createElement(ke,{clearSearch:Je,searchProducts:De}),0===Ae.length?l.a.createElement(y.a,null,l.a.createElement(h.a,{container:!0,spacing:3},l.a.createElement(h.a,{item:!0,xs:6,md:4,lg:3},l.a.createElement(je.a,{variant:"rect",width:210,height:118}),l.a.createElement(je.a,{width:210}),l.a.createElement(je.a,{width:210})),l.a.createElement(h.a,{item:!0,xs:6,md:4,lg:3},l.a.createElement(je.a,{variant:"rect",width:210,height:118}),l.a.createElement(je.a,{width:210}),l.a.createElement(je.a,{width:210})),l.a.createElement(h.a,{item:!0,xs:6,md:4,lg:3},l.a.createElement(je.a,{variant:"rect",width:210,height:118}),l.a.createElement(je.a,{width:210}),l.a.createElement(je.a,{width:210})),l.a.createElement(h.a,{item:!0,xs:6,md:4,lg:3},l.a.createElement(je.a,{variant:"rect",width:210,height:118}),l.a.createElement(je.a,{width:210}),l.a.createElement(je.a,{width:210})))):l.a.createElement(y.a,null,l.a.createElement("p",{align:"center"},l.a.createElement("b",null,"All Products")),l.a.createElement(h.a,{container:!0,spacing:3},Ae.map((function(e){return l.a.createElement(h.a,{key:null===e||void 0===e?void 0:e._id,item:!0,xs:6,md:4,lg:3},l.a.createElement(ce,{product:e,searchProducts:De,showCategory:!1,clearSearch:Je}))})))),l.a.createElement(s.a,{open:fe,TransitionComponent:Ne,onClose:Ye,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(g.a,{id:"alert-dialog-title"},l.a.createElement(q.a,{fontSize:"small",onClick:Ye})),l.a.createElement(d.a,null,l.a.createElement(p.a,{id:"alert-dialog-description"},l.a.createElement(y.a,{component:"main",maxWidth:"xs"},l.a.createElement(E.a,null),l.a.createElement("div",{className:Oe.paper},l.a.createElement(v.a,{component:"h1",variant:"h5",style:{color:"#2d2d2d"}},"Sign in"),ue&&l.a.createElement(k.a,{color:"secondary"}),re&&l.a.createElement(O.a,{severity:"error"},re),l.a.createElement("form",{style:{color:"#2d2d2d"},className:Oe.form,noValidate:!0},l.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,value:r,fullWidth:!0,onChange:function(e){o(e.target.value)},id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),l.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:j,onChange:function(e){w(e.target.value)},name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),l.a.createElement(W.a,{type:"submit",fullWidth:!0,disabled:!r||!j,variant:"contained",color:"primary",id:"login",onClick:function(e){e.preventDefault(),de(!0),S.post("/login",{email:r,password:j}).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("type",e.data.type),o(""),w(""),"Customer"===e.data.type?pe.push("/customer"):"Bazolah"===e.data.type?pe.push("/bazolah"):"Vendor"===e.data.type?pe.push("/vendor"):pe.push("/superadmin")})).catch((function(e){oe(e.response.data.status)})),de(!1)},className:Oe.submit},"Sign In"),l.a.createElement(h.a,{container:!0},l.a.createElement(h.a,{item:!0,xs:!0},l.a.createElement(c.b,{to:"/",className:"login__topSpan"},"Forgot password?")),l.a.createElement(h.a,{item:!0},l.a.createElement("span",{onClickCapture:Ye,onClick:He,className:"login__topSpan"},"Don't have an account? Sign Up")))))))),l.a.createElement(u.a,null,l.a.createElement(W.a,{className:"login__topSpan",onClick:Ye,color:"primary",autoFocus:!0},"Close"))),l.a.createElement(s.a,{open:Ce,TransitionComponent:xe,onClose:Ye,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(g.a,{id:"alert-dialog-title"},l.a.createElement(q.a,{fontSize:"small",onClick:Ye})),l.a.createElement(d.a,null,l.a.createElement(p.a,{id:"alert-dialog-description"},l.a.createElement(y.a,{component:"main",maxWidth:"xs"},l.a.createElement(E.a,null),l.a.createElement("div",{className:Oe.paper},l.a.createElement(v.a,{component:"h1",variant:"h5",style:{color:"#2d2d2d"}},"Sign up"),ue&&l.a.createElement(k.a,{color:"secondary"}),re&&l.a.createElement(O.a,{severity:"error"},re),l.a.createElement("form",{style:{color:"#2d2d2d"},className:Oe.form,noValidate:!0},l.a.createElement(f.a,{variant:"outlined",margin:"normal",value:_,required:!0,onChange:function(e){A(e.target.value)},fullWidth:!0,id:"fullname",label:"Full Name",name:"fullname",autoComplete:"fullname",autoFocus:!0}),l.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,value:r,fullWidth:!0,onChange:function(e){o(e.target.value)},id:"email",label:"Email Address",name:"email",autoComplete:"email"}),l.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,value:R,fullWidth:!0,onChange:function(e){F(e.target.value)},id:"age",label:"Age",name:"age",autoComplete:"age",type:"number"}),l.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:U,onChange:function(e){M(e.target.value)},id:"address",label:"Address",name:"address",autoComplete:"Address",type:"text"}),l.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"contact",value:Y,onChange:function(e){J(e.target.value)},label:"Contact Number",name:"contact",autoComplete:"contact",type:"number"}),l.a.createElement("p",null,"Gender *"),l.a.createElement(P.a,{component:"fieldset"},l.a.createElement(I.a,{value:Q,style:{border:"0.1px solid #3f51b5"},onChange:function(e){X(e.target.value)},row:!0,"aria-label":"position",name:"position",defaultValue:"top"},l.a.createElement(D.a,{value:"Male",control:l.a.createElement(z.a,{color:"primary"}),label:"Male",labelPlacement:"top"}),l.a.createElement(D.a,{value:"Female",control:l.a.createElement(z.a,{color:"primary"}),label:"Female",labelPlacement:"top"}),l.a.createElement(D.a,{value:"Others",control:l.a.createElement(z.a,{color:"primary"}),label:"Others",labelPlacement:"top"}))),l.a.createElement("p",null,"Type *"),l.a.createElement(P.a,{component:"fieldset"},l.a.createElement(I.a,{value:ae,style:{border:"0.1px solid #3f51b5"},onChange:function(e){te(e.target.value)},row:!0,"aria-label":"position",name:"position",defaultValue:"top"},l.a.createElement(D.a,{value:"Vendor",control:l.a.createElement(z.a,{color:"primary"}),label:"Vendor",labelPlacement:"top"}),l.a.createElement(D.a,{value:"Customer",control:l.a.createElement(z.a,{color:"primary"}),label:"Customer",labelPlacement:"top"}),l.a.createElement(D.a,{value:"Bazolah",control:l.a.createElement(z.a,{color:"primary"}),label:"Bazolah",labelPlacement:"top"}))),l.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:j,onChange:function(e){w(e.target.value)},name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),l.a.createElement(W.a,{type:"submit",fullWidth:!0,disabled:!_||!r||!j||!R||!U||!Y||!Q||!ae||!j,variant:"contained",color:"primary",id:"login",onClick:function(e){e.preventDefault(),de(!0),S.post("/register",{fullName:_,email:r,gender:Q,age:R,location:U,type:ae,contactNo:Y,password:j}).then((function(e){o(""),w(""),oe(""),A(""),F(""),M(""),J(""),X(""),te(""),Se(!1),he(!0)})).catch((function(e){oe(e.response.message)})),de(!1)},className:Oe.submit},"Sign Up"),l.a.createElement(h.a,{container:!0},l.a.createElement(h.a,{item:!0},l.a.createElement("span",{onClickCapture:Ye,onClick:Ge,className:"login__topSpan"},"Already have an account? Sign In")))))))),l.a.createElement(u.a,null,l.a.createElement(W.a,{className:"login__topSpan",onClick:Ye,color:"primary",autoFocus:!0},"Close"))))}var We=function(){return l.a.createElement("div",null,"Customer Dashboard")},Ae=t(75),Pe=function(e){var a=e.component,t=Object(Ae.a)(e,["component"]);return l.a.createElement(i.b,Object.assign({},t,{render:function(e){return localStorage.getItem("token")&&"Customer"===localStorage.getItem("type")?l.a.createElement(a,e):l.a.createElement(i.a,{to:{pathname:"/",state:{from:e.location}}})}}))},Te=t(253),Ie=t(74),De=t.n(Ie),ze=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(0),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Be(){var e=l.a.useState(""),a=Object(m.a)(e,2),t=a[0],n=a[1],r=l.a.useState(""),o=Object(m.a)(r,2),c=o[0],i=o[1],s=l.a.useState(""),u=Object(m.a)(s,2),d=u[0],p=u[1],g=l.a.useState(""),h=Object(m.a)(g,2),b=h[0],C=h[1],w=l.a.useState(""),N=Object(m.a)(w,2),x=N[0],_=N[1],A=l.a.useState(""),P=Object(m.a)(A,2),T=P[0],I=P[1],D=l.a.useState(""),z=Object(m.a)(D,2),B=z[0],R=z[1],q=l.a.useState(""),F=Object(m.a)(q,2),L=F[0],V=F[1],U=l.a.useState(""),M=Object(m.a)(U,2),G=M[0],H=M[1],Y=l.a.useState(!1),K=Object(m.a)(Y,2),$=K[0],Q=K[1],Z=ze(),ee=J(),ae=Object(m.a)(ee,2),te=ae[0],ne=te.user,le=te.product,re=ae[1];return l.a.createElement(y.a,{component:"main",maxWidth:"xs"},l.a.createElement(E.a,null),l.a.createElement("div",{className:Z.paper},l.a.createElement(Te.a,{className:Z.avatar},l.a.createElement(De.a,null)),l.a.createElement(v.a,{component:"h1",variant:"h5"},"Add Product"),$&&l.a.createElement(k.a,{color:"secondary"}),G&&l.a.createElement(O.a,{severity:"error"},G),l.a.createElement("form",{className:Z.form,noValidate:!0},l.a.createElement(f.a,{variant:"outlined",margin:"normal",value:t,required:!0,onChange:function(e){n(e.target.value)},fullWidth:!0,id:"productname",label:"Product Name",name:"productname",autoComplete:"productname",autoFocus:!0}),l.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,value:c,fullWidth:!0,onChange:function(e){i(e.target.value)},id:"type",label:"Product Type",name:"type",autoComplete:"type"}),l.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,value:d,fullWidth:!0,onChange:function(e){p(e.target.value)},id:"description",label:"Description",name:"description",autoComplete:"description",type:"text"}),l.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:b,onChange:function(e){C(e.target.value)},id:"stock",label:"Stock",name:"stock",type:"number"}),l.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"dokanName",value:x,onChange:function(e){_(e.target.value)},label:"Dokan Name",name:"dokanName",autoComplete:"dokanName",type:"text"}),l.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"location",value:T,onChange:function(e){I(e.target.value)},label:"Location",name:"location",autoComplete:"location",type:"text"}),l.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"price",value:L,onChange:function(e){V(e.target.value)},label:"Price",name:"price",autoComplete:"price",type:"text"}),l.a.createElement(W.a,{type:"submit",fullWidth:!0,disabled:!t||!c||!d||!b||!x||!T||!L,variant:"contained",color:"primary",id:"login",onClick:function(e){e.preventDefault(),Q(!0),S.post("/product",{name:t,type:c,description:d,stock:b,dokanName:x,location:T,image:B,price:L,postedBy:ne._id},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){re({type:X,product:[].concat(Object(j.a)(le),[e.data])}),n(""),i(""),p(""),C(""),_(""),I(""),R(""),V(""),H("Product Added")})).catch((function(e){H(e.response.status)})),Q(!1)},className:Z.submit},"Add Product"))))}var Re=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(0),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function qe(){var e=l.a.useState(""),a=Object(m.a)(e,2),t=a[0],n=a[1],r=l.a.useState(""),o=Object(m.a)(r,2),c=o[0],i=o[1],s=l.a.useState(!1),u=Object(m.a)(s,2),d=u[0],p=u[1],g=Re(),h=J(),b=Object(m.a)(h,2),C=b[0].category,w=b[1];return l.a.createElement(y.a,{component:"main",maxWidth:"xs"},l.a.createElement(E.a,null),l.a.createElement("div",{className:g.paper},l.a.createElement(Te.a,{className:g.avatar},l.a.createElement(De.a,null)),l.a.createElement(v.a,{component:"h1",variant:"h5"},"Add Category"),d&&l.a.createElement(k.a,{color:"secondary"}),c&&l.a.createElement(O.a,{severity:"error"},c),l.a.createElement("form",{className:g.form,noValidate:!0},l.a.createElement(f.a,{variant:"outlined",margin:"normal",value:t,required:!0,onChange:function(e){n(e.target.value)},fullWidth:!0,id:"categoryname",label:"Category Name",name:"categoryname",autoComplete:"categoryname"}),l.a.createElement(W.a,{type:"submit",fullWidth:!0,disabled:!t,variant:"contained",color:"primary",id:"login",onClick:function(e){e.preventDefault(),p(!0),S.post("/category",{category:t},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){console.log(e.data),w({type:ee,category:[].concat(Object(j.a)(C),[e.data])}),n(""),i("Category Added")})).catch((function(e){console.log(e.response)})),p(!1)},className:g.submit},"Add Category"))))}var Fe=function(){var e=J(),a=Object(m.a)(e,2),t=a[0],r=t.user,o=t.product,c=(t.category,a[1]),s=Object(i.g)();return Object(n.useEffect)((function(){S.get("/profile",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){c({type:$,user:e.data})}))}),[c]),Object(n.useEffect)((function(){r&&S.get("/product/".concat(null===r||void 0===r?void 0:r._id)).then((function(e){c({type:Q,product:e.data})})).catch((function(e){console.log(e.response)}))}),[r,c]),Object(n.useEffect)((function(){S.get("/category").then((function(e){c({type:Z,category:e.data})})).catch((function(e){console.log(e.response)}))}),[c]),l.a.createElement("div",null,l.a.createElement(W.a,{onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("type"),s.push("/")}},"Logout"),l.a.createElement(Be,null),l.a.createElement(qe,null),l.a.createElement(ce,{products:o,searchProducts:[],showCategory:!0}))},Le=function(e){var a=e.component,t=Object(Ae.a)(e,["component"]);return l.a.createElement(i.b,Object.assign({},t,{render:function(e){return localStorage.getItem("token")&&"Vendor"===localStorage.getItem("type")?l.a.createElement(a,e):l.a.createElement(i.a,{to:{pathname:"/",state:{from:e.location}}})}}))},Ve=(t(173),t(119)),Ue=t.n(Ve),Me=t(120),Ge=t.n(Me),He=t(121),Ye=t.n(He),Je=t(242),Ke=t(243),$e=t(244),Qe=t(245),Xe=t(116),Ze=t.n(Xe),ea=t(117),aa=t.n(ea),ta=t(118),na=t.n(ta);var la=function(){return l.a.createElement("div",null,l.a.createElement("footer",{className:"footer-distributed"},l.a.createElement("div",{className:"footer-left"},l.a.createElement("h3",null,"Bazolah",l.a.createElement("span",null," Market Palace")),l.a.createElement("p",{className:"footer-links"},l.a.createElement(c.b,{to:"/",className:"footer-links-icons"},l.a.createElement(Ze.a,{fontSize:"large"})),l.a.createElement(c.b,{to:"/",className:"footer-links-icons"},l.a.createElement(aa.a,{fontSize:"large"})),l.a.createElement(c.b,{to:"/",className:"footer-links-icons"},l.a.createElement(na.a,{fontSize:"large"}))),l.a.createElement("p",{className:"footer-company-name"},"@Biplab Acharya \xa9 ",(new Date).getFullYear())),l.a.createElement("div",{className:"footer-center"},l.a.createElement(Je.a,{component:"nav","aria-label":"main mailbox folders"},l.a.createElement(Ke.a,null,l.a.createElement($e.a,null,l.a.createElement(Ue.a,null)),l.a.createElement(Qe.a,{primary:"Sifal, Panahilty Marga KTM, NEPAL"})),l.a.createElement(Ke.a,null,l.a.createElement($e.a,null,l.a.createElement(Ge.a,null)),l.a.createElement(Qe.a,{primary:"+1 555 123456"})),l.a.createElement(Ke.a,null,l.a.createElement($e.a,null,l.a.createElement(Ye.a,null)),l.a.createElement(Qe.a,{primary:"abc@gmailcom"})))),l.a.createElement("div",{className:"footer-right"},l.a.createElement("p",{className:"footer-company-about"},l.a.createElement("span",null,"About the company"),"Blozoah is a ecommerce for customers, who want to do online shopping & home delivery."),l.a.createElement("div",{classNameName:"footer-icons"},l.a.createElement(c.b,{to:"/"},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement(c.b,{to:"/"},l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement(c.b,{to:"/"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement(c.b,{to:"/"},l.a.createElement("i",{className:"fa fa-github"}))))))},ra=t(122),oa=t.n(ra);var ca=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(c.a,null,l.a.createElement(oa.a,{pageId:"100972251759163",appId:"1012992322500389"}),l.a.createElement(i.d,null,l.a.createElement(Pe,{exact:!0,path:"/customer",component:We})),l.a.createElement(i.d,null,l.a.createElement(Le,{exact:!0,path:"/vendor",component:Fe})),l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/",component:_e})),l.a.createElement(la,null)))},ia=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ma(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(Y,{initialState:{user:null,product:[],category:[],basket:[]},reducer:te},l.a.createElement(ca,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");ia?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ma(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ma(a,e)}))}}()}},[[135,1,2]]]);
//# sourceMappingURL=main.b8d25006.chunk.js.map