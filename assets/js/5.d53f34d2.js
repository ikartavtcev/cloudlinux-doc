(window.webpackJsonp=window.webpackJsonp||[]).push([[5,12,16,20],{279:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},280:function(t,e,n){},281:function(t,e,n){},282:function(t,e,n){},284:function(t,e,n){var i=n(18),s="["+n(279)+"]",a=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),r=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:r(1),end:r(2),trim:r(3)}},295:function(t,e,n){},303:function(t,e,n){"use strict";var i=n(280);n.n(i).a},304:function(t,e,n){"use strict";var i=n(281);n.n(i).a},305:function(t,e,n){"use strict";var i=n(134),s=n(13),a=n(18),o=n(306),r=n(135);i("search",1,function(t,e,n){return[function(e){var n=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var a=s(t),u=String(this),l=a.lastIndex;o(l,0)||(a.lastIndex=0);var c=r(a,u);return o(a.lastIndex,l)||(a.lastIndex=l),null===c?-1:c.index}]})},306:function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},307:function(t,e,n){"use strict";var i=n(1),s=n(284).trim;i({target:"String",proto:!0,forced:n(308)("trim")},{trim:function(){return s(this)}})},308:function(t,e,n){var i=n(2),s=n(279);t.exports=function(t){return i(function(){return!!s[t]()||"​᠎"!="​᠎"[t]()||s[t].name!==t})}},309:function(t,e,n){"use strict";var i=n(282);n.n(i).a},313:function(t,e,n){"use strict";n.r(e);n(19),n(83),n(84);var i=n(57),s={props:["options"],mounted:function(){this.initialize(this.options,this.$lang)},methods:{initialize:function(t,e){Promise.all([Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,363,7)),Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,364,7))]).then(function(e){var n=Object(i.a)(e,1)[0];n=n.default;t.algoliaOptions;n(Object.assign({},t,{inputSelector:"#algolia-search-input"}))})},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}}},a=(n(303),n(32)),o=Object(a.a)(s,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input"}})])}],!1,null,null,null);e.default=o.exports},314:function(t,e,n){"use strict";n.r(e);n(138),n(53),n(305),n(307);var i={data:function(){return{query:"",focused:!1,focusIndex:0}},created:function(){this.query=this.inputLabel},watch:{focused:function(t){t?this.query="":this.query||(this.query=this.inputLabel)},inputLabel:function(){this.query=this.inputLabel}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t||t===this.inputLabel){for(var e=this.$site,n=e.pages,i=e.themeConfig.searchMaxSuggestions||5,s=this.$localePath,a=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},o=[],r=0;r<n.length&&!(o.length>=i);r++){var u=n[r];if(this.getPageLocalePath(u)===s)if(a(u))o.push(u);else if(u.headers)for(var l=0;l<u.headers.length&&!(o.length>=i);l++){var c=u.headers[l];a(c)&&o.push(Object.assign({},u,{path:u.path+"#"+c.slug,header:c}))}}return o}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2},inputLabel:function(){return this.$themeLocaleConfig.search||"Search"}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},s=(n(309),n(32)),a=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":t.inputLabel,placeholder:t.inputLabel,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.focusIndex)},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.onUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.onDown(e):null}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){t.go(i)},mouseenter:function(e){t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null);e.default=a.exports},317:function(t,e,n){"use strict";n.r(e);n(304);var i=n(32),s=Object(i.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null);e.default=s.exports},323:function(t,e,n){var i=n(1),s=n(324);i({global:!0,forced:parseInt!=s},{parseInt:s})},324:function(t,e,n){var i=n(4),s=n(284).trim,a=n(279),o=i.parseInt,r=/^[+-]?0[Xx]/,u=8!==o(a+"08")||22!==o(a+"0x16");t.exports=u?function(t,e){var n=s(String(t));return o(n,e>>>0||(r.test(n)?16:10))}:o},326:function(t,e,n){"use strict";var i=n(295);n.n(i).a},341:function(t,e,n){"use strict";n.r(e);n(323),n(53),n(78);var i=n(317),s=n(313),a=n(314),o=n(315);function r(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var u={components:{SidebarButton:i.default,NavLinks:o.default,SearchBox:a.default,AlgoliaSearchBox:s.default},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(r(this.$el,"paddingLeft"))+parseInt(r(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName},tryFreeTitle:function(){return this.$themeLocaleConfig.tryFree||"Try Free"},avFreeTitle:function(){return this.$themeLocaleConfig.avFree||"Get ImunifyAV free"},submitRequestTitle:function(){return this.$themeLocaleConfig.submitRequest||"Contact Support"},homeUrl:function(){return(this.$localePath+this.$site.themeConfig.defaultURL).replace(/\/+/g,"/")},submitRequestUrl:function(){return this.$site.themeConfig.submitRequestURL||"https://cloudlinux.zendesk.com/hc/en-us/requests/new"}}},l=(n(326),n(32)),c=Object(l.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.homeUrl}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name site-name--documentation",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("div",{staticClass:"links",style:{"max-width":t.linksWrapMaxWidth+"px"}},[n("a",{staticClass:"btn",attrs:{href:t.submitRequestUrl,target:"_blank"}},[t._v("\n      "+t._s(t.submitRequestTitle)+"\n    ")]),t._v(" "),"/imunifyav/"==t.homeUrl?n("a",{staticClass:"btn",attrs:{href:"https://www.imunify360.com/antivirus/?utm_campaign=ImunifyAV%20docs%20-%20Imunify%20antivirus%20button%20-%20Get%20ImunifyAV%20free&utm_source=docsantivirus&utm_medium=docsantivirus&utm_term=docsantivirus&utm_content=docsantivirus",target:"_blank"}},[t._v("\n      "+t._s(t.avFreeTitle)+"\n    ")]):t._e(),t._v(" "),n("a",{staticClass:"btn",attrs:{href:t.$site.themeConfig.try_free,target:"_blank"}},[t._v("\n      "+t._s(t.tryFreeTitle)+"\n    ")]),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null);e.default=c.exports}}]);