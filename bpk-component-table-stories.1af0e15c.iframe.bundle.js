"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[2485],{"./examples/bpk-component-table/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>stories});var BpkTable=__webpack_require__("./packages/bpk-component-table/src/BpkTable.js"),BpkTableBody=__webpack_require__("./packages/bpk-component-table/src/BpkTableBody.js"),BpkTableCell=__webpack_require__("./packages/bpk-component-table/src/BpkTableCell.js"),BpkTableHead=__webpack_require__("./packages/bpk-component-table/src/BpkTableHead.js"),BpkTableHeadCell=__webpack_require__("./packages/bpk-component-table/src/BpkTableHeadCell.js"),BpkTableRow=__webpack_require__("./packages/bpk-component-table/src/BpkTableRow.js"),bpk_component_table=__webpack_require__("./packages/bpk-component-table/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DefaultExample=()=>(0,jsx_runtime.jsxs)(bpk_component_table.KI,{children:[(0,jsx_runtime.jsx)(bpk_component_table.mp,{children:(0,jsx_runtime.jsxs)(bpk_component_table.Ql,{children:[(0,jsx_runtime.jsx)(bpk_component_table.WH,{children:"Column 1"}),(0,jsx_runtime.jsx)(bpk_component_table.WH,{children:"Column 2"}),(0,jsx_runtime.jsx)(bpk_component_table.WH,{children:"Column 3"})]})}),(0,jsx_runtime.jsxs)(bpk_component_table.Yd,{children:[(0,jsx_runtime.jsxs)(bpk_component_table.Ql,{children:[(0,jsx_runtime.jsx)(bpk_component_table.Uz,{children:"Entry 1"}),(0,jsx_runtime.jsx)(bpk_component_table.Uz,{children:"Entry 2"}),(0,jsx_runtime.jsx)(bpk_component_table.Uz,{children:"Entry 3"})]}),(0,jsx_runtime.jsxs)(bpk_component_table.Ql,{children:[(0,jsx_runtime.jsx)(bpk_component_table.Uz,{children:"Entry 4"}),(0,jsx_runtime.jsx)(bpk_component_table.Uz,{children:"Entry 5"}),(0,jsx_runtime.jsx)(bpk_component_table.Uz,{children:"Entry 6"})]}),(0,jsx_runtime.jsxs)(bpk_component_table.Ql,{children:[(0,jsx_runtime.jsx)(bpk_component_table.Uz,{children:"Entry 7"}),(0,jsx_runtime.jsx)(bpk_component_table.Uz,{children:"Entry 8"}),(0,jsx_runtime.jsx)(bpk_component_table.Uz,{children:"Entry 9"})]})]})]});DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"};const examples=DefaultExample;DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"};const stories={title:"bpk-component-table",component:BpkTable.A,subcomponents:{BpkTableHead:BpkTableHead.A,BpkTableBody:BpkTableBody.A,BpkTableRow:BpkTableRow.A,BpkTableHeadCell:BpkTableHeadCell.A,BpkTableCell:BpkTableCell.A}},Default=examples},"./packages/bpk-component-table/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{KI:()=>_src_BpkTable__WEBPACK_IMPORTED_MODULE_0__.A,Ql:()=>_src_BpkTableRow__WEBPACK_IMPORTED_MODULE_5__.A,Uz:()=>_src_BpkTableCell__WEBPACK_IMPORTED_MODULE_2__.A,WH:()=>_src_BpkTableHeadCell__WEBPACK_IMPORTED_MODULE_4__.A,Yd:()=>_src_BpkTableBody__WEBPACK_IMPORTED_MODULE_1__.A,mp:()=>_src_BpkTableHead__WEBPACK_IMPORTED_MODULE_3__.A});var _src_BpkTable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/bpk-component-table/src/BpkTable.js"),_src_BpkTableBody__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/bpk-component-table/src/BpkTableBody.js"),_src_BpkTableCell__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/bpk-component-table/src/BpkTableCell.js"),_src_BpkTableHead__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/bpk-component-table/src/BpkTableHead.js"),_src_BpkTableHeadCell__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/bpk-component-table/src/BpkTableHeadCell.js"),_src_BpkTableRow__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/bpk-component-table/src/BpkTableRow.js")},"./packages/bpk-component-table/src/BpkTable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_bpk_react_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/bpk-react-utils/index.ts"),_BpkTable_module_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/bpk-component-table/src/BpkTable.module.scss"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,_bpk_react_utils__WEBPACK_IMPORTED_MODULE_0__.fD)(_BpkTable_module_scss__WEBPACK_IMPORTED_MODULE_1__.A),BpkTable=props=>{const{children,className,...rest}=props,classNames=getClassName("bpk-table",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("table",{className:classNames,...rest,children})};BpkTable.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string},BpkTable.defaultProps={className:null},BpkTable.__docgenInfo={description:"",methods:[],displayName:"BpkTable",props:{className:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};const __WEBPACK_DEFAULT_EXPORT__=BpkTable;BpkTable.__docgenInfo={description:"",methods:[],displayName:"BpkTable",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}},className:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}}}}},"./packages/bpk-component-table/src/BpkTable.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={"bpk-table":"bpk-table-owWGb","bpk-table__cell":"bpk-table__cell-dNgBT","bpk-table__cell--head":"bpk-table__cell--head-fzPZv"}},"./packages/bpk-component-table/src/BpkTableBody.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BpkTableBody=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody",{...props});BpkTableBody.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired},BpkTableBody.__docgenInfo={description:"",methods:[],displayName:"BpkTableBody",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};const __WEBPACK_DEFAULT_EXPORT__=BpkTableBody;BpkTableBody.__docgenInfo={description:"",methods:[],displayName:"BpkTableBody",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}}},"./packages/bpk-component-table/src/BpkTableCell.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_bpk_react_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/bpk-react-utils/index.ts"),_BpkTable_module_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/bpk-component-table/src/BpkTable.module.scss"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,_bpk_react_utils__WEBPACK_IMPORTED_MODULE_0__.fD)(_BpkTable_module_scss__WEBPACK_IMPORTED_MODULE_1__.A),BpkTableCell=props=>{const{className,...rest}=props,classNames=getClassName("bpk-table__cell",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td",{className:classNames,...rest,children:props.children})};BpkTableCell.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired},BpkTableCell.defaultProps={className:null},BpkTableCell.__docgenInfo={description:"",methods:[],displayName:"BpkTableCell",props:{className:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};const __WEBPACK_DEFAULT_EXPORT__=BpkTableCell;BpkTableCell.__docgenInfo={description:"",methods:[],displayName:"BpkTableCell",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}},className:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}}}}},"./packages/bpk-component-table/src/BpkTableHead.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BpkTableHead=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead",{...props});BpkTableHead.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired},BpkTableHead.__docgenInfo={description:"",methods:[],displayName:"BpkTableHead",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};const __WEBPACK_DEFAULT_EXPORT__=BpkTableHead;BpkTableHead.__docgenInfo={description:"",methods:[],displayName:"BpkTableHead",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}}},"./packages/bpk-component-table/src/BpkTableHeadCell.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_bpk_react_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/bpk-react-utils/index.ts"),_BpkTable_module_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/bpk-component-table/src/BpkTable.module.scss"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,_bpk_react_utils__WEBPACK_IMPORTED_MODULE_0__.fD)(_BpkTable_module_scss__WEBPACK_IMPORTED_MODULE_1__.A),BpkTableHeadCell=props=>{const{className,...rest}=props,classNames=getClassName("bpk-table__cell","bpk-table__cell--head",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th",{...rest,className:classNames})};BpkTableHeadCell.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string},BpkTableHeadCell.defaultProps={className:null},BpkTableHeadCell.__docgenInfo={description:"",methods:[],displayName:"BpkTableHeadCell",props:{className:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};const __WEBPACK_DEFAULT_EXPORT__=BpkTableHeadCell;BpkTableHeadCell.__docgenInfo={description:"",methods:[],displayName:"BpkTableHeadCell",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}},className:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}}}}},"./packages/bpk-component-table/src/BpkTableRow.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BpkTableRow=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr",{...props});BpkTableRow.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired},BpkTableRow.__docgenInfo={description:"",methods:[],displayName:"BpkTableRow",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};const __WEBPACK_DEFAULT_EXPORT__=BpkTableRow;BpkTableRow.__docgenInfo={description:"",methods:[],displayName:"BpkTableRow",props:{children:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}}}}]);