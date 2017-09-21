class ServiceSocketObject implements Socket {
  
    id: String;
  
    type: String;
  
    socket: any;
  
    constructor(id : String, type : String, socket : any) {
      this.id = id;
      this.type = type;
      this.socket = socket;
    }
  }
  
  module.exports = ServiceSocketObject;