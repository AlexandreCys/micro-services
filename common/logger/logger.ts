import Config from '../../config/config'

class Logger {

  private _logger : any;

  constructor(moduleName : string) {
    this._logger = require('logger').createLogger(Config.log.path+moduleName);
    
    this._logger.setLevel('debug');
  }
  
  public info(...args : any []) : any {
      return this._logger.info(...args);
  }

  public debug(...args : any []) : any {
    return this._logger.debug(...args);
  }

  public warning(...args : any []) : any {
    return this._logger.warn(...args);
  }

  public error(...args : any []) : any {
    return this._logger.error(...args);
  }

}

export default Logger;