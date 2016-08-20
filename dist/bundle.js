!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var o=n(2),r=i(o),a=n(3),d=i(a),s=n(4),u=firebase.database().ref("/nodes"),c=new r["default"]({handleSubmit:function(e){return h(e)}}),l=null,f={},h=function(e){if((0,s.isValidNode)(e)){var t={type:e.type,data:e.data,createdBy:l,createdAt:(new Date).getTime()};u.push(t).then(function(e){return console.log("Node created at "+e.getKey())})["catch"](function(e){return console.warn(e)})}},v=function(e){for(var t in e)if("text"===e[t].type)if(f[t]){var n=f[t];n.update(e[t])}else{var i=new d["default"](e[t]);f[t]=i}},p=function(e){firebase.database().ref("/nodes").on("value",function(t){var n=t.val();e(n)})};document.addEventListener("click",function(e){var t=e.path,n=document.getElementById("node-editor");if(!(t.indexOf(n)>-1)){var i=e.clientX,o=e.clientY;c.renderAt(i,o)}}),firebase.auth().onAuthStateChanged(function(e){return e.uid?(l=e.uid,void p(v)):void firebase.auth().signInAnonymously()})},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(3),d=i(a),s={"node-text":"nodeText","node-font":"nodeFont"},u=function(){function e(t){o(this,e),this.handleSubmit=t.handleSubmit,this.$container=document.getElementById("node-editor"),this.$submitButton=document.getElementById("submit-node"),this.$nodeText=document.getElementById("node-text"),this.$nodeFont=document.getElementById("node-font"),this.previewNode=new d["default"]({previewNode:!0}),this.initEventListeners()}return r(e,[{key:"clearFields",value:function(){this.$nodeText.value="",this.$nodeFont.value="open-sans",this.nodeText="",this.nodeFont="open-sans",this.previewNode.update(this.getConfig())}},{key:"initEventListeners",value:function(){this.$nodeText.addEventListener("keyup",this.handleChange.bind(this)),this.$nodeFont.addEventListener("change",this.handleChange.bind(this)),this.$submitButton.addEventListener("click",this.submitNode.bind(this))}},{key:"getConfig",value:function(){return{previewNode:!0,type:"text",data:{text:this.nodeText,coords:this.coords,font:this.nodeFont||"open-sans"}}}},{key:"handleChange",value:function(e){e.preventDefault();var t=s[e.target.id];this[t]=e.target.value,this.previewNode.update(this.getConfig())}},{key:"hide",value:function(){this.$container.style.display="none",this.previewNode.hide()}},{key:"renderAt",value:function(e,t){this.coords=[e,t],this.$container.style.display="block",this.$container.style.left=e+"px",this.$container.style.top=t+"px",this.previewNode.update(this.getConfig()),this.previewNode.show()}},{key:"submitNode",value:function(e){e.preventDefault(),this.handleSubmit&&this.handleSubmit(this.getConfig()),this.hide(),this.clearFields()}}]),e}();t["default"]=u},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t){n(this,e),this.$node=document.createElement("div"),this.$node.classList.add("text-node"),document.body.appendChild(this.$node),t&&(t.previewNode&&(this.previewNode=t.previewNode),t.data&&(this.data=t.data,this.render()))}return i(e,[{key:"destroy",value:function(){document.body.removeChild(this.$node)}},{key:"hide",value:function(){this.$node.style.display="none"}},{key:"show",value:function(){this.$node.style.display="block"}},{key:"update",value:function(e){this.data=e.data,this.previewNode=e.previewNode,this.render()}},{key:"render",value:function(){this.data.text&&""!==this.data.text?this.$node.textContent=this.data.text:this.$node.innerHTML="&nbsp;",this.$node.style.left=this.data.coords[0]+"px",this.$node.style.top=this.data.coords[1]+"px",this.data.font&&this.$node.setAttribute("font",this.data.font),this.previewNode?this.$node.classList.add("preview-mode"):this.$node.classList.remove("preview-mode")}}]),e}();t["default"]=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isValidNode=t.NODE_TYPES=void 0;var i=function(){function e(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var a,d=e[Symbol.iterator]();!(i=(a=d.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(s){o=!0,r=s}finally{try{!i&&d["return"]&&d["return"]()}finally{if(o)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=n(5),r={text:{text:function(e){return"string"==typeof e&&e.length<=100},coords:function(e){var t=i(e,2),n=t[0],o=t[1];return"number"==typeof n&&"number"==typeof o}},image:{url:function(e){return"string"==typeof e&&(0,o.isValidImageSrc)(e)}}};t.NODE_TYPES=r;t.isValidNode=function(e){if(!e)return!1;var t=e.type,n=e.data;if(!t||!n||!r[t])return!1;var i=r[t];for(var o in i){if(!n[o])return!1;var a=i[o];if(!a(n[o]))return!1}return!0}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.isValidImageSrc=function(e){return new Promise(function(t,n){var i=document.createElement("img");i.onload=function(){return t()},i.onerror=function(){return n()},i.src=e})}}]);