(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{70:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=i(r(3)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}(r(0));i(r(2)),i(r(83));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t,r,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var l in n)void 0===t[l]&&(t[l]=n[l]);else t||(t=n||{});if(1===i)t.children=a;else if(i>1){for(var s=new Array(i),u=0;u<i;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const d=e=>{let{to:t}=e,r=c(e,["to"]);return t.includes("http")?n.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=a.default.join("/auto/","pages/extras/version.html")+t),n.default.createElement("a",u({},r,{href:t,onClick:r=>{if(r.preventDefault(),"#"===e.to)return!1;const o=new URL(a.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,t),e.onClick();const n=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(n),!1}})))};d.defaultProps={href:"",onClick:()=>{}};const p=e=>{var t,r;return r=t=class extends n.default.Component{constructor(...e){super(...e),s(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},s(t,"defaultProps",{shouldLoad:!0}),r};p(()=>r.e(20).then(r.bind(null,84))),p(()=>r.e(20).then(r.bind(null,85)));var f=l("p",{},void 0,"Useful in conjunction with ",l("code",{},void 0,"npm version")," to auto-version releases."),h=l("p",{},void 0,"To create a prerelease add the ",l("code",{},void 0,"prerelease")," label to your pull request."),v=l("p",{},void 0,"To not create a release for a pull request add the ",l("code",{},void 0,"skip-release")," label. Any pull request with this tag will make ",l("code",{},void 0,"auto version")," return ",l("code",{},void 0,"''"),"."),g=l("article",{className:"message column is-warning"},void 0,l("div",{className:"message-body"},void 0,l("p",{},void 0,"⚠️ You must check the return value of ",l("code",{},void 0,"auto version")," in a bash script like in the example configuration for the ",l("code",{},void 0,"skip-release")," label to function properly."))),m=l("code",{},void 0,"skipReleaseLabels"),b=l("pre",{},void 0,l("code",{className:"language-sh"},void 0,"auto version --skip-release-labels project-files --skip-release-labels documentation",l("br",{}))),y=l("code",{},void 0,".autorc");var w=e=>l("div",{className:e.className},void 0,l("section",{},void 0,f,l("h2",{id:"prerelease"},void 0,"Prerelease ",l(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#prerelease","aria-hidden":"true"})),h,l("h2",{id:"skip-release"},void 0,"Skip Release ",l(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#skip-release","aria-hidden":"true"})),v,g,l("h3",{id:"multiple"},void 0,"Multiple ",l(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#multiple","aria-hidden":"true"})),l("p",{},void 0,"You can configure multiple labels to skip releasing as well. To do this use the ",m," options. This can also be configured via the ",l(d,{currentPage:e.currentPage,to:"/auto/pages/extras/autorc.html#multiple-no-version"},void 0,".autorc"),"."),b,l("h2",{id:"configure-versioning-labels"},void 0,"Configure Versioning Labels ",l(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#configure-versioning-labels","aria-hidden":"true"})),l("p",{},void 0,"You can customize the versioning labels in the ",y,". To see configuration ",l(d,{currentPage:e.currentPage,to:"/auto/pages/extras/autorc.html#versioning-labels"},void 0,"go here"),".")));t.default=w,e.exports=t.default}}]);
//# sourceMappingURL=version.js.map