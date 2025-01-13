"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[8587],{"./examples/bpk-component-floating-notification/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,WithCta:()=>WithCta,WithCtaIconAndLongText:()=>WithCtaIconAndLongText,WithIcon:()=>WithIcon,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),CSSTransition=__webpack_require__("./packages/node_modules/react-transition-group/esm/CSSTransition.js"),bpk_component_aria_live=__webpack_require__("./packages/bpk-component-aria-live/index.ts"),bpk_component_button=__webpack_require__("./packages/bpk-component-button/index.ts"),bpk_component_text=__webpack_require__("./packages/bpk-component-text/index.ts"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-floating-notification":"bpk-floating-notification-yDFXE","bpk-floating-notification--leave":"bpk-floating-notification--leave-OChby","bpk-floating-notification--leave-active":"bpk-floating-notification--leave-active-KgwD1","bpk-floating-notification--leave-done":"bpk-floating-notification--leave-done-CEv3N","bpk-floating-notification--appear":"bpk-floating-notification--appear-MRSKF","bpk-floating-notification--appear-active":"bpk-floating-notification--appear-active-fcFxa","bpk-floating-notification__icon":"bpk-floating-notification__icon-B0XcL","bpk-floating-notification__text":"bpk-floating-notification__text-MusFz","bpk-floating-notification__cta":"bpk-floating-notification__cta-mum2K"}),BpkFloatingNotification=props=>{const[showMessage,setShowMessage]=(0,react.useState)(!0),{animateOnEnter=!0,animateOnExit=!0,className,ctaText,hideAfter=4e3,icon:Icon,onClick,onExit,text,...rest}=props,classNames=getClassName("bpk-floating-notification",className);return(0,react.useEffect)((()=>{let timer;return hideAfter&&(timer=setTimeout((()=>setShowMessage(!1)),hideAfter)),()=>timer&&clearTimeout(timer)})),(0,jsx_runtime.jsx)(CSSTransition.A,{in:showMessage,classNames:{exit:getClassName("bpk-floating-notification--leave"),exitActive:getClassName("bpk-floating-notification--leave-active"),exitDone:getClassName("bpk-floating-notification--leave-done"),appear:getClassName("bpk-floating-notification--appear"),appearActive:getClassName("bpk-floating-notification--appear-active")},timeout:400,appear:animateOnEnter,exit:animateOnExit,onExited:onExit,children:(0,jsx_runtime.jsxs)("div",{className:classNames,...rest,children:[Icon&&(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-floating-notification__icon"),children:(0,jsx_runtime.jsx)(Icon,{"aria-hidden":!0})}),(0,jsx_runtime.jsx)("span",{className:getClassName("bpk-floating-notification__text"),children:(0,jsx_runtime.jsx)(bpk_component_text.A,{tagName:"p",textStyle:bpk_component_text.r.bodyDefault,children:text})}),(0,jsx_runtime.jsx)(bpk_component_aria_live.A,{"aria-hidden":!0,children:text}),ctaText&&(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-floating-notification__cta"),children:(0,jsx_runtime.jsx)(bpk_component_button.Q1,{type:bpk_component_button.lP.linkOnDark,onClick,children:ctaText})})]})})},src_BpkFloatingNotification=BpkFloatingNotification;try{BpkFloatingNotification.displayName="BpkFloatingNotification",BpkFloatingNotification.__docgenInfo={description:"",displayName:"BpkFloatingNotification",props:{animateOnEnter:{defaultValue:null,description:"",name:"animateOnEnter",required:!1,type:{name:"boolean | undefined"}},animateOnExit:{defaultValue:null,description:"",name:"animateOnExit",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},ctaText:{defaultValue:null,description:"",name:"ctaText",required:!1,type:{name:"string | undefined"}},hideAfter:{defaultValue:null,description:"This prop controls the amount of time that the notification stays visible before the exit animation begins.\nThe default value is 4 seconds (4000 milliseconds).",name:"hideAfter",required:!1,type:{name:"number | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"FunctionComponent<{}> | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined"}},onExit:{defaultValue:null,description:"Execute a function after the component has finished the exit animation.",name:"onExit",required:!1,type:{name:"(() => void) | undefined"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-floating-notification/src/BpkFloatingNotification.tsx#BpkFloatingNotification"]={docgenInfo:BpkFloatingNotification.__docgenInfo,name:"BpkFloatingNotification",path:"packages/bpk-component-floating-notification/src/BpkFloatingNotification.tsx#BpkFloatingNotification"})}catch(__react_docgen_typescript_loader_error){}const bpk_component_floating_notification=src_BpkFloatingNotification;var heart=__webpack_require__("./packages/bpk-component-icon/sm/heart.jsx"),information_circle=__webpack_require__("./packages/bpk-component-icon/sm/information-circle.jsx");const stories={title:"bpk-component-floating-notification",component:src_BpkFloatingNotification},Default=()=>(0,jsx_runtime.jsx)(bpk_component_floating_notification,{text:"Saved",hideAfter:8e3}),WithIcon=()=>(0,jsx_runtime.jsx)(bpk_component_floating_notification,{icon:heart.default,text:"Saved",hideAfter:8e3}),WithCta=()=>(0,jsx_runtime.jsx)(bpk_component_floating_notification,{ctaText:"View",text:"Saved",hideAfter:8e3}),WithCtaIconAndLongText=()=>(0,jsx_runtime.jsx)(bpk_component_floating_notification,{ctaText:"View",icon:heart.default,text:"Killer Combo saved to New York and Miami 🎉",hideAfter:8e3}),VisualTest=()=>(0,jsx_runtime.jsx)(bpk_component_floating_notification,{animateOnEnter:!0,animateOnExit:!0,ctaText:"View",hideAfter:2147483647,icon:information_circle.default,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),VisualTestWithZoom={render:VisualTest,args:{zoomEnabled:!0}}},"./packages/bpk-component-icon/sm/heart.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const HeartIcon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",width:"1rem",height:"1rem",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M10.141 3.41a4.904 4.904 0 0 0-6.952.626 6.11 6.11 0 0 0-1.458 5.859c.898 4.03 5.543 8.553 9.051 11.415a1.905 1.905 0 0 0 2.436 0c3.508-2.862 8.153-7.384 9.05-11.415a6.1 6.1 0 0 0-1.457-5.86 4.904 4.904 0 0 0-6.952-.624l-1.18 1.03a1.025 1.025 0 0 1-1.357 0l-1.18-1.03z"})});HeartIcon.__docgenInfo={description:"",methods:[],displayName:"HeartIcon"};const __WEBPACK_DEFAULT_EXPORT__=HeartIcon;HeartIcon.__docgenInfo={description:"",methods:[],displayName:"HeartIcon"}},"./packages/bpk-component-icon/sm/information-circle.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const InformationCircleIcon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",width:"1rem",height:"1rem",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5M12 6a1.498 1.498 0 1 1-1.498 1.498A1.5 1.5 0 0 1 12 6m1.493 10.676a1.5 1.5 0 0 1-2.98.001l-.01-.175-.003-4.501.01-.176a1.5 1.5 0 0 1 2.98 0l.01.175.003 4.501z"})});InformationCircleIcon.__docgenInfo={description:"",methods:[],displayName:"InformationCircleIcon"};const __WEBPACK_DEFAULT_EXPORT__=InformationCircleIcon;InformationCircleIcon.__docgenInfo={description:"",methods:[],displayName:"InformationCircleIcon"}},"./packages/bpk-component-aria-live/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,C:()=>_src_BpkAriaLive__WEBPACK_IMPORTED_MODULE_0__.R});var _src_BpkAriaLive__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/bpk-component-aria-live/src/BpkAriaLive.tsx");const __WEBPACK_DEFAULT_EXPORT__=_src_BpkAriaLive__WEBPACK_IMPORTED_MODULE_0__.A},"./packages/bpk-component-aria-live/src/BpkAriaLive.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>POLITENESS_SETTINGS,A:()=>src_BpkAriaLive});var bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-aria-live--invisible":"bpk-aria-live--invisible-AfFK7"}),POLITENESS_SETTINGS={off:"off",polite:"polite",assertive:"assertive"},BpkAriaLive=_ref=>{let{className=null,politenessSetting=POLITENESS_SETTINGS.polite,visible=!1,...rest}=_ref;const classNames=getClassName("bpk-aria-live",!visible&&"bpk-aria-live--invisible",className);return(0,jsx_runtime.jsx)("div",{"aria-live":politenessSetting,className:classNames,...rest})},src_BpkAriaLive=BpkAriaLive;try{BpkAriaLive.displayName="BpkAriaLive",BpkAriaLive.__docgenInfo={description:"",displayName:"BpkAriaLive",props:{politenessSetting:{defaultValue:{value:"polite"},description:"",name:"politenessSetting",required:!1,type:{name:"PolitenessSetting | undefined"}},visible:{defaultValue:{value:"false"},description:"",name:"visible",required:!1,type:{name:"boolean | undefined"}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-aria-live/src/BpkAriaLive.tsx#BpkAriaLive"]={docgenInfo:BpkAriaLive.__docgenInfo,name:"BpkAriaLive",path:"packages/bpk-component-aria-live/src/BpkAriaLive.tsx#BpkAriaLive"})}catch(__react_docgen_typescript_loader_error){}},"./packages/bpk-component-text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,r:()=>_src_BpkText__WEBPACK_IMPORTED_MODULE_0__.r});var _src_BpkText__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/bpk-component-text/src/BpkText.tsx");const __WEBPACK_DEFAULT_EXPORT__=_src_BpkText__WEBPACK_IMPORTED_MODULE_0__.A},"./packages/bpk-component-text/src/BpkText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>TEXT_STYLES,A:()=>src_BpkText});var bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-text":"bpk-text-VX_BJ","bpk-text--xs":"bpk-text--xs-EM_Ve","bpk-text--sm":"bpk-text--sm-BR5tk","bpk-text--base":"bpk-text--base-O0oSZ","bpk-text--lg":"bpk-text--lg-PRHvI","bpk-text--xl":"bpk-text--xl-c0rYF","bpk-text--xxl":"bpk-text--xxl-bC9vq","bpk-text--xxxl":"bpk-text--xxxl-dnlhS","bpk-text--xxxxl":"bpk-text--xxxxl-Gvd_r","bpk-text--xxxxxl":"bpk-text--xxxxxl-w6aPA","bpk-text--caption":"bpk-text--caption-RqyVn","bpk-text--footnote":"bpk-text--footnote-EUYmG","bpk-text--label-1":"bpk-text--label-1-CTFrh","bpk-text--label-2":"bpk-text--label-2-fRYy0","bpk-text--label-3":"bpk-text--label-3-V2tTR","bpk-text--body-default":"bpk-text--body-default-GhV1e","bpk-text--body-longform":"bpk-text--body-longform-Q0jPC","bpk-text--subheading":"bpk-text--subheading-hNNLf","bpk-text--heading-1":"bpk-text--heading-1-mLkdL","bpk-text--heading-2":"bpk-text--heading-2-Sdp51","bpk-text--heading-3":"bpk-text--heading-3-h3_Zi","bpk-text--heading-4":"bpk-text--heading-4-kd8Iz","bpk-text--heading-5":"bpk-text--heading-5-SwiTC","bpk-text--hero-1":"bpk-text--hero-1-I_DPa","bpk-text--hero-2":"bpk-text--hero-2-unJDT","bpk-text--hero-3":"bpk-text--hero-3-F3RTj","bpk-text--hero-4":"bpk-text--hero-4-t2pv_","bpk-text--hero-5":"bpk-text--hero-5-i1Q2t","bpk-text--hero-6":"bpk-text--hero-6-AVN54","bpk-text--editorial-1":"bpk-text--editorial-1-DB1G0","bpk-text--editorial-2":"bpk-text--editorial-2-rR4cI","bpk-text--editorial-3":"bpk-text--editorial-3-RetwS"}),TEXT_STYLES={xs:"xs",sm:"sm",base:"base",lg:"lg",xl:"xl",xxl:"xxl",xxxl:"xxxl",xxxxl:"xxxxl",xxxxxl:"xxxxxl",caption:"caption",footnote:"footnote",label1:"label-1",label2:"label-2",label3:"label-3",bodyDefault:"body-default",bodyLongform:"body-longform",subheading:"subheading",heading1:"heading-1",heading2:"heading-2",heading3:"heading-3",heading4:"heading-4",heading5:"heading-5",hero1:"hero-1",hero2:"hero-2",hero3:"hero-3",hero4:"hero-4",hero5:"hero-5",hero6:"hero-6",editorial1:"editorial-1",editorial2:"editorial-2",editorial3:"editorial-3"},BpkText=_ref=>{let{children,className=null,tagName:TagName="span",textStyle=TEXT_STYLES.bodyDefault,...rest}=_ref;const classNames=getClassName("bpk-text","bpk-text--".concat(textStyle),className);return(0,jsx_runtime.jsx)(TagName,{className:classNames,...rest,children})},src_BpkText=BpkText;try{BpkText.displayName="BpkText",BpkText.__docgenInfo={description:"",displayName:"BpkText",props:{textStyle:{defaultValue:{value:"body-default"},description:"",name:"textStyle",required:!1,type:{name:"TextStyle | undefined"}},tagName:{defaultValue:null,description:"",name:"tagName",required:!1,type:{name:"Tag | undefined"}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string | null | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-text/src/BpkText.tsx#BpkText"]={docgenInfo:BpkText.__docgenInfo,name:"BpkText",path:"packages/bpk-component-text/src/BpkText.tsx#BpkText"})}catch(__react_docgen_typescript_loader_error){}}}]);