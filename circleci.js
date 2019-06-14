(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{70:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var t,r=n(a(3)),l=function(e){if(e&&e.__esModule)return e;var s={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};t.get||t.set?Object.defineProperty(s,a,t):s[a]=e[a]}return s.default=e,s}(a(0));n(a(2)),n(a(87));function n(e){return e&&e.__esModule?e:{default:e}}function o(e,s,a,r){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var l=e&&e.defaultProps,n=arguments.length-3;if(s||0===n||(s={children:void 0}),s&&l)for(var o in l)void 0===s[o]&&(s[o]=l[o]);else s||(s=l||{});if(1===n)s.children=r;else if(n>1){for(var i=new Array(n),d=0;d<n;d++)i[d]=arguments[d+3];s.children=i}return{$$typeof:t,type:e,key:void 0===a?null:""+a,ref:null,props:s,_owner:null}}function i(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function d(){return(d=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function c(e,s){if(null==e)return{};var a,t,r=function(e,s){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],s.indexOf(a)>=0||(r[a]=e[a]);return r}(e,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const h=e=>{let{to:s}=e,a=c(e,["to"]);return s.includes("http")?l.default.createElement("a",d({},e,{href:s})):("#"===s[0]&&(s=r.default.join("/auto/","pages/circleci.html")+s),l.default.createElement("a",d({},a,{href:s,onClick:a=>{if(a.preventDefault(),"#"===e.to)return!1;const t=new URL(r.default.join(window.location.origin,s));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(t),null,s),e.onClick();const l=new CustomEvent("changeLocation",{detail:t});return dispatchEvent(l),!1}})))};h.defaultProps={href:"",onClick:()=>{}};const u=e=>{var s,a;return a=s=class extends l.default.Component{constructor(...e){super(...e),i(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?l.default.createElement(e,this.props,this.props.children||null):null}},i(s,"defaultProps",{shouldLoad:!0}),a};u(()=>a.e(29).then(a.bind(null,88))),u(()=>a.e(29).then(a.bind(null,89)));var v=o("h1",{},void 0,"CircleCI"),b=o("p",{},void 0,"The following config declares the ",o("code",{},void 0,"release")," job and uses it in the ",o("code",{},void 0,"build_and_release")," workflow. The ",o("code",{},void 0,"release")," job will only run on commits to master."),m=o("pre",{},void 0,o("code",{className:"language-yaml"},void 0,o("span",{className:"hljs-attr"},void 0,"version:")," ",o("span",{className:"hljs-number"},void 0,"2"),o("br",{}),o("br",{}),o("span",{className:"hljs-attr"},void 0,"defaults:")," ",o("span",{className:"hljs-meta"},void 0,"&defaults"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"  working_directory:")," ",o("span",{className:"hljs-string"},void 0,"~/auto"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"  docker:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"    - image:")," ",o("span",{className:"hljs-string"},void 0,"circleci/node:latest-browsers"),o("br",{}),o("br",{}),o("span",{className:"hljs-attr"},void 0,"jobs:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"  install:")," ",o("span",{className:"hljs-comment"},void 0,"# your install job"),o("br",{}),o("br",{}),o("span",{className:"hljs-attr"},void 0,"  release:"),o("br",{}),"    ",o("span",{className:"hljs-string"},void 0,"<<:")," ",o("span",{className:"hljs-meta"},void 0,"*defaults"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"    steps:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"      - attach_workspace:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"          at:")," ",o("span",{className:"hljs-string"},void 0,"~/auto"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"      - run:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"          name:")," ",o("span",{className:"hljs-string"},void 0,"Release"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"          command:")," ",o("span",{className:"hljs-string"},void 0,"npm")," ",o("span",{className:"hljs-string"},void 0,"run")," ",o("span",{className:"hljs-string"},void 0,"release"),o("br",{}),o("br",{}),o("span",{className:"hljs-attr"},void 0,"workflows:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"  version:")," ",o("span",{className:"hljs-number"},void 0,"2"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"  build_and_release:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"    jobs:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"      - install:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"          filters:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"            tags:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"              only:")," ",o("span",{className:"hljs-string"},void 0,"/.*/"),o("br",{}),o("br",{}),o("span",{className:"hljs-attr"},void 0,"      - release:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"          requires:"),o("br",{}),o("span",{className:"hljs-bullet"},void 0,"            -")," ",o("span",{className:"hljs-string"},void 0,"install"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"          filters:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"            branches:"),o("br",{}),o("span",{className:"hljs-attr"},void 0,"              only:"),o("br",{}),o("span",{className:"hljs-bullet"},void 0,"                -")," ",o("span",{className:"hljs-string"},void 0,"master"),o("br",{}))),p=o("p",{},void 0,"If you are having problems make sure you have done the following:"),f=o("ul",{},void 0,o("li",{},void 0,o("code",{},void 0,"GH_TOKEN")," is set"),o("li",{},void 0,o("code",{},void 0,"NPM_TOKEN")," is set (with the NPM plugin)")),j=o("p",{},void 0,"Go to Settings -> Checkout SSH Keys -> ",o("code",{},void 0,"Create and add YOUR_USERNAME user key"),". This will create a key with the ability to push to github.");var g=e=>o("div",{className:e.className},void 0,o("section",{},void 0,v,b,m,o("h2",{id:"troubleshooting"},void 0,"Troubleshooting ",o(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#troubleshooting","aria-hidden":"true"})),p,f,o("h3",{id:"problems-pushing-tags-to-github"},void 0,"Problems pushing tags to github ",o(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#problems-pushing-tags-to-github","aria-hidden":"true"})),j));s.default=g,e.exports=s.default}}]);
//# sourceMappingURL=circleci.js.map