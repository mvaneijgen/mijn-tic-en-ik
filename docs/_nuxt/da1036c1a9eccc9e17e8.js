(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{203:function(t,e,n){var content=n(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2e5dbf94",content,!0,{sourceMap:!1})},208:function(t,e,n){"use strict";var r=n(203);n.n(r).a},209:function(t,e,n){(t.exports=n(15)(!1)).push([t.i,".TicSingle[data-v-152af5a9]{min-height:80vh;display:flex;justify-content:center;align-items:center;padding:15px}.meta[data-v-152af5a9]{text-align:center;font-weight:600}.meta>*[data-v-152af5a9]{margin-bottom:15px;display:inline-block}@media (min-width:992px){.meta[data-v-152af5a9]{text-align:right}.meta>*[data-v-152af5a9]{margin-left:15px}.meta[data-v-152af5a9]>:first-child{margin-left:0}}",""])},210:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(22),c={props:["item"],name:"TicSingle",data:function(){return{}},methods:{getRandomItem:function(){this.$store.commit("items/setItemCurrent")}}},m=(n(208),n(5)),l={data:function(){return{}},components:{TicSingle:Object(m.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TicSingle"},[n("div",{staticClass:"inner"},[n("blockquote",{domProps:{innerHTML:t._s(t.item.title)}}),t._v(" "),n("div",{staticClass:"meta"},[n("span",[t._v(t._s(t.item.share)+" mensen delen deze tic")]),t._v(" "),n("button",{on:{click:t.getRandomItem}},[t._v("Dit doe ik ook!")])])])])},[],!1,null,"152af5a9",null).exports},computed:Object(r.a)({},Object(o.b)({getItemCurrent:"items/getItemCurrent"})),mounted:function(){this.$store.commit("items/setItemCurrent")}},d=Object(m.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("TicSingle",{key:this.getItemCurrent.id,attrs:{item:this.getItemCurrent}})},[],!1,null,null,null);e.default=d.exports}}]);