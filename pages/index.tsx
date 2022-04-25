import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import First from "../components/landing/first";
import Second from "../components/landing/second";
import Third from "../components/landing/third";
import Fourth from "../components/landing/fourth";
import Footer from "../components/footer";

const Home: NextPage = () => {
    return (
        <div className="bg-river-styx">
            <Navbar />
            <div className="2xl:container  2xl:mx-auto lg:px-7 sm:px-6 py-6 px-4">
                <First />
            </div>

            <div className="w-full relative">
                <svg
                    width="1440"
                    height="1175"
                    viewBox="0 0 1440 1175"
                    className="w-full hidden xl:block absolute top-0 right-0 left-0"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <ellipse
                        cx="715"
                        cy="587.5"
                        rx="587.5"
                        ry="982"
                        transform="rotate(-90 715 587.5)"
                        fill="url(#paint0_linear_817_3651)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_817_3651"
                            x1="146.5"
                            y1="660.999"
                            x2="1067.68"
                            y2="731.336"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#B1D9FF" stopOpacity="0.01" />
                            <stop
                                offset="1"
                                stopColor="#E8E9FF"
                                stopOpacity="0.04"
                            />
                        </linearGradient>
                    </defs>
                </svg>

                <Second />
            </div>
            <Third />
            <div className="2xl:container bg-river-styx 2xl:mx-auto lg:px-7 sm:px-6 py-6 px-4">
                <Fourth />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
