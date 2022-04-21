import Image from "next/image";

const First = () => {
    return (
        <div className="relative bg-white h-screen overflow-hidden">
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
            <main className="mt-16 mx-auto max-w-8xl px-4 sm:mt-24 sm:px-24 lg:mt-32">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <h1>
                            <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                                Coming soon
                            </span>
                            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                                <span className="block text-gray-900">
                                    Powering Your
                                </span>
                                <span className="inline-block text-bright-greek">
                                    Finances
                                </span>
                                <span className="inline-block text-gray-900">
                                    With Next
                                </span>
                                <span className="block text-gray-900">
                                    Chapter Of Internet
                                </span>
                            </span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            A payment solution that simplifies payment
                            acceptance for the next chapter of the internet.
                        </p>
                        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                            <button
                                type="submit"
                                className="mt-3 w-full px-6 py-3 border cursor-pointer border-transparent text-base font-medium rounded-md text-white bg-bright-greek shadow-sm focus:outline-none sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
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
                        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            <button
                                type="button"
                                className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="sr-only">
                                    Watch our video to learn more
                                </span>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <Image
                                    className="w-full"
                                    src="https://images.unsplash.com/photo-1650346910623-3a0d9ee1f2ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80"
                                    width="100%"
                                    height="100%"
                                    layout="responsive"
                                    objectFit="cover"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default First;
