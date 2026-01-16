'use client'

import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Calendar } from "@/components/ui/calendar"
import { cn } from '@/lib/utils'

export default function BookAppointment() {
  const [date, setDate] = useState(new Date())
  const [timeSlots, setTimeSlots] = useState([])
  const [selectedTime, setSelectedTime] = useState(null)

  useEffect(() => {
    generateTimeSlots()
  }, [])

  const generateTimeSlots = () => {
    const timeList = []

    for (let i = 10; i <= 12; i++) {
      timeList.push(`${i}:00 AM`, `${i}:30 AM`)
    }

    for (let i = 1; i <= 5; i++) {
      timeList.push(`${i}:00 PM`, `${i}:30 PM`)
    }

    setTimeSlots(timeList)
  }
  const pastDay = (date) => {
    const today = new Date()
    return date < today
  } 
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-3 rounded-full cursor-pointer ">
          Book Appointment
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Book Appointment
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6 mt-4">

          {/* Calendar */}
          <div className=" ">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border p-2 cursor-pointer hover:background-black"
              disabled={pastDay}
            />
          </div>

          {/* Time slots */}
          <div className=''>
            <h3 className="font-semibold mb-3 text-center">Available Time</h3>

            <div className="grid grid-cols-3 gap-3 max-h-[300px] overflow-y-auto pr-2">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTime(time)}
                  className={cn(
                    "border rounded-full py-2 text-sm transition",
                    selectedTime === time
                      ? "bg-lime-600 text-blak border-lime-600"
                      : "hover:border-lime-600 hover:text-lime-600"
                  )}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <Button
            disabled={!(date && selectedTime)}
            className=" text-black cursor-pointer"
          >
            Confirm Appointment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
