import PIXI from 'pixi.js';

export default class AnimationLoop extends PIXI.utils.EventEmitter {
  constructor(renderer, stage = new PIXI.Container()){
    super();
    this.renderer = renderer;
    this.stage = stage;

    this._isRunning = false;

    this._firstDate = 0;
    this.speed = 1;
    this._last = 0;
    this.delta = 0;
    this.deltaMS = 0;
    this.time = 0;
    this._lastTime = 0;
    this.maxFrame = 0.035;

    this.raf = null;
  }

  _animate(){
    this.raf = window.requestAnimationFrame(this._animate.bind(this));

    if(this.stage){
      let now = Date.now();
      this.time += Math.min((now-this._last)/1000,this.maxFrame) * this.speed;
      this.delta = this.time - this._lastTime;
      this.deltaMS = this.delta*1000;
      this._lastTime = this.time;
      this._last = now;

      this.emit('prerender', this);
      this.renderer.render(this.stage);
      this.emit('postrender', this);
    }
  }

  start(){
    if(!this.isRunning){
      this.isRunning = true;
      let now = Date.now();
      this._last = now;
      if(this._firstDate === 0)this._firstDate = now;
      this.emit('start', this);
      this._animate();
    }
  }

  stop(){
    if(this.isRunning){
      this.isRunning = false;
      window.cancelAnimationFrame(this.raf);
      this.emit('stop', this);
    }
  }

  get realTime(){
    return this._firstDate > 0 ? (Date.now() - this._firstDate)/1000 : 0;
  }
}
