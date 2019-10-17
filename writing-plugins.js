(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{66:function(s,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o,r=n(e(3)),i=function(s){if(s&&s.__esModule)return s;var a={};if(null!=s)for(var e in s)if(Object.prototype.hasOwnProperty.call(s,e)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(s,e):{};o.get||o.set?Object.defineProperty(a,e,o):a[e]=s[e]}return a.default=s,a}(e(0));n(e(2)),n(e(82));function n(s){return s&&s.__esModule?s:{default:s}}function t(s,a,e,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=s&&s.defaultProps,n=arguments.length-3;if(a||0===n||(a={children:void 0}),a&&i)for(var t in i)void 0===a[t]&&(a[t]=i[t]);else a||(a=i||{});if(1===n)a.children=r;else if(n>1){for(var l=new Array(n),d=0;d<n;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:o,type:s,key:void 0===e?null:""+e,ref:null,props:a,_owner:null}}function l(s,a,e){return a in s?Object.defineProperty(s,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[a]=e,s}function d(){return(d=Object.assign||function(s){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(s[o]=e[o])}return s}).apply(this,arguments)}function h(s,a){if(null==s)return{};var e,o,r=function(s,a){if(null==s)return{};var e,o,r={},i=Object.keys(s);for(o=0;o<i.length;o++)e=i[o],a.indexOf(e)>=0||(r[e]=s[e]);return r}(s,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);for(o=0;o<i.length;o++)e=i[o],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(s,e)&&(r[e]=s[e])}return r}const c=s=>{let{to:a}=s,e=h(s,["to"]);return a.includes("http")?i.default.createElement("a",d({},s,{href:a})):("#"===a[0]&&(a=r.default.join("/auto/","pages/writing-plugins.html")+a),i.default.createElement("a",d({},e,{href:a,onClick:e=>{if(e.preventDefault(),"#"===s.to)return!1;const o=new URL(r.default.join(window.location.origin,a));window.history.pushState((s=>({href:s.href,pathname:s.pathname,hash:s.hash,query:s.query}))(o),null,a),s.onClick();const i=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(i),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const p=s=>{var a,e;return e=a=class extends i.default.Component{constructor(...s){super(...s),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&s().then(s=>{this.setState({Comp:s.default})})}render(){const{Comp:s}=this.state;return s?i.default.createElement(s,this.props,this.props.children||null):null}},l(a,"defaultProps",{shouldLoad:!0}),e};p(()=>e.e(20).then(e.bind(null,83))),p(()=>e.e(20).then(e.bind(null,84)));var m=t("h1",{},void 0,"Writing Plugins"),g=t("p",{},void 0,"If you've ever written a webpack plugin it's a lot like that."),v=t("p",{},void 0,"A plugin definition is:"),u=t("ul",{},void 0,t("li",{},void 0,"a class the has an ",t("code",{},void 0,"apply")," function where a plugin hooks into various functions in auto (REQUIRED)"),t("li",{},void 0,"a constructor where you can load plugin specific config")),b=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,t("span",{className:"hljs-keyword"},void 0,"import")," { Auto, IPlugin } ",t("span",{className:"hljs-keyword"},void 0,"from")," ",t("span",{className:"hljs-string"},void 0,"'auto'"),";",t("br",{}),t("br",{}),t("span",{className:"hljs-keyword"},void 0,"export")," ",t("span",{className:"hljs-keyword"},void 0,"default")," ",t("span",{className:"hljs-keyword"},void 0,"class")," TestPlugin ",t("span",{className:"hljs-keyword"},void 0,"implements")," IPlugin {",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"private")," readonly config: ",t("span",{className:"hljs-built_in"},void 0,"any"),";",t("br",{}),t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"constructor"),"(",t("span",{className:"hljs-params"},void 0,"config: ",t("span",{className:"hljs-built_in"},void 0,"any")),") {",t("br",{}),"    ",t("span",{className:"hljs-keyword"},void 0,"this"),".config = config;",t("br",{}),"  }",t("br",{}),t("br",{}),"  apply(auto: Auto) {",t("br",{}),"    ",t("span",{className:"hljs-comment"},void 0,"// hook into auto"),t("br",{}),"  }",t("br",{}),"}",t("br",{}))),N=t("p",{},void 0,"In the constructor you have access to any plugin specific config provided in the ",t("code",{},void 0,".autorc"),". It might be useful to write a more type-safe interface for your config."),j=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,t("span",{className:"hljs-keyword"},void 0,"import")," { Auto, IPlugin } ",t("span",{className:"hljs-keyword"},void 0,"from")," ",t("span",{className:"hljs-string"},void 0,"'auto'"),";",t("br",{}),t("br",{}),t("span",{className:"hljs-keyword"},void 0,"interface")," ITestPluginConfig {",t("br",{}),"  foo?: ",t("span",{className:"hljs-built_in"},void 0,"string"),";",t("br",{}),"  bar?: ",t("span",{className:"hljs-built_in"},void 0,"boolean"),";",t("br",{}),"}",t("br",{}),t("br",{}),t("span",{className:"hljs-keyword"},void 0,"export")," ",t("span",{className:"hljs-keyword"},void 0,"default")," ",t("span",{className:"hljs-keyword"},void 0,"class")," TestPlugin ",t("span",{className:"hljs-keyword"},void 0,"implements")," IPlugin {",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"private")," readonly config: ITestPluginConfig;",t("br",{}),t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"constructor"),"(",t("span",{className:"hljs-params"},void 0,"config: ITestPluginConfig"),") {",t("br",{}),"    ",t("span",{className:"hljs-keyword"},void 0,"this"),".config = config;",t("br",{}),"  }",t("br",{}),"}",t("br",{}))),f=t("p",{},void 0,"Plugins work by hooking into various actions that ",t("code",{},void 0,"auto")," has to do in order to facilitate a release or interact with your GitHub repo. The hooks that it exposes are:"),k=t("hr",{}),y=t("p",{},void 0,"Happens before anything is done. This is a great place to check for platform specific secrets such as a NPM token."),w=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.beforeRun.tapPromise(",t("span",{className:"hljs-string"},void 0,"'NPM'"),", ",t("span",{className:"hljs-keyword"},void 0,"async")," config => {",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"if")," (!process.env.NPM_TOKEN) {",t("br",{}),"    auto.logger.log.warn(",t("span",{className:"hljs-string"},void 0,"'NPM Token is needed for the NPM plugin!'"),");",t("br",{}),"  }",t("br",{}),"});",t("br",{}))),P=t("p",{},void 0,"Modify what is in the config. You must return the config in this hook."),C=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.modifyConfig.tap(",t("span",{className:"hljs-string"},void 0,"'test'"),", ",t("span",{className:"hljs-function"},void 0,t("span",{className:"hljs-params"},void 0,"config")," =>")," {",t("br",{}),"  config.labels.released = {",t("br",{}),"    name: ",t("span",{className:"hljs-string"},void 0,"'released'"),",",t("br",{}),"    description: ",t("span",{className:"hljs-string"},void 0,"'This issue/pull request has been released'"),t("br",{}),"  };",t("br",{}),t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"return")," config;",t("br",{}),"});",t("br",{}))),L=t("p",{},void 0,"Happens before ",t("code",{},void 0,"shipit")," is run. This is a great way to throw an error if a token or key is not present."),T=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.beforeRun.tapPromise(",t("span",{className:"hljs-string"},void 0,"'NPM'"),", ",t("span",{className:"hljs-keyword"},void 0,"async")," config => {",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"if")," (!process.env.NPM_TOKEN) {",t("br",{}),"    ",t("span",{className:"hljs-keyword"},void 0,"throw")," ",t("span",{className:"hljs-keyword"},void 0,"new")," ",t("span",{className:"hljs-built_in"},void 0,"Error"),"(",t("span",{className:"hljs-string"},void 0,"'NPM Token is needed for the NPM plugin!'"),");",t("br",{}),"  }",t("br",{}),"});",t("br",{}))),R=t("p",{},void 0,"Ran after the ",t("code",{},void 0,"release")," command has run. This hooks gets the following arguments:"),x=t("ul",{},void 0,t("li",{},void 0,"version - version that was just released"),t("li",{},void 0,"commits - the commits in the release"),t("li",{},void 0,"releaseNotes - generated release notes for the release"),t("li",{},void 0,"response - the response returned from making the release")),M=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.afterRelease.tap(",t("br",{}),"  ",t("span",{className:"hljs-string"},void 0,"'MyPlugin'"),",",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"async")," ({ version, commits, releaseNotes, response }) => {",t("br",{}),"    ",t("span",{className:"hljs-comment"},void 0,"// do something"),t("br",{}),"  }",t("br",{}),");",t("br",{}))),S=t("p",{},void 0,"Ran after the ",t("code",{},void 0,"shipit")," command has run."),O=t("p",{},void 0,"Get git author. Typically from a package distribution description file."),E=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.getAuthor.tapPromise(",t("span",{className:"hljs-string"},void 0,"'NPM'"),", ",t("span",{className:"hljs-keyword"},void 0,"async")," () => {",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"const")," { author } = ",t("span",{className:"hljs-built_in"},void 0,"JSON"),".parse(",t("span",{className:"hljs-keyword"},void 0,"await")," readFile(",t("span",{className:"hljs-string"},void 0,"'package.json'"),", ",t("span",{className:"hljs-string"},void 0,"'utf-8'"),"));",t("br",{}),t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"if")," (author) {",t("br",{}),"    ",t("span",{className:"hljs-keyword"},void 0,"return")," author;",t("br",{}),"  }",t("br",{}),"});",t("br",{}))),_=t("p",{},void 0,"Get the previous version. Typically from a package distribution description file."),I=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.getPreviousVersion.tapPromise(",t("span",{className:"hljs-string"},void 0,"'NPM'"),", ",t("span",{className:"hljs-keyword"},void 0,"async")," prefixRelease => {",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"const")," { version } = ",t("span",{className:"hljs-built_in"},void 0,"JSON"),".parse(",t("span",{className:"hljs-keyword"},void 0,"await")," readFile(",t("span",{className:"hljs-string"},void 0,"'package.json'"),", ",t("span",{className:"hljs-string"},void 0,"'utf-8'"),"));",t("br",{}),t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"if")," (version) {",t("br",{}),"    ",t("span",{className:"hljs-keyword"},void 0,"return")," prefixRelease(",t("br",{}),"      ",t("span",{className:"hljs-built_in"},void 0,"JSON"),".parse(",t("span",{className:"hljs-keyword"},void 0,"await")," readFile(",t("span",{className:"hljs-string"},void 0,"'package.json'"),", ",t("span",{className:"hljs-string"},void 0,"'utf-8'"),")).version",t("br",{}),"    );",t("br",{}),"  }",t("br",{}),"});",t("br",{}))),A=t("p",{},void 0,"Get owner and repository. Typically from a package distribution description file."),V=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.getRepository.tapPromise(",t("span",{className:"hljs-string"},void 0,"'NPM'"),", ",t("span",{className:"hljs-keyword"},void 0,"async")," () => {",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"const")," owner = ",t("span",{className:"hljs-comment"},void 0,"// get the owner from package.json"),t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"const")," repo = ",t("span",{className:"hljs-comment"},void 0,"// get the repo from package.json"),t("br",{}),t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"return")," {",t("br",{}),"    owner,",t("br",{}),"    repo",t("br",{}),"  }",t("br",{}),"});",t("br",{}))),$=t("p",{},void 0,"Tap into the things the Release class makes. This isn't the same as ",t("code",{},void 0,"auto release"),", but the main class that does most of the work."),F=t("p",{},void 0,"Available hooks:"),H=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,t("span",{className:"hljs-keyword"},void 0,"this"),".hooks.onCreateRelease.tap(",t("span",{className:"hljs-string"},void 0,"'MyPlugin'"),", ",t("span",{className:"hljs-function"},void 0,t("span",{className:"hljs-params"},void 0,"release")," =>")," {",t("br",{}),"  release.hooks.onCreateLogParse.tap(",t("span",{className:"hljs-string"},void 0,"'Change log parseing'"),", ",t("span",{className:"hljs-function"},void 0,t("span",{className:"hljs-params"},void 0,"logParse")," =>"),t("br",{}),"    ",t("span",{className:"hljs-comment"},void 0,"// extend logParse"),t("br",{}),"  );",t("br",{}),t("br",{}),"  release.hooks.onCreateChangelog.tap(",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'Change changelog'"),",",t("br",{}),"    ",t("span",{className:"hljs-function"},void 0,t("span",{className:"hljs-params"},void 0,"changelog")," =>")," {",t("br",{}),"      ",t("span",{className:"hljs-comment"},void 0,"// extend changelog"),t("br",{}),"    }",t("br",{}),"  );",t("br",{}),"});",t("br",{}))),J=t("code",{},void 0,"this.hooks.onCreateRelease"),G=t("code",{},void 0,"this.hooks"),D=t("code",{},void 0,"this.hooks.onCreateRelease"),B=t("code",{},void 0,"this.hooks"),q=t("p",{},void 0,"Version the package. This is a good opportunity to ",t("code",{},void 0,"git tag")," the release also. Here ",t("code",{},void 0,"npm")," does it for us."),U=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.version.tapPromise(",t("span",{className:"hljs-string"},void 0,"'NPM'"),", ",t("span",{className:"hljs-keyword"},void 0,"async")," (version: SEMVER) => {",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"await")," execPromise(",t("span",{className:"hljs-string"},void 0,"'npm'"),", [",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'version'"),",",t("br",{}),"    version,",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'-m'"),",",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'Bump version to: %s [skip ci]'"),t("br",{}),"  ]);",t("br",{}),"});",t("br",{}))),Y=t("p",{},void 0,"Ran after the package has been versioned."),K=t("p",{},void 0,"Publish the package to some package distributor. You must push the tags to github!"),W=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.publish.tapPromise(",t("span",{className:"hljs-string"},void 0,"'NPM'"),", ",t("span",{className:"hljs-keyword"},void 0,"async")," (version: SEMVER) => {",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"await")," execPromise(",t("span",{className:"hljs-string"},void 0,"'npm'"),", [",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'version'"),",",t("br",{}),"    version,",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'-m'"),",",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'Bump version to: %s [skip ci]'"),t("br",{}),"  ]);",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"await")," execPromise(",t("span",{className:"hljs-string"},void 0,"'npm'"),", [",t("span",{className:"hljs-string"},void 0,"'publish'"),"]);",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"await")," execPromise(",t("span",{className:"hljs-string"},void 0,"'git'"),", [",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'push'"),",",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'--follow-tags'"),",",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'--set-upstream'"),",",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'origin'"),",",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'$branch'"),t("br",{}),"  ]);",t("br",{}),"});",t("br",{}))),Q=t("p",{},void 0,"Ran after the package has been published."),z=t("hr",{}),X=t("p",{},void 0,"Used to publish a canary release. In this hook you get the semver bump and the unique canary postfix ID."),Z=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.canary.tapPromise(",t("span",{className:"hljs-keyword"},void 0,"this"),".name, ",t("span",{className:"hljs-keyword"},void 0,"async")," (version, postFix) => {",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"const")," lastRelease = ",t("span",{className:"hljs-keyword"},void 0,"await")," auto.git!.getLatestRelease();",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"const")," current = ",t("span",{className:"hljs-keyword"},void 0,"await")," auto.getCurrentVersion(lastRelease);",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"const")," nextVersion = inc(current, version ",t("span",{className:"hljs-keyword"},void 0,"as")," ReleaseType);",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"const")," isScopedPackage = name.match(",t("span",{className:"hljs-regexp"},void 0,"/@\\S+\\/\\S+/"),");",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"const")," canaryVersion = `${nextVersion}-canary${postFix}`;",t("br",{}),t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"await")," execPromise(",t("span",{className:"hljs-string"},void 0,"'npm'"),", [",t("span",{className:"hljs-string"},void 0,"'version'"),", canaryVersion, ",t("span",{className:"hljs-string"},void 0,"'--no-git-tag-version'"),"]);",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"await")," execPromise(",t("span",{className:"hljs-string"},void 0,"'npm'"),", [",t("span",{className:"hljs-string"},void 0,"'publish'"),", ",t("span",{className:"hljs-string"},void 0,"'--tag'"),", ",t("span",{className:"hljs-string"},void 0,"'canary'"),"]);",t("br",{}),t("br",{}),"  auto.logger.verbose.info(",t("span",{className:"hljs-string"},void 0,"'Successfully published canary version'"),");",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"return")," canaryVersion;",t("br",{}),"});",t("br",{}))),ss=t("p",{},void 0,"Change how the changelog renders lines. This hook provides the commit and the current state of the line render. You must return the commit and the line string state as a tuple ([commit, line])."),as=t("p",{},void 0,"The following plugin would change all the bullet points in the changelog to star emojis."),es=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.onCreateChangelog.tapPromise(",t("span",{className:"hljs-string"},void 0,"'Stars'"),", ",t("span",{className:"hljs-function"},void 0,t("span",{className:"hljs-params"},void 0,"changelog")," =>"),t("br",{}),"  changelog.hooks.renderChangelogLine.tapPromise(",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'Stars'"),",",t("br",{}),"    ",t("span",{className:"hljs-keyword"},void 0,"async")," (commit, line) =>",t("br",{}),"      [commit, `${line.replace(",t("span",{className:"hljs-string"},void 0,"'-'"),", ",t("span",{className:"hljs-string"},void 0,"':star:'"),")}\\n`]",t("br",{}),"  );",t("br",{}),");",t("br",{}))),os=t("p",{},void 0,"Change how the changelog renders titles. The hook provides the current label for the section and all the configured changelog titles."),rs=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.onCreateChangelog.tapPromise(",t("span",{className:"hljs-string"},void 0,"'Stars'"),", ",t("span",{className:"hljs-function"},void 0,t("span",{className:"hljs-params"},void 0,"changelog")," =>"),t("br",{}),"  changelog.hooks.renderChangelogTitle.tap(",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'My Titles'"),",",t("br",{}),"    ",t("span",{className:"hljs-function"},void 0,"(",t("span",{className:"hljs-params"},void 0,"label, changelogTitles"),") =>")," `:heart: ${changelogTitles[label]} :heart:`",t("br",{}),"  );",t("br",{}),");",t("br",{}))),is=t("p",{},void 0,"Change how the changelog renders authors. This is both the author on each commit note and the user in the author section (the part between parentheses). This is generally a link to some profile."),ns=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.onCreateChangelog.tapPromise(",t("span",{className:"hljs-string"},void 0,"'Stars'"),", ",t("span",{className:"hljs-function"},void 0,t("span",{className:"hljs-params"},void 0,"changelog")," =>"),t("br",{}),"  changelog.hooks.renderChangelogAuthor.tap(",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'test'"),",",t("br",{}),"    ",t("span",{className:"hljs-function"},void 0,"(",t("span",{className:"hljs-params"},void 0,"author, commit"),") =>")," `:heart: ${author.name}/${commit.authorEmail} :heart:`",t("br",{}),"  );",t("br",{}),");",t("br",{}))),ts=t("p",{},void 0,"Change how the changelog renders authors in the authors section. The hook provides the author object and the user created with ",t("code",{},void 0,"renderChangelogAuthor"),". Here is where you might display extra info about the author, such as thier full name,."),ls=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.onCreateChangelog.tapPromise(",t("span",{className:"hljs-string"},void 0,"'Stars'"),", ",t("span",{className:"hljs-function"},void 0,t("span",{className:"hljs-params"},void 0,"changelog")," =>"),t("br",{}),"  changelog.hooks.renderChangelogAuthorLine.tap(",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'test'"),",",t("br",{}),"    ",t("span",{className:"hljs-function"},void 0,"(",t("span",{className:"hljs-params"},void 0,"author, user"),") =>")," `:shipit: ${author.name} (${user})\\n`",t("br",{}),"  );",t("br",{}),");",t("br",{}))),ds=t("p",{},void 0,"Control the titles in the ",t("code",{},void 0,"CHANGELOG.md")),hs=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,t("span",{className:"hljs-comment"},void 0,"// Render only the date in the title"),t("br",{}),"auto.hooks.onCreateRelease.tap(",t("span",{className:"hljs-keyword"},void 0,"this"),".name, ",t("span",{className:"hljs-function"},void 0,t("span",{className:"hljs-params"},void 0,"release")," =>")," {",t("br",{}),"  release.hooks.createChangelogTitle.tap(",t("br",{}),"    `${",t("span",{className:"hljs-keyword"},void 0,"this"),".name} - lerna independent`,",t("br",{}),"    ",t("span",{className:"hljs-function"},void 0,t("span",{className:"hljs-params"},void 0,"()")," =>")," ",t("span",{className:"hljs-string"},void 0,"''"),t("br",{}),"  );",t("br",{}),"});",t("br",{}))),cs=t("hr",{}),ps=t("p",{},void 0,"Control what commits effect the additional release notes section."),ms=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.onCreateChangelog.tap(",t("span",{className:"hljs-keyword"},void 0,"this"),".name, ",t("span",{className:"hljs-function"},void 0,t("span",{className:"hljs-params"},void 0,"changelog")," =>")," {",t("br",{}),"  changelog.hooks.omitReleaseNotes.tap(",t("span",{className:"hljs-keyword"},void 0,"this"),".name, ",t("span",{className:"hljs-function"},void 0,t("span",{className:"hljs-params"},void 0,"commit")," =>"),t("br",{}),"    commit.subject.includes(",t("span",{className:"hljs-string"},void 0,"'WIP'"),")",t("br",{}),"  );",t("br",{}),"});",t("br",{}))),gs=t("hr",{}),vs=t("p",{},void 0,"Parse information about a commit from a commit. Here is where ",t("code",{},void 0,"auto")," gets the PR number from the merge commits."),us=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.onCreateLogParse.tapPromise(",t("span",{className:"hljs-string"},void 0,"'Stars'"),", ",t("span",{className:"hljs-function"},void 0,t("span",{className:"hljs-params"},void 0,"logParse")," =>"),t("br",{}),"  logParse.hooks.parseCommit.tap(",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'test'"),",",t("br",{}),"    ",t("span",{className:"hljs-function"},void 0,"(",t("span",{className:"hljs-params"},void 0,"commit"),") =>")," {",t("br",{}),"      ",t("span",{className:"hljs-keyword"},void 0,"const")," bump = getBump(commit.subject, logParse.options.versionLabels);",t("br",{}),"      commit.labels = [bump]",t("br",{}),"      ",t("span",{className:"hljs-keyword"},void 0,"return")," commit;",t("br",{}),"    }",t("br",{}),"  );",t("br",{}),");",t("br",{}))),bs=t("p",{},void 0,"Choose to omit certain commits. If you return true the commit will be omitted. Be sure to return nothing if you don't want the commit omitted."),Ns=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,"auto.hooks.onCreateLogParse.tapPromise(",t("span",{className:"hljs-string"},void 0,"'Stars'"),", ",t("span",{className:"hljs-function"},void 0,t("span",{className:"hljs-params"},void 0,"changelog")," =>"),t("br",{}),"  changelog.hooks.omitCommit.tap(",t("br",{}),"    ",t("span",{className:"hljs-string"},void 0,"'test'"),",",t("br",{}),"    ",t("span",{className:"hljs-function"},void 0,"(",t("span",{className:"hljs-params"},void 0,"commit"),") =>")," {",t("br",{}),"      ",t("span",{className:"hljs-keyword"},void 0,"if")," (someTest(commit.subject)) {",t("br",{}),"        ",t("span",{className:"hljs-keyword"},void 0,"return")," ",t("span",{className:"hljs-literal"},void 0,"true"),";",t("br",{}),"      }",t("br",{}),"    }",t("br",{}),"  );",t("br",{}),");",t("br",{}))),js=t("p",{},void 0,"To create a plugin simply make a class with an ",t("code",{},void 0,"apply")," method and tap into the hooks you need."),fs=t("pre",{},void 0,t("code",{className:"language-ts"},void 0,t("span",{className:"hljs-keyword"},void 0,"import")," * ",t("span",{className:"hljs-keyword"},void 0,"as")," fs ",t("span",{className:"hljs-keyword"},void 0,"from")," ",t("span",{className:"hljs-string"},void 0,"'fs'"),";",t("br",{}),t("span",{className:"hljs-keyword"},void 0,"import")," { promisify } ",t("span",{className:"hljs-keyword"},void 0,"from")," ",t("span",{className:"hljs-string"},void 0,"'util'"),";",t("br",{}),t("br",{}),t("span",{className:"hljs-keyword"},void 0,"import")," { IAutoHooks, Auto, SEMVER, execPromise } ",t("span",{className:"hljs-keyword"},void 0,"from")," ",t("span",{className:"hljs-string"},void 0,"'auto'"),";",t("br",{}),t("span",{className:"hljs-keyword"},void 0,"import")," getConfigFromPackageJson ",t("span",{className:"hljs-keyword"},void 0,"from")," ",t("span",{className:"hljs-string"},void 0,"'./package-config'"),";",t("br",{}),t("br",{}),t("span",{className:"hljs-keyword"},void 0,"const")," readFile = promisify(fs.readFile);",t("br",{}),t("br",{}),t("span",{className:"hljs-keyword"},void 0,"export")," ",t("span",{className:"hljs-keyword"},void 0,"default")," ",t("span",{className:"hljs-keyword"},void 0,"class")," NPMPlugin {",t("br",{}),"  ",t("span",{className:"hljs-keyword"},void 0,"public")," apply(auto: Auto) {",t("br",{}),"    auto.hooks.getAuthor.tapPromise(",t("span",{className:"hljs-string"},void 0,"'NPM'"),", ",t("span",{className:"hljs-keyword"},void 0,"async")," () => {",t("br",{}),"      ",t("span",{className:"hljs-keyword"},void 0,"const")," { author } = ",t("span",{className:"hljs-built_in"},void 0,"JSON"),".parse(",t("span",{className:"hljs-keyword"},void 0,"await")," readFile(",t("span",{className:"hljs-string"},void 0,"'package.json'"),", ",t("span",{className:"hljs-string"},void 0,"'utf-8'"),"));",t("br",{}),t("br",{}),"      ",t("span",{className:"hljs-keyword"},void 0,"if")," (author) {",t("br",{}),"        auto.logger.log.info(",t("span",{className:"hljs-string"},void 0,"'NPM: Got author information from package.json'"),");",t("br",{}),"        ",t("span",{className:"hljs-keyword"},void 0,"return")," author;",t("br",{}),"      }",t("br",{}),"    });",t("br",{}),t("br",{}),"    auto.hooks.getPreviousVersion.tapPromise(",t("span",{className:"hljs-string"},void 0,"'NPM'"),", ",t("span",{className:"hljs-keyword"},void 0,"async")," prefixRelease => {",t("br",{}),"      ",t("span",{className:"hljs-keyword"},void 0,"const")," { version } = ",t("span",{className:"hljs-built_in"},void 0,"JSON"),".parse(",t("span",{className:"hljs-keyword"},void 0,"await")," readFile(",t("span",{className:"hljs-string"},void 0,"'package.json'"),", ",t("span",{className:"hljs-string"},void 0,"'utf-8'"),"));",t("br",{}),t("br",{}),"      auto.logger.log.info(",t("br",{}),"        ",t("span",{className:"hljs-string"},void 0,"'NPM: Got previous version from package.json - '"),",",t("br",{}),"        version",t("br",{}),"      );",t("br",{}),t("br",{}),"      ",t("span",{className:"hljs-keyword"},void 0,"if")," (version) {",t("br",{}),"        ",t("span",{className:"hljs-keyword"},void 0,"return")," prefixRelease(",t("br",{}),"          ",t("span",{className:"hljs-built_in"},void 0,"JSON"),".parse(",t("span",{className:"hljs-keyword"},void 0,"await")," readFile(",t("span",{className:"hljs-string"},void 0,"'package.json'"),", ",t("span",{className:"hljs-string"},void 0,"'utf-8'"),")).version",t("br",{}),"        );",t("br",{}),"      }",t("br",{}),"    });",t("br",{}),t("br",{}),"    auto.hooks.getRepository.tapPromise(",t("span",{className:"hljs-string"},void 0,"'NPM'"),", ",t("span",{className:"hljs-keyword"},void 0,"async")," () => {",t("br",{}),"      auto.logger.log.info(",t("span",{className:"hljs-string"},void 0,"'NPM: getting repo information from package.json'"),");",t("br",{}),"      ",t("span",{className:"hljs-keyword"},void 0,"return")," getConfigFromPackageJson();",t("br",{}),"    });",t("br",{}),t("br",{}),"    auto.hooks.publish.tapPromise(",t("span",{className:"hljs-string"},void 0,"'NPM'"),", ",t("span",{className:"hljs-keyword"},void 0,"async")," (version: SEMVER) => {",t("br",{}),"      ",t("span",{className:"hljs-keyword"},void 0,"await")," execPromise(",t("span",{className:"hljs-string"},void 0,"'npm'"),", [",t("br",{}),"        ",t("span",{className:"hljs-string"},void 0,"'version'"),",",t("br",{}),"        version,",t("br",{}),"        ",t("span",{className:"hljs-string"},void 0,"'-m'"),",",t("br",{}),"        ",t("span",{className:"hljs-string"},void 0,"'Bump version to: %s [skip ci]'"),t("br",{}),"      ]);",t("br",{}),"      ",t("span",{className:"hljs-keyword"},void 0,"await")," execPromise(",t("span",{className:"hljs-string"},void 0,"'npm'"),", [",t("span",{className:"hljs-string"},void 0,"'publish'"),"]);",t("br",{}),"      ",t("span",{className:"hljs-keyword"},void 0,"await")," execPromise(",t("span",{className:"hljs-string"},void 0,"'git'"),", [",t("br",{}),"        ",t("span",{className:"hljs-string"},void 0,"'push'"),",",t("br",{}),"        ",t("span",{className:"hljs-string"},void 0,"'--follow-tags'"),",",t("br",{}),"        ",t("span",{className:"hljs-string"},void 0,"'--set-upstream'"),",",t("br",{}),"        ",t("span",{className:"hljs-string"},void 0,"'origin'"),",",t("br",{}),"        ",t("span",{className:"hljs-string"},void 0,"'$branch'"),t("br",{}),"      ]);",t("br",{}),"    });",t("br",{}),"  }",t("br",{}),"}",t("br",{})));var ks=s=>t("div",{className:s.className},void 0,t("section",{},void 0,m,g,v,u,b,t("h2",{id:"constructor"},void 0,"Constructor ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#constructor","aria-hidden":"true"})),N,j,t("h2",{id:"hooks"},void 0,"Hooks ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#hooks","aria-hidden":"true"})),f,k,t("h3",{id:"main-hooks"},void 0,"Main Hooks ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#main-hooks","aria-hidden":"true"})),t("h4",{id:"beforerun"},void 0,"beforeRun ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#beforerun","aria-hidden":"true"})),y,w,t("h4",{id:"modifyconfig"},void 0,"modifyConfig ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#modifyconfig","aria-hidden":"true"})),P,C,t("h4",{id:"beforeshipit"},void 0,"beforeShipIt ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#beforeshipit","aria-hidden":"true"})),L,T,t("h4",{id:"afterrelease"},void 0,"afterRelease ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#afterrelease","aria-hidden":"true"})),R,x,M,t("h4",{id:"aftershipit"},void 0,"afterShipIt ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#aftershipit","aria-hidden":"true"})),S,t("h4",{id:"getauthor"},void 0,"getAuthor ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#getauthor","aria-hidden":"true"})),O,E,t("h4",{id:"getpreviousversion"},void 0,"getPreviousVersion ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#getpreviousversion","aria-hidden":"true"})),_,I,t("h4",{id:"getrepository"},void 0,"getRepository ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#getrepository","aria-hidden":"true"})),A,V,t("h4",{id:"oncreaterelease"},void 0,"onCreateRelease ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#oncreaterelease","aria-hidden":"true"})),$,F,t("ul",{},void 0,t("li",{},void 0,"onCreateLogParse (detailed ",t(c,{currentPage:s.currentPage,to:""},void 0,"below"),")"),t("li",{},void 0,"onCreateChangelog (detailed ",t(c,{currentPage:s.currentPage,to:""},void 0,"below"),")")),H,t("h4",{id:"oncreatechangelog"},void 0,"onCreateChangelog ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#oncreatechangelog","aria-hidden":"true"})),t("p",{},void 0,"This is where you hook into the changelog's hooks. See usage ",t(c,{currentPage:s.currentPage,to:"#changelog-hooks"},void 0,"below"),". This hook is exposed for convenience on during ",J," and at the root ",G),t("h4",{id:"oncreatelogparse"},void 0,"onCreateLogParse ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#oncreatelogparse","aria-hidden":"true"})),t("p",{},void 0,"This is where you hook into the LogParse's hooks. See usage ",t(c,{currentPage:s.currentPage,to:"#logparse-hooks"},void 0,"below"),". This hook is exposed for convenience on during ",D," and at the root ",B),t("h4",{id:"version"},void 0,"version ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#version","aria-hidden":"true"})),q,U,t("h4",{id:"postversion"},void 0,"postVersion ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#postversion","aria-hidden":"true"})),Y,t("h4",{id:"publish"},void 0,"publish ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#publish","aria-hidden":"true"})),K,W,t("h4",{id:"postpublish"},void 0,"postPublish ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#postpublish","aria-hidden":"true"})),Q,z,t("h4",{id:"canary"},void 0,"canary ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#canary","aria-hidden":"true"})),X,Z,t("h3",{id:"changelog-hooks"},void 0,"Changelog Hooks ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#changelog-hooks","aria-hidden":"true"})),t("h4",{id:"renderchangelogline"},void 0,"renderChangelogLine ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#renderchangelogline","aria-hidden":"true"})),ss,as,es,t("h4",{id:"renderchangelogtitle"},void 0,"renderChangelogTitle ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#renderchangelogtitle","aria-hidden":"true"})),os,rs,t("h4",{id:"renderchangelogauthor"},void 0,"renderChangelogAuthor ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#renderchangelogauthor","aria-hidden":"true"})),is,ns,t("h4",{id:"renderchangelogauthorline"},void 0,"renderChangelogAuthorLine ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#renderchangelogauthorline","aria-hidden":"true"})),ts,ls,t("h4",{id:"createchangelogtitle"},void 0,"createChangelogTitle ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#createchangelogtitle","aria-hidden":"true"})),ds,hs,cs,t("h4",{id:"omitreleasenotes"},void 0,"omitReleaseNotes ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#omitreleasenotes","aria-hidden":"true"})),ps,ms,gs,t("h3",{id:"logparse-hooks"},void 0,"LogParse Hooks ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#logparse-hooks","aria-hidden":"true"})),t("h4",{id:"parsecommit"},void 0,"parseCommit ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#parsecommit","aria-hidden":"true"})),vs,us,t("h4",{id:"omitcommit"},void 0,"omitCommit ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#omitcommit","aria-hidden":"true"})),bs,Ns,t("h2",{id:"example-plugin---npm-(simple)"},void 0,"Example Plugin - NPM (simple) ",t(c,{currentPage:s.currentPage,className:"fas fa-hashtag headerLink",to:"#example-plugin---npm-(simple)","aria-hidden":"true"})),js,fs));a.default=ks,s.exports=a.default}}]);
//# sourceMappingURL=writing-plugins.js.map