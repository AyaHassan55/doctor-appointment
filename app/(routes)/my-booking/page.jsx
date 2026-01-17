"use client"

import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import MyBookingList from './_components/MyBookingList'
import Api from '@/app/_utils/Api'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import MyBookingList from './_component/MyBookingList'

function MyBooking() {

  const [bookingList, setBookingList] = useState([]);
  const { user } = useKindeBrowserClient()
  useEffect(() => {
    if (user) {

      userBookingList({ email: user.email })
    }}, [user])
  const userBookingList =()=>{
    Api.myBookingList(user?.email).then((res)=>{
      console.log("my booking list",res.data)
      setBookingList(res.data.data)
    }).catch((err)=>{
      console.log("error in my booking list",err)
    })
  }

 const filterBookingList = (type) => {
  return bookingList.filter(item => {
    return type === 'upcoming'
      ? new Date(item.date) >= new Date()
      : new Date(item.date) < new Date()
  })
}

  return (
    <div className='px-4 md:px-10 '>
      <h2 className='font-bold text-2xl'>My Booking</h2>



      <Tabs defaultValue="upcoming" className="w-full mt-8">
        {/* Tabs Header */}
        <TabsList
        
          className="w-full grid grid-cols-2 bg-muted rounded-xl p-1" >
          <TabsTrigger
            value="upcoming"
            className="cursor-pointer bg-amber-600
        w-full 
        rounded-lg 
        transition-all 
        duration-300 
       
      "
          >
            Upcoming
          </TabsTrigger>

          <TabsTrigger
            value="past"
            className="
        w-full 
        rounded-lg 
        transition-all 
        duration-300 
        data-[state=active]:bg-white
        data-[state=active]:shadow
        data-[state=active]:text-lime-700
      "
          >
            Past
          </TabsTrigger>
        </TabsList>

        {/* Upcoming Content */}
        <TabsContent value="upcoming" className="mt-6">
          <MyBookingList updateAppointment={()=>userBookingList()} past={false} bookingList={filterBookingList('upcoming')} />
        </TabsContent>

        {/* Past Content */}
        <TabsContent value="past" className="mt-6">
          <MyBookingList updateAppointment={()=>userBookingList()} past={true} bookingList={filterBookingList('past')}/>
        </TabsContent>
      </Tabs>



    </div>
  )
}

export default MyBooking