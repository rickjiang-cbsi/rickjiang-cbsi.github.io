(this["webpackJsonpvideo-robot-app"]=this["webpackJsonpvideo-robot-app"]||[]).push([[43],{584:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var o=a(1),n=a(0),r=a.n(n),i=a(148);function c(e,t){var a=r.a.memo(r.a.forwardRef((function(t,a){return r.a.createElement(i.a,Object(o.a)({ref:a},t),e)})));return a.muiName=i.a.muiName,a}},585:function(e,t,a){"use strict";var o=a(1),n=a(3),r=a(0),i=(a(4),a(6)),c=a(197),l=a(8),s=r.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.raised,d=void 0!==s&&s,u=Object(n.a)(e,["classes","className","raised"]);return r.createElement(c.a,Object(o.a)({className:Object(i.a)(a.root,l),elevation:d?8:1,ref:t},u))}));t.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},586:function(e,t,a){"use strict";var o=a(1),n=a(3),r=a(0),i=(a(4),a(6)),c=a(8),l=r.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,d=Object(n.a)(e,["classes","className","component"]);return r.createElement(s,Object(o.a)({className:Object(i.a)(a.root,c),ref:t},d))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},587:function(e,t,a){"use strict";var o=a(1),n=a(3),r=a(0),i=(a(4),a(6)),c=a(8),l=a(33),s=r.forwardRef((function(e,t){var a=e.absolute,c=void 0!==a&&a,l=e.classes,s=e.className,d=e.component,u=void 0===d?"hr":d,m=e.flexItem,p=void 0!==m&&m,f=e.light,g=void 0!==f&&f,b=e.orientation,h=void 0===b?"horizontal":b,v=e.role,O=void 0===v?"hr"!==u?"separator":void 0:v,j=e.variant,y=void 0===j?"fullWidth":j,C=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return r.createElement(u,Object(o.a)({className:Object(i.a)(l.root,s,"fullWidth"!==y&&l[y],c&&l.absolute,p&&l.flexItem,g&&l.light,"vertical"===h&&l.vertical),role:O,ref:t},C))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},588:function(e,t,a){"use strict";var o=a(1),n=a(3),r=a(0),i=(a(4),a(6)),c=a(12),l=a(8),s=a(200),d=a(23),u=a(92),m=r.forwardRef((function(e,t){var a=e.classes,l=e.className,m=e.color,p=void 0===m?"primary":m,f=e.component,g=void 0===f?"a":f,b=e.onBlur,h=e.onFocus,v=e.TypographyClasses,O=e.underline,j=void 0===O?"hover":O,y=e.variant,C=void 0===y?"inherit":y,E=Object(n.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),x=Object(s.a)(),N=x.isFocusVisible,w=x.onBlurVisible,M=x.ref,k=r.useState(!1),z=k[0],S=k[1],L=Object(d.a)(t,M);return r.createElement(u.a,Object(o.a)({className:Object(i.a)(a.root,a["underline".concat(Object(c.a)(j))],l,z&&a.focusVisible,"button"===g&&a.button),classes:v,color:p,component:g,onBlur:function(e){z&&(w(),S(!1)),b&&b(e)},onFocus:function(e){N(e)&&S(!0),h&&h(e)},ref:L,variant:C},E))}));t.a=Object(l.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(m)},589:function(e,t,a){"use strict";var o=a(1),n=a(54),r=a(3),i=a(0),c=(a(70),a(4),a(6)),l=a(8),s=a(92),d=a(33),u=a(584),m=Object(u.a)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=a(159);var f=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(d.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(r.a)(e,["classes"]);return i.createElement(p.a,Object(o.a)({component:"li",className:t.root,focusRipple:!0},a),i.createElement(m,{className:t.icon}))}));var g=i.forwardRef((function(e,t){var a=e.children,l=e.classes,d=e.className,u=e.component,m=void 0===u?"nav":u,p=e.expandText,g=void 0===p?"Show path":p,b=e.itemsAfterCollapse,h=void 0===b?1:b,v=e.itemsBeforeCollapse,O=void 0===v?1:v,j=e.maxItems,y=void 0===j?8:j,C=e.separator,E=void 0===C?"/":C,x=Object(r.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),N=i.useState(!1),w=N[0],M=N[1],k=i.Children.toArray(a).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:l.li,key:"child-".concat(t)},e)}));return i.createElement(s.a,Object(o.a)({ref:t,component:m,color:"textSecondary",className:Object(c.a)(l.root,d)},x),i.createElement("ol",{className:l.ol},function(e,t,a){return e.reduce((function(o,n,r){return r<e.length-1?o=o.concat(n,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(r),className:t},a)):o.push(n),o}),[])}(w||y&&k.length<=y?k:function(e){return O+h>=e.length?e:[].concat(Object(n.a)(e.slice(0,O)),[i.createElement(f,{"aria-label":g,key:"ellipsis",onClick:function(e){M(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(n.a)(e.slice(e.length-h,e.length)))}(k),l.separator,E)))}));t.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)},695:function(e,t,a){"use strict";var o=a(0),n=a.n(o),r=a(75);t.a=Object(r.a)(n.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},935:function(e,t,a){"use strict";var o=a(3),n=a(1),r=a(0),i=(a(4),a(6)),c=a(33),l=a(8),s=a(197),d=a(584),u=Object(d.a)(r.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),m=Object(d.a)(r.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),p=Object(d.a)(r.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),f=Object(d.a)(r.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),g=Object(d.a)(r.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),b=a(564),h=a(12),v={success:r.createElement(u,{fontSize:"inherit"}),warning:r.createElement(m,{fontSize:"inherit"}),error:r.createElement(p,{fontSize:"inherit"}),info:r.createElement(f,{fontSize:"inherit"})},O=r.createElement(g,{fontSize:"small"}),j=r.forwardRef((function(e,t){var a=e.action,c=e.children,l=e.classes,d=e.className,u=e.closeText,m=void 0===u?"Close":u,p=e.color,f=e.icon,g=e.iconMapping,j=void 0===g?v:g,y=e.onClose,C=e.role,E=void 0===C?"alert":C,x=e.severity,N=void 0===x?"success":x,w=e.variant,M=void 0===w?"standard":w,k=Object(o.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return r.createElement(s.a,Object(n.a)({role:E,square:!0,elevation:0,className:Object(i.a)(l.root,l["".concat(M).concat(Object(h.a)(p||N))],d),ref:t},k),!1!==f?r.createElement("div",{className:l.icon},f||j[N]||v[N]):null,r.createElement("div",{className:l.message},c),null!=a?r.createElement("div",{className:l.action},a):null,null==a&&y?r.createElement("div",{className:l.action},r.createElement(b.a,{size:"small","aria-label":m,title:m,color:"inherit",onClick:y},O)):null)}));t.a=Object(l.a)((function(e){var t="light"===e.palette.type?c.a:c.e,a="light"===e.palette.type?c.e:c.a;return{root:Object(n.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:a(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:a(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:a(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:a(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(j)},957:function(e,t,a){"use strict";var o=a(1),n=a(3),r=a(0),i=(a(4),a(8)),c=a(92),l=a(6),s=r.forwardRef((function(e,t){var a=e.classes,i=e.className,s=Object(n.a)(e,["classes","className"]);return r.createElement(c.a,Object(o.a)({gutterBottom:!0,component:"div",ref:t,className:Object(l.a)(a.root,i)},s))}));t.a=Object(i.a)((function(e){return{root:{fontWeight:e.typography.fontWeightMedium,marginTop:-2}}}),{name:"MuiAlertTitle"})(s)}}]);
//# sourceMappingURL=43.f47a1366.chunk.js.map