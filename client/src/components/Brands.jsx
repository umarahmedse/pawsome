import { resellerLogo } from "../data/data";
const Brands = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="inline-flex item-center justify-center">
          <h1 className="text-gray-500 font-semibold font-rubik text-2xl">
            In Partnership With
          </h1>
        </div>
        <div className="flex items-center justify-center flex-wrap relative gap-20 overflow-visible">
          {resellerLogo.map((item, key) => (
            <img
              src={item.image}
              alt={`${key} logo`}
              key={key}
              className="w-[150px] object-contain filter grayscale opacity-80 hover:filter-none hover:grayscale-0 hover:cursor-pointer"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Brands;
