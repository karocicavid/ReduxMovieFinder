export const favoriteAdd = (props) =>{
    console.log ('favorite action props -',props);
    return(
        {
        type:'favorite',
        payload:props
        }
    )
}

export const asyncAction = (dispatch,url1,pageType)=>{
    //console.log('in asyncAction = url1-',url1,'action-',pageType);
    
    let data=[];
    return async()=> {
        try{
            const response = await fetch(url1);
            data = await response.json();
            switch(pageType){
                case 'favorite':{
                    dispatch(favoriteAdd(data));
                }
                case 'search':{
                    dispatch(searchMovie(data));
                }
            }
        } 
        catch (e){
        console.log('errror')
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
