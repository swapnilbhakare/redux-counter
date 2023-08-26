const redux = require("redux")

const initialState ={counter :0}
const conterReducer = (state=initialState,action)=>{
    if(action.type==="increment"){
        return{
            ...state,
            counter : state.counter +1
        }
    }
    if(action.type==="incrementBy2"){
        return {
            ...state,
            counter :state.counter +2
        }
    }
    if(action.type==="decrementBy2"){
        return {
            ...state,
            counter :state.counter -2
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



store.dispatch({type:"increment"})
store.dispatch({type:'decrement'})
store.dispatch({type:"incrementBy2"})
store.dispatch({type:'decrementBy2'})