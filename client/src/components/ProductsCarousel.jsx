import { bannerData } from "../data/data";

const ProductsCarousel = () => {
  return (
    <div className="w-full carousel gap-4 relative">
      {bannerData.map((item, key) => (
        
          <div className="carousel-item w-full rounded-box " key={key}>
            <img
              src={item.img}
              className="object-contain rounded-[8px] mx-[auto] w-full h-auto "
              alt={item.name}
            />
          </div>
        
      ))}
    </div>
  );
};

export default ProductsCarousel;
