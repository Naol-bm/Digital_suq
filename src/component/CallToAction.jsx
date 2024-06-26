import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section id="cta" className="bg-brightRed">
      {/* Flex Container */}
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* Heading */}
        <h2 className="text-5xl font-bold leading-tight text-center text-black md:text-4xl md:text-left">
          Simplify how you Buy things with US!
        </h2>
        {/* Button */}
        <div>
          <Link
            to="/login"
            className="h-[4vh] px-4 text-white bg-green-600 bg-brightRed flex justify-center items-center rounded-[20px] baseline hover:bg-brightRedLight"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
