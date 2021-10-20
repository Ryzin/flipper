"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3136,5891],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){return function(t){var a=c(t.components);return n.createElement(e,s({},t,{components:a}))}},c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||s;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96876:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>p,toc:()=>u,default:()=>d});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=["components"],o={},l=void 0,p={type:"mdx",permalink:"/docs/plugins/databases/setup",source:"@site/src/embedded-pages/docs/plugins/databases/setup.mdx"},u=[{value:"Android",id:"android",children:[]}],c={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.mdx)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,"To use the databases plugin, you need to add the plugin to your Flipper client instance. The plugin is currently only available for Android."),(0,s.mdx)("h2",{id:"android"},"Android"),(0,s.mdx)("p",null,"Instantiate and add the plugin in ",(0,s.mdx)("inlineCode",{parentName:"p"},"FlipperClient"),"."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.databases.DatabasesFlipperPlugin;\n\nclient.addPlugin(new DatabasesFlipperPlugin(context));\n")),(0,s.mdx)("p",null,"By default it will list all sqlite databases returned by the context. If you are storing a sqlite database somewhere else, you can specify a ",(0,s.mdx)("inlineCode",{parentName:"p"},"File")," to it:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},'client.addPlugin(new DatabasesFlipperPlugin(new SqliteDatabaseDriver(context, new SqliteDatabaseProvider() {\n    @Override\n    public List<File> getDatabaseFiles() {\n        List<File> databaseFiles = new ArrayList<>();\n        for (String databaseName : context.databaseList()) {\n            databaseFiles.add(context.getDatabasePath(databaseName));\n        }\n        databaseFiles.add("...path_to_your_db...")\n        return databaseFiles;\n    }\n})));\n')),(0,s.mdx)("p",null,"If you use a different type of database other than sqlite, you can implement a driver to be able to access it via Flipper. "),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"client.addPlugin(new DatabasesFlipperPlugin(new DatabaseDriver(context) {\n    @Override\n    public List getDatabases() {\n        return null;\n    }\n\n    @Override\n    public List<String> getTableNames(DatabaseDescriptor databaseDescriptor) {\n        return null;\n    }\n\n    @Override\n    public DatabaseGetTableDataResponse getTableData(DatabaseDescriptor databaseDescriptor, String table, String order, boolean reverse, int start, int count) {\n        return null;\n    }\n\n    @Override\n    public DatabaseGetTableStructureResponse getTableStructure(DatabaseDescriptor databaseDescriptor, String table) {\n        return null;\n    }\n\n    @Override\n    public DatabaseExecuteSqlResponse executeSQL(DatabaseDescriptor databaseDescriptor, String query) {\n        return null;\n    }\n    }));\n")))}d.isMDXComponent=!0},53237:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>u,toc:()=>c,default:()=>b});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=a(96876),o=["components"],l={id:"databases",title:"Databases Plugin Setup",sidebar_label:"Databases",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/databases/docs/setup.mdx"},p=void 0,u={unversionedId:"setup/plugins/databases",id:"setup/plugins/databases",isDocsHomePage:!1,title:"Databases Plugin Setup",description:"",source:"@site/../docs/setup/plugins/databases.mdx",sourceDirName:"setup/plugins",slug:"/setup/plugins/databases",permalink:"/docs/setup/plugins/databases",editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/databases/docs/setup.mdx",tags:[],version:"current",frontMatter:{id:"databases",title:"Databases Plugin Setup",sidebar_label:"Databases",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/databases/docs/setup.mdx"},sidebar:"setup",previous:{title:"Crash Reporter",permalink:"/docs/setup/plugins/crash-reporter"},next:{title:"Images",permalink:"/docs/setup/plugins/fresco"}},c=[],d={toc:c};function b(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.mdx)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)(i.default,{mdxType:"Article"}))}b.isMDXComponent=!0}}]);