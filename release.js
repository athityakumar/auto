(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{69:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=s(r(3)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0));s(r(2)),s(r(82));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t,r,o){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={children:void 0}),t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});if(1===s)t.children=o;else if(s>1){for(var i=new Array(s),u=0;u<s;u++)i[u]=arguments[u+3];t.children=i}return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p=e=>{let{to:t}=e,r=c(e,["to"]);return t.includes("http")?a.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=o.default.join("/auto/","pages/extras/release.html")+t),a.default.createElement("a",u({},r,{href:t,onClick:r=>{if(r.preventDefault(),"#"===e.to)return!1;const n=new URL(o.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(n),null,t),e.onClick();const a=new CustomEvent("changeLocation",{detail:n});return dispatchEvent(a),!1}})))};p.defaultProps={href:"",onClick:()=>{}};const d=e=>{var t,r;return r=t=class extends a.default.Component{constructor(...e){super(...e),i(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?a.default.createElement(e,this.props,this.props.children||null):null}},i(t,"defaultProps",{shouldLoad:!0}),r};d(()=>r.e(20).then(r.bind(null,83))),d(()=>r.e(20).then(r.bind(null,84)));var f=l("pre",{},void 0,l("code",{className:"language-json"},void 0,"{",l("br",{}),"  ",l("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",l("br",{}),"    ",l("span",{className:"hljs-attr"},void 0,'"postpublish"'),": ",l("span",{className:"hljs-string"},void 0,'"auto release"'),l("br",{}),"  }",l("br",{}),"}",l("br",{}))),h=l("p",{},void 0,"Make sure the branch/tag you're releasing is on github before running ",l("code",{},void 0,"auto release"),". You will need to push the tags to github first:"),b=l("pre",{},void 0,l("code",{className:"language-json"},void 0,"{",l("br",{}),"  ",l("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",l("br",{}),"    ",l("span",{className:"hljs-attr"},void 0,'"postpublish"'),": ",l("span",{className:"hljs-string"},void 0,'"git push --follow-tags --set-upstream origin $branch && auto release"'),l("br",{}),"  }",l("br",{}),"}",l("br",{})));var v=e=>l("div",{className:e.className},void 0,l("section",{},void 0,l("h2",{id:"usage"},void 0,"Usage ",l(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#usage","aria-hidden":"true"})),f,h,b));t.default=v,e.exports=t.default}}]);
//# sourceMappingURL=release.js.map