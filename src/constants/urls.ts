const baseUrl = 'https://jsonplaceholder.typicode.com'

export const urls = {
    users:{
        allUsers: baseUrl + '/users',
        byID: (id: number)=>{
            return baseUrl + '/users/' + id;
        }
    },
    posts:{}
}