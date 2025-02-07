
import { fetchedCategories, fetchedProperties } from "@/actions/action";
import CategoryComp from "@/components/category-comp";
import ProductContainer from "@/components/product-card-container";

export default async function page() {
  const categories = await fetchedCategories() || []
  const properties  = await fetchedProperties() || []
  return (
    <>
      <div className="w-screen overflow-hidden">
      <CategoryComp categories = {categories}/>
      <ProductContainer properties={properties}/>
    </div>
    </>
  );
}
