(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[1151],{"./examples/bpk-component-form-validation/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,WithForms:()=>WithForms,default:()=>stories});var BpkFormValidation=__webpack_require__("./packages/bpk-component-form-validation/src/BpkFormValidation.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),bpk_component_button=__webpack_require__("./packages/bpk-component-button/index.ts"),bpk_component_checkbox=__webpack_require__("./packages/bpk-component-checkbox/index.js"),bpk_component_form_validation=__webpack_require__("./packages/bpk-component-form-validation/index.js"),bpk_component_input=__webpack_require__("./packages/bpk-component-input/index.ts"),bpk_component_select=__webpack_require__("./packages/bpk-component-select/index.js"),bpk_component_textarea=__webpack_require__("./packages/bpk-component-textarea/index.js"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const formClassName=(0,bpk_react_utils.fD)({"bpkdocs-forms-page__viewport-alert":"bpkdocs-forms-page__viewport-alert-Ywiq9","bpkdocs-forms-page__form":"bpkdocs-forms-page__form-fdG4K","bpkdocs-forms-page__form--desktop-only":"bpkdocs-forms-page__form--desktop-only-HIieo"})("bpkdocs-forms-page__form");class FormValidationContainer extends react.Component{constructor(){super(),_defineProperty(this,"toggleExpanded",(()=>{this.setState((prevState=>({expanded:!prevState.expanded})))})),this.state={expanded:!0}}render(){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{style:{textAlign:"center"},children:(0,jsx_runtime.jsx)(bpk_component_button.Ay,{onClick:this.toggleExpanded,children:"Toggle"})}),(0,jsx_runtime.jsx)(bpk_component_form_validation.A,{expanded:this.state.expanded,...this.props})]})}}class InputContainer extends react.Component{constructor(props){super(props);const valueProp=props.FormComponent===bpk_component_checkbox.A?"checked":"value";this.state={value:props[valueProp]}}render(){const{FormComponent,...rest}=this.props;let overrideProps={};return FormComponent===bpk_component_checkbox.A?overrideProps={checked:this.state.value,onChange:e=>this.setState({value:e.target.checked})}:(overrideProps={value:this.state.value,onChange:e=>this.setState({value:e.target.value})},FormComponent===bpk_component_input.Ay&&(overrideProps.onClear=()=>this.setState({value:""}))),(0,jsx_runtime.jsx)(FormComponent,{...rest,...overrideProps})}}InputContainer.propTypes={FormComponent:prop_types_default().elementType.isRequired};const DefaultExample=()=>(0,jsx_runtime.jsx)(FormValidationContainer,{id:"my-validation-message",children:"A validation message"}),FormsExample=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("form",{className:formClassName,children:[(0,jsx_runtime.jsx)(InputContainer,{FormComponent:bpk_component_input.Ay,id:"input_invalid",name:"input_invalid",value:"Edinbrvgh",placeholder:"Country, city or airport",onChange:()=>null,valid:!1}),(0,jsx_runtime.jsx)(bpk_component_form_validation.A,{id:"form_validation",expanded:!0,children:"Please enter a valid name"})]}),(0,jsx_runtime.jsxs)("form",{className:formClassName,children:[(0,jsx_runtime.jsxs)(InputContainer,{FormComponent:bpk_component_select.A,id:"select_invalid",name:"select_invalid",value:"",onChange:()=>null,valid:!1,children:[(0,jsx_runtime.jsx)("option",{value:"",hidden:!0,children:"Please select..."}),(0,jsx_runtime.jsx)("option",{value:"economy",children:"Economy"}),(0,jsx_runtime.jsx)("option",{value:"premium_economy",children:"Premium Economy"}),(0,jsx_runtime.jsx)("option",{value:"business",children:"Business class"}),(0,jsx_runtime.jsx)("option",{value:"first",children:"First class"})]}),(0,jsx_runtime.jsx)(bpk_component_form_validation.A,{id:"form_validation",expanded:!0,isCheckbox:!0,children:"This option is required"})]}),(0,jsx_runtime.jsxs)("form",{className:formClassName,children:[(0,jsx_runtime.jsx)(InputContainer,{FormComponent:bpk_component_checkbox.A,name:"checkbox",label:"Apples"}),(0,jsx_runtime.jsx)(bpk_component_form_validation.A,{id:"form_validation",expanded:!0,isCheckbox:!0,children:"This checkbox is required"})]}),(0,jsx_runtime.jsxs)("form",{className:formClassName,children:[(0,jsx_runtime.jsx)(InputContainer,{FormComponent:bpk_component_textarea.A,id:"textarea",name:"textarea",value:"@text 123 /}",placeholder:"@text 123 /}",onChange:()=>null,valid:!1}),(0,jsx_runtime.jsx)(bpk_component_form_validation.A,{id:"form_validation",expanded:!0,children:"Please enter valid input"})]})]});DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},FormsExample.__docgenInfo={description:"",methods:[],displayName:"FormsExample"},DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"},FormsExample.__docgenInfo={description:"",methods:[],displayName:"FormsExample"};const stories={title:"bpk-component-form-validation",component:BpkFormValidation.A},Default=DefaultExample,WithForms=FormsExample,VisualTest=FormsExample,VisualTestWithZoom=VisualTest.bind({});VisualTestWithZoom.args={zoomEnabled:!0}},"./packages/bpk-component-checkbox/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./packages/bpk-component-checkbox/src/BpkCheckbox.js").A},"./packages/bpk-component-checkbox/src/BpkCheckbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>src_BpkCheckbox});var prop_types=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-checkbox":"bpk-checkbox-cyXAb","bpk-checkbox__label":"bpk-checkbox__label-CRrfv","bpk-checkbox__label--small":"bpk-checkbox__label--small-hoh4v","bpk-checkbox--white":"bpk-checkbox--white-hLCvM","bpk-checkbox--disabled":"bpk-checkbox--disabled-Zv2_O","bpk-checkbox--disabled--white":"bpk-checkbox--disabled--white-DmXJ7","bpk-checkbox--invalid":"bpk-checkbox--invalid-GVz4H","bpk-checkbox__input":"bpk-checkbox__input-iOLVP","bpk-checkbox__input-indeterminate":"bpk-checkbox__input-indeterminate-vta6s","bpk-checkbox__input-white":"bpk-checkbox__input-white-lFqOr","bpk-checkbox__asterisk":"bpk-checkbox__asterisk-T4pga"}),BpkCheckbox=props=>{const{checked,className,disabled,indeterminate,label,name,required,smallLabel,valid,white,...rest}=props,isInvalid=!1===valid,classNames=getClassName("bpk-checkbox",white&&"bpk-checkbox--white",disabled&&"bpk-checkbox--disabled",white&&disabled&&"bpk-checkbox--disabled--white",isInvalid&&"bpk-checkbox--invalid",className),labelClassNames=getClassName("bpk-checkbox__label",smallLabel&&"bpk-checkbox__label--small"),inputClasses=getClassName("bpk-checkbox__input",white&&"bpk-checkbox__input-white",indeterminate&&"bpk-checkbox__input-indeterminate");return(0,jsx_runtime.jsxs)("label",{className:classNames,children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",className:inputClasses,name,disabled,"aria-label":label,"aria-invalid":isInvalid,"data-indeterminate":indeterminate,ref:e=>{e&&(e.indeterminate=indeterminate)},checked,...rest}),(0,jsx_runtime.jsxs)("span",{className:labelClassNames,"aria-hidden":"true",children:[label,!disabled&&required&&(0,jsx_runtime.jsx)("span",{className:getClassName("bpk-checkbox__asterisk"),children:"*"})]})]})};BpkCheckbox.propTypes={name:prop_types_default().string.isRequired,label:prop_types_default().node.isRequired,required:prop_types_default().bool,disabled:prop_types_default().bool,white:prop_types_default().bool,className:prop_types_default().string,smallLabel:prop_types_default().bool,valid:prop_types_default().bool,checked:prop_types_default().bool,indeterminate:prop_types_default().bool},BpkCheckbox.defaultProps={required:!1,disabled:!1,white:!1,className:null,smallLabel:!1,valid:null,checked:!1,indeterminate:!1},BpkCheckbox.__docgenInfo={description:"",methods:[],displayName:"BpkCheckbox",props:{required:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},disabled:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},white:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},className:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},smallLabel:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},valid:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"boolean",nullable:!0},description:"",type:{name:"bool"}},checked:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"",type:{name:"bool"}},indeterminate:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:"The indeterminate prop is only a visual clue, it does not affect the checked state of the checkbox. If `indeterminate` is flagged then the checkbox will be displayed with a minus sign in the box.  This is used when there is a checkbox group and the parent displays this state when not all child checkboxes are selected.",type:{name:"bool"}},name:{required:!0,flowType:{name:"string"},description:"",type:{name:"string"}},label:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}}}};const src_BpkCheckbox=BpkCheckbox;BpkCheckbox.__docgenInfo={description:"",methods:[],displayName:"BpkCheckbox",props:{name:{required:!0,flowType:{name:"string"},description:"",type:{name:"string"}},label:{required:!0,flowType:{name:"Node"},description:"",type:{name:"node"}},required:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},disabled:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},white:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},smallLabel:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},valid:{required:!1,flowType:{name:"boolean",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"bool"}},checked:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},indeterminate:{required:!1,flowType:{name:"boolean"},description:"The indeterminate prop is only a visual clue, it does not affect the checked state of the checkbox. If `indeterminate` is flagged then the checkbox will be displayed with a minus sign in the box.  This is used when there is a checkbox group and the parent displays this state when not all child checkboxes are selected.",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}}},"./packages/bpk-component-textarea/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./packages/bpk-component-textarea/src/BpkTextarea.js").A},"./packages/bpk-component-textarea/src/BpkTextarea.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>src_BpkTextarea});var prop_types=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-textarea":"bpk-textarea-HqwMK","bpk-textarea--invalid":"bpk-textarea--invalid-XKi7X","bpk-textarea--large":"bpk-textarea--large-vrkBN"}),BpkTextarea=props=>{const{className,large,valid,...rest}=props,isInvalid=!1===valid;return(0,jsx_runtime.jsx)("textarea",{className:getClassName("bpk-textarea",isInvalid&&"bpk-textarea--invalid",large&&"bpk-textarea--large",className),"aria-invalid":isInvalid,...rest})};BpkTextarea.propTypes={id:prop_types_default().string.isRequired,name:prop_types_default().string.isRequired,value:prop_types_default().string.isRequired,className:prop_types_default().string,valid:prop_types_default().bool,large:prop_types_default().bool},BpkTextarea.defaultProps={className:null,valid:null,large:!1},BpkTextarea.__docgenInfo={description:"",methods:[],displayName:"BpkTextarea",props:{className:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"string",nullable:!0},description:"",type:{name:"string"}},valid:{defaultValue:{value:"null",computed:!1},required:!1,flowType:{name:"boolean",nullable:!0},description:"",type:{name:"bool"}},large:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean",nullable:!0},description:"",type:{name:"bool"}},id:{required:!0,flowType:{name:"string"},description:"",type:{name:"string"}},name:{required:!0,flowType:{name:"string"},description:"",type:{name:"string"}},value:{required:!0,flowType:{name:"string"},description:"",type:{name:"string"}}}};const src_BpkTextarea=BpkTextarea;BpkTextarea.__docgenInfo={description:"",methods:[],displayName:"BpkTextarea",props:{id:{required:!0,flowType:{name:"string"},description:"",type:{name:"string"}},name:{required:!0,flowType:{name:"string"},description:"",type:{name:"string"}},value:{required:!0,flowType:{name:"string"},description:"",type:{name:"string"}},className:{required:!1,flowType:{name:"string",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"string"}},valid:{required:!1,flowType:{name:"boolean",nullable:!0},description:"",defaultValue:{value:"null",computed:!1},type:{name:"bool"}},large:{required:!1,flowType:{name:"boolean",nullable:!0},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}}},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);