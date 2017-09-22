class executeMessageTransferObject implements Mto {

  type: string = 'exe';

  action: string;

  args: any[];

  constructor(action : string, args : any[]) {
    this.action = action || '';
    this.args = args || [];
  }
  
}

export default executeMessageTransferObject;