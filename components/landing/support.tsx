const Support = () => {
    return (
        <div className="relative my-24 sm:mt-32 sm:py-16">
            <div aria-hidden="true" className="hidden sm:block">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
                <svg
                    className="absolute top-8 left-1/2 -ml-3"
                    width={404}
                    height={392}
                    fill="none"
                    viewBox="0 0 404 392"
                >
                    <defs>
                        <pattern
                            id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                x={0}
                                y={0}
                                width={4}
                                height={4}
                                className="text-gray-200"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={404}
                        height={392}
                        fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
                    />
                </svg>
            </div>
            <div className="mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl">
                <div className="relative  px-6 py-10 bg-indigo-500 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                    >
                        <svg
                            className="absolute inset-0 h-full w-full"
                            preserveAspectRatio="xMidYMid slice"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 1463 360"
                        >
                            <path
                                className="text-bright-greek text-opacity-40"
                                fill="currentcolor"
                                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                            />
                            <path
                                className="text-bright-greek text-opacity-40"
                                fill="currentcolor"
                                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                            />
                        </svg>
                    </div>
                    <div className="relative">
                        <div className="sm:text-center">
                            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                                Need Support We&rsquo;re here to help
                            </h2>
                            <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-100">
                                We are on mission to solve every problem related
                                to web3 payment infrastructure if you want to
                                get on call and help us solve problems . do get
                                in touch
                            </p>
                        </div>
                        <div className="flex items-center justify-center mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                            <div className="mt-4 sm:mt-0 sm:ml-3">
                                <button
                                    type="submit"
                                    className="block w-full  border border-transparent px-5 py-3 btn1 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-500 sm:px-10"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
