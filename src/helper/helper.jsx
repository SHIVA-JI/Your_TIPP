import axios from 'axios'


export function attempts_Number(result){
    return result.filter(r=>r!==undefined).length;
}

export function earnPoints_Number(result, answers,point){
    return result.map((element, i) => answers[i]===element).filter(i=>i).map(i => point).reduce((prev,curr)=>prev+curr,0)
}

export function flagResult(totalPoints,earnPoints){
    return (totalPoints*50/100)<earnPoints;
    /**Parameter to pass the exam is 50% or above */
}

/**Get server data */
export async function getServerData(url, callback){
    const data = await (await axios.get(url))?.data;
    // console.log(data)
    return callback ? callback(data) : data;
}

// getServerData('http://localhost:5000/api/questions')

/** post server data */
export async function postServerData(url, result, callback){
    const data = await (await axios.post(url, result))?.data;
    return callback ? callback(data) : data;
}