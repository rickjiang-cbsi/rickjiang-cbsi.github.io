(this["webpackJsonpvideo-robot-app"]=this["webpackJsonpvideo-robot-app"]||[]).push([[28,27],{584:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var o=a(1),r=a(0),n=a.n(r),i=a(148);function c(e,t){var a=n.a.memo(n.a.forwardRef((function(t,a){return n.a.createElement(i.a,Object(o.a)({ref:a},t),e)})));return a.muiName=i.a.muiName,a}},585:function(e,t,a){"use strict";var o=a(1),r=a(3),n=a(0),i=(a(4),a(6)),c=a(197),l=a(8),s=n.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.raised,d=void 0!==s&&s,u=Object(r.a)(e,["classes","className","raised"]);return n.createElement(c.a,Object(o.a)({className:Object(i.a)(a.root,l),elevation:d?8:1,ref:t},u))}));t.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},586:function(e,t,a){"use strict";var o=a(1),r=a(3),n=a(0),i=(a(4),a(6)),c=a(8),l=n.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,d=Object(r.a)(e,["classes","className","component"]);return n.createElement(s,Object(o.a)({className:Object(i.a)(a.root,c),ref:t},d))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},587:function(e,t,a){"use strict";var o=a(1),r=a(3),n=a(0),i=(a(4),a(6)),c=a(8),l=a(33),s=n.forwardRef((function(e,t){var a=e.absolute,c=void 0!==a&&a,l=e.classes,s=e.className,d=e.component,u=void 0===d?"hr":d,p=e.flexItem,m=void 0!==p&&p,b=e.light,f=void 0!==b&&b,g=e.orientation,v=void 0===g?"horizontal":g,h=e.role,j=void 0===h?"hr"!==u?"separator":void 0:h,y=e.variant,O=void 0===y?"fullWidth":y,x=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(u,Object(o.a)({className:Object(i.a)(l.root,s,"fullWidth"!==O&&l[O],c&&l.absolute,m&&l.flexItem,f&&l.light,"vertical"===v&&l.vertical),role:j,ref:t},x))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},588:function(e,t,a){"use strict";var o=a(1),r=a(3),n=a(0),i=(a(4),a(6)),c=a(12),l=a(8),s=a(200),d=a(23),u=a(92),p=n.forwardRef((function(e,t){var a=e.classes,l=e.className,p=e.color,m=void 0===p?"primary":p,b=e.component,f=void 0===b?"a":b,g=e.onBlur,v=e.onFocus,h=e.TypographyClasses,j=e.underline,y=void 0===j?"hover":j,O=e.variant,x=void 0===O?"inherit":O,N=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),w=Object(s.a)(),C=w.isFocusVisible,k=w.onBlurVisible,R=w.ref,E=n.useState(!1),z=E[0],S=E[1],H=Object(d.a)(t,R);return n.createElement(u.a,Object(o.a)({className:Object(i.a)(a.root,a["underline".concat(Object(c.a)(y))],l,z&&a.focusVisible,"button"===f&&a.button),classes:h,color:m,component:f,onBlur:function(e){z&&(k(),S(!1)),g&&g(e)},onFocus:function(e){C(e)&&S(!0),v&&v(e)},ref:H,variant:x},N))}));t.a=Object(l.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(p)},589:function(e,t,a){"use strict";var o=a(1),r=a(54),n=a(3),i=a(0),c=(a(70),a(4),a(6)),l=a(8),s=a(92),d=a(33),u=a(584),p=Object(u.a)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=a(159);var b=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(d.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(n.a)(e,["classes"]);return i.createElement(m.a,Object(o.a)({component:"li",className:t.root,focusRipple:!0},a),i.createElement(p,{className:t.icon}))}));var f=i.forwardRef((function(e,t){var a=e.children,l=e.classes,d=e.className,u=e.component,p=void 0===u?"nav":u,m=e.expandText,f=void 0===m?"Show path":m,g=e.itemsAfterCollapse,v=void 0===g?1:g,h=e.itemsBeforeCollapse,j=void 0===h?1:h,y=e.maxItems,O=void 0===y?8:y,x=e.separator,N=void 0===x?"/":x,w=Object(n.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),C=i.useState(!1),k=C[0],R=C[1],E=i.Children.toArray(a).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:l.li,key:"child-".concat(t)},e)}));return i.createElement(s.a,Object(o.a)({ref:t,component:p,color:"textSecondary",className:Object(c.a)(l.root,d)},w),i.createElement("ol",{className:l.ol},function(e,t,a){return e.reduce((function(o,r,n){return n<e.length-1?o=o.concat(r,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(n),className:t},a)):o.push(r),o}),[])}(k||O&&E.length<=O?E:function(e){return j+v>=e.length?e:[].concat(Object(r.a)(e.slice(0,j)),[i.createElement(b,{"aria-label":f,key:"ellipsis",onClick:function(e){R(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(r.a)(e.slice(e.length-v,e.length)))}(E),l.separator,N)))}));t.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},591:function(e,t,a){"use strict";var o=a(0),r=o.createContext();t.a=r},597:function(e,t,a){"use strict";var o=a(0),r=o.createContext();t.a=r},635:function(e,t,a){"use strict";var o=a(3),r=a(1),n=a(0),i=(a(4),a(6)),c=a(8),l=a(597),s=n.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"table":s,u=e.padding,p=void 0===u?"default":u,m=e.size,b=void 0===m?"medium":m,f=e.stickyHeader,g=void 0!==f&&f,v=Object(o.a)(e,["classes","className","component","padding","size","stickyHeader"]),h=n.useMemo((function(){return{padding:p,size:b,stickyHeader:g}}),[p,b,g]);return n.createElement(l.a.Provider,{value:h},n.createElement(d,Object(r.a)({role:"table"===d?null:"table",ref:t,className:Object(i.a)(a.root,c,g&&a.stickyHeader)},v)))}));t.a=Object(c.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},636:function(e,t,a){"use strict";var o=a(1),r=a(3),n=a(0),i=(a(4),a(6)),c=a(8),l=a(591),s={variant:"head"},d=n.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,u=void 0===d?"thead":d,p=Object(r.a)(e,["classes","className","component"]);return n.createElement(l.a.Provider,{value:s},n.createElement(u,Object(o.a)({className:Object(i.a)(a.root,c),ref:t,role:"thead"===u?null:"rowgroup"},p)))}));t.a=Object(c.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},637:function(e,t,a){"use strict";var o=a(1),r=a(3),n=a(0),i=(a(4),a(6)),c=a(8),l=a(591),s=a(33),d=n.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"tr":s,u=e.hover,p=void 0!==u&&u,m=e.selected,b=void 0!==m&&m,f=Object(r.a)(e,["classes","className","component","hover","selected"]),g=n.useContext(l.a);return n.createElement(d,Object(o.a)({ref:t,className:Object(i.a)(a.root,c,g&&{head:a.head,footer:a.footer}[g.variant],p&&a.hover,b&&a.selected),role:"tr"===d?null:"row"},f))}));t.a=Object(c.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},638:function(e,t,a){"use strict";var o=a(3),r=a(1),n=a(0),i=(a(4),a(6)),c=a(8),l=a(12),s=a(33),d=a(597),u=a(591),p=n.forwardRef((function(e,t){var a,c,s=e.align,p=void 0===s?"inherit":s,m=e.classes,b=e.className,f=e.component,g=e.padding,v=e.scope,h=e.size,j=e.sortDirection,y=e.variant,O=Object(o.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),x=n.useContext(d.a),N=n.useContext(u.a),w=N&&"head"===N.variant;f?(c=f,a=w?"columnheader":"cell"):c=w?"th":"td";var C=v;!C&&w&&(C="col");var k=g||(x&&x.padding?x.padding:"default"),R=h||(x&&x.size?x.size:"medium"),E=y||N&&N.variant,z=null;return j&&(z="asc"===j?"ascending":"descending"),n.createElement(c,Object(r.a)({ref:t,className:Object(i.a)(m.root,m[E],b,"inherit"!==p&&m["align".concat(Object(l.a)(p))],"default"!==k&&m["padding".concat(Object(l.a)(k))],"medium"!==R&&m["size".concat(Object(l.a)(R))],"head"===E&&x&&x.stickyHeader&&m.stickyHeader),"aria-sort":z,role:a,scope:C},O))}));t.a=Object(c.a)((function(e){return{root:Object(r.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(s.e)(Object(s.c)(e.palette.divider,1),.88):Object(s.a)(Object(s.c)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0px 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},639:function(e,t,a){"use strict";var o=a(1),r=a(3),n=a(0),i=(a(4),a(6)),c=a(8),l=a(591),s={variant:"body"},d=n.forwardRef((function(e,t){var a=e.classes,c=e.className,d=e.component,u=void 0===d?"tbody":d,p=Object(r.a)(e,["classes","className","component"]);return n.createElement(l.a.Provider,{value:s},n.createElement(u,Object(o.a)({className:Object(i.a)(a.root,c),ref:t,role:"tbody"===u?null:"rowgroup"},p)))}));t.a=Object(c.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)}}]);
//# sourceMappingURL=28.6fc46053.chunk.js.map