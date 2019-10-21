(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{58:function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t,i=r(o(3)),s=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};t.get||t.set?Object.defineProperty(a,o,t):a[o]=e[o]}return a.default=e,a}(o(0));r(o(2)),r(o(87));function r(e){return e&&e.__esModule?e:{default:e}}function n(e,a,o,i){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,r=arguments.length-3;if(a||0===r||(a={children:void 0}),a&&s)for(var n in s)void 0===a[n]&&(a[n]=s[n]);else a||(a=s||{});if(1===r)a.children=i;else if(r>1){for(var l=new Array(r),d=0;d<r;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}function l(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function d(){return(d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var o,t,i=function(e,a){if(null==e)return{};var o,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],a.indexOf(o)>=0||(i[o]=e[o]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}const h=e=>{let{to:a}=e,o=c(e,["to"]);return a.includes("http")?s.default.createElement("a",d({},e,{href:a})):("#"===a[0]&&(a=i.default.join("/auto/","pages/autorc.html")+a),s.default.createElement("a",d({},o,{href:a,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const t=new URL(i.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(t),null,a),e.onClick();const s=new CustomEvent("changeLocation",{detail:t});return dispatchEvent(s),!1}})))};h.defaultProps={href:"",onClick:()=>{}};const u=e=>{var a,o;return o=a=class extends s.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?s.default.createElement(e,this.props,this.props.children||null):null}},l(a,"defaultProps",{shouldLoad:!0}),o};u(()=>o.e(20).then(o.bind(null,88))),u(()=>o.e(20).then(o.bind(null,89)));var p=n("h1",{},void 0,n("code",{},void 0,"auto")," RC File"),g=n("p",{},void 0,"All options for the CLI tools can also be configured via the ",n("code",{},void 0,".autorc"),". As CLI options you supply them in snake-case (",n("code",{},void 0,"--foo-bar"),"), but as ",n("code",{},void 0,".autorc")," options you supply them in camelCase (",n("code",{},void 0,"fooBar"),"),"),v=n("ul",{},void 0,n("li",{},void 0,'a JSON or YAML, extension-less "rc file"'),n("li",{},void 0,'an "rc file" with the extensions .json, .yaml, or .yml'),n("li",{},void 0,"a package.json property")),b=n("p",{},void 0,"We do not support writing configuration files in JavaScript."),m=n("p",{},void 0,"To interactively create an ",n("code",{},void 0,".autorc")," use the ",n("code",{},void 0,"init")," command. You can configure most flags and all labels/changelogTitles."),f=n("pre",{},void 0,n("code",{className:"language-sh"},void 0,"auto init",n("br",{}))),j=n("p",{},void 0,"These options can be set exclusively in the ",n("code",{},void 0,".autorc")," and do not exist as CLI flags."),y=n("p",{},void 0,"If you want to share your auto configuration between projects you can use the ",n("code",{},void 0,"extends")," property. This property will load from a module's package.json or from a custom path. It's expected that the extended configuration be under the ",n("code",{},void 0,"auto")," key in the package.json file."),N=n("p",{},void 0,"Auto can load ",n("code",{},void 0,"extends")," configs in the following ways:"),P=n("ul",{},void 0,n("li",{},void 0,"from a path ",n("code",{},void 0,"./path/to/config")," (this file must be in JSON format)"),n("li",{},void 0,"from a scoped package ",n("code",{},void 0,"@YOUR_SCOPE/auto-config")," (under the ",n("code",{},void 0,"auto")," key in the package.json)"),n("li",{},void 0,"from a package ",n("code",{},void 0,"auto-config-YOUR_NAME")),n("li",{},void 0,"from a url ",n("code",{},void 0,"https://yourdomain.com/auto-config.json")," (must return the content type ",n("code",{},void 0,"application/json"),")")),w=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"extends"'),": ",n("span",{className:"hljs-string"},void 0,'"@YOUR_SCOPE"'),n("br",{}),"}",n("br",{}))),k=n("p",{},void 0,"Will use the package ",n("code",{},void 0,"@YOUR_SCOPE/auto-config")),L=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"extends"'),": ",n("span",{className:"hljs-string"},void 0,'"joe"'),n("br",{}),"}",n("br",{}))),O=n("p",{},void 0,"Will use the package ",n("code",{},void 0,"auto-config-joe")),C=n("article",{className:"message column is-warning"},void 0,n("div",{className:"message-body"},void 0,n("p",{},void 0,"If extending from a config package make sure it's a dependency of your project"))),A=n("p",{},void 0,"If you're extending from a local file it can be any file in JSON format or a ",n("code",{},void 0,"package.json")," file."),x=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"extends"'),": ",n("span",{className:"hljs-string"},void 0,'"./path/to/config.json"'),n("br",{}),"}",n("br",{}))),I=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"extends"'),": ",n("span",{className:"hljs-string"},void 0,'"./path/to/other/package.json"'),n("br",{}),"}",n("br",{}))),T=n("p",{},void 0,"To override any of the default labels use the ",n("code",{},void 0,"labels")," section in the ",n("code",{},void 0,".autorc"),"."),E=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"labels"'),": {",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"major"'),": ",n("span",{className:"hljs-string"},void 0,'"Version: Major"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"minor"'),": ",n("span",{className:"hljs-string"},void 0,'"Version: Minor"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"patch"'),": ",n("span",{className:"hljs-string"},void 0,'"Version: Patch"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"skip-release"'),": ",n("span",{className:"hljs-string"},void 0,'"NO!"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"release"'),": ",n("span",{className:"hljs-string"},void 0,'"Autobots, rollout!"'),",",n("br",{}),"    ",n("span",{className:"hljs-attr"},void 0,'"prerelease"'),": ",n("span",{className:"hljs-string"},void 0,'"beta"'),n("br",{}),"  }",n("br",{}),"}",n("br",{}))),S=n("p",{},void 0,"You can customize everything about a label"),R=n("li",{},void 0,n("code",{},void 0,"name")," - The label text used for the label. If omitted defaults to the ",n("code",{},void 0,"key")," value"),M=n("li",{},void 0,n("code",{},void 0,"title")," - The title to use in the changelog"),_=n("li",{},void 0,n("code",{},void 0,"description")," - The description to use when creating the label"),U=n("code",{},void 0,"color"),q=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),'  "labels": {',n("br",{}),'    "major": {',n("br",{}),'      "name": "Version: Major",',n("br",{}),'      "title": "The API has changed:",',n("br",{}),'      "description": "Add this label to a PR to create a major release",',n("br",{}),'      "color": "blue"',n("br",{}),"    },",n("br",{}),"    ...",n("br",{}),"  }",n("br",{}),"}",n("br",{}))),G=n("p",{},void 0,"You have can multiple labels for each of the default labels."),Y=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),'  "labels": {',n("br",{}),'    "major": [',n("br",{}),"      {",n("br",{}),'        "name": "BREAKING",',n("br",{}),'        "title": "SUPER BREAKING CHANGED",',n("br",{}),"      },",n("br",{}),"      {",n("br",{}),'        "name": "Version: Major",',n("br",{}),'        "title": "The API has changed:",',n("br",{}),'        "description": "Add this label to a PR to create a major release",',n("br",{}),"      }",n("br",{}),"    ],",n("br",{}),"    ...",n("br",{}),"  }",n("br",{}),"}",n("br",{}))),z=n("article",{className:"message column is-warning"},void 0,n("div",{className:"message-body"},void 0,n("p",{},void 0,"⚠️ If you override any of the semantic versioning labels the default values are overridden too! Make sure to include that label if you still want it to be used during version calculation."))),D=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),'  "labels": {',n("br",{}),'    "minor": [',n("br",{}),'      "minor",',n("br",{}),"      {",n("br",{}),'        "name": "New Component",',n("br",{}),'        "title": "🧩 New Component",',n("br",{}),'        "description": "A new component has been added to the design-system",',n("br",{}),"      }",n("br",{}),"    ],",n("br",{}),"    ...",n("br",{}),"  }",n("br",{}),"}",n("br",{}))),J=n("p",{},void 0,"By default auto will create sections in the changelog for the following labels."),B=n("ul",{},void 0,n("li",{},void 0,"major"),n("li",{},void 0,"minor"),n("li",{},void 0,"patch"),n("li",{},void 0,"internal"),n("li",{},void 0,"documentation")),V=n("p",{},void 0,"To customize the title for the section in the changelog you can"),W=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),'  "labels": {',n("br",{}),'    "documentation": {',n("br",{}),'      "title": "Docz"',n("br",{}),"    },",n("br",{}),"    ...",n("br",{}),"  }",n("br",{}),"}",n("br",{}))),K=n("p",{},void 0,"If you want more sections in your changelog to further detail the change-set you can use the ",n("code",{},void 0,"labels")," section to add more. Any label in the label section with a title will become a special section in your changelog."),$=n("p",{},void 0,"The following adds a ",n("code",{},void 0,"typescript")," label to the project that we can use to denote changes related to a TypeScript re-write."),F=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),'  "labels": {',n("br",{}),'    "typescript": {',n("br",{}),'      "title": "TypeScript Rewrite"',n("br",{}),"    },",n("br",{}),"    ...",n("br",{}),"  }",n("br",{}),"}",n("br",{}))),H=n("code",{},void 0,"skip-release"),Q=n("p",{},void 0,"You can configure multiple labels to skip releases."),X=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"skipReleaseLabels"'),": [",n("span",{className:"hljs-string"},void 0,'"documentation"'),", ",n("span",{className:"hljs-string"},void 0,'"project-files"'),"]",n("br",{}),"}",n("br",{}))),Z=n("p",{},void 0,"If you want to ",n("code",{},void 0,"auto create-labels")," to add other labels to your project (ones that aren't used for versioning or the changelog), you can use the ",n("code",{},void 0,"labels")," section. Just omit the ",n("code",{},void 0,"title")," property."),ee=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),'  "labels": {',n("br",{}),'    "good first issue": {',n("br",{}),'      "description": "This is an issue that first time contributors can tackle easily",',n("br",{}),'      "color": "purple"',n("br",{}),"    },",n("br",{}),"    ...",n("br",{}),"  }",n("br",{}),"}",n("br",{}))),ae=n("p",{},void 0,"You can set any CLI option in the ",n("code",{},void 0,".autorc")," these options will get overridden by the CLI flags."),oe=n("p",{},void 0,"The following are options that might be more useful to set in the ",n("code",{},void 0,".autorc")," rather than with a flag."),te=n("p",{},void 0,'Configure what your repo considers the "master" branch.'),ie=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"baseBranch"'),": ",n("span",{className:"hljs-string"},void 0,'"trunk"'),n("br",{}),"}",n("br",{}))),se=n("p",{},void 0,"It is useful to specify your plugins in the rc file rather than in all the commands."),re=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",n("span",{className:"hljs-string"},void 0,'"npm"'),", ",n("span",{className:"hljs-string"},void 0,'"../path/to/plugin.js"'),", ",n("span",{className:"hljs-string"},void 0,'"NPM_PACKAGE_NAME"'),"]",n("br",{}),"}",n("br",{}))),ne=n("p",{},void 0,"If you are using enterprise github, ",n("code",{},void 0,"auto")," lets you configure the github API URL that it uses."),le=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"githubApi"'),": ",n("span",{className:"hljs-string"},void 0,'"https://github.mine.com/api/v3"'),n("br",{}),"}",n("br",{}))),de=n("p",{},void 0,"This is used for doing some searches in ",n("code",{},void 0,"auto"),"."),ce=n("p",{},void 0,"If you are using enterprise github and your company hosts the graphql at some other URL than the ",n("code",{},void 0,"githubApi"),", you can use ",n("code",{},void 0,"githubGraphqlApi")," to set the base path for ",n("code",{},void 0,"auto"),". The ",n("code",{},void 0,"githubGraphqlApi")," get merged with ",n("code",{},void 0,"/graphql")," to build the final URL."),he=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"githubGraphqlApi"'),": ",n("span",{className:"hljs-string"},void 0,'"https://github.mine.com/api/"'),n("br",{}),"}",n("br",{}))),ue=n("p",{},void 0,"Git name to commit and release with. Defaults to package.json. Used in ",n("code",{},void 0,"auto changelog")," and ",n("code",{},void 0,"auto release")),pe=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"name"'),": ",n("span",{className:"hljs-string"},void 0,'"Joe Schmo"'),n("br",{}),"}",n("br",{}))),ge=n("p",{},void 0,"Git email to commit and release with. Defaults to package.json. Used in ",n("code",{},void 0,"auto changelog")," and ",n("code",{},void 0,"auto release")),ve=n("pre",{},void 0,n("code",{className:"language-json"},void 0,"{",n("br",{}),"  ",n("span",{className:"hljs-attr"},void 0,'"email"'),": ",n("span",{className:"hljs-string"},void 0,'"joe@schmo.com"'),n("br",{}),"}",n("br",{})));var be=e=>n("div",{className:e.className},void 0,n("section",{},void 0,p,g,n("p",{},void 0,"We use ",n(h,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/davidtheclark/cosmiconfig",className:"external-link"},void 0,"cosmiconfig")," to find your config, so that means you can define this file a variety of ways. Our Cosmiconfig setup is a little custom and will start at the root of your project and start to search up the directory tree for the following:"),v,b,n("h2",{id:"initialization"},void 0,"Initialization ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#initialization","aria-hidden":"true"})),m,f,n("h2",{id:"exclusive"},void 0,"Exclusive ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#exclusive","aria-hidden":"true"})),j,n("h3",{id:"extending"},void 0,"Extending ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#extending","aria-hidden":"true"})),y,N,P,w,k,L,O,C,A,x,I,n("h3",{id:"labels"},void 0,"Labels ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#labels","aria-hidden":"true"})),T,E,n("h4",{id:"label-customization"},void 0,"Label Customization ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#label-customization","aria-hidden":"true"})),S,n("ul",{},void 0,R,M,_,n("li",{},void 0,U," - The color of the label. Can be specified as a string in any of ",n(h,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/bgrins/TinyColor#accepted-string-input",className:"external-link"},void 0,"these")," ways. If not specified the color is random")),q,n("h4",{id:"multiple-labels"},void 0,"Multiple Labels ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#multiple-labels","aria-hidden":"true"})),G,Y,z,D,n("h4",{id:"changelog-titles"},void 0,"Changelog Titles ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#changelog-titles","aria-hidden":"true"})),J,B,V,W,K,$,F,n("h4",{id:"multiple-skip-release"},void 0,"Multiple ",H," ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#multiple-skip-release","aria-hidden":"true"})),Q,X,n("h4",{id:"arbitrary-labels"},void 0,"Arbitrary Labels ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#arbitrary-labels","aria-hidden":"true"})),Z,ee,n("h2",{id:"cli-args"},void 0,"CLI args ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#cli-args","aria-hidden":"true"})),ae,oe,n("h3",{id:"base-branch"},void 0,"Base Branch ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#base-branch","aria-hidden":"true"})),te,ie,n("h3",{id:"plugins"},void 0,"Plugins ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#plugins","aria-hidden":"true"})),se,re,n("h3",{id:"githubapi"},void 0,"githubApi ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#githubapi","aria-hidden":"true"})),ne,le,n("h3",{id:"githubgraphqlapi"},void 0,"githubGraphqlApi ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#githubgraphqlapi","aria-hidden":"true"})),de,ce,he,n("h3",{id:"name"},void 0,"name ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#name","aria-hidden":"true"})),ue,pe,n("h3",{id:"email"},void 0,"email ",n(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#email","aria-hidden":"true"})),ge,ve));a.default=be,e.exports=a.default}}]);
//# sourceMappingURL=autorc.js.map