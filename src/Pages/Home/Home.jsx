import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div className="border-2 border-blue-600">
            <Helmet>
                <title>NiN Washing | Home</title>
            </Helmet>
            Home Page
            <h1 className="">hello world </h1>
            <h2>hello world </h2>
            <h3>hello world </h3>
            <h4>hello world </h4>
            <h5>hello world </h5>
            <h6>hello world </h6>
        </div>
    );
};

export default Home;