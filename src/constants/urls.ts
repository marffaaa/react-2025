const baseUrl = 'https://dummyjson.com'

export const urls = {
    users:{
        allUsers: baseUrl + '/users',
        byID: (id: number)=>{
            return baseUrl + '/users/' + id;
        },
        cartsByID: (id: number)=>{
            return baseUrl + '/users/' + id + '/carts';
        },
    },
    posts:{
        allPosts: baseUrl + '/posts',
        byID: (id: number)=>{
            return baseUrl + '/posts/' + id;
        }
    }
}