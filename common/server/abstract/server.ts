import Config from '../../../config/config'
import SocketController from '../../socket/abstract/socketController'

abstract class Server {

  protected io : any;
  
  protected servicesTable: Socket[] = [];
  
  protected socketController : { exe: SocketController, get: SocketController, set: SocketController };
  
  protected config : any = Config;

}

export default Server;