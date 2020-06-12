(this["webpackJsonpvideo-robot-app"]=this["webpackJsonpvideo-robot-app"]||[]).push([[22],{584:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(1),n=a(0),o=a.n(n),c=a(148);function i(e,t){var a=o.a.memo(o.a.forwardRef((function(t,a){return o.a.createElement(c.a,Object(r.a)({ref:a},t),e)})));return a.muiName=c.a.muiName,a}},585:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),c=(a(4),a(6)),i=a(197),s=a(8),l=o.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.raised,u=void 0!==l&&l,d=Object(n.a)(e,["classes","className","raised"]);return o.createElement(i.a,Object(r.a)({className:Object(c.a)(a.root,s),elevation:u?8:1,ref:t},d))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},586:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),c=(a(4),a(6)),i=a(8),s=o.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,l=void 0===s?"div":s,u=Object(n.a)(e,["classes","className","component"]);return o.createElement(l,Object(r.a)({className:Object(c.a)(a.root,i),ref:t},u))}));t.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},587:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),c=(a(4),a(6)),i=a(8),s=a(33),l=o.forwardRef((function(e,t){var a=e.absolute,i=void 0!==a&&a,s=e.classes,l=e.className,u=e.component,d=void 0===u?"hr":u,m=e.flexItem,f=void 0!==m&&m,p=e.light,b=void 0!==p&&p,h=e.orientation,v=void 0===h?"horizontal":h,g=e.role,j=void 0===g?"hr"!==d?"separator":void 0:g,O=e.variant,y=void 0===O?"fullWidth":O,x=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(d,Object(r.a)({className:Object(c.a)(s.root,l,"fullWidth"!==y&&s[y],i&&s.absolute,f&&s.flexItem,b&&s.light,"vertical"===v&&s.vertical),role:j,ref:t},x))}));t.a=Object(i.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(l)},588:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),c=(a(4),a(6)),i=a(12),s=a(8),l=a(200),u=a(23),d=a(92),m=o.forwardRef((function(e,t){var a=e.classes,s=e.className,m=e.color,f=void 0===m?"primary":m,p=e.component,b=void 0===p?"a":p,h=e.onBlur,v=e.onFocus,g=e.TypographyClasses,j=e.underline,O=void 0===j?"hover":j,y=e.variant,x=void 0===y?"inherit":y,N=Object(n.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),S=Object(l.a)(),z=S.isFocusVisible,k=S.onBlurVisible,E=S.ref,w=o.useState(!1),C=w[0],M=w[1],L=Object(u.a)(t,E);return o.createElement(d.a,Object(r.a)({className:Object(c.a)(a.root,a["underline".concat(Object(i.a)(O))],s,C&&a.focusVisible,"button"===b&&a.button),classes:g,color:f,component:b,onBlur:function(e){C&&(k(),M(!1)),h&&h(e)},onFocus:function(e){z(e)&&M(!0),v&&v(e)},ref:L,variant:x},N))}));t.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(m)},589:function(e,t,a){"use strict";var r=a(1),n=a(54),o=a(3),c=a(0),i=(a(70),a(4),a(6)),s=a(8),l=a(92),u=a(33),d=a(584),m=Object(d.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),f=a(159);var p=Object(s.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(u.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(o.a)(e,["classes"]);return c.createElement(f.a,Object(r.a)({component:"li",className:t.root,focusRipple:!0},a),c.createElement(m,{className:t.icon}))}));var b=c.forwardRef((function(e,t){var a=e.children,s=e.classes,u=e.className,d=e.component,m=void 0===d?"nav":d,f=e.expandText,b=void 0===f?"Show path":f,h=e.itemsAfterCollapse,v=void 0===h?1:h,g=e.itemsBeforeCollapse,j=void 0===g?1:g,O=e.maxItems,y=void 0===O?8:O,x=e.separator,N=void 0===x?"/":x,S=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),z=c.useState(!1),k=z[0],E=z[1],w=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return c.createElement("li",{className:s.li,key:"child-".concat(t)},e)}));return c.createElement(l.a,Object(r.a)({ref:t,component:m,color:"textSecondary",className:Object(i.a)(s.root,u)},S),c.createElement("ol",{className:s.ol},function(e,t,a){return e.reduce((function(r,n,o){return o<e.length-1?r=r.concat(n,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:t},a)):r.push(n),r}),[])}(k||y&&w.length<=y?w:function(e){return j+v>=e.length?e:[].concat(Object(n.a)(e.slice(0,j)),[c.createElement(p,{"aria-label":b,key:"ellipsis",onClick:function(e){E(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(n.a)(e.slice(e.length-v,e.length)))}(w),s.separator,N)))}));t.a=Object(s.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(b)},604:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),c=(a(4),a(6)),i=a(8),s=a(584),l=Object(s.a)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var u=o.forwardRef((function(e,t){var a=e.alt,i=e.children,s=e.classes,u=e.className,d=e.component,m=void 0===d?"div":d,f=e.imgProps,p=e.sizes,b=e.src,h=e.srcSet,v=e.variant,g=void 0===v?"circle":v,j=Object(n.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),O=null,y=function(e){var t=e.src,a=e.srcSet,r=o.useState(!1),n=r[0],c=r[1];return o.useEffect((function(){if(t||a){c(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=a,r.onload=function(){e&&c("loaded")},r.onerror=function(){e&&c("error")},function(){e=!1}}}),[t,a]),n}({src:b,srcSet:h}),x=b||h,N=x&&"error"!==y;return O=N?o.createElement("img",Object(r.a)({alt:a,src:b,srcSet:h,sizes:p,className:s.img},f)):null!=i?i:x&&a?a[0]:o.createElement(l,{className:s.fallback}),o.createElement(m,Object(r.a)({className:Object(c.a)(s.root,s.system,s[g],u,!N&&s.colorDefault),ref:t},j),O)}));t.a=Object(i.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(u)},699:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(75);t.a=Object(o.a)(n.a.createElement("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"}),"Drafts")},700:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(75);t.a=Object(o.a)(n.a.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send")},701:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(75);t.a=Object(o.a)(n.a.createElement("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder")},764:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),c=(a(4),a(6)),i=a(8),s=a(83),l=o.forwardRef((function(e,t){var a=e.classes,i=e.className,l=Object(n.a)(e,["classes","className"]),u=o.useContext(s.a);return o.createElement("div",Object(r.a)({className:Object(c.a)(a.root,i,"flex-start"===u.alignItems&&a.alignItemsFlexStart),ref:t},l))}));t.a=Object(i.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(l)},765:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(75);t.a=Object(o.a)(n.a.createElement("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"}),"Inbox")},766:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(75);t.a=Object(o.a)(n.a.createElement("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Image")},767:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(75);t.a=Object(o.a)(n.a.createElement("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}),"Work")},768:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(75);t.a=Object(o.a)(n.a.createElement("path",{d:"M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z"}),"BeachAccess")},969:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),c=(a(4),a(6)),i=a(8),s=a(12),l=o.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.color,u=void 0===l?"default":l,d=e.component,m=void 0===d?"li":d,f=e.disableGutters,p=void 0!==f&&f,b=e.disableSticky,h=void 0!==b&&b,v=e.inset,g=void 0!==v&&v,j=Object(n.a)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return o.createElement(m,Object(r.a)({className:Object(c.a)(a.root,i,"default"!==u&&a["color".concat(Object(s.a)(u))],g&&a.inset,!h&&a.sticky,!p&&a.gutters),ref:t},j))}));t.a=Object(i.a)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(l)}}]);
//# sourceMappingURL=22.d6de53db.chunk.js.map