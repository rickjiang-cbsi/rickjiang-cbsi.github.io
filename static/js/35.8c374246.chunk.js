(this["webpackJsonpvideo-robot-app"]=this["webpackJsonpvideo-robot-app"]||[]).push([[35],{584:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(1),n=a(0),o=a.n(n),i=a(148);function c(e,t){var a=o.a.memo(o.a.forwardRef((function(t,a){return o.a.createElement(i.a,Object(r.a)({ref:a},t),e)})));return a.muiName=i.a.muiName,a}},590:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(0),n=a(161);function o(){return r.useContext(n.a)}},594:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(0);function n(e){var t=e.controlled,a=e.default,n=(e.name,e.state,r.useRef(void 0!==t).current),o=r.useState(a),i=o[0],c=o[1];return[n?t:i,r.useCallback((function(e){n||c(e)}),[])]}},595:function(e,t,a){"use strict";var r=a(1),n=a(202),o=a(3),i=a(0),c=(a(4),a(6)),l=a(594),s=a(590),d=a(8),u=a(564),m=i.forwardRef((function(e,t){var a=e.autoFocus,d=e.checked,m=e.checkedIcon,f=e.classes,p=e.className,b=e.defaultChecked,h=e.disabled,v=e.icon,g=e.id,O=e.inputProps,j=e.inputRef,y=e.name,k=e.onBlur,x=e.onChange,C=e.onFocus,E=e.readOnly,S=e.required,N=e.tabIndex,I=e.type,B=e.value,R=Object(o.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),w=Object(l.a)({controlled:d,default:Boolean(b),name:"SwitchBase",state:"checked"}),$=Object(n.a)(w,2),z=$[0],F=$[1],q=Object(s.a)(),P=h;q&&"undefined"===typeof P&&(P=q.disabled);var D="checkbox"===I||"radio"===I;return i.createElement(u.a,Object(r.a)({component:"span",className:Object(c.a)(f.root,p,z&&f.checked,P&&f.disabled),disabled:P,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),q&&q.onFocus&&q.onFocus(e)},onBlur:function(e){k&&k(e),q&&q.onBlur&&q.onBlur(e)},ref:t},R),i.createElement("input",Object(r.a)({autoFocus:a,checked:d,defaultChecked:b,className:f.input,disabled:P,id:D&&g,name:y,onChange:function(e){var t=e.target.checked;F(t),x&&x(e,t)},readOnly:E,ref:j,required:S,tabIndex:N,type:I,value:B},O)),z?m:v)}));t.a=Object(d.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(m)},604:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),i=(a(4),a(6)),c=a(8),l=a(584),s=Object(l.a)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var d=o.forwardRef((function(e,t){var a=e.alt,c=e.children,l=e.classes,d=e.className,u=e.component,m=void 0===u?"div":u,f=e.imgProps,p=e.sizes,b=e.src,h=e.srcSet,v=e.variant,g=void 0===v?"circle":v,O=Object(n.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),j=null,y=function(e){var t=e.src,a=e.srcSet,r=o.useState(!1),n=r[0],i=r[1];return o.useEffect((function(){if(t||a){i(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=a,r.onload=function(){e&&i("loaded")},r.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,a]),n}({src:b,srcSet:h}),k=b||h,x=k&&"error"!==y;return j=x?o.createElement("img",Object(r.a)({alt:a,src:b,srcSet:h,sizes:p,className:l.img},f)):null!=c?c:k&&a?a[0]:o.createElement(s,{className:l.fallback}),o.createElement(m,Object(r.a)({className:Object(i.a)(l.root,l.system,l[g],d,!x&&l.colorDefault),ref:t},O),j)}));t.a=Object(c.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(d)},620:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),i=(a(4),a(6)),c=a(208),l=a(8),s=a(12),d=a(210),u=a(161),m=o.forwardRef((function(e,t){var a=e.children,l=e.classes,m=e.className,f=e.color,p=void 0===f?"primary":f,b=e.component,h=void 0===b?"div":b,v=e.disabled,g=void 0!==v&&v,O=e.error,j=void 0!==O&&O,y=e.fullWidth,k=void 0!==y&&y,x=e.focused,C=e.hiddenLabel,E=void 0!==C&&C,S=e.margin,N=void 0===S?"none":S,I=e.required,B=void 0!==I&&I,R=e.size,w=e.variant,$=void 0===w?"standard":w,z=Object(n.a)(e,["children","classes","className","color","component","disabled","error","fullWidth","focused","hiddenLabel","margin","required","size","variant"]),F=o.useState((function(){var e=!1;return a&&o.Children.forEach(a,(function(t){if(Object(d.a)(t,["Input","Select"])){var a=Object(d.a)(t,["Select"])?t.props.input:t;a&&Object(c.a)(a.props)&&(e=!0)}})),e})),q=F[0],P=F[1],D=o.useState((function(){var e=!1;return a&&o.Children.forEach(a,(function(t){Object(d.a)(t,["Input","Select"])&&Object(c.b)(t.props,!0)&&(e=!0)})),e})),M=D[0],L=D[1],W=o.useState(!1),H=W[0],A=W[1],T=void 0!==x?x:H;g&&T&&A(!1);var V=o.useCallback((function(){L(!0)}),[]),X={adornedStart:q,setAdornedStart:P,color:p,disabled:g,error:j,filled:M,focused:T,fullWidth:k,hiddenLabel:E,margin:("small"===R?"dense":void 0)||N,onBlur:function(){A(!1)},onEmpty:o.useCallback((function(){L(!1)}),[]),onFilled:V,onFocus:function(){A(!0)},registerEffect:void 0,required:B,variant:$};return o.createElement(u.a.Provider,{value:X},o.createElement(h,Object(r.a)({className:Object(i.a)(l.root,m,"none"!==N&&l["margin".concat(Object(s.a)(N))],k&&l.fullWidth),ref:t},z),a))}));t.a=Object(l.a)({root:{display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},marginNormal:{marginTop:16,marginBottom:8},marginDense:{marginTop:8,marginBottom:4},fullWidth:{width:"100%"}},{name:"MuiFormControl"})(m)},621:function(e,t,a){"use strict";var r=a(3),n=a(1),o=a(0),i=(a(4),a(6)),c=a(203),l=a(590),s=a(12),d=a(8),u=o.forwardRef((function(e,t){var a=e.children,d=e.classes,u=e.className,m=(e.color,e.component),f=void 0===m?"label":m,p=(e.disabled,e.error,e.filled,e.focused,e.required,Object(r.a)(e,["children","classes","className","color","component","disabled","error","filled","focused","required"])),b=Object(l.a)(),h=Object(c.a)({props:e,muiFormControl:b,states:["color","required","focused","disabled","error","filled"]});return o.createElement(f,Object(n.a)({className:Object(i.a)(d.root,d["color".concat(Object(s.a)(h.color||"primary"))],u,h.disabled&&d.disabled,h.error&&d.error,h.filled&&d.filled,h.focused&&d.focused,h.required&&d.required),ref:t},p),a,h.required&&o.createElement("span",{className:Object(i.a)(d.asterisk,h.error&&d.error)},"\u2009","*"))}));t.a=Object(d.a)((function(e){return{root:Object(n.a)({color:e.palette.text.secondary},e.typography.body1,{lineHeight:1,padding:0,"&$focused":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),colorSecondary:{"&$focused":{color:e.palette.secondary.main}},focused:{},disabled:{},error:{},filled:{},required:{},asterisk:{"&$error":{color:e.palette.error.main}}}}),{name:"MuiFormLabel"})(u)},630:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),i=(a(4),a(6)),c=a(595),l=a(584),s=Object(l.a)(o.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(l.a)(o.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),u=a(33),m=Object(l.a)(o.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=a(12),p=a(8),b=o.createElement(d,null),h=o.createElement(s,null),v=o.createElement(m,null),g=o.forwardRef((function(e,t){var a=e.checkedIcon,l=void 0===a?b:a,s=e.classes,d=e.color,u=void 0===d?"secondary":d,m=e.icon,p=void 0===m?h:m,g=e.indeterminate,O=void 0!==g&&g,j=e.indeterminateIcon,y=void 0===j?v:j,k=e.inputProps,x=e.size,C=void 0===x?"medium":x,E=Object(n.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]);return o.createElement(c.a,Object(r.a)({type:"checkbox",classes:{root:Object(i.a)(s.root,s["color".concat(Object(f.a)(u))],O&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:u,inputProps:Object(r.a)({"data-indeterminate":O},k),icon:o.cloneElement(O?y:p,{fontSize:"small"===C?"small":"default"}),checkedIcon:o.cloneElement(O?y:l,{fontSize:"small"===C?"small":"default"}),ref:t},E))}));t.a=Object(p.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(g)},640:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),i=(a(4),a(6)),c=a(203),l=a(590),s=a(8),d=a(621),u=o.forwardRef((function(e,t){var a=e.classes,s=e.className,u=e.disableAnimation,m=void 0!==u&&u,f=(e.margin,e.shrink),p=(e.variant,Object(n.a)(e,["classes","className","disableAnimation","margin","shrink","variant"])),b=Object(l.a)(),h=f;"undefined"===typeof h&&b&&(h=b.filled||b.focused||b.adornedStart);var v=Object(c.a)({props:e,muiFormControl:b,states:["margin","variant"]});return o.createElement(d.a,Object(r.a)({"data-shrink":h,className:Object(i.a)(a.root,s,b&&a.formControl,!m&&a.animated,h&&a.shrink,"dense"===v.margin&&a.marginDense,{filled:a.filled,outlined:a.outlined}[v.variant]),classes:{focused:a.focused,disabled:a.disabled,error:a.error,required:a.required,asterisk:a.asterisk},ref:t},p))}));t.a=Object(s.a)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(u)},665:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),i=(a(4),a(6)),c=a(583),l=a(8),s=o.forwardRef((function(e,t){var a=e.disableUnderline,l=e.classes,s=e.fullWidth,d=void 0!==s&&s,u=e.inputComponent,m=void 0===u?"input":u,f=e.multiline,p=void 0!==f&&f,b=e.type,h=void 0===b?"text":b,v=Object(n.a)(e,["disableUnderline","classes","fullWidth","inputComponent","multiline","type"]);return o.createElement(c.a,Object(r.a)({classes:Object(r.a)({},l,{root:Object(i.a)(l.root,!a&&l.underline),underline:null}),fullWidth:d,inputComponent:m,multiline:p,ref:t,type:h},v))}));s.muiName="Input",t.a=Object(l.a)((function(e){var t="light"===e.palette.type?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return{root:{position:"relative"},formControl:{"label + &":{marginTop:16}},focused:{},disabled:{},colorSecondary:{"&$underline:after":{borderBottomColor:e.palette.secondary.main}},underline:{"&:after":{borderBottom:"2px solid ".concat(e.palette.primary.main),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},"&$focused:after":{transform:"scaleX(1)"},"&$error:after":{borderBottomColor:e.palette.error.main,transform:"scaleX(1)"},"&:before":{borderBottom:"1px solid ".concat(t),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},"&:hover:not($disabled):before":{borderBottom:"2px solid ".concat(e.palette.text.primary),"@media (hover: none)":{borderBottom:"1px solid ".concat(t)}},"&$disabled:before":{borderBottomStyle:"dotted"}},error:{},marginDense:{},multiline:{},fullWidth:{},input:{},inputMarginDense:{},inputMultiline:{},inputTypeSearch:{}}}),{name:"MuiInput"})(s)},667:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),i=(a(4),a(6)),c=a(590),l=a(8),s=a(92),d=a(12),u=o.forwardRef((function(e,t){e.checked;var a=e.classes,l=e.className,u=e.control,m=e.disabled,f=(e.inputRef,e.label),p=e.labelPlacement,b=void 0===p?"end":p,h=(e.name,e.onChange,e.value,Object(n.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),v=Object(c.a)(),g=m;"undefined"===typeof g&&"undefined"!==typeof u.props.disabled&&(g=u.props.disabled),"undefined"===typeof g&&v&&(g=v.disabled);var O={disabled:g};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof u.props[t]&&"undefined"!==typeof e[t]&&(O[t]=e[t])})),o.createElement("label",Object(r.a)({className:Object(i.a)(a.root,l,"end"!==b&&a["labelPlacement".concat(Object(d.a)(b))],g&&a.disabled),ref:t},h),o.cloneElement(u,O),o.createElement(s.a,{component:"span",className:Object(i.a)(a.label,g&&a.disabled)},f))}));t.a=Object(l.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(u)}}]);
//# sourceMappingURL=35.8c374246.chunk.js.map