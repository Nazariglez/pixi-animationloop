!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(3)},function(e,t){e.exports=PIXI},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(){return"undefined"!=typeof document.hidden?"visibilitychange":"undefined"!=typeof document.webkitHidden?"webkitvisibilitychange":"undefined"!=typeof document.mozHidden?"mozvisibilitychange":"undefined"!=typeof document.msHidden?"msvisibilitychange":void 0}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();Object.defineProperty(t,"__esModule",{value:!0});var d=n(1),f=i(d),l=function(e){function t(e){var n=arguments.length<=1||void 0===arguments[1]?new f["default"].Container:arguments[1];o(this,t);var i=r(this,Object.getPrototypeOf(t).call(this));return i._animate=function(){if(i.raf=window.requestAnimationFrame(i._animate),i.stage){var e=Date.now();i.time+=Math.min((e-i._last)/1e3,i.maxFrame)*i.speed,i.delta=i.time-i._lastTime,i.deltaMS=1e3*i.delta,i._lastTime=i.time,i._last=e,i.emit("prerender"),i.renderer.render(i.stage),i.emit("postrender")}},i._onVisibilityChange=function(){var e=!!(document.hidden||document.webkitHidden||document.mozHidden||document.msHidden);e?i.stop():i.start(),i.emit("visibilitychange",e)},i.renderer=e,i.stage=n,i.isRunning=!1,i._stopOnVisibilityChange=!1,i._firstDate=0,i.speed=1,i._last=0,i.delta=0,i.deltaMS=0,i.time=0,i._lastTime=0,i.maxFrame=.035,i.raf=null,i}return a(t,e),u(t,[{key:"start",value:function(){if(!this.isRunning){this.isRunning=!0;var e=Date.now();this._last=e,0===this._firstDate&&(this._firstDate=e),this.emit("start"),this._animate()}}},{key:"stop",value:function(){this.isRunning&&(this.isRunning=!1,window.cancelAnimationFrame(this.raf),this.emit("stop"))}},{key:"realTime",get:function(){return this._firstDate>0?(Date.now()-this._firstDate)/1e3:0}},{key:"stopOnVisibilityChange",get:function(){return this._stopOnVisibilityChange},set:function(e){if(e!==this._stopOnVisibilityChange){this._stopOnVisibilityChange=e;var t=s();e?document.addEventListener(t,this._onVisibilityChange):document.removeEventListener(t,this._onVisibilityChange)}}}]),t}(f["default"].utils.EventEmitter);t["default"]=l},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=i(o),a=n(2),s=i(a);r["default"].AnimationLoop||(r["default"].AnimationLoop=s["default"]),t["default"]=r["default"].AnimationLoop}]);
//# sourceMappingURL=pixi-animationloop.js.map