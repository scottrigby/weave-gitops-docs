(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[313],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return g}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9555:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=t(2122),o=t(9756),r=(t(7294),t(3905)),s={sidebar_position:3},i="CLI Reference",l={unversionedId:"cli-reference",id:"version-0.2.1/cli-reference",isDocsHomePage:!1,title:"CLI Reference",description:"wego",source:"@site/versioned_docs/version-0.2.1/cli-reference.md",sourceDirName:".",slug:"/cli-reference",permalink:"/docs/cli-reference",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.2.1/cli-reference.md",version:"0.2.1",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-0.2.1/tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Architecture",permalink:"/docs/architecture"}},p=[{value:"<code>wego</code>",id:"wego",children:[]},{value:"<code>wego gitops</code>",id:"wego-gitops",children:[{value:"<code>wego gitops install</code>",id:"wego-gitops-install",children:[]},{value:"<code>wego gitops uninstall</code>",id:"wego-gitops-uninstall",children:[]}]},{value:"<code>wego app</code>",id:"wego-app",children:[{value:"<code>wego app add</code>",id:"wego-app-add",children:[]},{value:"<code>wego app status</code>",id:"wego-app-status",children:[]},{value:"<code>wego app list</code>",id:"wego-app-list",children:[]}]},{value:"<code>wego flux</code>",id:"wego-flux",children:[]},{value:"<code>wego version</code>",id:"wego-version",children:[]}],c={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cli-reference"},"CLI Reference"),(0,r.kt)("h2",{id:"wego"},(0,r.kt)("inlineCode",{parentName:"h2"},"wego")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wego")," is the command-line interface for installing and controlling the Weave GitOps infrastructure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'Weave GitOps\n\nUsage:\n  wego [command]\n\nAvailable Commands:\n  app\n  flux        Use flux commands\n  gitops      Manages your wego installation\n  help        Help about any command\n  version     Display wego version\n\nFlags:\n  -h, --help               help for wego\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n\nUse "wego [command] --help" for more information about a command.\n')),(0,r.kt)("h2",{id:"wego-gitops"},(0,r.kt)("inlineCode",{parentName:"h2"},"wego gitops")),(0,r.kt)("p",null,"The gitops sub-command manages the installation and uninstallation of the Weave GitOps system into clusters."),(0,r.kt)("h3",{id:"wego-gitops-install"},(0,r.kt)("inlineCode",{parentName:"h3"},"wego gitops install")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wego install")," will install Weave GitOps into the current Kubernetes cluster. By default it will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wego-system")," namespace, but you can change this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'The install command deploys Wego in the specified namespace.\nIf a previous version is installed, then an in-place upgrade will be performed.\n\nUsage:\n  wego gitops install [flags]\n\nExamples:\n  # Install wego in the wego-system namespace\n  wego gitops install\n\nFlags:\n  -h, --help   help for install\n\nGlobal Flags:\n      --dry-run            outputs all the manifests that would be installed\n  -n, --namespace string   the namespace scope for this operation (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,r.kt)("h3",{id:"wego-gitops-uninstall"},(0,r.kt)("inlineCode",{parentName:"h3"},"wego gitops uninstall")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wego gitops uninstall")," removes the Weave GitOps controllers from the current Kubernetes cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'The uninstall command removes Wego components from the cluster.\n\nUsage:\n  wego gitops uninstall [flags]\n\nExamples:\n  # Uninstall wego in the wego-system namespace\n  wego uninstall\n\nFlags:\n  -h, --help   help for uninstall\n\nGlobal Flags:\n      --dry-run            outputs all the manifests that would be installed\n  -n, --namespace string   the namespace scope for this operation (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,r.kt)("h2",{id:"wego-app"},(0,r.kt)("inlineCode",{parentName:"h2"},"wego app")),(0,r.kt)("p",null,'Weave GitOps enables continuous deployment of workloads to Kubernetes targets. An "app" is a workload that can be deployed.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'Usage:\n  wego app [command]\n\nAvailable Commands:\n  add         Add a workload repository to a wego cluster\n  list        List applications\n  status      Get status of an app\n\nFlags:\n  -h, --help   help for app\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n\nUse "wego app [command] --help" for more information about a command.\n')),(0,r.kt)("h3",{id:"wego-app-add"},(0,r.kt)("inlineCode",{parentName:"h3"},"wego app add")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wego app add")," adds an application workload to the GitOps workflow. The simplest way to use this is to set the current directory to\npoint to a repository that you want GitOps'ed into the cluster and use ",(0,r.kt)("inlineCode",{parentName:"p"},"wego app add ."),". By default, this will create a pull request for the repository containing the requisite GitOps machinery to manage your application. Once the pull request is approved and merged, your application will be managed by GitOps. Alternatively, if --auto-merge=true is specified, the GitOps support will be directly added to the Git repository, skipping the pull request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'Associates an additional application in a git repository with a wego cluster so that its contents may be managed via GitOps\n\nUsage:\n  wego app add [--name <name>] [--url <url>] [--branch <branch>] [--path <path within repository>] [--private-key <keyfile>] <repository directory> [flags]\n\nExamples:\nwego app add .\n\nFlags:\n      --app-config-url string    URL of external repository (if any) which will hold automation manifests; NONE to store only in the cluster\n      --branch string            Branch to watch within git repository (default "main")\n      --chart string             Specify chart for helm source\n      --deployment-type string   deployment type [kustomize, helm] (default "kustomize")\n      --dry-run                  If set, \'wego add\' will not make any changes to the system; it will just display the actions that would have been taken\n  -h, --help                     help for add\n      --name string              Name of remote git repository\n      --path string              Path of files within git repository (default "./")\n      --private-key string       Private key to access git repository over ssh\n      --url string               URL of remote repository\n      --auto-merge               If set, \'wego add\' will merge automatically into the specified --branch (default false)\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,r.kt)("h3",{id:"wego-app-status"},(0,r.kt)("inlineCode",{parentName:"h3"},"wego app status")),(0,r.kt)("p",null,"Get the status of a GitOps'ed app"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'Usage:\n  wego app status <app-name> [flags]\n\nExamples:\nwego app status podinfo\n\nFlags:\n  -h, --help   help for status\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,r.kt)("h3",{id:"wego-app-list"},(0,r.kt)("inlineCode",{parentName:"h3"},"wego app list")),(0,r.kt)("p",null,"List the weave-gitops apps currently deployed in the cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'Usage:\n  wego app list [flags]\n\nExamples:\nwego app list\n\nFlags:\n  -h, --help   help for list\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')),(0,r.kt)("h2",{id:"wego-flux"},(0,r.kt)("inlineCode",{parentName:"h2"},"wego flux")),(0,r.kt)("p",null,"This command enables access to and control of the underlying Flux runtime."),(0,r.kt)("p",null,"Please see ",(0,r.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/cmd/flux/"},"flux documentation")),(0,r.kt)("h2",{id:"wego-version"},(0,r.kt)("inlineCode",{parentName:"h2"},"wego version")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'Display wego version\n\nUsage:\n  wego version [flags]\n\nFlags:\n  -h, --help   help for version\n\nGlobal Flags:\n      --namespace string   gitops runtime namespace (default "wego-system")\n  -v, --verbose            Enable verbose output\n')))}u.isMDXComponent=!0}}]);