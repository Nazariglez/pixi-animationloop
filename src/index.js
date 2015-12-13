import PIXI from'pixi.js';
import AnimationLoop from './AnimationLoop';

if(!PIXI.AnimationLoop)PIXI.AnimationLoop = AnimationLoop;
export default PIXI.AnimationLoop;
