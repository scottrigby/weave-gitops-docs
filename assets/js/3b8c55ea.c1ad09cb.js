(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[217],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},872:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i={sidebar_position:1},c={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installing the CLI",description:"The wego command-line interface is currently supported on Mac (x86 and Arm), and Linux.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/next/installation",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/docs/installation.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/next/intro"},next:{title:"Getting Started",permalink:"/docs/next/getting-started"}},l=[],s={toc:l};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"wego")," command-line interface is currently supported on Mac (x86 and Arm), and Linux.\nTo install the ",(0,a.kt)("inlineCode",{parentName:"p"},"wego")," CLI, please follow the following steps:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"curl -L https://github.com/weaveworks/weave-gitops/releases/download/v0.1.0-rc.1/wego-$(uname)-$(uname -m) -o wego\nchmod +x wego\nsudo mv ./wego /usr/local/bin/wego\nwego version\n")),(0,a.kt)("p",null,"You should see something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"Current Version: 0.1.0-rc.1\nGitCommit: 83bd9e7deffa9e45531389a5c10c8da9670512b6\nBuildTime: 2021-06-29T14:09:23Z\nBranch: HEAD\nFlux Version: v0.13.2\n")))}u.isMDXComponent=!0}}]);