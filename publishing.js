(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{64:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=s(o(3)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};a.get||a.set?Object.defineProperty(t,o,a):t[o]=e[o]}return t.default=e,t}(o(0));s(o(2)),s(o(87));function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t,o,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={children:void 0}),t&&r)for(var i in r)void 0===t[i]&&(t[i]=r[i]);else t||(t=r||{});if(1===s)t.children=n;else if(s>1){for(var l=new Array(s),c=0;c<s;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:a,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const h=e=>{let{to:t}=e,o=u(e,["to"]);return t.includes("http")?r.default.createElement("a",c({},e,{href:t})):("#"===t[0]&&(t=n.default.join("/auto/","pages/publishing.html")+t),r.default.createElement("a",c({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const a=new URL(n.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(a),null,t),e.onClick();const r=new CustomEvent("changeLocation",{detail:a});return dispatchEvent(r),!1}})))};h.defaultProps={href:"",onClick:()=>{}};const d=e=>{var t,o;return o=t=class extends r.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?r.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),o};d(()=>o.e(20).then(o.bind(null,88))),d(()=>o.e(20).then(o.bind(null,89)));var p=i("h1",{},void 0,"Publishing"),b=i("p",{},void 0,i("code",{},void 0,"auto"),"'s main use it to automate the release process for your project This can be broken down into three core steps:"),f=i("pre",{},void 0,i("code",{className:"language-text"},void 0,"pre: (optional) Check if new version",i("br",{}),i("br",{}),"1. Generate CHANGELOG.md",i("br",{}),"2. Publish code",i("br",{}),"3. Generate github release notes",i("br",{}))),v=i("p",{},void 0,i("code",{},void 0,"auto")," makes no assumptions about your publishing process. Each tool is a function that can be run in isolation and only does one thing really well. For instance, you could just use ",i("code",{},void 0,"auto changelog")," to generate the changelog and nothing else or use ",i("code",{},void 0,"auto version")," to calculate just the semver bump."),m=i("code",{},void 0,"auto"),g=i("code",{},void 0,"master"),y=i("pre",{},void 0,i("code",{className:"language-sh"},void 0,"auto shipit --base-branch trunk",i("br",{}))),w=i("p",{},void 0,"If you push commits to the base branch they will count as patches. This is a good way to get a release out without having to make a PR."),j=i("p",{},void 0,"The changelog entry will contain the first line of the commit message. These commits will fall under a special section in the changelog."),P=i("p",{},void 0,"ex:"),O=i("pre",{},void 0,i("code",{className:"language-md"},void 0,"⚠️ Pushed to master",i("br",{}),i("br",{}),i("span",{className:"hljs-bullet"},void 0,"- "),"fix docs publishing ([",i("span",{className:"hljs-string"},void 0,"@lisowski54@gmail.com"),"](",i("span",{className:"hljs-link"},void 0,"https://github.com/lisowski54@gmail.com"),"))",i("br",{}))),N=i("p",{},void 0,"You can configure the title of this changelog entry by adding the ",i("code",{},void 0,"pushToBaseBranch")," label in your config."),k=i("pre",{},void 0,i("code",{className:"language-json"},void 0,"{",i("br",{}),"  ",i("span",{className:"hljs-attr"},void 0,'"labels"'),": {",i("br",{}),"    ",i("span",{className:"hljs-attr"},void 0,'"pushToBaseBranch"'),": {",i("br",{}),"      ",i("span",{className:"hljs-attr"},void 0,'"name"'),": ",i("span",{className:"hljs-string"},void 0,'"pushToBaseBranch"'),",",i("br",{}),"      ",i("span",{className:"hljs-attr"},void 0,'"title"'),": ",i("span",{className:"hljs-string"},void 0,'"Emergency!!"'),i("br",{}),"    }",i("br",{}),"  }",i("br",{}),"}",i("br",{})));var C=e=>i("div",{className:e.className},void 0,i("section",{},void 0,p,b,f,v,i("h2",{id:"base-branch"},void 0,"Base Branch ",i(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#base-branch","aria-hidden":"true"})),i("p",{},void 0,"By default ",m," assumes that your repo's base branch is ",g,". You can configure this behavior through the ",i(h,{currentPage:e.currentPage,to:"/auto/pages/autorc.html#base-branch"},void 0,".autorc")," or via a CLI to any relevant command."),y,i("h2",{id:"push-to-base-branch"},void 0,"Push to base branch ",i(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#push-to-base-branch","aria-hidden":"true"})),w,j,P,O,N,k));t.default=C,e.exports=t.default}}]);
//# sourceMappingURL=publishing.js.map