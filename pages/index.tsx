import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import First from "../components/landing/first";
import Second from "../components/landing/second";

const Home: NextPage = () => {
    return (
        <div>
            <Navbar />
            <First />
            <Second />
        </div>
    );
};

export default Home;
