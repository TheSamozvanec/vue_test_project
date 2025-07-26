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
export interface IPostAPI{
  id:number,
  userId:number,
  title:string,
  body:string,
  completed?:boolean,
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

export interface IAuthor{
  name:string,
  password:string,
}

export interface IPassData{
  surname:string,
  name:string,
  email:string,
  phone:string,
  approval:boolean
}