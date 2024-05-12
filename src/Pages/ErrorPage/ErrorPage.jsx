import { Link } from "react-router-dom";
import errorImage from "../../assets/404.svg";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen border-2 border-y-deep-blue relative">
      <img
        src={errorImage}
        alt="404"
        className="w-full h-screen items-center justify-center"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 text-white-coffee flex flex-col sm:gap-32 lg:gap-40 justify-center items-center">
        <div className="flex flex-col gap-2 justify-center items-center mb-5">
          <h1 className="lg:text-5xl ">404</h1>
          <h2 className="">Page Not Found</h2>
        </div>
        <Link
          to="/"
          className="btn outline rounded-full p-2 flex justify-center items-center text-xl animate-bounce hover:text-white"
        >
          &laquo; Back to Home
        </Link>
      </div>

    </div>
  );
};

export default ErrorPage;
