const DEFAULT_STATE ={
    time: new Date().toLocaleTimeString()
}


function clockReducer(state= DEFAULT_STATE, action){
    switch(action.type){
        default:
            return state;
            
    }
}

export default clockReducer;