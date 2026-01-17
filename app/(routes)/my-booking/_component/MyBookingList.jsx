import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion' // لازم تثبتي framer-motion: npm i framer-motion

export default function MyBookingList({ bookingList }) {
  // Empty state
  if (!bookingList || bookingList.length === 0) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-20 text-center text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Image
            src="/empty.svg" 
            width={120}
            height={120}
            alt="No bookings"
          />
        </motion.div>
        <motion.h3
          className="text-lg font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          No Bookings Yet
        </motion.h3>
        <motion.p
          className="text-sm mt-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          You don’t have any appointments booked yet. Start exploring and book your first appointment!
        </motion.p>
        <motion.button
          className="mt-4 px-4 py-2 bg-lime-600 text-white rounded-lg shadow hover:bg-lime-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.button>
      </motion.div>
    )
  }

  // List of bookings
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {bookingList.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
        >
          {item?.doctor?.image?.[0]?.url ? (
            <Image
              src={`http://localhost:1337${item.doctor.image[0].url}`}
              width={80}
              height={80}
              alt="Doctor"
              unoptimized
              className=" w-80 h-80 border"
            />
          ) : (
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">
              No Image
            </div>
          )}

          <div className="mt-2 text-center flex flex-col gap-0.5">
            <h3 className="text-sm font-semibold text-gray-800">
              {item?.doctor?.name}
            </h3>
            <p className="text-xs text-gray-500">📍 {item?.doctor?.address}</p>
            <p className="text-xs text-gray-500">📞 {item?.doctor?.phone}</p>
            <p className="text-xs text-lime-600 font-medium mt-1">
              ⏰ {new Date(item?.date).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
