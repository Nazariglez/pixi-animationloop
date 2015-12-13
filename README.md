pixi-animationloop
======================

AnimationLoop is a plugin for Pixi.js v3 or higher to manage the animation frame, doing the basic time operations, like calculate delta, total time, start/stop loop, and more.

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

### How to add an action
Actions can be used to add code before or after the render time.

```js
//pre render action
function myAction(delta, animationLoop){
  console.log('My pre render action.');
}

//Add an action before the render
animationLoop.addPreRenderAction(myAction);

//remove
animationLoop.removePreRenderAction(myAction);

//Add an action after the render
animationLoop.addPostRenderAction(myAction);

//remove
animationLoop.removePostRenderAction(myAction);
```

## API
#### constructor( renderer [, stage])
The constructor
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
Request animation frame ID.
#### .addPreRenderAction( fn )
Add a function before the render (These functions has as parameters the delta time and the animationLoop instance)
#### .removePreRenderAction( fn )
Remove a function from preRender actions
#### .addPostRenderAction( fn )
Add a function after the render (These functions has as parameters the delta time and the animationLoop instance)
#### .removePreRenderAction( fn )
Remove a function from postRender actions
#### .start()
Start or resume the animation loop
#### .stop()
Stops the animation loop
