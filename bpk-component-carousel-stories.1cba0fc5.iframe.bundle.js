"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[9169],{"./examples/bpk-component-carousel/stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,VisualTest:()=>VisualTest,VisualTestWithZoom:()=>VisualTestWithZoom,default:()=>stories});var react=__webpack_require__("./node_modules/react/index.js"),bpk_component_page_indicator=__webpack_require__("./packages/bpk-component-page-indicator/index.js"),bpk_react_utils=__webpack_require__("./packages/bpk-react-utils/index.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const getClassName=(0,bpk_react_utils.fD)({"bpk-carousel-image":"bpk-carousel-image-bi3Qn"}),BpkCarouselImage=(0,react.forwardRef)(((_ref,ref)=>{let{image,index}=_ref;return(0,jsx_runtime.jsx)("div",{className:getClassName("bpk-carousel-image"),"data-index":index,ref,role:"listitem",children:image},index)})),src_BpkCarouselImage=BpkCarouselImage;try{BpkCarouselImage.displayName="BpkCarouselImage",BpkCarouselImage.__docgenInfo={description:"",displayName:"BpkCarouselImage",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"ReactNode"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-carousel/src/BpkCarouselImage.tsx#BpkCarouselImage"]={docgenInfo:BpkCarouselImage.__docgenInfo,name:"BpkCarouselImage",path:"packages/bpk-component-carousel/src/BpkCarouselImage.tsx#BpkCarouselImage"})}catch(__react_docgen_typescript_loader_error){}function useIntersectionObserver(onIntersecting,_ref,onImageChanged){let{root,threshold}=_ref;const callbackRef=(0,react.useRef)(onIntersecting);(0,react.useEffect)((()=>{callbackRef.current=onIntersecting}));return(0,react.useMemo)((()=>{if(!root)return()=>{};const observer=new IntersectionObserver((entries=>{const shownEntry=entries.find((entry=>entry.isIntersecting));if(!shownEntry)return;const{index}=shownEntry.target.dataset;if(index){const currentIndex=parseInt(index,10);callbackRef.current(currentIndex),onImageChanged&&onImageChanged(currentIndex)}}),{root,threshold});return element=>{element&&observer&&observer.observe(element)}}),[onImageChanged,root,threshold])}const BpkCarouselContainer_getClassName=(0,bpk_react_utils.fD)({"bpk-carousel-container":"bpk-carousel-container-O3nJh"}),BpkCarouselContainer=(0,react.memo)((_ref=>{let{images,imagesRef,onImageChanged,onVisible}=_ref;const[root,setRoot]=(0,react.useState)(null),observeImageChange=useIntersectionObserver(onVisible,{root,threshold:.5},onImageChanged),observeCycleScroll=useIntersectionObserver((index=>{const imageElement=imagesRef.current&&imagesRef.current[index];imageElement&&imageElement.scrollIntoView({block:"nearest",inline:"start"})}),{root,threshold:1});return 1===images.length?(0,jsx_runtime.jsx)("div",{className:BpkCarouselContainer_getClassName("bpk-carousel-container"),role:"list","data-testid":"image-gallery-scroll-container",children:(0,jsx_runtime.jsx)(src_BpkCarouselImage,{image:images[0],index:0})}):(0,jsx_runtime.jsxs)("div",{className:BpkCarouselContainer_getClassName("bpk-carousel-container"),ref:setRoot,"data-testid":"image-gallery-scroll-container",role:"list",children:[(0,jsx_runtime.jsx)(src_BpkCarouselImage,{image:images[images.length-1],index:images.length-1,ref:el=>{observeCycleScroll(el),observeImageChange(el)}}),images.map(((image,index)=>(0,jsx_runtime.jsx)(src_BpkCarouselImage,{image,index,ref:el=>{imagesRef.current[index]=el,observeImageChange(el)}},index))),(0,jsx_runtime.jsx)(src_BpkCarouselImage,{image:images[0],index:0,ref:el=>{observeCycleScroll(el),observeImageChange(el)}})]})})),BpkCarousel_getClassName=(0,bpk_react_utils.fD)({"bpk-carousel":"bpk-carousel-jvOZx","bpk-carousel__page-indicator-over-image":"bpk-carousel__page-indicator-over-image-lNJQB"}),BpkCarousel=_ref=>{let{bottom,images,initialImageIndex=0,onImageChanged=null}=_ref;const[shownImageIndex,updateShownImageIndex]=(0,react.useState)(initialImageIndex),imagesRef=(0,react.useRef)([]);return function useScrollToInitialImage(initialImageIndex,imagesRef){(0,react.useEffect)((()=>{const element=imagesRef.current[initialImageIndex];element&&element.scrollIntoView({block:"nearest",inline:"start"})}),[initialImageIndex,imagesRef])}(initialImageIndex,imagesRef),(0,jsx_runtime.jsxs)("div",{className:BpkCarousel_getClassName("bpk-carousel"),children:[(0,jsx_runtime.jsx)(BpkCarouselContainer,{images,onVisible:updateShownImageIndex,imagesRef,onImageChanged}),(0,jsx_runtime.jsx)("div",{className:BpkCarousel_getClassName("bpk-carousel__page-indicator-over-image"),style:bottom?{bottom}:void 0,"data-testid":"carousel-page-indicator-container",children:(0,jsx_runtime.jsx)(bpk_component_page_indicator.Ay,{currentIndex:shownImageIndex,totalIndicators:images.length,variant:bpk_component_page_indicator.Gt.overImage,indicatorLabel:"Go to slide",prevNavLabel:"Previous slide",nextNavLabel:"Next slide"})})]})},src_BpkCarousel=BpkCarousel;try{BpkCarousel.displayName="BpkCarousel",BpkCarousel.__docgenInfo={description:"",displayName:"BpkCarousel",props:{images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"ReactNode[]"}},initialImageIndex:{defaultValue:{value:"0"},description:"",name:"initialImageIndex",required:!1,type:{name:"number | undefined"}},onImageChanged:{defaultValue:{value:"null"},description:"",name:"onImageChanged",required:!1,type:{name:"OnImageChangedHandler"}},bottom:{defaultValue:null,description:"This prop is used to let the consumer adjust the spacing between the page indicator and the bottom of the image when variant is VARIANT.overImage",name:"bottom",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/bpk-component-carousel/src/BpkCarousel.tsx#BpkCarousel"]={docgenInfo:BpkCarousel.__docgenInfo,name:"BpkCarousel",path:"packages/bpk-component-carousel/src/BpkCarousel.tsx#BpkCarousel"})}catch(__react_docgen_typescript_loader_error){}const bpk_component_carousel=src_BpkCarousel,imagesList=["https://content.skyscnr.com/m/7470cf6a4ee49c26/original/Carousel-placeholder-4.jpg","https://content.skyscnr.com/m/183e7ddaaca13b16/original/Carousel-placeholder-2.jpg","https://content.skyscnr.com/m/f8b42e98e2b79a6/original/Carousel-placeholder-3.jpg","https://content.skyscnr.com/m/51c4c9dd04c8dc95/original/Carousel-placeholder-1.jpg"].map((url=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("img",{src:url,alt:"hotel bedroom"})}))),DefaultExample=()=>(0,jsx_runtime.jsx)(bpk_component_carousel,{images:imagesList,bottom:16});DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"};const example=DefaultExample;DefaultExample.__docgenInfo={description:"",methods:[],displayName:"DefaultExample"};const stories={title:"bpk-component-carousel",component:bpk_component_carousel},Default=example,VisualTest=example,VisualTestWithZoom=VisualTest.bind({});VisualTestWithZoom.args={zoomEnabled:!0}}}]);