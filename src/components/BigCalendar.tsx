"use client";
import { Calendar, momentLocalizer, Views, View } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useEffect, useState } from 'react'
 
const localizer = momentLocalizer(moment)

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const handleOnChangeView = (selectedview: View) => {
    setView(selectedview);
  };


  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      defaultDate={new Date(2024, 10, 28)} 
      min={new Date(0, 0, 0, 8, 0, 0)}
      max={new Date(0, 0, 0, 17, 0, 0)}
    
    />
  );
}

export default BigCalendar