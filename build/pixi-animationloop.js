!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){t.exports=i(3)},function(t,e){t.exports=PIXI},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();Object.defineProperty(e,"__esModule",{value:!0});var u=i(1),f=n(u),l=function(t){function e(t){var i=arguments.length<=1||void 0===arguments[1]?new f["default"].Container:arguments[1];r(this,e);var n=a(this,Object.getPrototypeOf(e).call(this));return n.renderer=t,n.stage=i,n.isRunning=!1,n._firstDate=0,n.speed=1,n._last=0,n.delta=0,n.deltaMS=0,n.time=0,n._lastTime=0,n.maxFrame=.035,n.raf=null,n}return s(e,t),o(e,[{key:"_animate",value:function(){if(this.raf=window.requestAnimationFrame(this._animate.bind(this)),this.stage){var t=Date.now();this.time+=Math.min((t-this._last)/1e3,this.maxFrame)*this.speed,this.delta=this.time-this._lastTime,this.deltaMS=1e3*this.delta,this._lastTime=this.time,this._last=t,this.emit("prerender",this),this.renderer.render(this.stage),this.emit("postrender",this)}}},{key:"start",value:function(){if(!this.isRunning){this.isRunning=!0;var t=Date.now();this._last=t,0===this._firstDate&&(this._firstDate=t),this.emit("start",this),this._animate()}}},{key:"stop",value:function(){this.isRunning&&(this.isRunning=!1,window.cancelAnimationFrame(this.raf),this.emit("stop",this))}},{key:"realTime",get:function(){return this._firstDate>0?(Date.now()-this._firstDate)/1e3:0}}]),e}(f["default"].utils.EventEmitter);e["default"]=l},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(1),a=n(r),s=i(2),o=n(s);a["default"].AnimationLoop||(a["default"].AnimationLoop=o["default"]),e["default"]=a["default"].AnimationLoop}]);
//# sourceMappingURL=pixi-animationloop.js.map