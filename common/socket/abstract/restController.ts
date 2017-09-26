abstract class RestController {

  protected _logger : any = (<any>global).logger;

  get logger() : any {
    return this._logger;
  }

}

export default RestController;