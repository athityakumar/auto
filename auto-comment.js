(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{60:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=s(o(3)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};n.get||n.set?Object.defineProperty(t,o,n):t[o]=e[o]}return t.default=e,t}(o(0));s(o(2)),s(o(87));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t,o,r){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={children:void 0}),t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});if(1===s)t.children=r;else if(s>1){for(var i=new Array(s),u=0;u<s;u++)i[u]=arguments[u+3];t.children=i}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const c=e=>{let{to:t}=e,o=d(e,["to"]);return t.includes("http")?a.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=r.default.join("/auto/","pages/auto-comment.html")+t),a.default.createElement("a",u({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const n=new URL(r.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(n),null,t),e.onClick();const a=new CustomEvent("changeLocation",{detail:n});return dispatchEvent(a),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const h=e=>{var t,o;return o=t=class extends a.default.Component{constructor(...e){super(...e),i(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?a.default.createElement(e,this.props,this.props.children||null):null}},i(t,"defaultProps",{shouldLoad:!0}),o};h(()=>o.e(29).then(o.bind(null,88))),h(()=>o.e(29).then(o.bind(null,89)));var m=l("h1",{},void 0,l("code",{},void 0,"auto comment")),f=l("p",{},void 0,"Comment on a pull request with a markdown message. Each comment has a context, and each context only has one comment."),b=l("pre",{},void 0,l("code",{className:"language-sh"},void 0,"auto comment --pr 24 --message ",l("span",{className:"hljs-string"},void 0,'"You broke the build!"')," --context build",l("br",{}))),p=l("pre",{},void 0,l("code",{className:"language-bash"},void 0,">  auto version -h",l("br",{}),l("br",{}),"Options",l("br",{}),l("br",{}),"  --pr number                       The pull request the ",l("span",{className:"hljs-built_in"},void 0,"command")," should use. Detects PR number ",l("span",{className:"hljs-keyword"},void 0,"in")," CI",l("br",{}),"  --context string                  A string label to differentiate this status from others",l("br",{}),"  --delete                          Delete old comment",l("br",{}),"  -m, --message string [required]   Message to post to comment",l("br",{}),"  -d, --dry-run                     Report what ",l("span",{className:"hljs-built_in"},void 0,"command")," will ",l("span",{className:"hljs-keyword"},void 0,"do")," but ",l("span",{className:"hljs-keyword"},void 0,"do")," not actually ",l("span",{className:"hljs-keyword"},void 0,"do")," anything",l("br",{}),l("br",{}),"Global Options",l("br",{}),l("br",{}),"  -h, --",l("span",{className:"hljs-built_in"},void 0,"help"),"            Display the ",l("span",{className:"hljs-built_in"},void 0,"help")," output ",l("span",{className:"hljs-keyword"},void 0,"for")," the ",l("span",{className:"hljs-built_in"},void 0,"command"),l("br",{}),"  -v, --verbose         Show some more logs",l("br",{}),"  -w, --very-verbose    Show a lot more logs",l("br",{}),"  --repo string         The repo to ",l("span",{className:"hljs-built_in"},void 0,"set")," the status on. Defaults to looking ",l("span",{className:"hljs-keyword"},void 0,"in")," the package definition ",l("span",{className:"hljs-keyword"},void 0,"for")," the platform",l("br",{}),"  --owner string        The owner of the GitHub repo. Defaults to reading from the package definition ",l("span",{className:"hljs-keyword"},void 0,"for")," the platform",l("br",{}),"  --github-api string   GitHub API to use",l("br",{}),"  --plugins string[]    Plugins to load auto with. (defaults to just npm)",l("br",{}),l("br",{}),"Examples",l("br",{}),l("br",{}),"  $ auto comment --delete",l("br",{}),"  $ auto comment --pr 123 --comment ",l("span",{className:"hljs-string"},void 0,'"# Why you\'re wrong..."'),l("br",{})));var v=e=>l("div",{className:e.className},void 0,l("section",{},void 0,m,f,b,l("h2",{id:"options"},void 0,"Options ",l(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#options","aria-hidden":"true"})),p));t.default=v,e.exports=t.default}}]);
//# sourceMappingURL=auto-comment.js.map