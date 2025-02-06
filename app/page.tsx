
import { fetchedCategories } from "@/actions/action";
import CategoryComp from "@/components/category-comp";
import { Navbar } from "@/components/nav-bar";
import ProductContainer from "@/components/product-card-container";

export default async function page() {
  const categories = await fetchedCategories() || []
  console.log(categories)
  return (
    <div>
    <Navbar/>
    <CategoryComp categories = {categories}/>
    <ProductContainer/>
    </div>
  );
}
