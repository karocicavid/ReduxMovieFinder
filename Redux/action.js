export const favoriteAdd = (props) =>{
    // console.log ('favorite action  id -',props.id);
    return(
        {
        type:'favorite',
        payload:props
        }
    )
}

export const asyncAction = (dispatch,props,pageType)=>{
    //console.log('in asyncAction = url1-',url1,'action-',pageType);
    if(pageType == 'search'){
        let data=[];
        return async()=> {
            try{
                const response = await fetch(props);
                data = await response.json();
                dispatch(searchMovie(data));
            } 
            catch (e){
            console.log('errror')
            }
        }
    }
}


export const searchMovie = (props) => {
    //console.log ('search action props -',props);
    return(
        {
        type:'search',
        payload:props
        }
    )
}
