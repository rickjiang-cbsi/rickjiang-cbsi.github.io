(this["webpackJsonpvideo-robot-app"]=this["webpackJsonpvideo-robot-app"]||[]).push([[88],{2268:function(e,a,t){"use strict";t.r(a);var n=t(71),r=t(10),l=t(0),c=t.n(l),i=t(9),o=t(93),m=t(124),u=t.n(m),d=t(587),s=t(589),E=t(197),b=t(608),f=t(604),g=t(636),h=t(637),p=t(638),v=t(630),k=t(2301),w=t(569),y=t(92),O=t(2300),j=t(564),S=t(747),x=t(635),P=t(639),A=t(578),C=t(2302),$=t(570),I=t(588),D=t(523),z=t(153),B=t(157),M=t(731),R=t(624),F=t(732),J=t(613),G=t(525);function T(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n"]);return T=function(){return e},e}function W(){var e=Object(r.a)(["\n  background: ",";\n"]);return W=function(){return e},e}function q(){var e=Object(r.a)(["\n  min-width: 150px;\n"]);return q=function(){return e},e}function L(){var e=Object(r.a)(["\n  flex: 1 1 100%;\n"]);return L=function(){return e},e}function H(){var e=Object(r.a)(["\n  ",";\n\n  background: ",";\n  background: ",";\n  color: ",";\n"]);return H=function(){return e},e}var N=c.a.forwardRef((function(e,a){return c.a.createElement(o.c,Object.assign({innerRef:a},e))})),V=Object(i.d)(d.a)(G.b),K=Object(i.d)(s.a)(G.b),Q=Object(i.d)(E.a)(G.b),U=Object(i.d)(b.a)(H(),G.b,(function(e){return e.paid&&z.a[500]}),(function(e){return e.sent&&B.a[700]}),(function(e){return(e.paid||e.sent)&&e.theme.palette.common.white})),X=i.d.div(L()),Y=i.d.div(q()),Z=Object(i.d)(f.a)(W(),(function(e){return e.theme.palette.primary.main})),_=i.d.div(T());function ee(e,a,t,n,r,l,c){return{customer:e,customerEmail:a,customerAvatar:t,status:n,amount:r,id:l,date:c}}var ae=[ee("Anna Walley","anna@walley.com","A",0,"$530,00","000112","2020-01-02"),ee("Doris Fritz","doris@fritz.com","D",1,"$209,00","000114","2020-02-13"),ee("Edward Adkins","edward@adkins.com","E",2,"$535,00","000117","2020-03-04"),ee("Edwin Baker","edwin@baker.com","E",2,"$678,00","000115","2020-02-17"),ee("Gordon Workman","gordan@workman.com","G",0,"$314,00","000119","2020-03-28"),ee("Jo Avery","jo@avery.com","J",0,"$864,00","000113","2020-01-23"),ee("Leigha Hyden","leigha@hyden.com","L",2,"$341,00","000118","2020-03-14"),ee("Maureen Gagnon","maureen@gagnon.com","M",1,"$781,00","000116","2020-02-22"),ee("Maxine Thompson","maxine@thompson.com","M",0,"$273,00","000121","2020-05-31"),ee("Shawn Waddell","shawn@waddell.com","S",0,"$713,00","000120","2020-04-25")];function te(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var ne=[{id:"status",alignment:"left",label:"Status"},{id:"customer",alignment:"left",label:"Customer"},{id:"id",alignment:"right",label:"ID"},{id:"amount",alignment:"right",label:"Amount"},{id:"date",alignment:"left",label:"Issue Date"},{id:"actions",alignment:"right",label:"Actions"}];function re(e){var a=e.onSelectAllClick,t=e.order,n=e.orderBy,r=e.numSelected,l=e.rowCount,i=e.onRequestSort;return c.a.createElement(g.a,null,c.a.createElement(h.a,null,c.a.createElement(p.a,{padding:"checkbox"},c.a.createElement(v.a,{indeterminate:r>0&&r<l,checked:l>0&&r===l,onChange:a,inputProps:{"aria-label":"select all"}})),ne.map((function(e){return c.a.createElement(p.a,{key:e.id,align:e.alignment,padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&t},c.a.createElement(k.a,{active:n===e.id,direction:n===e.id?t:"asc",onClick:(a=e.id,function(e){i(e,a)})},e.label));var a}))))}var le=function(e){var a=e.numSelected;return c.a.createElement(w.a,null,c.a.createElement(Y,null,a>0?c.a.createElement(y.a,{color:"inherit",variant:"subtitle1"},a," selected"):c.a.createElement(y.a,{variant:"h6",id:"tableTitle"},"Invoices")),c.a.createElement(X,null),c.a.createElement("div",null,a>0?c.a.createElement(O.a,{title:"Delete"},c.a.createElement(j.a,{"aria-label":"Delete"},c.a.createElement(M.a,null))):c.a.createElement(O.a,{title:"Filter list"},c.a.createElement(j.a,{"aria-label":"Filter list"},c.a.createElement(R.a,null)))))};function ce(){var e=c.a.useState("asc"),a=Object(n.a)(e,2),t=a[0],r=a[1],l=c.a.useState("customer"),i=Object(n.a)(l,2),m=i[0],u=i[1],d=c.a.useState([]),s=Object(n.a)(d,2),E=s[0],b=s[1],f=c.a.useState(0),g=Object(n.a)(f,2),k=g[0],w=g[1],y=c.a.useState(5),O=Object(n.a)(y,2),$=O[0],I=O[1],D=$-Math.min($,ae.length-k*$);return c.a.createElement("div",null,c.a.createElement(Q,null,c.a.createElement(le,{numSelected:E.length}),c.a.createElement(S.a,null,c.a.createElement(x.a,{"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table"},c.a.createElement(re,{numSelected:E.length,order:t,orderBy:m,onSelectAllClick:function(e){if(e.target.checked){var a=ae.map((function(e){return e.id}));b(a)}else b([])},onRequestSort:function(e,a){r(m===a&&"asc"===t?"desc":"asc"),u(a)},rowCount:ae.length}),c.a.createElement(P.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(ae,function(e,a){return"desc"===e?function(e,t){return te(e,t,a)}:function(e,t){return-te(e,t,a)}}(t,m)).slice(k*$,k*$+$).map((function(e,a){var t,n=(t=e.id,-1!==E.indexOf(t)),r="enhanced-table-checkbox-".concat(a);return c.a.createElement(h.a,{hover:!0,role:"checkbox","aria-checked":n,tabIndex:-1,key:"".concat(e.id,"-").concat(a),selected:n},c.a.createElement(p.a,{padding:"checkbox"},c.a.createElement(v.a,{checked:n,inputProps:{"aria-labelledby":r},onClick:function(a){return function(e,a){var t=E.indexOf(a),n=[];-1===t?n=n.concat(E,a):0===t?n=n.concat(E.slice(1)):t===E.length-1?n=n.concat(E.slice(0,-1)):t>0&&(n=n.concat(E.slice(0,t),E.slice(t+1))),b(n)}(0,e.id)}})),c.a.createElement(p.a,{component:"th",id:r,scope:"row"},c.a.createElement(_,null,c.a.createElement(Z,null,e.customerAvatar),c.a.createElement(A.a,{ml:3},e.customer,c.a.createElement("br",null),e.customerEmail))),c.a.createElement(p.a,null,0===e.status&&c.a.createElement(U,{size:"small",mr:1,mb:1,label:"Sent",sent:!0}),1===e.status&&c.a.createElement(U,{size:"small",mr:1,mb:1,label:"Void"}),2===e.status&&c.a.createElement(U,{size:"small",mr:1,mb:1,label:"Paid",paid:!0})),c.a.createElement(p.a,{align:"right"},"#",e.id),c.a.createElement(p.a,{align:"right"},e.amount),c.a.createElement(p.a,null,e.date),c.a.createElement(p.a,{align:"right"},c.a.createElement(j.a,{"aria-label":"delete"},c.a.createElement(M.a,null)),c.a.createElement(j.a,{"aria-label":"details",component:o.b,to:"/invoices/detail"},c.a.createElement(F.a,null))))})),D>0&&c.a.createElement(h.a,{style:{height:53*D}},c.a.createElement(p.a,{colSpan:7}))))),c.a.createElement(C.a,{rowsPerPageOptions:[5,10,25],component:"div",count:ae.length,rowsPerPage:$,page:k,onChangePage:function(e,a){w(a)},onChangeRowsPerPage:function(e){I(parseInt(e.target.value,10)),w(0)}})))}a.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{title:"Invoices"}),c.a.createElement($.a,{justify:"space-between",container:!0,spacing:24},c.a.createElement($.a,{item:!0},c.a.createElement(y.a,{variant:"h3",gutterBottom:!0,display:"inline"},"Invoices"),c.a.createElement(K,{"aria-label":"Breadcrumb",mt:2},c.a.createElement(I.a,{component:N,exact:!0,to:"/"},"Dashboard"),c.a.createElement(I.a,{component:N,exact:!0,to:"/"},"Pages"),c.a.createElement(y.a,null,"Invoices"))),c.a.createElement($.a,{item:!0},c.a.createElement("div",null,c.a.createElement(D.a,{variant:"contained",color:"primary"},c.a.createElement(J.a,null),"New Invoice")))),c.a.createElement(V,{my:6}),c.a.createElement($.a,{container:!0,spacing:6},c.a.createElement($.a,{item:!0,xs:12},c.a.createElement(ce,null))))}}}]);
//# sourceMappingURL=88.4e2a3a49.chunk.js.map