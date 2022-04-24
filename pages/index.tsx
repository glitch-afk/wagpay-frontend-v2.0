import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import First from "../components/landing/first";
import Second from "../components/landing/second";
import Third from "../components/landing/third";
import Fourth from "../components/landing/fourth";
import Footer from "../components/footer";

const Home: NextPage = () => {
    return (
        <>
            <Navbar />
            <div className="2xl:container 2xl:mx-auto lg:px-7 sm:px-6 py-6 px-4">
                <First />
            </div>
            <div className="w-full relative">
                <svg
                    width="full"
                    height="full"
                    viewBox="0 0 1440 1175"
                    className="absolute top-0 right-0 left-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <ellipse
                        cx="720"
                        cy="587.5"
                        rx="587.5"
                        ry="982"
                        transform="rotate(-90 720 587.5)"
                        fill="url(#paint0_linear_786_1405)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_786_1405"
                            x1="151.5"
                            y1="660.999"
                            x2="1072.68"
                            y2="731.336"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#B1D9FF" stopOpacity="0.01" />
                            <stop
                                offset="0.0001"
                                stopColor="#B1D9FF"
                                stopOpacity="0"
                            />
                            <stop
                                offset="1"
                                stopColor="#E8E9FF"
                                stopOpacity="0.24"
                            />
                        </linearGradient>
                    </defs>
                </svg>
                <Second />
            </div>
            <Third />
            <div className="2xl:container 2xl:mx-auto lg:px-7 sm:px-6 py-6 px-4">
                <Fourth />
                <Footer />
            </div>
        </>
    );
};

export default Home;
