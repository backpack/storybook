(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[4206],{"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./packages/node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>useComposedRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function setRef(ref,value){if("function"==typeof ref)return ref(value);null!=ref&&(ref.current=value)}function useComposedRefs(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function composeRefs(...refs){return node=>{let hasCleanup=!1;const cleanups=refs.map((ref=>{const cleanup=setRef(ref,node);return hasCleanup||"function"!=typeof cleanup||(hasCleanup=!0),cleanup}));if(hasCleanup)return()=>{for(let i=0;i<cleanups.length;i++){const cleanup=cleanups[i];"function"==typeof cleanup?cleanup():setRef(refs[i],null)}}}}(...refs),refs)}},"./packages/node_modules/@radix-ui/react-slider/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q6:()=>$faa2e61a3361514f$export$9a58ef0d7ad3278c,bL:()=>$faa2e61a3361514f$export$be92b6f5f03c0fe9,zi:()=>$faa2e61a3361514f$export$6521433ed15a34db,CC:()=>$faa2e61a3361514f$export$13921ac0cc260818});var esm_extends=__webpack_require__("./packages/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js");function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value,[min,max]){return Math.min(max,Math.max(min,value))}function $e42e1063c40fb3ef$export$b9ecd428b558ff10(originalEventHandler,ourEventHandler,{checkForDefaultPrevented=!0}={}){return function handleEvent(event){if(null==originalEventHandler||originalEventHandler(event),!1===checkForDefaultPrevented||!event.defaultPrevented)return null==ourEventHandler?void 0:ourEventHandler(event)}}function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs){return(0,react.useCallback)(function $6ed0406888f73fc4$export$43e446d32b3d21af(...refs){return node=>refs.forEach((ref=>function $6ed0406888f73fc4$var$setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}(...refs),refs)}function $c512c27ab02ef895$export$50c7b4e9d9f19c1(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>(0,react.createContext)(defaultContext)));return function useScope(scope){const contexts=(null==scope?void 0:scope[scopeName])||scopeContexts;return(0,react.useMemo)((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function $c512c27ab02ef895$export$fd42f52fd3ae1109(rootComponentName,defaultContext){const BaseContext=(0,react.createContext)(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,value=(0,react.useMemo)((()=>context),Object.values(context));return(0,react.createElement)(Context.Provider,{value},children)}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext(consumerName,scope){const Context=(null==scope?void 0:scope[scopeName][index])||BaseContext,context=(0,react.useContext)(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},$c512c27ab02ef895$var$composeContextScopes(createScope,...createContextScopeDeps)]}function $c512c27ab02ef895$var$composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope1=()=>{const scopeHooks=scopes.map((createScope=>({useScope:createScope(),scopeName:createScope.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes1=scopeHooks.reduce(((nextScopes,{useScope,scopeName})=>({...nextScopes,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return(0,react.useMemo)((()=>({[`__scope${baseScope.scopeName}`]:nextScopes1})),[nextScopes1])}};return createScope1.scopeName=baseScope.scopeName,createScope1}function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(callback){const callbackRef=(0,react.useRef)(callback);return(0,react.useEffect)((()=>{callbackRef.current=callback})),(0,react.useMemo)((()=>(...args)=>{var _callbackRef$current;return null===(_callbackRef$current=callbackRef.current)||void 0===_callbackRef$current?void 0:_callbackRef$current.call(callbackRef,...args)}),[])}function $71cd76cc60e0454e$export$6f32135080cb4c3({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function $71cd76cc60e0454e$var$useUncontrolledState({defaultProp,onChange}){const uncontrolledState=(0,react.useState)(defaultProp),[value]=uncontrolledState,prevValueRef=(0,react.useRef)(value),handleChange=$b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);return(0,react.useEffect)((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value1=isControlled?prop:uncontrolledProp,handleChange=$b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onChange);return[value1,(0,react.useCallback)((nextValue=>{if(isControlled){const value="function"==typeof nextValue?nextValue(prop):nextValue;value!==prop&&handleChange(value)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}const $f631663db3294ace$var$DirectionContext=(0,react.createContext)(void 0);const $9f79659886946c16$export$e5c5a5f917a5871c=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?react.useLayoutEffect:()=>{};__webpack_require__("./node_modules/react-dom/index.js");function dist_$6ed0406888f73fc4$export$43e446d32b3d21af(...refs){return node=>refs.forEach((ref=>function dist_$6ed0406888f73fc4$var$setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}const $5e63c961fc1ce211$export$8c6ed5c666ac1360=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react.Children.toArray(children),slottable=childrenArray.find($5e63c961fc1ce211$var$isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react.Children.count(newElement)>1?react.Children.only(null):(0,react.isValidElement)(newElement)?newElement.props.children:null:child));return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,(0,esm_extends.A)({},slotProps,{ref:forwardedRef}),(0,react.isValidElement)(newElement)?(0,react.cloneElement)(newElement,void 0,newChildren):null)}return(0,react.createElement)($5e63c961fc1ce211$var$SlotClone,(0,esm_extends.A)({},slotProps,{ref:forwardedRef}),children)}));$5e63c961fc1ce211$export$8c6ed5c666ac1360.displayName="Slot";const $5e63c961fc1ce211$var$SlotClone=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,...slotProps}=props;return(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{...$5e63c961fc1ce211$var$mergeProps(slotProps,children.props),ref:forwardedRef?dist_$6ed0406888f73fc4$export$43e446d32b3d21af(forwardedRef,children.ref):children.ref}):react.Children.count(children)>1?react.Children.only(null):null}));$5e63c961fc1ce211$var$SlotClone.displayName="SlotClone";const $5e63c961fc1ce211$export$d9f1ccf0bdb05d45=({children})=>(0,react.createElement)(react.Fragment,null,children);function $5e63c961fc1ce211$var$isSlottable(child){return(0,react.isValidElement)(child)&&child.type===$5e63c961fc1ce211$export$d9f1ccf0bdb05d45}function $5e63c961fc1ce211$var$mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}const $8927f6f2acc4f386$export$250ffa63cdc0d034=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=(0,react.forwardRef)(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?$5e63c961fc1ce211$export$8c6ed5c666ac1360:node;return(0,react.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,react.createElement)(Comp,(0,esm_extends.A)({},primitiveProps,{ref:forwardedRef}))}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function react_compose_refs_dist_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(...refs){return(0,react.useCallback)(function react_compose_refs_dist_$6ed0406888f73fc4$export$43e446d32b3d21af(...refs){return node=>refs.forEach((ref=>function react_compose_refs_dist_$6ed0406888f73fc4$var$setRef(ref,value){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}(ref,node)))}(...refs),refs)}const $faa2e61a3361514f$var$PAGE_KEYS=["PageUp","PageDown"],$faa2e61a3361514f$var$ARROW_KEYS=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],$faa2e61a3361514f$var$BACK_KEYS={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},[$faa2e61a3361514f$var$Collection,$faa2e61a3361514f$var$useCollection,$faa2e61a3361514f$var$createCollectionScope]=function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name){const PROVIDER_NAME=name+"CollectionProvider",[createCollectionContext,createCollectionScope]=$c512c27ab02ef895$export$50c7b4e9d9f19c1(PROVIDER_NAME),[CollectionProviderImpl,useCollectionContext]=createCollectionContext(PROVIDER_NAME,{collectionRef:{current:null},itemMap:new Map}),CollectionProvider=props=>{const{scope,children}=props,ref=react.useRef(null),itemMap=react.useRef(new Map).current;return react.createElement(CollectionProviderImpl,{scope,itemMap,collectionRef:ref},children)},COLLECTION_SLOT_NAME=name+"CollectionSlot",CollectionSlot=react.forwardRef(((props,forwardedRef)=>{const{scope,children}=props,composedRefs=react_compose_refs_dist_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef,useCollectionContext(COLLECTION_SLOT_NAME,scope).collectionRef);return react.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360,{ref:composedRefs},children)})),ITEM_SLOT_NAME=name+"CollectionItemSlot",CollectionItemSlot=react.forwardRef(((props,forwardedRef)=>{const{scope,children,...itemData}=props,ref=react.useRef(null),composedRefs=react_compose_refs_dist_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef,ref),context=useCollectionContext(ITEM_SLOT_NAME,scope);return react.useEffect((()=>(context.itemMap.set(ref,{ref,...itemData}),()=>{context.itemMap.delete(ref)}))),react.createElement($5e63c961fc1ce211$export$8c6ed5c666ac1360,{"data-radix-collection-item":"",ref:composedRefs},children)}));return[{Provider:CollectionProvider,Slot:CollectionSlot,ItemSlot:CollectionItemSlot},function useCollection(scope){const context=useCollectionContext(name+"CollectionConsumer",scope);return react.useCallback((()=>{const collectionNode=context.collectionRef.current;if(!collectionNode)return[];const orderedNodes=Array.from(collectionNode.querySelectorAll("[data-radix-collection-item]"));return Array.from(context.itemMap.values()).sort(((a,b)=>orderedNodes.indexOf(a.ref.current)-orderedNodes.indexOf(b.ref.current)))}),[context.collectionRef,context.itemMap])},createCollectionScope]}("Slider"),[$faa2e61a3361514f$var$createSliderContext,$faa2e61a3361514f$export$ef72632d7b901f97]=$c512c27ab02ef895$export$50c7b4e9d9f19c1("Slider",[$faa2e61a3361514f$var$createCollectionScope]),[$faa2e61a3361514f$var$SliderProvider,$faa2e61a3361514f$var$useSliderContext]=$faa2e61a3361514f$var$createSliderContext("Slider"),$faa2e61a3361514f$export$472062a354075cee=(0,react.forwardRef)(((props,forwardedRef)=>{const{name,min=0,max=100,step=1,orientation="horizontal",disabled=!1,minStepsBetweenThumbs=0,defaultValue=[min],value:value1,onValueChange=()=>{},onValueCommit=()=>{},inverted=!1,...sliderProps}=props,[slider,setSlider]=(0,react.useState)(null),composedRefs=$6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef,(node=>setSlider(node))),thumbRefs=(0,react.useRef)(new Set),valueIndexToChangeRef=(0,react.useRef)(0),isHorizontal="horizontal"===orientation,isFormControl=!slider||Boolean(slider.closest("form")),SliderOrientation=isHorizontal?$faa2e61a3361514f$var$SliderHorizontal:$faa2e61a3361514f$var$SliderVertical,[values=[],setValues]=$71cd76cc60e0454e$export$6f32135080cb4c3({prop:value1,defaultProp:defaultValue,onChange:value=>{var _thumbs$valueIndexToC;null===(_thumbs$valueIndexToC=[...thumbRefs.current][valueIndexToChangeRef.current])||void 0===_thumbs$valueIndexToC||_thumbs$valueIndexToC.focus(),onValueChange(value)}}),valuesBeforeSlideStartRef=(0,react.useRef)(values);function updateValues(value,atIndex,{commit}={commit:!1}){const decimalCount=function $faa2e61a3361514f$var$getDecimalCount(value){return(String(value).split(".")[1]||"").length}(step),snapToStep=function $faa2e61a3361514f$var$roundValue(value,decimalCount){const rounder=Math.pow(10,decimalCount);return Math.round(value*rounder)/rounder}(Math.round((value-min)/step)*step+min,decimalCount),nextValue=$ae6933e535247d3d$export$7d15b64cf5a3a4c4(snapToStep,[min,max]);setValues(((prevValues=[])=>{const nextValues=function $faa2e61a3361514f$var$getNextSortedValues(prevValues=[],nextValue,atIndex){const nextValues=[...prevValues];return nextValues[atIndex]=nextValue,nextValues.sort(((a,b)=>a-b))}(prevValues,nextValue,atIndex);if(function $faa2e61a3361514f$var$hasMinStepsBetweenValues(values,minStepsBetweenValues){if(minStepsBetweenValues>0){const stepsBetweenValues=function $faa2e61a3361514f$var$getStepsBetweenValues(values){return values.slice(0,-1).map(((value,index)=>values[index+1]-value))}(values);return Math.min(...stepsBetweenValues)>=minStepsBetweenValues}return!0}(nextValues,minStepsBetweenThumbs*step)){valueIndexToChangeRef.current=nextValues.indexOf(nextValue);const hasChanged=String(nextValues)!==String(prevValues);return hasChanged&&commit&&onValueCommit(nextValues),hasChanged?nextValues:prevValues}return prevValues}))}return(0,react.createElement)($faa2e61a3361514f$var$SliderProvider,{scope:props.__scopeSlider,disabled,min,max,valueIndexToChangeRef,thumbs:thumbRefs.current,values,orientation},(0,react.createElement)($faa2e61a3361514f$var$Collection.Provider,{scope:props.__scopeSlider},(0,react.createElement)($faa2e61a3361514f$var$Collection.Slot,{scope:props.__scopeSlider},(0,react.createElement)(SliderOrientation,(0,esm_extends.A)({"aria-disabled":disabled,"data-disabled":disabled?"":void 0},sliderProps,{ref:composedRefs,onPointerDown:$e42e1063c40fb3ef$export$b9ecd428b558ff10(sliderProps.onPointerDown,(()=>{disabled||(valuesBeforeSlideStartRef.current=values)})),min,max,inverted,onSlideStart:disabled?void 0:function handleSlideStart(value){const closestIndex=function $faa2e61a3361514f$var$getClosestValueIndex(values,nextValue){if(1===values.length)return 0;const distances=values.map((value=>Math.abs(value-nextValue))),closestDistance=Math.min(...distances);return distances.indexOf(closestDistance)}(values,value);updateValues(value,closestIndex)},onSlideMove:disabled?void 0:function handleSlideMove(value){updateValues(value,valueIndexToChangeRef.current)},onSlideEnd:disabled?void 0:function handleSlideEnd(){const prevValue=valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];values[valueIndexToChangeRef.current]!==prevValue&&onValueCommit(values)},onHomeKeyDown:()=>!disabled&&updateValues(min,0,{commit:!0}),onEndKeyDown:()=>!disabled&&updateValues(max,values.length-1,{commit:!0}),onStepKeyDown:({event,direction:stepDirection})=>{if(!disabled){const multiplier=$faa2e61a3361514f$var$PAGE_KEYS.includes(event.key)||event.shiftKey&&$faa2e61a3361514f$var$ARROW_KEYS.includes(event.key)?10:1,atIndex=valueIndexToChangeRef.current;updateValues(values[atIndex]+step*multiplier*stepDirection,atIndex,{commit:!0})}}})))),isFormControl&&values.map(((value,index)=>(0,react.createElement)($faa2e61a3361514f$var$BubbleInput,{key:index,name:name?name+(values.length>1?"[]":""):void 0,value}))))})),[$faa2e61a3361514f$var$SliderOrientationProvider,$faa2e61a3361514f$var$useSliderOrientationContext]=$faa2e61a3361514f$var$createSliderContext("Slider",{startEdge:"left",endEdge:"right",size:"width",direction:1}),$faa2e61a3361514f$var$SliderHorizontal=(0,react.forwardRef)(((props,forwardedRef)=>{const{min,max,dir,inverted,onSlideStart,onSlideMove,onSlideEnd,onStepKeyDown,...sliderProps}=props,[slider,setSlider]=(0,react.useState)(null),composedRefs=$6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef,(node=>setSlider(node))),rectRef=(0,react.useRef)(),direction=function $f631663db3294ace$export$b39126d51d94e6f3(localDir){const globalDir=(0,react.useContext)($f631663db3294ace$var$DirectionContext);return localDir||globalDir||"ltr"}(dir),isDirectionLTR="ltr"===direction,isSlidingFromLeft=isDirectionLTR&&!inverted||!isDirectionLTR&&inverted;function getValueFromPointer(pointerPosition){const rect=rectRef.current||slider.getBoundingClientRect(),value=$faa2e61a3361514f$var$linearScale([0,rect.width],isSlidingFromLeft?[min,max]:[max,min]);return rectRef.current=rect,value(pointerPosition-rect.left)}return(0,react.createElement)($faa2e61a3361514f$var$SliderOrientationProvider,{scope:props.__scopeSlider,startEdge:isSlidingFromLeft?"left":"right",endEdge:isSlidingFromLeft?"right":"left",direction:isSlidingFromLeft?1:-1,size:"width"},(0,react.createElement)($faa2e61a3361514f$var$SliderImpl,(0,esm_extends.A)({dir:direction,"data-orientation":"horizontal"},sliderProps,{ref:composedRefs,style:{...sliderProps.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:event=>{const value=getValueFromPointer(event.clientX);null==onSlideStart||onSlideStart(value)},onSlideMove:event=>{const value=getValueFromPointer(event.clientX);null==onSlideMove||onSlideMove(value)},onSlideEnd:()=>{rectRef.current=void 0,null==onSlideEnd||onSlideEnd()},onStepKeyDown:event=>{const isBackKey=$faa2e61a3361514f$var$BACK_KEYS[isSlidingFromLeft?"from-left":"from-right"].includes(event.key);null==onStepKeyDown||onStepKeyDown({event,direction:isBackKey?-1:1})}})))})),$faa2e61a3361514f$var$SliderVertical=(0,react.forwardRef)(((props,forwardedRef)=>{const{min,max,inverted,onSlideStart,onSlideMove,onSlideEnd,onStepKeyDown,...sliderProps}=props,sliderRef=(0,react.useRef)(null),ref=$6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef,sliderRef),rectRef=(0,react.useRef)(),isSlidingFromBottom=!inverted;function getValueFromPointer(pointerPosition){const rect=rectRef.current||sliderRef.current.getBoundingClientRect(),value=$faa2e61a3361514f$var$linearScale([0,rect.height],isSlidingFromBottom?[max,min]:[min,max]);return rectRef.current=rect,value(pointerPosition-rect.top)}return(0,react.createElement)($faa2e61a3361514f$var$SliderOrientationProvider,{scope:props.__scopeSlider,startEdge:isSlidingFromBottom?"bottom":"top",endEdge:isSlidingFromBottom?"top":"bottom",size:"height",direction:isSlidingFromBottom?1:-1},(0,react.createElement)($faa2e61a3361514f$var$SliderImpl,(0,esm_extends.A)({"data-orientation":"vertical"},sliderProps,{ref,style:{...sliderProps.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:event=>{const value=getValueFromPointer(event.clientY);null==onSlideStart||onSlideStart(value)},onSlideMove:event=>{const value=getValueFromPointer(event.clientY);null==onSlideMove||onSlideMove(value)},onSlideEnd:()=>{rectRef.current=void 0,null==onSlideEnd||onSlideEnd()},onStepKeyDown:event=>{const isBackKey=$faa2e61a3361514f$var$BACK_KEYS[isSlidingFromBottom?"from-bottom":"from-top"].includes(event.key);null==onStepKeyDown||onStepKeyDown({event,direction:isBackKey?-1:1})}})))})),$faa2e61a3361514f$var$SliderImpl=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSlider,onSlideStart,onSlideMove,onSlideEnd,onHomeKeyDown,onEndKeyDown,onStepKeyDown,...sliderProps}=props,context=$faa2e61a3361514f$var$useSliderContext("Slider",__scopeSlider);return(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span,(0,esm_extends.A)({},sliderProps,{ref:forwardedRef,onKeyDown:$e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown,(event=>{"Home"===event.key?(onHomeKeyDown(event),event.preventDefault()):"End"===event.key?(onEndKeyDown(event),event.preventDefault()):$faa2e61a3361514f$var$PAGE_KEYS.concat($faa2e61a3361514f$var$ARROW_KEYS).includes(event.key)&&(onStepKeyDown(event),event.preventDefault())})),onPointerDown:$e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDown,(event=>{const target=event.target;target.setPointerCapture(event.pointerId),event.preventDefault(),context.thumbs.has(target)?target.focus():onSlideStart(event)})),onPointerMove:$e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove,(event=>{event.target.hasPointerCapture(event.pointerId)&&onSlideMove(event)})),onPointerUp:$e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerUp,(event=>{const target=event.target;target.hasPointerCapture(event.pointerId)&&(target.releasePointerCapture(event.pointerId),onSlideEnd(event))}))}))})),$faa2e61a3361514f$export$105594979f116971=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSlider,...trackProps}=props,context=$faa2e61a3361514f$var$useSliderContext("SliderTrack",__scopeSlider);return(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span,(0,esm_extends.A)({"data-disabled":context.disabled?"":void 0,"data-orientation":context.orientation},trackProps,{ref:forwardedRef}))})),$faa2e61a3361514f$export$a5cf38a7a000fe77=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSlider,...rangeProps}=props,context=$faa2e61a3361514f$var$useSliderContext("SliderRange",__scopeSlider),orientation=$faa2e61a3361514f$var$useSliderOrientationContext("SliderRange",__scopeSlider),composedRefs=$6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef,(0,react.useRef)(null)),valuesCount=context.values.length,percentages=context.values.map((value=>$faa2e61a3361514f$var$convertValueToPercentage(value,context.min,context.max))),offsetStart=valuesCount>1?Math.min(...percentages):0,offsetEnd=100-Math.max(...percentages);return(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span,(0,esm_extends.A)({"data-orientation":context.orientation,"data-disabled":context.disabled?"":void 0},rangeProps,{ref:composedRefs,style:{...props.style,[orientation.startEdge]:offsetStart+"%",[orientation.endEdge]:offsetEnd+"%"}}))})),$faa2e61a3361514f$export$2c1b491743890dec=(0,react.forwardRef)(((props,forwardedRef)=>{const getItems=$faa2e61a3361514f$var$useCollection(props.__scopeSlider),[thumb,setThumb]=(0,react.useState)(null),composedRefs=$6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef,(node=>setThumb(node))),index=(0,react.useMemo)((()=>thumb?getItems().findIndex((item=>item.ref.current===thumb)):-1),[getItems,thumb]);return(0,react.createElement)($faa2e61a3361514f$var$SliderThumbImpl,(0,esm_extends.A)({},props,{ref:composedRefs,index}))})),$faa2e61a3361514f$var$SliderThumbImpl=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSlider,index,...thumbProps}=props,context=$faa2e61a3361514f$var$useSliderContext("SliderThumb",__scopeSlider),orientation=$faa2e61a3361514f$var$useSliderOrientationContext("SliderThumb",__scopeSlider),[thumb,setThumb]=(0,react.useState)(null),composedRefs=$6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef,(node=>setThumb(node))),size=function $db6c3485150b8e66$export$1ab7ae714698c4b8(element){const[size,setSize]=(0,react.useState)(void 0);return $9f79659886946c16$export$e5c5a5f917a5871c((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}(thumb),value=context.values[index],percent=void 0===value?0:$faa2e61a3361514f$var$convertValueToPercentage(value,context.min,context.max),label=function $faa2e61a3361514f$var$getLabel(index,totalValues){return totalValues>2?`Value ${index+1} of ${totalValues}`:2===totalValues?["Minimum","Maximum"][index]:void 0}(index,context.values.length),orientationSize=null==size?void 0:size[orientation.size],thumbInBoundsOffset=orientationSize?function $faa2e61a3361514f$var$getThumbInBoundsOffset(width,left,direction){const halfWidth=width/2,offset=$faa2e61a3361514f$var$linearScale([0,50],[0,halfWidth]);return(halfWidth-offset(left)*direction)*direction}(orientationSize,percent,orientation.direction):0;return(0,react.useEffect)((()=>{if(thumb)return context.thumbs.add(thumb),()=>{context.thumbs.delete(thumb)}}),[thumb,context.thumbs]),(0,react.createElement)("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[orientation.startEdge]:`calc(${percent}% + ${thumbInBoundsOffset}px)`}},(0,react.createElement)($faa2e61a3361514f$var$Collection.ItemSlot,{scope:props.__scopeSlider},(0,react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span,(0,esm_extends.A)({role:"slider","aria-label":props["aria-label"]||label,"aria-valuemin":context.min,"aria-valuenow":value,"aria-valuemax":context.max,"aria-orientation":context.orientation,"data-orientation":context.orientation,"data-disabled":context.disabled?"":void 0,tabIndex:context.disabled?void 0:0},thumbProps,{ref:composedRefs,style:void 0===value?{display:"none"}:props.style,onFocus:$e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus,(()=>{context.valueIndexToChangeRef.current=index}))}))))})),$faa2e61a3361514f$var$BubbleInput=props=>{const{value,...inputProps}=props,ref=(0,react.useRef)(null),prevValue=function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react.useRef)({value,previous:value});return(0,react.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}(value);return(0,react.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setValue=Object.getOwnPropertyDescriptor(inputProto,"value").set;if(prevValue!==value&&setValue){const event=new Event("input",{bubbles:!0});setValue.call(input,value),input.dispatchEvent(event)}}),[prevValue,value]),(0,react.createElement)("input",(0,esm_extends.A)({style:{display:"none"}},inputProps,{ref,defaultValue:value}))};function $faa2e61a3361514f$var$convertValueToPercentage(value,min,max){return $ae6933e535247d3d$export$7d15b64cf5a3a4c4(100/(max-min)*(value-min),[0,100])}function $faa2e61a3361514f$var$linearScale(input,output){return value=>{if(input[0]===input[1]||output[0]===output[1])return output[0];const ratio=(output[1]-output[0])/(input[1]-input[0]);return output[0]+ratio*(value-input[0])}}const $faa2e61a3361514f$export$be92b6f5f03c0fe9=$faa2e61a3361514f$export$472062a354075cee,$faa2e61a3361514f$export$13921ac0cc260818=$faa2e61a3361514f$export$105594979f116971,$faa2e61a3361514f$export$9a58ef0d7ad3278c=$faa2e61a3361514f$export$a5cf38a7a000fe77,$faa2e61a3361514f$export$6521433ed15a34db=$faa2e61a3361514f$export$2c1b491743890dec}}]);