"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[75],{"./examples/bpk-component-link/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Combined:()=>Combined,CombinedAlternative:()=>CombinedAlternative,Example:()=>Example,ExampleAlternate:()=>ExampleAlternate,ExampleAlternateButtons:()=>ExampleAlternateButtons,ExampleButtons:()=>ExampleButtons,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,default:()=>stories});var BpkButtonLink=__webpack_require__("./packages/bpk-component-link/src/BpkButtonLink.js"),BpkLink=__webpack_require__("./packages/bpk-component-link/src/BpkLink.js"),base_es6=__webpack_require__("./node_modules/@skyscanner/bpk-foundations-web/tokens/base.es6.js"),bpk_component_link=__webpack_require__("./packages/bpk-component-link/index.js"),bpk_storybook_utils=__webpack_require__("./examples/bpk-storybook-utils/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LinkExample=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(bpk_component_link.Ay,{href:"#",onClick:(0,bpk_storybook_utils.XI)("#1 clicked"),children:"Link #1"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(bpk_component_link.Ay,{href:"#",onClick:(0,bpk_storybook_utils.XI)("#2 clicked"),children:"Link #2"})]}),ButtonLinkExample=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(bpk_component_link.qC,{onClick:(0,bpk_storybook_utils.XI)("#1 clicked"),children:"Link #1"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(bpk_component_link.qC,{onClick:(0,bpk_storybook_utils.XI)("#2 clicked"),children:"Link #2"})]}),LinkAlternativeExample=()=>(0,jsx_runtime.jsxs)(bpk_storybook_utils.hE,{children:[(0,jsx_runtime.jsx)(bpk_component_link.Ay,{href:"#",onClick:(0,bpk_storybook_utils.XI)("#1 clicked"),alternate:!0,children:"Link #1"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(bpk_component_link.Ay,{href:"#",onClick:(0,bpk_storybook_utils.XI)("#2 clicked"),alternate:!0,children:"Link #2"})]}),ButtonLinkAlternativeExample=()=>(0,jsx_runtime.jsxs)(bpk_storybook_utils.hE,{children:[(0,jsx_runtime.jsx)(bpk_component_link.qC,{onClick:(0,bpk_storybook_utils.XI)("#1 clicked"),alternate:!0,children:"Link #1"}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(bpk_component_link.qC,{onClick:(0,bpk_storybook_utils.XI)("#2 clicked"),alternate:!0,children:"Link #2"})]}),CombinedExample=()=>(0,jsx_runtime.jsxs)("div",{children:["Links can be both ",(0,jsx_runtime.jsx)(bpk_component_link.Ay,{href:"#",children:"anchor tags"})," as well as"," ",(0,jsx_runtime.jsx)(bpk_component_link.qC,{onClick:()=>null,children:"button tags"}),"."]}),CombinedAlternativeExample=()=>(0,jsx_runtime.jsxs)(bpk_storybook_utils.hE,{style:{color:base_es6.V5q},children:["Links can be both"," ",(0,jsx_runtime.jsx)(bpk_component_link.Ay,{href:"#",style:{color:base_es6.bDZ},children:"anchor tags"})," ","as well as"," ",(0,jsx_runtime.jsx)(bpk_component_link.qC,{onClick:()=>null,style:{color:base_es6.bDZ},children:"button tags"}),"."]}),MixedExample=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(CombinedExample,{}),(0,jsx_runtime.jsx)(CombinedAlternativeExample,{})]});LinkExample.__docgenInfo={description:"",methods:[],displayName:"LinkExample"},ButtonLinkExample.__docgenInfo={description:"",methods:[],displayName:"ButtonLinkExample"},LinkAlternativeExample.__docgenInfo={description:"",methods:[],displayName:"LinkAlternativeExample"},ButtonLinkAlternativeExample.__docgenInfo={description:"",methods:[],displayName:"ButtonLinkAlternativeExample"},CombinedExample.__docgenInfo={description:"",methods:[],displayName:"CombinedExample"},CombinedAlternativeExample.__docgenInfo={description:"",methods:[],displayName:"CombinedAlternativeExample"},MixedExample.__docgenInfo={description:"",methods:[],displayName:"MixedExample"},LinkExample.__docgenInfo={description:"",methods:[],displayName:"LinkExample"},ButtonLinkExample.__docgenInfo={description:"",methods:[],displayName:"ButtonLinkExample"},LinkAlternativeExample.__docgenInfo={description:"",methods:[],displayName:"LinkAlternativeExample"},ButtonLinkAlternativeExample.__docgenInfo={description:"",methods:[],displayName:"ButtonLinkAlternativeExample"},CombinedExample.__docgenInfo={description:"",methods:[],displayName:"CombinedExample"},CombinedAlternativeExample.__docgenInfo={description:"",methods:[],displayName:"CombinedAlternativeExample"},MixedExample.__docgenInfo={description:"",methods:[],displayName:"MixedExample"};const stories={title:"bpk-component-link",component:BpkLink.Ay,subcomponents:{BpkButtonLink:BpkButtonLink.A}},Example=LinkExample,ExampleButtons=ButtonLinkExample,ExampleAlternate=LinkAlternativeExample,ExampleAlternateButtons=ButtonLinkAlternativeExample,Combined=CombinedExample,CombinedAlternative=CombinedAlternativeExample,VisualTest=MixedExample,VisualTestWithZoom=VisualTest.bind({});VisualTestWithZoom.args={zoomEnabled:!0}},"./examples/bpk-storybook-utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hE:()=>src_BpkDarkExampleWrapper,XI:()=>action});var bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-dark-example-wrapper":"bpk-dark-example-wrapper-vLv9p","bpk-dark-example-wrapper--padded":"bpk-dark-example-wrapper--padded-Q2iBZ"}),BpkDarkExampleWrapper=props=>{const{padded,...rest}=props;return(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-dark-example-wrapper",padded&&"bpk-dark-example-wrapper--padded"),...rest})};BpkDarkExampleWrapper.defaultProps={padded:!1},BpkDarkExampleWrapper.__docgenInfo={description:"",methods:[],displayName:"BpkDarkExampleWrapper",props:{padded:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""}}};const src_BpkDarkExampleWrapper=BpkDarkExampleWrapper;BpkDarkExampleWrapper.__docgenInfo={description:"",methods:[],displayName:"BpkDarkExampleWrapper",props:{padded:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};let action=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return()=>console.info(args)};try{const storybookAction=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js").XI;storybookAction&&(action=storybookAction)}catch(e){console.info("Storybook action is not available. Falling back to `console.log`.")}}}]);