pixi-animationloop
======================

AnimationLoop is a plugin for Pixi.js v3.0.8 or higher to manage the animation frame, doing the basic time operations, like calculate delta, total time, start/stop loop, and more.

## Installation
```
npm install pixi-animationloop
```

## Usage
### Browserify - Webpack
If you use Browserify or Webpack you can use pixi-animationloop like this:

```js
var PIXI = require('pixi.js');
var AnimationLoop = require('pixi-animationloop'); //AnimationLoop is added automatically to the PIXI namespace

//create PIXI renderer
var renderer = new PIXI.autoDetectRenderer(800,600);
document.body.appendChild(renderer.view);

var animationLoop = new PIXI.AnimationLoop(renderer);
animationLoop.start();
```

### Prebuilt files

```js
var renderer = new PIXI.autoDetectRenderer(800,600);
document.body.appendChild(renderer.view);

var animationLoop = new PIXI.AnimationLoop(renderer);
animationLoop.start();
```

### Events
AnimationLoop extends from [PIXI.utils.EventEmitter](https://github.com/primus/eventemitter3), and emit four events: start, stop, prerender, postrender and visibilitychange. More info: [Node.js Events](https://nodejs.org/api/events.html#events_emitter_emit_event_arg1_arg2)

```js
animationLoop.on('start', function(){
  console.log('onStart');
});

animationLoop.on('stop', function(){
  console.log('onStop');
});

//Before the renderer.render(stage) function
animationLoop.on('prerender', function(){
  console.log('preRender', this.delta);
});

//After the renderer.render(stage) function
animationLoop.on('postrender', function(){
  console.log('postRender', this.delta);
});

//when the visibility change, for example, when the user move on to other browser tab.
animationLoop.on('visibilitychange', function(isHide){
  //the param isHide is the state of the tab
  console.log('visibilityChange', isHide);
});
```

## API
#### constructor( renderer [, stage])
The constructor
#### .renderer
Pixi.js renderer
#### .stage
Pixi.js container used as stage
#### .time
Total game time in seconds (stop the animation loop stops the time)
#### .realTime
Real time in seconds, since the first start
#### .delta
Delta time in seconds
#### .deltaMS
Delta time in milliseconds
#### .speed
Set the time speed (like 0.5, 1.5, 2, ...)
#### .maxFrame
Delta time can't be higher than maxFrame (in seconds)
#### .raf
Request animation frame ID
#### .isRunning
Used internally to know the state of the loop
#### .stopOnVisibilityChange
Stop the animation loop when the user move on to the other tab, when the user comes back the game will be resumed. (false by defult)
#### .start()
Start or resume the animation loop, emit the 'start' event
#### .stop()
Stops the animation loop, emit the 'stop' event
