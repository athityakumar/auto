(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{52:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,o=d(t(3)),s=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};i.get||i.set?Object.defineProperty(a,t,i):a[t]=e[t]}return a.default=e,a}(t(0)),n=d(t(2)),r=d(t(87));function d(e){return e&&e.__esModule?e:{default:e}}function l(e,a,t,o){i||(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,n=arguments.length-3;if(a||0===n||(a={children:void 0}),a&&s)for(var r in s)void 0===a[r]&&(a[r]=s[r]);else a||(a=s||{});if(1===n)a.children=o;else if(n>1){for(var d=new Array(n),l=0;l<n;l++)d[l]=arguments[l+3];a.children=d}return{$$typeof:i,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function m(e,a){if(null==e)return{};var t,i,o=function(e,a){if(null==e)return{};var t,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const h=e=>{let{to:a}=e,t=m(e,["to"]);return a.includes("http")?s.default.createElement("a",u({},e,{href:a})):("#"===a[0]&&(a=o.default.join("/auto/","home.html")+a),s.default.createElement("a",u({},t,{href:a,onClick:t=>{if(t.preventDefault(),"#"===e.to)return!1;const i=new URL(o.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(i),null,a),e.onClick();const s=new CustomEvent("changeLocation",{detail:i});return dispatchEvent(s),!1}})))};h.defaultProps={href:"",onClick:()=>{}};const v={"images/version.png":()=>t.e(15).then(t.t.bind(null,105,7)),"images/changelog.png":()=>t.e(9).then(t.t.bind(null,106,7)),"images/release.png":()=>t.e(13).then(t.t.bind(null,107,7)),"images/shipit.png":()=>t.e(14).then(t.t.bind(null,108,7)),"images/pr.png":()=>t.e(12).then(t.t.bind(null,109,7)),"images/comment.png":()=>t.e(10).then(t.t.bind(null,110,7))};class p extends s.default.Component{constructor(...e){super(...e),c(this,"state",{image:null,ImageProvider:v[this.props.src]})}componentDidMount(){this.state.image||this.state.ImageProvider().then(e=>{this.setState({image:e.default})})}render(){let{image:e}=this.state;return e&&"object"==typeof e?s.default.createElement(r.default,u({},this.props,{className:(0,n.default)("image",this.props.className),src:e.src.src,width:e.src.width||e.width,height:e.src.height||e.height,placeholder:{lqip:e.preSrc},srcSet:e.src.images?e.src.images.map(e=>(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.forEach(function(a){c(e,a,t[a])})}return e})({},e,{src:e.path})):[{src:e.src,width:e.width}]})):l("img",{className:(0,n.default)("image",this.props.className),src:e})}}const f=e=>{var a,t;return t=a=class extends s.default.Component{constructor(...e){super(...e),c(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?s.default.createElement(e,this.props,this.props.children||null):null}},c(a,"defaultProps",{shouldLoad:!0}),t};f(()=>t.e(20).then(t.bind(null,88))),f(()=>t.e(20).then(t.bind(null,89)));var g=l("h1",{className:"title"},void 0,"auto release"),b=l("p",{className:"has-text-centered"},void 0,l("code",{},void 0,"auto")," makes automating releases for your open source project as simple as labels to pull requests. Releasing often means being confident in your releases."),N=l("p",{},void 0,"Managing releases has never been easier. Just add a label!"),y=l("p",{},void 0,"Link to PRs and Jira stories, include authors, monorepo aware, customizable"),w=l("p",{},void 0,"Set statuses, check labels and comment on pull requests"),P=l("p",{},void 0,l("code",{},void 0,"auto")," functions do 1 thing and they do it well. Easily use them to fit any build process"),k=l("p",{},void 0,"Other tools require you to change how any contributor commits to you project. With ",l("code",{},void 0,"auto")," leave that baggage behind!"),O=l("p",{},void 0,"Since all you need to worry about are labels you can work at an incredibly fast pace! This speed to commit also helps with new contributors"),j=l("section",{className:"hero is-info is-yellow is-small has-text-centered"},void 0,l("div",{className:"hero-body"},void 0,l("p",{className:"title"},void 0,"Release Tools"))),x=l("section",{className:"hero is-small"},void 0,l("div",{className:"hero-body"},void 0,l("div",{className:"title columns"},void 0,l("div",{className:"undefined column feature"},void 0,l("h1",{},void 0,l("code",{},void 0,"auto version")),l("p",{},void 0,"Get the semantic version bump using merged PRs")),l("div",{className:"undefined column"},void 0,l("p",{},void 0,l(p,{src:"images/version.png",alt:"Markdown"})))))),S=l("section",{className:"hero is-light is-small"},void 0,l("div",{className:"hero-body"},void 0,l("div",{className:"title columns"},void 0,l("div",{className:"undefined column is-three-fifths"},void 0,l("p",{},void 0,l(p,{src:"images/changelog.png",alt:"Markdown"}))),l("div",{className:"undefined column feature"},void 0,l("h1",{},void 0,l("code",{},void 0,"auto changelog")),l("p",{},void 0,"Prepend release notes to ",l("code",{},void 0,"CHANGELOG.md"),"."),l("div",{className:"undefined content list"},void 0,l("ul",{},void 0,l("li",{},void 0,"link PRs and Jira stories"),l("li",{},void 0,"attach effected packages in monorepo"),l("li",{},void 0,"list authors"),l("li",{},void 0,"customizable sections"))))))),L=l("section",{className:"hero is-small"},void 0,l("div",{className:"hero-body"},void 0,l("div",{className:"title columns"},void 0,l("div",{className:"undefined column feature"},void 0,l("h1",{},void 0,l("code",{},void 0,"auto release")),l("p",{},void 0,"Auto-generate a github release.")),l("div",{className:"undefined column is-three-fifths"},void 0,l("p",{},void 0,l(p,{src:"images/release.png",alt:"Markdown"})))))),C=l("section",{className:"hero is-light is-small no-margin"},void 0,l("div",{className:"hero-body"},void 0,l("div",{className:"title columns"},void 0,l("div",{className:"undefined column"},void 0,l("p",{},void 0,l(p,{src:"images/shipit.png",alt:"Markdown"}))),l("div",{className:"undefined column feature"},void 0,l("h1",{},void 0,l("code",{},void 0,"auto shipit")),l("p",{},void 0,"Do all of the above in one simple command!"))))),q=l("section",{className:"hero is-red is-link is-small has-text-centered"},void 0,l("div",{className:"hero-body"},void 0,l("p",{className:"title"},void 0,"Pull Request Tools"))),M=l("section",{className:"hero is-small"},void 0,l("div",{className:"hero-body"},void 0,l("div",{className:"title columns"},void 0,l("div",{className:"undefined column"},void 0,l("p",{},void 0,l(p,{src:"images/pr.png",alt:"Markdown"}))),l("div",{className:"undefined column feature"},void 0,l("h1",{},void 0,l("code",{},void 0,"auto pr")),l("p",{},void 0,"Set the status on a PR commit"))))),R=l("section",{className:"hero is-small is-light no-margin"},void 0,l("div",{className:"hero-body"},void 0,l("div",{className:"title columns"},void 0,l("div",{className:"undefined column feature"},void 0,l("h1",{},void 0,l("code",{},void 0,"auto comment")),l("p",{},void 0,"Comment on a pull request with a markdown message.")),l("div",{className:"undefined column"},void 0,l("p",{},void 0,l(p,{src:"images/comment.png",alt:"Markdown"})))))),E=l("h1",{className:"no-link title is-4 has-text-centered"},void 0,"Win back your time and be confident in releasing!");var D=e=>l("div",{},void 0,l("div",{className:"homePage"},void 0,l("section",{className:"hero is-primary is-purple is-bold is-medium has-text-centered"},void 0,l("div",{className:"hero-body"},void 0,g,l("h2",{id:"cli-tools-to-help-facilitate-semantic-versioning-based-on-github-pr-labels",className:"subtitle"},void 0,"CLI tools to help facilitate semantic versioning based on GitHub PR labels ",l(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#cli-tools-to-help-facilitate-semantic-versioning-based-on-github-pr-labels","aria-hidden":"true"})))),l("div",{className:"hero"},void 0,l("div",{className:"hero-body"},void 0,l("div",{className:"columns"},void 0,l("div",{className:"home column content is-two-thirds-tablet is-three-quarters-desktop"},void 0,l("h2",{className:"no-link has-text-purple has-text-centered",id:"adding-automated-releases-shouldn't-be-hard-or-require-changing-your-workflow"},void 0,"Adding automated releases shouldn't be hard or require changing your workflow ",l(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#adding-automated-releases-shouldn't-be-hard-or-require-changing-your-workflow","aria-hidden":"true"})),b,l("div",{className:"columns has-text-centered wide"},void 0,l("div",{className:"column "},void 0,l("div",{className:"box"},void 0,l("h3",{id:"release-labels"},void 0,"Release Labels ",l(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#release-labels","aria-hidden":"true"})),N)),l("div",{className:"column "},void 0,l("div",{className:"box"},void 0,l("h3",{id:"beautiful-changelogs"},void 0,"Beautiful Changelogs ",l(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#beautiful-changelogs","aria-hidden":"true"})),y)),l("div",{className:"column "},void 0,l("div",{className:"box"},void 0,l("h3",{id:"pr-interaction"},void 0,"PR Interaction ",l(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#pr-interaction","aria-hidden":"true"})),w))),l("div",{className:"columns has-text-centered wide"},void 0,l("div",{className:"column "},void 0,l("div",{className:"box"},void 0,l("h3",{id:"atomic-functions"},void 0,"Atomic Functions ",l(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#atomic-functions","aria-hidden":"true"})),P)),l("div",{className:"column "},void 0,l("div",{className:"box"},void 0,l("h3",{id:"no-strict-commits"},void 0,"No Strict Commits ",l(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#no-strict-commits","aria-hidden":"true"})),k)),l("div",{className:"column "},void 0,l("div",{className:"box"},void 0,l("h3",{id:"fast-workflow"},void 0,"Fast Workflow ",l(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#fast-workflow","aria-hidden":"true"})),O))))))),j,x,S,L,C,q,M,R,l("section",{className:"hero is-link is-purple is-small has-text-centered"},void 0,l("div",{className:"hero-body"},void 0,E,l("button",{className:"button  is-large is-link is-bold is-inverted is-outlined"},void 0,l("p",{},void 0,l(h,{currentPage:e.currentPage,to:"/auto/pages/GettingStarted.html"},void 0,"Get Started 🎉")))))));a.default=D,e.exports=a.default}}]);
//# sourceMappingURL=home.js.map