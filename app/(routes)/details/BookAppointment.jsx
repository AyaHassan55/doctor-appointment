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
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Api from '@/app/_utils/Api'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
export default function BookAppointment({ doctorDetails }) {
  const [date, setDate] = useState(new Date())
  const [timeSlots, setTimeSlots] = useState([])
  const [selectedTime, setSelectedTime] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  //  1- book appointment
  const { user } = useKindeBrowserClient();
  //  2- book appointment
  const bookingAppointment = () => {
     if (!user) {
    setOpenLoginDialog(true);
    return;
  }
    setLoading(true);
    const data = {
      data: {
        userName: user.given_name + ' ' + user.family_name,
        email: user.email,
        date: date,
        time: selectedTime,
        doctor: doctorDetails.documentId
      }
    }
    Api.bookAppointment(data).then((res) => {
      console.log('Appointment booked successfully:', res.data);
      toast("Appointment booked successfully.");
      router.push('/my-booking')

    }).catch((err) => {
      console.log('Error booking appointment:', err);
      toast.error("Error booking appointment.")
    }).finally(() => setLoading(false));
  }

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

            <div className="grid grid-cols-3 gap-3 max-h-75 overflow-y-auto pr-2">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTime(time)}
                  className={cn(
                    "border rounded-full py-2 text-sm transition",
                    selectedTime === time
                      ? "bg-[#149066] text-blak border-[#149066]"
                      : "hover:border-[#149066] hover:text-[#149066]"
                  )}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
          <Dialog open={openLoginDialog} onOpenChange={setOpenLoginDialog}>
  <DialogContent className="max-w-md text-center">
    <DialogHeader>
      <DialogTitle className="text-xl font-bold text-red-600">
        Login Required
      </DialogTitle>
    </DialogHeader>

    <p className="text-muted-foreground mt-2">
      You must be logged in to book an appointment.
    </p>

    <div className="flex justify-center gap-3 mt-6">
      <Button
        variant="outline"
        onClick={() => setOpenLoginDialog(false)}
      >
        Cancel
      </Button>

      <Button
        onClick={() => router.push('/api/auth/login')}
        className="bg-primary text-white"
      >
        Login
      </Button>
    </div>
  </DialogContent>
</Dialog>

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <Button
            onClick={() => bookingAppointment()}
            disabled={!(date && selectedTime) || loading}
            className=" text-black cursor-pointer"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Confirm Appointment"
            )}

          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
