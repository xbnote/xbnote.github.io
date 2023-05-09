(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{454:function(e,t,o){},455:function(e,t,o){},456:function(e,t,o){},459:function(e,t,o){},460:function(e,t,o){"use strict";o(17);var a=o(0),n=o(452),r=o(451),s=Object(a.defineComponent)({components:{RecoIcon:n.b},props:{pageInfo:{type:Object,default:()=>({})},currentTag:{type:String,default:""},showAccessNumber:{type:Boolean,default:!1}},setup(e,t){const o=Object(r.a)();return{numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"},goTags:e=>{o.$route.path!==`/tag/${e}/`&&o.$router.push({path:`/tag/${e}/`})},formatDateValue:e=>new Intl.DateTimeFormat(o.$lang).format(new Date(e))}}}),i=(o(461),o(1)),c=Object(i.a)(s,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[e.pageInfo.frontmatter.author||e.$themeConfig.author?t("reco-icon",{attrs:{icon:"reco-account"}},[t("span",[e._v(e._s(e.pageInfo.frontmatter.author||e.$themeConfig.author))])]):e._e(),e._v(" "),e.pageInfo.frontmatter.date?t("reco-icon",{attrs:{icon:"reco-date"}},[t("span",[e._v(e._s(e.formatDateValue(e.pageInfo.frontmatter.date)))])]):e._e(),e._v(" "),!0===e.showAccessNumber?t("reco-icon",{attrs:{icon:"reco-eye"}},[t("AccessNumber",{attrs:{idVal:e.pageInfo.path,numStyle:e.numStyle}})],1):e._e(),e._v(" "),e.pageInfo.frontmatter.tags?t("reco-icon",{staticClass:"tags",attrs:{icon:"reco-tag"}},e._l(e.pageInfo.frontmatter.tags,(function(o,a){return t("span",{key:a,staticClass:"tag-item",class:{active:e.currentTag==o},on:{click:function(t){return t.stopPropagation(),e.goTags(o)}}},[e._v(e._s(o))])})),0):e._e()],1)}),[],!1,null,"1e62957f",null);t.a=c.exports},461:function(e,t,o){"use strict";o(454)},462:function(e,t,o){"use strict";o(455)},463:function(e,t,o){"use strict";o(456)},464:function(e,t,o){"use strict";var a=o(0),n={methods:{_getStoragePage(){const e=window.location.pathname,t=JSON.parse(sessionStorage.getItem("currentPage"));return null===t||e!==t.path?(sessionStorage.setItem("currentPage",JSON.stringify({page:1,path:""})),1):parseInt(t.page)},_setStoragePage(e){const t=window.location.pathname;sessionStorage.setItem("currentPage",JSON.stringify({page:e,path:t}))}}},r=(o(17),o(452)),s=o(460),i=Object(a.defineComponent)({components:{PageInfo:s.a,RecoIcon:r.b},props:["item","currentPage","currentTag"]}),c=(o(462),o(1)),l=Object(c.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"abstract-item",on:{click:function(t){return e.$router.push(e.item.path)}}},[e.item.frontmatter.sticky?t("reco-icon",{attrs:{icon:"reco-sticky"}}):e._e(),e._v(" "),t("div",{staticClass:"title"},[e.item.frontmatter.keys?t("reco-icon",{attrs:{icon:"reco-lock"}}):e._e(),e._v(" "),t("router-link",{attrs:{to:e.item.path}},[e._v(e._s(e.item.title))])],1),e._v(" "),t("div",{staticClass:"abstract",domProps:{innerHTML:e._s(e.item.excerpt)}}),e._v(" "),t("PageInfo",{attrs:{pageInfo:e.item,currentTag:e.currentTag}})],1)}),[],!1,null,"3fa1a62e",null).exports,u=o(451),p=Object(a.defineComponent)({mixins:[n],components:{NoteAbstractItem:l},props:["data","currentTag"],setup(e,t){const o=Object(u.a)(),{data:n}=Object(a.toRefs)(e),r=Object(a.ref)(1),s=Object(a.computed)(()=>{const e=(r.value-1)*o.$perPage,t=r.value*o.$perPage;return n.value.slice(e,t)});return Object(a.onMounted)(()=>{r.value=o._getStoragePage()||1}),{currentPage:r,currentPageData:s,getCurrentPage:e=>{r.value=e,o._setStoragePage(e),t.emit("paginationChange",e)}}},watch:{$route(){this.currentPage=this._getStoragePage()||1}}}),m=(o(463),Object(c.a)(p,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"abstract-wrapper"},[e._l(e.currentPageData,(function(o){return t("NoteAbstractItem",{key:o.path,attrs:{item:o,currentPage:e.currentPage,currentTag:e.currentTag}})})),e._v(" "),t("pagation",{staticClass:"pagation",attrs:{total:e.data.length,currentPage:e.currentPage},on:{getCurrentPage:e.getCurrentPage}})],2)}),[],!1,null,"7c5b78f0",null));t.a=m.exports},466:function(e,t,o){"use strict";o(459)},468:function(e,t,o){"use strict";var a=o(0),n=o(58),r=o(451),s=Object(a.defineComponent)({props:{currentTag:{type:String,default:""}},setup(e,t){const o=Object(r.a)();return{tags:Object(a.computed)(()=>[{name:o.$recoLocales.all,path:"/tag/"},...o.$tagesList]),tagClick:e=>{t.emit("getCurrentTag",e)},getOneColor:n.b}}}),i=(o(466),o(1)),c=Object(i.a)(s,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"tags"},e._l(e.tags,(function(o,a){return t("span",{directives:[{name:"show",rawName:"v-show",value:!o.pages||o.pages&&o.pages.length>0,expression:"!item.pages || (item.pages && item.pages.length > 0)"}],key:a,class:{active:o.name==e.currentTag},style:{backgroundColor:e.getOneColor()},on:{click:function(t){return e.tagClick(o)}}},[e._v(e._s(o.name))])})),0)}),[],!1,null,"d30eaa92",null);t.a=c.exports},490:function(e,t,o){},491:function(e,t,o){},492:function(e,t,o){},493:function(e,t,o){},494:function(e,t,o){},495:function(e,t,o){},496:function(e,t,o){},528:function(e,t,o){"use strict";o(490)},529:function(e,t,o){"use strict";o(491)},530:function(e,t,o){e.exports=o.p+"assets/img/bg.2cfdbb33.svg"},531:function(e,t,o){"use strict";o(492)},532:function(e,t,o){"use strict";o(493)},533:function(e){e.exports=JSON.parse('{"a":"1.6.16"}')},534:function(e,t,o){"use strict";o(494)},535:function(e,t,o){"use strict";o(495)},536:function(e,t,o){"use strict";o(496)},541:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o(469),r=o(452),s=o(451),i=Object(a.defineComponent)({components:{NavLink:n.a,ModuleTransition:r.a},setup(e,t){const o=Object(s.a)();return{recoShowModule:Object(s.b)(),actionLink:Object(a.computed)(()=>o&&{link:o.$frontmatter.actionLink,text:o.$frontmatter.actionText}),heroImageStyle:Object(a.computed)(()=>o.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"})}}}),c=(o(528),o(1)),l=Object(c.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home"},[t("div",{staticClass:"hero"},[t("ModuleTransition",[e.recoShowModule&&e.$frontmatter.heroImage?t("img",{style:e.heroImageStyle||{},attrs:{src:e.$withBase(e.$frontmatter.heroImage),alt:"hero"}}):e._e()]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.04"}},[e.recoShowModule&&null!==e.$frontmatter.heroText?t("h1",{style:{marginTop:e.$frontmatter.heroImage?"0px":"140px"}},[e._v("\n        "+e._s(e.$frontmatter.heroText||e.$title||"vuePress-theme-reco")+"\n      ")]):e._e()]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.08"}},[e.recoShowModule&&null!==e.$frontmatter.tagline?t("p",{staticClass:"description"},[e._v("\n        "+e._s(e.$frontmatter.tagline||e.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")]):e._e()]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.16"}},[e.recoShowModule&&e.$frontmatter.actionText&&e.$frontmatter.actionLink?t("p",{staticClass:"action"},[t("NavLink",{staticClass:"action-button",attrs:{item:e.actionLink}})],1):e._e()])],1),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.24"}},[e.recoShowModule&&e.$frontmatter.features&&e.$frontmatter.features.length?t("div",{staticClass:"features"},e._l(e.$frontmatter.features,(function(o,a){return t("div",{key:a,staticClass:"feature"},[t("h2",[e._v(e._s(o.title))]),e._v(" "),t("p",[e._v(e._s(o.details))])])})),0):e._e()]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.32"}},[t("Content",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports,u=(o(17),o(468)),p=o(484),m=o.n(p),d=o(58);const g=()=>{const e=Object(s.a)(),t=Object(a.ref)(!0),o=Object(a.reactive)({left:0,top:0});return Object(a.onMounted)(()=>{t.value=!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)}),{popupWindowStyle:o,showDetail:a=>{const n=a.target;n.querySelector(".popup-window-wrapper").style.display="block";const r=n.querySelector(".popup-window"),s=document.querySelector(".info-wrapper"),{clientWidth:i}=n,{clientWidth:c,clientHeight:l}=r;if(t)o.left=(i-c)/2+"px",o.top=-l+"px",s.style.overflow="visible",e.$nextTick(()=>{(e=>{const{offsetWidth:t}=document.body,{x:a,width:n}=e.getBoundingClientRect(),r=t-(a+n);if(r<0){const{offsetLeft:t}=e;o.left=t+r+"px"}})(r)});else{const e=function(e){const t=document,o=e.getBoundingClientRect();let a=o.left,n=o.top;return a+=t.documentElement.scrollLeft||t.body.scrollLeft,n+=t.documentElement.scrollTop||t.body.scrollTop,{left:a,top:n}};s.style.overflow="hidden";const t=e(n).left-e(s).left;o.left=-t+(s.clientWidth-r.clientWidth)/2+"px",o.top=-l+"px"}},hideDetail:e=>{e.target.querySelector(".popup-window-wrapper").style.display="none"}}};var h=Object(a.defineComponent)({setup(e,t){const o=Object(s.a)(),{popupWindowStyle:n,showDetail:r,hideDetail:i}=g();return{dataAddColor:Object(a.computed)(()=>{const{friendLink:e=[]}=o&&o.$themeConfig;return e.map(e=>(e.color=Object(d.b)(),e))}),popupWindowStyle:n,showDetail:r,hideDetail:i,getImgUrl:e=>{const{logo:t="",email:a=""}=e;return t&&/^http/.test(t)?t:t&&!/^http/.test(t)?o.$withBase(t):`//1.gravatar.com/avatar/${m()(a||"")}?s=50&amp;d=mm&amp;r=x`}}}}),f=(o(529),Object(c.a)(h,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"friend-link-wrapper"},e._l(e.dataAddColor,(function(o,a){return t("div",{key:a,staticClass:"friend-link-item",attrs:{target:"_blank"},on:{mouseenter:function(t){return e.showDetail(t)},mouseleave:function(t){return e.hideDetail(t)}}},[t("span",{staticClass:"list-style",style:{backgroundColor:o.color}}),e._v("\n    "+e._s(o.title)+"\n    "),t("transition",{attrs:{name:"fade"}},[t("div",{staticClass:"popup-window-wrapper"},[t("div",{ref:"popupWindow",refInFor:!0,staticClass:"popup-window",style:e.popupWindowStyle},[t("div",{staticClass:"logo"},[t("img",{attrs:{src:e.getImgUrl(o)}})]),e._v(" "),t("div",{staticClass:"info"},[t("div",{staticClass:"title"},[t("h4",[e._v(e._s(o.title))]),e._v(" "),t("a",{staticClass:"btn-go",style:{backgroundColor:o.color},attrs:{href:o.link,target:"_blank"}},[e._v("GO")])]),e._v(" "),o.desc?t("p",[e._v(e._s(o.desc))]):e._e()])])])])],1)})),0)}),[],!1,null,"deb85662",null).exports),v=o(464),_=o(502),b=Object(a.defineComponent)({components:{NoteAbstract:v.a,TagList:u.a,FriendLink:f,ModuleTransition:r.a,PersonalInfo:_.a,RecoIcon:r.b},setup(e,t){const n=Object(s.a)(),r=Object(a.reactive)({recoShow:!1,heroHeight:0}),i=Object(s.b)(),c=Object(a.computed)(()=>n.$frontmatter.heroImageStyle||{}),l=Object(a.computed)(()=>{const e={textAlign:"center",overflow:"hidden",background:`url(${n.$frontmatter.bgImage?n.$withBase(n.$frontmatter.bgImage):o(530)}) center/cover no-repeat`},{bgImageStyle:t}=n.$frontmatter;return t?{...e,...t}:e});return Object(a.onMounted)(()=>{r.heroHeight=document.querySelector(".hero").clientHeight,r.recoShow=!0}),{recoShowModule:i,heroImageStyle:c,bgImageStyle:l,...Object(a.toRefs)(r),getOneColor:d.b}},methods:{paginationChange(e){setTimeout(()=>{window.scrollTo(0,this.heroHeight)},100)},getPagesByTags(e){this.$router.push({path:e.path})}}}),C=(o(531),Object(c.a)(b,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home-blog"},[t("div",{staticClass:"hero",style:{...e.bgImageStyle}},[t("div",[t("ModuleTransition",[e.recoShowModule&&e.$frontmatter.heroImage?t("img",{staticClass:"hero-img",style:e.heroImageStyle||{},attrs:{src:e.$withBase(e.$frontmatter.heroImage),alt:"hero"}}):e._e()]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.04"}},[e.recoShowModule&&null!==e.$frontmatter.heroText?t("h1",[e._v("\n          "+e._s(e.$frontmatter.heroText||e.$title||"vuePress-theme-reco")+"\n        ")]):e._e()]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.08"}},[e.recoShowModule&&null!==e.$frontmatter.tagline?t("p",{staticClass:"description"},[e._v("\n          "+e._s(e.$frontmatter.tagline||e.$description||"Welcome to your vuePress-theme-reco site")+"\n        ")]):e._e()])],1)]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.16"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}],staticClass:"home-blog-wrapper"},[t("div",{staticClass:"blog-list"},[t("note-abstract",{attrs:{data:e.$recoPosts},on:{paginationChange:e.paginationChange}})],1),e._v(" "),t("div",{staticClass:"info-wrapper"},[t("PersonalInfo"),e._v(" "),t("h4",[t("reco-icon",{attrs:{icon:"reco-category"}}),e._v(" "+e._s(e.$recoLocales.category))],1),e._v(" "),t("ul",{staticClass:"category-wrapper"},e._l(this.$categories.list,(function(o,a){return t("li",{key:a,staticClass:"category-item"},[t("router-link",{attrs:{to:o.path}},[t("span",{staticClass:"category-name"},[e._v(e._s(o.name))]),e._v(" "),t("span",{staticClass:"post-num",style:{backgroundColor:e.getOneColor()}},[e._v(e._s(o.pages.length))])])],1)})),0),e._v(" "),t("hr"),e._v(" "),0!==e.$tags.list.length?t("h4",[t("reco-icon",{attrs:{icon:"reco-tag"}}),e._v(" "+e._s(e.$recoLocales.tag))],1):e._e(),e._v(" "),t("TagList",{on:{getCurrentTag:e.getPagesByTags}}),e._v(" "),e.$themeConfig.friendLink&&0!==e.$themeConfig.friendLink.length?t("h4",[t("reco-icon",{attrs:{icon:"reco-friend"}}),e._v(" "+e._s(e.$recoLocales.friendLink))],1):e._e(),e._v(" "),t("FriendLink")],1)])]),e._v(" "),t("ModuleTransition",{attrs:{delay:"0.24"}},[t("Content",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports),w=o(460),$=o(25);function y(e,t,o){const a=[];!function e(t,o){for(let a=0,n=t.length;a<n;a++)"group"===t[a].type?e(t[a].children||[],o):o.push(t[a])}(t,a);for(let t=0;t<a.length;t++){const n=a[t];if("page"===n.type&&n.path===decodeURIComponent(e.path))return a[t+o]}}var O=Object(a.defineComponent)({components:{PageInfo:w.a},props:["sidebarItems"],setup(e,t){const o=Object(s.a)(),{sidebarItems:n}=Object(a.toRefs)(e),r=Object(s.b)(),i=Object(a.computed)(()=>{const{isShowComments:e}=o.$frontmatter,{showComment:t}=o.$themeConfig.valineConfig||{showComment:!0};return!1!==t&&!1!==e||!1===t&&!0===e}),c=Object(a.computed)(()=>{const{$themeConfig:{valineConfig:e},$themeLocaleConfig:{valineConfig:t}}=o||{},a=t||e;return a&&0!=a.visitor}),l=Object(a.computed)(()=>!1!==o.$themeConfig.lastUpdated&&o.$page.lastUpdated),u=Object(a.computed)(()=>"string"==typeof o.$themeLocaleConfig.lastUpdated?o.$themeLocaleConfig.lastUpdated:"string"==typeof o.$themeConfig.lastUpdated?o.$themeConfig.lastUpdated:"Last Updated"),p=Object(a.computed)(()=>{const e=o.$frontmatter.prev;return!1===e?void 0:e?Object($.k)(o.$site.pages,e,o.$route.path):(t=o.$page,a=n.value,y(t,a,-1));var t,a}),m=Object(a.computed)(()=>{const e=o.$frontmatter.next;return!1===m?void 0:e?Object($.k)(o.$site.pages,e,o.$route.path):(t=o.$page,a=n.value,y(t,a,1));var t,a}),d=Object(a.computed)(()=>{if(!1===o.$frontmatter.editLink)return!1;const{repo:e,editLinks:t,docsDir:a="",docsBranch:n="master",docsRepo:r=e}=o.$themeConfig;return r&&t&&o.$page.relativePath?function(e,t,o,a,n){if(/bitbucket.org/.test(e)){return($.i.test(t)?t:e).replace($.c,"")+"/src"+`/${a}/`+(o?o.replace($.c,"")+"/":"")+n+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}return($.i.test(t)?t:"https://github.com/"+t).replace($.c,"")+"/edit"+`/${a}/`+(o?o.replace($.c,"")+"/":"")+n}(e,r,a,n,o.$page.relativePath):""}),g=Object(a.computed)(()=>o.$themeLocaleConfig.editLinkText||o.$themeConfig.editLinkText||"Edit this page"),h=Object(a.computed)(()=>o.$showSubSideBar?{}:{paddingRight:"0"});return{recoShowModule:r,shouldShowComments:i,showAccessNumber:c,lastUpdated:l,lastUpdatedText:u,prev:p,next:m,editLink:d,editLinkText:g,pageStyle:h}}}),S=(o(532),Object(c.a)(O,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("main",{staticClass:"page",style:e.pageStyle},[t("section",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}]},[t("div",{staticClass:"page-title"},[t("h1",{staticClass:"title"},[e._v(e._s(e.$page.title))]),e._v(" "),t("PageInfo",{attrs:{pageInfo:e.$page,showAccessNumber:e.showAccessNumber}})],1),e._v(" "),t("Content",{staticClass:"theme-reco-content"})],1),e._v(" "),e.recoShowModule?t("footer",{staticClass:"page-edit"},[e.editLink?t("div",{staticClass:"edit-link"},[t("a",{attrs:{href:e.editLink,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(e.editLinkText))]),e._v(" "),t("OutboundLink")],1):e._e(),e._v(" "),e.lastUpdated?t("div",{staticClass:"last-updated"},[t("span",{staticClass:"prefix"},[e._v(e._s(e.lastUpdatedText)+": ")]),e._v(" "),t("span",{staticClass:"time"},[e._v(e._s(e.lastUpdated))])]):e._e()]):e._e(),e._v(" "),e.recoShowModule&&(e.prev||e.next)?t("div",{staticClass:"page-nav"},[t("p",{staticClass:"inner"},[e.prev?t("span",{staticClass:"prev"},[e.prev?t("router-link",{staticClass:"prev",attrs:{to:e.prev.path}},[e._v("\n          "+e._s(e.prev.title||e.prev.path)+"\n        ")]):e._e()],1):e._e(),e._v(" "),e.next?t("span",{staticClass:"next"},[e.next?t("router-link",{attrs:{to:e.next.path}},[e._v("\n          "+e._s(e.next.title||e.next.path)+"\n        ")]):e._e()],1):e._e()])]):e._e(),e._v(" "),e.recoShowModule?t("Comments",{attrs:{isShowComments:e.shouldShowComments}}):e._e()],1)}),[],!1,null,null,null).exports),j=o(533),k=Object(a.defineComponent)({components:{RecoIcon:r.b},setup(e,t){const o=Object(s.a)(),n=Object(a.computed)(()=>{var e,t;const a=null==o||null===(e=o.$themeConfig)||void 0===e?void 0:e.valineConfig,n=(null==o||null===(t=o.$themeLocaleConfig)||void 0===t?void 0:t.valineConfig)||a;return n&&0!=n.visitor});return{version:j.a,showAccessNumber:n}}}),x=(o(534),Object(c.a)(k,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"footer-wrapper"},[t("span",[t("reco-icon",{attrs:{icon:"reco-theme"}}),e._v(" "),t("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[e._v(e._s("vuepress-theme-reco@"+e.version))])],1),e._v(" "),e.$themeConfig.record?t("span",[t("reco-icon",{attrs:{icon:"reco-beian"}}),e._v(" "),t("a",{attrs:{href:e.$themeConfig.recordLink||"#"}},[e._v(e._s(e.$themeConfig.record))])],1):e._e(),e._v(" "),t("span",[t("reco-icon",{attrs:{icon:"reco-copyright"}}),e._v(" "),t("a",[e.$themeConfig.author?t("span",[e._v(e._s(e.$themeConfig.author))]):e._e(),e._v("\n        \n      "),e.$themeConfig.startYear&&e.$themeConfig.startYear!=(new Date).getFullYear()?t("span",[e._v(e._s(e.$themeConfig.startYear)+" - ")]):e._e(),e._v("\n      "+e._s((new Date).getFullYear())+"\n    ")])],1),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.showAccessNumber,expression:"showAccessNumber"}]},[t("reco-icon",{attrs:{icon:"reco-eye"}}),e._v(" "),t("AccessNumber",{attrs:{idVal:"/"}})],1),e._v(" "),e.$themeConfig.cyberSecurityRecord?t("p",{staticClass:"cyber-security"},[t("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""}}),e._v(" "),t("a",{attrs:{href:e.$themeConfig.cyberSecurityLink||"#"}},[e._v(e._s(e.$themeConfig.cyberSecurityRecord))])]):e._e(),e._v(" "),t("Comments",{attrs:{isShowComments:!1}})],1)}),[],!1,null,"b45517d6",null).exports),P=o(467),I=Object(a.defineComponent)({components:{HomeBlog:C,Home:l,Page:S,Common:P.a,Footer:x,ModuleTransition:r.a},setup(e,t){const o=Object(s.a)(),n=Object(a.computed)(()=>{const{$page:e,$site:t,$localePath:a}=o;return e?Object($.l)(e,e.regularPath,t,a):[]}),r=Object(a.computed)(()=>{const{type:e}=o.$themeConfig||{};return e?"blog"==e?"HomeBlog":e:"Home"}),i=Object(a.ref)(!1);Object(a.onMounted)(()=>{i.value=!0});const c=Object(a.computed)(()=>null==o?void 0:o.$page.path);return{sidebarItems:n,homeCom:r,show:i,path:c}}}),T=(o(535),o(536),Object(c.a)(I,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("Common",{attrs:{sidebarItems:e.sidebarItems,showModule:e.show}},[e.$frontmatter.home?t(e.homeCom,{tag:"component"}):t("div",[e.sidebarItems.length>0?t("ModuleTransition",[t("Page",{key:e.path,attrs:{"sidebar-items":e.sidebarItems}})],1):t("Page",{key:e.path,attrs:{"sidebar-items":e.sidebarItems}})],1),e._v(" "),e.$frontmatter.home?t("Footer",{staticClass:"footer"}):e._e()],1)}),[],!1,null,null,null));t.default=T.exports}}]);