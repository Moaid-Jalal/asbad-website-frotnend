export const HomeSecondCom = () => {
    return (
        <main className="text-black container mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex items-center justify-center gap-16">
            <div className="lex-1 max-w-2xl px-8">
                <h1 className="text-4xl font-bold">
                    Company Snapshot
                </h1>
                <div className="flex items-center gap-4 mt-3">
                    <h2 className="text-2xl text-gray-600 font-light">
                        A quick look at who we are and what we do.
                    </h2>
                    <svg
                        className="cursor-pointer w-8 h-8 text-black transition-transform duration-300 hover:translate-x-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
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
    )
}