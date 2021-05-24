import '../style/Schedule.css'
import Calendar from 'react-calendar'
import '../style/Calendar.css'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.production.min'
import Timetable from './Timetable.js'
function Schedule() {

    const [calendarValue, onCalendarValueChange] = useState(new Date())

    return (

        <div className="schedule">
            <div className="header">
                <h3>Henma nails ajanvaraus</h3>
            </div>
            <div className="scheduleContainer">

                <div className="calendarContainer">


                    <Calendar
                        onChange={onCalendarValueChange}
                        value={calendarValue}
                    />
                    <button className="submitButton">
                        Varaa aika
                    </button>
                </div>
                <Timetable calendarValue={calendarValue}></Timetable>
            </div>
        </div>
    );
}

export default Schedule