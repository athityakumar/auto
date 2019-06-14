(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{55:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=l(a(3)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};o.get||o.set?Object.defineProperty(t,a,o):t[a]=e[a]}return t.default=e,t}(a(0)),i=l(a(2)),s=l(a(87));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,a,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});if(1===i)t.children=r;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:o,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p=e=>{let{to:t}=e,a=u(e,["to"]);return t.includes("http")?n.default.createElement("a",d({},e,{href:t})):("#"===t[0]&&(t=r.default.join("/auto/","blog/pr-in-progress.html")+t),n.default.createElement("a",d({},a,{href:t,onClick:a=>{if(a.preventDefault(),"#"===e.to)return!1;const o=new URL(r.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,t),e.onClick();const n=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(n),!1}})))};p.defaultProps={href:"",onClick:()=>{}};const g={"//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40":()=>Promise.resolve({default:{src:{src:"http://www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40"},preSrc:"http://www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40",height:80,width:80}}),"https://i.giphy.com/media/l4HodBpDmoMA5p9bG/200w.webp":()=>Promise.resolve({default:{src:{src:"https://i.giphy.com/media/l4HodBpDmoMA5p9bG/200w.webp"},preSrc:"https://i.giphy.com/media/l4HodBpDmoMA5p9bG/200w.webp",height:200,width:200}}),"../images/pr-to-pr.png":()=>a.e(21).then(a.t.bind(null,111,7))};class m extends n.default.Component{constructor(...e){super(...e),h(this,"state",{image:null,ImageProvider:g[this.props.src]})}componentDidMount(){this.state.image||this.state.ImageProvider().then(e=>{this.setState({image:e.default})})}render(){let{image:e}=this.state;return e&&"object"==typeof e?n.default.createElement(s.default,d({},this.props,{className:(0,i.default)("image",this.props.className),src:e.src.src,width:e.src.width||e.width,height:e.src.height||e.height,placeholder:{lqip:e.preSrc},srcSet:e.src.images?e.src.images.map(e=>(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},o=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),o.forEach(function(t){h(e,t,a[t])})}return e})({},e,{src:e.path})):[{src:e.src,width:e.width}]})):c("img",{className:(0,i.default)("image",this.props.className),src:e})}}const b=e=>{var t,a;return a=t=class extends n.default.Component{constructor(...e){super(...e),h(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},h(t,"defaultProps",{shouldLoad:!0}),a};b(()=>a.e(29).then(a.bind(null,88))),b(()=>a.e(29).then(a.bind(null,89)));var v=c(m,{src:"//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40",className:"authorImage"}),f=c("p",{className:"title blogTitle"},void 0,"Merging PRs to other PRs"),w=c("span",{},void 0," on May 4, 2019",c("span",{})),y=c("p",{},void 0,"Sometimes you are working on a big feature and you know it will require a lot of changes. These types of pull requests can be a nightmare to review. Taking in all the changes at once can be overwhelming. It makes it easy to miss smaller mistakes and can make it hard to guess the intent of the changes. Multiple features, bug fixes, or even breaking changes may make up this large PR."),P=c("p",{},void 0,"One way to manage this problem is by making a PR to the large PR. Other contributors can review a smaller subset of changes and also follow along with development. In previous versions of ",c("code",{},void 0,"auto"),", large PRs would not be represented well in the changelog and release notes. It would only include the main PR that got merged into master as the only changelog note."),k=c("div",{className:"has-text-centered learnMore"},void 0,c(p,{to:"/auto/blog/pr-in-progress.html"},void 0,"Read More")),O=c(m,{src:"//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40",className:"authorImage"}),R=c("p",{className:"title blogTitle"},void 0,"Merging PRs to other PRs"),N=c("span",{},void 0," on May 4, 2019",c("span",{})),j=c("p",{},void 0,"Sometimes you are working on a big feature and you know it will require a lot of changes. These types of pull requests can be a nightmare to review. Taking in all the changes at once can be overwhelming. It makes it easy to miss smaller mistakes and can make it hard to guess the intent of the changes. Multiple features, bug fixes, or even breaking changes may make up this large PR."),S=c("p",{},void 0,"One way to manage this problem is by making a PR to the large PR. Other contributors can review a smaller subset of changes and also follow along with development. In previous versions of ",c("code",{},void 0,"auto"),", large PRs would not be represented well in the changelog and release notes. It would only include the main PR that got merged into master as the only changelog note."),x=c("p",{className:"smallImage"},void 0,c(m,{src:"https://i.giphy.com/media/l4HodBpDmoMA5p9bG/200w.webp",alt:"Clapping"})),M=c("p",{className:"has-text-centered"},void 0,c("em",{},void 0,"Score!")),I=c("hr",{}),_=c("code",{},void 0,"shipit"),B=c("code",{},void 0,"shipit"),C=c("code",{},void 0,"latest"),D=c("code",{},void 0,"shipit"),H=c("code",{},void 0,"master"),q=c("code",{},void 0,"master"),A=c("code",{},void 0,"baseBranch"),E=c("p",{},void 0,"Instead of waiting for #351 to get merged to write the ",c("code",{},void 0,"baseBranch")," functionality, I could make a PR to #351 and both PRs would be represented in the changelog!"),T=c("p",{},void 0,c(m,{src:"../images/pr-to-pr.png",alt:"Sample release notes"})),L=c("hr",{}),G=c("p",{},void 0,"Now you can be a little more creative with how you manage large PR and have even more detailed changelogs.");var J=class extends n.default.Component{componentDidMount(){this.props.atIndex||window.configuration.setBlogHero("https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9")}render(){return c("div",{className:(0,i.default)("blogPost",this.props.className)},void 0,c("p",{},void 0,this.props.heroUrl),c("section",{},void 0,this.props.stub?c("div",{className:"card"},void 0,c("div",{className:"card-content"},void 0,c("div",{className:"media blogHeader"},void 0,c("div",{className:"media-content has-text-centered"},void 0,v,f,c("p",{className:"subtitle is-6 blogSubtitle"},void 0,c(p,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://twitter.com/HipsterSmoothie"},void 0,"Andrew Lisowski"),w))),c("div",{className:"blogBody"},void 0,y,P,c("p",{},void 0,"But thanks to ",c(p,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://github.com/intuit/auto/pull/359",className:"external-link"},void 0,"this PR")," that isn't true anymore! Now when you merge one PR to another both changes will be represented in the changelog."),k))):c("div",{className:"card"},void 0,c("div",{className:"card-content"},void 0,c("div",{className:"media blogHeader"},void 0,c("div",{className:"media-content has-text-centered"},void 0,O,R,c("p",{className:"subtitle is-6 blogSubtitle"},void 0,c(p,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://twitter.com/HipsterSmoothie"},void 0,"Andrew Lisowski"),N))),c("div",{className:"blogBody"},void 0,c("div",{},void 0,j,S,c("p",{},void 0,"But thanks to ",c(p,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://github.com/intuit/auto/pull/359",className:"external-link"},void 0,"this PR")," that isn't true anymore! Now when you merge one PR to another both changes will be represented in the changelog."),x,M,I,c("p",{},void 0,"For example in ",c(p,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://github.com/intuit/auto/pull/351",className:"external-link"},void 0,"PR #351")," we changed what happens when you call ",_," from a PR. Previously if you called ",B," it would create a new release and publish it to the ",C," tag. The PR made it so ",D," would create a canary release when run in a PR and only publish to latest from the ",H," branch."),c("p",{},void 0,"Another ",c(p,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://github.com/zephraph",className:"external-link"},void 0,"contributor")," to the project pointed out that some users might not be using ",q," as their base branch, so the ",A," should be configurable."),E,T,L,G))))))}};t.default=J,e.exports=t.default}}]);
//# sourceMappingURL=pr-in-progress.js.map