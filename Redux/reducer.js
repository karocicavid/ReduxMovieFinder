let initialStateFavorite = {
    list :[]
};
let initialStateSearch ={
    list : []
};
export const reducerForFavorite = (state = initialStateFavorite,action)=>{
    switch(action.type){
        case 'favorite':{
           return{list : [...state.list,action.payload]}
        }
        default : {
           return{list : [...state.list]}
        }
    }
}
export const reducerForSearch = (state = initialStateSearch,action)=>{
    switch(action.type){
        case 'search':{
           return{list : [action.payload]}
        }
        default : {
           return{list : []}
        }
    }
}
