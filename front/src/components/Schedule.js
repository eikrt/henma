import '../style/Schedule.css'
import Calendar from 'react-calendar'
import '../style/Calendar.css'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.production.min'
import Timetable from './Timetable.js'
const submitCallback = (calendarValue, times) => {

    const content = { calendarValue, times }
    alert("Aikasi on varattu! :)")
    // send content to api
}
function Schedule() {

    const [calendarValue, setCalendarValue] = useState(new Date())
    const [times, setTimes] = useState([{ time: '8-9', taken: false, index: 1 }, { time: '9-10', taken: false, index: 2 }, { time: '10-11', taken: false, index: 3 }, { time: '11-12', taken: false, index: 4 }, { time: '12-13', taken: false, index: 5 }, { time: '13-14', taken: false, index: 6 }, { time: '14-15', taken: false, index: 7 }, { time: '15-16', taken: false, index: 8 }])

    return (

        <div className="schedule">
            <div className="header">
                <h3>Henma nails ajanvaraus</h3>
            </div>
            <div className="scheduleContainer">

                <div className="calendarContainer">


                    <Calendar
                        onChange={setCalendarValue}
                        value={calendarValue}
                    />
                    <button className="submitButton" onClick={() => submitCallback(calendarValue, times)}>
                        Varaa aika
                    </button>
                </div>
                <Timetable calendarValue={calendarValue} times={times} setTimes={setTimes}></Timetable>
            </div>
        </div>
    );
}

export default Schedule