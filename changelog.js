(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{67:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=n(a(3)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};o.get||o.set?Object.defineProperty(t,a,o):t[a]=e[a]}return t.default=e,t}(a(0));n(a(2)),n(a(83));function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,a,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),t&&s)for(var i in s)void 0===t[i]&&(t[i]=s[i]);else t||(t=s||{});if(1===n)t.children=r;else if(n>1){for(var l=new Array(n),h=0;h<n;h++)l[h]=arguments[h+3];t.children=l}return{$$typeof:o,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)a=s[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const d=e=>{let{to:t}=e,a=c(e,["to"]);return t.includes("http")?s.default.createElement("a",h({},e,{href:t})):("#"===t[0]&&(t=r.default.join("/auto/","pages/extras/changelog.html")+t),s.default.createElement("a",h({},a,{href:t,onClick:a=>{if(a.preventDefault(),"#"===e.to)return!1;const o=new URL(r.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,t),e.onClick();const s=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(s),!1}})))};d.defaultProps={href:"",onClick:()=>{}};const u=e=>{var t,a;return a=t=class extends s.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?s.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),a};u(()=>a.e(20).then(a.bind(null,84))),u(()=>a.e(20).then(a.bind(null,85)));var p=i("article",{className:"message column is-warning"},void 0,i("div",{className:"message-body"},void 0,i("p",{},void 0,"⚠️ This should be run before ",i("code",{},void 0,"npm version")," so the ",i("code",{},void 0,"CHANGELOG.md")," changes are committed before the release gets tagged."))),g=i("p",{},void 0,"Sometimes a PR title is just not enough to capture what a user should know about that PR. That's why we've included the ability to put extra release notes right in your PRs. All you have to do is add a ",i("code",{},void 0,"Release Notes")," section in your PR."),f=i("p",{},void 0,"Take the following PR body:"),v=i("pre",{},void 0,i("code",{className:"language-md"},void 0,i("span",{className:"hljs-section"},void 0,"# What Changed"),i("br",{}),i("br",{}),"Change ",i("span",{className:"hljs-strong"},void 0,"`"),"shipit",i("span",{className:"hljs-strong"},void 0,"`")," behavior.",i("br",{}),i("br",{}),i("span",{className:"hljs-section"},void 0,"## Release Notes"),i("br",{}),i("br",{}),i("span",{className:"hljs-strong"},void 0,"`"),"auto shipit",i("span",{className:"hljs-strong"},void 0,"`")," will only ship to ",i("span",{className:"hljs-strong"},void 0,"`"),"latest",i("span",{className:"hljs-strong"},void 0,"`")," on the base branch ([",i("span",{className:"hljs-string"},void 0,"which is configurable"),"](",i("span",{className:"hljs-link"}),")). If ran locally or from a PR it will create a ",i("span",{className:"hljs-strong"},void 0,"`"),"canary",i("span",{className:"hljs-strong"},void 0,"`")," release that doesn't interfere with your ",i("span",{className:"hljs-strong"},void 0,"`"),"latest",i("span",{className:"hljs-strong"},void 0,"`")," release.",i("br",{}))),m=i("p",{},void 0,"This will create a special section at the top of the changelog that collects all the additional release notes from merged PRs. Below is a sample of what it might look like."),b=i("hr",{}),y=i("h1",{},void 0,"v5.0.0 (Sat May 04 2019)"),w=i("p",{},void 0,i("em",{},void 0,"From #371")),P=i("code",{},void 0,"auto shipit"),N=i("code",{},void 0,"latest"),j=i("code",{},void 0,"canary"),k=i("code",{},void 0,"latest"),O=i("hr",{});var C=e=>i("div",{className:e.className},void 0,i("section",{},void 0,p,i("h2",{id:"changelog-titles"},void 0,"Changelog Titles ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#changelog-titles","aria-hidden":"true"})),i("p",{},void 0,"You can customize the changelog titles and even add custom ones. To see configuration ",i(d,{currentPage:e.currentPage,to:"/auto/pages/extras/autorc.html#changelog-titles"},void 0,"go here"),"."),i("h2",{id:"additional-release-notes"},void 0,"Additional Release notes ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#additional-release-notes","aria-hidden":"true"})),g,f,v,m,b,y,i("h3",{id:"release-notes"},void 0,"Release Notes ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#release-notes","aria-hidden":"true"})),w,i("p",{},void 0,P," will only ship to ",N," on the base branch (",i(d,{currentPage:e.currentPage,to:""},void 0,"which is configurable"),"). If ran locally or from a PR it will create a ",j," release that doesn't interfere with your ",k," release."),O,i("h4",{id:"%F0%9F%92%A5-breaking-change"},void 0,"💥 Breaking Change ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#%F0%9F%92%A5-breaking-change","aria-hidden":"true"})),i("ul",{},void 0,i("li",{},void 0,"shipit will publish a canary locally when not on master ",i(d,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/intuit/auto/pull/371",className:"external-link"},void 0,"#371")," (",i(d,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/hipstersmoothie",className:"external-link"},void 0,"@hipstersmoothie"),")")),i("h4",{id:"authors%3A-1"},void 0,"Authors: 1 ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#authors%3A-1","aria-hidden":"true"})),i("ul",{},void 0,i("li",{},void 0,"Andrew Lisowski (",i(d,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/hipstersmoothie",className:"external-link"},void 0,"@hipstersmoothie"),")"))));t.default=C,e.exports=t.default}}]);
//# sourceMappingURL=changelog.js.map