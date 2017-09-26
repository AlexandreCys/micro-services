import { get } from 'lodash'

abstract class SocketController {

  get logger() : any {
    return (<any>global).logger;
  }

  get socket() : any {
    return get(global, 'socketServer.io');
  }

}

export default SocketController;