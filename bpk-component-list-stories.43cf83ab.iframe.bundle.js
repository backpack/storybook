"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[8419],{"./examples/bpk-component-list/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Nested:()=>Nested,Ordered:()=>Ordered,Unordered:()=>Unordered,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,default:()=>stories});var BpkList=__webpack_require__("./packages/bpk-component-list/src/BpkList.js"),BpkListItem=__webpack_require__("./packages/bpk-component-list/src/BpkListItem.js"),bpk_component_list=__webpack_require__("./packages/bpk-component-list/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UnorderedExample=()=>(0,jsx_runtime.jsxs)(bpk_component_list.G,{children:[(0,jsx_runtime.jsx)(bpk_component_list.D,{children:"Flights"}),(0,jsx_runtime.jsx)(bpk_component_list.D,{children:"Hotels"}),(0,jsx_runtime.jsx)(bpk_component_list.D,{children:"Car Hire"})]}),OrderedExample=()=>(0,jsx_runtime.jsxs)(bpk_component_list.G,{ordered:!0,children:[(0,jsx_runtime.jsx)(bpk_component_list.D,{children:"Car Hire"}),(0,jsx_runtime.jsx)(bpk_component_list.D,{children:"Flights"}),(0,jsx_runtime.jsx)(bpk_component_list.D,{children:"Hotels"})]}),NestedExample=()=>(0,jsx_runtime.jsxs)(bpk_component_list.G,{children:[(0,jsx_runtime.jsx)(bpk_component_list.D,{children:"Flights"}),(0,jsx_runtime.jsxs)(bpk_component_list.D,{children:["Hotels",(0,jsx_runtime.jsxs)(bpk_component_list.G,{ordered:!0,children:[(0,jsx_runtime.jsx)(bpk_component_list.D,{children:"Barcelona Hotels"}),(0,jsx_runtime.jsx)(bpk_component_list.D,{children:"Edinburgh Hotels"}),(0,jsx_runtime.jsx)(bpk_component_list.D,{children:"London Hotels"})]})]}),(0,jsx_runtime.jsx)(bpk_component_list.D,{children:"Car Hire"})]});UnorderedExample.__docgenInfo={description:"",methods:[],displayName:"UnorderedExample"},OrderedExample.__docgenInfo={description:"",methods:[],displayName:"OrderedExample"},NestedExample.__docgenInfo={description:"",methods:[],displayName:"NestedExample"},UnorderedExample.__docgenInfo={description:"",methods:[],displayName:"UnorderedExample"},OrderedExample.__docgenInfo={description:"",methods:[],displayName:"OrderedExample"},NestedExample.__docgenInfo={description:"",methods:[],displayName:"NestedExample"};const stories={title:"bpk-component-list",component:BpkList.A,subcomponents:{BpkListItem:BpkListItem.A}},Unordered=UnorderedExample,Ordered=OrderedExample,Nested=NestedExample,VisualTest=NestedExample,VisualTestWithZoom=VisualTest.bind({});VisualTestWithZoom.args={zoomEnabled:!0}},"./packages/bpk-component-list/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>_src_BpkListItem__WEBPACK_IMPORTED_MODULE_1__.A,G:()=>_src_BpkList__WEBPACK_IMPORTED_MODULE_0__.A});var _src_BpkList__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/bpk-component-list/src/BpkList.js"),_src_BpkListItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/bpk-component-list/src/BpkListItem.js")},"./packages/bpk-component-list/src/BpkList.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_bpk_react_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/bpk-react-utils/index.ts"),_BpkList_module_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/bpk-component-list/src/BpkList.module.scss"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,_bpk_react_utils__WEBPACK_IMPORTED_MODULE_0__.fD)(_BpkList_module_scss__WEBPACK_IMPORTED_MODULE_1__.A),BpkList=props=>{const{ariaLabel,ariaLabelledby,children,className,ordered,title}=props,ListElements=ordered?"ol":"ul",classNames=getClassName("bpk-list",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ListElements,{"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby,title,className:classNames,children})};BpkList.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),prop_types__WEBPACK_IMPORTED_MODULE_3___default().node]).isRequired,ordered:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,ariaLabelledby:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,title:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string},BpkList.defaultProps={ordered:!1,className:null,ariaLabel:null,ariaLabelledby:null,title:null},BpkList.__docgenInfo={description:"",methods:[],displayName:"BpkList",props:{ordered:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},className:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},ariaLabel:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},ariaLabelledby:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},title:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]}}}};const __WEBPACK_DEFAULT_EXPORT__=BpkList;BpkList.__docgenInfo={description:"",methods:[],displayName:"BpkList",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]}},ordered:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},ariaLabel:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},ariaLabelledby:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},title:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}}}}},"./packages/bpk-component-list/src/BpkListItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_bpk_react_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/bpk-react-utils/index.ts"),_BpkList_module_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/bpk-component-list/src/BpkList.module.scss"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,_bpk_react_utils__WEBPACK_IMPORTED_MODULE_0__.fD)(_BpkList_module_scss__WEBPACK_IMPORTED_MODULE_1__.A),BpkListItem=props=>{const{children,className}=props,classNames=getClassName("bpk-list__item",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{className:classNames,children})};BpkListItem.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),prop_types__WEBPACK_IMPORTED_MODULE_3___default().node]).isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string},BpkListItem.defaultProps={className:null},BpkListItem.__docgenInfo={description:"",methods:[],displayName:"BpkListItem",props:{className:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]}}}};const __WEBPACK_DEFAULT_EXPORT__=BpkListItem;BpkListItem.__docgenInfo={description:"",methods:[],displayName:"BpkListItem",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]}},className:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}}}}},"./packages/bpk-component-list/src/BpkList.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={"bpk-list":"bpk-list-KrJ7p","bpk-list__item":"bpk-list__item-nRmMY"}}}]);