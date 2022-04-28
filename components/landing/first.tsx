import Image from "next/image";

const First = () => {
    return (
        <div className="relative bg-dark_white h-screen overflow-hidden mt-10">
            <div
                className="hidden lg:block lg:absolute lg:inset-0"
                aria-hidden="true"
            >
                <svg
                    className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
                    width={640}
                    height={784}
                    fill="none"
                    viewBox="0 0 640 784"
                >
                    <defs>
                        <pattern
                            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                            x={118}
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
                        y={72}
                        width={640}
                        height={640}
                        className="text-gray-50"
                        fill="currentColor"
                    />
                    <rect
                        x={118}
                        width={404}
                        height={784}
                        fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
                    />
                </svg>
            </div>
            <main className="mt-16 mx-auto max-w-8xl px-4 sm:mt-24 sm:px-24 lg:mt-24">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <h1>
                            <span className="mt-1 mb-6 block text-5xl font-cerebri tracking-tight font-extrabold sm:text-5xl xl:text-7xl">
                                <span className="block text-river-styx">
                                    Powering your
                                </span>
                                <span className="inline-block 2xl:my-2 text-bright-greek">
                                    Finances&nbsp;
                                </span>
                                <span className="inline-block text-river-styx">
                                    with next
                                </span>
                                <span className="block text-river-styx">
                                    chapter of internet
                                </span>
                            </span>
                        </h1>
                        <p className="mt-3 mb-8 text-base font-avenir text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            A payment solution that simplifies payment
                            acceptance for the next chapter of the internet.
                        </p>
                        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                            <button
                                type="button"
                                className="mt-3 btn font-avenir w-full px-8 py-4 cursor-pointer border-transparent text-base text-white bg-bright-greek shadow-sm focus:outline-none sm:mt-0 ml-2 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                        <svg
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                            width={640}
                            height={784}
                            fill="none"
                            viewBox="0 0 640 784"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                                    x={118}
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
                                y={72}
                                width={640}
                                height={640}
                                className="text-gray-50"
                                fill="currentColor"
                            />
                            <rect
                                x={118}
                                width={404}
                                height={784}
                                fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                            />
                        </svg>
                        <div className="relative mx-auto w-full rounded shadow-lg lg:max-w-md">
                            <div className="relative block w-full bg-river-styx rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2">
                                <Image
                                    className="w-full"
                                    src="https://images.unsplash.com/photo-1650346910623-3a0d9ee1f2ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80"
                                    width="100%"
                                    height="100%"
                                    layout="responsive"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default First;
