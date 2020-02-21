(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{209:function(e,a,t){"use strict";t.r(a),t.d(a,"Info",function(){return c}),t.d(a,"pageQuery",function(){return i});var n=t(0),l=t.n(n),r=t(232),c=function(e){var a=e.data,t=e.location,n=e.pageContext;return l.a.createElement(r.a,{data:a,location:t,navigation:n.navigation})},i="523776614";a.default=c},224:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(66),c=t.n(r);t.d(a,"a",function(){return c.a});t(226),t(8).default.enqueue,l.a.createContext({})},226:function(e,a,t){var n;e.exports=(n=t(228))&&n.default||n},228:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),l=t.n(n),r=t(91);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},229:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(197),t(224)),c=function(e){var a=e.mobile,t=void 0!==a&&a;return n.createElement("ul",{className:"links "+(t?"mobile-menu":"desktop-menu")},n.createElement("li",{className:"navigation-link"},n.createElement("a",{target:"_blank",href:"https://github.com/deepstreamIO/deepstream.io"},"github")),["guides","tutorials","docs","blog"].map(function(e){return n.createElement("li",{className:"navigation-link",key:e},n.createElement(r.a,{to:"/"+e+"/",activeClassName:"active"},e))}))},i=t(230),m=t(225),s=t.n(m),o=function(e){var a=e.open;return n.createElement("div",{className:s()("mobile-menu",{open:a})},n.createElement("div",{className:s()("nav mobile-nav",{open:a})},n.createElement(c,null)))},u=t(227),d=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1],l=Object(n.useCallback)(function(){return t(!a)},[a]);return n.createElement("header",{className:"layout-header"},n.createElement("nav",null,n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"header-logo"},n.createElement("a",{href:"/",id:"logo"},n.createElement("span",null,"deepstream",n.createElement("em",null,".io")))),n.createElement("span",{className:"menu-button menu-icon"},n.createElement(i.c,{onClick:l})),n.createElement("div",{className:"nav desktop-nav"},n.createElement("span",{className:"algolia-docsearch-wrapper"},n.createElement("input",{id:"algolia-docsearch"}),n.createElement(u.h,null)),n.createElement(c,null)))),n.createElement(o,{open:a}))},E=(t(198),function(e){var a=e.hasSideBar;return n.createElement("footer",{className:s()("layout-footer",{"with-side-bar":a})},n.createElement("div",{className:"cols"},n.createElement("div",{className:"col col-a"},n.createElement("img",{src:"/images/deepstream-elton-logo-grey.png"})),n.createElement("div",{className:"col col-c"},n.createElement("h4",null,"CONTENT"),n.createElement(r.a,{to:"/install/"},n.createElement(u.f,null),n.createElement("span",null,"Install")),n.createElement(r.a,{to:"/tutorials/"},n.createElement(u.c,null),n.createElement("span",null,"Tutorials")),n.createElement(r.a,{to:"/docs/"},n.createElement(u.e,null),n.createElement("span",null,"Documentation")),n.createElement(r.a,{to:"/blog/"},n.createElement(u.d,null),n.createElement("span",null,"Blog"))),n.createElement("div",{className:"col col-d"},n.createElement("h4",null,"COMMUNITY"),n.createElement("a",{target:"_blank",href:"https://twitter.com/deepstreamHub"},n.createElement(u.k,null),n.createElement("span",null,"Twitter")),n.createElement("a",{target:"_blank",href:"https://github.com/deepstreamIO"},n.createElement(u.g,null),n.createElement("span",null,"GitHub")),n.createElement("a",{target:"_blank",href:"https://deepstreamio-slack.herokuapp.com/"},n.createElement(u.i,null),n.createElement("span",null,"Slack")),n.createElement("a",{target:"_blank",href:"http://stackoverflow.com/questions/tagged/deepstream.io"},n.createElement(u.j,null),n.createElement("span",null,"Stack Overflow"))),n.createElement("div",{className:"col col-b"},n.createElement("h4",null,"COMPANY"),n.createElement("ul",null,n.createElement("li",null,"deepstreamHub GmbH .i.L."),n.createElement("li",null,"c/o Office Club"),n.createElement("li",null,"Pappelallee 78/79"),n.createElement("li",null,"10437 Berlin"),n.createElement("li",null,"Germany"),n.createElement("li",null,"info@deepstreamHub.com")))),n.createElement("div",{className:"copyright"},"© ",new Date(Date.now()).getFullYear()," deepstreamHub GmbH .i.L."))});t.d(a,"a",function(){return v});var v=function(e){var a=e.children,t=e.pageClass,n=e.hasSideBar,r=void 0!==n&&n;return l.a.createElement("div",{className:t},l.a.createElement(d,null),l.a.createElement("div",null,a),l.a.createElement(E,{hasSideBar:r}))}},232:function(e,a,t){"use strict";t(134),t(135),t(29),t(30),t(14),t(50),t(133),t(38),t(200);var n=t(201),l=t.n(n),r=t(0),c=t.n(r),i=t(229),m=(t(13),t(202)),s=t.n(m),o=t(225),u=t.n(o),d=t(224),E=t(230),v=function(e){var a=e.numbers,t=e.item,n=e.navigation,l=e.activePath,r=e.setOpen,i=e.open,m=e.openSubNav,o=e.setOpenSubNav;return c.a.createElement("div",{className:s.a.sectionLevel},c.a.createElement("label",{onClick:function(){return r(i?null:t)}},t.replace(/-/g," ")),i?c.a.createElement(E.a,null):c.a.createElement(E.b,null),i&&f(a,n[t],1,l,void 0,void 0,m,o))},p=function(e){var a=e.numbers,t=e.item,n=e.navigation,l=e.activePath,r=e.openSubNav,i=e.setOpenSubNav;return l.includes("guide")?c.a.createElement("div",{className:s.a.subsectionLevel},c.a.createElement("label",{onClick:function(){return i(r?null:t)}},t.replace(/-/g," ")),r&&f(a,n[t],2,l)):c.a.createElement("div",{className:s.a.subsectionLevel},c.a.createElement("label",null,t.replace(/-/g," ")),f(a,n[t],2,l))},g=function(e){var a,t=e.index,n=e.navigation,l=e.activePath;return c.a.createElement("div",{key:n.slug,className:u()(s.a.leaf,(a={},a[s.a.activeLeaf]=l===n.slug,a))},c.a.createElement(d.a,{to:n.slug},t,n.title))},f=function(e,a,t,n,l,r,i,m){return void 0===l&&(l=""),Object.keys(a).sort(function(e,t){return a[e].slug&&a[e].slug.includes("blog")?a[t].order-a[e].order:a[e].order-a[t].order}).map(function(s,o){return"order"===s?null:a[s].leaf?c.a.createElement(g,{key:a[s].slug,index:e?o+") ":"- ",navigation:a[s],activePath:n}):0===t?c.a.createElement(v,{key:s,numbers:e,item:s,navigation:a,activePath:n,setOpen:r,open:s===l,openSubNav:i,setOpenSubNav:m}):c.a.createElement(p,{key:s,numbers:e,item:s,navigation:a,activePath:n,openSubNav:i===s,setOpenSubNav:m})})},b=function(e){var a=e.numbers,t=void 0!==a&&a,n=e.navigation,l=e.currentLocation,i=Object(r.useState)(l.pathname.split("/")[2]),m=i[0],o=i[1],u=Object(r.useState)(l.pathname.split("/")[3]),d=u[0],E=u[1];return c.a.createElement("div",{className:s.a.sidebar},c.a.createElement("div",{className:s.a.hack},f(t,n,0,l.pathname,m,o,d,E)))},h=t(227),N=t(203),k=t.n(N),w=function(e){var a=e.gitHubLink;return r.createElement("div",{className:k.a.wip},r.createElement("img",{className:k.a.image,src:"/images/eltons/elton-docs.svg"}),r.createElement("p",{className:k.a.help},"This page needs to be improved/might be out of date! ",r.createElement("a",{className:k.a.editLink,href:a},"Raise a PR")," if you feel like adding a few details or totally revamping it."))},O=function(e){var a=e.item;return a.slug?c.a.createElement("div",{className:l.a.nextItem},c.a.createElement(d.a,{to:a.slug},a.title),c.a.createElement(h.b,null)):null},S=function(e){var a=e.item;return a.slug?c.a.createElement("div",{className:l.a.previousItem},c.a.createElement(h.a,null),c.a.createElement(d.a,{to:a.slug},a.title)):null},y=function(e){var a=e.action,t=e.version;return c.a.createElement("div",{className:l.a.versionchanged},a," in version ",t)};a.a=function(e){var a=e.numbers,t=void 0!==a&&a,n=e.data,r=e.location,m=e.navigation,s=n.markdownRemark.html,o=n.markdownRemark.frontmatter,u=o.title,d=o.description,E=o.wip,v=o.addedInVersion,p=o.deprecatedInVersion,g=o.removedInVersion,f=n.markdownRemark.fields.githubLink,N=null,k=null,L=r.pathname.split("/"),C=m[L[2]];if(C){var I=Object.keys(C).filter(function(e){return"order"!==e}).sort(function(e,a){return C[e].slug&&C[e].slug.includes("blog")?C[a].order-C[e].order:C[e].order-C[a].order}),H=I.indexOf(L[3]);H>0&&(N=C[I[H-1]]),H<I.length-1&&(k=C[I[H+1]])}return c.a.createElement(i.a,{location:r,hasSideBar:!0},c.a.createElement("div",{className:l.a.wrapper},c.a.createElement("article",{className:l.a.article},c.a.createElement("header",{className:l.a.header},c.a.createElement("h1",{className:l.a.title},u,c.a.createElement("a",{className:l.a.githubEdit,href:f},c.a.createElement(h.g,null))),d&&c.a.createElement("h3",{className:l.a.description},d),E&&c.a.createElement(w,{gitHubLink:f}),v&&c.a.createElement(y,{action:"Added",version:"5"}),p&&c.a.createElement(y,{action:"Deprecated",version:"5"}),g&&c.a.createElement(y,{action:"Removed",version:"5"})),c.a.createElement("div",{className:l.a.content+" content",dangerouslySetInnerHTML:{__html:s}}),c.a.createElement("footer",null,c.a.createElement("div",null,N&&c.a.createElement(S,{item:N}),k&&c.a.createElement(O,{item:k})))),c.a.createElement(b,{numbers:t,navigation:m,currentLocation:r})))}}}]);
//# sourceMappingURL=component---src-templates-info-tsx-e1500ae034a189f7132e.js.map