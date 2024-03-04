import React, { useState } from "react";
import Questions from "./Question";
import { useSelector, useDispatch} from 'react-redux'
import {Navigate} from 'react-router-dom';
import { useEffect } from "react";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";

const Quiz=()=>{

    const [check, setChecked] = useState(undefined);
    // const trace =useSelector(state => state.questions.trace)
    const result = useSelector(state=>state.result.result);
    const {queue,trace} =useSelector(state=>state.questions)
    const dispatch= useDispatch()
    // useEffect(()=>{
    // console.log(result)
    // })

    function onNext(){
        // console.log("ON NEXT");
        // Update the trace value by one using move next action
        if(trace<queue.length){
            dispatch(MoveNextQuestion());
            if(result.length<=trace){
                dispatch(PushAnswer(check));
            }
        }

        /** Reset the value of the checked variable */
        setChecked(undefined);
        
    }

    function onPrev(){
        // console.log("ON PREV");
        if(trace>0){
            dispatch(MovePrevQuestion());
        }
        
    }

    function onChecked(check){
        console.log(check)
        setChecked(check)
    }

    /**Finished exam after  */
    if(result.length && result.length>=queue.length){
        return <Navigate to={'/result'} replace={true}></Navigate>
    }


    return(
    <div className="container">
        <h1 className="title text-light">Mock Test</h1>

        {/* Display Questions */}
        <Questions onChecked={onChecked} />

        <div className="grid">
            {trace>0?<button className="btn prev" onClick={onPrev}>Prev</button>:<div></div>}
            <button className="btn next" onClick={onNext}>Next</button>
        </div>
    </div>
    );
}
export default Quiz;