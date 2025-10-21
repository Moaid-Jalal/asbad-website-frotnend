import Image from "next/image"


export const HomeThirdCom = () => {
    return (
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
        <div className="flex items-start justify-center gap-16">
          <div className="flex-1 flex justify-center items-start">
            <div className="relative">
              <Image
                src="/home-image-1.jpg"
                alt="Hero"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
          <div className="flex-1 max-w-2xl px-8">
              <div className="">
                  <h1 className="text-4xl font-bold text-black mb-10">
                      ABOUT
                  </h1>
                  <div className="space-y-10">
                    <p className="leading-relaxed text-black">
At CENTRADE L.L.C-FZ, we believe in transforming challenges into opportunities. Our consulting approach focuses on delivering practical, data-driven insights that create
                    </p>

                    <p className="leading-relaxed text-black">
At CENTRADE L.L.C-FZ, we believe in transforming challenges into opportunities. Our consulting approach focuses on delivering practical, data-driven insights that create
                    </p>

                    <button className="cursor-pointer text-sm bg-red-600 hover:bg-red-700 text-white px-8 py-3 h-14 w-64 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        BUILD YOUR WORLD
                    </button>
                  </div>
              </div>
          </div>
        </div>
      </main>
    )
}