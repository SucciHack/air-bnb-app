import { CategoryBar } from "@/components/category-bar";
import { Navbar } from "@/components/nav-bar";
import ProductContainer from "@/components/product-card-container";

export default function Home() {
  return (
    <>
    <Navbar/>
    <CategoryBar/>
    <ProductContainer/>
    </>
  );
}
