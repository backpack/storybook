"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[9113],{"./examples/bpk-component-segmented-control/stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComplexThreeSegmentsCanvasContrast:()=>ComplexThreeSegmentsCanvasContrast,ComplexThreeSegmentsCanvasDefault:()=>ComplexThreeSegmentsCanvasDefault,ComplexThreeSegmentsSurfaceContrast:()=>ComplexThreeSegmentsSurfaceContrast,ComplexThreeSegmentsSurfaceDefault:()=>ComplexThreeSegmentsSurfaceDefault,ComplexThreeSegmentsSurfaceDefaultNoShadow:()=>ComplexThreeSegmentsSurfaceDefaultNoShadow,CustomThreeSegmentsCanvasContrast:()=>CustomThreeSegmentsCanvasContrast,CustomThreeSegmentsCanvasDefault:()=>CustomThreeSegmentsCanvasDefault,CustomThreeSegmentsSurfaceContrast:()=>CustomThreeSegmentsSurfaceContrast,CustomThreeSegmentsSurfaceDefault:()=>CustomThreeSegmentsSurfaceDefault,CustomThreeSegmentsSurfaceDefaultNoShadow:()=>CustomThreeSegmentsSurfaceDefaultNoShadow,SimpleFourSegmentsSurfaceContrast:()=>SimpleFourSegmentsSurfaceContrast,SimpleFourSegmentsSurfaceDefault:()=>SimpleFourSegmentsSurfaceDefault,SimpleThreeSegmentsCanvasContrast:()=>SimpleThreeSegmentsCanvasContrast,SimpleTwoSegmentsCanvasDefault:()=>SimpleTwoSegmentsCanvasDefault,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-segmented-control-group":"bpk-segmented-control-group-i_vBg","bpk-segmented-control-group-shadow":"bpk-segmented-control-group-shadow-ibxkS","bpk-segmented-control":"bpk-segmented-control-i4SVq","bpk-segmented-control--canvas-default":"bpk-segmented-control--canvas-default-SedWh","bpk-segmented-control--canvas-default-selected":"bpk-segmented-control--canvas-default-selected-ti0ot","bpk-segmented-control--canvas-contrast":"bpk-segmented-control--canvas-contrast-rJuVv","bpk-segmented-control--canvas-contrast-selected":"bpk-segmented-control--canvas-contrast-selected-A5YDT","bpk-segmented-control--surface-default":"bpk-segmented-control--surface-default-YH4Di","bpk-segmented-control--surface-default-selected":"bpk-segmented-control--surface-default-selected-KB7ro","bpk-segmented-control--surface-contrast":"bpk-segmented-control--surface-contrast-Yy0qB","bpk-segmented-control--surface-contrast-selected":"bpk-segmented-control--surface-contrast-selected-dC_kh"}),SEGMENT_TYPES={CanvasDefault:"canvas-default",CanvasContrast:"canvas-contrast",SurfaceDefault:"surface-default",SurfaceContrast:"surface-contrast"},BpkSegmentedControl=_ref=>{let{buttonContents,onItemClick,selectedIndex,shadow=!1,type=SEGMENT_TYPES.CanvasDefault}=_ref;const[selectedButton,setSelectedButton]=(0,react.useState)(selectedIndex),containerStyling=getClassName("bpk-segmented-control-group",shadow&&"bpk-segmented-control-group-shadow");return(0,jsx_runtime.jsx)("div",{className:containerStyling,children:buttonContents.map(((content,index)=>{const isSelected=index===selectedButton,rightOfOption=index===selectedButton+1,buttonStyling=getClassName("bpk-segmented-control","bpk-segmented-control--".concat(type),isSelected&&"bpk-segmented-control--".concat(type,"-selected"),rightOfOption&&"bpk-segmented-control--".concat(type,"-rightOfOption"),shadow&&isSelected&&"bpk-segmented-control--".concat(type,"-selected-shadow"));return(0,jsx_runtime.jsx)("button",{id:index.toString(),type:"button",onClick:()=>{var id;(id=index)!==selectedButton&&(setSelectedButton(id),onItemClick(id))},className:buttonStyling,"aria-pressed":!!isSelected,children:content},"index-".concat(index.toString()))}))})},src_BpkSegmentedControl=BpkSegmentedControl;try{BpkSegmentedControl.displayName="BpkSegmentedControl",BpkSegmentedControl.__docgenInfo={description:"",displayName:"BpkSegmentedControl",props:{buttonContents:{defaultValue:null,description:"",name:"buttonContents",required:!0,type:{name:"string[] | ReactNode[]"}},type:{defaultValue:{value:"canvas-default"},description:"",name:"type",required:!1,type:{name:"string | undefined"}},onItemClick:{defaultValue:null,description:"",name:"onItemClick",required:!0,type:{name:"(id: number) => void"}},selectedIndex:{defaultValue:null,description:"",name:"selectedIndex",required:!0,type:{name:"number"}},shadow:{defaultValue:{value:"false"},description:"",name:"shadow",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-segmented-control/src/BpkSegmentedControl.tsx#BpkSegmentedControl"]={docgenInfo:BpkSegmentedControl.__docgenInfo,name:"BpkSegmentedControl",path:"packages/bpk-component-segmented-control/src/BpkSegmentedControl.tsx#BpkSegmentedControl"})}catch(__react_docgen_typescript_loader_error){}const bpk_component_segmented_control=src_BpkSegmentedControl;var base_es6=__webpack_require__("./node_modules/@skyscanner/bpk-foundations-web/tokens/base.es6.js"),bpk_storybook_utils=__webpack_require__("./examples/bpk-storybook-utils/index.js");const examples_getClassName=(0,bpk_react_utils.fD)({"bpk-component-segmented-control-stories__custom-button":"bpk-component-segmented-control-stories__custom-button-NSJRS"}),canvasDefaultWrapperStyle={backgroundColor:base_es6.Np9,padding:"2rem"},surfaceContrastWrapperStyle={backgroundColor:base_es6.OcE,padding:"2rem"},allCustomButtonContent=[[(0,jsx_runtime.jsx)("span",{className:examples_getClassName("bpk-component-segmented-control-stories__custom-button"),children:"Specific dates"})],[(0,jsx_runtime.jsx)("span",{className:examples_getClassName("bpk-component-segmented-control-stories__custom-button"),children:"Flexible dates"})]],allComplexButtonContent=[[(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:"Best"}),(0,jsx_runtime.jsx)("div",{children:"£84"}),(0,jsx_runtime.jsx)("div",{children:"2h average"})]})],[(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:"Cheapest"}),(0,jsx_runtime.jsx)("div",{children:"£34"}),(0,jsx_runtime.jsx)("div",{children:"9h average"})]})],[(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:"Fastest"}),(0,jsx_runtime.jsx)("div",{children:"£90"}),(0,jsx_runtime.jsx)("div",{children:"1h average"})]})]],ComplexSurfaceContrast=()=>(0,jsx_runtime.jsx)(bpk_storybook_utils.hE,{padded:!0,children:(0,jsx_runtime.jsx)(bpk_component_segmented_control,{buttonContents:allComplexButtonContent,onItemClick:()=>{},selectedIndex:1,type:SEGMENT_TYPES.SurfaceContrast,shadow:!0})}),ComplexSurfaceDefault=()=>(0,jsx_runtime.jsx)(bpk_component_segmented_control,{buttonContents:allComplexButtonContent,onItemClick:()=>{},selectedIndex:1,type:SEGMENT_TYPES.SurfaceDefault,shadow:!0}),ComplexCanvasContrast=()=>(0,jsx_runtime.jsx)(bpk_storybook_utils.hE,{padded:!0,style:{backgroundColor:base_es6.Np9},children:(0,jsx_runtime.jsx)(bpk_component_segmented_control,{buttonContents:allComplexButtonContent,onItemClick:()=>{},selectedIndex:1,type:SEGMENT_TYPES.CanvasContrast,shadow:!0})}),ComplexCanvasDefault=()=>(0,jsx_runtime.jsx)(bpk_component_segmented_control,{buttonContents:allComplexButtonContent,onItemClick:()=>{},selectedIndex:1,type:SEGMENT_TYPES.CanvasDefault,shadow:!0}),stories={title:"bpk-component-segmented-control",component:bpk_component_segmented_control},SimpleTwoSegmentsCanvasDefault=()=>(0,jsx_runtime.jsx)(bpk_component_segmented_control,{buttonContents:["Value","Value"],onItemClick:()=>{},selectedIndex:0,type:SEGMENT_TYPES.CanvasDefault}),SimpleThreeSegmentsCanvasContrast=()=>(0,jsx_runtime.jsx)("div",{style:canvasDefaultWrapperStyle,children:(0,jsx_runtime.jsx)(bpk_component_segmented_control,{buttonContents:["Value","Value","Value"],onItemClick:()=>{},selectedIndex:2,type:SEGMENT_TYPES.CanvasContrast})}),SimpleFourSegmentsSurfaceDefault=()=>(0,jsx_runtime.jsx)("div",{style:surfaceContrastWrapperStyle,children:(0,jsx_runtime.jsx)(bpk_component_segmented_control,{buttonContents:["Value","Value","Value","Value"],onItemClick:()=>{},selectedIndex:2,type:SEGMENT_TYPES.SurfaceDefault})}),SimpleFourSegmentsSurfaceContrast=()=>(0,jsx_runtime.jsx)(bpk_storybook_utils.hE,{padded:!0,children:(0,jsx_runtime.jsx)(bpk_component_segmented_control,{buttonContents:["Very Long Value1","Very Long Value2","Very Long Value3","Very Long Value4"],onItemClick:()=>{},selectedIndex:2,type:SEGMENT_TYPES.SurfaceContrast})}),CustomThreeSegmentsSurfaceContrast=()=>(0,jsx_runtime.jsx)(bpk_storybook_utils.hE,{padded:!0,children:(0,jsx_runtime.jsx)(bpk_component_segmented_control,{buttonContents:allCustomButtonContent,onItemClick:()=>{},selectedIndex:1,type:SEGMENT_TYPES.SurfaceContrast,shadow:!0})}),CustomThreeSegmentsSurfaceDefault=()=>(0,jsx_runtime.jsx)(bpk_component_segmented_control,{buttonContents:allCustomButtonContent,onItemClick:()=>{},selectedIndex:1,type:SEGMENT_TYPES.SurfaceDefault,shadow:!0}),CustomThreeSegmentsCanvasContrast=()=>(0,jsx_runtime.jsx)(bpk_storybook_utils.hE,{padded:!0,style:{backgroundColor:base_es6.Np9},children:(0,jsx_runtime.jsx)(bpk_component_segmented_control,{buttonContents:allCustomButtonContent,onItemClick:()=>{},selectedIndex:1,type:SEGMENT_TYPES.CanvasContrast,shadow:!0})}),CustomThreeSegmentsCanvasDefault=()=>(0,jsx_runtime.jsx)(bpk_component_segmented_control,{buttonContents:allCustomButtonContent,onItemClick:()=>{},selectedIndex:1,type:SEGMENT_TYPES.CanvasDefault,shadow:!0}),CustomThreeSegmentsSurfaceDefaultNoShadow=()=>(0,jsx_runtime.jsx)(bpk_component_segmented_control,{buttonContents:allCustomButtonContent,onItemClick:()=>{},selectedIndex:1,type:SEGMENT_TYPES.SurfaceDefault}),ComplexThreeSegmentsSurfaceContrast=ComplexSurfaceContrast,ComplexThreeSegmentsSurfaceDefault=ComplexSurfaceDefault,ComplexThreeSegmentsCanvasContrast=ComplexCanvasContrast,ComplexThreeSegmentsCanvasDefault=ComplexCanvasDefault,ComplexThreeSegmentsSurfaceDefaultNoShadow=()=>(0,jsx_runtime.jsx)(bpk_component_segmented_control,{buttonContents:allComplexButtonContent,onItemClick:()=>{},selectedIndex:1,type:SEGMENT_TYPES.SurfaceDefault}),VisualTest=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ComplexCanvasDefault,{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(ComplexCanvasContrast,{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(ComplexSurfaceDefault,{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(ComplexSurfaceContrast,{})]}),VisualTestWithZoom={render:VisualTest,args:{zoomEnabled:!0}}},"./examples/bpk-storybook-utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hE:()=>src_BpkDarkExampleWrapper,XI:()=>action});var bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-dark-example-wrapper":"bpk-dark-example-wrapper-vLv9p","bpk-dark-example-wrapper--padded":"bpk-dark-example-wrapper--padded-Q2iBZ"}),BpkDarkExampleWrapper=props=>{const{padded,...rest}=props;return(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-dark-example-wrapper",padded&&"bpk-dark-example-wrapper--padded"),...rest})};BpkDarkExampleWrapper.defaultProps={padded:!1},BpkDarkExampleWrapper.__docgenInfo={description:"",methods:[],displayName:"BpkDarkExampleWrapper",props:{padded:{defaultValue:{value:"false",computed:!1},required:!1,flowType:{name:"boolean"},description:""}}};const src_BpkDarkExampleWrapper=BpkDarkExampleWrapper;BpkDarkExampleWrapper.__docgenInfo={description:"",methods:[],displayName:"BpkDarkExampleWrapper",props:{padded:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};let action=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return()=>console.info(args)};try{const storybookAction=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js").XI;storybookAction&&(action=storybookAction)}catch(e){console.info("Storybook action is not available. Falling back to `console.log`.")}}}]);