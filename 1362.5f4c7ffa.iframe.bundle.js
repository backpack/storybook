"use strict";(self.webpackChunkbackpack=self.webpackChunkbackpack||[]).push([[1362],{"./node_modules/date-fns/endOfMonth.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>endOfMonth});var _toDate_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/toDate.js");function endOfMonth(date,options){const _date=(0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.a)(date,options?.in),month=_date.getMonth();return _date.setFullYear(_date.getFullYear(),month+1,0),_date.setHours(23,59,59,999),_date}},"./node_modules/date-fns/startOfMonth.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>startOfMonth});var _toDate_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/toDate.js");function startOfMonth(date,options){const _date=(0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.a)(date,options?.in);return _date.setDate(1),_date.setHours(0,0,0,0),_date}},"./packages/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}__webpack_require__.d(__webpack_exports__,{A:()=>_assertThisInitialized})},"./packages/node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>AutoSizer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let windowObject;windowObject="undefined"!=typeof window?window:"undefined"!=typeof self?self:__webpack_require__.g;let cancelFrame=null,requestFrame=null;const clearTimeoutFn=windowObject.clearTimeout,setTimeoutFn=windowObject.setTimeout,cancelAnimationFrameFn=windowObject.cancelAnimationFrame||windowObject.mozCancelAnimationFrame||windowObject.webkitCancelAnimationFrame,requestAnimationFrameFn=windowObject.requestAnimationFrame||windowObject.mozRequestAnimationFrame||windowObject.webkitRequestAnimationFrame;function createDetectElementResize(nonce){let animationKeyframes,animationName,animationStartEvent,animationStyle,checkTriggers,resetTriggers,scrollListener;const attachEvent="undefined"!=typeof document&&document.attachEvent;if(!attachEvent){resetTriggers=function(element){const triggers=element.__resizeTriggers__,expand=triggers.firstElementChild,contract=triggers.lastElementChild,expandChild=expand.firstElementChild;contract.scrollLeft=contract.scrollWidth,contract.scrollTop=contract.scrollHeight,expandChild.style.width=expand.offsetWidth+1+"px",expandChild.style.height=expand.offsetHeight+1+"px",expand.scrollLeft=expand.scrollWidth,expand.scrollTop=expand.scrollHeight},checkTriggers=function(element){return element.offsetWidth!==element.__resizeLast__.width||element.offsetHeight!==element.__resizeLast__.height},scrollListener=function(e){if(e.target.className&&"function"==typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)return;const element=this;resetTriggers(this),this.__resizeRAF__&&cancelFrame(this.__resizeRAF__),this.__resizeRAF__=requestFrame((function animationFrame(){checkTriggers(element)&&(element.__resizeLast__.width=element.offsetWidth,element.__resizeLast__.height=element.offsetHeight,element.__resizeListeners__.forEach((function forEachResizeListener(fn){fn.call(element,e)})))}))};let animation=!1,keyframeprefix="";animationStartEvent="animationstart";const domPrefixes="Webkit Moz O ms".split(" ");let startEvents="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),pfx="";{const elm=document.createElement("fakeelement");if(void 0!==elm.style.animationName&&(animation=!0),!1===animation)for(let i=0;i<domPrefixes.length;i++)if(void 0!==elm.style[domPrefixes[i]+"AnimationName"]){pfx=domPrefixes[i],keyframeprefix="-"+pfx.toLowerCase()+"-",animationStartEvent=startEvents[i],animation=!0;break}}animationName="resizeanim",animationKeyframes="@"+keyframeprefix+"keyframes "+animationName+" { from { opacity: 0; } to { opacity: 0; } } ",animationStyle=keyframeprefix+"animation: 1ms "+animationName+"; "}return{addResizeListener:function(element,fn){if(attachEvent)element.attachEvent("onresize",fn);else{if(!element.__resizeTriggers__){const doc=element.ownerDocument,elementStyle=windowObject.getComputedStyle(element);elementStyle&&"static"===elementStyle.position&&(element.style.position="relative"),function(doc){if(!doc.getElementById("detectElementResize")){const css=(animationKeyframes||"")+".resize-triggers { "+(animationStyle||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',head=doc.head||doc.getElementsByTagName("head")[0],style=doc.createElement("style");style.id="detectElementResize",style.type="text/css",null!=nonce&&style.setAttribute("nonce",nonce),style.styleSheet?style.styleSheet.cssText=css:style.appendChild(doc.createTextNode(css)),head.appendChild(style)}}(doc),element.__resizeLast__={},element.__resizeListeners__=[],(element.__resizeTriggers__=doc.createElement("div")).className="resize-triggers";const expandTrigger=doc.createElement("div");expandTrigger.className="expand-trigger",expandTrigger.appendChild(doc.createElement("div"));const contractTrigger=doc.createElement("div");contractTrigger.className="contract-trigger",element.__resizeTriggers__.appendChild(expandTrigger),element.__resizeTriggers__.appendChild(contractTrigger),element.appendChild(element.__resizeTriggers__),resetTriggers(element),element.addEventListener("scroll",scrollListener,!0),animationStartEvent&&(element.__resizeTriggers__.__animationListener__=function animationListener(e){e.animationName===animationName&&resetTriggers(element)},element.__resizeTriggers__.addEventListener(animationStartEvent,element.__resizeTriggers__.__animationListener__))}element.__resizeListeners__.push(fn)}},removeResizeListener:function(element,fn){if(attachEvent)element.detachEvent("onresize",fn);else if(element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn),1),!element.__resizeListeners__.length){element.removeEventListener("scroll",scrollListener,!0),element.__resizeTriggers__.__animationListener__&&(element.__resizeTriggers__.removeEventListener(animationStartEvent,element.__resizeTriggers__.__animationListener__),element.__resizeTriggers__.__animationListener__=null);try{element.__resizeTriggers__=!element.removeChild(element.__resizeTriggers__)}catch(e){}}}}}null==cancelAnimationFrameFn||null==requestAnimationFrameFn?(cancelFrame=clearTimeoutFn,requestFrame=function requestAnimationFrameViaSetTimeout(callback){return setTimeoutFn(callback,20)}):(cancelFrame=function cancelFrame([animationFrameID,timeoutID]){cancelAnimationFrameFn(animationFrameID),clearTimeoutFn(timeoutID)},requestFrame=function requestAnimationFrameWithSetTimeoutFallback(callback){const animationFrameID=requestAnimationFrameFn((function animationFrameCallback(){clearTimeoutFn(timeoutID),callback()})),timeoutID=setTimeoutFn((function timeoutCallback(){cancelAnimationFrameFn(animationFrameID),callback()}),20);return[animationFrameID,timeoutID]});class AutoSizer extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(...args){super(...args),this.state={height:this.props.defaultHeight||0,scaledHeight:this.props.defaultHeight||0,scaledWidth:this.props.defaultWidth||0,width:this.props.defaultWidth||0},this._autoSizer=null,this._detectElementResize=null,this._parentNode=null,this._resizeObserver=null,this._timeoutId=null,this._onResize=()=>{this._timeoutId=null;const{disableHeight,disableWidth,onResize}=this.props;if(this._parentNode){var _style$paddingLeft,_style$paddingRight,_style$paddingTop,_style$paddingBottom;const style=window.getComputedStyle(this._parentNode)||{},paddingLeft=parseFloat(null!==(_style$paddingLeft=style.paddingLeft)&&void 0!==_style$paddingLeft?_style$paddingLeft:"0"),paddingRight=parseFloat(null!==(_style$paddingRight=style.paddingRight)&&void 0!==_style$paddingRight?_style$paddingRight:"0"),paddingTop=parseFloat(null!==(_style$paddingTop=style.paddingTop)&&void 0!==_style$paddingTop?_style$paddingTop:"0"),paddingBottom=parseFloat(null!==(_style$paddingBottom=style.paddingBottom)&&void 0!==_style$paddingBottom?_style$paddingBottom:"0"),rect=this._parentNode.getBoundingClientRect(),scaledHeight=rect.height-paddingTop-paddingBottom,scaledWidth=rect.width-paddingLeft-paddingRight,height=this._parentNode.offsetHeight-paddingTop-paddingBottom,width=this._parentNode.offsetWidth-paddingLeft-paddingRight;(disableHeight||this.state.height===height&&this.state.scaledHeight===scaledHeight)&&(disableWidth||this.state.width===width&&this.state.scaledWidth===scaledWidth)||(this.setState({height,width,scaledHeight,scaledWidth}),"function"==typeof onResize&&onResize({height,scaledHeight,scaledWidth,width}))}},this._setRef=autoSizer=>{this._autoSizer=autoSizer}}componentDidMount(){const{nonce}=this.props;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,null!=this._parentNode&&("undefined"!=typeof ResizeObserver?(this._resizeObserver=new ResizeObserver((()=>{this._timeoutId=setTimeout(this._onResize,0)})),this._resizeObserver.observe(this._parentNode)):(this._detectElementResize=createDetectElementResize(nonce),this._detectElementResize.addResizeListener(this._parentNode,this._onResize)),this._onResize()))}componentWillUnmount(){this._parentNode&&(this._detectElementResize&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize),null!==this._timeoutId&&clearTimeout(this._timeoutId),this._resizeObserver&&(this._resizeObserver.observe(this._parentNode),this._resizeObserver.disconnect()))}render(){const{children,defaultHeight,defaultWidth,disableHeight=!1,disableWidth=!1,nonce,onResize,style={},tagName="div",...rest}=this.props,{height,scaledHeight,scaledWidth,width}=this.state,outerStyle={overflow:"visible"},childParams={};let bailoutOnChildren=!1;return disableHeight||(0===height&&(bailoutOnChildren=!0),outerStyle.height=0,childParams.height=height,childParams.scaledHeight=scaledHeight),disableWidth||(0===width&&(bailoutOnChildren=!0),outerStyle.width=0,childParams.width=width,childParams.scaledWidth=scaledWidth),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tagName,{ref:this._setRef,style:{...outerStyle,...style},...rest},!bailoutOnChildren&&children(childParams))}}AutoSizer.__docgenInfo={description:"",methods:[],displayName:"AutoSizer"}},"./packages/node_modules/react-window/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_m:()=>VariableSizeList});var esm_extends=__webpack_require__("./packages/node_modules/@babel/runtime/helpers/esm/extends.js"),assertThisInitialized=__webpack_require__("./packages/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),inheritsLoose=__webpack_require__("./packages/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),safeIsNaN=Number.isNaN||function ponyfill(value){return"number"==typeof value&&value!=value};function areInputsEqual(newInputs,lastInputs){if(newInputs.length!==lastInputs.length)return!1;for(var i=0;i<newInputs.length;i++)if(first=newInputs[i],second=lastInputs[i],!(first===second||safeIsNaN(first)&&safeIsNaN(second)))return!1;var first,second;return!0}const memoize_one_esm=function memoizeOne(resultFn,isEqual){var lastThis;void 0===isEqual&&(isEqual=areInputsEqual);var lastResult,lastArgs=[],calledOnce=!1;return function memoized(){for(var newArgs=[],_i=0;_i<arguments.length;_i++)newArgs[_i]=arguments[_i];return calledOnce&&lastThis===this&&isEqual(newArgs,lastArgs)||(lastResult=resultFn.apply(this,newArgs),calledOnce=!0,lastThis=this,lastArgs=newArgs),lastResult}};var react=__webpack_require__("./node_modules/react/index.js"),now="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function cancelTimeout(timeoutID){cancelAnimationFrame(timeoutID.id)}function requestTimeout(callback,delay){var start=now();var timeoutID={id:requestAnimationFrame((function tick(){now()-start>=delay?callback.call(null):timeoutID.id=requestAnimationFrame(tick)}))};return timeoutID}var size=-1;function getScrollbarSize(recalculate){if(void 0===recalculate&&(recalculate=!1),-1===size||recalculate){var div=document.createElement("div"),style=div.style;style.width="50px",style.height="50px",style.overflow="scroll",document.body.appendChild(div),size=div.offsetWidth-div.clientWidth,document.body.removeChild(div)}return size}var cachedRTLResult=null;function getRTLOffsetType(recalculate){if(void 0===recalculate&&(recalculate=!1),null===cachedRTLResult||recalculate){var outerDiv=document.createElement("div"),outerStyle=outerDiv.style;outerStyle.width="50px",outerStyle.height="50px",outerStyle.overflow="scroll",outerStyle.direction="rtl";var innerDiv=document.createElement("div"),innerStyle=innerDiv.style;return innerStyle.width="100px",innerStyle.height="100px",outerDiv.appendChild(innerDiv),document.body.appendChild(outerDiv),outerDiv.scrollLeft>0?cachedRTLResult="positive-descending":(outerDiv.scrollLeft=1,cachedRTLResult=0===outerDiv.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(outerDiv),cachedRTLResult}return cachedRTLResult}var defaultItemKey$1=function defaultItemKey(index,data){return index};function createListComponent(_ref){var _class,getItemOffset=_ref.getItemOffset,getEstimatedTotalSize=_ref.getEstimatedTotalSize,getItemSize=_ref.getItemSize,getOffsetForIndexAndAlignment=_ref.getOffsetForIndexAndAlignment,getStartIndexForOffset=_ref.getStartIndexForOffset,getStopIndexForStartIndex=_ref.getStopIndexForStartIndex,initInstanceProps=_ref.initInstanceProps,shouldResetStyleCacheOnItemSizeChange=_ref.shouldResetStyleCacheOnItemSizeChange,validateProps=_ref.validateProps;return _class=function(_PureComponent){function List(props){var _this;return(_this=_PureComponent.call(this,props)||this)._instanceProps=initInstanceProps(_this.props,(0,assertThisInitialized.A)(_this)),_this._outerRef=void 0,_this._resetIsScrollingTimeoutId=null,_this.state={instance:(0,assertThisInitialized.A)(_this),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof _this.props.initialScrollOffset?_this.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},_this._callOnItemsRendered=void 0,_this._callOnItemsRendered=memoize_one_esm((function(overscanStartIndex,overscanStopIndex,visibleStartIndex,visibleStopIndex){return _this.props.onItemsRendered({overscanStartIndex,overscanStopIndex,visibleStartIndex,visibleStopIndex})})),_this._callOnScroll=void 0,_this._callOnScroll=memoize_one_esm((function(scrollDirection,scrollOffset,scrollUpdateWasRequested){return _this.props.onScroll({scrollDirection,scrollOffset,scrollUpdateWasRequested})})),_this._getItemStyle=void 0,_this._getItemStyle=function(index){var style,_this$props=_this.props,direction=_this$props.direction,itemSize=_this$props.itemSize,layout=_this$props.layout,itemStyleCache=_this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange&&itemSize,shouldResetStyleCacheOnItemSizeChange&&layout,shouldResetStyleCacheOnItemSizeChange&&direction);if(itemStyleCache.hasOwnProperty(index))style=itemStyleCache[index];else{var _offset=getItemOffset(_this.props,index,_this._instanceProps),size=getItemSize(_this.props,index,_this._instanceProps),isHorizontal="horizontal"===direction||"horizontal"===layout,isRtl="rtl"===direction,offsetHorizontal=isHorizontal?_offset:0;itemStyleCache[index]=style={position:"absolute",left:isRtl?void 0:offsetHorizontal,right:isRtl?offsetHorizontal:void 0,top:isHorizontal?0:_offset,height:isHorizontal?"100%":size,width:isHorizontal?size:"100%"}}return style},_this._getItemStyleCache=void 0,_this._getItemStyleCache=memoize_one_esm((function(_,__,___){return{}})),_this._onScrollHorizontal=function(event){var _event$currentTarget=event.currentTarget,clientWidth=_event$currentTarget.clientWidth,scrollLeft=_event$currentTarget.scrollLeft,scrollWidth=_event$currentTarget.scrollWidth;_this.setState((function(prevState){if(prevState.scrollOffset===scrollLeft)return null;var direction=_this.props.direction,scrollOffset=scrollLeft;if("rtl"===direction)switch(getRTLOffsetType()){case"negative":scrollOffset=-scrollLeft;break;case"positive-descending":scrollOffset=scrollWidth-clientWidth-scrollLeft}return scrollOffset=Math.max(0,Math.min(scrollOffset,scrollWidth-clientWidth)),{isScrolling:!0,scrollDirection:prevState.scrollOffset<scrollOffset?"forward":"backward",scrollOffset,scrollUpdateWasRequested:!1}}),_this._resetIsScrollingDebounced)},_this._onScrollVertical=function(event){var _event$currentTarget2=event.currentTarget,clientHeight=_event$currentTarget2.clientHeight,scrollHeight=_event$currentTarget2.scrollHeight,scrollTop=_event$currentTarget2.scrollTop;_this.setState((function(prevState){if(prevState.scrollOffset===scrollTop)return null;var scrollOffset=Math.max(0,Math.min(scrollTop,scrollHeight-clientHeight));return{isScrolling:!0,scrollDirection:prevState.scrollOffset<scrollOffset?"forward":"backward",scrollOffset,scrollUpdateWasRequested:!1}}),_this._resetIsScrollingDebounced)},_this._outerRefSetter=function(ref){var outerRef=_this.props.outerRef;_this._outerRef=ref,"function"==typeof outerRef?outerRef(ref):null!=outerRef&&"object"==typeof outerRef&&outerRef.hasOwnProperty("current")&&(outerRef.current=ref)},_this._resetIsScrollingDebounced=function(){null!==_this._resetIsScrollingTimeoutId&&cancelTimeout(_this._resetIsScrollingTimeoutId),_this._resetIsScrollingTimeoutId=requestTimeout(_this._resetIsScrolling,150)},_this._resetIsScrolling=function(){_this._resetIsScrollingTimeoutId=null,_this.setState({isScrolling:!1},(function(){_this._getItemStyleCache(-1,null)}))},_this}(0,inheritsLoose.A)(List,_PureComponent),List.getDerivedStateFromProps=function getDerivedStateFromProps(nextProps,prevState){return validateSharedProps$1(nextProps,prevState),validateProps(nextProps),null};var _proto=List.prototype;return _proto.scrollTo=function scrollTo(scrollOffset){scrollOffset=Math.max(0,scrollOffset),this.setState((function(prevState){return prevState.scrollOffset===scrollOffset?null:{scrollDirection:prevState.scrollOffset<scrollOffset?"forward":"backward",scrollOffset,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},_proto.scrollToItem=function scrollToItem(index,align){void 0===align&&(align="auto");var _this$props2=this.props,itemCount=_this$props2.itemCount,layout=_this$props2.layout,scrollOffset=this.state.scrollOffset;index=Math.max(0,Math.min(index,itemCount-1));var scrollbarSize=0;if(this._outerRef){var outerRef=this._outerRef;scrollbarSize="vertical"===layout?outerRef.scrollWidth>outerRef.clientWidth?getScrollbarSize():0:outerRef.scrollHeight>outerRef.clientHeight?getScrollbarSize():0}this.scrollTo(getOffsetForIndexAndAlignment(this.props,index,align,scrollOffset,this._instanceProps,scrollbarSize))},_proto.componentDidMount=function componentDidMount(){var _this$props3=this.props,direction=_this$props3.direction,initialScrollOffset=_this$props3.initialScrollOffset,layout=_this$props3.layout;if("number"==typeof initialScrollOffset&&null!=this._outerRef){var outerRef=this._outerRef;"horizontal"===direction||"horizontal"===layout?outerRef.scrollLeft=initialScrollOffset:outerRef.scrollTop=initialScrollOffset}this._callPropsCallbacks()},_proto.componentDidUpdate=function componentDidUpdate(){var _this$props4=this.props,direction=_this$props4.direction,layout=_this$props4.layout,_this$state=this.state,scrollOffset=_this$state.scrollOffset;if(_this$state.scrollUpdateWasRequested&&null!=this._outerRef){var outerRef=this._outerRef;if("horizontal"===direction||"horizontal"===layout)if("rtl"===direction)switch(getRTLOffsetType()){case"negative":outerRef.scrollLeft=-scrollOffset;break;case"positive-ascending":outerRef.scrollLeft=scrollOffset;break;default:var clientWidth=outerRef.clientWidth,scrollWidth=outerRef.scrollWidth;outerRef.scrollLeft=scrollWidth-clientWidth-scrollOffset}else outerRef.scrollLeft=scrollOffset;else outerRef.scrollTop=scrollOffset}this._callPropsCallbacks()},_proto.componentWillUnmount=function componentWillUnmount(){null!==this._resetIsScrollingTimeoutId&&cancelTimeout(this._resetIsScrollingTimeoutId)},_proto.render=function render(){var _this$props5=this.props,children=_this$props5.children,className=_this$props5.className,direction=_this$props5.direction,height=_this$props5.height,innerRef=_this$props5.innerRef,innerElementType=_this$props5.innerElementType,innerTagName=_this$props5.innerTagName,itemCount=_this$props5.itemCount,itemData=_this$props5.itemData,_this$props5$itemKey=_this$props5.itemKey,itemKey=void 0===_this$props5$itemKey?defaultItemKey$1:_this$props5$itemKey,layout=_this$props5.layout,outerElementType=_this$props5.outerElementType,outerTagName=_this$props5.outerTagName,style=_this$props5.style,useIsScrolling=_this$props5.useIsScrolling,width=_this$props5.width,isScrolling=this.state.isScrolling,isHorizontal="horizontal"===direction||"horizontal"===layout,onScroll=isHorizontal?this._onScrollHorizontal:this._onScrollVertical,_this$_getRangeToRend=this._getRangeToRender(),startIndex=_this$_getRangeToRend[0],stopIndex=_this$_getRangeToRend[1],items=[];if(itemCount>0)for(var _index=startIndex;_index<=stopIndex;_index++)items.push((0,react.createElement)(children,{data:itemData,key:itemKey(_index,itemData),index:_index,isScrolling:useIsScrolling?isScrolling:void 0,style:this._getItemStyle(_index)}));var estimatedTotalSize=getEstimatedTotalSize(this.props,this._instanceProps);return(0,react.createElement)(outerElementType||outerTagName||"div",{className,onScroll,ref:this._outerRefSetter,style:(0,esm_extends.A)({position:"relative",height,width,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction},style)},(0,react.createElement)(innerElementType||innerTagName||"div",{children:items,ref:innerRef,style:{height:isHorizontal?"100%":estimatedTotalSize,pointerEvents:isScrolling?"none":void 0,width:isHorizontal?estimatedTotalSize:"100%"}}))},_proto._callPropsCallbacks=function _callPropsCallbacks(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var _this$_getRangeToRend2=this._getRangeToRender(),_overscanStartIndex=_this$_getRangeToRend2[0],_overscanStopIndex=_this$_getRangeToRend2[1],_visibleStartIndex=_this$_getRangeToRend2[2],_visibleStopIndex=_this$_getRangeToRend2[3];this._callOnItemsRendered(_overscanStartIndex,_overscanStopIndex,_visibleStartIndex,_visibleStopIndex)}if("function"==typeof this.props.onScroll){var _this$state2=this.state,_scrollDirection=_this$state2.scrollDirection,_scrollOffset=_this$state2.scrollOffset,_scrollUpdateWasRequested=_this$state2.scrollUpdateWasRequested;this._callOnScroll(_scrollDirection,_scrollOffset,_scrollUpdateWasRequested)}},_proto._getRangeToRender=function _getRangeToRender(){var _this$props6=this.props,itemCount=_this$props6.itemCount,overscanCount=_this$props6.overscanCount,_this$state3=this.state,isScrolling=_this$state3.isScrolling,scrollDirection=_this$state3.scrollDirection,scrollOffset=_this$state3.scrollOffset;if(0===itemCount)return[0,0,0,0];var startIndex=getStartIndexForOffset(this.props,scrollOffset,this._instanceProps),stopIndex=getStopIndexForStartIndex(this.props,startIndex,scrollOffset,this._instanceProps),overscanBackward=isScrolling&&"backward"!==scrollDirection?1:Math.max(1,overscanCount),overscanForward=isScrolling&&"forward"!==scrollDirection?1:Math.max(1,overscanCount);return[Math.max(0,startIndex-overscanBackward),Math.max(0,Math.min(itemCount-1,stopIndex+overscanForward)),startIndex,stopIndex]},List}(react.PureComponent),_class.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},_class}var validateSharedProps$1=function validateSharedProps(_ref2,_ref3){_ref2.children,_ref2.direction,_ref2.height,_ref2.layout,_ref2.innerTagName,_ref2.outerTagName,_ref2.width,_ref3.instance},getItemMetadata$1=function getItemMetadata(props,index,instanceProps){var itemSize=props.itemSize,itemMetadataMap=instanceProps.itemMetadataMap,lastMeasuredIndex=instanceProps.lastMeasuredIndex;if(index>lastMeasuredIndex){var offset=0;if(lastMeasuredIndex>=0){var itemMetadata=itemMetadataMap[lastMeasuredIndex];offset=itemMetadata.offset+itemMetadata.size}for(var i=lastMeasuredIndex+1;i<=index;i++){var size=itemSize(i);itemMetadataMap[i]={offset,size},offset+=size}instanceProps.lastMeasuredIndex=index}return itemMetadataMap[index]},findNearestItemBinarySearch$1=function findNearestItemBinarySearch(props,instanceProps,high,low,offset){for(;low<=high;){var middle=low+Math.floor((high-low)/2),currentOffset=getItemMetadata$1(props,middle,instanceProps).offset;if(currentOffset===offset)return middle;currentOffset<offset?low=middle+1:currentOffset>offset&&(high=middle-1)}return low>0?low-1:0},findNearestItemExponentialSearch$1=function findNearestItemExponentialSearch(props,instanceProps,index,offset){for(var itemCount=props.itemCount,interval=1;index<itemCount&&getItemMetadata$1(props,index,instanceProps).offset<offset;)index+=interval,interval*=2;return findNearestItemBinarySearch$1(props,instanceProps,Math.min(index,itemCount-1),Math.floor(index/2),offset)},getEstimatedTotalSize=function getEstimatedTotalSize(_ref2,_ref3){var itemCount=_ref2.itemCount,itemMetadataMap=_ref3.itemMetadataMap,estimatedItemSize=_ref3.estimatedItemSize,lastMeasuredIndex=_ref3.lastMeasuredIndex,totalSizeOfMeasuredItems=0;if(lastMeasuredIndex>=itemCount&&(lastMeasuredIndex=itemCount-1),lastMeasuredIndex>=0){var itemMetadata=itemMetadataMap[lastMeasuredIndex];totalSizeOfMeasuredItems=itemMetadata.offset+itemMetadata.size}return totalSizeOfMeasuredItems+(itemCount-lastMeasuredIndex-1)*estimatedItemSize},VariableSizeList=createListComponent({getItemOffset:function getItemOffset(props,index,instanceProps){return getItemMetadata$1(props,index,instanceProps).offset},getItemSize:function getItemSize(props,index,instanceProps){return instanceProps.itemMetadataMap[index].size},getEstimatedTotalSize,getOffsetForIndexAndAlignment:function getOffsetForIndexAndAlignment(props,index,align,scrollOffset,instanceProps,scrollbarSize){var direction=props.direction,height=props.height,layout=props.layout,width=props.width,size="horizontal"===direction||"horizontal"===layout?width:height,itemMetadata=getItemMetadata$1(props,index,instanceProps),estimatedTotalSize=getEstimatedTotalSize(props,instanceProps),maxOffset=Math.max(0,Math.min(estimatedTotalSize-size,itemMetadata.offset)),minOffset=Math.max(0,itemMetadata.offset-size+itemMetadata.size+scrollbarSize);switch("smart"===align&&(align=scrollOffset>=minOffset-size&&scrollOffset<=maxOffset+size?"auto":"center"),align){case"start":return maxOffset;case"end":return minOffset;case"center":return Math.round(minOffset+(maxOffset-minOffset)/2);default:return scrollOffset>=minOffset&&scrollOffset<=maxOffset?scrollOffset:scrollOffset<minOffset?minOffset:maxOffset}},getStartIndexForOffset:function getStartIndexForOffset(props,offset,instanceProps){return function findNearestItem(props,instanceProps,offset){var itemMetadataMap=instanceProps.itemMetadataMap,lastMeasuredIndex=instanceProps.lastMeasuredIndex;return(lastMeasuredIndex>0?itemMetadataMap[lastMeasuredIndex].offset:0)>=offset?findNearestItemBinarySearch$1(props,instanceProps,lastMeasuredIndex,0,offset):findNearestItemExponentialSearch$1(props,instanceProps,Math.max(0,lastMeasuredIndex),offset)}(props,instanceProps,offset)},getStopIndexForStartIndex:function getStopIndexForStartIndex(props,startIndex,scrollOffset,instanceProps){for(var direction=props.direction,height=props.height,itemCount=props.itemCount,layout=props.layout,width=props.width,size="horizontal"===direction||"horizontal"===layout?width:height,itemMetadata=getItemMetadata$1(props,startIndex,instanceProps),maxOffset=scrollOffset+size,offset=itemMetadata.offset+itemMetadata.size,stopIndex=startIndex;stopIndex<itemCount-1&&offset<maxOffset;)stopIndex++,offset+=getItemMetadata$1(props,stopIndex,instanceProps).size;return stopIndex},initInstanceProps:function initInstanceProps(props,instance){var instanceProps={itemMetadataMap:{},estimatedItemSize:props.estimatedItemSize||50,lastMeasuredIndex:-1};return instance.resetAfterIndex=function(index,shouldForceUpdate){void 0===shouldForceUpdate&&(shouldForceUpdate=!0),instanceProps.lastMeasuredIndex=Math.min(instanceProps.lastMeasuredIndex,index-1),instance._getItemStyleCache(-1),shouldForceUpdate&&instance.forceUpdate()},instanceProps},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function validateProps(_ref5){_ref5.itemSize}})}}]);