let initialStateFavorite = {
    list :[]
};
let initialStateSearch ={
    list : []
};
export const reducerForFavorite = (state = initialStateFavorite,action)=>{
    switch(action.type){
        case 'favorite':{
            if(state.list.length==0){
                return{
                    list : [...state.list,action.payload]
                 }
            }
            else{
                let isIdEqual = false;
                state.list.map((element)=>{
                    if(element.id==action.payload.id){
                        isIdEqual = true
                        return{list : state.list}
                    }
                })
                if(!isIdEqual){
                    return{list : [...state.list,action.payload]}
                }
                else{  return{list : state.list}}
            }
        }
        case 'deleteByOne':{
        let filteredState = state.list.filter((element)=>element.id!==action.payload.id);
        return {list:filteredState}
        }
        default : {
           return{list : state.list}
        }
    }
}
export const reducerForSearch = (state = initialStateSearch,action)=>{
    switch(action.type){
        case 'searchFromSaga':{
          return{  
                    ...state,
                    list : action.payload
                }
        }
        default : {
           return{list : state.list}
        }
    }
}

