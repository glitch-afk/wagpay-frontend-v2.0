import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import First from "../components/landing/first";

const Home: NextPage = () => {
    return (
        <div>
            <Navbar />
            <First />
        </div>
    );
};

export default Home;
