const redux = require("redux")

const initialState ={counter :0}
const conterReducer = (state=initialState,action)=>{
    if(action.type==="increment"){
        return{
            ...state,
            counter : state.counter +1
        }
    }
    if(action.type==="decrement"){
        return {
            ...state,
            counter:state.counter -1
        }
    }
return state
}
const store = redux.createStore(conterReducer)

const conetrSubscriber =()=>{
   const latestState= store.getState();
   console.log(latestState)
}


store.subscribe(conetrSubscriber)

for(let i=0;i<5;i++){
    store.dispatch({type:"increment"})
}

for(let i=0;i<3;i++)
{
    store.dispatch({type:'decrement'})
}
