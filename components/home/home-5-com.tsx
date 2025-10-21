export const HomeFifthCom = () => {
  return (
    <main className="text-black max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center justify-center gap-16">
      <div className="flex-1 px-8">
        <h1 className="text-4xl font-bold">
          WHY CHOOSE OUR 
        </h1>
        <div className="flex items-center gap-4 mt-3">
          <h2 className="text-4xl text-gray-600 font-light">
            SERVICES?
          </h2>

          {/* 👇 سهم بخط طويل وأنيق */}
         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 300 50"
            strokeWidth={3}
            stroke="currentColor"
            className="w-36 h-16 text-black hover:translate-x-3 transition-transform duration-300 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              // ← الخط طويل والرأس كبير (مائل أكثر)
              d="M5 25h310m0 0l-35-15m35 15l-35 15"
            />
          </svg>
        </div>
      </div>

      <div className="flex-1 max-w-2xl px-8">
        <p>
          Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>
    </main>
  );
};
