function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const o={iputField:document.querySelector("input"),countryList:document.querySelector(".country-list"),countryMainDiv:document.querySelector(".country-info"),bgColor:document.querySelector(".animative-color-bg"),mainTilteH1:document.querySelector("h1"),container:document.querySelector(".container")};function i(){o.countryMainDiv.classList.remove("active"),o.bgColor.style.removeProperty("background-color"),o.countryList.classList.remove("active"),o.container.classList.remove("active"),o.iputField.value=""}var n,a,r={};n=void 0!==e?e:"undefined"!=typeof window?window:r,a=function(t){if(void 0===t&&void 0===t.document)return!1;var e,o="Success",i="Failure",n="Warning",a="Info",r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(e){return e||(e="head"),null!==t.document[e]||(s('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,o=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],o++);for(var i=function(o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e&&"[object Object]"===Object.prototype.toString.call(o[i])?t[i]=c(t[i],o[i]):t[i]=o[i])};o<arguments.length;o++)i(arguments[o]);return t},f=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},m=0,u=function(s,f,u,p){if(!l("body"))return!1;e||d.Notify.init({});var y=c(!0,e,{});if("object"==typeof u&&!Array.isArray(u)||"object"==typeof p&&!Array.isArray(p)){var x={};"object"==typeof u?x=u:"object"==typeof p&&(x=p),e=c(!0,e,x)}var h,g,b=e[s.toLocaleLowerCase("en")];m++,"string"!=typeof f&&(f="Notiflix "+s),e.plainText&&(h=f,(g=t.document.createElement("div")).innerHTML=h,f=g.textContent||g.innerText||""),!e.plainText&&f.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),f='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),f.length>e.messageMaxLength&&(f=f.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),e.cssAnimation||(e.cssAnimationDuration=0);var v=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(v.id=r.wrapID,v.style.width=e.width,v.style.zIndex=e.zindex,v.style.opacity=e.opacity,"center-center"===e.position?(v.style.left=e.distance,v.style.top=e.distance,v.style.right=e.distance,v.style.bottom=e.distance,v.style.margin="auto",v.classList.add("nx-flex-center-center"),v.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.justifyContent="center",v.style.alignItems="center",v.style.pointerEvents="none"):"center-top"===e.position?(v.style.left=e.distance,v.style.right=e.distance,v.style.top=e.distance,v.style.bottom="auto",v.style.margin="auto"):"center-bottom"===e.position?(v.style.left=e.distance,v.style.right=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.margin="auto"):"right-bottom"===e.position?(v.style.right=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.left="auto"):"left-top"===e.position?(v.style.left=e.distance,v.style.top=e.distance,v.style.right="auto",v.style.bottom="auto"):"left-bottom"===e.position?(v.style.left=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.right="auto"):(v.style.right=e.distance,v.style.top=e.distance,v.style.left="auto",v.style.bottom="auto"),e.backOverlay){var w=t.document.getElementById(r.overlayID)||t.document.createElement("div");w.id=r.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=e.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=b.backOverlayColor||e.backOverlayColor,w.className=e.cssAnimation?"nx-with-animation":"",w.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(w)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(v);var k=t.document.createElement("div");k.id=e.ID+"-"+m,k.className=e.className+" "+b.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof u?"nx-with-close-button":"")+" "+("function"==typeof u?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=b.textColor,k.style.background=b.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var N="";if(e.closeButton&&"function"!=typeof u&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+f+"</span>"+(e.closeButton?N:"");else{var C="";s===o?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===i?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===n?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=C+'<span class="nx-message nx-with-icon">'+f+"</span>"+(e.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+f+"</span>"+(e.closeButton?N:"");if("left-bottom"===e.position||"right-bottom"===e.position){var I=t.document.getElementById(r.wrapID);I.insertBefore(k,I.firstChild)}else t.document.getElementById(r.wrapID).appendChild(k);var L=t.document.getElementById(k.id);if(L){var M,W,T=function(){L.classList.add("nx-remove");var e=t.document.getElementById(r.overlayID);e&&v.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(M)},A=function(){if(L&&null!==L.parentNode&&L.parentNode.removeChild(L),v.childElementCount<=0&&null!==v.parentNode){v.parentNode.removeChild(v);var e=t.document.getElementById(r.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(W)};if(e.closeButton&&"function"!=typeof u&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){T();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof u||e.clickToClose)&&L.addEventListener("click",(function(){"function"==typeof u&&u(),T();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof u){var z=function(){M=setTimeout((function(){T()}),e.timeout),W=setTimeout((function(){A()}),e.timeout+e.cssAnimationDuration)};z(),e.pauseOnHover&&(L.addEventListener("mouseenter",(function(){L.classList.add("nx-paused"),clearTimeout(M),clearTimeout(W)})),L.addEventListener("mouseleave",(function(){L.classList.remove("nx-paused"),z()})))}}if(e.showOnlyTheLastOne&&m>0)for(var E=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+m+"])"),O=0;O<E.length;O++){var D=E[O];null!==D.parentNode&&D.parentNode.removeChild(D)}e=c(!0,e,y)},d={Notify:{init:function(o){e=c(!0,r,o),function(e,o){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(o)){var i=t.document.createElement("style");i.id=o,i.innerHTML=e(),t.document.head.appendChild(i)}}(f,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return s("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,i){u(o,t,e,i)},failure:function(t,e,o){u(i,t,e,o)},warning:function(t,e,o){u(n,t,e,o)},info:function(t,e,o){u(a,t,e,o)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:d.Notify}):{Notify:d.Notify}},"function"==typeof define&&define.amd?define([],(function(){return a(n)})):"object"==typeof r?r=a(n):n.Notiflix=a(n);const s=function(t){throw i(),r.Notify.failure("Oops, there is no country with that name"),new Error(t.message)};function l(t){const e=t.map((t=>`<li class='country-list__item'>\n        <img\n          src='${t.flags}'\n          alt='${t.name}'\n          class='country-list__image'\n        />\n        <p class='country-list__title'>${t.name}</p>\n      </li>`)).join("");o.countryList.innerHTML=e,o.bgColor.style.backgroundColor="",o.container.classList.add("active"),o.countryList.classList.add("active"),o.countryMainDiv.classList.remove("active"),o.countryMainDiv.innerHTML=""}
/*! Fast Average Color | © 2022 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */function c(t){var e=t.toString(16);return 1===e.length?"0"+e:e}function f(t){return"#"+t.map(c).join("")}function m(t){return t?(e=t,Array.isArray(e[0])?t:[t]):[];var e}function u(t,e,o){for(var i=0;i<o.length;i++)if(d(t,e,o[i]))return!0;return!1}function d(t,e,o){switch(o.length){case 3:if(function(t,e,o){return 255!==t[e+3]||t[e]===o[0]&&t[e+1]===o[1]&&t[e+2]===o[2]}(t,e,o))return!0;break;case 4:if(function(t,e,o){return t[e+3]&&o[3]?t[e]===o[0]&&t[e+1]===o[1]&&t[e+2]===o[2]&&t[e+3]===o[3]:t[e+3]===o[3]}(t,e,o))return!0;break;case 5:if(function(t,e,o){var i=o[0],n=o[1],a=o[2],r=o[3],s=o[4],l=t[e+3],c=p(l,r,s);return r?!(l||!c)||!!(p(t[e],i,s)&&p(t[e+1],n,s)&&p(t[e+2],a,s)&&c):c}(t,e,o))return!0;break;default:return!1}}function p(t,e,o){return t>=e-o&&t<=e+o}function y(t,e,o){for(var i={},n=o.ignoredColor,a=o.step,r=[0,0,0,0,0],s=0;s<e;s+=a){var l=t[s],c=t[s+1],f=t[s+2],m=t[s+3];if(!n||!u(t,s,n)){var d=Math.round(l/24)+","+Math.round(c/24)+","+Math.round(f/24);i[d]?i[d]=[i[d][0]+l*m,i[d][1]+c*m,i[d][2]+f*m,i[d][3]+m,i[d][4]+1]:i[d]=[l*m,c*m,f*m,m,1],r[4]<i[d][4]&&(r=i[d])}}var p=r[0],y=r[1],x=r[2],h=r[3],g=r[4];return h?[Math.round(p/h),Math.round(y/h),Math.round(x/h),Math.round(h/g)]:o.defaultColor}function x(t,e,o){for(var i=0,n=0,a=0,r=0,s=0,l=o.ignoredColor,c=o.step,f=0;f<e;f+=c){var m=t[f+3],d=t[f]*m,p=t[f+1]*m,y=t[f+2]*m;l&&u(t,f,l)||(i+=d,n+=p,a+=y,r+=m,s++)}return r?[Math.round(i/r),Math.round(n/r),Math.round(a/r),Math.round(r/s)]:o.defaultColor}function h(t,e,o){for(var i=0,n=0,a=0,r=0,s=0,l=o.ignoredColor,c=o.step,f=0;f<e;f+=c){var m=t[f],d=t[f+1],p=t[f+2],y=t[f+3];l&&u(t,f,l)||(i+=m*m*y,n+=d*d*y,a+=p*p*y,r+=y,s++)}return r?[Math.round(Math.sqrt(i/r)),Math.round(Math.sqrt(n/r)),Math.round(Math.sqrt(a/r)),Math.round(r/s)]:o.defaultColor}function g(t){return b(t,"defaultColor",[0,0,0,0])}function b(t,e,o){return void 0===t[e]?o:t[e]}function v(t){if(k(t)){var e=t.naturalWidth,o=t.naturalHeight;return t.naturalWidth||-1===t.src.search(/\.svg(\?|$)/i)||(e=o=100),{width:e,height:o}}return function(t){return"undefined"!=typeof HTMLVideoElement&&t instanceof HTMLVideoElement}(t)?{width:t.videoWidth,height:t.videoHeight}:{width:t.width,height:t.height}}function w(t){return function(t){return"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement}(t)?"canvas":function(t){return"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas}(t)?"offscreencanvas":function(t){return"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap}(t)?"imagebitmap":t.src}function k(t){return"undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement}var N="undefined"==typeof window;function C(t,e,o){e||(console.error("FastAverageColor: "+t),o&&console.error(o))}function I(t){return Error("FastAverageColor: "+t)}var L=function(){function t(){this.canvas=null,this.ctx=null}return t.prototype.getColorAsync=function(t,e){if(!t)return Promise.reject(I("call .getColorAsync() without resource."));if("string"==typeof t){if("undefined"==typeof Image)return Promise.reject(I("resource as string is not supported in this environment"));var o=new Image;return o.crossOrigin=e&&e.crossOrigin||"",o.src=t,this.bindImageEvents(o,e)}if(k(t)&&!t.complete)return this.bindImageEvents(t,e);var i=this.getColor(t,e);return i.error?Promise.reject(i.error):Promise.resolve(i)},t.prototype.getColor=function(t,e){var o=g(e=e||{});if(!t)return C("call .getColor(null) without resource",e.silent),this.prepareResult(o);var i=function(t,e){var o,i=b(e,"left",0),n=b(e,"top",0),a=b(e,"width",t.width),r=b(e,"height",t.height),s=a,l=r;return"precision"===e.mode||(a>r?(o=a/r,s=100,l=Math.round(s/o)):(o=r/a,l=100,s=Math.round(l/o)),(s>a||l>r||s<10||l<10)&&(s=a,l=r)),{srcLeft:i,srcTop:n,srcWidth:a,srcHeight:r,destWidth:s,destHeight:l}}(v(t),e);if(!(i.srcWidth&&i.srcHeight&&i.destWidth&&i.destHeight))return C('incorrect sizes for resource "'.concat(w(t),'"'),e.silent),this.prepareResult(o);if(this.canvas||(this.canvas=N?new OffscreenCanvas(1,1):document.createElement("canvas")),!this.ctx&&(this.ctx=this.canvas.getContext&&this.canvas.getContext("2d"),!this.ctx))return C("Canvas Context 2D is not supported in this browser",e.silent),this.prepareResult(o);this.canvas.width=i.destWidth,this.canvas.height=i.destHeight;var n=o;try{this.ctx.clearRect(0,0,i.destWidth,i.destHeight),this.ctx.drawImage(t,i.srcLeft,i.srcTop,i.srcWidth,i.srcHeight,0,0,i.destWidth,i.destHeight);var a=this.ctx.getImageData(0,0,i.destWidth,i.destHeight).data;n=this.getColorFromArray4(a,e)}catch(o){C("security error (CORS) for resource ".concat(w(t),".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"),e.silent,o)}return this.prepareResult(n)},t.prototype.getColorFromArray4=function(t,e){e=e||{};var o=t.length,i=g(e);if(o<4)return i;var n,a=o-o%4,r=4*(e.step||1);switch(e.algorithm||"sqrt"){case"simple":n=x;break;case"sqrt":n=h;break;case"dominant":n=y;break;default:throw I("".concat(e.algorithm," is unknown algorithm"))}return n(t,a,{defaultColor:i,ignoredColor:m(e.ignoredColor),step:r})},t.prototype.prepareResult=function(t){var e,o=t.slice(0,3),i=[t[0],t[1],t[2],t[3]/255],n=(299*(e=t)[0]+587*e[1]+114*e[2])/1e3<128;return{value:[t[0],t[1],t[2],t[3]],rgb:"rgb("+o.join(",")+")",rgba:"rgba("+i.join(",")+")",hex:f(o),hexa:f(t),isDark:n,isLight:!n}},t.prototype.destroy=function(){this.canvas&&(this.canvas.width=1,this.canvas.height=1,this.canvas=null),this.ctx=null},t.prototype.bindImageEvents=function(t,e){var o=this;return new Promise((function(i,n){var a=function(){l();var a=o.getColor(t,e);a.error?n(a.error):i(a)},r=function(){l(),n(I('Error loading image "'.concat(t.src,'".')))},s=function(){l(),n(I('Image "'.concat(t.src,'" loading aborted')))},l=function(){t.removeEventListener("load",a),t.removeEventListener("error",r),t.removeEventListener("abort",s)};t.addEventListener("load",a),t.addEventListener("error",r),t.addEventListener("abort",s)}))},t}();function M({name:t,flags:e,capital:i,population:n,languages:a}){var r;o.container.classList.add("active"),o.countryMainDiv.classList.add("active"),o.countryList.classList.remove("active"),o.countryList.innerHTML="",o.countryMainDiv.innerHTML=`<ul class='country-main-list'>\n    <li class='country-main-list__header'>\n      <img\n        src='${e}'\n        alt='${t}'\n        class='country-main-list__image visible'\n      />\n      <h2 class='country-main-list__title'>${t}</h2>\n    </li>\n    <li class='country-main-list__attribute'><b>Capital</b>: ${i}</li>\n    <li class='country-main-list__attribute'><b>Population</b>: ${n}</li>\n    <li class='country-main-list__attribute'><b>Languages</b>: ${a}</li>\n  </ul>`,r=e,(new L).getColorAsync(r).then((t=>{document.querySelector("img.visible").style.filter=`drop-shadow(0 0 10px ${t.hex})`,o.bgColor.style.backgroundColor=`${t.hex}80`,o.mainTilteH1.style.color=t.isDark?"#fff":"#999"})).catch((t=>{throw new Error(t.message)}))}function W(t){return Object.values(t).join(", ").trim().slice(0,-1)}const T=function(t){if(console.log(t),t.length>=10)return r.Notify.info("Too many matches found. Please enter a more specific name.");const e=t.map((t=>({name:t.name.official,flags:t.flags.png,capital:W(t.capital),population:t.population.toLocaleString(),languages:W(t.languages)})));if(e.length>1&&e.length<10)return l(e);const[o]=e;return M(o)};var A,z=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,D=/^0o[0-7]+$/i,j=parseInt,H="object"==typeof e&&e&&e.Object===Object&&e,S="object"==typeof self&&self&&self.Object===Object&&self,B=H||S||Function("return this")(),_=Object.prototype.toString,$=Math.max,F=Math.min,q=function(){return B.Date.now()};function R(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function P(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==_.call(t)}(t))return NaN;if(R(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=R(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(z,"");var o=O.test(t);return o||D.test(t)?j(t.slice(2),o?2:8):E.test(t)?NaN:+t}A=function(t,e,o){var i,n,a,r,s,l,c=0,f=!1,m=!1,u=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var o=i,a=n;return i=n=void 0,c=e,r=t.apply(a,o)}function p(t){return c=t,s=setTimeout(x,e),f?d(t):r}function y(t){var o=t-l;return void 0===l||o>=e||o<0||m&&t-c>=a}function x(){var t=q();if(y(t))return h(t);s=setTimeout(x,function(t){var o=e-(t-l);return m?F(o,a-(t-c)):o}(t))}function h(t){return s=void 0,u&&i?d(t):(i=n=void 0,r)}function g(){var t=q(),o=y(t);if(i=arguments,n=this,l=t,o){if(void 0===s)return p(l);if(m)return s=setTimeout(x,e),d(l)}return void 0===s&&(s=setTimeout(x,e)),r}return e=P(e)||0,R(o)&&(f=!!o.leading,a=(m="maxWait"in o)?$(P(o.maxWait)||0,e):a,u="trailing"in o?!!o.trailing:u),g.cancel=function(){void 0!==s&&clearTimeout(s),c=0,i=l=n=s=void 0},g.flush=function(){return void 0===s?r:h(q())},g};o.iputField.addEventListener("input",t(A)((function(t){return t.target.value?(console.log(t.target.value),e=t.target.value,void fetch(`https://restcountries.com/v3.1/name/${e}`).then((t=>t.json())).then(T).catch(s)):i();var e}),300));
//# sourceMappingURL=index.c34ea5c0.js.map
