/* eslint-disable react/button-has-type */
/* eslint-disable @next/next/no-img-element */
import Navbar from "../components/Navbar";

const Login = () => {
    return (
        <div className="bg-white h-screen w-full">
            <Navbar />
            <div className="max-w-3xl mx-auto h-fit mt-32 sm:px-6 lg:px-8">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="max-w-md mx-auto">
                    <div className="mx-auto max-w-base px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                        <div className="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden rounded shadow-xl lg:h-full">
                            <div className="relative bg-[#6C7EE1]/25 object-cover lg:h-full lg:w-full">
                                <div className="z-50 flex border h-full w-full flex-col items-center justify-center space-y-5 p-5">
                                    <h1 className=" py-3 px-4 font-cerebri text-3xl font-bold text-river-styx">
                                        Login
                                    </h1>
                                    <input
                                        type="email"
                                        placeholder="example@email.com"
                                        className="w-full font-avenir rounded border border-[#abaef8] py-4 pl-4 text-sm text-river-styx bg-white font-base opacity-80 outline-none"
                                    />
                                    <button className="w-full font-avenir rounded bg-bright-greek py-4 px-4 font-medium text-lg text-white shadow  hover:bg-indigo-700 focus:outline-none">
                                        Login
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

export default Login;
