class ServiceSocket implements Socket {
  
  id: string;

  type: string;

  socket: any;

  constructor(id : string, type : string, socket : any) {
    this.id = id;
    this.type = type;
    this.socket = socket;
  }
  
}

export default ServiceSocket;