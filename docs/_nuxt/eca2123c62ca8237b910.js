(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{210:function(t,e,n){var content=n(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("5be99f4a",content,!0,{sourceMap:!1})},211:function(t,e,n){var content=n(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("780ee17d",content,!0,{sourceMap:!1})},216:function(t,e,n){"use strict";var o=n(210);n.n(o).a},217:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"blockquote[data-v-e72694b2]{min-height:220px;max-width:100%;width:970px}",""])},218:function(t,e,n){"use strict";var o=n(211);n.n(o).a},219:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,".tic[data-v-74e95c5b]{min-height:80vh;display:flex;justify-content:center;align-items:center;padding:15px}.meta[data-v-74e95c5b]{text-align:center;font-weight:600}.meta>*[data-v-74e95c5b]{margin-bottom:15px;display:inline-block}@media (min-width:992px){.meta[data-v-74e95c5b]{text-align:right}.meta>*[data-v-74e95c5b]{margin-left:15px}.meta[data-v-74e95c5b]>:first-child{margin-left:0}}",""])},221:function(t,e,n){"use strict";n.r(e);var o,r=n(104),c=n(7),m=n(23),d=n(78),l={props:["quote"],name:"TicSingleQuote",data:function(){return{}}},f=(n(216),n(5)),h=(o={components:{TicSingle:Object(f.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("blockquote",[this._v(this._s(this.quote))])},[],!1,null,"e72694b2",null).exports},data:function(){return{tweenedNumber:0}},computed:Object(c.a)({},Object(m.b)({getItemCurrent:"items/getItemCurrent"}),{animatedNumber:function(){return this.tweenedNumber.toFixed(0)}}),methods:{getRandomItem:function(){this.$store.commit("items/setItemCurrent"),this.$refs.loseFocus.blur()},arrowNavigation:function(t){"ArrowRight"==t.key&&this.getRandomItem(),"ArrowLeft"==t.key&&this.$store.commit("items/setItemPreviousAsCurrent")}},created:function(){window.addEventListener("keydown",this.arrowNavigation)},beforeDestroy:function(){window.removeEventListener("keydown",this.arrowNavigation)}},Object(r.a)(o,"created",function(){this.$store.commit("items/setItemCurrent")}),Object(r.a)(o,"watch",{getItemCurrent:function(t){d.b.to(this.$data,.5,{tweenedNumber:t.share})}}),o),v=(n(218),Object(f.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"tic"},[n("div",{staticClass:"inner"},[n("transition",{attrs:{name:"fade-out-slide-it",mode:"out-in"}},[t.getItemCurrent?n("TicSingle",{key:t.getItemCurrent.id,attrs:{quote:t.getItemCurrent.title}}):t._e()],1),t._v(" "),n("div",{staticClass:"meta"},[n("span",[t._v(t._s(t.animatedNumber)+" mensen delen deze tic")]),t._v(" "),n("button",{ref:"loseFocus",on:{click:t.getRandomItem}},[t._v("Dit doe ik ook!")])])],1)])},[],!1,null,"74e95c5b",null));e.default=v.exports}}]);