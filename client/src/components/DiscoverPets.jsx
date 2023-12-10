import { discoverPetData } from "../data/data";
const DiscoverPets = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 mt-6">
        <div className="inline-flex item-center justify-center">
          <h1 className="text-yellow-500 font-semibold font-rubik text-2xl">
            Discover Your Perfect Pet
          </h1>
        </div>
        <div className="flex items-center justify-center flex-wrap relative gap-4">
          {discoverPetData.map((item, key) => (
            <div
              className="flex flex-col items-center justify-center gap-2 p-5 w-[200px] min-h-[280px] rounded-md shadow-xl hover:cursor-pointer hover:bg-yellow-300 hover:text-black border-black/10 border-[2px]  transition-all hover:scale-[1.05] duration-500"
              key={key}
            >
              <img src={item.image} alt={item.alt} className="w-[125px]" />
              <h1 className="font-semibold text-[15px] self-start">
                {item.title}
              </h1>
              <p className="text-[12px] self-center">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DiscoverPets;
