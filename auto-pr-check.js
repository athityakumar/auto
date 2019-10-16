(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s=n(r(3)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}(r(0));n(r(2)),n(r(89));function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t,r,s){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});if(1===n)t.children=s;else if(n>1){for(var i=new Array(n),u=0;u<n;u++)i[u]=arguments[u+3];t.children=i}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,o,s=function(e,t){if(null==e)return{};var r,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const c=e=>{let{to:t}=e,r=p(e,["to"]);return t.includes("http")?a.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=s.default.join("/auto/","pages/auto-pr-check.html")+t),a.default.createElement("a",u({},r,{href:t,onClick:r=>{if(r.preventDefault(),"#"===e.to)return!1;const o=new URL(s.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,t),e.onClick();const a=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(a),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const d=e=>{var t,r;return r=t=class extends a.default.Component{constructor(...e){super(...e),i(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?a.default.createElement(e,this.props,this.props.children||null):null}},i(t,"defaultProps",{shouldLoad:!0}),r};d(()=>r.e(29).then(r.bind(null,90))),d(()=>r.e(29).then(r.bind(null,91)));var h=l("h1",{},void 0,l("code",{},void 0,"auto pr-check")),f=l("p",{},void 0,"Check that a pull request has a SemVer label."),b=l("pre",{},void 0,l("code",{className:"language-sh"},void 0,"auto pr-check --pr 24 --url http://your-ci.com",l("br",{}))),m=l("pre",{},void 0,l("code",{className:"language-bash"},void 0,">  auto pr-check -h",l("br",{}),l("br",{}),"Options",l("br",{}),l("br",{}),"  --pr number [required]               The pull request the ",l("span",{className:"hljs-built_in"},void 0,"command")," should use. Detects PR number ",l("span",{className:"hljs-keyword"},void 0,"in")," CI",l("br",{}),"  --url string                         URL to associate with this status",l("br",{}),"  --only-publish-with-release-label    Only bump version ",l("span",{className:"hljs-keyword"},void 0,"if")," ",l("span",{className:"hljs-string"},void 0,"'release'")," label is on pull request",l("br",{}),"  --context string                     A string label to differentiate this status from others",l("br",{}),"  --skip-release-labels string[]       Labels that will not create a release. Defaults to just ",l("span",{className:"hljs-string"},void 0,"'skip-release'"),l("br",{}),"  -d, --dry-run                        Report what ",l("span",{className:"hljs-built_in"},void 0,"command")," will ",l("span",{className:"hljs-keyword"},void 0,"do")," but ",l("span",{className:"hljs-keyword"},void 0,"do")," not actually ",l("span",{className:"hljs-keyword"},void 0,"do")," anything",l("br",{}),l("br",{}),"Global Options",l("br",{}),l("br",{}),"  -h, --",l("span",{className:"hljs-built_in"},void 0,"help"),"            Display the ",l("span",{className:"hljs-built_in"},void 0,"help")," output ",l("span",{className:"hljs-keyword"},void 0,"for")," the ",l("span",{className:"hljs-built_in"},void 0,"command"),l("br",{}),"  -v, --verbose         Show some more logs",l("br",{}),"  -w, --very-verbose    Show a lot more logs",l("br",{}),"  --repo string         The repo to ",l("span",{className:"hljs-built_in"},void 0,"set")," the status on. Defaults to looking ",l("span",{className:"hljs-keyword"},void 0,"in")," the package definition ",l("span",{className:"hljs-keyword"},void 0,"for")," the platform",l("br",{}),"  --owner string        The owner of the GitHub repo. Defaults to reading from the package definition ",l("span",{className:"hljs-keyword"},void 0,"for")," the platform",l("br",{}),"  --github-api string   GitHub API to use",l("br",{}),"  --plugins string[]    Plugins to load auto with. (defaults to just npm)",l("br",{}),l("br",{}),"Examples",l("br",{}),l("br",{}),"  $ auto pr-check --pr 32 --url http://your-ci.com/build/123",l("br",{})));var v=e=>l("div",{className:e.className},void 0,l("section",{},void 0,h,f,b,l("h2",{id:"options"},void 0,"Options ",l(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#options","aria-hidden":"true"})),m));t.default=v,e.exports=t.default}}]);
//# sourceMappingURL=auto-pr-check.js.map