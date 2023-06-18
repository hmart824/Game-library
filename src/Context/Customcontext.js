import React , {createContext , useContext, useReducer} from 'react';
import { auth } from '../Firebase';
import {onAuthStateChanged } from "firebase/auth";
import axios from 'axios';

const customContext = createContext();

const reducer = (state , action)=>{
  let {payload} = action;
  switch(action.type){
    case "RESET" :
    case "GET_DATA" :
      return {
          ...state,
          [payload.state] : payload.value
      };
    
    default: 
    return state;
  }

}

//it's a custom hook which provide the value of context
const useContextValue = ()=>{
    const context = useContext(customContext);
    return context;
}

function Customcontext({children}) {
  const [state, dispatch] = useReducer(reducer, {user: null , gameDetail: [] , screenshots: [] , stores: [] , trailers: [] , developers: []});

  //check the user is logged in or not
  const authentication = ()=>{
    onAuthStateChanged(auth, (currentUser) => {
       if (currentUser) {
         dispatch({
          type: 'GET_DATA',
          payload: {
            state: 'user',
            value: currentUser
          }
         })
         console.log('usersigned in');
       }else{
         console.log("user signed out");
       }
     });

   }

   //handle signout
   const signOut = ()=>{
    auth.signOut()
    .then(()=>{
      console.log('signed out successfully');
      dispatch({
        type: 'GET_DATA',
        payload: {
          state: 'user',
          value: null
        }
       })
    })
    .catch((err)=>{alert(err.message)})
  }

  //fetch data form url
  const getDataFromURL = async(url , id , state )=>{
    let res = await axios.get(url(id));
    dispatch({
      type: 'GET_DATA',
      payload: {
        state,
        value: state === 'gameDetail' ? res.data : res.data.results
      }
     });
  }

  //it will reset the states
  const reset = ()=>{
    console.log('active')
    dispatch({
      type: 'RESET',
      payload: {
        state : 'gameDetail',
        value: []
      }
     });
    dispatch({
      type: 'RESET',
      payload: {
        state : 'screenshots',
        value: []
      }
     });
    dispatch({
      type: 'RESET',
      payload: {
        state : 'stores',
        value: []
      }
     });
    dispatch({
      type: 'RESET',
      payload: {
        state : 'trailers',
        value: []
      }
     });
    dispatch({
      type: 'RESET',
      payload: {
        state : 'developers',
        value: []
      }
     });
  }

  return (
    <customContext.Provider 
      value={{
        currentUser: state.user,
        authentication,
        signOut,
        getDataFromURL,
        reset,
        gameDetail: state.gameDetail,
        screenshots: state.screenshots,
        stores: state.stores,
        trailers: state.trailers,
        developers: state.developers
      }}
      >
        {children}
    </customContext.Provider>
  )
}

export {useContextValue};
export default Customcontext;