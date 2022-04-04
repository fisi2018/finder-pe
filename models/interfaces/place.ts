export interface Place{
    _id:string,
    title:string,
    description:string,
    address:string,
    location:{
        lng:number,
        lat:number
    }
}