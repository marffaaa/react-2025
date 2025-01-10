const baseUrl = 'https://dummyjson.com'

export const urls = {
    users:{
        allUsers: baseUrl + '/users',
        byID: (id: number)=>{
            return baseUrl + '/users/' + id;
        },
    },
    carts:{
        cartsById:(id:string)=>{
            return 'https://dummyjson.com/carts/user/5' + id;
        }
    }}