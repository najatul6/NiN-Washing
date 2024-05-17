import Button from "../Shared/Button/Button";

const GetAQuote = () => {
  return (
    <div className="w-full p-2 md:p-5 bg-white space-y-5">
      <h2 className="text-xl md:text-2xl font-bold text-deep-blue">
        Get A Free Quote
      </h2>
      <form className="flex flex-col gap-6">
        <div className="flex justify-center items-center gap-6">
          <input
            type="text"
            name=""
            placeholder="First Name"
            className="w-full bg-white text-deep-blue shadow-inner !border-deep-blue py-2 px-3 input rounded-none"
          />
          <input
            type="text"
            name=""
            placeholder="Last Name"
            className="w-full bg-white text-deep-blue shadow-inner border-deep-blue py-2 px-3 input rounded-none"
          />
        </div>
        <div>
          <input
            type="email"
            name=""
            placeholder="Email Address"
            className="w-full bg-white text-deep-blue shadow-inner border-deep-blue py-2 px-3 input rounded-none"
          />
        </div>
        <div>
          <textarea
            name=""
            placeholder="Your Message"
            className="w-full h-24 bg-white text-deep-blue shadow-inner border-deep-blue py-2 px-3 input rounded-none"
          ></textarea>
        </div>
        <div>
          <button type="submit">
            <Button
              btnText="send Message"
              extraClass="bg-deep-blue px-2 py-1 border-2 text-white hover:text-white-coffee hover:bg-transparent hover:border-white-coffee"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetAQuote;
