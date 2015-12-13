export default class AnimationLoop {
  constructor(renderer, stage = new PIXI.Container()){
    this.renderer = renderer;
    this.stage = stage;

    this._firstDate = 0;
    this.speed = 1;
    this._last = 0;
    this.delta = 0;
    this.deltaMS = 0;
    this.time = 0;
    this._lastTime = 0;
    this.maxFrameMS = 0.035;

    this.raf = null;

    this._preRenderActions = [];
    this._postRenderActions = [];
  }

  _animate(){
    this.raf = window.requestAnimationFrame(this._animate.bind(this));

    if(this.stage){
      let now = Date.now();
      this.time += Math.min((now-this._last)/1000,this.maxFrameMS) * this.speed;
      this.delta = this.time - this._lastTime;
      this.deltaMS = this.delta*1000;
      this._lastTime = this.time;
      this._last = now;

      this._preRender();
      this.renderer.render(this.stage);
      this._postRender();
    }
  }

  _preRender(){
    let len = this._preRenderActions.length;
    for(let i = 0; i < len; i++){
      this._preRenderActions[i](this.delta, this);
    }
  }

  _postRender(){
    let len = this._postRenderActions.length;
    for(let i = 0; i < len; i++){
      this._postRenderActions[i](this.delta, this);
    }
  }

  start(){
    let now = Date.now();
    this._last = now;
    if(this._firstDate === 0)this._firstDate = now;
    this._animate();
  }

  stop(){
    if(this.raf)window.cancelAnimationFrame(this.raf);
  }

  addPreRenderAction(fn){
    if(this._preRenderActions.indexOf(fn) === -1){
      this._preRenderActions.push(fn);
    }
  }

  removePreRenderAction(fn){
    let index = this._postRenderActions.indexOf(fn);
    if(index !== -1){
      this._postRenderActions.splice(index, 1);
    }
  }

  get realTime(){
    return this._firstDate > 0 ? (Date.now() - this._firstDate)/1000 : 0;
  }
}
