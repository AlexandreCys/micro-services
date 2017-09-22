class getterMessageTransferObject implements Mto {
  
  type: string = 'get';

  action: string;

  args: any[];

  constructor(action : string, args : any[]) {
    this.action = action || '';
    this.args = args || [];
  }
  
}
  
export default getterMessageTransferObject;