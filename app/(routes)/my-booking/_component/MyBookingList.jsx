import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import CancelAppointment from './CancelAppointment'
import Api from '@/app/_utils/Api'
import { toast } from 'sonner'
import { CalendarDays, Clock, MapPin } from "lucide-react"
import { useTranslation } from 'react-i18next' 


export default function MyBookingList({ bookingList, past, updateAppointment }) {
  const {t}= useTranslation()
  const onDeleteBooking = (item) => {
    Api.deleteBooking(item.documentId).then(() => {
      toast(t('appointCanceled'))
      updateAppointment()
    })
  }

  //  Empty State
  if (!bookingList || bookingList.length === 0) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-20 text-center text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Image src="/empty.svg" width={120} height={120} alt="No bookings" />
        <h3 className="text-lg font-semibold mt-4">
          {t('noBookings')}
        </h3>
        <p className="text-sm mt-1 max-w-md">
          {t('noAppointBooked')}
        </p>
      </motion.div>
    )
  }

  //  Booking Cards
  return (
    <div className="flex flex-col gap-6">
      {bookingList.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white rounded-2xl p-5 shadow hover:shadow-lg transition"
        >
          {/* Left */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full ">
            {/* Image */}
            <div className="w-full h-40 sm:w-40 sm:h-40 rounded-xl overflow-hidden bg-gray-200">
              {item?.doctor?.image?.[0]?.url && (
                <Image
                  src={`http://localhost:1337${item.doctor.image[0].url}`}
                  width={100}
                  height={100}
                  alt="Doctor"
                  className="object-cover w-full h-full"
                  unoptimized
                />
              )}
            </div>

            {/* Info */}
            <div className='text-center sm:text-left w-full'>
              <h3 className="text-base font-semibold">
                {item?.doctor?.name}
              </h3>

              <p className="text-sm text-[#138d75]">
                {item?.doctor?.Category}
              </p>

              <div className="text-sm text-gray-500 mt-2 space-y-1">
                <div className="flex items-center justify-center sm:justify-start">
                  <CalendarDays className="w-4 h-4 text-[#138d75]" />
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                </div>

                <div className="flex items-center justify-center sm:justify-start">
                  <Clock className="w-4 h-4 text-[#138d75]" />
                  <span>{new Date(item.date).toLocaleTimeString()}</span>
                </div>

                <div className="flex items-center justify-center sm:justify-start">
                  <MapPin className="w-4 h-4 text-[#138d75]" />
                  <span>{item?.doctor?.address}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right */}
          {!past && (

            <div className="w-full flex justify-center sm:justify-end mt-3">
              <CancelAppointment
                cancelClick={() => onDeleteBooking(item)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
