import { React, useState, useEffect, useRef } from 'react'
import '../style/Timetable.css'



const buttonCallback = (time, times, setTimes) => {
    //make buttons go red
   // const newTimes = times.filter(t => t.time !== time.time && time.taken === time.taken)
   // setTimes([...newTimes, { time: time.time, taken: !time.taken, index: time.index }])
   
   time.taken = !time.taken
   setTimes([...times.slice(0,time.index-1), times[time.index-1], ...times.slice(time.index)])
  // time.current.style.backgroundColor = time.taken ? "red" : "rgb(53, 199, 131)"

}


const Timetable = ({ calendarValue, times, setTimes }) => {


    let [content,setContent] = useState([{ time: '8-9', taken: false, index: 1, buttonRef: useRef(null) }, { time: '9-10', taken: false, index: 2,buttonRef: useRef(null)}, { time: '10-11', taken: false, index: 3 ,buttonRef: useRef(null)}, { time: '11-12', taken: false, index: 4,buttonRef: useRef(null) }, { time: '12-13', taken: false, index: 5,buttonRef: useRef(null) }, { time: '13-14', taken: false, index: 6,buttonRef: useRef(null) }, { time: '14-15', taken: false, index: 7,buttonRef: useRef(null) }, { time: '15-16', taken: false, index: 8,buttonRef: useRef(null) }])
   
    const getTimesFromAPI = async() => {
        let response = await fetch("http://localhost:3001/api/times")
        
          setTimes(await response.json())
    }
    
   /* const getTimesFromAPI = async() => {

        fetch("localhost:3001/api/times")
            .then(response => {
                this.setState({users: response.json()});
            })
            .catch(error => {
                console.log(error);
            });
    }*/
    useEffect(() => {
        // get content from api

        setTimes(content)
        getTimesFromAPI()
       

    }, [calendarValue])
    console.log("times : " , times)
    return (
        
        <div className="timeTableContainer">
        
            {times && times.map((time) => <div key={time.index} className="buttonContainerTaken"> <button className={time.taken ? "timeTableButtonTaken" : "timeTableButtonNotTaken"} onClick={() => buttonCallback(time, times, setTimes)}>  {time.time}</button></div>)}
        </div>
    )
}



export default Timetable
