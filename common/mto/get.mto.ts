class getterMessageTransferObject implements Mto {
  
    type: string = 'get';
  
    action: string;
  
    args: Array<any>;
  
    constructor(action : string, args : Array<any>) {
      this.action = action || '';
      this.args = args || [];
    }
  }
  
  module.exports = getterMessageTransferObject;