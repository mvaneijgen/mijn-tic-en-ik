(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{208:function(t,e,n){var content=n(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("6d456bb2",content,!0,{sourceMap:!1})},209:function(t,e,n){"use strict";var c=n(208);n.n(c).a},210:function(t,e,n){(t.exports=n(16)(!1)).push([t.i,"blockquote[data-v-0371069c]{min-height:220px;max-width:100%;width:970px}",""])},211:function(t,e,n){"use strict";var c={props:["item"],name:"TicSingleQuote",data:function(){return{}},methods:{singleTic:function(){this.$router.push({path:"/tic/".concat(this.item.id)})}}},o=(n(209),n(4)),component=Object(o.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("blockquote",{on:{click:this.singleTic}},[this._v(this._s(this.item.title))])},[],!1,null,"0371069c",null);e.a=component.exports},236:function(t,e,n){"use strict";n.r(e);var c=n(15),o=n(58),r={components:{TicSingle:n(211).a},data:function(){return{}},computed:Object(c.a)({},Object(o.b)({getItems:"items/getItems"}),{animatedNumber:function(){return this.tweenedNumber.toFixed(0)}})},l=n(4),component=Object(l.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",this._l(this.getItems,function(t){return e("TicSingle",{key:t.id,attrs:{item:t}})}),1)},[],!1,null,null,null);e.default=component.exports}}]);