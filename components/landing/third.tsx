/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-constant-condition */
/* eslint-disable react/button-has-type */
const Third = () => {
    return (
        <div
            id="claim"
            className=" bg-bright-greek pb-16 lg:relative lg:pb-0 lg:my-20"
        >
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                <div className="relative lg:-my-8">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-1/2 bg-river-styx lg:hidden"
                    />
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                        <div className="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden rounded shadow-xl lg:h-full">
                            <div className="relative bg-river-styx object-cover lg:h-full lg:w-full">
                                <div className="z-50 flex h-full w-full flex-col items-center justify-center space-y-5 bg-[#6C7EE1]/25 p-5">
                                    <h1 className=" py-3 px-4 font-cerebri text-3xl font-bold text-white">
                                        Claim Username
                                    </h1>
                                    <input
                                        type="email"
                                        placeholder="example@email.com"
                                        className="w-full font-avenir rounded border-0 py-4 pl-4 text-sm text-white bg-river-styx font-semibold opacity-80 outline-none"
                                    />
                                    <div className="flex w-full justify-between rounded">
                                        <input
                                            type="text"
                                            placeholder="@username"
                                            className="w-full font-avenir rounded border-0 py-4 pl-4 text-white text-sm font-semibold bg-river-styx opacity-80 outline-none"
                                        />
                                        <button className="w-1/3 font-avenir rounded bg-bright-greek py-3 px-4 font-medium text-white shadow hover:bg-indigo-700 focus:outline-none">
                                            Check
                                        </button>
                                    </div>
                                    {true ? (
                                        <button className="border-3 flex w-full items-center bg-white justify-between rounded border border-river-styx p-3  font-semibold">
                                            <span className="text-river-styx font-avenir">
                                                Connect Ethereum Wallet
                                            </span>
                                            <img
                                                src=""
                                                alt=""
                                                className="items-end"
                                            />
                                        </button>
                                    ) : (
                                        <p className="w-20 truncate text-center lg:w-full">
                                            eth
                                        </p>
                                    )}
                                    {true ? (
                                        <button className="border-3 font-avenir flex w-full text-river-styx bg-white items-center justify-between rounded border border-river-styx p-3  font-semibold">
                                            Connect Sol Wallet
                                            <img src="/sol.png" alt="" />
                                        </button>
                                    ) : (
                                        <p className="w-20 truncate text-center lg:w-full">
                                            Sol
                                        </p>
                                    )}
                                    <button className="w-full font-avenir rounded bg-bright-greek py-3 px-4 font-medium text-white shadow  hover:bg-indigo-700 focus:outline-none">
                                        Claim
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                        <blockquote>
                            <div>
                                <p className="mt-6 font-cerebri text-2xl font-medium text-white">
                                    WagPay username is a step to create your
                                    store / pages and start accepting payments
                                    in multiple cryptocurrencies
                                </p>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Third;
