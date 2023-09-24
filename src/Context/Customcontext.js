import React , {createContext , useContext, useReducer} from 'react';
import { auth } from '../Firebase';
import {onAuthStateChanged } from "firebase/auth";
import axios from 'axios';

const customContext = createContext();

const initialState = {
  user: null,
  games: {},
  gameDetails: {
    detail: [],
    screenshots: [],
    stores: [],
    developers: [],
  },
  loading: false
}

const reducer = (state , action)=>{
  let {payload} = action;
  switch(action.type){
    case "RESET" :
    case "SET_DATA":
    case "GET_DATA" :
      return {
          ...state,
          [payload.state] : payload.value
      };
    case "ADD_GAME_DETAILS":
      return {
        ...state,
        gameDetails: {
          ...state.gameDetails,
          [payload.state] : payload.value
        }
      }
    
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
  const [state, dispatch] = useReducer(reducer, initialState);

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
    dispatch({type: 'SET_DATA' , payload: {state: 'loading' , value: true}});
    let res = await axios.get(url(id));
    dispatch({
      type: 'ADD_GAME_DETAILS',
      payload: {
        state,
        value: state === 'detail' ? res.data : res.data.results
      }
     });
     dispatch({type: 'SET_DATA' , payload: {state: 'loading' , value: false}});
  }

  const getGames = async(URL , title)=>{
    dispatch({type: 'SET_DATA' , payload: {state: 'loading' , value: true}});
    let res = await axios.get(URL(1));
    dispatch({
      type: 'GET_DATA',
      payload: {
        state: 'games',
        value: {
          ...state.games,
          [title]: {
            data: res.data.results,
            totalResults: res.data.count,
            page: 1
          }
        }
      }
    })
    dispatch({type: 'SET_DATA' , payload: {state: 'loading' , value: false}});
  };

  const fetchMoreGames = async(URL , title)=>{
    let nextPage = state.games[title].page + 1;
    let res = await axios.get(URL(nextPage));
    console.log('fetchmore' , res);
    dispatch({
      type: 'GET_DATA',
      payload: {
        state: 'games',
        value: {
          ...state.games,
          [title]: {
            ...state.games[title],
            data: state.games[title].data.concat(res.data.results),
            page: nextPage
          }
        }
      }
    })
  }

  //it will reset the states
  const reset = ()=>{
    console.log('active')
    dispatch({
      type: 'RESET' , 
      payload:{
        state: 'gameDetails',
        value: initialState.gameDetails
      }
    })
  }

  return (
    <customContext.Provider 
      value={{
        currentUser: state.user,
        authentication,
        signOut,
        getDataFromURL,
        reset,
        getGames,
        fetchMoreGames,
        loading: state.loading,
        games: state.games,
        gameDetails: state.gameDetails,
      }}
      >
        {children}
    </customContext.Provider>
  )
}

export {useContextValue};
export default Customcontext;