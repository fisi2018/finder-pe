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
export interface ErrorFetch{
    error:string,
    message:string
}