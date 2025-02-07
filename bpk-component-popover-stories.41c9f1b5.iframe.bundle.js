(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[1530],{"./examples/bpk-component-popover/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Hover:()=>Hover,OnTheSide:()=>OnTheSide,TriggeredByInput:()=>TriggeredByInput,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,WithActionButton:()=>WithActionButton,WithCustomRenderTarget:()=>WithCustomRenderTarget,WithLabelAsTitle:()=>WithLabelAsTitle,WithNoCloseButtonIcon:()=>WithNoCloseButtonIcon,WithoutArrow:()=>WithoutArrow,default:()=>stories});var bpk_component_popover=__webpack_require__("./packages/bpk-component-popover/index.ts"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),bpk_component_button=__webpack_require__("./packages/bpk-component-button/index.ts"),bpk_component_input=__webpack_require__("./packages/bpk-component-input/index.ts"),bpk_component_text=__webpack_require__("./packages/bpk-component-text/index.ts"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const getClassName=(0,bpk_react_utils.fD)({"bpk-popover-paragraph":"bpk-popover-paragraph-a4OpO","bpk-popover-spacer":"bpk-popover-spacer-PC67S","bpk-popover-target":"bpk-popover-target-AIg3I"}),EnhancedInput=(0,bpk_component_input.y_)(bpk_component_input.Ay),Paragraph=(0,bpk_react_utils.i8)(bpk_component_text.A,{textStyle:bpk_component_text.r.bodyDefault,tagName:"p",className:getClassName("bpk-popover-paragraph")});class PopoverContainer extends react.Component{constructor(){super(),_defineProperty(this,"openPopover",(()=>{this.setState({isOpen:!0})})),_defineProperty(this,"closePopover",(()=>{this.setState({isOpen:!1})})),this.ref=(0,react.createRef)(),this.state={isOpen:!1}}render(){const{displayArrow,id,inputTrigger,...rest}=this.props;let target=null;const openButton=(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-popover-target"),ref:this.ref,children:(0,jsx_runtime.jsx)(bpk_component_button.Ay,{onClick:this.openPopover,children:"Open"})}),inputField=(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-popover-target"),ref:this.ref,children:(0,jsx_runtime.jsx)(EnhancedInput,{id:"input",name:"input",value:"John Smith",isOpen:this.state.isOpen,onOpen:this.openPopover,onChange:()=>null})});return target=inputTrigger?inputField:openButton,(0,jsx_runtime.jsx)("div",{id:"popover-container",children:(0,jsx_runtime.jsxs)(bpk_component_popover.A,{closeButtonLabel:"Close",id:"my-popover-".concat(id),isOpen:this.state.isOpen,label:"My popover",labelAsTitle:!0,onClose:this.closePopover,target,showArrow:displayArrow,...rest,children:[(0,jsx_runtime.jsx)(Paragraph,{children:"My popover content."}),(0,jsx_runtime.jsx)(Paragraph,{children:"Some more popover content."})]})})}}_defineProperty(PopoverContainer,"propTypes",{id:prop_types_default().string.isRequired,inputTrigger:prop_types_default().bool,displayArrow:prop_types_default().bool}),_defineProperty(PopoverContainer,"defaultProps",{inputTrigger:!1,displayArrow:!0});const Spacer=props=>(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-popover-spacer"),children:props.children}),DefaultExample=()=>(0,jsx_runtime.jsx)(Spacer,{children:(0,jsx_runtime.jsx)(PopoverContainer,{id:"my-popover-1"})}),WithCustomRenderTargetExample=()=>(0,jsx_runtime.jsxs)(Spacer,{children:[(0,jsx_runtime.jsx)("div",{id:"my-target"}),(0,jsx_runtime.jsx)(PopoverContainer,{id:"my-popover-1",renderTarget:()=>document.getElementById("my-target")})]}),HoverExample=()=>(0,jsx_runtime.jsx)(Spacer,{children:(0,jsx_runtime.jsx)(PopoverContainer,{id:"my-popover-1",hoverable:!0})}),WithoutArrowExample=()=>(0,jsx_runtime.jsx)(Spacer,{children:(0,jsx_runtime.jsx)(PopoverContainer,{id:"my-popover-2",displayArrow:!1})}),WithLabelAsTitleExample=()=>(0,jsx_runtime.jsx)(Spacer,{children:(0,jsx_runtime.jsx)(PopoverContainer,{id:"my-popover",labelAsTitle:!0})}),WithNoCloseButtonIconExample=()=>(0,jsx_runtime.jsx)(Spacer,{children:(0,jsx_runtime.jsx)(PopoverContainer,{id:"my-popover",labelAsTitle:!0,closeButtonIcon:!1})}),OnTheSideExample=()=>(0,jsx_runtime.jsx)(Spacer,{children:(0,jsx_runtime.jsx)(PopoverContainer,{id:"my-popover",placement:"right"})}),InputTriggerExample=()=>(0,jsx_runtime.jsx)(Spacer,{children:(0,jsx_runtime.jsx)(PopoverContainer,{id:"my-popover-1",inputTrigger:!0})}),WithActionButtonExample=()=>(0,jsx_runtime.jsx)(Spacer,{children:(0,jsx_runtime.jsx)(PopoverContainer,{id:"my-popover",actionText:"Action",onAction:()=>{}})}),VisualExample=()=>(0,jsx_runtime.jsx)(Spacer,{children:(0,jsx_runtime.jsx)(PopoverContainer,{id:"my-popover-1",isOpen:!0})});DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},WithCustomRenderTargetExample.__docgenInfo={description:"",methods:[],displayName:"WithCustomRenderTargetExample"},HoverExample.__docgenInfo={description:"",methods:[],displayName:"HoverExample"},WithoutArrowExample.__docgenInfo={description:"",methods:[],displayName:"WithoutArrowExample"},WithLabelAsTitleExample.__docgenInfo={description:"",methods:[],displayName:"WithLabelAsTitleExample"},WithNoCloseButtonIconExample.__docgenInfo={description:"",methods:[],displayName:"WithNoCloseButtonIconExample"},OnTheSideExample.__docgenInfo={description:"",methods:[],displayName:"OnTheSideExample"},InputTriggerExample.__docgenInfo={description:"",methods:[],displayName:"InputTriggerExample"},WithActionButtonExample.__docgenInfo={description:"",methods:[],displayName:"WithActionButtonExample"},VisualExample.__docgenInfo={description:"",methods:[],displayName:"VisualExample"},DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},WithCustomRenderTargetExample.__docgenInfo={description:"",methods:[],displayName:"WithCustomRenderTargetExample"},HoverExample.__docgenInfo={description:"",methods:[],displayName:"HoverExample"},WithoutArrowExample.__docgenInfo={description:"",methods:[],displayName:"WithoutArrowExample"},WithLabelAsTitleExample.__docgenInfo={description:"",methods:[],displayName:"WithLabelAsTitleExample"},WithNoCloseButtonIconExample.__docgenInfo={description:"",methods:[],displayName:"WithNoCloseButtonIconExample"},OnTheSideExample.__docgenInfo={description:"",methods:[],displayName:"OnTheSideExample"},InputTriggerExample.__docgenInfo={description:"",methods:[],displayName:"InputTriggerExample"},WithActionButtonExample.__docgenInfo={description:"",methods:[],displayName:"WithActionButtonExample"},VisualExample.__docgenInfo={description:"",methods:[],displayName:"VisualExample"};const stories={title:"bpk-component-popover",component:bpk_component_popover.A},Default=DefaultExample,WithCustomRenderTarget=WithCustomRenderTargetExample,Hover=HoverExample,WithoutArrow=WithoutArrowExample,WithLabelAsTitle=WithLabelAsTitleExample,WithNoCloseButtonIcon=WithNoCloseButtonIconExample,OnTheSide=OnTheSideExample,TriggeredByInput=InputTriggerExample,WithActionButton=WithActionButtonExample,VisualTest=VisualExample,VisualTestWithZoom=VisualTest.bind({});VisualTestWithZoom.args={zoomEnabled:!0}},"./packages/bpk-component-close-button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./packages/bpk-component-close-button/src/BpkCloseButton.tsx").A},"./packages/bpk-component-icon/sm/close.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CloseIcon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",width:"1rem",height:"1rem",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M5.587 3.467a1.5 1.5 0 1 0-2.194 2.046q.036.038.074.074l6.438 6.44-6.44 6.44a1.5 1.5 0 0 0 2.122 2.12l6.44-6.438 6.44 6.44a1.5 1.5 0 0 0 2.12-2.122l-6.438-6.44 6.44-6.44a1.5 1.5 0 0 0-2.122-2.12l-6.44 6.438-6.44-6.44z"})});CloseIcon.__docgenInfo={description:"",methods:[],displayName:"CloseIcon"};const __WEBPACK_DEFAULT_EXPORT__=CloseIcon;CloseIcon.__docgenInfo={description:"",methods:[],displayName:"CloseIcon"}},"./packages/bpk-component-close-button/src/BpkCloseButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>src_BpkCloseButton});var sm_close=__webpack_require__("./packages/bpk-component-icon/sm/close.jsx"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-close-button":"bpk-close-button-tFUsK","bpk-close-button__default":"bpk-close-button__default-aoSZy bpk-close-button-tFUsK","bpk-no-touch-support":"bpk-no-touch-support-ynK5x","bpk-close-button__onDark":"bpk-close-button__onDark-I1OZL bpk-close-button-tFUsK","bpk-close-button-icon":"bpk-close-button-icon-OCeal"}),BpkCloseButton=_ref=>{let{className=null,customIcon=null,label,onClick,onDark=!1,...rest}=_ref;const classNames=[getClassName(onDark?"bpk-close-button__onDark":"bpk-close-button__default")],Icon=customIcon||sm_close.default;return className&&classNames.push(className),(0,jsx_runtime.jsx)("button",{type:"button",title:label,onClick,"aria-label":label,className:classNames.join(" "),...rest,children:(0,jsx_runtime.jsx)("span",{className:getClassName("bpk-close-button-icon"),children:(0,jsx_runtime.jsx)(Icon,{})})})},src_BpkCloseButton=BpkCloseButton;try{BpkCloseButton.displayName="BpkCloseButton",BpkCloseButton.__docgenInfo={description:"",displayName:"BpkCloseButton",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: SyntheticEvent<any, Event>) => any"}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string | null | undefined"}},customIcon:{defaultValue:{value:"null"},description:"",name:"customIcon",required:!1,type:{name:"FunctionComponent<any> | null | undefined"}},onDark:{defaultValue:{value:"false"},description:"",name:"onDark",required:!1,type:{name:"Boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-close-button/src/BpkCloseButton.tsx#BpkCloseButton"]={docgenInfo:BpkCloseButton.__docgenInfo,name:"BpkCloseButton",path:"packages/bpk-component-close-button/src/BpkCloseButton.tsx#BpkCloseButton"})}catch(__react_docgen_typescript_loader_error){}},"./packages/bpk-component-popover/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>bpk_component_popover,v:()=>themeAttributes});var BpkPopover=__webpack_require__("./packages/bpk-component-popover/src/BpkPopover.tsx");const themeAttributes=[...__webpack_require__("./packages/bpk-component-link/index.js").vy],bpk_component_popover=BpkPopover.A},"./packages/bpk-component-popover/src/BpkPopover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>src_BpkPopover});var react=__webpack_require__("./node_modules/react/index.js"),floating_ui_react=__webpack_require__("./packages/node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),floating_ui_react_dom=__webpack_require__("./packages/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),floating_ui_dom=__webpack_require__("./packages/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),base_es6=__webpack_require__("./packages/node_modules/@skyscanner/bpk-foundations-web/tokens/base.es6.js"),bpk_component_close_button=__webpack_require__("./packages/bpk-component-close-button/index.js"),bpk_component_link=__webpack_require__("./packages/bpk-component-link/index.js"),bpk_component_text=__webpack_require__("./packages/bpk-component-text/index.ts"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-popover--container":"bpk-popover--container-Nwvom","bpk-popover":"bpk-popover-e615M","bpk-popover--appear":"bpk-popover--appear-MD8qo","bpk-popover--appear-active":"bpk-popover--appear-active-Ae584","bpk-popover__arrow":"bpk-popover__arrow-oXrD1","bpk-popover__body--padded":"bpk-popover__body--padded-yYcG5","bpk-popover__header":"bpk-popover__header-x3_1Z","bpk-popover__label":"bpk-popover__label-FCakZ","bpk-popover__footer":"bpk-popover__footer-_Ybbz","bpk-popover__action":"bpk-popover__action-aGY71"}),EVENT_SOURCES_CLOSE_BUTTON="CLOSE_BUTTON",EVENT_SOURCES_CLOSE_LINK="CLOSE_LINK",bindEventSource=(source,callback,event)=>{event.persist&&event.persist(),callback(event,{source})},BpkPopover=_ref=>{var _target$props;let{actionText,children,className=null,closeButtonIcon=!0,closeButtonLabel,closeButtonProps={},closeButtonText,hoverable=!1,id,isOpen=!1,label,labelAsTitle=!1,onAction,onClose,padded=!0,placement="bottom",renderTarget=()=>{},showArrow=!0,target,...rest}=_ref;const[isOpenState,setIsOpenState]=(0,react.useState)(isOpen);(0,react.useEffect)((()=>{isOpen||setIsOpenState(!1)}),[isOpen]);const arrowRef=(0,react.useRef)(null),{context,floatingStyles,refs}=(0,floating_ui_react.we)({open:isOpenState,onOpenChange:setIsOpenState,placement,middleware:[showArrow&&(0,floating_ui_react_dom.cY)(17),(0,floating_ui_react_dom.BN)(),showArrow&&(0,floating_ui_react_dom.UE)({element:arrowRef})],whileElementsMounted:floating_ui_dom.ll}),click=(0,floating_ui_react.kp)(context),dismiss=(0,floating_ui_react.s9)(context),hover=(0,floating_ui_react.Mk)(context,{enabled:hoverable,mouseOnly:!0,handleClose:(0,floating_ui_react.iB)({requireIntent:!1})}),{getFloatingProps,getReferenceProps}=(0,floating_ui_react.bv)([click,dismiss,hover]),targetClick=null==target||null===(_target$props=target.props)||void 0===_target$props?void 0:_target$props.onClick,referenceProps=targetClick?getReferenceProps({onClick:event=>{targetClick&&(event.stopPropagation(),targetClick(event))}}):getReferenceProps(),targetElement=(0,react.isValidElement)(target)?(0,react.cloneElement)(target,{...referenceProps,ref:refs.setReference}):(0,jsx_runtime.jsx)("div",{ref:refs.setReference,...referenceProps,children:target}),classNames=getClassName("bpk-popover",className),bodyClassNames=getClassName(padded&&"bpk-popover__body--padded"),labelId="bpk-popover-label-".concat(id),renderElement="function"==typeof renderTarget?renderTarget():renderTarget;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[targetElement,isOpenState&&(0,jsx_runtime.jsx)(floating_ui_react.XF,{root:renderElement,children:(0,jsx_runtime.jsx)(floating_ui_react.s3,{context,children:(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-popover--container"),ref:refs.setFloating,style:floatingStyles,...getFloatingProps(),children:(0,jsx_runtime.jsx)(bpk_react_utils.nW,{appearClassName:getClassName("bpk-popover--appear"),appearActiveClassName:getClassName("bpk-popover--appear-active"),transitionTimeout:200,children:(0,jsx_runtime.jsxs)("section",{id,tabIndex:-1,role:"dialog","aria-labelledby":labelId,className:classNames,...rest,children:[showArrow&&(0,jsx_runtime.jsx)(floating_ui_react.ie,{ref:arrowRef,context,id:"js-bpk-popover-arrow",className:getClassName("bpk-popover__arrow"),role:"presentation",stroke:base_es6.ImM,strokeWidth:.0625}),labelAsTitle?(0,jsx_runtime.jsxs)("header",{className:getClassName("bpk-popover__header"),children:[(0,jsx_runtime.jsx)(bpk_component_text.A,{tagName:"h2",id:labelId,textStyle:bpk_component_text.r.label1,children:label})," ",closeButtonIcon?(0,jsx_runtime.jsx)(bpk_component_close_button.A,{label:closeButtonText||closeButtonLabel,onClick:event=>{bindEventSource(EVENT_SOURCES_CLOSE_BUTTON,onClose,event),setIsOpenState(!1)},...closeButtonProps}):closeButtonText&&(0,jsx_runtime.jsx)(bpk_component_link.qC,{onClick:event=>{bindEventSource(EVENT_SOURCES_CLOSE_LINK,onClose,event),setIsOpenState(!1)},...closeButtonProps,children:closeButtonText})]}):(0,jsx_runtime.jsx)("span",{id:labelId,className:getClassName("bpk-popover__label"),children:label}),(0,jsx_runtime.jsx)("div",{className:bodyClassNames,children}),actionText&&onAction&&(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-popover__action"),children:(0,jsx_runtime.jsx)(bpk_component_link.qC,{onClick:onAction,children:actionText})}),!labelAsTitle&&closeButtonText&&(0,jsx_runtime.jsx)("footer",{className:getClassName("bpk-popover__footer"),children:(0,jsx_runtime.jsx)(bpk_component_link.qC,{onClick:event=>{bindEventSource(EVENT_SOURCES_CLOSE_LINK,onClose,event),setIsOpenState(!1)},...closeButtonProps,children:closeButtonText})})]})})})})})]})},src_BpkPopover=BpkPopover;try{BpkPopover.displayName="BpkPopover",BpkPopover.__docgenInfo={description:"",displayName:"BpkPopover",props:{closeButtonText:{defaultValue:null,description:"",name:"closeButtonText",required:!1,type:{name:"string | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"(event: SyntheticEvent<HTMLButtonElement, Event>, props: { source: string; }) => void"}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string | null | undefined"}},closeButtonIcon:{defaultValue:{value:"true"},description:"",name:"closeButtonIcon",required:!1,type:{name:"boolean | undefined"}},closeButtonProps:{defaultValue:{value:"{}"},description:"",name:"closeButtonProps",required:!1,type:{name:"Object | undefined"}},hoverable:{defaultValue:{value:"false"},description:"",name:"hoverable",required:!1,type:{name:"boolean | undefined"}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},labelAsTitle:{defaultValue:{value:"false"},description:"",name:"labelAsTitle",required:!1,type:{name:"boolean | undefined"}},padded:{defaultValue:{value:"true"},description:"",name:"padded",required:!1,type:{name:"boolean | undefined"}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"Placement | undefined"}},showArrow:{defaultValue:{value:"true"},description:"",name:"showArrow",required:!1,type:{name:"Boolean | undefined"}},target:{defaultValue:null,description:"",name:"target",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},closeButtonLabel:{defaultValue:null,description:"",name:"closeButtonLabel",required:!1,type:{name:"string | undefined"}},actionText:{defaultValue:null,description:"",name:"actionText",required:!1,type:{name:"string | undefined"}},onAction:{defaultValue:null,description:"",name:"onAction",required:!1,type:{name:"(() => void) | undefined"}},renderTarget:{defaultValue:{value:"() => undefined"},description:"",name:"renderTarget",required:!1,type:{name:"(() => HTMLElement | undefined) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-popover/src/BpkPopover.tsx#BpkPopover"]={docgenInfo:BpkPopover.__docgenInfo,name:"BpkPopover",path:"packages/bpk-component-popover/src/BpkPopover.tsx#BpkPopover"})}catch(__react_docgen_typescript_loader_error){}},"./packages/bpk-component-text/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,r:()=>_src_BpkText__WEBPACK_IMPORTED_MODULE_0__.r});var _src_BpkText__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/bpk-component-text/src/BpkText.tsx");const __WEBPACK_DEFAULT_EXPORT__=_src_BpkText__WEBPACK_IMPORTED_MODULE_0__.A},"./packages/bpk-component-text/src/BpkText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>TEXT_STYLES,A:()=>src_BpkText});var bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-text":"bpk-text-VX_BJ","bpk-text--xs":"bpk-text--xs-EM_Ve","bpk-text--sm":"bpk-text--sm-BR5tk","bpk-text--base":"bpk-text--base-O0oSZ","bpk-text--lg":"bpk-text--lg-PRHvI","bpk-text--xl":"bpk-text--xl-c0rYF","bpk-text--xxl":"bpk-text--xxl-bC9vq","bpk-text--xxxl":"bpk-text--xxxl-dnlhS","bpk-text--xxxxl":"bpk-text--xxxxl-Gvd_r","bpk-text--xxxxxl":"bpk-text--xxxxxl-w6aPA","bpk-text--caption":"bpk-text--caption-RqyVn","bpk-text--footnote":"bpk-text--footnote-EUYmG","bpk-text--label-1":"bpk-text--label-1-CTFrh","bpk-text--label-2":"bpk-text--label-2-fRYy0","bpk-text--label-3":"bpk-text--label-3-V2tTR","bpk-text--body-default":"bpk-text--body-default-GhV1e","bpk-text--body-longform":"bpk-text--body-longform-Q0jPC","bpk-text--subheading":"bpk-text--subheading-hNNLf","bpk-text--heading-1":"bpk-text--heading-1-mLkdL","bpk-text--heading-2":"bpk-text--heading-2-Sdp51","bpk-text--heading-3":"bpk-text--heading-3-h3_Zi","bpk-text--heading-4":"bpk-text--heading-4-kd8Iz","bpk-text--heading-5":"bpk-text--heading-5-SwiTC","bpk-text--hero-1":"bpk-text--hero-1-I_DPa","bpk-text--hero-2":"bpk-text--hero-2-unJDT","bpk-text--hero-3":"bpk-text--hero-3-F3RTj","bpk-text--hero-4":"bpk-text--hero-4-t2pv_","bpk-text--hero-5":"bpk-text--hero-5-i1Q2t","bpk-text--hero-6":"bpk-text--hero-6-AVN54","bpk-text--editorial-1":"bpk-text--editorial-1-DB1G0","bpk-text--editorial-2":"bpk-text--editorial-2-rR4cI","bpk-text--editorial-3":"bpk-text--editorial-3-RetwS"}),TEXT_STYLES={xs:"xs",sm:"sm",base:"base",lg:"lg",xl:"xl",xxl:"xxl",xxxl:"xxxl",xxxxl:"xxxxl",xxxxxl:"xxxxxl",caption:"caption",footnote:"footnote",label1:"label-1",label2:"label-2",label3:"label-3",bodyDefault:"body-default",bodyLongform:"body-longform",subheading:"subheading",heading1:"heading-1",heading2:"heading-2",heading3:"heading-3",heading4:"heading-4",heading5:"heading-5",hero1:"hero-1",hero2:"hero-2",hero3:"hero-3",hero4:"hero-4",hero5:"hero-5",hero6:"hero-6",editorial1:"editorial-1",editorial2:"editorial-2",editorial3:"editorial-3"},BpkText=_ref=>{let{children,className=null,tagName:TagName="span",textStyle=TEXT_STYLES.bodyDefault,...rest}=_ref;const classNames=getClassName("bpk-text","bpk-text--".concat(textStyle),className);return(0,jsx_runtime.jsx)(TagName,{className:classNames,...rest,children})},src_BpkText=BpkText;try{BpkText.displayName="BpkText",BpkText.__docgenInfo={description:"",displayName:"BpkText",props:{textStyle:{defaultValue:{value:"body-default"},description:"",name:"textStyle",required:!1,type:{name:"TextStyle | undefined"}},tagName:{defaultValue:null,description:"",name:"tagName",required:!1,type:{name:"Tag | undefined"}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string | null | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-text/src/BpkText.tsx#BpkText"]={docgenInfo:BpkText.__docgenInfo,name:"BpkText",path:"packages/bpk-component-text/src/BpkText.tsx#BpkText"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);