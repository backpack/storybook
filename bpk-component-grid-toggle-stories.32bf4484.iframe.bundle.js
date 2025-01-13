"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[5468],{"./examples/bpk-component-grid-toggle/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,default:()=>stories});var prop_types=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),bpk_component_link=__webpack_require__("./packages/bpk-component-link/index.js"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const GRID_CLASS_NAME=(0,bpk_react_utils.fD)({"bpk-vertical-grid--on":"bpk-vertical-grid--on-Lc1fG"})("bpk-vertical-grid--on");class BpkGridToggle extends react.Component{constructor(props){super(props),_defineProperty(this,"handleKeyDown",(e=>{e.ctrlKey&&e.metaKey&&"g"===e.key.toLowerCase()&&this.toggleGrid(e)})),_defineProperty(this,"toggleGrid",(e=>{e.preventDefault(),document.querySelector(this.props.targetContainer).classList.toggle(GRID_CLASS_NAME),this.setState((state=>({gridEnabled:!state.gridEnabled})))})),this.state={gridEnabled:!1}}componentDidMount(){document.addEventListener("keydown",this.handleKeyDown)}componentWillUnmount(){document.querySelector(this.props.targetContainer).classList.remove(GRID_CLASS_NAME),document.removeEventListener("keydown",this.handleKeyDown)}render(){const{className}=this.props,{gridEnabled}=this.state,onOrOff=gridEnabled?"off":"on";return(0,jsx_runtime.jsx)("span",{className,children:(0,jsx_runtime.jsxs)(bpk_component_link.qC,{title:"Keyboard Shortcut: ctrl + cmd + g",onClick:this.toggleGrid,children:["Baseline grid ",onOrOff]})})}}BpkGridToggle.propTypes={targetContainer:prop_types_default().string,className:prop_types_default().string},BpkGridToggle.defaultProps={targetContainer:"body",className:null},BpkGridToggle.__docgenInfo={description:"",methods:[{name:"handleKeyDown",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"toggleGrid",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null}],displayName:"BpkGridToggle",props:{targetContainer:{defaultValue:{value:"'body'",computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1}}};const src_BpkGridToggle=BpkGridToggle;BpkGridToggle.__docgenInfo={description:"",methods:[{name:"handleKeyDown",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:null}],returns:null},{name:"toggleGrid",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:null}],returns:null}],displayName:"BpkGridToggle",props:{targetContainer:{defaultValue:{value:"'body'",computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1}}};const bpk_component_grid_toggle=src_BpkGridToggle,DefaultExample=()=>(0,jsx_runtime.jsx)(bpk_component_grid_toggle,{});DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"};const examples=DefaultExample;DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"};const stories={title:"bpk-component-grid-toggle",component:bpk_component_grid_toggle},Example=examples}}]);