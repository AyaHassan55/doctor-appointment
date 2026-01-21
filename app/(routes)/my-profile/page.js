'use client'

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { User, Mail, Phone, MapPin, Pencil } from "lucide-react"

export default function MyProfile() {
  const { user } = useKindeBrowserClient()

  const getFullName = () => {
    return `${user?.given_name ?? ""} ${user?.family_name ?? ""}`
  }

  const getInitials = () => {
    return `${user?.given_name?.[0] ?? ""}${user?.family_name?.[0] ?? ""}`.toUpperCase()
  }

  return (
    <div className="px-4 md:px-60 mt-26 mb-30">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">My Profile</h1>
        <p className="text-muted-foreground">
          Manage your personal information
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-3xl shadow p-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-2xl bg-[#138d75] text-white flex items-center justify-center text-3xl font-semibold">
              {getInitials()}
            </div>

            {/* Name & Email */}
            <div>
              <h2 className="text-2xl font-semibold">
                {getFullName()}
              </h2>
              <p className="text-gray-500">
                {user?.email}
              </p>
            </div>
          </div>

          {/* Edit Photo */}
          <button className="flex items-center gap-2 border border-[#138d75] text-[#138d75] px-4 py-2 rounded-xl hover:bg-[#138d75] hover:text-white transition">
            <Pencil className="w-4 h-4" />
            Edit Photo
          </button>
        </div>

        <hr className="my-8" />

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Full Name */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <User className="w-4 h-4 text-[#138d75]" />
              Full Name
            </label>
            <div className="bg-gray-50 border rounded-xl px-4 py-3">
              {getFullName()}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Mail className="w-4 h-4 text-[#138d75]" />
              Email Address
            </label>
            <div className="bg-gray-50 border rounded-xl px-4 py-3">
              {user?.email}
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Phone className="w-4 h-4 text-[#138d75]" />
              Phone Number
            </label>
            <div className="bg-gray-50 border rounded-xl px-4 py-3 text-gray-400">
              Not provided
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <MapPin className="w-4 h-4 text-[#138d75]" />
              Address
            </label>
            <div className="bg-gray-50 border rounded-xl px-4 py-3 text-gray-400">
              Not provided
            </div>
          </div>

        </div>

        {/* Edit Profile Button */}
        <div className="flex justify-end mt-8">
          <button className="flex items-center gap-2 bg-[#138d75] text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
            <Pencil className="w-4 h-4" />
            Edit Profile
          </button>
        </div>

      </div>
    </div>
  )
}
