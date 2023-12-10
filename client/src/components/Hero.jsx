import heroImg from "../assets/img/hero-img.png";
const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full flex-col 800px:flex-row mt-2 800px:mt-[3rem]">
        <div className="flex flex-col justify-between p-8 gap-4 bg-hero-left bg-contain bg-no-repeat bg-center w-full">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
            Pawsome – Where Every Pet is a Paw-some Friend!
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-black">
            Explore a world of wagging tails, playful purrs, and unconditional
            love. Find your perfect companion and embark on a journey filled
            with joy, laughter, and endless cuddles. Your new furry friend is
            just a pawprint away at Pawsome!
          </p>
          <div className="400px:flex items-center justify-start gap-4">
            <a
              href="#"
              className="w-full 400px:w-auto  inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-100"
            >
              Learn more
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="w-full 400px:w-auto inline-flex mt-2 400px:mt-0 justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Watch video
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <img
            src={heroImg}
            alt="Hero image for pawsome"
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
