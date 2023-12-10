import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="flex items-center py-20 bg-gray-100 font-poppins dark:bg-gray-800">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
            <div className="flex flex-wrap">
              <div className="w-full px-4 md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover w-full mb-6 rounded-lg h-80"
                />
                <img
                  src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover w-full rounded-lg h-80"
                />
              </div>
              <div className="w-full px-4 md:w-1/2 xl:mt-11">
                <img
                  src="https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover w-full mb-6 rounded-lg h-80"
                />
                <img
                  src="https://images.unsplash.com/photo-1627915009986-6639e924b297?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBldHN8ZW58MHx8MHx8fDA%3D"
                  alt=""
                  className="object-cover w-full rounded-lg h-80"
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
            <span className="text-sm font-semibold text-yellow-500 dark:text-yellow-400 font-rubik">
              Why choose us
            </span>
            <h2 className="mt-2 mb-4 text-2xl font-vans text-gray-700 dark:text-gray-300">
              Awesome services in a blink!{" "}
            </h2>
            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
              Pawsome is not just a pet store; it's a community of animal
              lovers. We stock a curated range of premium pet products, from
              nutritious food to stylish accessories. Our knowledgeable staff is
              always on hand to provide expert advice and help you find the
              perfect items for your pet&apos;s needs. Whether you&apos;re a
              seasoned pet owner or a first-time adopter, Pawsome is here to
              support you on your journey. Join us in creating a world where
              every pet is treated with love, care, and respect. Visit Pawsome
              today and experience the joy of a happy and healthy pet!
            </p>
            <ul className="mb-10"></ul>
            <Link
              to={"/"}
              className="px-4 py-2 text-gray-100 bg-yellow-500 rounded-md dark:bg-yellow-400 dark:hover:bg-yellow-500 hover:bg-yellow-600"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
