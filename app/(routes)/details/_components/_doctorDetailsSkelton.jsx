export default function DoctorDetailsSkeleton() {
  return (
    <div className="lg:col-span-2 animate-pulse">
      <div className="bg-card rounded-2xl shadow-card p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Image Skeleton */}
          <div className="shrink-0">
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl bg-gray-200"></div>
          </div>

          {/* Info Skeleton */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              {/* Name */}
              <div className="h-8 w-2/3 bg-gray-200 rounded mb-3"></div>
              {/* Category */}
              <div className="h-5 w-1/3 bg-gray-200 rounded mb-6"></div>

              {/* Address & Experience */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-gray-200 rounded-lg w-9 h-9"></div>
                  <div className="h-4 w-40 bg-gray-200 rounded"></div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-2 bg-gray-200 rounded-lg w-9 h-9"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
              </div>

              {/* About */}
              <div className="space-y-3 mb-8">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Button Skeleton */}
            <div className="h-12 w-48 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
