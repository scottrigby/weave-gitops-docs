(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[3174],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9236:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var o=n(2122),i=n(9756),a=(n(7294),n(3905)),s={sidebar_position:8},r="Deploying the Sock Shop Application",p={unversionedId:"examples/sock-shop",id:"examples/sock-shop",isDocsHomePage:!1,title:"Deploying the Sock Shop Application",description:"In this example, we'll show how easy it is to deploy a real world application using Weave GitOps. The Sock Shop is a well known microservices application that is widely used in demonstration and testing of microservice environment such as Kubernetes. We'll actually see two different ways of deploying the Sock Shop:",source:"@site/docs/examples/sock-shop.md",sourceDirName:"examples",slug:"/examples/sock-shop",permalink:"/docs/next/examples/sock-shop",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/docs/examples/sock-shop.md",version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Helm Charts",permalink:"/docs/next/examples/helm"},next:{title:"GitOps Automation Configuration",permalink:"/docs/next/gitops-automation"}},l=[{value:"Simple Deployment",id:"simple-deployment",children:[]},{value:"Deployment with Managed GitOps Resources",id:"deployment-with-managed-gitops-resources",children:[{value:"Deployment with GitOps Resources in Application Repository",id:"deployment-with-gitops-resources-in-application-repository",children:[]},{value:"Deployment with GitOps Resources in Separate Configuration Repository",id:"deployment-with-gitops-resources-in-separate-configuration-repository",children:[]},{value:"Using Pull Requests",id:"using-pull-requests",children:[]}]}],c={toc:l};function m(e){var t=e.components,s=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-the-sock-shop-application"},"Deploying the Sock Shop Application"),(0,a.kt)("p",null,"In this example, we'll show how easy it is to deploy a real world application using Weave GitOps. The ",(0,a.kt)("em",{parentName:"p"},"Sock Shop")," is a well known microservices application that is widely used in demonstration and testing of microservice environment such as Kubernetes. We'll actually see two different ways of deploying the ",(0,a.kt)("em",{parentName:"p"},"Sock Shop"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"as a plain set of Kubernetes manifests"),(0,a.kt)("li",{parentName:"ul"},"as a helm chart")),(0,a.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"In order to deploy the ",(0,a.kt)("em",{parentName:"p"},"Sock Shop"),", you need to first deploy Weave GitOps to a Kubernetes cluster. If you'd like to test this out locally, you can set up a ",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind")," cluster by following the instructions at the link. Regardless of which cluster you'd like to use, you can install Weave Gitops by first making sure your default kubeconfig points to the chosen cluster and then running ",(0,a.kt)("inlineCode",{parentName:"p"},"wego gitops install"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"> wego gitops install\n\u271a generating manifests\n\u2714 manifests build completed\n\u25ba installing components in wego-system namespace\n\u25ce verifying installation\n\u2714 source-controller: deployment ready\n\u2714 kustomize-controller: deployment ready\n\u2714 helm-controller: deployment ready\n\u2714 notification-controller: deployment ready\n\u2714 image-reflector-controller: deployment ready\n\u2714 image-automation-controller: deployment ready\n\u2714 install finished\narete: /tmp/sock-shop>\n")),(0,a.kt)("p",null,"Once you see ",(0,a.kt)("inlineCode",{parentName:"p"},"install finished"),", your cluster is ready to go with Weave GitOps."),(0,a.kt)("h2",{id:"simple-deployment"},"Simple Deployment"),(0,a.kt)("p",null,"Once you have a cluster running Weave GitOps, it's simple to deploy an application like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microservices-demo/microservices-demo"},(0,a.kt)("em",{parentName:"a"},"Sock Shop")),"."),(0,a.kt)("p",null,"To deploy the ",(0,a.kt)("em",{parentName:"p"},"Sock Shop"),", we need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"wego app add"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"wego app add")," comes in three flavors depending on how you'd like your GitOps support to be managed. Just as GitOps in general lets you synchronize your application definitions with their in-cluster versions via ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," operations and pull requests, Weave GitOps lets you manage the resources that ",(0,a.kt)("em",{parentName:"p"},"do"),' the synchronization in the same way. That might sound a bit "meta" but it allows you to update the management resources themselves via pull requests. You can change things like synchronization intervals or even upgrade the resources via git. Why ',(0,a.kt)("em",{parentName:"p"},"wouldn't")," you want to be able to do those things?"),(0,a.kt)("p",null,"The three storage options for the management resources provided by Weave GitOps are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in a ",(0,a.kt)("inlineCode",{parentName:"li"},".wego")," subdirectory of the same repository as your application (for a simple all-in-one configuration)"),(0,a.kt)("li",{parentName:"ul"},"in a separate configuration repository (allowing you to collect all your management resources together)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"only")," in the cluster (this is mostly intended for quick turnaround and testing)")),(0,a.kt)("p",null,"First, let's fork the ",(0,a.kt)("em",{parentName:"p"},"Sock Shop")," repository. You can simply go to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microservices-demo/microservices-demo"},"repository")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"GitHub")," and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Fork"),"."),(0,a.kt)("p",null,"Now, if we just want to get the ",(0,a.kt)("em",{parentName:"p"},"Sock Shop")," running in the simplest way possible, without modifying anything, we can run a single command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"> wego app add --url ssh://git@github.com/example/microservices-demo.git --path ./deploy/kubernetes/manifests --app-config-url NONE\nAdding application:\n\nName: microservices-demo\nURL: ssh://git@github.com/example/microservices-demo.git\nPath: ./deploy/kubernetes/manifests\nBranch: master\nType: kustomize\n\n\u25ce Checking cluster status\n\u2714 Wego installed\n\u271a Generating Source manifest\n\u271a Generating GitOps automation manifests\n\u271a Generating Application spec manifest\n\u25ba Cloning ssh://git@github.com/example/microservices-demo.git\n\u25ba Writing manifests to disk\n\u25ba Applying manifests to the cluster\n\u25ba Committing and pushing wego updates for application\n\u25ba Pushing app changes to repository\n>\n")),(0,a.kt)("p",null,"Here we see all the pods running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"> kubectl get pods -A\nNAMESPACE            NAME                                           READY   STATUS    RESTARTS   AGE\nkube-system          coredns-558bd4d5db-jgcf2                       1/1     Running   0          9d\nkube-system          coredns-558bd4d5db-sht4v                       1/1     Running   0          9d\nkube-system          etcd-kind-control-plane                        1/1     Running   0          9d\nkube-system          kindnet-tdcd2                                  1/1     Running   0          9d\nkube-system          kube-apiserver-kind-control-plane              1/1     Running   0          9d\nkube-system          kube-controller-manager-kind-control-plane     1/1     Running   0          9d\nkube-system          kube-proxy-mqvbc                               1/1     Running   0          9d\nkube-system          kube-scheduler-kind-control-plane              1/1     Running   0          9d\nlocal-path-storage   local-path-provisioner-547f784dff-mqgjc        1/1     Running   0          9d\nsock-shop            carts-b4d4ffb5c-g82h6                          1/1     Running   0          9d\nsock-shop            carts-db-6c6c68b747-xtlgk                      1/1     Running   0          9d\nsock-shop            catalogue-759cc6b86-jk4gf                      1/1     Running   0          9d\nsock-shop            catalogue-db-96f6f6b4c-865w4                   1/1     Running   0          9d\nsock-shop            front-end-5c89db9f57-99vw6                     1/1     Running   0          9d\nsock-shop            orders-7664c64d75-qlz9d                        1/1     Running   0          9d\nsock-shop            orders-db-659949975f-fggdb                     1/1     Running   0          9d\nsock-shop            payment-7bcdbf45c9-fhl8m                       1/1     Running   0          9d\nsock-shop            queue-master-5f6d6d4796-cs5f6                  1/1     Running   0          9d\nsock-shop            rabbitmq-5bcbb547d7-kfzmn                      2/2     Running   0          9d\nsock-shop            session-db-7cf97f8d4f-bms4c                    1/1     Running   0          9d\nsock-shop            shipping-7f7999ffb7-llkrw                      1/1     Running   0          9d\nsock-shop            user-68df64db9c-7gcg2                          1/1     Running   0          9d\nsock-shop            user-db-6df7444fc-7s6wp                        1/1     Running   0          9d\nwego-system          helm-controller-6dcbff747f-sfp97               1/1     Running   0          9d\nwego-system          image-automation-controller-75f784cfdc-wxwk9   1/1     Running   0          9d\nwego-system          image-reflector-controller-67d6bdcb59-hg2cv    1/1     Running   0          9d\nwego-system          kustomize-controller-5d47cf49fb-b6pmg          1/1     Running   0          9d\nwego-system          notification-controller-7569f7c974-824p9       1/1     Running   0          9d\nwego-system          source-controller-5b976b8dd6-gqrl7             1/1     Running   0          9d\n>\n")),(0,a.kt)("p",null,"We can expose the sock shop in our browser by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"> kubectl port-forward service/front-end -n sock-shop 8080:80\nForwarding from 127.0.0.1:8080 -> 8079\nForwarding from [::1]:8080 -> 8079\n")),(0,a.kt)("p",null,"and if we visit ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),", we'l see:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sock shop",src:n(8928).Z})),(0,a.kt)("p",null,"Pretty simple! Now, let's go back and look at that command in more detail:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"wego app add \\                                                   # (1)\n   --url ssh://git@github.com/example/microservices-demo.git \\   # (2)\n   --path ./deploy/kubernetes/manifests \\                        # (3)\n   --app-config-url NONE                                         # (4)`\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add an application to a cluster under the control of Weave GitOps"),(0,a.kt)("li",{parentName:"ol"},"The application is defined in the GitHub repository at the specified URL"),(0,a.kt)("li",{parentName:"ol"},"Only the manifests at the specified path within the repository are part of the application"),(0,a.kt)("li",{parentName:"ol"},"Don't store the management manifests in GitHub; the ",(0,a.kt)("inlineCode",{parentName:"li"},"app-config-url")," parameter says where to store management manifests. The default location (if no ",(0,a.kt)("inlineCode",{parentName:"li"},"app-config-url")," is specified) is to place them in a hidden directory (",(0,a.kt)("inlineCode",{parentName:"li"},".wego"),") within the application repository itself. An actual URL value causes them to be stored in the repository referenced by the URL. ",(0,a.kt)("inlineCode",{parentName:"li"},"NONE")," means to apply them to the cluster but don't store them in ",(0,a.kt)("inlineCode",{parentName:"li"},"git")," at all.")),(0,a.kt)("p",null,"For a quick turnaround (during development or for testing) ",(0,a.kt)("inlineCode",{parentName:"p"},"NONE")," does the trick. The application is being managed via GitOps, so any changes made in the application repository will be applied to the cluster when they are merged."),(0,a.kt)("p",null,"The application can also be deployed via a helm chart. Applications defined in helm charts can be deployed from either helm repositories or git repositories. In the case of the ",(0,a.kt)("em",{parentName:"p"},"Sock Shop")," application, a helm chart is included in the ",(0,a.kt)("inlineCode",{parentName:"p"},"GitHub")," repository. We only need to make minor changes to the command we used above to switch to a helm chart, but using a helm chart for ",(0,a.kt)("em",{parentName:"p"},"Sock Shop")," requires the target namespace to exist before deploying. By default, the chart would be deployed into the ",(0,a.kt)("inlineCode",{parentName:"p"},"wego-system")," namespace (since we know it exists), but we'd like to put it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"sock-shop")," namespace. So, before we run ",(0,a.kt)("inlineCode",{parentName:"p"},"wego app add"),", we'll run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create namespace sock-shop\nnamespace/sock-shop created\n>\n")),(0,a.kt)("p",null,"Then, we can run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"> wego app add --url ssh://git@github.com/example/microservices-demo.git --deployment-type helm --path ./deploy/kubernetes/helm-chart --helm-release-target-namespace sock-shop --app-config-url NONE\nAdding application:\n\nName: microservices-demo\nURL: ssh://git@github.com/example/microservices-demo.git\nPath: ./deploy/kubernetes/helm-chart\nBranch: master\nType: helm\n\n\u25ce Checking cluster status\n\u2714 Wego installed\n\u271a Generating Source manifest\n\u271a Generating GitOps automation manifests\n\u271a Generating Application spec manifest\n\u25ba Applying manifests to the cluster\n>\n")),(0,a.kt)("p",null,"Examining this command, we see two new arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"wego app add \\\n--url ssh://git@github.com/example/microservices-demo.git \\\n--path ./deploy/kubernetes/helm-chart \\\n--app-config-url NONE \\\n--deployment-type helm \\                   # (1)\n--helm-release-target-namespace sock-shop  # (2)\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Since we're pulling the chart from a git repository, we need to explicitly state that we're using a helm chart. If we were using a helm repository, we would use ",(0,a.kt)("inlineCode",{parentName:"li"},"--chart <chart name>")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"--path <path to application>")," and the deployment type would be unambiguous"),(0,a.kt)("li",{parentName:"ol"},"The application will be deployed in the namespace specified by ",(0,a.kt)("inlineCode",{parentName:"li"},"--helm-release-target-namespace"))),(0,a.kt)("h2",{id:"deployment-with-managed-gitops-resources"},"Deployment with Managed GitOps Resources"),(0,a.kt)("p",null,"As mentioned above, Weave GitOps allows you to also manage your GitOps resources via GitOps. This has several advantages:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Increased control - you can alter parameters such as synchronization interval via updates to git"),(0,a.kt)("li",{parentName:"ol"},"Upgradability - when the Weave GitOps upgrades can be managed via git updates"),(0,a.kt)("li",{parentName:"ol"},"Reviewability and Auditability - Changes performed via git can be tracked; additionally, the default behavior of ",(0,a.kt)("inlineCode",{parentName:"li"},"wego app add")," is to create pull requests for upstream repositories which makes reviewing and auditing straightforward using the same tools used during development"),(0,a.kt)("li",{parentName:"ol"},"Recoverability - if the cluster is restored after failure, the management resources can be restored from git")),(0,a.kt)("p",null,"To run with managed GitOps resources, we need to tell Weave GitOps where to put them. The default behavior of putting them in a private directory within the application repository works fine for repositories under our control (but doesn't work if we want to use either a helm repository or an open source git repository). To use the default, we simply leave off the ",(0,a.kt)("inlineCode",{parentName:"p"},"--app-config-url NONE")," parameter (or, equivalently, use ",(0,a.kt)("inlineCode",{parentName:"p"},"--app-config-url ''"),"). This will store the manifests for our GitOps resources in the ",(0,a.kt)("inlineCode",{parentName:"p"},".wego")," directory within our application repository."),(0,a.kt)("h3",{id:"deployment-with-gitops-resources-in-application-repository"},"Deployment with GitOps Resources in Application Repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"> wego app add --url ssh://git@github.com/example/microservices-demo.git --path ./deploy/kubernetes/manifests --auto-merge\nAdding application:\n\nName: microservices-demo\nURL: ssh://git@github.com/jrryjcksn/microservices-demo.git\nPath: ./deploy/kubernetes/manifests\nBranch: master\nType: kustomize\n\n\u25ce Checking cluster status\n\u2714 Wego installed\n\u271a Generating Source manifest\n\u271a Generating GitOps automation manifests\n\u271a Generating Application spec manifest\n\u25ba Cloning ssh://git@github.com/jrryjcksn/microservices-demo.git\n\u25ba Writing manifests to disk\n\u25ba Applying manifests to the cluster\n\u25ba Committing and pushing wego updates for application\n\u25ba Pushing app changes to repository\n>\n")),(0,a.kt)("p",null,"After running this, not only is the ",(0,a.kt)("em",{parentName:"p"},"Sock Shop")," running in the cluster, but we can observe and modify the GitOps resources for the application. Here's how they look in the application repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"> tree .wego\n.wego\n\u251c\u2500\u2500 apps\n\u2502   \u2514\u2500\u2500 microservices-demo\n\u2502       \u2514\u2500\u2500 app.yaml\n\u2514\u2500\u2500 targets\n    \u2514\u2500\u2500 kind-kind\n        \u2514\u2500\u2500 microservices-demo\n            \u251c\u2500\u2500 microservices-demo-gitops-deploy.yaml\n            \u2514\u2500\u2500 microservices-demo-gitops-source.yaml\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"apps")," directory contains one app (microservices-demo). The ",(0,a.kt)("inlineCode",{parentName:"p"},"app.yaml")," file looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"---\napiVersion: wego.weave.works/v1alpha1\nkind: Application\nmetadata:\n  labels:\n    wego.weave.works/app-identifier: wego-85414ad27cd476d497d715818deda0c6\n  name: microservices-demo\n  namespace: wego-system\nspec:\n  branch: master\n  deployment_type: kustomize\n  path: ./deploy/kubernetes/manifests\n  source_type: git\n  url: ssh://git@github.com/example/microservices-demo.git\n")),(0,a.kt)("p",null,"It describes the application and includes a label derived from the URL, path, and branch to prevent multiple applications from referencing the same source within git."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"targets")," directory has a subdirectory for each cluster containing the GitOps resources for each application deployed to the cluster. The ",(0,a.kt)("inlineCode",{parentName:"p"},"source")," manifest defines the repository to pull from:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"---\napiVersion: source.toolkit.fluxcd.io/v1beta1\nkind: GitRepository\nmetadata:\n  name: microservices-demo\n  namespace: wego-system\nspec:\n  interval: 30s\n  ref:\n    branch: master\n  url: https://github.com/example/microservices-demo.git\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," manifest defines how the specific application information will be pulled from the repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"---\napiVersion: kustomize.toolkit.fluxcd.io/v1beta1\nkind: Kustomization\nmetadata:\n  name: microservices-demo\n  namespace: wego-system\nspec:\n  interval: 1m0s\n  path: ./deploy/kubernetes/manifests\n  prune: true\n  sourceRef:\n    kind: GitRepository\n    name: microservices-demo\n  validation: client\n")),(0,a.kt)("p",null,"(This will look different in the case of a helm chart; it will hold a ",(0,a.kt)("inlineCode",{parentName:"p"},"HelmRelease")," rather than a ",(0,a.kt)("inlineCode",{parentName:"p"},"Kustomization"),")"),(0,a.kt)("h3",{id:"deployment-with-gitops-resources-in-separate-configuration-repository"},"Deployment with GitOps Resources in Separate Configuration Repository"),(0,a.kt)("p",null,"If you'd like to manage GitOps resources for a helm repository or a git repository not under your control, or you'd like to manage all of your GitOps resources together, you can store them in a separate configuration repository by passing a URL to ",(0,a.kt)("inlineCode",{parentName:"p"},"--app-config-url"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"> wego app add --url ssh://git@github.com/example/microservices-demo.git --path ./deploy/kubernetes/manifests --app-config-url ssh://git@github.com/example/external.git --auto-merge\nAdding application:\n\nName: microservices-demo\nURL: ssh://git@github.com/example/microservices-demo.git\nPath: ./deploy/kubernetes/manifests\nBranch: master\nType: kustomize\n\n\u25ce Checking cluster status\n\u2714 Wego installed\n\u271a Generating Source manifest\n\u271a Generating GitOps automation manifests\n\u271a Generating Application spec manifest\n\u25ba Writing manifests to disk\n\u25ba Applying manifests to the cluster\n\u25ba Committing and pushing wego updates for application\n\u25ba Pushing app changes to repository\n>\n")),(0,a.kt)("p",null,"After running this command, the ",(0,a.kt)("inlineCode",{parentName:"p"},"external")," repository will contain (assuming it was empty to start):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"> tree\n.\n\u251c\u2500\u2500 apps\n\u2502   \u2514\u2500\u2500 microservices-demo\n\u2502       \u2514\u2500\u2500 app.yaml\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 targets\n    \u2514\u2500\u2500 kind-kind\n        \u2514\u2500\u2500 microservices-demo\n            \u251c\u2500\u2500 microservices-demo-gitops-deploy.yaml\n            \u2514\u2500\u2500 microservices-demo-gitops-source.yaml\n")),(0,a.kt)("p",null,"Ignoring the ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md")," file, the rest of the repository contents are the same as the contents of the ",(0,a.kt)("inlineCode",{parentName:"p"},".wego")," directory in the previous example. Since this repository is ",(0,a.kt)("em",{parentName:"p"},"not")," an application repository, though, the contents are at the top level."),(0,a.kt)("h3",{id:"using-pull-requests"},"Using Pull Requests"),(0,a.kt)("p",null,"We've reached the all-singing, all-dancing case now. This is the way most people will actually use Weave GitOps in a real environment. Whether you use the default application repository model or have a separate configuration repository, you can support reviewing and auditing changes to your GitOps resources via ",(0,a.kt)("em",{parentName:"p"},"Pull Requests"),". (Also, as a practical matter, many people don't allow direct merges to their repositories without pull requests anyway)"),(0,a.kt)("p",null,"In order to use pull requests for your GitOps resources, you simply need to leave off the ",(0,a.kt)("inlineCode",{parentName:"p"},"--auto-merge")," flag we've been passing since we started storing our GitOps resources (In other words, using pull requests is the default). For example, if we run the previous command without ",(0,a.kt)("inlineCode",{parentName:"p"},"--auto-merge"),", we see different output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"> wego app add --url ssh://git@github.com/example/microservices-demo.git --path ./deploy/kubernetes/manifests --app-config-url ssh://git@github.com/example/external.git --auto-merge\nAdding application:\n\nName: microservices-demo\nURL: ssh://git@github.com/example/microservices-demo.git\nPath: ./deploy/kubernetes/manifests\nBranch: master\nType: kustomize\n\n\u25ce Checking cluster status\n\u2714 Wego installed\n\u271a Generating Source manifest\n\u271a Generating GitOps automation manifests\n\u271a Generating Application spec manifest\nPull Request created: https://github.com/example/external/pull/7\n\n\u25ba Applying manifests to the cluster\n\u25ba Committing and pushing wego updates for application\n\u2714 App is up to date\n")),(0,a.kt)("p",null,"Note the line: ",(0,a.kt)("inlineCode",{parentName:"p"},"Pull Request created: https://github.com/example/external/pull/7"),". If we were to go to that GitHub repository and merge the pull request, the app would then be deployed."),(0,a.kt)("p",null,"(The lines below the pull request line refer to updating the GitOps resources that ",(0,a.kt)("em",{parentName:"p"},"manage")," the GitOps resources which is a separate topic for another time)"),(0,a.kt)("p",null,"Hopefully, this example has given you a good understanding of how to deploy applications with Weave GitOps. Thanks for reading!"))}m.isMDXComponent=!0},8928:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sock-shop-d6f3139b052fef35a1d86a6712b0e6bd.png"}}]);