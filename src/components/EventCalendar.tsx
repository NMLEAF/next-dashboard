"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Special event",
    time: "12:00 PM - 2:00 PM",
    description: "Tomorrow we will have a special event.",
  },
  // {
  //   id: 2,
  //   title: "Lorem ipsum",
  //   time: "12:00 PM - 2:00 PM",
  //   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  // },
  // {
  //   id: 3,
  //   title: "Lorem ipsum",
  //   time: "12:00 PM - 2:00 PM",
  //   description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  // },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white rounded-lg p-4">
      <Calendar onChange={onChange} value={value} />

      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image
          src="/moreDark.png"
          alt="moreDark"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-eSky even:border-t-ePurple "
            key={event.id}
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-xs text-gray-300">{event.time}</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
             {event.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
