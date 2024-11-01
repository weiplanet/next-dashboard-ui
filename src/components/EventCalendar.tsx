"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Dummy data
const events=[
  {
    id:1,
    title:"Event 1",
    time:"12:00 PM - 2:00 PM",
    description:"Description of event 1"
  },
  {
    id:2,
    title:"Event 2",
    time:"12:00 PM - 2:00 PM",
    description:"Description of event 2"
  },
  {
    id:3,
    title:"Event 3",
    time:"12:00 PM - 2:00 PM",
    description:"Description of event 3"
  }
]

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">        
        <ul>
          {events.map((event) => (
            <div key={event.id} className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple">
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                <span className="text-gray-300 text-xs">{event.time}</span>                
              </div>
                <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventCalendar