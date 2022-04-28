/* eslint-disable no-constant-condition */
/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-img-element */
import Navbar from "../components/Navbar";

const SignUp = () => {
    return (
        <div className="bg-white h-screen w-full">
            <Navbar />
            <div className="max-w-3xl mx-auto h-fit mt-32 sm:px-6 lg:px-8">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-md mx-auto">
                    <div className="mx-auto max-w-base px-4 sm:max-w-3xl lg:h-full lg:p-0">
                        <div className="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden rounded shadow-xl lg:h-full">
                            <div className="relative object-cover bg-[#6C7EE1]/25 lg:h-full lg:w-full">
                                <div className="z-50 flex odd: h-full w-full flex-col items-center justify-center space-y-5 p-5">
                                    <h1 className=" py-3 px-4 font-cerebri text-3xl font-bold text-river-styx">
                                        Claim Username
                                    </h1>
                                    <input
                                        type="email"
                                        placeholder="example@email.com"
                                        className="w-full font-avenir rounded border border-[#abaef8] py-4 pl-4 text-sm text-river-styx bg-white font-base outline-none"
                                    />
                                    <div className="flex w-full justify-between rounded">
                                        <input
                                            type="text"
                                            placeholder="@username"
                                            className="w-full font-avenir rounded border border-[#abaef8]  py-4 pl-4 text-river-styx text-sm font-base bg-white outline-none"
                                        />
                                        <button className="w-1/3 font-avenir bg-bright-greek py-3 px-4 font-medium text-white shadow hover:bg-indigo-700 focus:outline-none">
                                            Check
                                        </button>
                                    </div>
                                    {true ? (
                                        <button className="flex w-full items-center bg-white justify-between border border-[#abaef8] p-3  font-base">
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
                                        <button className="border font-avenir flex w-full text-river-styx bg-white items-center justify-between border-[#abaef8] p-3  font-base">
                                            Connect Sol Wallet
                                            <img src="/sol.png" alt="" />
                                        </button>
                                    ) : (
                                        <p className="w-20 truncate text-center lg:w-full">
                                            Sol
                                        </p>
                                    )}
                                    <button className="w-full font-avenir bg-bright-greek py-4 text-lg px-4 font-medium text-white shadow  hover:bg-indigo-700 focus:outline-none">
                                        Claim
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
