import Config from '../../../config/config'

abstract class SocketServer {

  protected _logger : any = (<any>global).logger;

  protected _express : any;
  
  protected _config : any = Config;

  get logger() : any {
    return this._logger;
  }

  get express() : any {
    return this._express;
  }

  set express(express : any) {
      this._express = io;
  }

  get config() : any {
    return this._config;
  }

  set config(config : any) {
      this._config = config;
  }

}

export default SocketServer;