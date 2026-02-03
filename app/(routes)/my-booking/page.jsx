"use client"

import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import MyBookingList from './_components/MyBookingList'
import Api from '@/app/_utils/Api'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import MyBookingList from './_component/MyBookingList'
import { useTranslation } from 'react-i18next'
function MyBooking() {
  const {t, i18n} = useTranslation()

  const [bookingList, setBookingList] = useState([]);
  const { user } = useKindeBrowserClient()
  useEffect(() => {
    if (user) {

      userBookingList({ email: user.email }, i18n.language)
    }}, [user, i18n.language])

  const userBookingList =(email , locale)=>{
    Api.myBookingList(user?.email , locale).then((res)=>{
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
    <div className='px-4 md:px-60 mt-26 mb-30'>
      {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t('myAppoint')}
            </h1>
            <p className="text-muted-foreground">
              {t('manageAppointment')}
            </p>
          </div>



      <Tabs defaultValue="upcoming" className="md:w-full ">
        {/* Tabs Header */}
         <TabsList className="w-full mb-6 grid grid-cols-2">
              <TabsTrigger value="upcoming" className="text-base">
                {t('upcoming')} ({bookingList.length})
              </TabsTrigger>
              <TabsTrigger value="past" className="text-base">
                {t('past')} 
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