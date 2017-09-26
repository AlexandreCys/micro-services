import Config from '../../../config/config'

abstract class SocketServer {

  protected _express : any;
  
  protected _config : any = Config;

  get logger() : any {
    return  (<any>global).logger;
  }

  get express() : any {
    return this._express;
  }

  set express(express : any) {
      this._express = express;
  }

  get config() : any {
    return this._config;
  }

  set config(config : any) {
      this._config = config;
  }

}

export default SocketServer;