const baseUrl = 'https://dummyjson.com'

export const urls = {
    users:{
        allUsers: baseUrl + '/users',
        byID: (id: number)=>{return baseUrl + '/users/' + id;},
    },
    recipes: {
        allRecipes: baseUrl + '/recipes',
        recipeById: (id: number) => {return baseUrl + '/recipes/' + id;},
        searchRecipes: (query: string) => `${baseUrl}/recipes/search?q=${query}`,
    },

}