(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{208:function(e,t,r){var content=r(213);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("26d2a007",content,!0,{sourceMap:!1})},212:function(e,t,r){"use strict";var n=r(208);r.n(n).a},213:function(e,t,r){(e.exports=r(16)(!1)).push([e.i,".container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}",""])},223:function(e,t,r){"use strict";r.r(t);r(58);var n=r(10),c=r(77),o={data:function(){return{writeSuccessful:!1,readSuccessful:!1,text:""}},asyncData:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,t.params,t.error,r=c.b.collection("test").doc("test"),e.prev=2,e.next=5,r.get();case 5:n=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:return e.abrupt("return",{text:n.data().text});case 12:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),methods:{writeToFirestore:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.b.collection("test").doc("test"),r={text:"This is a test message."},e.prev=2,e.next=5,t.set(r);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:this.writeSuccessful=!0;case 11:case"end":return e.stop()}},e,this,[[2,7]])}));return function(){return e.apply(this,arguments)}}(),readFromFirestore:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.b.collection("test").doc("test"),e.prev=1,e.next=4,t.get();case 4:r=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:this.text=r.data().text,this.readSuccessful=!0;case 12:case"end":return e.stop()}},e,this,[[1,7]])}));return function(){return e.apply(this,arguments)}}()}},l=(r(212),r(5)),component=Object(l.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"container"},[r("div",[r("h2",[e._v("Write to Firestore.")]),e._v(" "),r("div",[r("button",{attrs:{disabled:e.writeSuccessful},on:{click:e.writeToFirestore}},[e.writeSuccessful?r("span",[e._v("Successful!")]):r("span",[e._v("Write now")])])])]),e._v(" "),r("div",[r("h2",[e._v("Read from Firestore.")]),e._v(" "),r("div",[r("button",{attrs:{disabled:e.readSuccessful},on:{click:e.readFromFirestore}},[e.readSuccessful?r("span",[e._v("Successful!")]):r("span",[e._v("Read now")])]),e._v(" "),r("p",[e._v(e._s(e.text))])])])])},[],!1,null,null,null);t.default=component.exports}}]);