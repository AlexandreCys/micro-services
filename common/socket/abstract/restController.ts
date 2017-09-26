import { get } from 'lodash'

abstract class RestController {

  get logger() : any {
    return (<any>global).logger;
  }

  get socket() : any {
    return get(global, 'socketServer.io');
  }

}

export default RestController;