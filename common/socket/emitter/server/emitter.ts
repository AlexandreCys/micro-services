import { get, set, unset } from 'lodash'
import * as uuid from 'uuid'

class Emitter {

  protected _pending : any;

  constructor() {
      this._pending = {};
  }

  get logger() : any {
    return (<any>global).logger;
  }

  get io() : any {
    return get(global, 'socketServer.io');
  }

  public send(room : string, controller : string, method : string, args : any[], restCallBack : { req: Express.Request, res: Express.Response }) : void {
    if(restCallBack) {
      const uid : string = uuid.v4();

      args.push(uid);

      set(this._pending, uid, restCallBack);
    }

    try {
      this.io.to(this.loadBalance(room)).emit(controller, method, args);
    } catch(err) {
      this.logger.error('ERROR')
    }
  }

  public broadcast(room : string, controller : string, method : string, args : any[]) : void {
    try {
      this.io.broadcast(room).emit(controller, method, args);
    } catch(err) {
      this.logger.error('ERROR')
    }
  }

  public callback(uuid : string) : any {
    const restCallBack : { req: Express.Request, res: Express.Response } = get(this._pending, uuid);

    unset(this._pending, uuid);

    return restCallBack;
  }

  private loadBalance(room : string) : string {
    const roomItems : any[]  = get(this.io.sockets.adapter.rooms, `${room}.sockets`);
    const keys : any[] = Object.keys(roomItems);
    const keyNumber : number = Math.floor(Math.random() * keys.length);

    return keys[keyNumber];
  }

}

export default new Emitter();