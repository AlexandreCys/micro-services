import Config from '../../../config/config'

abstract class SocketServer {

  protected _logger : any = (<any>global).logger;

  protected _io : any;
  
  protected _config : any = Config;

  get logger() : any {
    return this._logger;
  }

  get io() : any {
    return this._io;
  }

  set io(io : any) {
      this._io = io;
  }

  get config() : any {
    return this._config;
  }

  set config(config : any) {
      this._config = config;
  }

}

export default SocketServer;