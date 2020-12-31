let initialStateFavorite = {
    list :[]
};
let initialStateSearch ={
    list : []
};
export const reducerForFavorite = (state = initialStateFavorite,action)=>{
    switch(action.type){
        case 'favorite':{
        console.log(state.list)
            if(state.list.length==0){
                return{
                    list : [...state.list,action.payload]
                 }
            }
            else{
                let isIdEqual = false;
                state.list.map((element)=>{
                    console.log(element.id ,'and',action.payload.id)
                    if(element.id==action.payload.id){
                        isIdEqual = true
                        return{list : state.list}
                    }
                })
                if(!isIdEqual){
                    console.log('enters')
                    return{list : [...state.list,action.payload]}
                }
                else{  return{list : state.list}}
            }
        }
        case 'deleteByOne':{
        console.log(state.list.id,'and',action.payload.id)
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
        case 'search':{
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

