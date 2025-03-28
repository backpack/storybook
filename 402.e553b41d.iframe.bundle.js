"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[402],{"./packages/bpk-component-button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lP:()=>common_types.l,Iy:()=>bpk_component_button_BpkButtonPrimary,Q1:()=>BpkButtonV2_BpkButton.Q,oo:()=>common_types.o,Ay:()=>bpk_component_button,JX:()=>secondaryThemeAttributes});var prop_types=__webpack_require__("./packages/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");const defaultProps={href:null,className:null,disabled:!1,onClick:null,submit:!1,large:!1,iconOnly:!1,blank:!1,rel:null},propTypes={children:prop_types_default().node.isRequired,href:prop_types_default().string,className:prop_types_default().string,disabled:prop_types_default().bool,onClick:prop_types_default().func,submit:prop_types_default().bool,large:prop_types_default().bool,iconOnly:prop_types_default().bool,blank:prop_types_default().bool,rel:prop_types_default().string};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-button":"bpk-button-VOWUh","bpk-no-touch-support":"bpk-no-touch-support-lZMLf","bpk-button--large":"bpk-button--large-Qsvb0","bpk-button--icon-only":"bpk-button--icon-only-oGm0D","bpk-button--large-icon-only":"bpk-button--large-icon-only-pIpqH","bpk-button--featured":"bpk-button--featured-tYHXq bpk-button-VOWUh","bpk-button--destructive":"bpk-button--destructive-oeeWf bpk-button-VOWUh","bpk-button--link":"bpk-button--link-ZIfod bpk-button-VOWUh","bpk-button--link-large":"bpk-button--link-large-MSUIq","bpk-button--linkOnDark":"bpk-button--linkOnDark-PaEYg bpk-button-VOWUh","bpk-button--linkOnDark-large":"bpk-button--linkOnDark-large-uiQ7_","bpk-button--primaryOnDark":"bpk-button--primaryOnDark-UxZe5 bpk-button-VOWUh","bpk-button--primaryOnLight":"bpk-button--primaryOnLight-ECuOd bpk-button-VOWUh","bpk-button--secondary":"bpk-button--secondary-zDbyH bpk-button-VOWUh","bpk-button--secondaryOnDark":"bpk-button--secondaryOnDark-nwoL7 bpk-button-VOWUh"}),BUTTON_TYPES_primaryOnDark="primary-on-dark",BUTTON_TYPES_primaryOnLight="primary-on-light",BUTTON_TYPES_secondary="secondary",BUTTON_TYPES_secondaryOnDark="secondary-on-dark",BUTTON_TYPES_destructive="destructive",BUTTON_TYPES_featured="featured",BUTTON_TYPES_link="link",BUTTON_TYPES_linkOnDark="link-on-dark",BpkButtonBase=props=>{const{blank,children,className,disabled,href,iconOnly,large,onClick,rel:propRel,submit,type,...rest}=props,classNames=[];void 0===type&&classNames.push("bpk-button"),type===BUTTON_TYPES_featured&&classNames.push("bpk-button--featured"),type===BUTTON_TYPES_destructive&&classNames.push("bpk-button--destructive"),type===BUTTON_TYPES_link&&classNames.push("bpk-button--link"),type===BUTTON_TYPES_linkOnDark&&classNames.push("bpk-button--linkOnDark"),type===BUTTON_TYPES_primaryOnDark&&classNames.push("bpk-button--primaryOnDark"),type===BUTTON_TYPES_primaryOnLight&&classNames.push("bpk-button--primaryOnLight"),type===BUTTON_TYPES_secondary&&classNames.push("bpk-button--secondary"),type===BUTTON_TYPES_secondaryOnDark&&classNames.push("bpk-button--secondaryOnDark"),large&&classNames.push("bpk-button--large"),iconOnly&&classNames.push(large?"bpk-button--large-icon-only":"bpk-button--icon-only"),className&&classNames.push(className);const classNameFinal=getClassName(...classNames),target=blank?"_blank":null,rel=blank?propRel||"noopener noreferrer":propRel;if(!disabled&&href)return(0,jsx_runtime.jsx)("a",{href,className:classNameFinal,onClick,target:target||void 0,rel,...rest,children});const buttonType=submit?"submit":"button";return(0,jsx_runtime.jsx)("button",{type:buttonType,disabled,className:classNameFinal,onClick,...rest,children})};BpkButtonBase.propTypes={...propTypes},BpkButtonBase.defaultProps={...defaultProps};const src_BpkButtonBase=BpkButtonBase;try{BpkButtonBase.displayName="BpkButtonBase",BpkButtonBase.__docgenInfo={description:"",displayName:"BpkButtonBase",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>) => unknown) | undefined"}},submit:{defaultValue:null,description:"",name:"submit",required:!0,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!0,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!0,type:{name:"boolean"}},blank:{defaultValue:null,description:"",name:"blank",required:!0,type:{name:"boolean"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string | undefined"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:'ValueOf<{ readonly primary: "primary"; readonly primaryOnDark: "primary-on-dark"; readonly primaryOnLight: "primary-on-light"; readonly secondary: "secondary"; readonly secondaryOnDark: "secondary-on-dark"; readonly destructive: "destructive"; readonly featured: "featured"; readonly link: "link"; readonly linkOnDark...'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-button/src/BpkButtonBase.tsx#BpkButtonBase"]={docgenInfo:BpkButtonBase.__docgenInfo,name:"BpkButtonBase",path:"packages/bpk-component-button/src/BpkButtonBase.tsx#BpkButtonBase"})}catch(__react_docgen_typescript_loader_error){}const BpkButton_BpkButton=props=>{const{destructive,featured,link,linkOnDark,primaryOnDark,primaryOnLight,secondary,secondaryOnDark,...rest}=props;return primaryOnDark?(0,jsx_runtime.jsx)(src_BpkButtonBase,{type:BUTTON_TYPES_primaryOnDark,...rest}):primaryOnLight?(0,jsx_runtime.jsx)(src_BpkButtonBase,{type:BUTTON_TYPES_primaryOnLight,...rest}):secondary?(0,jsx_runtime.jsx)(src_BpkButtonBase,{type:BUTTON_TYPES_secondary,...rest}):secondaryOnDark?(0,jsx_runtime.jsx)(src_BpkButtonBase,{type:BUTTON_TYPES_secondaryOnDark,...rest}):destructive?(0,jsx_runtime.jsx)(src_BpkButtonBase,{type:BUTTON_TYPES_destructive,...rest}):featured?(0,jsx_runtime.jsx)(src_BpkButtonBase,{type:BUTTON_TYPES_featured,...rest}):link?(0,jsx_runtime.jsx)(src_BpkButtonBase,{type:BUTTON_TYPES_link,...rest}):linkOnDark?(0,jsx_runtime.jsx)(src_BpkButtonBase,{type:BUTTON_TYPES_linkOnDark,...rest}):(0,jsx_runtime.jsx)(src_BpkButtonBase,{...rest})};BpkButton_BpkButton.defaultProps={...defaultProps,primaryOnDark:!1,primaryOnLight:!1,secondary:!1,secondaryOnDark:!1,destructive:!1,featured:!1,link:!1,linkOnDark:!1},BpkButton_BpkButton.propTypes={...propTypes,primaryOnDark:prop_types_default().bool,primaryOnLight:prop_types_default().bool,secondary:prop_types_default().bool,secondaryOnDark:prop_types_default().bool,destructive:prop_types_default().bool,featured:prop_types_default().bool,link:prop_types_default().bool,linkOnDark:prop_types_default().bool};const src_BpkButton=BpkButton_BpkButton;try{BpkButton_BpkButton.displayName="BpkButton",BpkButton_BpkButton.__docgenInfo={description:"",displayName:"BpkButton",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>) => unknown) | undefined"}},submit:{defaultValue:null,description:"",name:"submit",required:!0,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!0,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!0,type:{name:"boolean"}},blank:{defaultValue:null,description:"",name:"blank",required:!0,type:{name:"boolean"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string | undefined"}},primaryOnDark:{defaultValue:{value:"false"},description:"",name:"primaryOnDark",required:!1,type:{name:"boolean | undefined"}},primaryOnLight:{defaultValue:{value:"false"},description:"",name:"primaryOnLight",required:!1,type:{name:"boolean | undefined"}},secondary:{defaultValue:{value:"false"},description:"",name:"secondary",required:!1,type:{name:"boolean | undefined"}},secondaryOnDark:{defaultValue:{value:"false"},description:"",name:"secondaryOnDark",required:!1,type:{name:"boolean | undefined"}},destructive:{defaultValue:{value:"false"},description:"",name:"destructive",required:!1,type:{name:"boolean | undefined"}},featured:{defaultValue:{value:"false"},description:"",name:"featured",required:!1,type:{name:"boolean | undefined"}},link:{defaultValue:{value:"false"},description:"",name:"link",required:!1,type:{name:"boolean | undefined"}},linkOnDark:{defaultValue:{value:"false"},description:"",name:"linkOnDark",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-button/src/BpkButton.tsx#BpkButton"]={docgenInfo:BpkButton_BpkButton.__docgenInfo,name:"BpkButton",path:"packages/bpk-component-button/src/BpkButton.tsx#BpkButton"})}catch(__react_docgen_typescript_loader_error){}const BpkButtonDestructive=props=>_jsx(BpkButton,{...props,destructive:!0});try{BpkButtonDestructive.displayName="BpkButtonDestructive",BpkButtonDestructive.__docgenInfo={description:"",displayName:"BpkButtonDestructive",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>) => unknown) | undefined"}},submit:{defaultValue:null,description:"",name:"submit",required:!0,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!0,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!0,type:{name:"boolean"}},blank:{defaultValue:null,description:"",name:"blank",required:!0,type:{name:"boolean"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string | undefined"}},primaryOnDark:{defaultValue:null,description:"",name:"primaryOnDark",required:!1,type:{name:"boolean | undefined"}},primaryOnLight:{defaultValue:null,description:"",name:"primaryOnLight",required:!1,type:{name:"boolean | undefined"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean | undefined"}},secondaryOnDark:{defaultValue:null,description:"",name:"secondaryOnDark",required:!1,type:{name:"boolean | undefined"}},destructive:{defaultValue:null,description:"",name:"destructive",required:!1,type:{name:"boolean | undefined"}},featured:{defaultValue:null,description:"",name:"featured",required:!1,type:{name:"boolean | undefined"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean | undefined"}},linkOnDark:{defaultValue:null,description:"",name:"linkOnDark",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-button/BpkButtonDestructive.tsx#BpkButtonDestructive"]={docgenInfo:BpkButtonDestructive.__docgenInfo,name:"BpkButtonDestructive",path:"packages/bpk-component-button/BpkButtonDestructive.tsx#BpkButtonDestructive"})}catch(__react_docgen_typescript_loader_error){}const BpkButtonFeatured=props=>_jsx(BpkButton,{...props,featured:!0});try{BpkButtonFeatured.displayName="BpkButtonFeatured",BpkButtonFeatured.__docgenInfo={description:"",displayName:"BpkButtonFeatured",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>) => unknown) | undefined"}},submit:{defaultValue:null,description:"",name:"submit",required:!0,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!0,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!0,type:{name:"boolean"}},blank:{defaultValue:null,description:"",name:"blank",required:!0,type:{name:"boolean"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string | undefined"}},primaryOnDark:{defaultValue:null,description:"",name:"primaryOnDark",required:!1,type:{name:"boolean | undefined"}},primaryOnLight:{defaultValue:null,description:"",name:"primaryOnLight",required:!1,type:{name:"boolean | undefined"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean | undefined"}},secondaryOnDark:{defaultValue:null,description:"",name:"secondaryOnDark",required:!1,type:{name:"boolean | undefined"}},destructive:{defaultValue:null,description:"",name:"destructive",required:!1,type:{name:"boolean | undefined"}},featured:{defaultValue:null,description:"",name:"featured",required:!1,type:{name:"boolean | undefined"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean | undefined"}},linkOnDark:{defaultValue:null,description:"",name:"linkOnDark",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-button/BpkButtonFeatured.tsx#BpkButtonFeatured"]={docgenInfo:BpkButtonFeatured.__docgenInfo,name:"BpkButtonFeatured",path:"packages/bpk-component-button/BpkButtonFeatured.tsx#BpkButtonFeatured"})}catch(__react_docgen_typescript_loader_error){}const BpkButtonLink=props=>_jsx(BpkButton,{...props,link:!0});try{BpkButtonLink.displayName="BpkButtonLink",BpkButtonLink.__docgenInfo={description:"",displayName:"BpkButtonLink",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>) => unknown) | undefined"}},submit:{defaultValue:null,description:"",name:"submit",required:!0,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!0,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!0,type:{name:"boolean"}},blank:{defaultValue:null,description:"",name:"blank",required:!0,type:{name:"boolean"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string | undefined"}},primaryOnDark:{defaultValue:null,description:"",name:"primaryOnDark",required:!1,type:{name:"boolean | undefined"}},primaryOnLight:{defaultValue:null,description:"",name:"primaryOnLight",required:!1,type:{name:"boolean | undefined"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean | undefined"}},secondaryOnDark:{defaultValue:null,description:"",name:"secondaryOnDark",required:!1,type:{name:"boolean | undefined"}},destructive:{defaultValue:null,description:"",name:"destructive",required:!1,type:{name:"boolean | undefined"}},featured:{defaultValue:null,description:"",name:"featured",required:!1,type:{name:"boolean | undefined"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean | undefined"}},linkOnDark:{defaultValue:null,description:"",name:"linkOnDark",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-button/BpkButtonLink.tsx#BpkButtonLink"]={docgenInfo:BpkButtonLink.__docgenInfo,name:"BpkButtonLink",path:"packages/bpk-component-button/BpkButtonLink.tsx#BpkButtonLink"})}catch(__react_docgen_typescript_loader_error){}const BpkButtonLinkOnDark=props=>_jsx(BpkButton,{...props,linkOnDark:!0});try{BpkButtonLinkOnDark.displayName="BpkButtonLinkOnDark",BpkButtonLinkOnDark.__docgenInfo={description:"",displayName:"BpkButtonLinkOnDark",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>) => unknown) | undefined"}},submit:{defaultValue:null,description:"",name:"submit",required:!0,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!0,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!0,type:{name:"boolean"}},blank:{defaultValue:null,description:"",name:"blank",required:!0,type:{name:"boolean"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string | undefined"}},primaryOnDark:{defaultValue:null,description:"",name:"primaryOnDark",required:!1,type:{name:"boolean | undefined"}},primaryOnLight:{defaultValue:null,description:"",name:"primaryOnLight",required:!1,type:{name:"boolean | undefined"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean | undefined"}},secondaryOnDark:{defaultValue:null,description:"",name:"secondaryOnDark",required:!1,type:{name:"boolean | undefined"}},destructive:{defaultValue:null,description:"",name:"destructive",required:!1,type:{name:"boolean | undefined"}},featured:{defaultValue:null,description:"",name:"featured",required:!1,type:{name:"boolean | undefined"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean | undefined"}},linkOnDark:{defaultValue:null,description:"",name:"linkOnDark",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-button/BpkButtonLinkOnDark.tsx#BpkButtonLinkOnDark"]={docgenInfo:BpkButtonLinkOnDark.__docgenInfo,name:"BpkButtonLinkOnDark",path:"packages/bpk-component-button/BpkButtonLinkOnDark.tsx#BpkButtonLinkOnDark"})}catch(__react_docgen_typescript_loader_error){}const BpkButtonPrimary=props=>(0,jsx_runtime.jsx)(src_BpkButton,{...props}),bpk_component_button_BpkButtonPrimary=BpkButtonPrimary;try{BpkButtonPrimary.displayName="BpkButtonPrimary",BpkButtonPrimary.__docgenInfo={description:"",displayName:"BpkButtonPrimary",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>) => unknown) | undefined"}},submit:{defaultValue:null,description:"",name:"submit",required:!0,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!0,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!0,type:{name:"boolean"}},blank:{defaultValue:null,description:"",name:"blank",required:!0,type:{name:"boolean"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string | undefined"}},primaryOnDark:{defaultValue:null,description:"",name:"primaryOnDark",required:!1,type:{name:"boolean | undefined"}},primaryOnLight:{defaultValue:null,description:"",name:"primaryOnLight",required:!1,type:{name:"boolean | undefined"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean | undefined"}},secondaryOnDark:{defaultValue:null,description:"",name:"secondaryOnDark",required:!1,type:{name:"boolean | undefined"}},destructive:{defaultValue:null,description:"",name:"destructive",required:!1,type:{name:"boolean | undefined"}},featured:{defaultValue:null,description:"",name:"featured",required:!1,type:{name:"boolean | undefined"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean | undefined"}},linkOnDark:{defaultValue:null,description:"",name:"linkOnDark",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-button/BpkButtonPrimary.tsx#BpkButtonPrimary"]={docgenInfo:BpkButtonPrimary.__docgenInfo,name:"BpkButtonPrimary",path:"packages/bpk-component-button/BpkButtonPrimary.tsx#BpkButtonPrimary"})}catch(__react_docgen_typescript_loader_error){}const BpkButtonPrimaryOnDark=props=>_jsx(BpkButton,{...props,primaryOnDark:!0});try{BpkButtonPrimaryOnDark.displayName="BpkButtonPrimaryOnDark",BpkButtonPrimaryOnDark.__docgenInfo={description:"",displayName:"BpkButtonPrimaryOnDark",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>) => unknown) | undefined"}},submit:{defaultValue:null,description:"",name:"submit",required:!0,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!0,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!0,type:{name:"boolean"}},blank:{defaultValue:null,description:"",name:"blank",required:!0,type:{name:"boolean"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string | undefined"}},primaryOnDark:{defaultValue:null,description:"",name:"primaryOnDark",required:!1,type:{name:"boolean | undefined"}},primaryOnLight:{defaultValue:null,description:"",name:"primaryOnLight",required:!1,type:{name:"boolean | undefined"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean | undefined"}},secondaryOnDark:{defaultValue:null,description:"",name:"secondaryOnDark",required:!1,type:{name:"boolean | undefined"}},destructive:{defaultValue:null,description:"",name:"destructive",required:!1,type:{name:"boolean | undefined"}},featured:{defaultValue:null,description:"",name:"featured",required:!1,type:{name:"boolean | undefined"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean | undefined"}},linkOnDark:{defaultValue:null,description:"",name:"linkOnDark",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-button/BpkButtonPrimaryOnDark.tsx#BpkButtonPrimaryOnDark"]={docgenInfo:BpkButtonPrimaryOnDark.__docgenInfo,name:"BpkButtonPrimaryOnDark",path:"packages/bpk-component-button/BpkButtonPrimaryOnDark.tsx#BpkButtonPrimaryOnDark"})}catch(__react_docgen_typescript_loader_error){}const BpkButtonPrimaryOnLight=props=>_jsx(BpkButton,{...props,primaryOnLight:!0});try{BpkButtonPrimaryOnLight.displayName="BpkButtonPrimaryOnLight",BpkButtonPrimaryOnLight.__docgenInfo={description:"",displayName:"BpkButtonPrimaryOnLight",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>) => unknown) | undefined"}},submit:{defaultValue:null,description:"",name:"submit",required:!0,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!0,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!0,type:{name:"boolean"}},blank:{defaultValue:null,description:"",name:"blank",required:!0,type:{name:"boolean"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string | undefined"}},primaryOnDark:{defaultValue:null,description:"",name:"primaryOnDark",required:!1,type:{name:"boolean | undefined"}},primaryOnLight:{defaultValue:null,description:"",name:"primaryOnLight",required:!1,type:{name:"boolean | undefined"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean | undefined"}},secondaryOnDark:{defaultValue:null,description:"",name:"secondaryOnDark",required:!1,type:{name:"boolean | undefined"}},destructive:{defaultValue:null,description:"",name:"destructive",required:!1,type:{name:"boolean | undefined"}},featured:{defaultValue:null,description:"",name:"featured",required:!1,type:{name:"boolean | undefined"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean | undefined"}},linkOnDark:{defaultValue:null,description:"",name:"linkOnDark",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-button/BpkButtonPrimaryOnLight.tsx#BpkButtonPrimaryOnLight"]={docgenInfo:BpkButtonPrimaryOnLight.__docgenInfo,name:"BpkButtonPrimaryOnLight",path:"packages/bpk-component-button/BpkButtonPrimaryOnLight.tsx#BpkButtonPrimaryOnLight"})}catch(__react_docgen_typescript_loader_error){}const BpkButtonSecondary=props=>_jsx(BpkButton,{...props,secondary:!0});try{BpkButtonSecondary.displayName="BpkButtonSecondary",BpkButtonSecondary.__docgenInfo={description:"",displayName:"BpkButtonSecondary",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>) => unknown) | undefined"}},submit:{defaultValue:null,description:"",name:"submit",required:!0,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!0,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!0,type:{name:"boolean"}},blank:{defaultValue:null,description:"",name:"blank",required:!0,type:{name:"boolean"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string | undefined"}},primaryOnDark:{defaultValue:null,description:"",name:"primaryOnDark",required:!1,type:{name:"boolean | undefined"}},primaryOnLight:{defaultValue:null,description:"",name:"primaryOnLight",required:!1,type:{name:"boolean | undefined"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean | undefined"}},secondaryOnDark:{defaultValue:null,description:"",name:"secondaryOnDark",required:!1,type:{name:"boolean | undefined"}},destructive:{defaultValue:null,description:"",name:"destructive",required:!1,type:{name:"boolean | undefined"}},featured:{defaultValue:null,description:"",name:"featured",required:!1,type:{name:"boolean | undefined"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean | undefined"}},linkOnDark:{defaultValue:null,description:"",name:"linkOnDark",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-button/BpkButtonSecondary.tsx#BpkButtonSecondary"]={docgenInfo:BpkButtonSecondary.__docgenInfo,name:"BpkButtonSecondary",path:"packages/bpk-component-button/BpkButtonSecondary.tsx#BpkButtonSecondary"})}catch(__react_docgen_typescript_loader_error){}const BpkButtonSecondaryOnDark=props=>_jsx(BpkButton,{...props,secondaryOnDark:!0});try{BpkButtonSecondaryOnDark.displayName="BpkButtonSecondaryOnDark",BpkButtonSecondaryOnDark.__docgenInfo={description:"",displayName:"BpkButtonSecondaryOnDark",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: SyntheticEvent<Element, Event>) => unknown) | undefined"}},submit:{defaultValue:null,description:"",name:"submit",required:!0,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!0,type:{name:"boolean"}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!0,type:{name:"boolean"}},blank:{defaultValue:null,description:"",name:"blank",required:!0,type:{name:"boolean"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string | undefined"}},primaryOnDark:{defaultValue:null,description:"",name:"primaryOnDark",required:!1,type:{name:"boolean | undefined"}},primaryOnLight:{defaultValue:null,description:"",name:"primaryOnLight",required:!1,type:{name:"boolean | undefined"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"boolean | undefined"}},secondaryOnDark:{defaultValue:null,description:"",name:"secondaryOnDark",required:!1,type:{name:"boolean | undefined"}},destructive:{defaultValue:null,description:"",name:"destructive",required:!1,type:{name:"boolean | undefined"}},featured:{defaultValue:null,description:"",name:"featured",required:!1,type:{name:"boolean | undefined"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"boolean | undefined"}},linkOnDark:{defaultValue:null,description:"",name:"linkOnDark",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-button/BpkButtonSecondaryOnDark.tsx#BpkButtonSecondaryOnDark"]={docgenInfo:BpkButtonSecondaryOnDark.__docgenInfo,name:"BpkButtonSecondaryOnDark",path:"packages/bpk-component-button/BpkButtonSecondaryOnDark.tsx#BpkButtonSecondaryOnDark"})}catch(__react_docgen_typescript_loader_error){}var BpkButtonV2_BpkButton=__webpack_require__("./packages/bpk-component-button/src/BpkButtonV2/BpkButton.tsx"),common_types=__webpack_require__("./packages/bpk-component-button/src/BpkButtonV2/common-types.tsx");const secondaryThemeAttributes=["buttonSecondaryTextColor","buttonSecondaryHoverTextColor","buttonSecondaryActiveTextColor","buttonSecondaryBorderColor","buttonSecondaryHoverBorderColor","buttonSecondaryActiveBorderColor","buttonSecondaryBackgroundColor","buttonSecondaryHoverBackgroundColor","buttonSecondaryActiveBackgroundColor"],bpk_component_button=src_BpkButton},"./packages/bpk-component-button/src/BpkButtonV2/BpkButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>BpkButtonV2});var bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts"),common_types=__webpack_require__("./packages/bpk-component-button/src/BpkButtonV2/common-types.tsx");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getCommonClassName=(0,bpk_react_utils.fD)({"bpk-button":"bpk-button-gYQWJ","bpk-no-touch-support":"bpk-no-touch-support-H0OgV","bpk-button--large":"bpk-button--large-rczv7","bpk-button--icon-only":"bpk-button--icon-only-MUprt","bpk-button--large-icon-only":"bpk-button--large-icon-only-drVqv","bpk-button--destructive":"bpk-button--destructive-DTERJ","bpk-button--featured":"bpk-button--featured-Fk3gQ","bpk-button--link":"bpk-button--link-p3HsP","bpk-button--link-large":"bpk-button--link-large-pYtAF","bpk-button--link-on-dark":"bpk-button--link-on-dark-SNPpX","bpk-button--link-on-dark-large":"bpk-button--link-on-dark-large-HDORu","bpk-button--primary-on-dark":"bpk-button--primary-on-dark-qq3nT","bpk-button--primary-on-light":"bpk-button--primary-on-light-lPIC2","bpk-button--secondary":"bpk-button--secondary-rnbm2","bpk-button--secondary-on-dark":"bpk-button--secondary-on-dark-I6Nmo","bpk-button--full-width":"bpk-button--full-width-ySLix"}),BpkButtonV2=_ref=>{let{blank=!1,children,className=null,disabled=!1,fullWidth=!1,href=null,iconOnly=!1,onClick=()=>{},rel:propRel,size=common_types.o.small,submit=!1,type=common_types.l.primary,...rest}=_ref;const classNames=getCommonClassName("bpk-button",size===common_types.o.large&&"bpk-button--large",iconOnly&&"bpk-button--icon-only",iconOnly&&size===common_types.o.large&&"bpk-button--large-icon-only","bpk-button--".concat(type),fullWidth&&"bpk-button--full-width",className),target=blank?"_blank":"",rel=blank?propRel||"noopener noreferrer":propRel;return!disabled&&href?(0,jsx_runtime.jsx)("a",{href,className:classNames,onClick,target,rel,...rest,children}):(0,jsx_runtime.jsx)("button",{type:submit?"submit":"button",disabled,className:classNames,onClick,...rest,children})};try{BpkButtonV2.displayName="BpkButtonV2",BpkButtonV2.__docgenInfo={description:"",displayName:"BpkButtonV2",props:{type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"ButtonType | undefined"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"SizeType | undefined"}},className:{defaultValue:{value:"null"},description:"",name:"className",required:!1,type:{name:"string | null | undefined"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},fullWidth:{defaultValue:{value:"false"},description:"",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},iconOnly:{defaultValue:{value:"false"},description:"",name:"iconOnly",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:{value:"() => {}"},description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement & HTMLAnchorElement, MouseEvent>) => void) | undefined"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string | undefined"}},submit:{defaultValue:{value:"false"},description:"",name:"submit",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:{value:"null"},description:"",name:"href",required:!1,type:{name:"string | null | undefined"}},blank:{defaultValue:{value:"false"},description:"",name:"blank",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-button/src/BpkButtonV2/BpkButton.tsx#BpkButtonV2"]={docgenInfo:BpkButtonV2.__docgenInfo,name:"BpkButtonV2",path:"packages/bpk-component-button/src/BpkButtonV2/BpkButton.tsx#BpkButtonV2"})}catch(__react_docgen_typescript_loader_error){}},"./packages/bpk-component-button/src/BpkButtonV2/common-types.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>BUTTON_TYPES,o:()=>SIZE_TYPES});const BUTTON_TYPES={primary:"primary",primaryOnDark:"primary-on-dark",primaryOnLight:"primary-on-light",secondary:"secondary",secondaryOnDark:"secondary-on-dark",destructive:"destructive",featured:"featured",link:"link",linkOnDark:"link-on-dark"},SIZE_TYPES={small:"small",large:"large"}}}]);