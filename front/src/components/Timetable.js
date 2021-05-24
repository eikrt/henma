import {React, useState, useEffect} from 'react'
import '../style/Timetable.css'




const buttonCallback = (calendarValue, time, times, setTimes) => {
    //make buttons go red
    const newTimes = times.filter(t => t.time!==time.time && time.taken===time.taken)
    setTimes([...newTimes, {time:time.time, taken:!time.taken, index:time.index}])
}
const submitCallback = (calendarValue, times) => {
    
    const content = {calendarValue: calendarValue, times: times}

    // send content to api
}

const compare = (a,b) => {
    if ( a.index< b.index ){
      return -1;
    }
    if ( a.index > b.index ){
      return 1;
    }
    return 0;
  }

const Timetable = (calendarValue) => {
    const [times,setTimes] = useState([{time:'8-9', taken:false, index:1}, {time:'9-10', taken:false, index:2},{time:'10-11', taken:false, index:3},{time:'11-12', taken:false, index:4},{time:'12-13', taken:false, index:5},{time:'13-14', taken:false, index:6}, {time:'14-15', taken:false, index:7}, {time:'15-16', taken:false, index:8}])
    

    const content=[{time:'8-9', taken:true, index:1}, {time:'9-10', taken:false, index:2},{time:'10-11', taken:false, index:3},{time:'11-12', taken:false, index:4},{time:'12-13', taken:false, index:5},{time:'13-14', taken:false, index:6}, {time:'14-15', taken:false, index:7}, {time:'15-16', taken:false, index:8}]
    
    useEffect(() => {
        if (!content) {
            setTimes(content)
        }
        else {
            setTimes(content)
        }
        
    }, [calendarValue])
    
    return (
        
        <div className="timeTableContainer">
            
            {times.sort(compare).map((time) => <div className="buttonContainer"><button className={time.taken ? "timeTableButtonTaken" : "timeTableButtonNotTaken"} onClick={() => buttonCallback(calendarValue, time, times, setTimes)}> {time.time}</button></div>)}
        </div>
    )
}



export default Timetable
