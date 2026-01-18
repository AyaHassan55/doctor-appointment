 export default function DoctorSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-5 animate-pulse">
      {/* image */}
      <div className="h-56 w-full bg-gray-300 rounded-xl mb-4"></div>

      {/* rating */}
      <div className="h-4 w-24 bg-gray-300 rounded mb-3"></div>

      {/* name */}
      <div className="h-5 w-32 bg-gray-300 rounded mb-2"></div>

      {/* category */}
      <div className="h-4 w-20 bg-gray-300 rounded mb-4"></div>

      {/* info lines */}
      <div className="space-y-2 mb-4">
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
      </div>

      {/* button */}
      <div className="h-10 w-full bg-gray-300 rounded-md"></div>
    </div>
  )
}
