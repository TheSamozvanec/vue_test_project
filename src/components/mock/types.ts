export interface IUser{
  id:string,
  name:string,
  visible:boolean,
}
export interface IUser1{
  id:string,
  status:'guest'|'admin'|'client'|'manager'
  name:string,
}
export interface IChat{
  id:number,
  idUser:string,
  massage:string,
}

export interface IPost{
  id:number,
  userid:number,
  title:string,
  body:string,
}
