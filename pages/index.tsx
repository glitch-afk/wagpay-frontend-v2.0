import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import { First, Second, Third, Fourth, Support } from "../components/landing";
import Footer from "../components/footer";

const Home: NextPage = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <First />
            <div className="w-full relative">
                <svg
                    width="full"
                    height="full"
                    viewBox="0 0 1440 1175"
                    fill="none"
                    className="w-full hidden xl:block absolute top-0 right-0 left-0"
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
            <Fourth />
            <Support />
            <Footer />
        </div>
    );
};

export default Home;
