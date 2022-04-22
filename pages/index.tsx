import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import First from "../components/landing/first";
import Second from "../components/landing/second";
import Third from "../components/landing/third";
import Footer from "../components/footer";

const Home: NextPage = () => {
    return (
        <div>
            <Navbar />
            <First />
            <Second />
            <Third />
            <Footer />
        </div>
    );
};

export default Home;
