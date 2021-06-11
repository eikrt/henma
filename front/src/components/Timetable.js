import { React, useState, useEffect, useRef } from 'react'
import '../style/Timetable.css'

const axios = require('axios').default

const buttonCallback = (time, times, setTimes) => {

   time.taken = !time.taken
   setTimes([...times.slice(0,time.index-1), times[time.index-1], ...times.slice(time.index)])
  
}


const Timetable = ({ calendarValue, times, setTimes }) => {


    const defaultTimes = [{ time: '8-9', taken: false, index: 1, buttonRef: useRef(null) }, { time: '9-10', taken: false, index: 2,buttonRef: useRef(null)}, { time: '10-11', taken: false, index: 3 ,buttonRef: useRef(null)}, { time: '11-12', taken: false, index: 4,buttonRef: useRef(null) }, { time: '12-13', taken: false, index: 5,buttonRef: useRef(null) }, { time: '13-14', taken: false, index: 6,buttonRef: useRef(null) }, { time: '14-15', taken: false, index: 7,buttonRef: useRef(null) }, { time: '15-16', taken: false, index: 8,buttonRef: useRef(null) }]
   
    const getTimesFromAPI = (calendarValue) => {
        setTimes(defaultTimes)
        
          axios.get(`http://localhost:3001/api/times/${JSON.stringify(calendarValue)}`)
            .then((response) => {
                
                setTimes(JSON.parse(response.data[0].times1))
                
            })
            .catch((error) => {
                console.log(error)
            })
            .then(() => {
                
                if (JSON.stringify(times) === JSON.stringify([]) )
                {setTimes(defaultTimes)}
            });
          
    }
    

    useEffect(() => {
        // get content from api
        
        getTimesFromAPI(calendarValue) // .then(() => {if (JSON.stringify(times) === JSON.stringify([])){setTimes(defaultTimes)}})
        
        
    }, [calendarValue], [])

    return (
        
        <div className="timeTableContainer">
        
            {times && times.map((time) => <div key={time.index} className="buttonContainerTaken"> <button className={time.taken ? "timeTableButtonTaken" : "timeTableButtonNotTaken"} onClick={() => buttonCallback(time, times, setTimes)}>  {time.time}</button></div>)}
        </div>
    )
}



export default Timetable
