export const HomeSeventhCom = () => {
    return (
        <main className="mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-5xl text-black mb-8">
                Partners
            </h1>
            <h2 className="text-3xl text-gray-600 mb-16">
                <span>Most calendars are designed for teams.</span>
                <br/>
                <span>Slate is designed for freelancers</span>
            </h2>

            {/* Scrolling logos section */}
            <div className="relative overflow-hidden bg-gray-50 py-8 rounded-lg">
                <div className="flex animate-scroll space-x-16 items-center">
                    {/* Logo 1 */}
                    <div className="flex-shrink-0 w-32 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        LOGO 1
                    </div>

                    {/* Logo 2 */}
                    <div className="flex-shrink-0 w-32 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        LOGO 2
                    </div>

                    {/* Logo 3 */}
                    <div className="flex-shrink-0 w-32 h-16 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        LOGO 3
                    </div>

                    {/* Logo 4 */}
                    <div className="flex-shrink-0 w-32 h-16 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        LOGO 4
                    </div>

                    {/* Duplicate logos for seamless scrolling */}
                    <div className="flex-shrink-0 w-32 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        LOGO 1
                    </div>

                    <div className="flex-shrink-0 w-32 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        LOGO 2
                    </div>

                    <div className="flex-shrink-0 w-32 h-16 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        LOGO 3
                    </div>

                    <div className="flex-shrink-0 w-32 h-16 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        LOGO 4
                    </div>
                </div>
            </div>
        </main>
    )
}