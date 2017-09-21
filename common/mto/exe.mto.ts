class executeMessageTransferObject implements Mto {

  type: string = 'exe';

  action: string;

  args: Array<any>;

  constructor(action : string, args : Array<any>) {
    this.action = action || '';
    this.args = args || [];
  }
}

module.exports = executeMessageTransferObject;