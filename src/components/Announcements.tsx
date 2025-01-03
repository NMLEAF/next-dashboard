const Announcements = () => {
  return (
    <div className="rounded-md bg-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-xl">Announcements</h1>
        <span className="text-xs text-gray-400">View all</span>
      </div>

      <div className="flex flex-col mt-4 gap-4">
        <div className="bg-eSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600">ስለ ትማሪዎች ዩኒፎርም</h1>
            <span className="text-xs text-gray-400 bg-white p-1 rounded-md">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            ተማሪዎችህ ከነገ ጀምሮ ዩኒፎርም ለብሰው እንዲመቱ በጥብቅ እናሳስባለን
          </p>
        </div>

        {/* <div className="bg-eYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600">Lorem ipsum, dolor</h1>
            <span className="text-xs text-gray-400 bg-white p-1 rounded-md">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            ipsum?
          </p>
        </div>

        <div className="bg-ePurpleLight rounded-md p-4 adf">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600">Lorem ipsum, dolor</h1>
            <span className="text-xs text-gray-400 bg-white px-2 py-1 rounded-md">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            ipsum?
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Announcements;
