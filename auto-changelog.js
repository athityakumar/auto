(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{58:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s=n(a(3)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};o.get||o.set?Object.defineProperty(t,a,o):t[a]=e[a]}return t.default=e,t}(a(0));n(a(2)),n(a(80));function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,a,s){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),t&&r)for(var i in r)void 0===t[i]&&(t[i]=r[i]);else t||(t=r||{});if(1===n)t.children=s;else if(n>1){for(var l=new Array(n),h=0;h<n;h++)l[h]=arguments[h+3];t.children=l}return{$$typeof:o,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,o,s=function(e,t){if(null==e)return{};var a,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}const d=e=>{let{to:t}=e,a=c(e,["to"]);return t.includes("http")?r.default.createElement("a",h({},e,{href:t})):("#"===t[0]&&(t=s.default.join("/auto/","pages/auto-changelog.html")+t),r.default.createElement("a",h({},a,{href:t,onClick:a=>{if(a.preventDefault(),"#"===e.to)return!1;const o=new URL(s.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,t),e.onClick();const r=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(r),!1}})))};d.defaultProps={href:"",onClick:()=>{}};const u=e=>{var t,a;return a=t=class extends r.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?r.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),a};u(()=>a.e(29).then(a.bind(null,81))),u(()=>a.e(29).then(a.bind(null,82)));var g=i("h1",{},void 0,i("code",{},void 0,"auto changelog")),v=i("p",{},void 0,"Prepend release notes to ",i("code",{},void 0,"CHANGELOG.md"),", create one if it doesn't exist, and commit the changes."),m=i("article",{className:"message column is-warning"},void 0,i("div",{className:"message-body"},void 0,i("p",{},void 0,"⚠️ This should be run before ",i("code",{},void 0,"npm version")," so the ",i("code",{},void 0,"CHANGELOG.md")," changes are committed before the release gets tagged."))),p=i("pre",{},void 0,i("code",{className:"language-bash"},void 0,">  auto changelog -h",i("br",{}),i("br",{}),"Options",i("br",{}),i("br",{}),"  -d, --dry-run          Report what ",i("span",{className:"hljs-built_in"},void 0,"command")," will ",i("span",{className:"hljs-keyword"},void 0,"do")," but ",i("span",{className:"hljs-keyword"},void 0,"do")," not actually ",i("span",{className:"hljs-keyword"},void 0,"do")," anything",i("br",{}),"  --no-version-prefix    Use the version as the tag without the ",i("span",{className:"hljs-string"},void 0,"'v'")," prefix",i("br",{}),"  --jira string          Jira base URL",i("br",{}),"  --from string          Tag to start changelog generation on. Defaults to latest tag.",i("br",{}),"  --to string            Tag to end changelog generation on. Defaults to HEAD.",i("br",{}),"  -m, --message string   Message to commit the changelog with. Defaults to ",i("span",{className:"hljs-string"},void 0,"'Update CHANGELOG.md [skip ci]'"),i("br",{}),i("br",{}),"Global Options",i("br",{}),i("br",{}),"  -h, --",i("span",{className:"hljs-built_in"},void 0,"help"),"            Display the ",i("span",{className:"hljs-built_in"},void 0,"help")," output ",i("span",{className:"hljs-keyword"},void 0,"for")," the ",i("span",{className:"hljs-built_in"},void 0,"command"),i("br",{}),"  -v, --verbose         Show some more logs",i("br",{}),"  -w, --very-verbose    Show a lot more logs",i("br",{}),"  --repo string         The repo to ",i("span",{className:"hljs-built_in"},void 0,"set")," the status on. Defaults to looking ",i("span",{className:"hljs-keyword"},void 0,"in")," the package definition ",i("span",{className:"hljs-keyword"},void 0,"for")," the platform",i("br",{}),"  --owner string        The owner of the GitHub repo. Defaults to reading from the package definition ",i("span",{className:"hljs-keyword"},void 0,"for")," the platform",i("br",{}),"  --github-api string   GitHub API to use",i("br",{}),"  --base-branch string  Branch to treat as the ",i("span",{className:"hljs-string"},void 0,'"master"')," branch",i("br",{}),"  --plugins string[]    Plugins to load auto with. (defaults to just npm)",i("br",{}),i("br",{}),"Examples",i("br",{}),i("br",{}),"  Generate a changelog from the last release     $ auto changelog",i("br",{}),"  to head",i("br",{}),"  Generate a changelog across specific           $ auto changelog --from v0.20.1 --to v0.21.0",i("br",{}),"  versions",i("br",{}))),f=i("p",{},void 0,"Sometimes a PR title is just not enough to capture what a user should know about that PR. That's why we have include the ability to put extra release notes right in your PRs. All you have to do is add a ",i("code",{},void 0,"Release Notes")," secion in you PR."),b=i("p",{},void 0,"Take the following PR body:"),y=i("pre",{},void 0,i("code",{className:"language-md"},void 0,i("span",{className:"hljs-section"},void 0,"# What Changed"),i("br",{}),i("br",{}),"Change ",i("span",{className:"hljs-strong"},void 0,"`"),"shipit",i("span",{className:"hljs-strong"},void 0,"`")," behavior.",i("br",{}),i("br",{}),i("span",{className:"hljs-section"},void 0,"## Release Notes"),i("br",{}),i("br",{}),i("span",{className:"hljs-strong"},void 0,"`"),"auto shipit",i("span",{className:"hljs-strong"},void 0,"`")," will only ship to ",i("span",{className:"hljs-strong"},void 0,"`"),"latest",i("span",{className:"hljs-strong"},void 0,"`")," on the base branch ([",i("span",{className:"hljs-string"},void 0,"which is configurable"),"](",i("span",{className:"hljs-link"}),")). If ran locally or from a PR it will create a ",i("span",{className:"hljs-strong"},void 0,"`"),"canary",i("span",{className:"hljs-strong"},void 0,"`")," release that doesn't interfere with your ",i("span",{className:"hljs-strong"},void 0,"`"),"latest",i("span",{className:"hljs-strong"},void 0,"`")," release.",i("br",{}))),w=i("p",{},void 0,"This will create a special section at the top of the changelog that collects all the additional release notes from merged PRs. Below is a sample of what it might look like."),j=i("hr",{}),P=i("h1",{},void 0,"v5.0.0 (Sat May 04 2019)"),N=i("p",{},void 0,i("em",{},void 0,"From #371")),k=i("code",{},void 0,"auto shipit"),O=i("code",{},void 0,"latest"),C=i("code",{},void 0,"canary"),L=i("code",{},void 0,"latest"),R=i("hr",{});var A=e=>i("div",{className:e.className},void 0,i("section",{},void 0,g,v,m,p,i("h2",{id:"jira"},void 0,"Jira ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#jira","aria-hidden":"true"})),i("p",{},void 0,"To include Jira story information you must include a URL to your hosted JIRA instance as a CLI flag or ",i(d,{currentPage:e.currentPage,to:"/auto/pages/autorc.html"},void 0,".autorc")," config option."),i("h2",{id:"changelog-titles"},void 0,"Changelog Titles ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#changelog-titles","aria-hidden":"true"})),i("p",{},void 0,"You can customize the changelog titles and even add custom ones. To see configuration ",i(d,{currentPage:e.currentPage,to:"/auto/pages/autorc.html#changelog-titles"},void 0,"go here"),"."),i("h2",{id:"additional-release-notes"},void 0,"Additional Release notes ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#additional-release-notes","aria-hidden":"true"})),f,b,y,w,j,P,i("h3",{id:"release-notes"},void 0,"Release Notes ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#release-notes","aria-hidden":"true"})),N,i("p",{},void 0,k," will only ship to ",O," on the base branch (",i(d,{currentPage:e.currentPage,to:""},void 0,"which is configurable"),"). If ran locally or from a PR it will create a ",C," release that doesn't interfere with your ",L," release."),R,i("h4",{id:"%F0%9F%92%A5-breaking-change"},void 0,"💥 Breaking Change ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#%F0%9F%92%A5-breaking-change","aria-hidden":"true"})),i("ul",{},void 0,i("li",{},void 0,"shipit will publish a canary locally when not on master ",i(d,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/intuit/auto/pull/371",className:"external-link"},void 0,"#371")," (",i(d,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/hipstersmoothie",className:"external-link"},void 0,"@hipstersmoothie"),")")),i("h4",{id:"authors%3A-1"},void 0,"Authors: 1 ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#authors%3A-1","aria-hidden":"true"})),i("ul",{},void 0,i("li",{},void 0,"Andrew Lisowski (",i(d,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/hipstersmoothie",className:"external-link"},void 0,"@hipstersmoothie"),")"))));t.default=A,e.exports=t.default}}]);
//# sourceMappingURL=auto-changelog.js.map