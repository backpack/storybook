(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[2087],{"./examples/bpk-component-ticket/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DayView:()=>DayView,Default:()=>Default,Vertical:()=>Vertical,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,WithAHrefProp:()=>WithAHrefProp,WithoutPadding:()=>WithoutPadding,WithoutPaddingAndInVertical:()=>WithoutPaddingAndInVertical,WithoutPaddingAndWithAnImage:()=>WithoutPaddingAndWithAnImage,default:()=>stories});var prop_types=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-ticket":"bpk-ticket-L2xNn","bpk-no-touch-support":"bpk-no-touch-support-Z_U1d","bpk-ticket__paper":"bpk-ticket__paper-GgsdI","bpk-ticket--vertical":"bpk-ticket--vertical-aAn7d","bpk-ticket__main":"bpk-ticket__main-Lm6ZV","bpk-ticket__main--horizontal":"bpk-ticket__main--horizontal-CsuMA","bpk-ticket__main--vertical":"bpk-ticket__main--vertical-wYDKx","bpk-ticket__main--padded":"bpk-ticket__main--padded-nijjT","bpk-ticket__main-inner":"bpk-ticket__main-inner-j1M4I","bpk-ticket__main-inner--horizontal":"bpk-ticket__main-inner--horizontal-IDKMf","bpk-ticket__main-inner--vertical":"bpk-ticket__main-inner--vertical-nnu8d","bpk-ticket__stub":"bpk-ticket__stub-HvPLE","bpk-ticket__stub--horizontal":"bpk-ticket__stub--horizontal-p2fS2","bpk-ticket__stub--vertical":"bpk-ticket__stub--vertical-U5_f1","bpk-ticket__stub--padded":"bpk-ticket__stub--padded-WUxQ5","bpk-ticket__stub-inner":"bpk-ticket__stub-inner-MJNZD","bpk-ticket__stub-inner--horizontal":"bpk-ticket__stub-inner--horizontal-o4Tey","bpk-ticket__stub-inner--vertical":"bpk-ticket__stub-inner--vertical-rNUmq"}),BpkTicket=props=>{const{children,className,href,padded,stub,stubClassName,stubProps,vertical,...rest}=props,classNames=getClassName("bpk-ticket",className,vertical&&"bpk-ticket--vertical"),mainClassNames=getClassName("bpk-ticket__paper","bpk-ticket__main",padded&&"bpk-ticket__main--padded",vertical&&"bpk-ticket__main--vertical",!vertical&&"bpk-ticket__main--horizontal"),mainInnerClassNames=getClassName("bpk-ticket__main-inner",vertical&&"bpk-ticket__main-inner--vertical",!vertical&&"bpk-ticket__main-inner--horizontal"),stubClassNames=getClassName("bpk-ticket__paper","bpk-ticket__stub",stubClassName,padded&&"bpk-ticket__stub--padded",vertical&&"bpk-ticket__stub--vertical",!vertical&&"bpk-ticket__stub--horizontal"),stubInnerClassNames=getClassName("bpk-ticket__stub-inner",vertical&&"bpk-ticket__stub-inner--vertical",!vertical&&"bpk-ticket__stub-inner--horizontal"),mainContent=padded?children:(0,jsx_runtime.jsx)("div",{className:mainInnerClassNames,children}),stubContent=padded?stub:(0,jsx_runtime.jsx)("div",{className:stubInnerClassNames,children:stub}),contents=[(0,jsx_runtime.jsx)("div",{className:mainClassNames,children:mainContent},"main"),(0,jsx_runtime.jsx)("div",{className:stubClassNames,...stubProps,children:stubContent},"stub")];return href?(0,jsx_runtime.jsx)("a",{href,className:classNames,...rest,children:contents}):(0,jsx_runtime.jsx)("div",{role:"button",className:classNames,...rest,children:contents})};BpkTicket.propTypes={children:prop_types_default().node.isRequired,stub:prop_types_default().node.isRequired,className:prop_types_default().string,href:prop_types_default().string,padded:prop_types_default().bool,vertical:prop_types_default().bool,stubClassName:prop_types_default().string,stubProps:prop_types_default().object},BpkTicket.defaultProps={className:null,href:null,padded:!0,vertical:!1,stubClassName:null,stubProps:{}},BpkTicket.__docgenInfo={description:"@deprecated use bpk-component-card instead\n@returns {Component} a ticket component",methods:[],displayName:"BpkTicket",props:{className:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},href:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},padded:{defaultValue:{value:"true",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},vertical:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},stubClassName:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},stubProps:{defaultValue:{value:"{}",computed:!1},required:!1,flowType:{name:"signature",type:"object",raw:"{ [string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"",type:{name:"object"}},children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}},stub:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};const src_BpkTicket=BpkTicket;BpkTicket.__docgenInfo={description:"@deprecated use bpk-component-card instead\n@returns {Component} a ticket component",methods:[],displayName:"BpkTicket",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}},stub:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}},stubProps:{required:!1,flowType:{name:"signature",type:"object",raw:"{ [string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"",defaultValue:{value:"{}",computed:!1},type:{name:"object"}},padded:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},vertical:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},stubClassName:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},href:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}}}};var node_modules_prop_types=__webpack_require__("./node_modules/prop-types/index.js"),node_modules_prop_types_default=__webpack_require__.n(node_modules_prop_types),bpk_component_button=__webpack_require__("./packages/bpk-component-button/index.ts"),bpk_component_icon=__webpack_require__("./packages/bpk-component-icon/index.tsx"),long_arrow_right=__webpack_require__("./packages/bpk-component-icon/sm/long-arrow-right.jsx");const bpk_component_ticket=src_BpkTicket,examples_getClassName=(0,bpk_react_utils.fD)({"bpk-stories-flight":"bpk-stories-flight-eXsGD","bpk-stories-flight__stub":"bpk-stories-flight__stub-fWXGJ","bpk-stories-flight__small":"bpk-stories-flight__small-Iafql","bpk-stories-flight__logo":"bpk-stories-flight__logo-AAxlB","bpk-stories-flight__price":"bpk-stories-flight__price-G3CKB","bpk-stories-flight__flight-overview":"bpk-stories-flight__flight-overview-bjrtG","bpk-stories-flight__main":"bpk-stories-flight__main-cQUD7","bpk-stories-flight__from":"bpk-stories-flight__from-w2NhI","bpk-stories-flight__to":"bpk-stories-flight__to-oiYI3","bpk-stories-flight__duration":"bpk-stories-flight__duration-S0zFc","bpk-stories-flight__time":"bpk-stories-flight__time-nxWgX"}),AlignedArrowRightIcon=(0,bpk_component_icon.Wd)((0,bpk_component_icon.yk)(long_arrow_right.default)),flights=Array(100).fill({price:"143",from:"LCY",to:"EDI",departure:"20:50",arrival:"22:10",duration:"1h 20",logo:"//logos.skyscnr.com/images/airlines/BA.png"}),Flight=_ref=>{let{flight}=_ref;return(0,jsx_runtime.jsx)(bpk_component_ticket,{className:examples_getClassName("bpk-stories-flight"),stubClassName:examples_getClassName("bpk-stories-flight__stub"),stub:(0,jsx_runtime.jsxs)("div",{className:examples_getClassName("bpk-stories-flight__stub"),children:[(0,jsx_runtime.jsx)("div",{className:examples_getClassName("bpk-stories-flight__small"),children:"8 deals from"}),(0,jsx_runtime.jsxs)("div",{className:examples_getClassName("bpk-stories-flight__price"),children:["£",flight.price]}),(0,jsx_runtime.jsxs)(bpk_component_button.Ay,{children:["Select ",(0,jsx_runtime.jsx)(AlignedArrowRightIcon,{fill:"white"})]})]}),children:(0,jsx_runtime.jsxs)("div",{className:examples_getClassName("bpk-stories-flight__main"),children:[(0,jsx_runtime.jsxs)("div",{className:examples_getClassName("bpk-stories-flight__flight-overview"),children:[(0,jsx_runtime.jsx)("img",{className:examples_getClassName("bpk-stories-flight__logo"),src:flight.logo,alt:"BA Logo"}),(0,jsx_runtime.jsxs)("div",{className:examples_getClassName("bpk-stories-flight__from"),children:[(0,jsx_runtime.jsx)("div",{className:examples_getClassName("bpk-stories-flight__time"),children:flight.departure}),(0,jsx_runtime.jsx)("div",{children:flight.from})]}),(0,jsx_runtime.jsx)("div",{children:flight.duration}),(0,jsx_runtime.jsxs)("div",{className:examples_getClassName("bpk-stories-flight__to"),children:[(0,jsx_runtime.jsx)("div",{className:examples_getClassName("bpk-stories-flight__time"),children:flight.arrival}),(0,jsx_runtime.jsx)("div",{children:flight.to})]})]}),(0,jsx_runtime.jsx)("div",{className:examples_getClassName("bpk-stories-flight__small"),children:"Operated by BA Cityflyer"})]})})};Flight.propTypes={flight:node_modules_prop_types_default().objectOf(node_modules_prop_types_default().string).isRequired};const DefaultExample=()=>(0,jsx_runtime.jsx)(bpk_component_ticket,{stub:"Lorem ipsum dolor sit amet.",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}),VerticalExample=()=>(0,jsx_runtime.jsx)(bpk_component_ticket,{stub:"Lorem ipsum dolor sit amet.",vertical:!0,children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}),WithoutPaddingExample=()=>(0,jsx_runtime.jsx)(bpk_component_ticket,{stub:"Lorem ipsum dolor sit amet.",padded:!1,children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}),WithoutPaddingVerticalExample=()=>(0,jsx_runtime.jsx)(bpk_component_ticket,{stub:"Lorem ipsum dolor sit amet.",padded:!1,vertical:!0,children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}),WithoutPaddingImageExample=()=>(0,jsx_runtime.jsx)(bpk_component_ticket,{stub:"Lorem ipsum dolor sit amet.",padded:!1,children:(0,jsx_runtime.jsx)("img",{src:"https://images.unsplash.com/44/MIbCzcvxQdahamZSNQ26_12082014-IMG_3526.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=22b674fb2c751f77f7d80d22c77da67a&auto=format&fit=crop&w=1650&q=80",alt:"Thoughtful bear",width:300})}),WithHrefExample=()=>(0,jsx_runtime.jsx)(bpk_component_ticket,{stub:"Lorem ipsum dolor sit amet.",href:"#",children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}),DayViewExample=()=>(0,jsx_runtime.jsx)("div",{style:{margin:"0 auto",maxWidth:"800px"},children:flights.map(((f,i)=>(0,jsx_runtime.jsx)(Flight,{flight:f},"f-".concat(i.toString()))))}),MixedExample=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(DefaultExample,{}),(0,jsx_runtime.jsx)(VerticalExample,{}),(0,jsx_runtime.jsx)(WithoutPaddingExample,{}),(0,jsx_runtime.jsx)(WithoutPaddingVerticalExample,{}),(0,jsx_runtime.jsx)(WithHrefExample,{})]});DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},VerticalExample.__docgenInfo={description:"",methods:[],displayName:"VerticalExample"},WithoutPaddingExample.__docgenInfo={description:"",methods:[],displayName:"WithoutPaddingExample"},WithoutPaddingVerticalExample.__docgenInfo={description:"",methods:[],displayName:"WithoutPaddingVerticalExample"},WithoutPaddingImageExample.__docgenInfo={description:"",methods:[],displayName:"WithoutPaddingImageExample"},WithHrefExample.__docgenInfo={description:"",methods:[],displayName:"WithHrefExample"},DayViewExample.__docgenInfo={description:"",methods:[],displayName:"DayViewExample"},MixedExample.__docgenInfo={description:"",methods:[],displayName:"MixedExample"},DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},VerticalExample.__docgenInfo={description:"",methods:[],displayName:"VerticalExample"},WithoutPaddingExample.__docgenInfo={description:"",methods:[],displayName:"WithoutPaddingExample"},WithoutPaddingVerticalExample.__docgenInfo={description:"",methods:[],displayName:"WithoutPaddingVerticalExample"},WithoutPaddingImageExample.__docgenInfo={description:"",methods:[],displayName:"WithoutPaddingImageExample"},WithHrefExample.__docgenInfo={description:"",methods:[],displayName:"WithHrefExample"},DayViewExample.__docgenInfo={description:"",methods:[],displayName:"DayViewExample"},MixedExample.__docgenInfo={description:"",methods:[],displayName:"MixedExample"};const stories={title:"bpk-component-ticket",component:src_BpkTicket},Default=DefaultExample,Vertical=VerticalExample,WithoutPadding=WithoutPaddingExample,WithoutPaddingAndInVertical=WithoutPaddingVerticalExample,WithoutPaddingAndWithAnImage=WithoutPaddingImageExample,WithAHrefProp=WithHrefExample,DayView=DayViewExample,VisualTest=MixedExample,VisualTestWithZoom=VisualTest.bind({});VisualTestWithZoom.args={zoomEnabled:!0}},"./packages/bpk-component-icon/sm/long-arrow-right.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const LongArrowRightIcon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",width:"1rem",height:"1rem",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M3 12a1.5 1.5 0 0 0 1.5 1.5h11.379l-4.94 4.94a1.5 1.5 0 0 0 2.122 2.12l7.5-7.5a1.5 1.5 0 0 0 0-2.12l-7.5-7.5a1.5 1.5 0 0 0-2.122 2.12l4.94 4.94H4.5A1.5 1.5 0 0 0 3 12",clipRule:"evenodd"})});LongArrowRightIcon.__docgenInfo={description:"",methods:[],displayName:"LongArrowRightIcon"};const __WEBPACK_DEFAULT_EXPORT__=LongArrowRightIcon;LongArrowRightIcon.__docgenInfo={description:"",methods:[],displayName:"LongArrowRightIcon"}},"./packages/bpk-component-icon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c2:()=>withAlignment,Wd:()=>withButtonAlignment,Tr:()=>withLargeButtonAlignment,yk:()=>src_withRtlSupport});var base_es6=__webpack_require__("./packages/node_modules/@skyscanner/bpk-foundations-web/tokens/base.es6.js"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function withAlignment(Component,objectHeight,subjectHeight){const WithAlignment=props=>{const objectHeightDecimal="".concat(objectHeight).replace("rem",""),subjectHeightDecimal="".concat(subjectHeight).replace("rem",""),marginTopCalculated="".concat(Math.max(0,objectHeightDecimal-subjectHeightDecimal)/2,"rem");return(0,jsx_runtime.jsx)("span",{style:{lineHeight:subjectHeight,display:"inline-block",marginTop:marginTopCalculated,verticalAlign:"top"},children:(0,jsx_runtime.jsx)(Component,{...props})})};return WithAlignment.displayName=(0,bpk_react_utils.GB)(Component,"withAlignment"),WithAlignment}(0,bpk_react_utils.fD)({"bpk-icon-description":"bpk-icon-description-hLj3a"});const src_withRtlSupport=function(displayName){let classNamesToAdd=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return ComposedComponent=>{const ClassNameModifierHOC=props=>{let classNames=[];const{className,...rest}=props;return className&&classNames.push(className),classNames=classNamesToAdd.length?classNames.concat(classNamesToAdd):classNames,(0,jsx_runtime.jsx)(ComposedComponent,{className:classNames.join(" "),...rest})};return ClassNameModifierHOC.displayName=(0,bpk_react_utils.GB)(ComposedComponent,displayName),ClassNameModifierHOC}}("withRtlSupport",[(0,bpk_react_utils.fD)({"bpk-icon--align-to-button":"bpk-icon--align-to-button-fs9XS","bpk-icon--align-to-large-button":"bpk-icon--align-to-large-button-LtCWk","bpk-icon--rtl-support":"bpk-icon--rtl-support-VCp04"})("bpk-icon--rtl-support")]);try{withRtlSupport.displayName="withRtlSupport",withRtlSupport.__docgenInfo={description:"",displayName:"withRtlSupport",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-icon/src/withRtlSupport.tsx#withRtlSupport"]={docgenInfo:withRtlSupport.__docgenInfo,name:"withRtlSupport",path:"packages/bpk-component-icon/src/withRtlSupport.tsx#withRtlSupport"})}catch(__react_docgen_typescript_loader_error){}function withButtonAlignment(WrappedComponent){return withAlignment(WrappedComponent,base_es6.dag,base_es6.Bms)}function withLargeButtonAlignment(WrappedComponent){return withAlignment(WrappedComponent,base_es6.dag,base_es6.krg)}try{withButtonAlignment.displayName="withButtonAlignment",withButtonAlignment.__docgenInfo={description:"",displayName:"withButtonAlignment",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-icon/index.tsx#withButtonAlignment"]={docgenInfo:withButtonAlignment.__docgenInfo,name:"withButtonAlignment",path:"packages/bpk-component-icon/index.tsx#withButtonAlignment"})}catch(__react_docgen_typescript_loader_error){}try{withLargeButtonAlignment.displayName="withLargeButtonAlignment",withLargeButtonAlignment.__docgenInfo={description:"",displayName:"withLargeButtonAlignment",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-icon/index.tsx#withLargeButtonAlignment"]={docgenInfo:withLargeButtonAlignment.__docgenInfo,name:"withLargeButtonAlignment",path:"packages/bpk-component-icon/index.tsx#withLargeButtonAlignment"})}catch(__react_docgen_typescript_loader_error){}try{bpkcomponenticon.displayName="bpkcomponenticon",bpkcomponenticon.__docgenInfo={description:"",displayName:"bpkcomponenticon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-icon/index.tsx#bpkcomponenticon"]={docgenInfo:bpkcomponenticon.__docgenInfo,name:"bpkcomponenticon",path:"packages/bpk-component-icon/index.tsx#bpkcomponenticon"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);