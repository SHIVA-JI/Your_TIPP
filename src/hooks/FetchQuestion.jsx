import {useState , useEffect} from "react";

import {useDispatch} from "react-redux";



// redux action
import * as Action from '../Redux/question_reducer.jsx';
import { getServerData } from "../helper/helper";
// This is the fetch question hook to fetchapi data and set value to store 
export const useFetchQuestion =()=>{ 
    const dispatch = useDispatch();
    const[getData, setGetData]=useState({isLoading:false,apiData:[],serverError:null})
    useEffect(()=>{
       setGetData (prev => ({...prev, isLoading:true}));
       
    //    async fucntion fetch backend data
    (async ()=>{
        try{
            const [{questions,answers}]=await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,(data)=>data);
            console.log({questions,answers});
            if(questions.length >0){
                setGetData(prev => ({...prev, isLoading:false}));
                setGetData(prev => ({...prev, apiData:questions}));

                // dispatch an action
                dispatch(Action.startExamAction({question: questions,answers}))
            }
            else{
                throw new Error ("NO Question Avaliable");
            }

        }catch(error){
            setGetData(prev => ({...prev, isLoading:false}));
            setGetData(prev => ({...prev, serverError:error}));

        }

    })();
    },[dispatch]);

    return [getData, setGetData];
}

// Move Action dispatch funstion

export const MoveNextQuestion =()=> async (dispatch)=>{
    try{
      dispatch(Action.moveNextAction()) //Increase question  
    } catch(error){
        console.log(error)
    }
}

//PrevAction Dispatch Function
export const MovePrevQuestion =()=> async (dispatch)=>{
    try{
      dispatch(Action.movePrevAction())  //Decrease question
    } catch(error){
        console.log(error)
    }
}

