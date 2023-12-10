import ProductsCards from "../components/ProductsCards";
import ProductsCarousel from "../components/ProductsCarousel";
import ProductsItems from "../components/ProductsItems";
import ProductsServices from "../components/ProductsServices";

const Products = () => {
  return (
    <div className="flex flex-col gap-8 mt-4 p-8">
      <ProductsCarousel />
      <ProductsCards />
      <ProductsItems />
      <ProductsServices />
    </div>
  );
};

export default Products;
