export const favoriteAdd = (props) =>(
    console.log ('favorite action props -',props),
    {
        type:'favorite',
        payload:props
    }
)


export const asyncAction = async(url1,pageType)=>{

    console.log('in asyncAction = url1-',url1,'action-',pageType);
    let data=[];
    try{
        const response = await fetch(url1)
        data = await response.json()
        console.log('change')
      } 
    catch (e){
       console.log(e)
      }  
    switch(pageType){
        case 'favorite':{
           favoriteAdd(data);
        }
        case 'search':{
           searchMovie(data);
        }
    }
}

export const searchMovie = (props) => (
    console.log ('search action props -',props),
    {
        type:'search',
        payload:props
    }
)
