import React, { useEffect } from "react";
import './result.css';
import { NavLink } from "react-router-dom";
import ResultTable from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
import { resetResultAction } from "../Redux/result_reducer";
import { resetAllAction } from "../Redux/question_reducer";
import { attempts_Number, earnPoints_Number, flagResult } from "../helper/helper";
import { usePublishResult } from "../hooks/setResult";

const Result =()=>{

    const dispatch=useDispatch()
    const {questions:{queue, answers}, result: {result, userId}}=useSelector(state => state)
    

    const totalPoints = queue.length*10;
    const attempts = attempts_Number(result)
    const earnPoints = earnPoints_Number(result, answers,10)
    const flag=flagResult(totalPoints,earnPoints)
    
    /** store user result */
    usePublishResult({ 
        result, 
        username : userId,
        attempts,
        points: earnPoints,
        achived : flag ? "Passed" : "Failed" });

    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
        // console.log("On Restart");
    }
    return <>
    <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        <div className="result flex-center">
            <div className="flex">
                <span>Username</span>
                <span className="bold">User 1</span>
            </div>
            <div className="flex">
                <span>Total Test Points : </span>
                <span className="bold">{totalPoints || 0}</span>
            </div>
            <div className="flex">
                <span>Total Questions: </span>
                <span className="bold">{queue.length||0}</span>
            </div>
            <div className="flex">
                <span>Total Attempts : </span>
                <span className="bold">{attempts||0}</span>
            </div>
            <div className="flex">
                <span>Total Points Earned: </span>
                <span className="bold">{earnPoints||0}</span>
            </div>
            <div className="flex">
                <span>Test Result: </span>
                <span style={{color : `${flag ? "#2aff95":"#ff2a66"}`}} className="bold">{flag ? "Passed" : "Failed"}</span>
            </div>
        </div>

        <div className="start">
            <NavLink className="btn" to={'/mocktest'} onClick={onRestart}>Restart</NavLink>
        </div>
        <div className="container">
            <ResultTable/>
        </div>
    </div>
    </>
}

export default Result;