export const HomeSixthCom = () => {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* First Card */}
                <div className="bg-[#F6F6F6] p-8 rounded-lg shadow-lg text-center">
                    <div className="flex justify-center mb-6">
                        <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
                    <p className="text-gray-600">
                        Experience blazing-fast performance with our optimized solutions that deliver results in record time.
                    </p>
                </div>

                {/* Second Card */}
                <div className="bg-[#F6F6F6] p-8 rounded-lg shadow-lg text-center">
                    <div className="flex justify-center mb-6">
                        <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assured</h3>
                    <p className="text-gray-600">
                        Every project undergoes rigorous quality checks to ensure exceptional standards and client satisfaction.
                    </p>
                </div>

                {/* Third Card - Centers on medium screens due to grid layout */}
                <div className="bg-[#F6F6F6] p-8 rounded-lg shadow-lg text-center md:col-span-2 lg:col-span-1 mx-auto max-w-md">
                    <div className="flex justify-center mb-6">
                        <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Support</h3>
                    <p className="text-gray-600">
                        Get comprehensive support from our team of experts who are dedicated to your success every step.
                    </p>
                </div>
            </div>

            
            <div className="mt-16 flex items-center justify-center">
                <button className="cursor-pointer text-sm bg-red-600 hover:bg-red-700 text-white px-8 py-3 h-14 max-w-[650px] w-full mx-2 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    BUILD YOUR WORLD
                </button>
            </div>
        </main>
    )
}